'use client';

import React, { useState } from 'react';
import { portfolioData, CertificateItem } from '@/data/portfolioData';
import { Award, CheckCircle, Clock, ExternalLink, PlusCircle, HelpCircle } from 'lucide-react';

export default function CertificatesSection() {
  const { certificates } = portfolioData;
  const [showHowTo, setShowHowTo] = useState(false);

  return (
    <section id="certifications" className="py-20 relative border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <Award className="w-3.5 h-3.5" />
              <span>Certifications & Continuous Learning</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Professional Credentials & Certifications
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Track of verified coursework, active certifications, and planned industry credentials in AI, systems programming, and cloud architecture.
            </p>
          </div>

          <button
            onClick={() => setShowHowTo(!showHowTo)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors self-start"
          >
            <PlusCircle className="w-3.5 h-3.5 text-emerald-400" />
            <span>How to Add Certificates</span>
          </button>
        </div>

        {/* How to add notice */}
        {showHowTo && (
          <div className="mb-8 p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 text-xs space-y-2 text-slate-300 animate-fade-in">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <HelpCircle className="w-4 h-4" />
              <span>Adding Your Certificates in 30 Seconds:</span>
            </div>
            <p className="text-slate-400">
              Open <code className="text-emerald-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> and scroll to <code className="text-sky-300 font-mono">certificates</code>.
            </p>
            <p className="text-slate-400">
              Add your certificate title, issuer (e.g. Coursera, Kaggle, Cisco, AWS), issue date, and optional credential verification link. The new certificate badge appears automatically here!
            </p>
          </div>
        )}

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert) => {
            const isCompleted = cert.status === 'Completed';
            const isInProgress = cert.status === 'In Progress';

            return (
              <div
                key={cert.id}
                className="p-6 rounded-2xl glass-surface border border-white/[0.08] hover:border-emerald-500/30 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Status & Issuer */}
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono border ${
                        isCompleted
                          ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30'
                          : isInProgress
                          ? 'bg-sky-500/10 text-sky-300 border-sky-500/30'
                          : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
                      }`}
                    >
                      {isCompleted ? (
                        <CheckCircle className="w-3 h-3 text-emerald-400" />
                      ) : (
                        <Clock className="w-3 h-3 text-sky-400" />
                      )}
                      <span>{cert.status}</span>
                    </span>

                    <span className="text-[11px] font-mono text-slate-500">
                      {cert.issueDate}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Skills Covered */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verification link or placeholder badge */}
                <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-xs">
                  {cert.credentialUrl ? (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-500 italic">
                      {isCompleted ? 'Academic Syllabus Verified' : 'Credential Tracking Active'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

