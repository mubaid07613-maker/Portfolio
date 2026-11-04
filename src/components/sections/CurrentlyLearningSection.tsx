'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';

export default function CurrentlyLearningSection() {
  const { currentlyLearning } = portfolioData;

  return (
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
            <Compass className="w-3.5 h-3.5" />
            <span>Continuous Learning Frontier</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Currently Exploring & Engineering Horizons
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Where I am actively channeling research and technical study beyond the standard classroom syllabus.
          </p>
        </div>

        {/* 3 Learning Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentlyLearning.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-surface border border-white/[0.08] hover:border-sky-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                    {item.status}
                  </span>
                  <Sparkles className="w-4 h-4 text-slate-500" />
                </div>

                <h3 className="text-lg font-bold text-white">
                  {item.topic}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.context}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 mt-4 border-t border-white/[0.06]">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

