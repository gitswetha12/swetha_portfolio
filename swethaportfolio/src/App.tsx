import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutEducation } from './components/AboutEducation';
import { ExperienceInternships } from './components/ExperienceInternships';
import { ProjectsSection } from './components/ProjectsSection';
import { ResearchAndCertificates } from './components/ResearchAndCertificates';
import { SkillsMatrix } from './components/SkillsMatrix';
import { AchievementsTimeline } from './components/AchievementsTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveFloatingMesh } from './components/InteractiveFloatingMesh';
import { generatePdfResume } from './utils/generatePdfResume';
import { CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3500);
  };

  const handleDownloadResume = () => {
    try {
      generatePdfResume();
      triggerToast('Resume PDF downloaded successfully (Swetha_J_Resume.pdf)!');
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (e) {
        // Safe fallback
      }
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      triggerToast('Generating PDF document...');
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/30 selection:text-emerald-300 relative overflow-x-hidden">
      {/* Subtle 3D Interactive Spatial Mesh Background */}
      <InteractiveFloatingMesh />
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-slate-100 shadow-2xl text-xs sm:text-sm font-medium animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation */}
      <Navbar
        onDownloadResume={handleDownloadResume}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero
          onDownloadResume={handleDownloadResume}
          onOpenResumeModal={() => setIsResumeModalOpen(true)}
        />
        
        <AboutEducation />
        
        <ExperienceInternships />
        
        <ProjectsSection />
        
        <ResearchAndCertificates />
        
        <SkillsMatrix />
        
        <AchievementsTimeline />
        
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onDownloadResume={handleDownloadResume}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
      />

      {/* Resume Document Viewer Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onDownloadPdf={handleDownloadResume}
      />

    </div>
  );
}
