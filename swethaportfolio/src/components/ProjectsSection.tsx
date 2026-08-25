import React, { useState } from 'react';
import { 
  FolderGit2, 
  Sparkles, 
  ExternalLink, 
  CheckCircle2, 
  Tag, 
  Calendar, 
  X, 
  Layers, 
  BrainCircuit, 
  Globe2, 
  Bot, 
  ShoppingBag, 
  Plane,
  ArrowRight
} from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { InteractiveTiltCard } from './InteractiveTiltCard';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Learning', 'Web Systems', 'Full-Stack Apps', 'Healthcare/AI'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (category: string) => {
    switch (category) {
      case 'AI & Learning':
        return <BrainCircuit className="w-5 h-5 text-emerald-400" />;
      case 'Web Systems':
        return <Globe2 className="w-5 h-5 text-teal-400" />;
      case 'Healthcare/AI':
        return <Bot className="w-5 h-5 text-cyan-400" />;
      case 'Full-Stack Apps':
        return <Layers className="w-5 h-5 text-amber-400" />;
      default:
        return <FolderGit2 className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Web Development</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Key Projects & Systems Built
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Real-world applications built for educational institutions, mental healthcare support, consumer commerce, and AI learning systems.
          </p>
        </div>

        {/* Category Filters */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <InteractiveTiltCard
              key={project.id}
              maxTilt={8}
              glareColor="rgba(52, 211, 153, 0.15)"
              glareOpacity={0.2}
              className="h-full"
            >
              <div
                className="bg-slate-900/85 border border-slate-800/90 hover:border-emerald-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-950/30 flex flex-col justify-between group relative overflow-hidden h-full"
              >
                {/* Top Meta */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div 
                      className="p-2.5 rounded-xl bg-slate-800/90 border border-slate-700/60 group-hover:scale-110 transition-transform shadow-md"
                      style={{ transform: 'translateZ(20px)' }}
                    >
                      {getProjectIcon(project.category)}
                    </div>
                    <div className="flex items-center gap-2" style={{ transform: 'translateZ(15px)' }}>
                      <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                        {project.year}
                      </span>
                      <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {project.status}
                      </span>
                    </div>
                  </div>

                  <h3 
                    className="font-heading text-xl font-bold text-white group-hover:text-emerald-300 transition-colors mb-2"
                    style={{ transform: 'translateZ(18px)' }}
                  >
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Key feature preview */}
                  <div className="space-y-1.5 mb-6">
                    {project.keyFeatures.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-400">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & Details Button */}
                <div style={{ transform: 'translateZ(16px)' }}>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-800 hover:bg-emerald-500 text-slate-200 hover:text-slate-950 text-xs font-semibold border border-slate-700 hover:border-emerald-400 transition-all duration-200 shadow-md"
                  >
                    <span>View Full Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </InteractiveTiltCard>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
          <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {activeModalProject.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Year: {activeModalProject.year}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
              {activeModalProject.title}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5 font-semibold">
                  Overview & Objective
                </h4>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {activeModalProject.detailedDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5 font-semibold">
                  Key Technical Features & Modules
                </h4>
                <div className="space-y-2">
                  {activeModalProject.keyFeatures.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Real-World Impact
                </h4>
                <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-emerald-300 text-xs sm:text-sm">
                  {activeModalProject.impact}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-mono border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="px-5 py-2 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-semibold text-xs transition-colors"
                >
                  Close Details
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
