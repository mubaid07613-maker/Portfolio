'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, FileDown, Github, Linkedin, Mail, Award, Terminal, Cpu, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const { personal, socialLinks, telemetry } = portfolioData;

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Honor & Status Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CGPA {personal.cgpa}</span>
                <span className="text-emerald-500">•</span>
                <span className="text-slate-300">High Academic Distinction</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>BZU Multan • CE</span>
              </div>
            </div>

            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Hi, I&apos;m <span className="gradient-text-cyan">{personal.name}</span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {personal.tagline}
              </p>
            </div>

            {/* Grounded Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personal.about}
            </p>

            {/* Quick Tech Focus Pills */}
            <div className="pt-2">
              <div className="text-xs font-mono text-slate-500 mb-2 uppercase tracking-wider">
                Active Engineering Focus
              </div>
              <div className="flex flex-wrap gap-2">
                {telemetry.primaryDomains.map((domain) => (
                  <span
                    key={domain}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] text-slate-300 border border-white/[0.08]"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-glow group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>Get In Touch</span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2 pl-2 border-l border-white/10">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Engineering Terminal Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-surface p-5 border border-white/10 shadow-2xl overflow-hidden group">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    ubaid@bzu-eng: ~/telemetry
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  ONLINE
                </div>
              </div>

              {/* Code / Telemetry Body */}
              <div className="font-mono text-xs space-y-3 text-slate-300">
                <div className="text-slate-500">
                  // Engineer Profile Telemetry
                </div>

                <div className="grid grid-cols-3 gap-2 py-2 px-3 rounded-lg bg-black/40 border border-white/5">
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">CGPA</div>
                    <div className="text-emerald-400 font-bold text-sm">3.99 / 4.0</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Semester</div>
                    <div className="text-sky-400 font-semibold text-sm">3rd (Active)</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Discipline</div>
                    <div className="text-slate-200 font-medium text-xs truncate">Computer Eng</div>
                  </div>
                </div>

                <div className="space-y-1.5 pt-1">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Core Languages:</span>
                    <span className="text-slate-200">C, Python, C# (.NET)</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Data & ML Tools:</span>
                    <span className="text-slate-200">scikit-learn, NumPy, pandas</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Signal Computing:</span>
                    <span className="text-slate-200">MATLAB (Sampling, FFT)</span>
                  </div>
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Academic Leadership:</span>
                    <span className="text-amber-300">Class Rep & Lab Liaison</span>
                  </div>
                </div>

                {/* Simulated Terminal Prompt */}
                <div className="pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center gap-2">
                  <span className="text-emerald-400">$</span>
                  <span className="text-slate-300">./deploy_portfolio --provider=aws-amplify</span>
                </div>
                <div className="text-[11px] text-emerald-400/90 pl-3">
                  ✔ Static bundle compiled • Global CDN active
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-500/10 rounded-full blur-2xl pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

