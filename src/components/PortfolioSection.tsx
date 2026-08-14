import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  CheckCircle,
  Tag,
  ArrowUpRight,
} from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { RoleCategory } from '../types';

interface PortfolioSectionProps {
  isDark: boolean;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<RoleCategory | 'All'>('All');

  const categories: (RoleCategory | 'All')[] = [
    'All',
    'Web Developer',
    'UI/UX Designer',
    'AI Automations Maker',
    'Data Analyst',
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-black' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Technical Case Studies & Shipped Projects
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Featured Engineering Work
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Filter by technical focus across full-stack applications, UI architectures, multi-agent LLMs, and real-time data boards.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider border transition-colors ${
                    selectedCategory === cat
                      ? isDark
                        ? 'bg-white text-black border-white'
                        : 'bg-black text-white border-black'
                      : isDark
                      ? 'bg-[#111111] border-[#333333] text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a]'
                      : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`p-5 border flex flex-col justify-between transition-colors ${
                isDark
                  ? 'bg-[#111111] border-[#222222] hover:border-[#3a3a3a]'
                  : 'bg-white border-slate-200 hover:border-slate-400'
              }`}
            >
              <div className="space-y-4">
                {/* Category & Metric Header */}
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 border border-[#333333] uppercase text-[#a0a0a0]">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <span className="text-emerald-400 font-bold">
                      {project.metrics.value}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <h3 className={`text-base font-bold tracking-tight uppercase leading-snug ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {project.title}
                  </h3>

                  <p className={`text-xs leading-relaxed opacity-70 ${
                    isDark ? 'text-[#a0a0a0]' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>
                </div>

                {/* Impact Statement */}
                <div className="p-3 border border-[#222222] bg-[#0d0d0d] space-y-1">
                  <div className="text-[9px] font-mono uppercase tracking-widest text-emerald-400">
                    Impact & Measured Outcome
                  </div>
                  <p className="text-[11px] font-mono opacity-80 text-white">
                    {project.impact}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="px-1.5 py-0.5 text-[9px] font-mono border border-[#222222] bg-[#161616] text-[#888888]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 mt-4 border-t border-[#222222] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[10px] font-mono opacity-70 hover:opacity-100 hover:underline"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  )}
                </div>

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-white hover:underline"
                  >
                    <span>Live Preview</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
