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
      seoTitle="PDF to Word Converter Free – Convert PDF to Editable DOCX | ToolForge"
      seoDescription="Convert PDF to Word online for free. Transform PDF files into fully editable Microsoft Word DOCX documents with perfect layout fidelity. No registration required."
      h1="Convert PDF to Word Document Online"
      intro="Easily transform any PDF into a native, fully editable Microsoft Word (.docx) document while preserving tables, columns, fonts, and images."
      toolId="pdf-to-word"
      accept={{ 'application/pdf': ['.pdf'] }}
      multiple={false}
      actionText="Convert to Word"
      files={files}
      onFilesChange={setFiles}
      onProcess={handleProcess}
      isProcessing={isProcessing}
      processStatus={processStatus}
      keywords="pdf to word, convert pdf to word, pdf to docx, convert pdf to docx free, editable word converter, pdf to word converter online free, change pdf to word"
      howToSteps={[
        "Upload your PDF document by clicking 'Choose Files' or dragging the file into the upload zone.",
        "Click 'Convert to Word' to trigger our high-fidelity document reconstruction engine.",
        "Wait a few seconds while formatting, text styles, tables, and paragraphs are parsed.",
        "Your new editable .docx file will automatically download to your computer or phone."
      ]}
      seoSections={[
        {
          title: "100% Editable DOCX Output",
          content: "Get a real Microsoft Word document where every paragraph, table cell, and heading is completely editable in Microsoft Word, Google Docs, Apple Pages, or LibreOffice."
        },
        {
          title: "Accurate Layout & Formatting Preservation",
          content: "Our enterprise conversion engine reconstructs intricate document layouts, tabular data, and custom bulleted lists rather than flattening them into messy text blocks."
        },
        {
          title: "Encrypted & Confidential",
          content: "All uploaded files are protected with 256-bit SSL encryption during transit and automatically purged from temporary conversion storage immediately after processing."
        }
      ]}
      faqs={[
        {
          q: "How do I convert a PDF to an editable Word document for free?",
          a: "Upload your PDF file to ToolForge's PDF to Word converter and click 'Convert to Word'. Within moments, our system produces an editable .docx file with your original layout intact, ready to open in Microsoft Word or Google Docs."
        },
        {
          q: "Are the converted DOCX files actually editable?",
          a: "Yes! The output is a genuine Microsoft Word (.docx) document. You can modify text, adjust font sizes, insert new tables, replace images, and re-export as you wish."
        },
        {
          q: "Do I need to install Microsoft Office or Adobe software?",
          a: "No software installation is necessary. The entire conversion takes place securely in the cloud, allowing you to convert PDFs on any computer or mobile browser."
        },
        {
          q: "Can I convert scanned PDF documents to Word?",
          a: "Yes, our conversion engine includes optical character recognition (OCR) capabilities to recognize text within scanned pages and render them as editable characters."
        },
        {
          q: "Is there any charge or subscription required?",
          a: "None whatsoever. ToolForge is 100% free with no sign-ups, no hidden paywalls, and no credit card required."
        }
      ]}
    />
  );
}
