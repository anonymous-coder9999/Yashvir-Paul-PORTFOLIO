import React from 'react';
import {
  Github,
  GitCommit,
  GitPullRequest,
  Star,
  GitFork,
  ArrowUpRight,
  Flame,
} from 'lucide-react';
import { githubStatsData, profileData } from '../data/portfolioData';

interface GitHubSectionProps {
  isDark: boolean;
}

export const GitHubSection: React.FC<GitHubSectionProps> = ({ isDark }) => {
  return (
    <section
      id="github"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-[#0a0a0a]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        
        {/* Section Header */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Open Source & Commit Activity
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                GitHub & Engineering Telemetry
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Continuous shipping velocity, open-source repositories, and code volume statistics.
              </p>
            </div>

            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border border-[#333333] hover:bg-white hover:text-black transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
              <span>View GitHub Profile</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-4 border border-[#222222] bg-[#111111] space-y-1">
            <div className="text-[9px] font-mono uppercase tracking-wider opacity-50">Total Commits</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white">{githubStatsData.totalCommits}+</div>
            <div className="text-[9px] font-mono text-emerald-400">Across 32 repos</div>
          </div>
          <div className="p-4 border border-[#222222] bg-[#111111] space-y-1">
            <div className="text-[9px] font-mono uppercase tracking-wider opacity-50">Current Streak</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">{githubStatsData.currentStreakDays} Days</div>
            <div className="text-[9px] font-mono opacity-50">Daily consistency</div>
          </div>
          <div className="p-4 border border-[#222222] bg-[#111111] space-y-1">
            <div className="text-[9px] font-mono uppercase tracking-wider opacity-50">Stars Earned</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white">{githubStatsData.starsEarned}</div>
            <div className="text-[9px] font-mono opacity-50">Community stars</div>
          </div>
          <div className="p-4 border border-[#222222] bg-[#111111] space-y-1">
            <div className="text-[9px] font-mono uppercase tracking-wider opacity-50">Pull Requests</div>
            <div className="text-xl sm:text-2xl font-mono font-bold text-white">{githubStatsData.pullRequests}</div>
            <div className="text-[9px] font-mono opacity-50">Merged in prod</div>
          </div>
        </div>

        {/* Contribution Heatmap Simulation */}
        <div className="p-5 border border-[#222222] bg-[#111111] space-y-4">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className="uppercase tracking-wider opacity-60">Annual Contribution Heatmap (364 Days)</span>
            <span className="text-[10px] text-emerald-400 font-bold">142 Days Continuous Streak</span>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="grid grid-flow-col grid-rows-7 gap-1 min-w-[700px]">
              {githubStatsData.contributions.map((c, i) => {
                const bg =
                  c.count === 0
                    ? 'bg-[#181818]'
                    : c.count < 2
                    ? 'bg-[#104323]'
                    : c.count < 4
                    ? 'bg-[#15803d]'
                    : 'bg-[#22c55e]';
                return (
                  <div
                    key={i}
                    title={`${c.date}: ${c.count} contributions`}
                    className={`w-2.5 h-2.5 ${bg} transition-transform hover:scale-125 cursor-pointer`}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono opacity-50 pt-1">
            <span>Less</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-[#181818]" />
              <span className="w-2 h-2 bg-[#104323]" />
              <span className="w-2 h-2 bg-[#15803d]" />
              <span className="w-2 h-2 bg-[#22c55e]" />
            </div>
            <span>More</span>
          </div>
        </div>

        {/* Featured Repositories Bento */}
        <div className="space-y-3">
          <div className="text-[10px] font-mono uppercase tracking-wider opacity-50">
            Top Open-Source Repositories
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {githubStatsData.featuredRepos.map((repo) => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 border border-[#222222] bg-[#111111] hover:border-[#444444] transition-colors flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold font-mono text-white group-hover:underline">
                      {repo.name}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                  </div>
                  <p className="text-xs opacity-70">
                    {repo.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono opacity-60">
                  <span className="text-white font-bold">{repo.language}</span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3 h-3 text-amber-400" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3 h-3" />
                      {repo.forks}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
