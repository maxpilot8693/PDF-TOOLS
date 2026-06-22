import { ReactNode } from 'react';
import { Seo } from '@/src/components/Seo';
import { Layout } from '@/src/components/Layout';
import { FileUploader } from '@/src/components/FileUploader';
import { Link } from 'react-router';
import { TOOLS } from '@/src/tools';

export function getToolColorClasses(id: string) {
  switch (id) {
    case 'pdf-to-word': return { bg: 'bg-blue-100', text: 'text-blue-600', border: 'hover:border-indigo-400' };
    case 'merge': return { bg: 'bg-orange-100', text: 'text-orange-600', border: 'hover:border-orange-400' };
    case 'compress': return { bg: 'bg-emerald-100', text: 'text-emerald-600', border: 'hover:border-emerald-400' };
    case 'split': return { bg: 'bg-purple-100', text: 'text-purple-600', border: 'hover:border-purple-400' };
    case 'word-to-pdf': return { bg: 'bg-pink-100', text: 'text-pink-600', border: 'hover:border-pink-400' };
    default: return { bg: 'bg-indigo-100', text: 'text-indigo-600', border: 'hover:border-indigo-400' };
  }
}

interface FaqItem {
  q: string;
  a: string;
}

interface ToolPageLayoutProps {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  toolId: string;
  accept: Record<string, string[]>;
  multiple: boolean;
  actionText: string;
  files: File[];
  onFilesChange: (files: File[]) => void;
  onProcess: () => void;
  isProcessing: boolean;
  processStatus: string | null;
  faqs: FaqItem[];
  howToSteps: string[];
  seoSections: { title: string; content: ReactNode }[];
}

export function ToolPageLayout({
  seoTitle,
  seoDescription,
  h1,
  intro,
  toolId,
  accept,
  multiple,
  actionText,
  files,
  onFilesChange,
  onProcess,
  isProcessing,
  processStatus,
  faqs,
  howToSteps,
  seoSections
}: ToolPageLayoutProps) {
  const tool = TOOLS.find(t => t.id === toolId)!;
  const Icon = tool.icon;

  return (
    <Layout>
      <Seo title={seoTitle} description={seoDescription} canonical={tool.path} faqs={faqs} />
      
      {/* Hero / CTA Section */}
      <section className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] pt-12 pb-32 px-4 relative flex flex-col items-center text-center w-full">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        <div className="w-16 h-16 bg-white/20 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm z-10 border border-white/30 shadow-lg">
          <Icon className="w-8 h-8" strokeWidth={1.5} />
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 z-10 max-w-4xl mx-auto">
          {h1}
        </h1>
        <p className="text-lg text-indigo-100 mb-6 z-10 max-w-2xl mx-auto font-light leading-relaxed">
          {intro}
        </p>
      </section>

      {/* Main App Container */}
      <section className="px-4 -mt-20 pb-12 z-20 w-full flex-1">
        <div className="max-w-4xl mx-auto flex gap-6 w-full">
          <div className="flex-1 min-w-0">
            <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-[0_20px_25px_-5px_rgba(99,102,241,0.1),0_8px_10px_-6px_rgba(99,102,241,0.1)] border border-slate-100 w-full">
              <FileUploader
                accept={accept}
                multiple={multiple}
                selectedFiles={files}
                onFilesSelected={(newFiles) => {
                  if (multiple) {
                    onFilesChange([...files, ...newFiles]);
                  } else {
                    onFilesChange(newFiles);
                  }
                }}
                onRemoveFile={(idx) => {
                  const newFiles = [...files];
                  newFiles.splice(idx, 1);
                  onFilesChange(newFiles);
                }}
              />

              {files.length > 0 && (
                <div className="mt-8 flex flex-col items-center w-full">
                  <button
                    onClick={onProcess}
                    disabled={isProcessing}
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-lg py-4 px-12 rounded-xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
                  >
                    {isProcessing ? "Processing..." : actionText}
                  </button>
                  {processStatus && (
                    <p className="mt-4 text-sm font-medium text-slate-700 bg-slate-50 p-4 rounded-xl border border-slate-200 w-full text-center break-words">
                      {processStatus}
                    </p>
                  )}
                </div>
              )}
            </div>

            {/* SEO Article & How To Content */}
            <div className="mt-16 w-full prose prose-slate max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-b border-slate-200 pb-16">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">How to {actionText.toLowerCase()}</h2>
                  <ol className="space-y-4">
                    {howToSteps.map((step, idx) => (
                      <li key={idx} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </span>
                        <span className="text-slate-600 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-2">Why ToolForge?</h2>
                  {seoSections.map((section, idx) => (
                    <div key={idx} className="mb-6">
                      <h3 className="text-lg font-semibold text-slate-800 mb-2">{section.title}</h3>
                      <div className="text-slate-600">{section.content}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-16 w-full">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-4 max-w-3xl mx-auto">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                    <p className="text-slate-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Internal Links Grid */}
            <div className="mt-20 w-full mb-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Discover More Free Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TOOLS.filter(t => t.id !== toolId).map((t) => {
                  const TIcon = t.icon;
                  const cClasses = getToolColorClasses(t.id);
                  return (
                    <Link key={t.id} to={t.path} className={`bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 cursor-pointer transition-transform duration-100 hover:-translate-y-1 active:scale-95 ${cClasses.border}`}>
                      <div className={`w-10 h-10 ${cClasses.bg} ${cClasses.text} rounded-xl flex items-center justify-center`}>
                        <TIcon className="w-5 h-5" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-800 leading-tight">{t.name}</h3>
                        <p className="text-xs text-slate-500 mt-1">{t.description}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
