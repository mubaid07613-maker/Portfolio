'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import {
  Github,
  ExternalLink,
  Code2,
  FolderGit2,
  Check,
  Edit3,
  Copy,
  Terminal,
  FileCode,
  Layers
} from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeView, setActiveView] = useState<Record<string, 'highlights' | 'code' | 'architecture'>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = [
    { label: 'All Artifacts', value: 'all' },
    { label: 'Systems (C)', value: 'Systems' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'Software (C#)', value: 'Software' },
    { label: 'Engineering (MATLAB)', value: 'Engineering' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const setViewMode = (projectId: string, mode: 'highlights' | 'code' | 'architecture') => {
    setActiveView((prev) => ({ ...prev, [projectId]: mode }));
  };

  const copyCode = (projectId: string, codeText: string) => {
    navigator.clipboard.writeText(codeText);
    setCopiedId(projectId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Production & Coursework Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Engineering Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Authentic software systems spanning low-level C memory records, scikit-learn ML pipelines, and numerical MATLAB signal suites.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 rounded-2xl bg-white/[0.03] border border-white/10 self-start">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                  activeCategory === cat.value
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const currentView = activeView[project.id] || 'highlights';

            return (
              <div
                key={project.id}
                className="rounded-3xl glass-surface border border-white/[0.08] hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-xl hover:shadow-2xl"
              >
                {/* Project Header */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-lg text-xs font-mono bg-sky-500/10 text-sky-300 border border-sky-500/20">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <span>{project.date}</span>
                      <span>•</span>
                      <span className="text-emerald-400">{project.status}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* View Switcher Tabs: Highlights vs Code vs Architecture */}
                  <div className="pt-2 flex items-center gap-1.5 p-1 rounded-xl bg-black/40 border border-white/5 w-fit">
                    <button
                      onClick={() => setViewMode(project.id, 'highlights')}
                      className={`px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                        currentView === 'highlights'
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      Highlights
                    </button>
                    {project.codeSnippet && (
                      <button
                        onClick={() => setViewMode(project.id, 'code')}
                        className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                          currentView === 'code'
                            ? 'bg-white/10 text-white font-semibold'
                            : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        <FileCode className="w-3 h-3 text-sky-400" />
                        <span>Code Snippet</span>
                      </button>
                    )}
                    <button
                      onClick={() => setViewMode(project.id, 'architecture')}
                      className={`flex items-center gap-1 px-3 py-1 rounded-lg text-[11px] font-mono transition-all ${
                        currentView === 'architecture'
                          ? 'bg-white/10 text-white font-semibold'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <Layers className="w-3 h-3 text-emerald-400" />
                      <span>Architecture</span>
                    </button>
                  </div>

                  {/* View 1: Highlights */}
                  {currentView === 'highlights' && (
                    <div className="space-y-2 pt-2 animate-fade-in">
                      {project.highlights.map((bullet, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* View 2: Code Snippet */}
                  {currentView === 'code' && project.codeSnippet && (
                    <div className="pt-2 animate-fade-in">
                      <div className="rounded-2xl bg-black/70 border border-white/10 overflow-hidden">
                        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/[0.02]">
                          <span className="font-mono text-[11px] text-slate-400">
                            {project.codeSnippet.filename}
                          </span>
                          <button
                            onClick={() => copyCode(project.id, project.codeSnippet!.code)}
                            className="flex items-center gap-1 text-[11px] font-mono text-slate-400 hover:text-white transition-colors"
                          >
                            {copiedId === project.id ? (
                              <>
                                <Check className="w-3 h-3 text-emerald-400" />
                                <span className="text-emerald-400">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3 h-3" />
                                <span>Copy</span>
                              </>
                            )}
                          </button>
                        </div>
                        <pre className="p-4 text-xs font-mono text-sky-200 overflow-x-auto leading-relaxed">
                          <code>{project.codeSnippet.code}</code>
                        </pre>
                      </div>
                    </div>
                  )}

                  {/* View 3: Architecture Notes */}
                  {currentView === 'architecture' && (
                    <div className="space-y-2 pt-2 animate-fade-in">
                      <div className="p-4 rounded-2xl bg-black/50 border border-white/5 space-y-2 font-mono text-xs text-slate-300">
                        {project.architectureDetails.map((detail, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2">
                            <span className="text-sky-400">▶</span>
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Footer: Tech Stack Chips + Action Buttons */}
                <div className="p-6 sm:p-7 pt-0 space-y-4">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/40 transition-all shadow-sm group/btn"
                    >
                      <Github className="w-3.5 h-3.5 text-sky-400" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-500 group-hover/btn:text-white transition-colors" />
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
