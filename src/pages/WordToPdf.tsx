import { useState } from 'react';
import { ToolPageLayout } from '@/src/components/ToolPageLayout';
import { convertWordToPdf } from '@/src/services/cloudconvert';

export function WordToPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

  const handleProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProcessStatus("Converting Word to PDF... This might take a moment.");

    try {
      const downloadUrl = await convertWordToPdf(files[0]);
      
      const a = document.createElement('a');
      a.href = downloadUrl;
      // Get the original name and change extension
      const baseName = files[0].name.replace(/\.[^/.]+$/, "");
      a.download = `${baseName}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setProcessStatus("Success! Your PDF document has been downloaded.");
    } catch (error: any) {
      console.error(error);
      setProcessStatus(error.message || "An error occurred during conversion.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolPageLayout
      seoTitle="Word to PDF Converter | DOC/DOCX to PDF Free | ToolForge"
      seoDescription="Convert Word documents to PDF easily. Microsoft Word to PDF online converter."
      h1="Convert Word to PDF Seamlessly"
      intro="Make your DOC and DOCX files universally accessible and un-editable by turning them into secure PDF formats."
      toolId="word-to-pdf"
      accept={{ 
        'application/msword': ['.doc', '.docx'], 
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] 
      }}
      multiple={false}
      actionText="Convert to PDF"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      howToSteps={[
        "Select your Word document (.doc or .docx) from your device.",
        "Click the conversion button. We securely transfer your file to our processing engines.",
        "Sit back while your document is locked into a fixed-layout PDF format.",
        "Your new PDF downloads directly to your device."
      ]}
      seoSections={[
        {
          title: "Preserve layout and typography",
          content: "Converting Word to PDF ensures that anyone who opens your document will see it exactly the way you formatted it. No missing fonts. No broken margins."
        },
        {
          title: "Fast, Secure, Free",
          content: "Don't pay for expensive desktop office suites just to export a document. Use our web tool anytime, anywhere."
        }
      ]}
      faqs={[
        {
          q: "Why should I convert my Word document to a PDF?",
          a: "PDFs look exactly the same on any device and operating system, so there's zero chance of your layout breaking when you send an invoice or resume."
        },
        {
          q: "Can anyone edit a PDF after I send it?",
          a: "Standard PDFs are significantly harder to edit by accident, protecting the integrity of business contracts or school essays compared to raw Word documents."
        },
        {
          q: "Does this affect the links inside my document?",
          a: "No! Active URL links and hyperlinks placed within your original Word document will remain clickable in the final generated PDF."
        },
        {
          q: "Do you keep a copy of my Word document?",
          a: "Never. All documents are stored in temporary processing storage and purged completely from the cloud servers shortly after conversion."
        }
      ]}
    />
  );
}
