export async function convertPdfToWord(file: File): Promise<string> {
  const apiKey = import.meta.env.VITE_CLOUDCONVERT_API_KEY;
  
  if (!apiKey) {
    throw new Error("Missing VITE_CLOUDCONVERT_API_KEY. Add it to .env or update settings.");
  }

  // 1. Create CloudConvert Job
  const createJobRes = await fetch('https://api.cloudconvert.com/v2/jobs', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tasks: {
        'import-my-file': {
          operation: 'import/upload'
        },
        'convert-my-file': {
          operation: 'convert',
          input_format: 'pdf',
          output_format: 'docx',
          engine: 'office',
          input: 'import-my-file'
        },
        'export-my-file': {
          operation: 'export/url',
          input: 'convert-my-file'
        }
      }
    })
  });

  if (!createJobRes.ok) {
    const err = await createJobRes.text();
    throw new Error(`Failed to create CloudConvert job: ${err}`);
  }

  const jobData = await createJobRes.json();
  const importTask = jobData.data.tasks.find((t: any) => t.name === 'import-my-file');
  
  // 2. Upload file to the provided form URL
  const formData = new FormData();
  for (const [key, value] of Object.entries(importTask.result.form.parameters)) {
    formData.append(key, value as string);
  }
  formData.append('file', file);

  const uploadRes = await fetch(importTask.result.form.url, {
    method: 'POST',
    body: formData
  });

  if (!uploadRes.ok) {
    throw new Error('Failed to upload file to CloudConvert.');
  }

  // 3. Poll for the job completion
  const jobId = jobData.data.id;
  const downloadUrl = await pollJobForExportUrl(jobId, apiKey);
  
  return downloadUrl;
}

export async function convertWordToPdf(file: File): Promise<string> {
  const apiKey = import.meta.env.VITE_CLOUDCONVERT_API_KEY;
  
  if (!apiKey) {
    throw new Error("Missing VITE_CLOUDCONVERT_API_KEY. Add it to .env or update settings.");
  }

  // Exact same pattern as above, but swapped formats
  const createJobRes = await fetch('https://api.cloudconvert.com/v2/jobs', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tasks: {
        'import-my-file': {
          operation: 'import/upload'
        },
        'convert-my-file': {
          operation: 'convert',
          output_format: 'pdf',
          engine: 'office',
          input: 'import-my-file'
        },
        'export-my-file': {
          operation: 'export/url',
          input: 'convert-my-file'
        }
      }
    })
  });

  if (!createJobRes.ok) {
    const err = await createJobRes.text();
    throw new Error(`Failed to create CloudConvert job: ${err}`);
  }

  const jobData = await createJobRes.json();
  const importTask = jobData.data.tasks.find((t: any) => t.name === 'import-my-file');
  
  const formData = new FormData();
  for (const [key, value] of Object.entries(importTask.result.form.parameters)) {
    formData.append(key, value as string);
  }
  formData.append('file', file);

  const uploadRes = await fetch(importTask.result.form.url, {
    method: 'POST',
    body: formData
  });

  if (!uploadRes.ok) {
    throw new Error('Failed to upload file to CloudConvert.');
  }

  const jobId = jobData.data.id;
  const downloadUrl = await pollJobForExportUrl(jobId, apiKey);
  
  return downloadUrl;
}

async function pollJobForExportUrl(jobId: string, apiKey: string): Promise<string> {
  let done = false;
  let url = '';
  
  while (!done) {
    await new Promise(r => setTimeout(r, 2000)); // Poll every 2s
    
    const res = await fetch(`https://api.cloudconvert.com/v2/jobs/${jobId}`, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      }
    });

    if (!res.ok) {
      throw new Error('Failed to poll job status.');
    }

    const { data } = await res.json();
    
    if (data.status === 'error') {
      throw new Error('CloudConvert job failed processing.');
    }
    
    if (data.status === 'finished') {
      const exportTask = data.tasks.find((t: any) => t.name === 'export-my-file');
      if (exportTask && exportTask.result && exportTask.result.files && exportTask.result.files[0]) {
        url = exportTask.result.files[0].url;
      }
      done = true;
    }
  }
  
  if (!url) throw new Error("Conversion finished but no download URL found.");
  return url;
}
