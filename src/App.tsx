import { Routes, Route } from 'react-router';
import { Home } from '@/src/pages/Home';
import { MergePdf } from '@/src/pages/MergePdf';
import { SplitPdf } from '@/src/pages/SplitPdf';
import { CompressPdf } from '@/src/pages/CompressPdf';
import { PdfToWord } from '@/src/pages/PdfToWord';
import { WordToPdf } from '@/src/pages/WordToPdf';
import { PrivacyPolicy } from '@/src/pages/PrivacyPolicy';
import { TermsOfUse } from '@/src/pages/TermsOfUse';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/merge-pdf" element={<MergePdf />} />
      <Route path="/split-pdf" element={<SplitPdf />} />
      <Route path="/compress-pdf" element={<CompressPdf />} />
      <Route path="/pdf-to-word" element={<PdfToWord />} />
      <Route path="/word-to-pdf" element={<WordToPdf />} />
      <Route path="/privacy" element={<PrivacyPolicy />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route path="/terms-of-use" element={<TermsOfUse />} />
      <Route path="/terms-of-service" element={<TermsOfUse />} />
    </Routes>
  );
}

