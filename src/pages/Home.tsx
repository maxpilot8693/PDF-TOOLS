import { Seo } from '@/src/components/Seo';
import { Layout } from '@/src/components/Layout';
import { AdPlaceholder } from '@/src/components/AdPlaceholder';
import { TOOLS } from '@/src/tools';
import { getToolColorClasses } from '@/src/components/ToolPageLayout';
import { Link } from 'react-router';
import { ShieldCheck, Zap, Settings } from 'lucide-react';

export function Home() {
  return (
    <Layout>
      <Seo 
        title="Free PDF Tools Online | Merge, Split, Compress & Convert PDF | PDFSwift"
        description="The fastest way to manage your PDFs online. 100% free PDF tools to merge, split, compress, and convert PDF to Word. No signup or installation required."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] py-20 flex flex-col items-center justify-center px-4 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 text-center z-10 max-w-4xl tracking-tight leading-tight">
          Every tool you need to work with PDFs in one place
        </h1>
        <p className="text-indigo-100 text-lg sm:text-xl mb-8 max-w-2xl text-center font-light z-10">
          All are 100% FREE and easy to use! Merge, split, compress, convert, and more. 
          Trusted by millions of students and professionals worldwide.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4 text-white/80 text-xs sm:text-sm uppercase tracking-widest font-bold z-10">
          <span>100% Secure</span>
          <span className="hidden sm:inline">•</span>
          <span>No Install Required</span>
          <span className="hidden sm:inline">•</span>
          <span>Fast Encryption</span>
        </div>
      </section>

      {/* Main Container */}
      <section className="flex-1 bg-slate-50 px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          
          <AdPlaceholder type="horizontal" />

          {/* Tools Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              const colors = getToolColorClasses(tool.id);
              return (
                <Link
                  to={tool.path}
                  key={tool.id}
                  className={`bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col gap-4 cursor-pointer transition-transform duration-200 hover:-translate-y-2 active:scale-95 hover:shadow-xl ${colors.border}`}
                >
                  <div className={`w-14 h-14 ${colors.bg} ${colors.text} rounded-2xl flex items-center justify-center`}>
                    <Icon className="w-7 h-7" strokeWidth={2} />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-800 leading-tight mb-2">
                      {tool.name}
                    </h2>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <AdPlaceholder type="horizontal" />

          {/* SEO Value Props */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-slate-200">
            <div className="flex flex-col items-center text-center gap-4 text-slate-500">
              <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl">100% Secure</h3>
              <p className="text-sm leading-relaxed">We permanently delete all your files from our servers within a few hours. Your data is safe and your privacy is guaranteed.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 text-slate-500">
              <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl">Lightning Fast</h3>
              <p className="text-sm leading-relaxed">No software installation needed. Transform your documents in the cloud at lightning-fast speeds directly through your browser.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 text-slate-500">
              <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl">Universal Support</h3>
              <p className="text-sm leading-relaxed">PDFSwift works flawlessly on Windows, Mac, Linux, iOS, and Android. Use any modern web browser to access our tools from anywhere.</p>
            </div>
          </div>

          {/* SEO Intro Text */}
          <article className="mt-16 w-full prose prose-slate max-w-none text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The All-In-One PDF Tools Platform</h2>
            <p className="text-lg text-slate-600 mb-6">
              Dealing with PDFs should be easy. Our free online PDF editor and converter allows you to 
              <strong> merge PDF online</strong>, <strong>split PDF pages</strong>, 
              <strong> compress PDFs for email</strong>, and effortlessly convert 
              <strong> PDF to Word</strong> or <strong> Word to PDF</strong>. We built PDFSwift to provide 
              enterprise-grade document management without the ridiculous subscription fees.
            </p>
            <p className="text-lg text-slate-600">
              With over a million successful conversions, our reliable infrastructure ensures that your formatting 
              and layouts remain exactly as you intend. Whether you need to reorganize a massive report or compress 
              a scanned invoice, PDFSwift handles it instantly in your browser.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
