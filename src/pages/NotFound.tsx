import { Link } from 'react-router';
import { Layout } from '@/src/components/Layout';
import { Seo } from '@/src/components/Seo';
import { TOOLS } from '@/src/tools';
import { getToolColorClasses } from '@/src/components/ToolPageLayout';
import { FileQuestion, ArrowLeft, Home } from 'lucide-react';

export function NotFound() {
  return (
    <Layout>
      <Seo
        title="Page Not Found (404) | ToolForge"
        description="The page you are looking for does not exist. Explore our suite of free online PDF and file utilities."
      />

      <section className="flex-1 flex flex-col items-center justify-center px-4 py-20 text-center">
        <div className="w-20 h-20 bg-indigo-50 text-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-indigo-100">
          <FileQuestion className="w-10 h-10" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100 mb-3">
          Error 404
        </span>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          Page Not Found
        </h1>

        <p className="text-slate-600 max-w-md mx-auto text-base sm:text-lg mb-8 leading-relaxed">
          The link you entered may be broken, or the tool may have moved. Choose a tool below or head back to the homepage.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:bg-indigo-700 transition-colors"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>
          <a
            href="/#tools"
            className="inline-flex items-center gap-2 bg-white text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
          >
            Explore All Tools
          </a>
        </div>

        {/* Quick Tools Links */}
        <div className="max-w-4xl w-full border-t border-slate-200 pt-12 text-left">
          <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-6 text-center">
            Popular Free Tools
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              const colors = getToolColorClasses(tool.id);
              return (
                <Link
                  key={tool.id}
                  to={tool.path}
                  className={`bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-3 hover:-translate-y-0.5 transition-transform hover:shadow-md ${colors.border}`}
                >
                  <div className={`w-10 h-10 ${colors.bg} ${colors.text} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-slate-900 text-sm truncate">{tool.name}</h3>
                    <p className="text-xs text-slate-500 truncate">{tool.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
