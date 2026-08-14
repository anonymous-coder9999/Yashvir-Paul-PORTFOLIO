import React from 'react';
import {
  X,
  Download,
  Printer,
  Mail,
  MessageSquare,
  FileText,
  Check,
  ExternalLink,
} from 'lucide-react';
import { profileData, skillsData, timelineData, startupsData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  isDark,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85">
      <div
        className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto border ${
          isDark ? 'bg-[#0a0a0a] border-[#333333] text-white' : 'bg-white border-slate-300 text-slate-900'
        } p-6 sm:p-10 space-y-8 text-left relative shadow-2xl`}
      >
        {/* Controls Toolbar */}
        <div className="flex items-center justify-between border-b border-[#222222] pb-4 sticky top-0 bg-inherit z-10">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold">
              Yashvir Paul // Official Technical Resume
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1 px-3 py-1.5 border border-[#333333] hover:bg-white hover:text-black text-[10px] font-mono uppercase tracking-wider transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 border border-[#333333] hover:bg-white hover:text-black transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Header */}
        <div className="space-y-3 border-b border-[#222222] pb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight">
              {profileData.name}
            </h1>
            <div className="text-xs font-mono text-emerald-400 font-bold">
              Full-Stack Web • AI Automations • UI Systems • Data
            </div>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-mono opacity-70">
            <span>📍 {profileData.location}</span>
            <span>📱 +91 9394389413</span>
            <span>✉️ {profileData.email}</span>
            <span>🔗 github.com/yashvirpaul</span>
          </div>

          <p className="text-xs leading-relaxed opacity-80 pt-2">
            {profileData.bio}
          </p>
        </div>

        {/* Startups & Key Ventures */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 border-b border-[#222222] pb-1">
            01 // Ventures & Products Founded
          </h2>

          <div className="space-y-4">
            {startupsData.map((st) => (
              <div key={st.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase">{st.name} — {st.role}</span>
                  <span className="font-mono opacity-50 text-[10px]">{st.period}</span>
                </div>
                <p className="text-xs opacity-70">{st.description}</p>
                <ul className="text-[11px] opacity-80 space-y-0.5 pl-3">
                  {st.highlights.map((h, i) => (
                    <li key={i} className="list-disc">{h}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience & Timeline */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 border-b border-[#222222] pb-1">
            02 // Career & Consulting Experience
          </h2>

          <div className="space-y-4">
            {timelineData.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white uppercase">{item.role} @ {item.organization}</span>
                  <span className="font-mono opacity-50 text-[10px]">{item.period}</span>
                </div>
                <p className="text-xs opacity-70">{item.description}</p>
                <ul className="text-[11px] opacity-80 space-y-0.5 pl-3">
                  {item.achievements.map((a, i) => (
                    <li key={i} className="list-disc">{a}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-widest text-emerald-400 border-b border-[#222222] pb-1">
            03 // Core Technical Proficiencies
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
            {skillsData.map((sk) => (
              <div key={sk.id} className="p-3 border border-[#222222] bg-[#111111] space-y-1">
                <div className="flex justify-between font-bold text-white">
                  <span>{sk.name}</span>
                  <span className="text-emerald-400">{sk.experience}</span>
                </div>
                <div className="text-[10px] opacity-60">
                  {sk.tools.join(' • ')}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer actions */}
        <div className="pt-6 border-t border-[#222222] flex flex-wrap items-center justify-between gap-3">
          <a
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-500 text-black text-xs font-bold uppercase tracking-wider font-mono hover:bg-emerald-400"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Connect on WhatsApp (+91 9394389413)</span>
          </a>

          <a
            href={`mailto:${profileData.email}?subject=Interview%20/%20Consulting%20Inquiry%20for%20Yashvir%20Paul`}
            className="inline-flex items-center gap-1.5 px-4 py-2 border border-[#333333] text-white text-xs font-mono uppercase tracking-wider hover:bg-white hover:text-black transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Send Email Proposal</span>
          </a>
        </div>
      </div>
    </div>
  );
};
