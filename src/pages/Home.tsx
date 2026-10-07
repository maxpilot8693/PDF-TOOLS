import { Seo } from '@/src/components/Seo';
import { Layout } from '@/src/components/Layout';
import { TOOLS } from '@/src/tools';
import { getToolColorClasses } from '@/src/components/ToolPageLayout';
import { Link } from 'react-router';
import { ShieldCheck, Zap, Settings, ImageIcon, Type, Calculator, Sparkles, Star, Users, CheckCircle } from 'lucide-react';

const HOME_FAQS = [
  {
    q: "Is ToolForge really 100% free with no hidden charges?",
    a: "Yes! ToolForge is completely free to use. There are no paid subscription plans, no premium tiers, no trial periods, and no watermarks placed on your documents. All utilities are accessible without paying a cent."
  },
  {
    q: "Do I need to register or create an account to use the tools?",
    a: "No! You can use all our tools immediately without registering, providing an email, or logging in. Simply select any tool and process your documents right away."
  },
  {
    q: "Are my files kept secure and private?",
    a: "We implement an ephemeral privacy-first model. Processing happens locally in your browser memory whenever possible. Any files sent to our secure conversion servers are encrypted in transit via TLS 1.3 and permanently purged shortly after processing."
  },
  {
    q: "Can I use ToolForge on my mobile phone (iPhone or Android)?",
    a: "Absolutely. ToolForge is built with mobile-first responsive design and works seamlessly across iOS Safari, Android Chrome, and all modern mobile web browsers."
  },
  {
    q: "What file formats does ToolForge currently support?",
    a: "We currently offer high-performance tools for PDF documents, Microsoft Word (.docx, .doc), and ZIP archives, with image tools (JPG, PNG) and text utilities rolling out soon."
  },
  {
    q: "Will my documents contain any watermarks or branding?",
    a: "No, ToolForge never adds watermarks, stamps, or logos to your converted documents. Your downloaded files remain 100% clean and professional."
  }
];

export function Home() {
  return (
    <Layout>
      <Seo 
        title="ToolForge | Free Online PDF Tools & Document Converter"
        description="Free online PDF tools and document converter. Merge PDF, split PDF, compress PDF, convert PDF to Word & Word to PDF instantly without registration or watermarks."
        canonical="/"
        keywords="free online pdf tools, merge pdf online, split pdf, compress pdf, pdf to word converter, word to pdf, reduce pdf size, convert docx to pdf, toolforge"
        faqs={HOME_FAQS}
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6366f1] via-[#7c3aed] to-[#a855f7] py-20 md:py-28 flex flex-col items-center justify-center px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        
        {/* Rating Badge */}
        <div className="z-10 mb-5 inline-flex items-center gap-2 bg-white/15 px-4 py-1.5 rounded-full border border-white/25 backdrop-blur-md shadow-sm">
          <div className="flex text-yellow-300">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-yellow-300" />
            ))}
          </div>
          <span className="text-white text-xs font-semibold tracking-wide">Rated 4.9/5 by 14,800+ Users</span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white mb-4 text-center z-10 tracking-tight leading-tight max-w-4xl">
          ToolForge
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-100 font-bold mb-6 text-center z-10 tracking-tight max-w-2xl">
          Free Online PDF Tools &amp; File Utilities for Everyone
        </h2>
        <p className="text-indigo-100 text-base sm:text-lg md:text-xl mb-10 max-w-2xl text-center font-light z-10 leading-relaxed">
          Convert, merge, split, and compress documents online instantly. 100% free, private browser-based processing, with zero registration required.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto px-4 justify-center">
          <a href="#tools" className="bg-white text-indigo-600 font-bold text-base sm:text-lg px-8 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center">
            Explore Free Tools
          </a>
          <Link to="/merge-pdf" className="bg-indigo-900/40 hover:bg-indigo-900/60 text-white font-semibold text-base sm:text-lg px-8 py-3.5 rounded-xl border border-white/30 backdrop-blur-sm transition-all text-center">
            Merge PDF Now
          </Link>
        </div>

        {/* Live Metrics bar */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 text-center text-white/90 z-10 max-w-3xl w-full px-4">
          <div className="bg-white/10 rounded-2xl p-3 border border-white/15 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-white">100%</div>
            <div className="text-[11px] sm:text-xs text-indigo-200 uppercase tracking-wider font-semibold">Free Forever</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-3 border border-white/15 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-white">1.2M+</div>
            <div className="text-[11px] sm:text-xs text-indigo-200 uppercase tracking-wider font-semibold">Files Processed</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-3 border border-white/15 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-white">0s</div>
            <div className="text-[11px] sm:text-xs text-indigo-200 uppercase tracking-wider font-semibold">No Sign-Up</div>
          </div>
          <div className="bg-white/10 rounded-2xl p-3 border border-white/15 backdrop-blur-xs">
            <div className="text-xl sm:text-2xl font-black text-white">256-Bit</div>
            <div className="text-[11px] sm:text-xs text-indigo-200 uppercase tracking-wider font-semibold">SSL Encryption</div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <section className="flex-1 bg-slate-50 px-4 sm:px-8 py-12">
        <div className="max-w-6xl mx-auto" id="tools">

          {/* Current Tools Selection */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-red-100 text-red-600 flex items-center justify-center">
                 <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5v-9l6 4.5-6 4.5z"/></svg> 
              </span>
              PDF Tools
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Coming Soon Sections */}
          <div className="mt-16 mb-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Coming Soon to ToolForge</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We are rapidly expanding our platform to include everything you need to work faster in the browser. Stay tuned for these upcoming additions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Image Tools */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 text-xs font-bold uppercase py-1 px-3 rounded-full">Coming Soon</div>
               <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center mb-6">
                 <ImageIcon className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Image Tools</h3>
               <ul className="space-y-3 text-slate-600 font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> JPG to PDF</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> PDF to JPG</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Image Compressor</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div> Image Converter</li>
               </ul>
            </div>

            {/* Text Tools */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 text-xs font-bold uppercase py-1 px-3 rounded-full">Coming Soon</div>
               <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-6">
                 <Type className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Text Tools</h3>
               <ul className="space-y-3 text-slate-600 font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Word Counter</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Character Counter</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div> Case Converter</li>
               </ul>
            </div>

            {/* Calculators */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 text-xs font-bold uppercase py-1 px-3 rounded-full">Coming Soon</div>
               <div className="w-12 h-12 bg-cyan-100 text-cyan-600 rounded-xl flex items-center justify-center mb-6">
                 <Calculator className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">Calculators</h3>
               <ul className="space-y-3 text-slate-600 font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Percentage Calculator</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Loan Calculator</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div> Unit Converter</li>
               </ul>
            </div>

            {/* AI Tools */}
            <div className="bg-white border border-slate-200 p-8 rounded-3xl relative overflow-hidden">
               <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 text-xs font-bold uppercase py-1 px-3 rounded-full">Coming Soon</div>
               <div className="w-12 h-12 bg-fuchsia-100 text-fuchsia-600 rounded-xl flex items-center justify-center mb-6">
                 <Sparkles className="w-6 h-6" />
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-4">AI Tools</h3>
               <ul className="space-y-3 text-slate-600 font-medium">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div> AI Summarizer</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div> AI Rewriter</li>
               </ul>
            </div>
          </div>

          {/* SEO Value Props */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 py-12 border-t border-slate-200" id="why-choose-us">
            <div className="flex flex-col items-center text-center gap-4 text-slate-500">
              <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl">Secure Processing</h3>
              <p className="text-sm leading-relaxed">We permanently delete all your files from our servers shortly after processing. Your data is safe and your privacy is guaranteed.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 text-slate-500">
              <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl">100% Free & Fast</h3>
              <p className="text-sm leading-relaxed">No registration, no subscriptions, no paywalls. Transform your documents in the cloud at lightning-fast speeds directly through your browser.</p>
            </div>
            <div className="flex flex-col items-center text-center gap-4 text-slate-500">
              <div className="w-16 h-16 bg-white shadow-sm border border-slate-100 rounded-2xl flex items-center justify-center">
                <Settings className="w-8 h-8 text-indigo-500" />
              </div>
              <h3 className="text-slate-900 font-bold text-xl">Works on Any Device</h3>
              <p className="text-sm leading-relaxed">ToolForge works flawlessly on Windows, Mac, Linux, iOS, and Android. Use any modern web browser to access our tools from anywhere.</p>
            </div>
          </div>

          {/* How It Works Section */}
          <section className="py-16 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">How ToolForge Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xl mb-4">1</div>
                <h3 className="font-bold text-slate-800 mb-2">Select a Tool</h3>
                <p className="text-slate-600 text-sm">Choose from our wide range of free file management and conversion tools.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xl mb-4">2</div>
                <h3 className="font-bold text-slate-800 mb-2">Upload Files</h3>
                <p className="text-slate-600 text-sm">Securely upload your files directly from your device into your browser.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-xl mb-4">3</div>
                <h3 className="font-bold text-slate-800 mb-2">Download Results</h3>
                <p className="text-slate-600 text-sm">Get your processed files instantly. No watermarks, no signups required.</p>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 border-t border-slate-200">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {HOME_FAQS.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </section>

          {/* SEO Article Text */}
          <article className="mt-16 w-full prose prose-slate max-w-none text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The All-In-One Free Online Tools Platform</h2>
            <p className="text-lg text-slate-600 mb-6">
              Managing files shouldn't be frustrating or expensive. With ToolForge, you can 
              <Link to="/merge-pdf" className="text-indigo-600 font-bold hover:underline mx-1">merge PDF online free</Link>, 
              <Link to="/split-pdf" className="text-indigo-600 font-bold hover:underline mx-1">split PDF pages</Link>, 
              <Link to="/compress-pdf" className="text-indigo-600 font-bold hover:underline mx-1">compress PDF files</Link> for email, and effortlessly convert 
              <Link to="/pdf-to-word" className="text-indigo-600 font-bold hover:underline mx-1">PDF to Word DOCX</Link> or 
              <Link to="/word-to-pdf" className="text-indigo-600 font-bold hover:underline mx-1">Word to PDF</Link>. 
              We built ToolForge to deliver enterprise-grade performance without the recurring software subscriptions.
            </p>
            <p className="text-lg text-slate-600">
              Trusted by students, educators, business professionals, and government personnel worldwide. Whether you need to combine legal disclosures, optimize a scanned resume, or transform contracts into editable formats, ToolForge completes your tasks directly inside your browser with maximum privacy and speed.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
