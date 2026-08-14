import React from 'react';
import {
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  Layers,
  Sparkles,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import { startupsData } from '../data/portfolioData';

interface StartupsSectionProps {
  isDark: boolean;
}

export const StartupsSection: React.FC<StartupsSectionProps> = ({ isDark }) => {
  return (
    <section
      id="startups"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-[#0a0a0a]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Venture Portfolio & Companies Founded
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Startups & Flagship Products
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Active technology ventures created and scaled by Yashvir Paul across education, venture intelligence, and UI design engineering.
              </p>
            </div>
            <div className="text-[11px] font-mono opacity-50">
              [ 03 Ventures In Production ]
            </div>
          </div>
        </div>

        {/* Startups List */}
        <div className="grid grid-cols-1 gap-6">
          {startupsData.map((startup, idx) => (
            <div
              key={startup.id}
              className={`p-6 sm:p-8 border transition-colors ${
                isDark
                  ? 'bg-[#111111] border-[#222222] hover:border-[#3a3a3a]'
                  : 'bg-white border-slate-200 hover:border-slate-400'
              }`}
            >
              <div className="space-y-6">
                
                {/* Top Info Bar */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#222222] pb-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-bold font-mono uppercase tracking-tight text-white">
                        {startup.name}
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-emerald-500/40 text-emerald-400 bg-emerald-950/20">
                        {startup.status}
                      </span>
                    </div>
                    <p className="text-xs font-mono opacity-60">
                      {startup.tagline}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono opacity-50">
                      {startup.period}
                    </span>
                    {startup.link && (
                      <a
                        href={startup.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-[#333333] hover:bg-white hover:text-black transition-colors"
                      >
                        <span>Visit Platform</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Role & Description */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                  <div className="lg:col-span-8 space-y-4">
                    <p className={`text-xs sm:text-sm leading-relaxed opacity-80 ${
                      isDark ? 'text-[#d0d0d0]' : 'text-slate-700'
                    }`}>
                      {startup.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-2 pt-2">
                      <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">
                        Key Engineering & Product Milestones:
                      </div>
                      <ul className="space-y-1.5 text-xs">
                        {startup.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 opacity-85">
                            <span className="text-emerald-400 font-mono text-[10px] mt-0.5">▶</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {startup.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[10px] font-mono border border-[#2a2a2a] bg-[#161616] text-[#b0b0b0]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics Box */}
                  <div className="lg:col-span-4 grid grid-cols-2 gap-2 p-4 border border-[#222222] bg-[#0c0c0c]">
                    {startup.metrics.map((m, i) => (
                      <div key={i} className="space-y-1">
                        <div className="text-base sm:text-lg font-mono font-bold text-white">
                          {m.value}
                        </div>
                        <div className="text-[9px] font-mono uppercase tracking-wider opacity-50">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
