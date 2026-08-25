import React from 'react';
import { 
  X, 
  FileDown, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { 
  PERSONAL_INFO, 
  EDUCATION_DATA, 
  INTERNSHIPS_DATA, 
  PROJECTS_DATA, 
  CERTIFICATES_DATA, 
  ACHIEVEMENTS_DATA, 
  SKILLS_DATA, 
  RESEARCH_PAPER 
} from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDownloadPdf: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  onDownloadPdf,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="bg-slate-900 border border-slate-700/80 rounded-2xl max-w-4xl w-full my-auto shadow-2xl relative flex flex-col max-h-[92vh]">
        
        {/* Modal Top Bar (Controls) */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80 rounded-t-2xl no-print">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <h3 className="font-heading font-bold text-white text-sm sm:text-base">
              Resume Document Preview
            </h3>
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-500/20 hidden sm:inline">
              ATS-Optimized
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print Document"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Print / Browser PDF</span>
            </button>

            <button
              onClick={onDownloadPdf}
              id="modal-download-pdf-btn"
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-gradient-to-r from-emerald-400 to-teal-400 hover:from-emerald-300 hover:to-teal-300 text-slate-950 text-xs font-bold transition-all shadow-md shadow-emerald-500/20"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Download PDF File</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors ml-1"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Sheet Container */}
        <div className="p-4 sm:p-8 overflow-y-auto bg-slate-950/40">
          <div className="bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl max-w-3xl mx-auto space-y-6 text-left border border-slate-200">
            
            {/* 1. Resume Header */}
            <div className="border-b-2 border-emerald-600 pb-4">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  {PERSONAL_INFO.name}
                </h1>
                <span className="text-xs font-bold text-emerald-700 tracking-wide uppercase">
                  MCA Postgraduate (2025–2027)
                </span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                Full-Stack Web Developer | Data Analytics | IoT & AI Systems
              </p>

              {/* Contact strip */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-700 mt-2.5 font-medium">
                <span>📱 {PERSONAL_INFO.phone}</span>
                <span>•</span>
                <span>✉️ {PERSONAL_INFO.email}</span>
                <span>•</span>
                <span>🐙 github.com/{PERSONAL_INFO.githubUsername}</span>
                <span>•</span>
                <span>🔗 linkedin.com/in/{PERSONAL_INFO.linkedinUsername}</span>
              </div>
            </div>

            {/* 2. Professional Summary */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Professional Profile
              </h2>
              <p className="text-xs text-slate-700 leading-relaxed">
                Detail-oriented Master of Computer Applications (MCA) candidate with strong academic standing (PG CGPA 8.25, UG BCA Distinction 8.61). Possesses hands-on technical internship experience across enterprise web development, sensor technology, and UI/UX design. Published peer-reviewed research on "Smart Irrigation using IoT" at an International Conference. Recognized with the Best Innovator Award (2026) and served as Secretary of the Mental Wellbeing Club.
              </p>
            </div>

            {/* 3. Education */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-2.5">
                {EDUCATION_DATA.map((edu) => (
                  <div key={edu.degree} className="flex justify-between items-start text-xs">
                    <div>
                      <div className="font-bold text-slate-900">{edu.degree}</div>
                      <div className="text-slate-600">{edu.institution}, {edu.location}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-bold text-emerald-700">{edu.score}</div>
                      <div className="text-slate-500 text-[11px]">{edu.period}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Technical Skills */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Technical Skills & Tools
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-700">
                <div>
                  <strong className="text-slate-900">Programming: </strong>
                  HTML5, Python, SQL, PHP, JavaScript, CSS3
                </div>
                <div>
                  <strong className="text-slate-900">AI & Analytics: </strong>
                  ChatGPT, Claude AI, Grok, Power BI, Web Analytics
                </div>
                <div>
                  <strong className="text-slate-900">Databases & Cloud: </strong>
                  MongoDB, Microsoft Azure, MySQL, IoT Sensors
                </div>
                <div>
                  <strong className="text-slate-900">Productivity: </strong>
                  Microsoft Excel (Advanced), PowerPoint, Word
                </div>
              </div>
            </div>

            {/* 5. Internships */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Internship Experience
              </h2>
              <div className="space-y-3">
                {INTERNSHIPS_DATA.map((intern) => (
                  <div key={intern.title + intern.company} className="text-xs">
                    <div className="flex justify-between items-start">
                      <div className="font-bold text-slate-900">
                        {intern.title} — <span className="text-slate-700 font-medium">{intern.company}, {intern.location}</span>
                      </div>
                      <div className="text-slate-500 font-mono text-[11px] shrink-0">{intern.period}</div>
                    </div>
                    <p className="text-slate-600 mt-0.5 leading-relaxed">
                      {intern.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Key Projects */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Featured Projects
              </h2>
              <div className="space-y-2.5">
                {PROJECTS_DATA.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="text-xs">
                    <div className="flex justify-between items-baseline">
                      <span className="font-bold text-slate-900">{proj.title} ({proj.year})</span>
                      <span className="text-slate-500 text-[11px] italic font-mono">{proj.techStack.slice(0, 3).join(', ')}</span>
                    </div>
                    <p className="text-slate-600 leading-relaxed mt-0.5">
                      • {proj.shortDescription}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 7. Research Publication */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Research Publications & Papers
              </h2>
              <div className="text-xs text-slate-700">
                <div className="font-bold text-slate-900">
                  Paper: "{RESEARCH_PAPER.title}" ({RESEARCH_PAPER.date})
                </div>
                <div className="text-slate-600 mt-0.5">
                  Presented at <em>{RESEARCH_PAPER.conference}</em>, organized by {RESEARCH_PAPER.organizer}, {RESEARCH_PAPER.institution}.
                </div>
              </div>
            </div>

            {/* 8. Selected Certifications & Honors */}
            <div>
              <h2 className="text-xs font-bold tracking-wider text-slate-900 uppercase border-b border-slate-300 pb-1 mb-2">
                Certifications & Key Leadership
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 text-xs text-slate-700">
                <div>• Microsoft: Introduction to PowerBI (2026)</div>
                <div>• Accenture: Web Analytics (2026)</div>
                <div>• Microsoft: Introduction to Azure Services (2026)</div>
                <div>• MongoDB: Certified Specialist (2026)</div>
                <div>• Saylor University: Intro to Python (2026)</div>
                <div>• Diploma in Information Technology (DIT 3-Year)</div>
                <div>• Best Innovator Award Winner (HCC 2026)</div>
                <div>• Secretary – Mental Wellbeing Club (2026)</div>
                <div>• Student Council Member (SCM 2024-2025)</div>
                <div>• 1st Place – Web Scintillator Presentation (2025)</div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};
