'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { Users, Shield, Wrench, Monitor, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function LeadershipSection() {
  const { leadership } = portfolioData;

  const icons = [MessageSquare, Users, Wrench, Monitor];

  return (
    <section id="leadership" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            <Users className="w-3.5 h-3.5" />
            <span>Academic Leadership & Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Class Representative & Laboratory Support
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Active departmental leadership, student-faculty communication, and hands-on laboratory infrastructure support.
          </p>
        </div>

        {/* Leadership Cards */}
        {leadership.map((lead, idx) => (
          <div
            key={idx}
            className="p-8 rounded-2xl glass-surface border border-white/10 relative overflow-hidden space-y-6"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-wider">
                  Official Departmental Appointment
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">
                  {lead.role}
                </h3>
                <div className="text-sm text-slate-400 mt-1">
                  {lead.organization} • {lead.location}
                </div>
              </div>

              <div className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 self-start sm:self-auto">
                {lead.period}
              </div>
            </div>

            {/* Core Responsibilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {lead.highlights.map((bullet, bIdx) => {
                const Icon = icons[bIdx % icons.length];
                return (
                  <div
                    key={bIdx}
                    className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all flex items-start gap-3.5"
                  >
                    <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {bullet}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Impact Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/[0.06]">
              <span className="text-xs font-mono text-slate-500 mr-2">Key Competencies:</span>
              {lead.impactTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] text-slate-300 border border-white/[0.07]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

