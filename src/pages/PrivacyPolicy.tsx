import { Link } from 'react-router';
import { Layout } from '@/src/components/Layout';
import { Seo } from '@/src/components/Seo';
import { 
  ShieldCheck, 
  Trash2, 
  Lock, 
  EyeOff, 
  Server, 
  FileCheck, 
  Globe2, 
  HelpCircle, 
  Mail, 
  ArrowLeft,
  Clock
} from 'lucide-react';

export function PrivacyPolicy() {
  const lastUpdated = "October 2026";

  return (
    <Layout>
      <Seo
        title="Privacy Policy | ToolForge"
        description="Read the ToolForge Privacy Policy. Learn how we handle your files with ephemeral processing, automatic deletion, and zero data selling."
        canonical="/privacy"
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
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
              <ShieldCheck className="w-3 h-3" /> Privacy-First Architecture
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-indigo-100 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
            Your privacy and file security are the foundation of ToolForge. We process files ephemerally, never monetize user data, and require no account registration.
          </p>

          <div className="mt-6 flex items-center gap-2 text-xs text-indigo-300">
            <Clock className="w-3.5 h-3.5" />
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </section>

      {/* Summary Highlights */}
      <section className="bg-slate-100/70 border-b border-slate-200 py-10 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">
            Key Privacy Guarantees
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                <Trash2 className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Automatic Deletion</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Processed files are removed automatically and permanently within minutes.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <EyeOff className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Zero Data Selling</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We never inspect, harvest, or sell the contents of your documents or metadata.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">Encrypted In Transit</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                All communications and file uploads use modern TLS/HTTPS encryption.
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="w-9 h-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-sm">No Accounts Needed</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Zero sign-ups or profile tracking. Pure utility whenever you visit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Privacy Body */}
      <section className="py-12 px-4 sm:px-8 bg-white flex-1">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-10">
            
            {/* 1. Overview */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                1. Overview & Scope
              </h2>
              <p>
                Welcome to <strong>ToolForge</strong> (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;). ToolForge operates a suite of free web-based document utilities, including PDF merging, PDF splitting, PDF compression, and document conversions.
              </p>
              <p>
                This Privacy Policy explains what information we collect, how we handle your files, our strict retention practices, and your privacy rights when you visit our website at <code>toolforge.vercel.app</code> or use any of our web utilities.
              </p>
            </article>

            {/* 2. Information We Collect */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                2. Information We (Do Not) Collect
              </h2>
              <p>
                Our philosophy is simple: we minimize data collection to the absolute technical baseline required to fulfill your file processing request.
              </p>

              <div className="mt-4 space-y-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1 text-base">A. Document Content & Uploaded Files</h3>
                  <p className="text-sm text-slate-600">
                    When you select or upload a file (PDF, Word, or other supported formats), that file is processed strictly for executing the transformation you requested (e.g., merging pages, compressing size, or converting format). We do not read, index, parse for artificial intelligence training, or retain the content of your files.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1 text-base">B. Personal Identifiable Information</h3>
                  <p className="text-sm text-slate-600">
                    ToolForge does not require user accounts, emails, passwords, credit card numbers, or contact details to access any of its tools. Unless you voluntarily email our support desk, we do not store your name or email.
                  </p>
                </div>

                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <h3 className="font-semibold text-slate-900 mb-1 text-base">C. Technical & Log Data</h3>
                  <p className="text-sm text-slate-600">
                    Like virtually all internet services, our hosting infrastructure receives automated server logs containing anonymized IP addresses, browser user-agent strings, referring URLs, request timestamps, and basic HTTP error codes. These logs are used solely for rate limiting, DDoS defense, and debugging site performance.
                  </p>
                </div>
              </div>
            </article>

            {/* 3. How File Processing Works */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                3. How File Processing Works
              </h2>
              <p>
                ToolForge utilizes an optimized hybrid architecture designed for speed and security:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <strong>Client-Side Processing (Browser Memory):</strong> Whenever possible (such as PDF merging, PDF splitting, and basic client-side PDF tasks), files are manipulated directly inside your browser&rsquo;s JavaScript runtime using client-side libraries. In these instances, your file never leaves your computer or device.
                </li>
                <li>
                  <strong>Server-Side Conversion APIs:</strong> Complex document conversions (such as high-fidelity PDF-to-Word or Word-to-PDF formatting) are routed through secure, encrypted conversion pipelines (such as CloudConvert). Files transmitted to these APIs are held ephemerally in RAM or temporary scratch storage solely for the seconds required to compute the conversion, after which the generated output is served back to you.
                </li>
              </ul>
            </article>

            {/* 4. Data Retention & Deletion */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                4. Data Retention & Deletion Schedule
              </h2>
              <div className="bg-indigo-50/70 border border-indigo-100 p-5 rounded-2xl">
                <p className="text-slate-800 text-sm font-medium">
                  We enforce an automatic deletion policy:
                </p>
                <ul className="list-disc pl-6 space-y-1.5 mt-2 text-sm text-slate-700">
                  <li>Temporary server conversion files are automatically and permanently purged within 1 to 24 hours at the absolute latest (typically within minutes of job completion).</li>
                  <li>No permanent backups or archives of converted user files are created.</li>
                  <li>Once deleted, files cannot be recovered by you or by our engineering team.</li>
                </ul>
              </div>
            </article>

            {/* 5. Cookies & Tracking */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                5. Cookies & Tracking Technologies
              </h2>
              <p>
                ToolForge respects the &ldquo;Do Not Track&rdquo; web standards. We do not use intrusive cross-site tracking cookies, behavioral tracking pixels, or third-party advertising profile identifiers. We may use essential local storage items solely to remember UI preferences (such as light/dark mode if selected) or temporary session state while your file is actively downloading.
              </p>
            </article>

            {/* 6. Third-Party Service Providers */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                6. Third-Party Service Providers
              </h2>
              <p>
                We partner only with industry-standard, SOC 2 / ISO 27001 compliant cloud infrastructure providers who adhere to rigorous data protection standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Hosting & CDN:</strong> Vercel / Cloud Run (for serving static web assets and secure HTTPS delivery).</li>
                <li><strong>Conversion Engine:</strong> CloudConvert / API partners (subject to strict data processing agreements guaranteeing temporary storage and prompt file destruction).</li>
              </ul>
            </article>

            {/* 7. GDPR & CCPA/CPRA Rights */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                7. Your Rights Under GDPR & CCPA/CPRA
              </h2>
              <p>
                Depending on your location (including the European Economic Area, United Kingdom, and California), you possess specific statutory rights regarding personal data:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li><strong>Right to Know & Access:</strong> Because we do not link files to identifiable user profiles, we do not maintain a permanent database of your identity.</li>
                <li><strong>Right to Deletion:</strong> Your files are deleted automatically by design.</li>
                <li><strong>Right to Opt-Out of Data Sale:</strong> We do not sell or share personal data under California Civil Code § 1798.140 or any other jurisdiction.</li>
              </ul>
            </article>

            {/* 8. Security Measures */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                8. Security Safeguards
              </h2>
              <p>
                We implement administrative, technical, and physical safeguards designed to protect files during transmission and processing. All connections to ToolForge are secured with TLS 1.3 / HTTPS encryption to prevent eavesdropping or tampering.
              </p>
            </article>

            {/* 9. Children's Privacy */}
            <article className="border-b border-slate-100 pb-8">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                9. Children&rsquo;s Privacy (COPPA)
              </h2>
              <p>
                ToolForge is a general audience utility and is not directed at children under the age of 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.
              </p>
            </article>

            {/* 10. Contact Us */}
            <article className="pb-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2 mb-3">
                10. Contact Us
              </h2>
              <p>
                If you have questions, feedback, or data privacy requests regarding this Privacy Policy, please reach out to us:
              </p>
              <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-base">ToolForge Privacy Desk</h4>
                  <p className="text-sm text-slate-600 mt-1">
                    Email: <a href="mailto:support@toolforge.app" className="text-indigo-600 hover:underline font-medium">support@toolforge.app</a>
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Responses are typically provided within 48 business hours.
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
          <h2 className="text-xl font-bold text-slate-900 mb-2">Ready to work with your files?</h2>
          <p className="text-sm text-slate-600 mb-6">Explore our suite of 100% free, browser-based document utilities today.</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/" className="px-5 py-2.5 bg-indigo-600 text-white rounded-xl text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
              Explore All Tools
            </Link>
            <Link to="/terms" className="px-5 py-2.5 bg-white border border-slate-300 text-slate-700 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-colors shadow-sm">
              Read Terms of Use
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
