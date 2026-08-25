import React, { useState, useEffect } from 'react';
import { 
  FileDown, 
  Menu, 
  X, 
  Sparkles, 
  Github, 
  Linkedin, 
  Mail, 
  Eye
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onDownloadResume,
  onOpenResumeModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Internships', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Research & Certs', href: '#research-certs' },
    { label: 'Skills', href: '#skills' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          id="navbar-logo-link"
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px] shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-shadow">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
              <span className="font-heading font-bold text-emerald-400 text-lg tracking-wider">SJ</span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-slate-100 text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                MCA 27
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono hidden sm:block">Full-Stack & Data Portfolio</p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-emerald-400 hover:bg-slate-900/60 rounded-lg transition-all"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          <button
            onClick={onOpenResumeModal}
            id="nav-preview-resume-btn"
            className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-200 hover:text-emerald-300 bg-slate-900/90 hover:bg-slate-800 border border-emerald-500/30 rounded-lg transition-all shadow-sm"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-400" />
            <span>Preview CV</span>
          </button>

          <button
            onClick={onDownloadResume}
            id="nav-download-resume-btn"
            className="flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 rounded-lg transition-all shadow-md shadow-emerald-500/20 active:scale-95"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>Download PDF</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onDownloadResume}
            aria-label="Download Resume"
            className="p-2 text-slate-950 bg-emerald-400 rounded-lg shadow-sm"
          >
            <FileDown className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-300 hover:text-white bg-slate-900 border border-slate-800 rounded-lg"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 px-5 pt-3 pb-6 space-y-3 mt-2 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-slate-800">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-slate-300 hover:text-emerald-400 hover:bg-slate-900 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg"
            >
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Preview Full Resume</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onDownloadResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-slate-950 bg-emerald-400 rounded-lg font-medium shadow-md shadow-emerald-500/20"
            >
              <FileDown className="w-4 h-4" />
              <span>Download PDF Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
