import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { StartupsSection } from './components/StartupsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { SkillsSection } from './components/SkillsSection';
import { TimelineSection } from './components/TimelineSection';
import { GitHubSection } from './components/GitHubSection';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { MessageSquare } from 'lucide-react';
import { profileData } from './data/portfolioData';

export function App() {
  const [isDark, setIsDark] = useState(true);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#000000';
      document.body.style.color = '#ffffff';
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '#fafafa';
      document.body.style.color = '#0f172a';
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen flex flex-col font-sans selection:bg-white selection:text-black ${
      isDark ? 'bg-black text-white' : 'bg-[#fafafa] text-slate-900'
    }`}>
      {/* Top Fixed Navbar */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        <HeroSection
          isDark={isDark}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />
        <StartupsSection isDark={isDark} />
        <PortfolioSection isDark={isDark} />
        <SkillsSection isDark={isDark} />
        <TimelineSection isDark={isDark} />
        <GitHubSection isDark={isDark} />
        <BlogSection isDark={isDark} />
        <ContactSection isDark={isDark} />
      </main>

      {/* Footer */}
      <Footer isDark={isDark} />

      {/* Floating Action Triggers */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        {/* Floating WhatsApp Quick Action */}
        <a
          id="floating-whatsapp-btn"
          href={profileData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase text-[11px] font-mono tracking-widest shadow-2xl transition-transform hover:scale-105 border border-emerald-400"
          title="Direct WhatsApp (+91 9394389413)"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

      {/* Resume Viewer Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}

export default App;
