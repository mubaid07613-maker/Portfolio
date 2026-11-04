'use client';

import React, { useState } from 'react';
import { portfolioData } from '@/data/portfolioData';
import { ArrowRight, FileDown, Github, Linkedin, Mail, Award, Terminal, Play, CheckCircle } from 'lucide-react';

export default function HeroSection() {
  const { personal, socialLinks, currentlyLearned } = portfolioData;

  // Interactive Terminal State in Hero
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    'Ubaid Ur Rehman Engineering System v2.6.4 [BZU Core]',
    'Type "help" or click quick commands below:',
  ]);

  const runCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    const newLogs = [...terminalLogs, `$ ${cmd}`];

    switch (cleanCmd) {
      case 'help':
        newLogs.push(
          'Available commands: cgpa, projects, learned, dsp, contact, clear'
        );
        break;
      case 'cgpa':
        newLogs.push('Academic Standing: CGPA 3.99 / 4.00 (High Academic Distinction at BZU)');
        break;
      case 'projects':
        newLogs.push('1. C Student Management System (Pointers/Structs)');
        newLogs.push('2. Diabetes Prediction Model (scikit-learn Decision Trees)');
        newLogs.push('3. C# Login & Local Data Storage (OOP / SQL)');
        newLogs.push('4. MATLAB Signal Processing & FFT Suite');
        break;
      case 'learned':
        newLogs.push(`Latest Mastered: "${currentlyLearned[0]?.topic}"`);
        newLogs.push(`Applied in: "${currentlyLearned[0]?.appliedIn}"`);
        break;
      case 'dsp':
        newLogs.push('Switched DSP mode. Use floating HUD (bottom right) for live waveforms!');
        break;
      case 'contact':
        newLogs.push(`Email: ${personal.email} | Phone: ${personal.phone}`);
        break;
      case 'clear':
        setTerminalLogs(['Terminal cleared. Type "help" for options.']);
        setTerminalInput('');
        return;
      default:
        newLogs.push(`Command not recognized: "${cmd}". Type "help" for commands.`);
    }

    setTerminalLogs(newLogs.slice(-7)); // keep last 7 lines
    setTerminalInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && terminalInput) {
      runCommand(terminalInput);
    }
  };

  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Academic Distinction Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>CGPA {personal.cgpa}</span>
                <span className="text-emerald-500">•</span>
                <span>Top Academic Distinction</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>BZU Multan • Computer Engineering</span>
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

            {/* Concise Bio */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {personal.about}
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-950 bg-sky-400 hover:bg-sky-300 transition-all shadow-glow group"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#workbench"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-white/20 transition-all"
              >
                <Terminal className="w-4 h-4 text-emerald-400" />
                <span>Live Engineering Lab</span>
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

          {/* Right Column: Interactive Command Terminal Cockpit (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-surface p-5 border border-white/10 shadow-2xl overflow-hidden group">
              
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-[11px] text-slate-400">
                    ubaid@bzu: ~/terminal
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/[0.04] text-[10px] font-mono text-emerald-400 border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  INTERACTIVE
                </div>
              </div>

              {/* Terminal Log Output Window */}
              <div className="min-h-[160px] max-h-[190px] overflow-y-auto space-y-1.5 font-mono text-xs text-slate-300 p-2 rounded-xl bg-black/50 border border-white/5">
                {terminalLogs.map((log, idx) => (
                  <div
                    key={idx}
                    className={
                      log.startsWith('$')
                        ? 'text-sky-300 font-semibold'
                        : log.includes('CGPA')
                        ? 'text-emerald-400 font-bold'
                        : 'text-slate-300'
                    }
                  >
                    {log}
                  </div>
                ))}
              </div>

              {/* Quick Clickable Command Pills */}
              <div className="pt-3 flex flex-wrap gap-1.5">
                {['cgpa', 'projects', 'learned', 'dsp', 'help'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => runCommand(cmd)}
                    className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] hover:bg-white/[0.1] text-slate-300 border border-white/[0.06] hover:border-sky-400/40 transition-all"
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

              {/* Terminal Input Prompt */}
              <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-2 font-mono text-xs">
                <span className="text-emerald-400">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="type command & press enter..."
                  className="w-full bg-transparent text-white focus:outline-none placeholder:text-slate-600"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
