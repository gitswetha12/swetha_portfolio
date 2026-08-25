import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2, 
  Sparkles,
  Users,
  ShieldCheck
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA } from '../data/portfolioData';

export const AboutEducation: React.FC = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background & Profile</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education & Academic Excellence
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Solid foundations in computer applications, software development, and information technology with consistent high academic distinction.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: About & Leadership Spotlight */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* About Card */}
            <div id="about" className="bg-slate-900/70 border border-slate-800/90 rounded-2xl p-6 sm:p-7 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-3.5 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 p-0.5 shadow-md shadow-emerald-500/20">
                    <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                      <span className="font-heading font-extrabold text-base bg-clip-text text-transparent bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400">
                        SJ
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                    <CheckCircle2 className="w-2.5 h-2.5 text-slate-950" />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-white flex items-center gap-1.5">
                    <span>Swetha J</span>
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                  </h3>
                  <p className="text-xs text-emerald-400 font-mono">MCA Candidate • Web Developer</p>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {PERSONAL_INFO.about}
              </p>

              <div className="pt-4 border-t border-slate-800/80 space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">Secretary – Mental Wellbeing Club (2026)</h4>
                    <p className="text-[11px] text-slate-400">Leading student counseling, stress management workshops, and wellness circles at Holy Cross College.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Users className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">Student Council Member (SCM 2024–2025)</h4>
                    <p className="text-[11px] text-slate-400">Elected Student Council representative in the College Students' Union at Seethalakshmi Ramaswami College.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Award className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-slate-200">NSS Volunteer (2022–2024)</h4>
                    <p className="text-[11px] text-slate-400">2 years of active socio-civic leadership, health awareness camps, and community service.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Concurrent Diploma in Information Technology */}
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-950 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden">
              <div className="flex items-start justify-between mb-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-semibold">
                  <span>3-Year Concurrent Program</span>
                </div>
                <span className="text-xs text-slate-400 font-mono">2022 – 2025</span>
              </div>
              <h4 className="font-heading text-lg font-bold text-white mb-1">
                Diploma in Information Technology (DIT)
              </h4>
              <p className="text-xs text-emerald-400 font-medium mb-3">
                Seethalakshmi Ramaswami College & InfoSchool, Trichy
              </p>
              <p className="text-xs text-slate-300 leading-relaxed">
                Successfully completed a comprehensive 3-year concurrent diploma covering full-stack software fundamentals, relational database administration, computer networking, and system diagnostics alongside BCA.
              </p>
            </div>

          </div>

          {/* Right Column: Formal Education Cards */}
          <div className="lg:col-span-7 space-y-4">
            {EDUCATION_DATA.map((edu, idx) => {
              const isPG = edu.type === 'PG';
              const isUG = edu.type === 'UG';
              
              return (
                <div
                  key={edu.degree}
                  className={`rounded-2xl p-6 transition-all duration-300 border backdrop-blur-sm ${
                    isPG
                      ? 'bg-slate-900/90 border-emerald-500/40 shadow-lg shadow-emerald-950/20 ring-1 ring-emerald-500/20'
                      : isUG
                      ? 'bg-slate-900/80 border-slate-800 hover:border-teal-500/40'
                      : 'bg-slate-900/60 border-slate-800/80 hover:border-slate-700'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2.5">
                      <span className={`px-2.5 py-1 rounded-lg text-xs font-bold font-mono ${
                        isPG
                          ? 'bg-emerald-400 text-slate-950'
                          : isUG
                          ? 'bg-teal-400/20 text-teal-300 border border-teal-500/30'
                          : 'bg-slate-800 text-slate-300 border border-slate-700'
                      }`}>
                        {edu.type}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl font-bold text-white">
                        {edu.degree}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-full">
                        {edu.score}
                      </span>
                    </div>
                  </div>

                  {edu.field && (
                    <p className="text-xs font-medium text-slate-300 mb-1">
                      Major: {edu.field}
                    </p>
                  )}

                  <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-400 mb-3">
                    <div className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span className="text-slate-300 font-medium">{edu.institution}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span className="font-mono">{edu.period}</span>
                    </div>
                  </div>

                  {edu.highlights && edu.highlights.length > 0 && (
                    <div className="pt-3 border-t border-slate-800/80 space-y-1.5">
                      {edu.highlights.map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
