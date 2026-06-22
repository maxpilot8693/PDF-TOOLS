export type ToolId = 'merge' | 'split' | 'compress' | 'pdf-to-word' | 'word-to-pdf';

export interface ToolContext {
  id: ToolId;
  name: string;
  description: string;
  icon: any;
  accept: Record<string, string[]>;
  multiple: boolean;
  actionText: string;
  path: string;
}
