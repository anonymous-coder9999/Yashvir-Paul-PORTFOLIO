import React, { useState } from 'react';
import {
  Code,
  Layers,
  Bot,
  BarChart,
  Check,
  Terminal,
  Cpu,
  Sparkles,
  Zap,
  Search,
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

interface SkillsSectionProps {
  isDark: boolean;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'AI Automations Maker',
    'Web Developer',
    'UI/UX Designer',
    'Data Analyst',
    'Growth & SEO',
    'Global Scaling',
  ];

  const filteredSkills = skillsData.filter((skill) => {
    const matchesCategory =
      selectedCategory === 'All' || skill.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section
      id="skills"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-[#0a0a0a]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Technical Stack & Competencies Matrix
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Skills & Core Competencies
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Cross-disciplinary mastery across AI receptionists, n8n automations, SaaS refactoring, web engineering, UI/UX systems, Google top listings, and global scaling.
              </p>
            </div>
            <div className="text-[11px] font-mono opacity-50">
              [ {skillsData.length} Core Technical Domains ]
            </div>
          </div>
        </div>

        {/* Filter Pills & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-mono uppercase tracking-wider border transition-colors ${
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-white text-black border-white font-bold'
                      : 'bg-black text-white border-black font-bold'
                    : isDark
                    ? 'bg-[#111111] border-[#333333] text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a]'
                    : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Skill Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 opacity-40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search skills or tools..."
              className={`w-full pl-8 pr-3 py-1.5 text-xs font-mono border transition-colors focus:outline-none ${
                isDark
                  ? 'bg-[#111111] border-[#333333] text-white placeholder:text-[#666666] focus:border-white'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-black'
              }`}
            />
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill) => (
            <div
              key={skill.id}
              className={`p-5 border flex flex-col justify-between transition-colors ${
                isDark
                  ? 'bg-[#111111] border-[#222222] hover:border-[#3a3a3a]'
                  : 'bg-white border-slate-200 hover:border-slate-400'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[10px] font-mono">
                  <span className="px-1.5 py-0.5 border border-[#333333] text-[#a0a0a0] uppercase">
                    {skill.category}
                  </span>
                  <span className="text-emerald-400 font-bold">{skill.experience}</span>
                </div>

                <div className="space-y-1.5">
                  <h3 className={`text-base font-bold uppercase tracking-tight ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {skill.name}
                  </h3>
                  <p className={`text-xs leading-relaxed opacity-70 ${
                    isDark ? 'text-[#a0a0a0]' : 'text-slate-600'
                  }`}>
                    {skill.description}
                  </p>
                </div>

                {/* Proficiency Gauge */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-[10px] font-mono opacity-60">
                    <span>MASTERY SCORE</span>
                    <span>{skill.proficiency}%</span>
                  </div>
                  <div className="w-full h-1 bg-[#222222] overflow-hidden">
                    <div
                      className="h-full bg-white transition-all duration-500"
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>

                {/* Tool Badges */}
                <div className="flex flex-wrap gap-1 pt-2 border-t border-[#222222]">
                  {skill.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-1.5 py-0.5 text-[9px] font-mono border border-[#222222] bg-[#161616] text-[#999999]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="p-8 border border-dashed border-[#333333] text-center font-mono text-xs opacity-60">
            No skills found matching "{searchQuery}".
          </div>
        )}

      </div>
    </section>
  );
};
