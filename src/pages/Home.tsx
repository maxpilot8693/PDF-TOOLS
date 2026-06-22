import { Seo } from '@/src/components/Seo';
import { Layout } from '@/src/components/Layout';
import { TOOLS } from '@/src/tools';
import { getToolColorClasses } from '@/src/components/ToolPageLayout';
import { Link } from 'react-router';
import { ShieldCheck, Zap, Settings, ImageIcon, Type, Calculator, Sparkles } from 'lucide-react';

export function Home() {
  return (
    <Layout>
      <Seo 
        title="ToolForge | Free Online Tools for Everyone"
        description="Free online tools for file conversion, PDF editing, image processing, text utilities, and productivity. Fast, secure, and easy to use."
      />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6366f1] to-[#a855f7] py-24 flex flex-col items-center justify-center px-4 relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 text-center z-10 tracking-tight leading-tight">
          ToolForge
        </h1>
        <h2 className="text-2xl md:text-3xl text-white font-bold mb-6 text-center z-10 tracking-tight">
          Free Online Tools for Everyone
        </h2>
        <p className="text-indigo-100 text-lg sm:text-xl mb-10 max-w-2xl text-center font-light z-10">
          Convert, merge, split, compress, and manage files online instantly.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 z-10 w-full sm:w-auto px-4">
          <a href="#tools" className="bg-white text-indigo-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all text-center">
            Explore Tools
          </a>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4 text-white/80 text-xs md:text-sm uppercase tracking-widest font-bold z-10">
          <span>100% Free</span>
          <span className="hidden sm:inline">•</span>
          <span>No Registration Required</span>
          <span className="hidden sm:inline">•</span>
          <span>Secure File Processing</span>
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
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Is ToolForge really free?</h3>
                <p className="text-slate-600">Yes, ToolForge is 100% free to use. There are no hidden fees, no required subscriptions, and no premium tiers. We believe essential file tools should be accessible to everyone.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Do I need to create an account?</h3>
                <p className="text-slate-600">No! You can use all our tools immediately without registering or logging in. Just open the tool you need and start working right away.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Are my files stored safely?</h3>
                <p className="text-slate-600">We take your privacy seriously. Any files uploaded to our cloud servers for processing are encrypted and permanently deleted automatically shortly after conversion.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Can I use ToolForge on my mobile phone?</h3>
                <p className="text-slate-600">Absolutely. ToolForge is fully responsive and works beautifully on any mobile browser, whether you are using an iPhone, iPad, or Android device.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">What file formats does ToolForge support?</h3>
                <p className="text-slate-600">We currently specialize in PDF and Word documents, but are expanding rapidly to support JPG, PNG, Excel, and various other file types.</p>
              </div>
            </div>
          </section>

          {/* SEO Intro Text */}
          <article className="mt-16 w-full prose prose-slate max-w-none text-center max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">The All-In-One Tools Platform</h2>
            <p className="text-lg text-slate-600 mb-6">
              Dealing with files should be easy. Our free online tool suite allows you to 
              <strong> merge PDF online</strong>, <strong>split PDF pages</strong>, 
              <strong> compress PDFs for email</strong>, and effortlessly convert 
              <strong> PDF to Word</strong> or <strong> Word to PDF</strong>. We built ToolForge to provide 
              enterprise-grade file management without the ridiculous subscription fees.
            </p>
            <p className="text-lg text-slate-600">
              With over a million successful conversions, our reliable infrastructure ensures that your formatting 
              and layouts remain exactly as you intend. Whether you need to reorganize a massive report or compress 
              a scanned invoice, ToolForge handles it instantly in your browser.
            </p>
          </article>
        </div>
      </section>
    </Layout>
  );
}
