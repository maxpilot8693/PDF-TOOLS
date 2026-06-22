import { useState } from 'react';
import { ToolPageLayout } from '@/src/components/ToolPageLayout';
import { mergePdfs } from '@/src/lib/pdfManager';

export function MergePdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

  const handleProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProcessStatus("Merging your files...");

    try {
      await mergePdfs(files);
      setProcessStatus("Success! Your merged PDF has been downloaded.");
    } catch (error: any) {
      console.error(error);
      setProcessStatus("An error occurred during processing.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolPageLayout
      seoTitle="Merge PDF Online Free | PDFSwift"
      seoDescription="Merge multiple PDF files instantly for free. Combine PDFs in the exact order you want. No signup required."
      h1="Merge PDF Files Instantly"
      intro="Select multiple PDF documents and combine them into a single file in seconds."
      toolId="merge"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={true}
      actionText="Merge PDFs"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      howToSteps={[
        "Click the upload button or drag and drop your PDF files into the box.",
        "Ensure your files are in the correct order (though currently they merge in the order you selected them).",
        "Click 'Merge PDFs'.",
        "The merged document will be downloaded automatically."
      ]}
      seoSections={[
        {
          title: "Easy PDF combining",
          content: "Whether you are merging invoices, receipts, or chapters of a book, our free online tool handles unlimited file sizes quickly. You don't need any special software."
        },
        {
          title: "Total Privacy",
          content: "Your files never permanently reside on our servers. Processing occurs using secure client-side technologies whenever possible, keeping your sensitive data safe."
        }
      ]}
      faqs={[
        {
          q: "Is it safe to merge PDF files online?",
          a: "Yes, merging PDF files is completely safe on our platform. We use advanced encryption and do not permanently store your documents."
        },
        {
          q: "Is there a file size limit?",
          a: "There are no hard limits, but very large files (e.g. hundreds of MBs) may be constrained by your browser's memory."
        },
        {
          q: "Can I merge PDFs on my phone?",
          a: "Absolutely! PDFSwift is fully optimized for mobile devices so you can merge files on the go on iOS or Android."
        },
        {
          q: "Do I lose any formatting when merging?",
          a: "No, the original formatting, fonts, and images remain untouched. Our tool seamlessly appends pages exactly as they appear."
        }
      ]}
    />
  );
}
