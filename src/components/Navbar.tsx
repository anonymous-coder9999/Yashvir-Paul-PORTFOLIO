import React, { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  FileText,
  MessageSquare,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';
import { profileData } from '../data/portfolioData';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onOpenResumeModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  setIsDark,
  onOpenResumeModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Startups', href: '#startups' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'GitHub', href: '#github' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-200 ${
        isScrolled
          ? isDark
            ? 'bg-black/90 backdrop-blur-md border-b border-[#222222]'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200'
          : isDark
          ? 'bg-black border-b border-[#181818]'
          : 'bg-white border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div
              className={`w-7 h-7 flex items-center justify-center font-mono font-bold text-xs tracking-tighter transition-colors ${
                isDark
                  ? 'bg-white text-black group-hover:bg-slate-200'
                  : 'bg-black text-white group-hover:bg-slate-800'
              }`}
            >
              YP
            </div>
            <div className="flex flex-col text-left">
              <span
                className={`text-sm font-bold tracking-tight uppercase ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                {profileData.name}
              </span>
              <span
                className={`text-[9px] font-mono tracking-wider uppercase opacity-60 ${
                  isDark ? 'text-[#a0a0a0]' : 'text-slate-500'
                }`}
              >
                Engineer • Designer • Founder
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-mono tracking-wider uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors opacity-70 hover:opacity-100 ${
                  isDark
                    ? 'text-white hover:text-white'
                    : 'text-slate-800 hover:text-black'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-2.5">
            {/* Resume Viewer */}
            <button
              id="resume-nav-btn"
              onClick={onOpenResumeModal}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider border transition-colors ${
                isDark
                  ? 'border-[#333333] bg-[#111111] text-white hover:bg-[#1a1a1a]'
                  : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-3.5 h-3.5 opacity-70" />
              <span>Resume</span>
            </button>

            {/* WhatsApp Direct */}
            <a
              id="whatsapp-nav-btn"
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 text-black transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={() => setIsDark(!isDark)}
              className={`p-1.5 border transition-colors ${
                isDark
                  ? 'border-[#333333] bg-[#111111] text-white hover:bg-[#1a1a1a]'
                  : 'border-slate-300 bg-white text-slate-800 hover:bg-slate-100'
              }`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className={`p-1.5 border ${
                isDark ? 'border-[#333333] bg-[#111111] text-white' : 'border-slate-300 bg-white text-slate-800'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-1.5 border ${
                isDark ? 'border-[#333333] bg-[#111111] text-white' : 'border-slate-300 bg-white text-slate-800'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-3 ${
            isDark ? 'bg-black border-[#222222]' : 'bg-white border-slate-200'
          }`}
        >
          <div className="grid grid-cols-2 gap-2 text-xs font-mono uppercase">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`p-2 border ${
                  isDark
                    ? 'border-[#222222] bg-[#111111] text-white'
                    : 'border-slate-200 bg-slate-50 text-slate-900'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className={`w-full py-2 text-xs font-mono uppercase tracking-wider border flex items-center justify-center gap-2 ${
                isDark ? 'bg-[#111111] border-[#333333] text-white' : 'bg-white border-slate-300 text-slate-900'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>View Full Resume</span>
            </button>

            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2 text-xs font-mono uppercase tracking-wider bg-emerald-500 text-black font-bold flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 9394389413)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
