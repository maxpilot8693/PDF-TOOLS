import { useState } from 'react';
import { ToolPageLayout } from '@/src/components/ToolPageLayout';
import { compressPdfOrMock } from '@/src/lib/pdfManager';

export function CompressPdf() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

  const handleProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProcessStatus("Compressing your PDF...");

    try {
      await compressPdfOrMock(files[0]);
      setProcessStatus("Success! Your compressed PDF has been downloaded.");
    } catch (error: any) {
      console.error(error);
      setProcessStatus("An error occurred during processing.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolPageLayout
      seoTitle="Compress PDF Online Free – Reduce PDF File Size | ToolForge"
      seoDescription="Compress PDF files online for free. Reduce PDF file size for email, web uploads, and storage without losing quality. No watermarks, no registration."
      h1="Compress PDF Files Online Free"
      intro="Shrink your PDF documents down to manageable sizes for easy email attachments and web submissions while maintaining sharp typography and graphics."
      toolId="compress"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={false}
      actionText="Compress PDF"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      keywords="compress pdf, reduce pdf size, shrink pdf, compress pdf online free, reduce pdf size below 100kb, compress pdf for email, pdf size reducer"
      howToSteps={[
        "Upload the PDF document you need to optimize from your computer, phone, or tablet.",
        "Click the purple 'Compress PDF' button to initiate structural compression.",
        "Our engine cleans redundant metadata, reorganizes PDF object trees, and compresses stream data.",
        "Download your compressed, smaller PDF document immediately with zero watermarks."
      ]}
      seoSections={[
        {
          title: "Bypass Email Attachment Limits",
          content: "Email providers like Gmail and Outlook block attachments over 20MB–25MB. ToolForge compresses bloated PDFs so they transmit smoothly without delivery errors."
        },
        {
          title: "Preserve Document Clarity",
          content: "Our smart optimization targets wasteful embedded data and structural redundancies so your contracts, diagrams, and invoices stay crisp and legible."
        },
        {
          title: "No Sign-Up or Software Needed",
          content: "Forget about purchasing costly desktop software. ToolForge works entirely in your browser on Mac, Windows, Chromebook, iPhone, and Android."
        }
      ]}
      faqs={[
        {
          q: "How can I reduce PDF file size for free without losing quality?",
          a: "Upload your document to ToolForge's Compress PDF tool and click 'Compress PDF'. Our intelligent engine removes unused object trees and stream overhead to shrink the file size while keeping fonts and images crisp."
        },
        {
          q: "Can I compress a PDF to under 200KB or 100KB?",
          a: "Yes! Depending on the original file contents and image density, our optimization will strip unnecessary overhead to bring the file down to upload thresholds required by job boards, government portals, and school forms."
        },
        {
          q: "Does compression add any watermarks to my document?",
          a: "Never. ToolForge adds zero watermarks, brand logos, or visual modifications to your documents. Your output is 100% clean and ready for professional use."
        },
        {
          q: "Is it safe to compress private bank statements or resumes?",
          a: "Yes. ToolForge uses encrypted connections and automatically purges processed files immediately. We do not store, view, or sell your document content."
        },
        {
          q: "Can I compress PDF documents on my phone?",
          a: "Yes, our web tool is fully optimized for mobile devices on iOS Safari and Android Chrome."
        }
      ]}
    />
  );
}
