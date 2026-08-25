import React from 'react';
import { 
  FileDown, 
  Eye, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  ArrowRight, 
  Award,
  BookOpen,
  CheckCircle2,
  Send
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ProfileCard } from './ProfileCard';

interface HeroProps {
  onDownloadResume: () => void;
  onOpenResumeModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onDownloadResume,
  onOpenResumeModal,
}) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Ambient background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-600/15 via-teal-500/10 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/5 blur-[90px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Info + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Text Content & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-medium mb-6 shadow-sm shadow-emerald-500/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Holy Cross College, Trichy • MCA (2025–2027)</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.1] mb-5">
              Hi, I'm{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            {/* Subtitle & Role */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 font-medium mb-5 max-w-2xl">
              Web Developer & Data Analytics Specialist creating responsive web architectures, IoT smart systems, and full-stack AI applications.
            </p>

            {/* Badges / Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 text-xs text-slate-400 mb-8">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Trichy & Mayiladuthurai, TN</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Best Innovator Winner 2026</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <BookOpen className="w-3.5 h-3.5 text-cyan-400" />
                <span>BCA Distinction (8.61 CGPA)</span>
              </div>
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-8 w-full sm:w-auto">
              <button
                onClick={onDownloadResume}
                id="hero-download-resume-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-950 bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 hover:from-emerald-300 hover:to-cyan-300 shadow-lg shadow-emerald-500/25 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileDown className="w-5 h-5" />
                <span>Download PDF Resume</span>
              </button>

              <button
                onClick={onOpenResumeModal}
                id="hero-preview-resume-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 hover:border-emerald-500/40 transition-all duration-200"
              >
                <Eye className="w-4 h-4 text-emerald-400" />
                <span>View Online CV</span>
              </button>

              <a
                href="#contact"
                id="hero-contact-cta-btn"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-slate-950/60 hover:bg-slate-900 border border-slate-800 transition-all duration-200"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-emerald-400" />
                <span>GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-teal-400" />
                <span>Email</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-xs font-mono text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Interactive Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <ProfileCard />
          </div>

        </div>

        {/* Quick Highlights Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 mt-16 max-w-5xl mx-auto">
          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/90 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all group">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-400 group-hover:scale-105 transition-transform">
              8.25
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">MCA PG CGPA</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Holy Cross College</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/90 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all group">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-teal-300 group-hover:scale-105 transition-transform">
              8.61
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">BCA UG CGPA</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Distinction Graduate</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/90 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all group">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-cyan-400 group-hover:scale-105 transition-transform">
              4
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">Internships</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Web • IoT • UI/UX • Python</div>
          </div>

          <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800/90 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all group">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-emerald-300 group-hover:scale-105 transition-transform">
              1
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">Research Paper</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Smart Irrigation IoT</div>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-slate-900/60 backdrop-blur-sm border border-slate-800/90 rounded-xl p-4 text-center hover:border-emerald-500/30 transition-all group">
            <div className="text-2xl sm:text-3xl font-heading font-extrabold text-amber-400 group-hover:scale-105 transition-transform">
              2026
            </div>
            <div className="text-xs text-slate-400 font-medium mt-1">Best Innovator</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Departmental Honor</div>
          </div>
        </div>

      </div>
    </section>
  );
};
