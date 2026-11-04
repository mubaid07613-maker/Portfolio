'use client';

import React, { useState } from 'react';
import { portfolioData, LearnedItem, LearningItem } from '@/data/portfolioData';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Award,
  Layers,
  Sparkles,
  ExternalLink,
  Edit3,
  Info,
  Check
} from 'lucide-react';

export default function LearningHub() {
  const { currentlyLearned, currentlyLearning, coursework, certificates, education } = portfolioData;
  const [activeTab, setActiveTab] = useState<'learned' | 'learning' | 'coursework' | 'certificates'>('learned');
  const [showEditGuide, setShowEditGuide] = useState(false);

  return (
    <section id="knowledge-hub" className="py-20 relative border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Skills Progression & Academic Track</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Mastery, Continuous Learning & Credentials
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              A consolidated record of skills mastered, active learning frontiers, BZU engineering coursework, and certifications.
            </p>
          </div>

          {/* Quick Edit Guide Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowEditGuide(!showEditGuide)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
            >
              <Edit3 className="w-3.5 h-3.5 text-emerald-400" />
              <span>How to Edit Learned Items</span>
            </button>
          </div>
        </div>

        {/* Collapsible Edit Guide */}
        {showEditGuide && (
          <div className="mb-8 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-2 text-slate-300 animate-fade-in">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <Info className="w-4 h-4" />
              <span>Editing What You Have Learned in 2 Steps:</span>
            </div>
            <p className="text-slate-400">
              Open <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> in your code editor.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
              <li>To edit or add things you have learned: modify the <code className="text-emerald-300 font-mono">currentlyLearned</code> array.</li>
              <li>To update what you are exploring next: modify the <code className="text-sky-300 font-mono">currentlyLearning</code> array.</li>
              <li>Save the file and your portfolio updates instantly!</li>
            </ul>
          </div>
        )}

        {/* Unified Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 rounded-2xl bg-white/[0.02] border border-white/[0.08] w-fit">
          <button
            onClick={() => setActiveTab('learned')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'learned'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Currently Learned ({currentlyLearned.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('learning')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'learning'
                ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>Currently Learning ({currentlyLearning.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('coursework')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'coursework'
                ? 'bg-violet-500/20 text-violet-300 border border-violet-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-violet-400" />
            <span>Academic Coursework ({coursework.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono transition-all ${
              activeTab === 'certificates'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>Certificates ({certificates.length})</span>
          </button>
        </div>

        {/* ========================================================= */}
        {/* TAB 1: CURRENTLY LEARNED (USER-EDITABLE) */}
        {/* ========================================================= */}
        {activeTab === 'learned' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {currentlyLearned.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl glass-surface border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                      {item.category}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {item.topic}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.takeaway}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-slate-500">Applied in:</span>
                    <span className="text-sky-300 truncate max-w-[180px]">{item.appliedIn}</span>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400 border border-white/[0.04]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: CURRENTLY LEARNING & ROADMAP */}
        {/* ========================================================= */}
        {activeTab === 'learning' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {currentlyLearning.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl glass-surface border border-white/[0.08] hover:border-sky-500/30 transition-all flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-sky-400 px-2 py-0.5 rounded bg-sky-500/10 border border-sky-500/20">
                      {item.domain}
                    </span>
                    <span className="text-xs font-mono text-sky-400 font-bold">
                      {item.progressPercent}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/[0.05] h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-sky-400 h-full rounded-full transition-all duration-500"
                      style={{ width: `${item.progressPercent}%` }}
                    />
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.topic}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.focus}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/[0.06] space-y-2">
                  <div className="text-[11px] font-mono text-slate-400">
                    <span className="text-emerald-400">Next Milestone:</span>{' '}
                    <span>{item.nextMilestone}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-slate-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: ACADEMIC COURSEWORK & DEGREE STANDING */}
        {/* ========================================================= */}
        {activeTab === 'coursework' && (
          <div className="space-y-6 animate-fade-in">
            {/* Degree Summary Card */}
            <div className="p-6 rounded-2xl glass-surface border border-violet-500/30 bg-violet-950/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="text-xs font-mono text-violet-400 uppercase tracking-wider">
                  Accredited Degree Track
                </div>
                <div className="text-xl font-bold text-white mt-1">
                  BSc Computer Engineering — Bahauddin Zakariya University (BZU), Multan
                </div>
                <div className="text-xs text-slate-300 mt-1">
                  Current Standing: 3rd Semester • CGPA 3.99 / 4.00 (Top Academic Distinction)
                </div>
              </div>

              <div className="px-4 py-2 rounded-xl bg-violet-500/20 border border-violet-500/40 text-violet-200 text-xs font-mono font-bold self-start sm:self-auto">
                CGPA 3.99 / 4.00
              </div>
            </div>

            {/* Coursework Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all flex flex-col justify-between"
                >
                  <div className="text-xs font-semibold text-white">
                    {course.name}
                  </div>
                  <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/[0.04]">
                    <span className="text-[10px] font-mono text-violet-400">
                      {course.code}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      {course.semester}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: CERTIFICATES & CREDENTIALS */}
        {/* ========================================================= */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            {certificates.map((cert) => {
              const isCompleted = cert.status === 'Completed';
              return (
                <div
                  key={cert.id}
                  className="p-6 rounded-2xl glass-surface border border-white/[0.08] hover:border-amber-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-2 py-0.5 rounded-full text-[11px] font-mono border ${
                          isCompleted
                            ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                            : 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                        }`}
                      >
                        {cert.status}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {cert.issueDate}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-white">
                      {cert.title}
                    </h3>

                    <p className="text-xs text-slate-400">
                      {cert.issuer}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/[0.06] text-xs font-mono text-slate-500">
                    {cert.credentialUrl ? (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300"
                      >
                        <span>Verify Credential</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : (
                      <span>{isCompleted ? 'Curriculum Verified' : 'Credential Tracking Active'}</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}

