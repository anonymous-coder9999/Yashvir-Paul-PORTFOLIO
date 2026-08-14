import React, { useState } from 'react';
import {
  MessageSquare,
  Mail,
  Send,
  Check,
  ArrowRight,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { profileData } from '../data/portfolioData';

interface ContactSectionProps {
  isDark: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isDark }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceNeeded: 'Web Developer',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className={`py-16 sm:py-20 border-b relative ${
        isDark ? 'border-[#222222] bg-[#0a0a0a]' : 'border-slate-200 bg-slate-50'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 text-left">
        {/* Header */}
        <div className="space-y-3">
          <div className="text-[10px] uppercase tracking-widest opacity-40 border-b border-[#222222] pb-1">
            Communication & Inquiries
          </div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight uppercase ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                Direct Contact & Inquiries
              </h2>
              <p className={`text-xs sm:text-sm mt-1 max-w-xl opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                Connect via WhatsApp for immediate inquiries, or send an email for project details and consultations.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Instant WhatsApp & Email Redirect Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Direct Banner Card */}
            <div className={`p-6 border space-y-4 ${
              isDark ? 'bg-[#111111] border-[#333333]' : 'bg-white border-slate-300'
            }`}>
              <div className="flex items-center justify-between">
                <div className="p-2 border border-[#333333] bg-[#0a0a0a]">
                  <MessageSquare className="w-5 h-5 text-emerald-400" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest px-2 py-0.5 border border-emerald-500/40 text-emerald-400">
                  FASTEST RESPONSE
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight text-white">Instant WhatsApp Chat</h3>
                <p className="text-xs text-[#a0a0a0] mt-1">
                  Connect directly with Yashvir Paul for instant estimates, advisory, or technical inquiries.
                </p>
              </div>

              <div className="pt-1">
                <div className="text-lg font-mono font-bold text-white">
                  +91 9394389413
                </div>
              </div>

              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold uppercase text-xs tracking-widest transition-colors"
              >
                <span>Launch WhatsApp Chat</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Email Direct Banner Card */}
            <div className={`p-6 border space-y-4 ${
              isDark ? 'bg-[#111111] border-[#222222]' : 'bg-white border-slate-200'
            }`}>
              <div className="flex items-center justify-between">
                <div className="p-2 border border-[#333333] bg-[#0a0a0a]">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-widest opacity-50">
                  OFFICIAL MAIL
                </span>
              </div>

              <div>
                <h3 className={`text-base font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Email Contact
                </h3>
                <p className={`text-xs mt-1 opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                  Send project specifications, RFP documents, or recruiter communications directly.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-sm font-mono font-bold text-white hover:underline"
                >
                  {profileData.email}
                </a>
              </div>

              <a
                href={`mailto:${profileData.email}`}
                className={`w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 border text-xs font-bold uppercase tracking-widest transition-colors ${
                  isDark
                    ? 'border-[#333333] bg-[#1a1a1a] text-white hover:bg-[#222222]'
                    : 'border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-200'
                }`}
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Open Email App</span>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 border ${
              isDark ? 'bg-[#111111] border-[#222222]' : 'bg-white border-slate-200'
            } space-y-5`}>
              
              <div className="space-y-1">
                <h3 className={`text-base font-bold uppercase tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
                  Send Direct Inquiry
                </h3>
                <p className={`text-xs opacity-70 ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                  Fill out the details below to submit a message directly to Yashvir Paul.
                </p>
              </div>

              {submitted ? (
                <div className="p-6 border border-emerald-500/40 bg-[#0a0a0a] text-emerald-400 space-y-3 text-center">
                  <Check className="w-8 h-8 mx-auto text-emerald-400" />
                  <h4 className="text-sm font-bold uppercase tracking-wider">Message Received</h4>
                  <p className="text-xs text-slate-300 font-mono">
                    Thank you for reaching out. You can also follow up directly on WhatsApp at{' '}
                    <a
                      href={profileData.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold text-white"
                    >
                      +91 9394389413
                    </a>.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-2 px-3 py-1.5 bg-emerald-500 text-black text-[10px] font-bold uppercase tracking-widest"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Alex Morgan"
                        className={`w-full px-3 py-2.5 text-xs font-mono border transition-colors focus:outline-none ${
                          isDark
                            ? 'bg-[#0a0a0a] border-[#333333] text-white focus:border-white'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-black'
                        }`}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alex@company.com"
                        className={`w-full px-3 py-2.5 text-xs font-mono border transition-colors focus:outline-none ${
                          isDark
                            ? 'bg-[#0a0a0a] border-[#333333] text-white focus:border-white'
                            : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-black'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                      Primary Service Needed
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className={`w-full px-3 py-2.5 text-xs font-mono border transition-colors focus:outline-none ${
                        isDark
                          ? 'bg-[#0a0a0a] border-[#333333] text-white focus:border-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-black'
                      }`}
                    >
                      <option value="Web Development">Web Development (React 19 / Node / Vite)</option>
                      <option value="AI Receptionist">AI Receptionist & 24/7 Voice/Chat Agents</option>
                      <option value="n8n Automations">n8n Automations & Automated Workflows</option>
                      <option value="SaaS Edits">SaaS Edits & Full-Stack Performance Tuning</option>
                      <option value="UI/UX Design">UI/UX Design & Geometric Balance Systems</option>
                      <option value="Data Analytics">Data Analytics & Real-Time BI Dashboards</option>
                      <option value="Social Management">Social Management & Auto Content Distribution</option>
                      <option value="Google Search Top Listing">Google Search Top Listing & Technical SEO</option>
                      <option value="Scaling Buisness Globally">Scaling Buisness Globally & Venture Ops</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className={`text-[10px] font-mono uppercase tracking-wider ${isDark ? 'text-[#a0a0a0]' : 'text-slate-600'}`}>
                      Message / Project Details
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project goals, timelines, or technology requirements..."
                      className={`w-full px-3 py-2.5 text-xs font-mono border transition-colors focus:outline-none ${
                        isDark
                          ? 'bg-[#0a0a0a] border-[#333333] text-white focus:border-white'
                          : 'bg-slate-50 border-slate-300 text-slate-900 focus:border-black'
                      }`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 bg-white text-black font-bold uppercase text-xs tracking-widest hover:bg-slate-200 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Inquiry Message</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
