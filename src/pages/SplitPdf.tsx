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
      seoTitle="Split PDF Online Free – Extract Pages from PDF | ToolForge"
      seoDescription="Split PDF files and extract pages online for free. Separate large PDF documents into individual page files instantly without registration or watermarks."
      h1="Split PDF Pages Online Free"
      intro="Extract pages or split your PDF into individual files in seconds. Download all separated pages in a convenient ZIP archive with zero quality loss."
      toolId="split"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={false}
      actionText="Split PDF"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      keywords="split pdf, split pdf online free, extract pdf pages, separate pdf pages, divide pdf, cut pdf, split pdf file into individual pages"
      howToSteps={[
        "Upload the PDF document you want to split by clicking 'Choose Files' or dragging it in.",
        "Click the purple 'Split PDF' button to start page extraction.",
        "Our engine unpacks each page into an independent, pristine PDF document.",
        "A ZIP archive containing every extracted PDF page is downloaded automatically."
      ]}
      seoSections={[
        {
          title: "Instant In-Browser Extraction",
          content: "No need to download complex PDF editors to extract a chapter, contract page, or diagram. ToolForge splits your document directly in your browser within seconds."
        },
        {
          title: "Zero Watermarks & Clean Files",
          content: "Every split page is generated with crisp vector formatting, preserving original high-resolution charts, text clarity, and page dimensions."
        },
        {
          title: "100% Confidential & Secure",
          content: "Splitting runs locally in your browser memory. Your confidential financial reports and personal records never get uploaded to third-party ad networks."
        }
      ]}
      faqs={[
        {
          q: "How do I split a PDF into separate pages online for free?",
          a: "Upload your document to ToolForge's Split PDF tool and click 'Split PDF'. Our engine separates every page into its own individual PDF document and bundles them into a fast ZIP download."
        },
        {
          q: "Is there any limit to how many pages I can split?",
          a: "No! You can split small 2-page agreements or massive 200-page textbooks without paying any fees or facing arbitrary page restrictions."
        },
        {
          q: "Will splitting damage the original quality or layout?",
          a: "Not at all. Every extracted page retains its exact original resolution, text structure, embedded fonts, and vector elements."
        },
        {
          q: "Can I split PDF documents on iPhone or Android?",
          a: "Yes! ToolForge works smoothly on all mobile devices and web browsers, letting you extract PDF pages directly from your smartphone or tablet."
        },
        {
          q: "Do I need to sign up or create an account?",
          a: "No account or registration is required. All tools on ToolForge are completely free and frictionless."
        }
      ]}
    />
  );
}
