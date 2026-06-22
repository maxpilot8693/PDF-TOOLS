import { Routes, Route } from 'react-router';
import { Home } from '@/src/pages/Home';
import { MergePdf } from '@/src/pages/MergePdf';
import { SplitPdf } from '@/src/pages/SplitPdf';
import { CompressPdf } from '@/src/pages/CompressPdf';
import { PdfToWord } from '@/src/pages/PdfToWord';
import { WordToPdf } from '@/src/pages/WordToPdf';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merge-pdf" element={<MergePdf />} />
      <Route path="/split-pdf" element={<SplitPdf />} />
      <Route path="/compress-pdf" element={<CompressPdf />} />
      <Route path="/pdf-to-word" element={<PdfToWord />} />
      <Route path="/word-to-pdf" element={<WordToPdf />} />
    </Routes>
  );
}

