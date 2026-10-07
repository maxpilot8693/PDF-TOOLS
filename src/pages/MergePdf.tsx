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
      seoTitle="Merge PDF Online Free – Combine Multiple PDF Files | ToolForge"
      seoDescription="Merge PDF files online for free. Combine multiple PDFs into one document in seconds. No file limits, no sign-up, no watermarks. Fast, secure, and private."
      h1="Merge PDF Files Online Instantly"
      intro="Combine multiple PDF documents into a single organized file in seconds. Drag and drop to reorder, merge with zero quality loss, and download immediately."
      toolId="merge"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={true}
      actionText="Merge PDFs"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      keywords="merge pdf online, combine pdf, merge pdfs free, combine pdf files, join pdf, merge pdf no limit, merge multiple pdf files into one"
      howToSteps={[
        "Click 'Choose Files' or drag and drop your PDF documents into the upload box.",
        "Add as many PDF files as you need. Our system supports combining multiple documents in order.",
        "Click the purple 'Merge PDFs' button to execute the merge instantly.",
        "Your unified PDF file will be generated and downloaded directly to your device."
      ]}
      seoSections={[
        {
          title: "Lightning-Fast PDF Combiner",
          content: "Whether you are compiling monthly business invoices, submitting academic assignments, or archiving receipts, ToolForge joins your documents in your browser without lag."
        },
        {
          title: "Bank-Grade Privacy & Security",
          content: "Your files never permanently reside on any server. Client-side PDF stream merging processes your document right on your computer, guaranteeing maximum confidentiality."
        },
        {
          title: "Preserve Fonts, Bookmarks & Hyperlinks",
          content: "Unlike cheap tools that rasterize text into blurry images, ToolForge retains original vector fonts, high-resolution graphics, internal links, and layout metadata."
        }
      ]}
      faqs={[
        {
          q: "How do I merge multiple PDF files into one for free?",
          a: "Simply upload your PDF documents to ToolForge's Merge PDF tool, arrange them in your preferred sequence, and click 'Merge PDFs'. Your single combined document will download automatically with no watermarks."
        },
        {
          q: "Is there any file limit or page count cap on merging?",
          a: "No! ToolForge does not enforce arbitrary limits on the number of pages or files you can merge. Because processing happens directly in your browser, you can merge dozens of files at once."
        },
        {
          q: "Do I need to install Adobe Acrobat or create an account?",
          a: "Not at all. ToolForge works 100% online in your web browser. You never need to install Adobe Acrobat, register an account, or pay expensive subscription fees."
        },
        {
          q: "Can I merge PDF files on mobile (iPhone or Android)?",
          a: "Yes! ToolForge is fully responsive and optimized for touchscreens on iOS Safari, Android Chrome, and all modern mobile web browsers."
        },
        {
          q: "Will merging PDFs reduce the quality of my images or text?",
          a: "No. Original vector typography, color profiles, embedded fonts, and high-resolution images are kept completely intact without any compression or degradation."
        },
        {
          q: "Are my uploaded PDF files kept private?",
          a: "Yes, 100%. Processing takes place client-side in your browser memory whenever possible, and any server-assisted jobs are permanently purged automatically."
        }
      ]}
    />
  );
}
