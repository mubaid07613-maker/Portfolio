'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Cpu, Brain, Radio, Award, GitBranch, Layers, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function TelemetryDashboard() {
  const { personal, education } = portfolioData;

  const metrics = [
    {
      label: 'Academic Standing',
      value: '3.99 / 4.00',
      sub: 'Top Academic Distinction',
      context: 'BSc Computer Engineering (BZU)',
      icon: Award,
      color: 'emerald',
      borderColor: 'border-emerald-500/20',
      bgColor: 'bg-emerald-500/5',
      textColor: 'text-emerald-400',
    },
    {
      label: 'Systems & Architecture',
      value: 'Low-Level C',
      sub: 'Pointers & Dynamic Memory',
      context: 'Structs, Memory Allocation, Data Structures',
      icon: Cpu,
      color: 'sky',
      borderColor: 'border-sky-500/20',
      bgColor: 'bg-sky-500/5',
      textColor: 'text-sky-400',
    },
    {
      label: 'Applied AI & ML',
      value: 'scikit-learn',
      sub: 'Supervised Classification',
      context: 'Data Preprocessing, Decision Trees, Evaluation',
      icon: Brain,
      color: 'violet',
      borderColor: 'border-violet-500/20',
      bgColor: 'bg-violet-500/5',
      textColor: 'text-violet-400',
    },
    {
      label: 'DSP & Mathematics',
      value: 'MATLAB / FFT',
      sub: 'Spectral Frequency Analysis',
      context: 'Continuous & Discrete Signal Sampling',
      icon: Radio,
      color: 'amber',
      borderColor: 'border-amber-500/20',
      bgColor: 'bg-amber-500/5',
      textColor: 'text-amber-400',
    },
  ];

  return (
    <section id="dashboard" className="py-12 border-y border-white/[0.06] bg-[#0A0C11]/60 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping"></span>
            <span className="text-xs font-mono tracking-wider uppercase text-slate-400">
              Live Engineering Telemetry & Verification
            </span>
          </div>
          <span className="text-[11px] font-mono text-slate-500">
            BZU CE • Batch 2025–2029
          </span>
        </div>

        {/* 4 Telemetry Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {metrics.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`p-5 rounded-2xl glass-surface border ${item.borderColor} ${item.bgColor} transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <div className={`p-2 rounded-xl bg-white/[0.05] ${item.textColor}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className={`text-2xl font-bold tracking-tight ${item.textColor}`}>
                    {item.value}
                  </div>
                  <div className="text-xs font-medium text-slate-200">
                    {item.sub}
                  </div>
                  <div className="text-[11px] text-slate-400 pt-1 line-clamp-1">
                    {item.context}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Engineering Capabilities Banner */}
        <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <div className="text-xs text-slate-300">
              <span className="font-semibold text-white">Authentic Academic & Practical Verification:</span>{' '}
              All skills and projects reflect verified undergraduate laboratory coursework, independent implementations, and departmental service.
            </div>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
            <span className="text-emerald-400 font-semibold">Ready for:</span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/10">
              Software Internships
            </span>
            <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/10">
              ML Research
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

