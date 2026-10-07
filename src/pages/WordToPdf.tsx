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
      seoTitle="Word to PDF Converter Free – Convert DOCX to PDF Online | ToolForge"
      seoDescription="Convert Word documents to PDF online for free. Turn DOC and DOCX files into fixed-layout, professional PDF documents. Preserves fonts, tables, and images."
      h1="Convert Word to PDF Online Free"
      intro="Transform Microsoft Word documents (.docx, .doc) into universally compatible, secure PDF files with preserved formatting, fonts, and layouts."
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
      keywords="word to pdf, convert word to pdf, docx to pdf, doc to pdf, word to pdf converter online free, convert docx to pdf free, turn word into pdf"
      howToSteps={[
        "Upload your Word document (.doc or .docx) by dragging it into the box or browsing files.",
        "Click the purple 'Convert to PDF' button to start cloud rendering.",
        "Our engine embeds all typography, table structures, and images into a standardized PDF format.",
        "Your new PDF document will download automatically to your device within seconds."
      ]}
      seoSections={[
        {
          title: "Preserve Exact Typography & Margins",
          content: "Converting Word to PDF locks in your formatting, preventing accidental layout shifts when opening documents on different versions of Word or different operating systems."
        },
        {
          title: "Universal Compatibility",
          content: "PDFs can be viewed cleanly on any smartphone, tablet, computer, or web browser without requiring Microsoft Word or Office 365 licenses."
        },
        {
          title: "Clickable Hyperlinks & Clean Vectors",
          content: "All hyperlinks, web URLs, email addresses, and table of contents bookmarks inside your Word document remain fully clickable and active in the generated PDF."
        }
      ]}
      faqs={[
        {
          q: "How do I convert a Microsoft Word document to a PDF for free?",
          a: "Upload your .doc or .docx file to ToolForge's Word to PDF tool, click 'Convert to PDF', and your publication-ready PDF document will download in seconds with zero watermarks."
        },
        {
          q: "Will my layout or fonts shift during conversion?",
          a: "No! Our converter precisely embeds fonts, preserves line spacing, margins, graphics, and page breaks so your PDF mirrors your Word document faithfully."
        },
        {
          q: "Do I need Microsoft Word installed on my computer?",
          a: "No. ToolForge performs the entire conversion in the cloud, so you don't need Microsoft Office, Word 365, or any desktop software installed."
        },
        {
          q: "Can I convert Word documents on an iPhone or Android phone?",
          a: "Yes! ToolForge runs in any mobile web browser, allowing you to convert Word attachments directly from your phone."
        },
        {
          q: "Are my files kept private and deleted after conversion?",
          a: "Yes, absolutely. Uploaded files are encrypted in transit and purged automatically from our processing servers immediately following conversion."
        }
      ]}
    />
  );
}
