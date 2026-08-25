import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  FileSpreadsheet, 
  Sparkles, 
  Globe, 
  Layers, 
  BarChart3, 
  Cpu
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { InteractiveTiltCard } from './InteractiveTiltCard';

export const SkillsMatrix: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'languages' | 'ai' | 'cloud' | 'office'>('all');

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Domain Expertise
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            A comprehensive suite of programming languages, modern AI tools, business intelligence dashboards, databases, and core domain specializations.
          </p>
        </div>

        {/* 1. Core Domains Spotlight Strip */}
        <div className="mb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {SKILLS_DATA.domains.map((dom, index) => (
            <InteractiveTiltCard
              key={dom.name}
              maxTilt={10}
              glareColor="rgba(52, 211, 153, 0.1)"
              glareOpacity={0.15}
              className="h-full"
            >
              <div
                className="bg-slate-900/70 border border-slate-800 hover:border-emerald-500/50 rounded-2xl p-4 transition-all duration-300 group h-full flex flex-col justify-between"
              >
                <div>
                  <div 
                    className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-sm"
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    {index === 0 && <Globe className="w-4 h-4 text-emerald-400" />}
                    {index === 1 && <BarChart3 className="w-4 h-4 text-teal-400" />}
                    {index === 2 && <BrainCircuit className="w-4 h-4 text-cyan-400" />}
                    {index === 3 && <Layers className="w-4 h-4 text-blue-400" />}
                    {index === 4 && <Cpu className="w-4 h-4 text-amber-400" />}
                  </div>
                  <h3 
                    className="font-heading text-sm font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors"
                    style={{ transform: 'translateZ(14px)' }}
                  >
                    {dom.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-normal">
                    {dom.desc}
                  </p>
                </div>
              </div>
            </InteractiveTiltCard>
          ))}
        </div>

        {/* 2. Detailed Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Programming Languages */}
          <InteractiveTiltCard maxTilt={5} glareColor="rgba(52, 211, 153, 0.12)" className="h-full">
            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20" style={{ transform: 'translateZ(16px)' }}>
                    <Code2 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div style={{ transform: 'translateZ(14px)' }}>
                    <h3 className="font-heading text-base font-bold text-white">Programming</h3>
                    <span className="text-[11px] text-slate-400">Core Languages</span>
                  </div>
                </div>

                <div className="space-y-3.5">
                  {SKILLS_DATA.programming.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center text-xs mb-1">
                        <span className="font-semibold text-slate-200">{skill.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{skill.tag}</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveTiltCard>

          {/* AI & Analytics Tools */}
          <InteractiveTiltCard maxTilt={5} glareColor="rgba(34, 211, 238, 0.12)" className="h-full">
            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20" style={{ transform: 'translateZ(16px)' }}>
                    <BrainCircuit className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div style={{ transform: 'translateZ(14px)' }}>
                    <h3 className="font-heading text-base font-bold text-white">AI & Analytics</h3>
                    <span className="text-[11px] text-slate-400">Next-Gen Tools</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {SKILLS_DATA.aiAndTools.map((tool) => (
                    <div
                      key={tool.name}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-cyan-500/30 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-200">{tool.name}</span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/20">
                        {tool.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveTiltCard>

          {/* Cloud & Databases */}
          <InteractiveTiltCard maxTilt={5} glareColor="rgba(45, 212, 191, 0.12)" className="h-full">
            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-teal-500/10 border border-teal-500/20" style={{ transform: 'translateZ(16px)' }}>
                    <Database className="w-5 h-5 text-teal-400" />
                  </div>
                  <div style={{ transform: 'translateZ(14px)' }}>
                    <h3 className="font-heading text-base font-bold text-white">Databases & Cloud</h3>
                    <span className="text-[11px] text-slate-400">Data Architecture</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {SKILLS_DATA.cloudAndDatabases.map((db) => (
                    <div
                      key={db.name}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-teal-500/30 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-200">{db.name}</span>
                      <span className="text-[10px] font-mono text-teal-400 bg-teal-950/50 px-2 py-0.5 rounded border border-teal-500/20">
                        {db.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveTiltCard>

          {/* Office & Productivity */}
          <InteractiveTiltCard maxTilt={5} glareColor="rgba(251, 191, 36, 0.12)" className="h-full">
            <div className="bg-slate-900/85 border border-slate-800/90 rounded-2xl p-6 flex flex-col justify-between h-full shadow-lg">
              <div>
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-slate-800">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20" style={{ transform: 'translateZ(16px)' }}>
                    <FileSpreadsheet className="w-5 h-5 text-amber-400" />
                  </div>
                  <div style={{ transform: 'translateZ(14px)' }}>
                    <h3 className="font-heading text-base font-bold text-white">Productivity Suite</h3>
                    <span className="text-[11px] text-slate-400">Microsoft Office</span>
                  </div>
                </div>

                <div className="space-y-2.5">
                  {SKILLS_DATA.officeAndProductivity.map((item) => (
                    <div
                      key={item.name}
                      className="p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-amber-500/30 transition-colors"
                    >
                      <span className="text-xs font-semibold text-slate-200">{item.name}</span>
                      <span className="text-[10px] font-mono text-amber-400 bg-amber-950/50 px-2 py-0.5 rounded border border-amber-500/20">
                        {item.tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </InteractiveTiltCard>

        </div>

      </div>
    </section>
  );
};
