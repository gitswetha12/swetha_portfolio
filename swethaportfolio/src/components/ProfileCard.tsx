import React, { useState, useRef } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Award, 
  Code2, 
  Cpu, 
  Database, 
  GraduationCap, 
  MapPin, 
  Briefcase
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ className = '' }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation limits (-10deg to 10deg)
    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.18
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div 
      className={`perspective-1000 select-none ${className}`}
      style={{ perspective: '1200px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${isHovered ? 1.02 : 1}, ${isHovered ? 1.02 : 1}, 1)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s ease-out',
          transformStyle: 'preserve-3d'
        }}
        className="relative group w-full max-w-sm sm:max-w-md mx-auto rounded-3xl bg-slate-900/90 border border-slate-800/90 shadow-2xl p-6 backdrop-blur-xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-emerald-500/10 hover:border-emerald-500/40"
      >
        {/* Dynamic Interactive Light Glare overlay */}
        <div 
          className="absolute inset-0 pointer-events-none rounded-3xl transition-opacity duration-300 z-30"
          style={{
            background: `radial-gradient(circle 280px at ${glarePosition.x}% ${glarePosition.y}%, rgba(52, 211, 153, ${glarePosition.opacity}), transparent 80%)`
          }}
        />

        {/* Ambient background decorative glow behind card contents */}
        <div className="absolute top-0 right-0 w-44 h-44 bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-transparent blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl pointer-events-none -z-10" />

        {/* Top Header Row with Status & Badges */}
        <div className="flex items-center justify-between gap-2 pb-4 border-b border-slate-800/80">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-mono font-medium text-emerald-400">Available for Opportunities</span>
          </div>

          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[11px] font-semibold">
            <Award className="w-3 h-3 text-amber-400" />
            <span>Innovator '26</span>
          </div>
        </div>

        {/* Developer Identity Spotlight */}
        <div className="my-5 flex items-center gap-4">
          <div className="relative shrink-0">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400 p-0.5 shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <span className="font-heading font-black text-2xl bg-clip-text text-transparent bg-gradient-to-tr from-emerald-400 via-teal-300 to-cyan-400">
                  SJ
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 p-1 rounded-full bg-emerald-500 text-slate-950 border-2 border-slate-900 flex items-center justify-center">
              <CheckCircle2 className="w-3 h-3 font-bold" />
            </div>
          </div>

          <div>
            <h3 className="font-heading text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>{PERSONAL_INFO.name}</span>
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </h3>
            <p className="text-xs text-emerald-400 font-mono mt-0.5">
              MCA Candidate • Web Developer
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
              <GraduationCap className="w-3.5 h-3.5 text-teal-400" />
              <span>Holy Cross College, Trichy</span>
            </div>
          </div>
        </div>

        {/* Key Competency Badges */}
        <div className="flex flex-wrap items-center justify-start gap-2 my-5">
          <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200 flex items-center gap-1.5 hover:border-emerald-400/50 transition-colors">
            <Code2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Full Stack</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200 flex items-center gap-1.5 hover:border-teal-400/50 transition-colors">
            <Cpu className="w-3.5 h-3.5 text-teal-400" />
            <span>IoT Systems</span>
          </span>
          <span className="px-3 py-1.5 rounded-xl bg-slate-800/80 border border-slate-700/80 text-xs font-mono text-slate-200 flex items-center gap-1.5 hover:border-cyan-400/50 transition-colors">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>Data Analytics</span>
          </span>
        </div>

        {/* 3-Column Metrics Footer */}
        <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/80 text-center">
          <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/60 group-hover:border-emerald-500/20 transition-colors">
            <div className="text-sm font-heading font-bold text-emerald-400">8.25</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">MCA CGPA</div>
          </div>

          <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/60 group-hover:border-teal-500/20 transition-colors">
            <div className="text-sm font-heading font-bold text-teal-300">4</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Internships</div>
          </div>

          <div className="bg-slate-950/60 rounded-xl p-2.5 border border-slate-800/60 group-hover:border-cyan-500/20 transition-colors">
            <div className="text-sm font-heading font-bold text-cyan-300">8.61</div>
            <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">BCA CGPA</div>
          </div>
        </div>

        {/* Interactive 3D micro instruction indicator */}
        <div className="mt-3 text-center">
          <span className="text-[10px] text-slate-500 font-mono flex items-center justify-center gap-1 opacity-70 group-hover:opacity-100 transition-opacity">
            <span>✦ Interactive 3D Card • Move cursor to tilt</span>
          </span>
        </div>

      </div>
    </div>
  );
};

