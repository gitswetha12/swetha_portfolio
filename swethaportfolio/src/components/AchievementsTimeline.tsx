import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  Medal, 
  Users, 
  Sparkles, 
  Flag, 
  HeartHandshake, 
  Gamepad2, 
  Target,
  Clock
} from 'lucide-react';
import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { InteractiveTiltCard } from './InteractiveTiltCard';

export const AchievementsTimeline: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('All');

  const types = ['All', 'Award', 'Leadership', 'Competition', 'Sports'];

  const filteredAchievements = filterType === 'All'
    ? ACHIEVEMENTS_DATA
    : ACHIEVEMENTS_DATA.filter((a) => a.type === filterType);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Award':
        return <Trophy className="w-4 h-4 text-amber-400" />;
      case 'Leadership':
        return <Users className="w-4 h-4 text-emerald-400" />;
      case 'Competition':
        return <Medal className="w-4 h-4 text-cyan-400" />;
      case 'Sports':
        return <Gamepad2 className="w-4 h-4 text-purple-400" />;
      default:
        return <Award className="w-4 h-4 text-slate-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Co-Curriculars</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Achievements & Campus Leadership
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Recognition spanning technical innovations, collegiate leadership, hackathons, event organization, and sports championships.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filterType === t
                  ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800 hover:border-slate-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAchievements.map((item, idx) => (
            <InteractiveTiltCard
              key={item.title + idx}
              maxTilt={7}
              glareColor="rgba(251, 191, 36, 0.12)"
              glareOpacity={0.16}
              className="h-full"
            >
              <div
                className="bg-slate-900/80 border border-slate-800/90 hover:border-amber-500/40 rounded-2xl p-5 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-amber-950/20 relative overflow-hidden h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2" style={{ transform: 'translateZ(16px)' }}>
                      <div className="p-2 rounded-lg bg-slate-800 border border-slate-700 shadow-sm">
                        {getTypeIcon(item.type)}
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                        {item.type}
                      </span>
                    </div>

                    <span className="text-xs font-mono font-medium text-slate-400" style={{ transform: 'translateZ(12px)' }}>
                      {item.year}
                    </span>
                  </div>

                  <h3 
                    className="font-heading text-base font-bold text-white group-hover:text-amber-300 transition-colors mb-1"
                    style={{ transform: 'translateZ(16px)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-xs text-emerald-400 font-medium mb-3">
                    {item.eventOrOrg}
                  </p>

                  <p className="text-slate-300 text-xs leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {item.highlightBadge && (
                  <div className="pt-3 border-t border-slate-800/80" style={{ transform: 'translateZ(14px)' }}>
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-0.5 rounded-md">
                      <Sparkles className="w-3 h-3 text-amber-400" />
                      {item.highlightBadge}
                    </span>
                  </div>
                )}
              </div>
            </InteractiveTiltCard>
          ))}
        </div>

      </div>
    </section>
  );
};
