import { cn } from '@/src/lib/utils';
import { UploadCloud, File as FileIcon, X } from 'lucide-react';
import React, { useCallback, useRef, useState } from 'react';

interface FileUploaderProps {
  accept: Record<string, string[]>;
  multiple: boolean;
  onFilesSelected: (files: File[]) => void;
  selectedFiles: File[];
  onRemoveFile: (index: number) => void;
}

export function FileUploader({ accept, multiple, onFilesSelected, selectedFiles, onRemoveFile }: FileUploaderProps) {
  const [isDragActive, setIsDragActive] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const files = Array.from(e.dataTransfer.files);
      if (!multiple && files.length > 1) {
        onFilesSelected([files[0]]);
      } else {
        onFilesSelected(files);
      }
    }
  }, [multiple, onFilesSelected]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onFilesSelected(Array.from(e.target.files));
    }
  }, [onFilesSelected]);

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const acceptString = Object.values(accept).flat().join(',');

  return (
    <div className="w-full flex flex-col gap-6">
      <div
        className={cn(
          "w-full rounded-2xl border-2 border-dashed transition-all duration-200 ease-in-out p-12 flex flex-col items-center justify-center gap-4 cursor-pointer",
          isDragActive 
            ? "border-indigo-400 bg-indigo-50" 
            : "border-indigo-200 bg-indigo-50/30 hover:bg-indigo-50/70 hover:border-indigo-300"
        )}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={onButtonClick}
      >
        <div className="w-14 h-14 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-200">
          <UploadCloud className="w-6 h-6 text-white" />
        </div>
        <div className="text-center">
          <p className="text-lg font-semibold text-slate-900">
            Choose Files
          </p>
          <p className="text-sm text-slate-500 mt-1">
            {multiple ? 'or drop PDFs here' : 'or drop a PDF here'}
          </p>
        </div>
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept={acceptString}
          multiple={multiple}
          onChange={handleChange}
        />
      </div>

      {selectedFiles.length > 0 && (
        <div className="flex flex-col gap-3">
          <h3 className="text-sm font-medium text-slate-700">Selected files ({selectedFiles.length})</h3>
          <div className="flex flex-col gap-2">
            {selectedFiles.map((file, idx) => (
              <div key={`${file.name}-${idx}`} className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-xl shadow-sm">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg shrink-0">
                    <FileIcon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-sm font-medium text-slate-900 truncate">{file.name}</span>
                    <span className="text-xs text-slate-500">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveFile(idx);
                  }}
                  className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
