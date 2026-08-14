import React from 'react';
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { timelineData } from '../data/portfolioData';

interface TimelineSectionProps {
  isDark: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isDark }) => {
  return (
    <section
      id="timeline"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-black' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Career Timeline & Leadership History
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Experience & Education
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Track record of building startups, engineering web ecosystems, consulting for tech companies, and academic CS background.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="space-y-4">
          {timelineData.map((item, idx) => (
            <div
              key={item.id}
              className={`p-6 border transition-colors ${
                isDark
                  ? 'bg-[#111111] border-[#222222] hover:border-[#3a3a3a]'
                  : 'bg-white border-slate-200 hover:border-slate-400'
              }`}
            >
              <div className="space-y-4">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#222222] pb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 border border-[#333333] bg-[#0c0c0c] text-white">
                      {item.type.toUpperCase()}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold uppercase tracking-tight text-white">
                      {item.role}
                    </h3>
                  </div>

                  <div className="text-xs font-mono opacity-60">
                    <span className="font-bold text-white">{item.organization}</span> • {item.location} • {item.period}
                  </div>
                </div>

                {/* Description */}
                <p className={`text-xs sm:text-sm leading-relaxed opacity-80 ${
                  isDark ? 'text-[#d0d0d0]' : 'text-slate-700'
                }`}>
                  {item.description}
                </p>

                {/* Key Achievements */}
                <div className="space-y-1.5 pt-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">
                    Key Outcomes & Deliverables:
                  </div>
                  <ul className="space-y-1 text-xs">
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2 opacity-80">
                        <span className="text-emerald-400 font-mono text-[10px] mt-0.5">▶</span>
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#222222]">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.5 text-[9px] font-mono border border-[#222222] bg-[#161616] text-[#888888]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
