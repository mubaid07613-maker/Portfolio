'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Mail, Phone, MapPin, Copy, Check, Send, FileDown, Github, Linkedin, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const { personal, socialLinks } = portfolioData;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  return (
    <section id="contact" className="py-24 relative border-t border-white/[0.06] bg-[#07090D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Container Card */}
        <div className="rounded-3xl glass-surface border border-white/10 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Let&apos;s Connect</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
                Open to Engineering Internships, Technical Roles & Research
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl">
                Whether you have an inquiry regarding low-level C programming, machine learning classification, signal analysis, or an upcoming internship opportunity in Multan or remote, I welcome your message.
              </p>

              {/* Direct Channels */}
              <div className="space-y-3 pt-2">
                {/* Email Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-sky-500/30 transition-all max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-sky-500/10 text-sky-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Direct Email</div>
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
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-emerald-500/30 transition-all max-w-md">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-500 uppercase">Phone & WhatsApp</div>
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
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* Location Item */}
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] max-w-md">
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 uppercase">Location & Academic Base</div>
                    <div className="text-xs sm:text-sm font-medium text-slate-200">
                      {personal.location} • BZU Multan (UTC+5)
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${personal.email}?subject=Opportunity%20Inquiry%20-%20Ubaid%20Ur%20Rehman`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-glow"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Direct Email</span>
                </a>

                <a
                  href={personal.resumeDownloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all"
                >
                  <FileDown className="w-4 h-4 text-slate-400" />
                  <span>Download CV / Resume</span>
                </a>
              </div>
            </div>

            {/* Right Card: Recruiter Quick Summary Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-black/60 border border-white/10 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-slate-400">
                    CANDIDATE DOSSIER
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-mono text-[10px]">
                    VERIFIED DATA
                  </span>
                </div>

                <div className="space-y-3 font-mono text-xs text-slate-300">
                  <div>
                    <div className="text-slate-500 text-[10px] uppercase">Candidate Name</div>
                    <div className="text-white font-semibold text-sm">{personal.name}</div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[10px] uppercase">Academic Metric</div>
                    <div className="text-emerald-400 font-semibold">CGPA 3.99 / 4.00 (3rd Semester)</div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[10px] uppercase">Institution</div>
                    <div className="text-slate-200">{personal.university}</div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[10px] uppercase">Software & ML Competencies</div>
                    <div className="text-slate-200">C, Python, C# (.NET), scikit-learn, MATLAB, Git, SQL</div>
                  </div>

                  <div>
                    <div className="text-slate-500 text-[10px] uppercase">Leadership & Service</div>
                    <div className="text-amber-300">Class Representative & Laboratory Assistant</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">Profiles:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                      title="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-slate-300 hover:text-white transition-colors"
                      title="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Decorative Background Lighting */}
          <div className="absolute top-0 right-1/4 w-72 h-72 bg-sky-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </div>

      </div>
    </section>
  );
}

