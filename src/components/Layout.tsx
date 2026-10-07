import { ReactNode, useState } from 'react';
import { NavLink, Link } from 'react-router';
import { TOOLS } from '@/src/tools';
import { Menu, X } from 'lucide-react';

export function Layout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 flex flex-col">
      {/* Header */}
      <header className="h-16 px-4 sm:px-8 flex items-center justify-between bg-white border-b border-slate-200 sticky top-0 z-50 w-full shadow-sm">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ToolForge</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <NavLink to="/" className={({ isActive }) => `hover:text-indigo-600 transition-colors ${isActive ? 'text-indigo-600 font-semibold' : ''}`}>Home</NavLink>
          <div className="group relative">
            <span className="hover:text-indigo-600 cursor-pointer py-2">Tools</span>
            <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-slate-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all flex flex-col p-2 z-50">
              {TOOLS.map((t) => (
                <NavLink key={t.id} to={t.path} className="px-3 py-2 hover:bg-indigo-50/60 rounded-xl text-slate-700 hover:text-indigo-600 transition-colors text-sm font-medium">
                  {t.name}
                </NavLink>
              ))}
            </div>
          </div>
          <NavLink to="/privacy" className={({ isActive }) => `hover:text-indigo-600 transition-colors ${isActive ? 'text-indigo-600 font-semibold' : ''}`}>Privacy</NavLink>
          <NavLink to="/terms" className={({ isActive }) => `hover:text-indigo-600 transition-colors ${isActive ? 'text-indigo-600 font-semibold' : ''}`}>Terms</NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 shadow-lg z-40">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-slate-800 font-semibold hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>
          <div className="pt-2 border-t border-slate-100">
            <div className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Available Tools</div>
            <div className="space-y-1">
              {TOOLS.map((t) => (
                <Link
                  key={t.id}
                  to={t.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-3 py-2 text-sm text-slate-700 hover:text-indigo-600 hover:bg-indigo-50/60 rounded-xl transition-colors"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-slate-100">
            <div className="px-3 text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Legal</div>
            <div className="flex gap-4 px-3 py-1 text-sm font-medium text-slate-600">
              <Link to="/privacy" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms" onClick={() => setMobileMenuOpen(false)} className="hover:text-indigo-600">Terms of Use</Link>
            </div>
          </div>
        </div>
      )}

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
            <h4 className="text-white font-semibold mb-4">Legal & Privacy</h4>
            <p className="text-xs text-slate-500 mb-3 max-w-sm">
              ToolForge is committed to user privacy with ephemeral file processing, automatic deletion, and zero data selling.
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/privacy" className="hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-indigo-400 transition-colors">Terms of Use</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} ToolForge. All rights reserved. Free Online Tools for Everyone.</div>
          <div className="flex gap-6 font-semibold uppercase tracking-wider text-[11px]">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Use</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
