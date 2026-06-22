import { useState } from 'react';
import { ToolPageLayout } from '@/src/components/ToolPageLayout';
import { splitPdf } from '@/src/lib/pdfManager';

export function SplitPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

  const handleProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProcessStatus("Splitting your PDF...");

    try {
      await splitPdf(files[0]);
      setProcessStatus("Success! A ZIP file containing your split pages has been downloaded.");
    } catch (error: any) {
      console.error(error);
      setProcessStatus("An error occurred during processing.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolPageLayout
      seoTitle="Split PDF Pages Online Free | PDFSwift"
      seoDescription="Extract pages from your PDF or split it into multiple separate files for free. Fast, safe, and reliable PDF splitter."
      h1="Split PDF Files Online"
      intro="Separate one page or an entire set for easy conversion into independent PDF files."
      toolId="split"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={false}
      actionText="Split PDF"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      howToSteps={[
        "Upload the PDF document you want to split.",
        "Click the 'Split PDF' button to begin processing.",
        "Our engine extracts every single page into its own individual PDF document.",
        "A ZIP file containing all your new PDF pages is automatically downloaded."
      ]}
      seoSections={[
        {
          title: "Instant page extraction",
          content: "Don't install bulky software just to extract a single page from a large report. Our web app does it instantly within your browser."
        },
        {
          title: "Secure extraction",
          content: "We value your privacy. The splitting happens fast, and the original document remains perfectly intact and secure."
        }
      ]}
      faqs={[
        {
          q: "How does the PDF splitter work?",
          a: "By default, our tool extracts every single page from your document and wraps them securely in a downloadable ZIP archive."
        },
        {
          q: "Is it free to use?",
          a: "Yes, our Split PDF tool is 100% free with no hidden charges or required account registrations."
        },
        {
          q: "What if I only want specific pages?",
          a: "Currently, we split the document into all individual pages. You can then easily delete the ones you don't need."
        },
        {
          q: "Is my original file modified?",
          a: "No, your original file remains completely untouched. We generate new extracted files and package them."
        }
      ]}
    />
  );
}
