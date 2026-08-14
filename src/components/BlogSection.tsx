import React, { useState } from 'react';
import {
  BookOpen,
  Search,
  X,
  Clock,
  Eye,
  Heart,
  Share2,
  Tag,
  ArrowRight,
} from 'lucide-react';
import { blogPostsData } from '../data/portfolioData';
import { BlogPost } from '../types';

interface BlogSectionProps {
  isDark: boolean;
}

export const BlogSection: React.FC<BlogSectionProps> = ({ isDark }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activePost, setActivePost] = useState<BlogPost | null>(null);
  const [likesMap, setLikesMap] = useState<{ [id: string]: number }>({});

  const categories = ['All', 'AI & Automation', 'UI/UX Design', 'Data Analytics'];

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikesMap((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const filteredPosts = blogPostsData.filter((post) => {
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;
    const matchesQuery =
      searchQuery === '' ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesQuery;
  });

  return (
    <section
      id="blog"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-[#0a0a0a]' : 'border-slate-200 bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-[10px] uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Technical Insights & Publications
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Technical Blog & Articles
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Deep dives into AI agent workflows, responsive web architecture, UI design principles, and analytics pipelines.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar & Filter Controls */}
        <div className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 opacity-40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search posts by title, tag, AI workflow, UI system, or keyword..."
              className={`w-full pl-10 pr-10 py-3 text-xs font-mono border transition-colors focus:outline-none ${
                isDark
                  ? 'bg-[#111111] border-[#333333] text-white placeholder:text-[#666666] focus:border-white'
                  : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-black'
              }`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest border transition-colors ${
                  selectedCategory === cat
                    ? isDark
                      ? 'bg-white text-black border-white'
                      : 'bg-black text-white border-black'
                    : isDark
                    ? 'bg-[#111111] border-[#333333] text-[#a0a0a0] hover:text-white hover:bg-[#1a1a1a]'
                    : 'bg-slate-100 border-slate-300 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Cards Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 border border-[#222222] bg-[#111111] space-y-3">
            <Search className="w-8 h-8 mx-auto opacity-30" />
            <h3 className={`text-xs font-mono uppercase tracking-wider ${isDark ? 'text-white' : 'text-slate-900'}`}>
              No articles found matching "{searchQuery}"
            </h3>
            <p className="text-[10px] font-mono text-slate-500">
              Try searching for "Gemini", "Tailwind", "React", or "Recharts".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="px-3 py-1.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest"
            >
              Reset Search Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPosts.map((post) => {
              const totalLikes = post.likes + (likesMap[post.id] || 0);
              return (
                <article
                  key={post.id}
                  onClick={() => setActivePost(post)}
                  className={`p-5 border cursor-pointer transition-colors flex flex-col justify-between group ${
                    isDark
                      ? 'bg-[#111111] border-[#222222] hover:border-[#444444]'
                      : 'bg-white border-slate-200 hover:border-slate-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-mono opacity-50">
                      <span className="px-1.5 py-0.5 border border-[#333333] uppercase">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                        <span>/</span>
                        <span>{post.date}</span>
                      </div>
                    </div>

                    <h3 className={`text-base font-bold tracking-tight uppercase group-hover:underline ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {post.title}
                    </h3>

                    <p className={`text-xs leading-relaxed line-clamp-3 opacity-70 ${
                      isDark ? 'text-[#a0a0a0]' : 'text-slate-600'
                    }`}>
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 pt-1">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-1.5 py-0.5 text-[9px] font-mono border ${
                            isDark
                              ? 'bg-[#1a1a1a] border-[#333333] text-[#a0a0a0]'
                              : 'bg-slate-100 border-slate-200 text-slate-600'
                          }`}
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono">
                    <div className="flex items-center gap-3 opacity-60">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {post.views}
                      </span>
                      <button
                        onClick={(e) => handleLike(post.id, e)}
                        className="flex items-center gap-1 hover:text-white"
                      >
                        <Heart className="w-3 h-3" />
                        {totalLikes}
                      </button>
                    </div>

                    <span className="font-bold uppercase tracking-wider flex items-center gap-1">
                      <span>Read</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>

      {/* Full Article Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90">
          <div
            className={`max-w-3xl w-full max-h-[90vh] overflow-y-auto border ${
              isDark ? 'bg-[#0a0a0a] border-[#333333] text-white' : 'bg-white border-slate-300 text-slate-900'
            } p-6 sm:p-8 space-y-6 text-left relative`}
          >
            <button
              onClick={() => setActivePost(null)}
              className={`absolute top-4 right-4 p-1.5 border ${
                isDark ? 'border-[#333333] bg-[#111111] text-[#a0a0a0] hover:text-white' : 'border-slate-300 bg-slate-100 text-slate-600'
              }`}
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-2 border-b border-[#222222] pb-4">
              <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-400">
                {activePost.category}
              </div>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight">{activePost.title}</h2>
              <div className="flex items-center gap-3 text-[10px] font-mono opacity-50">
                <span>Author: {activePost.author}</span>
                <span>/</span>
                <span>{activePost.date}</span>
                <span>/</span>
                <span>{activePost.readTime}</span>
              </div>
            </div>

            {/* Article Content Render */}
            <div className={`prose max-w-none text-xs sm:text-sm leading-relaxed ${
              isDark ? 'text-[#d0d0d0]' : 'text-slate-700'
            } space-y-4`}>
              {activePost.content.split('\n\n').map((paragraph, idx) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-sm font-bold uppercase tracking-wider text-white pt-2 border-b border-[#222222] pb-1">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('#### ')) {
                  return (
                    <h4 key={idx} className="text-xs font-bold uppercase text-white pt-1">
                      {paragraph.replace('#### ', '')}
                    </h4>
                  );
                }
                if (paragraph.startsWith('```')) {
                  const code = paragraph.replace(/```[a-z]*/, '').replace(/```$/, '');
                  return (
                    <pre key={idx} className="p-4 bg-[#111111] border border-[#222222] text-white font-mono text-[11px] overflow-x-auto">
                      <code>{code}</code>
                    </pre>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            {/* Footer */}
            <div className="pt-4 border-t border-[#222222] flex items-center justify-between text-[10px] font-mono">
              <button
                onClick={(e) => handleLike(activePost.id, e)}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333333] bg-[#111111] text-white font-bold uppercase"
              >
                <Heart className="w-3.5 h-3.5" />
                <span>Applaud ({activePost.likes + (likesMap[activePost.id] || 0)})</span>
              </button>

              <button
                onClick={() => {
                  navigator.clipboard?.writeText(window.location.href);
                  alert('Post link copied to clipboard!');
                }}
                className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#333333] bg-[#111111] text-white font-bold uppercase"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
