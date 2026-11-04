'use client';

import React from 'react';
import { portfolioData } from '@/data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle2, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  const { education, coursework } = portfolioData;

  return (
    <section id="education" className="py-20 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-2 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Education & Academic Track Record
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Computer engineering curriculum emphasizing core software systems, digital logic, and signal processing.
          </p>
        </div>

        {/* Education Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main University Card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-7 rounded-2xl glass-surface border border-emerald-500/30 bg-emerald-950/10 relative overflow-hidden h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-xs font-mono text-emerald-300 font-semibold uppercase tracking-wider">
                      Current Degree (In Progress)
                    </span>
                  </div>
                  <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono font-bold">
                    CGPA 3.99 / 4.00
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    {education[0].degree}
                  </h3>
                  <div className="text-sm font-medium text-slate-300 mt-1 flex flex-wrap items-center gap-3">
                    <span className="text-sky-300">{education[0].institution}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {education[0].location}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {education[0].period}
                    </span>
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {education[0].highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Accreditation: PEC Recognized Curriculum</span>
                <span className="text-emerald-400">Honors Standing</span>
              </div>
            </div>
          </div>

          {/* Previous Education Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl glass-surface border border-white/10 h-full flex flex-col justify-between">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Intermediate Education
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {education[1].period}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {education[1].degree}
                  </h3>
                  <div className="text-sm text-slate-400 mt-1">
                    {education[1].institution}, {education[1].location}
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  {education[1].highlights.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-xs font-mono text-slate-500">
                Foundational Sciences: Mathematics, Physics, Chemistry
              </div>
            </div>
          </div>

        </div>

        {/* Relevant Engineering Coursework Shelf */}
        <div className="p-6 rounded-2xl glass-surface border border-white/[0.08]">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <h4 className="text-sm font-mono uppercase tracking-wider text-slate-300">
              Key Engineering Coursework Completed & Active
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="text-xs font-semibold text-white">
                  {course.name}
                </div>
                <div className="flex items-center justify-between pt-2 mt-2 border-t border-white/[0.04]">
                  <span className="text-[10px] font-mono text-sky-400">
                    {course.code}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    {course.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

