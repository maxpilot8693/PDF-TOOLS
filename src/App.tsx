import React, { useState } from 'react';
import { TOOLS } from '@/src/tools';
import { FileUploader } from '@/src/components/FileUploader';
import { ToolContext } from '@/src/types';
import { mergePdfs, splitPdf, compressPdfOrMock } from '@/src/lib/pdfManager';
import { ArrowLeft, Settings, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const getToolColorClasses = (id: string) => {
  switch (id) {
    case 'pdf-to-word': return { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-indigo-400' };
    case 'merge': return { bg: 'bg-orange-100', text: 'text-orange-600', border: 'hover:border-orange-400' };
    case 'compress': return { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'hover:border-emerald-400' };
    case 'split': return { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-400' };
    case 'word-to-pdf': return { bg: 'bg-pink-100', text: 'text-pink-600', border: 'hover:border-pink-400' };
    default: return { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-400' };
  }
};

export default function App() {
  const [activeTool, setActiveTool] = useState<ToolContext | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processStatus, setProcessStatus] = useState<string | null>(null);

  const handleToolSelect = (tool: ToolContext) => {
    setActiveTool(tool);
    setFiles([]);
    setProcessStatus(null);
  };

  const handleBack = () => {
    setActiveTool(null);
    setFiles([]);
    setProcessStatus(null);
  };

  const handleProcess = async () => {
    if (!activeTool || files.length === 0) return;
    
    setIsProcessing(true);
    setProcessStatus("Processing your files...");

    try {
      if (activeTool.id === 'merge') {
        await mergePdfs(files);
        setProcessStatus("Success! Your merged PDF has been downloaded.");
      } else if (activeTool.id === 'split') {
        await splitPdf(files[0]);
        setProcessStatus("Success! A ZIP with your split PDFs has been downloaded.");
      } else if (activeTool.id === 'compress') {
        await compressPdfOrMock(files[0]);
        setProcessStatus("Success! Compressed file downloaded.");
      } else {
        // Mocking for Word conversions which require backend
        await new Promise(r => setTimeout(r, 2000));
        setProcessStatus("This is a preview. Converting to/from Word requires a dedicated backend conversion service.");
      }
    } catch (error: any) {
      console.error(error);
      setProcessStatus("An error occurred during processing.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col pb-24">
      {/* Header */}
      <header className="h-16 px-8 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-50 w-full shadow-sm">
        <div className="max-w-6xl mx-auto w-full flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900">PDFSwift</h1>
        </div>
      </header>

      <main className="flex-1 flex flex-col w-full">
        <AnimatePresence mode="wait">
          {!activeTool ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-1 flex flex-col"
            >
              <section className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] py-20 flex flex-col items-center justify-center px-4 relative">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 text-center z-10">
                  The fastest way to manage your PDFs
                </h2>
                <p className="text-indigo-100 text-lg mb-8 max-w-xl text-center font-light z-10">
                  Trusted by 4.5 million students and professionals worldwide for reliable document conversion.
                </p>
                <div className="mt-6 flex gap-4 text-white/80 text-xs uppercase tracking-widest font-bold z-10">
                  <span>100% Secure</span>
                  <span>•</span>
                  <span>No Install Required</span>
                  <span>•</span>
                  <span>Fast Encryption</span>
                </div>
              </section>

              <section className="flex-1 bg-slate-50 px-8 py-12">
                <div className="max-w-6xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {TOOLS.map((tool) => {
                      const Icon = tool.icon;
                      const colors = getToolColorClasses(tool.id);
                      return (
                        <div
                          key={tool.id}
                          onClick={() => handleToolSelect(tool)}
                          className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 cursor-pointer transition-transform duration-100 hover:-translate-y-1 active:scale-95 ${colors.border}`}
                        >
                          <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center`}>
                            <Icon className="w-5 h-5" strokeWidth={2} />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-800 leading-tight">
                              {tool.name}
                            </h3>
                            <p className="text-xs text-slate-500 mt-1">
                              {tool.description}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
            </motion.div>
          ) : (
            <motion.div
              key="tool"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-full flex-1 flex flex-col"
            >
              <section className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] pt-12 pb-32 px-4 relative flex flex-col items-center justify-center text-center">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
                
                <div className="max-w-5xl mx-auto w-full flex justify-start mb-8 z-10 px-4">
                  <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-indigo-100 hover:text-white transition-colors font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to all tools
                  </button>
                </div>
                
                <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm z-10 border border-white/30 shadow-lg">
                  <activeTool.icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-4 z-10">
                  {activeTool.name}
                </h2>
                <p className="text-lg text-indigo-100 mb-6 z-10 max-w-2xl mx-auto font-light">
                  {activeTool.description}
                </p>
              </section>

              <section className="flex-1 bg-slate-50 px-4 -mt-20 pb-12 z-20">
                <div className="max-w-3xl mx-auto w-full">
                  <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_25px_-5px_rgba(99,102,241,0.1),0_8px_10px_-6px_rgba(99,102,241,0.1)] border border-slate-100">
                    <FileUploader
                      accept={activeTool.accept}
                      multiple={activeTool.multiple}
                      selectedFiles={files}
                      onFilesSelected={(newFiles) => {
                        if (activeTool.multiple) {
                          setFiles([...files, ...newFiles]);
                        } else {
                          setFiles(newFiles);
                        }
                      }}
                      onRemoveFile={(idx) => {
                        const newFiles = [...files];
                        newFiles.splice(idx, 1);
                        setFiles(newFiles);
                      }}
                    />

                    {files.length > 0 && (
                      <div className="mt-8 flex flex-col items-center">
                        <button
                          onClick={handleProcess}
                          disabled={isProcessing}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                        >
                          {isProcessing ? "Processing..." : activeTool.actionText}
                        </button>
                        {processStatus && (
                          <p className="mt-4 text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 w-full text-center">
                            {processStatus}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
