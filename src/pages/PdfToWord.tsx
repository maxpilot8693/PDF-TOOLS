import { useState } from 'react';
import { ToolPageLayout } from '@/src/components/ToolPageLayout';
import { convertPdfToWord } from '@/src/services/cloudconvert';

export function PdfToWord() {
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

  const handleProcess = async () => {
    if (files.length === 0) return;
    setIsProcessing(true);
    setProcessStatus("Converting PDF to Word (Docx)... This might take a moment.");

    try {
      const downloadUrl = await convertPdfToWord(files[0]);
      
      // Auto trigger download
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = `${files[0].name.replace('.pdf', '')}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      setProcessStatus("Success! Your editable Word document has been downloaded.");
    } catch (error: any) {
      console.error(error);
      setProcessStatus(error.message || "An error occurred during conversion.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <ToolPageLayout
      seoTitle="PDF to Word Converter | Free Online DOCX Converter | PDFSwift"
      seoDescription="Convert PDF to editable Word document (DOCX) exactly like the original. Fast, free, online PDF to Word converter."
      h1="Convert PDF to Word Document"
      intro="Easily transform any PDF into a native MS Word document, preserving layout, text formatting, and images."
      toolId="pdf-to-word"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={false}
      actionText="Convert to Word"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      howToSteps={[
        "Upload the PDF document you want to convert.",
        "Click the conversion button. Our API will securely upload and process your file.",
        "Wait a few moments while advanced OCR and format reconstruction takes place.",
        "Your new editable Word document (.docx) will download automatically!"
      ]}
      seoSections={[
        {
          title: "Accurate formatting",
          content: "Rebuilding a document isn't just about reading the text; it's about making sure your tables remain tables and headers stay in place. We utilize an enterprise-grade conversion engine for maximum fidelity."
        },
        {
          title: "Cloud-Based Converter",
          content: "Whether you use Mac, Windows, Linux, or a mobile device, our cloud API securely converts your document without stressing your computer's CPU."
        }
      ]}
      faqs={[
        {
          q: "Are the converted Word files actually editable?",
          a: "Yes! The output is a standard Microsoft Word Document (.docx) where text, images, and formatting can be freely edited."
        },
        {
          q: "What about scanned PDFs?",
          a: "Our Premium engine supports Optical Character Recognition (OCR), meaning it can accurately trace and convert scanned images of text back into editable words."
        },
        {
          q: "Is it safe to upload confidential business contracts?",
          a: "Yes. Our conversion endpoints are 256-bit encrypted. After conversion, the temporary file is permanently deleted from the processing servers."
        },
        {
          q: "Do I need Microsoft Word installed?",
          a: "You don't need MS Word to perform the conversion! To open the resulting .docx file, you can use MS Word, Google Docs, Apple Pages, or LibreOffice."
        }
      ]}
    />
  );
}
