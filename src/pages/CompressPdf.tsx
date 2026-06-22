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
      seoTitle="Compress PDF Online for Free | Reduce File Size | ToolForge"
      seoDescription="Reduce PDF file size without losing quality. Fast, secure, and free online PDF compressor for easy emailing."
      h1="Compress PDF Files Without Losing Quality"
      intro="Optimize your PDF documents to reduce file size while keeping text and images crystal clear."
      toolId="compress"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={false}
      actionText="Compress PDF"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      howToSteps={[
        "Upload the large PDF file you wish to compress.",
        "Click 'Compress PDF' to start the optimization engine.",
        "Wait a few seconds while excess metadata and uncompressed streams are optimized.",
        "Download your compressed, smaller PDF file."
      ]}
      seoSections={[
        {
          title: "Optimize for email",
          content: "Email clients often bounce attachments over 25MB. By using our PDF compressor, you ensure your important documents are delivered smoothly without losing visual fidelity."
        },
        {
          title: "Browser-based compression",
          content: "Our system optimizes the internal structure of your PDF—removing unused objects and regenerating object streams—resulting in smaller sizes without a noticeable drop in quality."
        }
      ]}
      faqs={[
        {
          q: "Will compression reduce the quality of my images?",
          a: "The basic compression engine optimizes internal PDF structures. While some heavy image downsampling isn't currently applied in the free tier, standard files usually see a good reduction footprint with zero visual quality loss."
        },
        {
          q: "Can I compress multiple files at once?",
          a: "Currently, the compression tool processes one document at a time to ensure maximum stability and optimization focus."
        },
        {
          q: "Why didn't my file shrink much?",
          a: "If a PDF is already heavily compressed, or consists entirely of high-resolution JPEGs that cannot be easily scaled down, the savings might be minimal."
        },
        {
          q: "What happens to my uploaded file?",
          a: "If uploaded securely via our backend processors, it is purged after an hour. If processed directly in your browser, it never leaves your machine."
        }
      ]}
    />
  );
}
