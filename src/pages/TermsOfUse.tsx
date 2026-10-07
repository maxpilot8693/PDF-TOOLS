import { Link } from 'react-router';
import { Layout } from '@/src/components/Layout';
import { Seo } from '@/src/components/Seo';
import { 
  FileText, 
  Scale, 
  ShieldCheck, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  Mail, 
  ArrowLeft,
  Sparkles,
  HelpCircle
} from 'lucide-react';

export function TermsOfUse() {
  const lastUpdated = "October 2026";

  return (
    <Layout>
      <Seo
        title="Terms of Use | ToolForge"
        description="Review the ToolForge Terms of Use. Understand service usage rules, user ownership of uploaded files, disclaimers, and guidelines."
        canonical="/terms"
      />

      {/* Header Banner */}
      <section className="bg-gradient-to-br from-indigo-900 via-indigo-800 to-slate-900 text-white py-16 px-4 sm:px-8 border-b border-indigo-950/40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-300 hover:text-white uppercase tracking-wider transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Tools
            </Link>
            <span className="text-indigo-400/60">•</span>
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-300 bg-indigo-500/20 px-2.5 py-0.5 rounded-full border border-indigo-400/30">
              <Scale className="w-3 h-3" /> Legal Terms & Guidelines
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Terms of Use
          </h1>
          <p className="text-indigo-100 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Please read these terms carefully before accessing or using ToolForge. By using our website and tools, you agree to be bound by these provisions.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-indigo-300">
            <Clock className="w-3.5 h-3.5" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-slate-100/70 border-b border-slate-200 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            At a Glance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">You Own Your Files</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You retain 100% intellectual property and copyright over all documents processed.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Free to Access</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No subscription, credit card, or user registration required for any utility.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <AlertCircle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Fair Usage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Automated scraping, denial-of-service, or transmitting illegal files is strictly prohibited.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">No Warranty</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Provided on an &ldquo;as-is&rdquo; and &ldquo;as-available&rdquo; basis for general productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Terms Body */}
      <section className="py-12 px-4 sm:px-8 bg-white flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-10">
            
            {/* 1. Acceptance */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing, browsing, or utilizing the web application and document processing services provided by <strong>ToolForge</strong> (&ldquo;Service,&rdquo; &ldquo;Website,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;), you acknowledge that you have read, understood, and agree to be bound by these Terms of Use (&ldquo;Terms&rdquo;) and our companion <Link to="/privacy" className="text-indigo-600 hover:underline font-medium">Privacy Policy</Link>.
              </p>
              <p className="text-sm text-slate-500 mt-2">
                If you do not agree with any of these terms, you are prohibited from using or accessing this site.
              </p>
            </article>

            {/* 2. Description of Services */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                2. Description of Services
              </h2>
              <p>
                ToolForge provides free browser-based and cloud-assisted file manipulation tools, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>PDF Merging:</strong> Combining multiple PDF documents into a unified file.</li>
                <li><strong>PDF Splitting:</strong> Extracting specific page ranges or creating individual page documents.</li>
                <li><strong>PDF Compression:</strong> Optimizing PDF file size for storage or email transmission.</li>
                <li><strong>Document Conversions:</strong> Converting PDF documents into editable Word files (.docx) and vice versa.</li>
              </ul>
              <p className="mt-3">
                We reserve the right to modify, add, or discontinue any specific tool or feature at any time without prior notice.
              </p>
            </article>

            {/* 3. Free & Open Access */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                3. Free & Open Access
              </h2>
              <p>
                ToolForge is provided completely free of charge. You are not required to create an account, purchase a subscription, or enter any payment credentials to access standard tool features. We do not enforce artificial paywalls or restrict standard file downloads.
              </p>
            </article>

            {/* 4. Intellectual Property & Your Content */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                4. Your Content & Intellectual Property Rights
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  You Retain 100% Ownership
                </h3>
                <p className="text-sm text-slate-600">
                  ToolForge claims absolutely no copyright, ownership, or intellectual property rights over any files, images, or documents you upload or process through our tools. You retain complete ownership and all rights in your content.
                </p>
                <p className="text-sm text-slate-600">
                  You grant ToolForge only the strictly necessary, non-exclusive, transient license to transmit, temporarily cache, and execute programmatic transformations on your files solely for the direct purpose of returning your requested converted document to you.
                </p>
              </div>
            </article>

            {/* 5. User Conduct & Acceptable Use */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                5. User Conduct & Acceptable Use Policy
              </h2>
              <p>
                You agree to use ToolForge only for lawful purposes. You specifically agree not to:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Upload files containing malicious code, viruses, trojans, worms, or software bombs designed to disrupt server infrastructure.</li>
                <li>Process documents that infringe upon third-party copyrights, patents, trademarks, trade secrets, or proprietary rights without legal authorization.</li>
                <li>Transmit illicit, abusive, defamatory, or unlawful materials.</li>
                <li>Employ automated bots, spiders, mass scrapers, or scripts that subject ToolForge&rsquo;s infrastructure to abnormal loads or denial-of-service conditions.</li>
                <li>Reverse-engineer or bypass security barriers, rate-limiters, or API endpoints.</li>
              </ul>
            </article>

            {/* 6. Disclaimers of Warranties */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                6. Disclaimers of Warranties (&ldquo;As-Is&rdquo;)
              </h2>
              <p className="uppercase text-xs font-semibold tracking-wider text-slate-500 mb-2">Important Legal Notice</p>
              <div className="bg-amber-50/70 border border-amber-200/80 p-5 rounded-2xl text-slate-800 text-sm space-y-2">
                <p>
                  ToolForge is provided on an <strong>&ldquo;AS IS&rdquo;</strong> and <strong>&ldquo;AS AVAILABLE&rdquo;</strong> basis without warranties of any kind, whether express, implied, statutory, or otherwise, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
                </p>
                <p>
                  While we strive for maximum accuracy, file fidelity, and reliability, we do not warrant that:
                </p>
                <ul className="list-disc pl-6 space-y-1 text-slate-700">
                  <li>The service will be uninterrupted, error-free, timely, or completely secure.</li>
                  <li>Conversions involving complex fonts, vector paths, or scanned graphics will result in identical layout fidelity in every edge case.</li>
                  <li>Files will be permanently retrievable (files are purposely deleted after processing).</li>
                </ul>
              </div>
            </article>

            {/* 7. Limitation of Liability */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, in no event shall ToolForge, its founders, contributors, partners, or affiliates be liable for any direct, indirect, incidental, special, consequential, or punitive damages—including but not limited to loss of profits, loss of data, loss of goodwill, business interruption, or file corruption—arising from or in connection with your use or inability to use the service.
              </p>
              <p className="mt-2 text-sm text-slate-500">
                You are solely responsible for maintaining local backup copies of all original files prior to submitting them to any online conversion utility.
              </p>
            </article>

            {/* 8. Third-Party Links & Integrations */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                8. Third-Party Links & Integrations
              </h2>
              <p>
                ToolForge may link to or incorporate third-party technologies (such as CloudConvert APIs or external developer resources). We do not control and are not responsible for the contents, policies, or practices of any third-party websites or services.
              </p>
            </article>

            {/* 9. Modifications to Terms */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                9. Changes to Terms
              </h2>
              <p>
                We reserve the right to revise or update these Terms of Use at our sole discretion. Any changes will become effective immediately upon posting to this page with an updated &ldquo;Last Updated&rdquo; timestamp. Your continued use of the website following any update signifies your acceptance of the revised Terms.
              </p>
            </article>

            {/* 10. Governing Law */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                10. Governing Law & Severability
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which the service operates, without regard to conflict of law principles. If any provision of these Terms is deemed unlawful or unenforceable, that provision shall be severable and shall not affect the validity of the remaining provisions.
              </p>
            </article>

            {/* 11. Contact */}
            <article className="pb-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                11. Contact & Legal Inquiries
              </h2>
              <p>
                If you have questions regarding these Terms of Use or wish to submit an intellectual property notice, please contact:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">ToolForge Legal Team</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Email: <a href="mailto:legal@toolforge.app" className="text-indigo-600 hover:underline font-medium">legal@toolforge.app</a>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Please provide detailed information in your inquiry to facilitate prompt resolution.
                  </p>
                </div>
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-slate-50 border-t border-slate-200 py-12 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Back to free file tools</h2>
          <p className="text-sm text-slate-600 mb-6">Convert, merge, split, and compress your documents with zero hassle.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
              Explore Tools
            </Link>
            <Link to="/privacy" className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
              View Privacy Policy
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
