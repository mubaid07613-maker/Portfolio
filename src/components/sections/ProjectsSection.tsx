'use client';

import React, { useState } from 'react';
import { portfolioData, ProjectItem } from '@/data/portfolioData';
import {
  Github,
  ExternalLink,
  Code2,
  FolderGit2,
  Layers,
  Sparkles,
  ChevronDown,
  Info,
  Check,
  Edit3
} from 'lucide-react';

export default function ProjectsSection() {
  const { projects } = portfolioData;
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [showEditHelper, setShowEditHelper] = useState(false);

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Systems (C)', value: 'Systems' },
    { label: 'Machine Learning', value: 'Machine Learning' },
    { label: 'Software (C#)', value: 'Software' },
    { label: 'Engineering (MATLAB)', value: 'Engineering' },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId(expandedProjectId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Engineering Artifacts & Codebases</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Programming Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-xl">
              Authentic software projects spanning systems programming in C, ML classification pipelines, and mathematical signal analysis.
            </p>
          </div>

          {/* Quick Helper Button: How to modify projects */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowEditHelper(!showEditHelper)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 transition-colors"
              title="How to add or edit projects later"
            >
              <Edit3 className="w-3.5 h-3.5 text-sky-400" />
              <span>Easy Edit Guide</span>
            </button>
          </div>
        </div>

        {/* Collapsible Edit Guide for Ubaid */}
        {showEditHelper && (
          <div className="mb-8 p-5 rounded-2xl bg-sky-950/20 border border-sky-500/30 text-xs space-y-2 text-slate-300 animate-fade-in">
            <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
              <Info className="w-4 h-4" />
              <span>How to add, modify, or link your projects and GitHub repos:</span>
            </div>
            <p className="text-slate-400">
              Open the file <code className="text-sky-300 bg-black/40 px-1.5 py-0.5 rounded font-mono">src/data/portfolioData.ts</code> in your editor. Locate the <code className="text-emerald-300 font-mono">projects</code> array.
            </p>
            <ul className="list-disc list-inside space-y-1 text-slate-400 pl-2">
              <li>To update your GitHub URL: simply change <code className="text-sky-300 font-mono">&quot;githubUrl&quot;</code> to your repository link.</li>
              <li>To add a new project: duplicate any project block and fill in its title, description, and tags.</li>
              <li>The website will update automatically without changing any HTML or UI code!</li>
            </ul>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 p-1 rounded-xl bg-white/[0.02] border border-white/[0.07] w-fit">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeCategory === cat.value
                  ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-2xl glass-surface border border-white/[0.08] hover:border-sky-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group shadow-lg hover:shadow-2xl"
              >
                {/* Project Header */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/[0.05] text-sky-300 border border-white/10">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                      <span>{project.date}</span>
                      <span>•</span>
                      <span className="text-emerald-400">{project.status}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">
                      {project.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Key Engineering Accomplishments:
                    </div>
                    {project.highlights.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable Architecture Details */}
                  {project.architectureDetails && (
                    <div className="pt-2">
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
                      >
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform ${
                            isExpanded ? 'rotate-180' : ''
                          }`}
                        />
                        <span>
                          {isExpanded ? 'Hide Architecture Notes' : 'View Architecture Specifications'}
                        </span>
                      </button>

                      {isExpanded && (
                        <div className="mt-3 p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5 font-mono text-[11px] text-slate-300 animate-fade-in">
                          {project.architectureDetails.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-start gap-2">
                              <span className="text-sky-400">▶</span>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Footer: Tech Stack Chips + Action Links */}
                <div className="p-6 pt-0 space-y-4">
                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-slate-300 border border-white/[0.06]"
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
                      className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-sky-400/30 transition-all"
                    >
                      <Github className="w-3.5 h-3.5 text-slate-400" />
                      <span>GitHub Repository</span>
                      <ExternalLink className="w-3 h-3 text-slate-500" />
                    </a>

                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-sky-400 hover:text-sky-300 transition-colors"
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

