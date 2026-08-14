import React from 'react';
import {
  MessageSquare,
  Mail,
  ArrowUp,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface FooterProps {
  isDark: boolean;
}

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`border-t py-12 transition-colors ${
      isDark
        ? 'bg-[#0a0a0a] border-[#222222] text-[#a0a0a0]'
        : 'bg-slate-100 border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Tagline */}
          <div className="space-y-2 text-center md:text-left">
            <a href="#" className="inline-flex items-center gap-2 group">
              <div className="w-6 h-6 border border-white bg-white text-black font-mono font-bold text-xs flex items-center justify-center">
                YP
              </div>
              <span className={`font-bold text-base uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {profileData.name}
              </span>
            </a>
            <p className="text-xs font-mono opacity-60 max-w-md">
              Web Developer • UI/UX Designer • AI Automations Maker • Data Analyst. Founder of GROW BUISNESS, StantUp, & Fluid.
            </p>
          </div>

          {/* Direct Channels */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-emerald-500 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-400 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp (+91 9394389413)</span>
            </a>

            <a
              href={`mailto:${profileData.email}`}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 border text-[10px] font-bold uppercase tracking-widest transition-colors ${
                isDark ? 'border-[#333333] bg-[#111111] text-white hover:bg-[#1a1a1a]' : 'border-slate-300 bg-white text-slate-800'
              }`}
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{profileData.email}</span>
            </a>

            <button
              onClick={scrollToTop}
              className={`p-1.5 border transition-colors ${
                isDark ? 'border-[#333333] bg-[#111111] text-white hover:bg-[#1a1a1a]' : 'border-slate-300 bg-white text-slate-700'
              }`}
              title="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 border-t border-[#222222] flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono opacity-50 gap-4">
          <div>
            © {new Date().getFullYear()} Yashvir Paul. Geometric Balance System. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="font-bold text-white uppercase">GROW BUISNESS</span>
            <span>/</span>
            <span className="font-bold text-white uppercase">StantUp</span>
            <span>/</span>
            <span className="font-bold text-white uppercase">Fluid</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
