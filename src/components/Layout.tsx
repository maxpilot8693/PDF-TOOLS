import { ReactNode } from 'react';
import { NavLink, Link } from 'react-router';
import { TOOLS } from '@/src/tools';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="h-16 px-4 sm:px-8 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-50 w-full shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ToolForge</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <NavLink to="/" className="hover:text-indigo-600">Home</NavLink>
          <div className="group relative">
            <span className="hover:text-indigo-600 cursor-pointer">Tools</span>
            <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2">
              {TOOLS.map((t) => (
                <NavLink key={t.id} to={t.path} className="px-3 py-2 hover:bg-slate-50 rounded-lg text-slate-700 hover:text-indigo-600 transition-colors">
                  {t.name}
                </NavLink>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-16 pb-8 px-4 sm:px-8 text-slate-400">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">ToolForge</span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs">
              Free Online Tools for Everyone. The fastest, most secure way to manage your files online.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li><a href="/#tools" className="hover:text-indigo-400 transition-colors">PDF Tools</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <div>© {new Date().getFullYear()} ToolForge.</div>
          <div className="flex gap-4 mt-4 md:mt-0 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
