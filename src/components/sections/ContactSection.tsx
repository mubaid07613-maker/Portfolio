'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, FileDown, Github, Linkedin, MessageSquare, Terminal } from 'lucide-react';

export default function ContactSection() {
  const { personal, socialLinks } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Message Dispatcher
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSendMail = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || 'Collaborator'}`);
    const body = encodeURIComponent(
      `Hello Ubaid,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.08] bg-[#07090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Card */}
        <div className="rounded-3xl glass-surface border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Direct Info (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct Communication Channel</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Let&apos;s Build Something Resilient
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Open to software internships, machine learning research, and engineering collaborations. Based in Multan with full availability for remote work.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Direct Email</div>
                      <a
                        href={`mailto:${personal.email}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-sky-300 transition-colors"
                      >
                        {personal.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personal.email, 'email')}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-slate-500 uppercase">Phone & WhatsApp</div>
                      <a
                        href={`tel:${personal.phone.replace(/[^0-9+]/g, '')}`}
                        className="text-xs sm:text-sm font-mono text-slate-200 hover:text-emerald-300 transition-colors"
                      >
                        {personal.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => copyToClipboard(personal.phone, 'phone')}
                    className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                  <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase">Location & Base</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {personal.location} • BZU Multan (UTC+5)
                    </div>
                  </div>
                </div>
              </div>

              {/* Profiles & Resume */}
              <div className="pt-2 flex items-center gap-3">
                <a
                  href={personal.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/30 transition-all"
                >
                  <FileDown className="w-4 h-4 text-sky-400" />
                  <span>Download Resume PDF</span>
                </a>

                <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Direct Message Dispatcher Form (6 cols) */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handleSendMail}
                className="p-6 sm:p-7 rounded-2xl bg-black/60 border border-white/10 space-y-4 shadow-xl"
              >
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-mono text-slate-300">
                      DISPATCH MESSAGE
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400">
                    DIRECT ROUTING
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="e.g. sarah@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      Message
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Discussing software internship, project, or collaboration..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white focus:outline-none focus:border-sky-400 transition-colors resize-none"
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-sky-400 hover:bg-sky-300 text-slate-950 font-semibold text-xs font-mono flex items-center justify-center gap-2 transition-all shadow-glow"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send via Email Client</span>
                </button>
              </form>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
