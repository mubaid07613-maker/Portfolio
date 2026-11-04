'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowUp, Terminal, Shield, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const { personal, socialLinks } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.06] bg-[#050608] py-12 relative z-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.05] border border-white/10 font-mono text-xs font-bold text-sky-400">
              UR
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                {personal.name}
              </div>
              <div className="text-xs text-slate-500 font-mono">
                Computer Engineering Student • BZU Multan
              </div>
            </div>
          </div>

          {/* Tech Badge */}
          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>Next.js</span>
            <span>•</span>
            <span>TypeScript</span>
            <span>•</span>
            <span>Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400">AWS Amplify Ready</span>
          </div>

          {/* Socials & Scroll to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.email}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-slate-400 hover:text-white transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-600 gap-2">
          <div>
            © {new Date().getFullYear()} Ubaid Ur Rehman. All academic and project rights reserved.
          </div>
          <div>
            Multan, Punjab, Pakistan • Engineering Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
}

