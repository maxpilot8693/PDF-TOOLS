import { Combine, Scissors, Minimize2, FileText, FileStack } from 'lucide-react';
import { ToolContext } from '@/src/types';

export const TOOLS: ToolContext[] = [
  {
    id: 'merge',
    name: 'Merge PDFs',
    description: 'Combine multiple PDFs into one unified document.',
    icon: Combine,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
    actionText: 'Merge Files',
    path: '/merge-pdf'
  },
  {
    id: 'split',
    name: 'Split PDF',
    description: 'Separate one page or a whole set for easy conversion into independent PDF files.',
    icon: Scissors,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
    actionText: 'Split PDF',
    path: '/split-pdf'
  },
  {
    id: 'compress',
    name: 'Compress PDF',
    description: 'Reduce file size while optimizing for maximal PDF quality.',
    icon: Minimize2,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
    actionText: 'Compress PDF',
    path: '/compress-pdf'
  },
  {
    id: 'pdf-to-word',
    name: 'PDF to Word',
    description: 'Easily convert your PDF files into easy to edit DOCX documents.',
    icon: FileStack,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: false,
    actionText: 'Convert to Word',
    path: '/pdf-to-word'
  },
  {
    id: 'word-to-pdf',
    name: 'Word to PDF',
    description: 'Make DOC and DOCX files easy to read by converting them to PDF.',
    icon: FileText,
    accept: { 'application/msword': ['.doc', '.docx'], 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'] },
    multiple: false,
    actionText: 'Convert to PDF',
    path: '/word-to-pdf'
  }
];
