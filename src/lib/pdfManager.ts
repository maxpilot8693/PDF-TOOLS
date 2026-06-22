import { PDFDocument } from 'pdf-lib';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';

export async function mergePdfs(files: File[]): Promise<void> {
  if (files.length === 0) return;

  const mergedPdf = await PDFDocument.create();

  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }

  const mergedPdfBytes = await mergedPdf.save();
  const blob = new Blob([mergedPdfBytes], { type: 'application/pdf' });
  saveAs(blob, 'merged-document.pdf');
}

export async function splitPdf(file: File): Promise<void> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  
  const zip = new JSZip();
  const pages = pdf.getPageIndices();

  for (const pageIndex of pages) {
    const newPdf = await PDFDocument.create();
    const [copiedPage] = await newPdf.copyPages(pdf, [pageIndex]);
    newPdf.addPage(copiedPage);
    const pdfBytes = await newPdf.save();
    zip.file(`page-${pageIndex + 1}.pdf`, pdfBytes);
  }

  const zipBlob = await zip.generateAsync({ type: 'blob' });
  saveAs(zipBlob, `split-${file.name.replace('.pdf', '')}.zip`);
}

export async function compressPdfOrMock(file: File): Promise<void> {
  // Client-side pure JS compression of PDF is extremely limited without complex imaging libraries.
  // We will re-save it which might optimize it slightly by dropping unused objects, 
  // but true compression needs an API.
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await PDFDocument.load(arrayBuffer);
  const pdfBytes = await pdf.save({ useObjectStreams: false });
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, `compressed-${file.name}`);
}
