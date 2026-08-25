import React, { useState } from 'react';
import { 
  FileText, 
  Award, 
  Search, 
  Calendar, 
  Building, 
  CheckCircle, 
  Cpu, 
  Droplets, 
  Sparkles, 
  BadgeCheck, 
  ExternalLink,
  BookOpenCheck
} from 'lucide-react';
import { 
  RESEARCH_PAPER, 
  CERTIFICATES_DATA, 
  WORKSHOPS_DATA, 
  Certificate 
} from '../data/portfolioData';
import { InteractiveTiltCard } from './InteractiveTiltCard';

export const ResearchAndCertificates: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Cloud & Data', 'AI & Tech', 'Programming', 'Academic & Leadership'];

  const filteredCerts = CERTIFICATES_DATA.filter((c) => {
    const matchesCategory = selectedCategory === 'All' || c.category === selectedCategory;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.organization.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (c.description && c.description.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="research-certs" className="py-20 bg-slate-950/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Research & Credentials</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            International Research & Certifications
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Peer-reviewed conference research publication in IoT agriculture automation alongside professional credentials from Microsoft, Accenture, and MongoDB.
          </p>
        </div>

        {/* 1. Research Paper Spotlight Banner */}
        <InteractiveTiltCard
          maxTilt={4}
          glareColor="rgba(52, 211, 153, 0.12)"
          glareOpacity={0.18}
          className="mb-16"
        >
          <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-emerald-950/40 border border-emerald-500/30 rounded-3xl p-6 sm:p-9 relative overflow-hidden shadow-2xl">
            {/* Ambient decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold font-mono">
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Peer-Reviewed International Conference Presentation</span>
                </div>
                <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                  {RESEARCH_PAPER.date}
                </span>
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white mb-3">
                Research Paper: "{RESEARCH_PAPER.title}"
              </h3>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {RESEARCH_PAPER.summary}
                  </p>

                  <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
                    <div className="flex items-start gap-2">
                      <Building className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Conference: </strong>
                        {RESEARCH_PAPER.conference}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>
                        <strong className="text-white">Organizer: </strong>
                        {RESEARCH_PAPER.organizer}, {RESEARCH_PAPER.institution}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Research Focus Tech Pill Box */}
                <div className="lg:col-span-4 bg-slate-950/80 border border-slate-800 rounded-2xl p-5 space-y-3">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-1.5">
                    <Droplets className="w-4 h-4 text-cyan-400" />
                    <span>Key Innovation Pillars</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Automated Soil Moisture Telemetry</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Microcontroller Actuation Logic</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Dynamic Resource Optimization</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Empirical Field Validation Model</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </InteractiveTiltCard>

        {/* 2. Certifications Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white flex items-center gap-2">
                <BookOpenCheck className="w-6 h-6 text-emerald-400" />
                <span>Professional Certifications & Diplomas</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">Verified industry credentials and specialized university diplomas</p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search certifications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCerts.map((cert, index) => (
              <InteractiveTiltCard
                key={cert.title + index}
                maxTilt={6}
                glareColor="rgba(52, 211, 153, 0.1)"
                glareOpacity={0.15}
                className="h-full"
              >
                <div
                  className="bg-slate-900/75 border border-slate-800/80 hover:border-emerald-500/40 rounded-2xl p-5 transition-all duration-200 flex flex-col justify-between group hover:bg-slate-900 h-full shadow-md"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700" style={{ transform: 'translateZ(14px)' }}>
                        {cert.category}
                      </span>
                      <span className="text-xs font-mono text-slate-400" style={{ transform: 'translateZ(12px)' }}>{cert.date}</span>
                    </div>

                    <h4 
                      className="font-heading text-base font-bold text-white group-hover:text-emerald-300 transition-colors mb-1.5"
                      style={{ transform: 'translateZ(16px)' }}
                    >
                      {cert.title}
                    </h4>

                    <p className="text-xs text-emerald-400 font-semibold mb-3">
                      {cert.organization}
                    </p>

                    {cert.description && (
                      <p className="text-xs text-slate-300 leading-relaxed mb-4">
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400" style={{ transform: 'translateZ(12px)' }}>
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      Verified Completion
                    </span>
                  </div>
                </div>
              </InteractiveTiltCard>
            ))}
          </div>

          {/* National Workshop Highlight Card */}
          <div className="mt-8 bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 shrink-0">
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">National Level Technical Event</span>
                <h4 className="font-heading text-sm font-bold text-white mt-0.5">
                  Two-Day National Workshop – Jamal Mohamed College (2026)
                </h4>
                <p className="text-xs text-slate-400 mt-1">
                  Participated in technical workshops on next-generation computing, modern web architecture, and emerging cloud technologies.
                </p>
              </div>
            </div>
            <span className="self-start sm:self-center px-3 py-1 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700 shrink-0">
              National Delegate
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
