import React, { useState } from 'react';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  Sparkles, 
  CheckCircle, 
  Code, 
  Layers, 
  Cpu, 
  Globe,
  ArrowUpRight
} from 'lucide-react';
import { INTERNSHIPS_DATA, Internship } from '../data/portfolioData';
import { InteractiveTiltCard } from './InteractiveTiltCard';

export const ExperienceInternships: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Development', 'Hardware/IoT', 'Design', 'Programming'];

  const filteredInternships = selectedCategory === 'All'
    ? INTERNSHIPS_DATA
    : INTERNSHIPS_DATA.filter((i) => i.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Development':
        return <Globe className="w-4 h-4 text-emerald-400" />;
      case 'Hardware/IoT':
        return <Cpu className="w-4 h-4 text-cyan-400" />;
      case 'Design':
        return <Layers className="w-4 h-4 text-purple-400" />;
      case 'Programming':
        return <Code className="w-4 h-4 text-amber-400" />;
      default:
        return <Briefcase className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="experience" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Experience</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Internship Training & Industry Exposure
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Hands-on technical internships spanning enterprise web creation, sensor telemetry, ergonomic UI/UX prototyping, and core Python development.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredInternships.map((internship) => (
            <InteractiveTiltCard
              key={internship.title + internship.company}
              maxTilt={6}
              glareColor="rgba(45, 212, 191, 0.12)"
              glareOpacity={0.15}
              className="h-full"
            >
              <div
                className="bg-slate-900/85 border border-slate-800/90 hover:border-teal-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-teal-950/20 flex flex-col justify-between group relative overflow-hidden h-full"
              >
                {/* Background gradient corner */}
                <div className="absolute top-0 right-0 w-28 h-28 bg-teal-500/5 rounded-bl-full pointer-events-none group-hover:bg-teal-500/10 transition-colors" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2" style={{ transform: 'translateZ(18px)' }}>
                      <div className="p-2 rounded-lg bg-slate-800/90 border border-slate-700/60 shadow-sm">
                        {getCategoryIcon(internship.category)}
                      </div>
                      <span className="text-xs font-mono font-medium text-teal-400 bg-teal-950/60 border border-teal-500/20 px-2.5 py-0.5 rounded-full">
                        {internship.category}
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono flex items-center gap-1" style={{ transform: 'translateZ(14px)' }}>
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {internship.period}
                    </span>
                  </div>

                  <h3 
                    className="font-heading text-xl font-bold text-white group-hover:text-teal-300 transition-colors mb-1"
                    style={{ transform: 'translateZ(16px)' }}
                  >
                    {internship.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                    <span className="font-semibold text-slate-300">{internship.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {internship.location}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {internship.description}
                  </p>
                </div>

                {/* Skills Gained */}
                <div className="pt-4 border-t border-slate-800/80" style={{ transform: 'translateZ(15px)' }}>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                    Skills & Tools Mastered:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {internship.skillsGained.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-200 border border-slate-700/80 font-medium hover:border-teal-500/40 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </InteractiveTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
