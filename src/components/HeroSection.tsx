import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  FileText,
  Terminal,
  Layers,
  Sparkles,
  Cpu,
  BarChart3,
  Globe,
  FolderGit2,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface HeroSectionProps {
  isDark: boolean;
  onOpenResumeModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  isDark,
  onOpenResumeModal,
}) => {
  const roles = [
    { title: 'Web Developer', icon: Globe, detail: 'React 19 • TypeScript • Node.js' },
    { title: 'UI/UX Designer', icon: Layers, detail: 'Geometric Tokens • Figma • Systems' },
    { title: 'AI Automations Maker', icon: Cpu, detail: 'Gemini 3.7 • Agents • Tool Calling' },
    { title: 'Data Analyst', icon: BarChart3, detail: 'SQL • Recharts • Python Pipelines' },
  ];

  return (
    <section
      id="hero"
      className={`pt-28 pb-16 sm:pt-32 sm:pb-24 border-b relative overflow-hidden ${
        isDark ? 'border-[#222222] bg-black text-white' : 'border-slate-200 bg-[#fafafa] text-slate-900'
      }`}
    >
      {/* Background Subtle Grid Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-12 text-left">
        
        {/* Availability Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 text-[10px] font-mono uppercase tracking-widest border border-emerald-500/40 bg-emerald-950/20 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Founders & High-Impact Consulting</span>
          </div>

          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40">
            Hyderabad • Global Remote
          </div>
        </div>

        {/* Hero Title & Bio */}
        <div className="space-y-6 max-w-4xl">
          <div className="space-y-2">
            <div className="text-xs font-mono uppercase tracking-widest opacity-50">
              Yashvir Paul // Engineering & Product Design
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight leading-[1.1]">
              Architecting High-Speed Web, Autonomous AI & Clean Interfaces.
            </h1>
          </div>

          <p className={`text-sm sm:text-base leading-relaxed max-w-3xl opacity-80 ${
            isDark ? 'text-[#c0c0c0]' : 'text-slate-700'
          }`}>
            Founder of <strong className="text-white bg-black px-1 border border-[#333333]">GROW BUISNESS</strong>, <strong className="text-white bg-black px-1 border border-[#333333]">StantUp</strong>, and <strong className="text-white bg-black px-1 border border-[#333333]">Fluid</strong>. Delivering scalable full-stack web applications, automated LLM tool-calling agent systems, mathematical UI/UX design systems, and real-time business telemetry.
          </p>
        </div>

        {/* Primary Action Button Cluster */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Direct WhatsApp Call to Action */}
          <a
            id="hero-whatsapp-btn"
            href={profileData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Chat on WhatsApp (+91 9394389413)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* View Startups / Ventures Button */}
          <a
            id="hero-startups-btn"
            href="#startups"
            className={`inline-flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-widest border transition-colors ${
              isDark
                ? 'border-[#333333] bg-[#111111] text-white hover:bg-[#1a1a1a] hover:border-white'
                : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100 hover:border-black'
            }`}
          >
            <FolderGit2 className="w-4 h-4 opacity-70" />
            <span>Explore Ventures</span>
          </a>

          {/* Resume Viewer Button */}
          <button
            id="hero-resume-btn"
            onClick={onOpenResumeModal}
            className={`inline-flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-widest border transition-colors ${
              isDark
                ? 'border-[#333333] bg-[#111111] text-white hover:bg-[#1a1a1a]'
                : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
            }`}
          >
            <FileText className="w-4 h-4 opacity-70" />
            <span>View Resume</span>
          </button>
        </div>

        {/* 4 Pillars Bento Grid Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-6">
          {roles.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className={`p-4 border transition-colors ${
                  isDark
                    ? 'border-[#222222] bg-[#0c0c0c] hover:border-[#444444]'
                    : 'border-slate-200 bg-white hover:border-slate-400'
                }`}
              >
                <div className="flex items-center justify-between mb-3 text-[10px] font-mono opacity-50">
                  <span>0{idx + 1} // DOMAIN</span>
                  <Icon className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xs font-bold uppercase tracking-wider">
                    {r.title}
                  </h3>
                  <p className="text-[11px] font-mono opacity-60">
                    {r.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Founder Highlights Ticker */}
        <div className="pt-2 border-t border-[#222222] grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">3 Ventures</div>
            <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">GROW BUISNESS • StantUp • Fluid</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">14k+ Users</div>
            <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">Across Active Products</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-white">1,480+</div>
            <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">GitHub Commits</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">&lt; 1 hr</div>
            <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">WhatsApp Response Time</div>
          </div>
        </div>

      </div>
    </section>
  );
};
