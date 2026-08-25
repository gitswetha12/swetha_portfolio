import React from 'react';
import { 
  ArrowUp, 
  Heart, 
  FileDown, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onDownloadResume,
  onOpenResumeModal
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-[1.5px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <span className="font-heading font-bold text-emerald-400 text-sm tracking-wider">SJ</span>
                </div>
              </div>
              <span className="font-heading text-lg font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              Master of Computer Applications (MCA) candidate at Holy Cross College, Trichy. Specializing in responsive web architecture, IoT research, AI systems, and business intelligence analytics.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-blue-400 border border-slate-800 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-emerald-400 border border-slate-800 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-emerald-400 transition-colors">About & Leadership</a>
              </li>
              <li>
                <a href="#education" className="hover:text-emerald-400 transition-colors">Education & DIT</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-emerald-400 transition-colors">Internships (4)</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Projects</a>
              </li>
              <li>
                <a href="#research-certs" className="hover:text-emerald-400 transition-colors">Research Paper & Certs</a>
              </li>
              <li>
                <a href="#achievements" className="hover:text-emerald-400 transition-colors">Honors & Awards</a>
              </li>
            </ul>
          </div>

          {/* Resume & Git CTA */}
          <div className="space-y-3">
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-slate-300">
              Documents & Code
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onDownloadResume}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-bold transition-colors shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Download Resume (PDF)</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-semibold border border-slate-800 transition-colors"
              >
                <span>View Full CV Online</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Swetha J. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800 transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
