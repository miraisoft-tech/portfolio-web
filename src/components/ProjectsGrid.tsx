'use client';

import React, { useState, useMemo } from 'react';
import { Project, ProjectCategory, VisibilityType } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';
import { 
  Search, ExternalLink, GitBranch, ArrowRight, 
  Layers, Lock, CheckCircle, Cpu, Filter 
} from 'lucide-react';

interface ProjectsGridProps {
  initialProjects: Project[];
}

export function ProjectsGrid({ initialProjects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedVisibility, setSelectedVisibility] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'AI & Machine Learning', 'Distributed Systems', 'Full-Stack', 'Cloud & DevOps'];

  const filteredProjects = useMemo(() => {
    return initialProjects.filter(project => {
      // Category filter
      if (selectedCategory !== 'All' && project.category !== selectedCategory) {
        return false;
      }
      // Visibility filter
      if (selectedVisibility !== 'all' && project.visibility !== selectedVisibility) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = project.title.toLowerCase().includes(q);
        const matchesTagline = project.tagline.toLowerCase().includes(q);
        const matchesOverview = project.overview.toLowerCase().includes(q);
        const matchesTech = project.techStack.some(t => t.name.toLowerCase().includes(q));
        if (!matchesTitle && !matchesTagline && !matchesOverview && !matchesTech) {
          return false;
        }
      }
      return true;
    });
  }, [initialProjects, selectedCategory, selectedVisibility, searchQuery]);

  return (
    <section id="projects" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="space-y-3 mb-10">
        <div className="flex items-center gap-2 text-sky-400 font-mono text-xs font-semibold tracking-wider uppercase">
          <Layers className="w-4 h-4" />
          <span>Production Systems & Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Engineered for Resilience & Scale
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
          High-performance production platforms, AI agent runtimes, and distributed services. Includes sanitized architectural deep-dives for confidential client work.
        </p>
      </div>

      {/* Control Bar: Search & Filters */}
      <div className="space-y-4 mb-8">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by system, tech stack (e.g. Go, AWS IVS, PgVector)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-all font-mono"
            />
          </div>

          {/* Visibility Toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/80 border border-slate-800 self-start md:self-auto text-xs font-mono">
            <button
              onClick={() => setSelectedVisibility('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedVisibility === 'all'
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects ({initialProjects.length})
            </button>
            <button
              onClick={() => setSelectedVisibility('public')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                selectedVisibility === 'public'
                  ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Public Repos</span>
            </button>
            <button
              onClick={() => setSelectedVisibility('private')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1 ${
                selectedVisibility === 'private'
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Lock className="w-3 h-3" />
              <span>Private / NDA</span>
            </button>
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 hidden sm:block" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-slate-800 text-sky-400 border border-sky-500/40 font-semibold'
                  : 'bg-slate-900/40 text-slate-400 hover:text-slate-200 border border-slate-800/60'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid List */}
      {filteredProjects.length === 0 ? (
        <div className="p-12 rounded-2xl border border-dashed border-slate-800 text-center space-y-3">
          <p className="text-slate-400 text-sm">No systems match your filter criteria.</p>
          <button
            onClick={() => { setSelectedCategory('All'); setSelectedVisibility('all'); setSearchQuery(''); }}
            className="text-xs text-sky-400 hover:underline font-mono"
          >
            Reset all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.slug}
              className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-slate-800/80 relative group"
            >
              <div className="space-y-4">
                
                {/* Card Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md font-semibold ${
                        project.visibility === 'private'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      }`}>
                        {project.visibility === 'private' ? '🔒 Private Architecture' : '🟢 Public Project'}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">{project.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {project.productionUrl && (
                    <a
                      href={project.productionUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 rounded-lg bg-slate-800/50 hover:bg-sky-500/20 text-slate-400 hover:text-sky-300 transition-all border border-slate-800"
                      title="Open Live Production App"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                {/* Recruiter 1-Sentence Overview */}
                <p className="text-slate-300 text-sm leading-relaxed font-light">
                  {project.overview}
                </p>

                {/* Recruiter Impact Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                  {project.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 rounded-xl bg-slate-900/60 border border-slate-800/60">
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-tight">{m.label}</div>
                      <div className="text-sm font-bold text-white mt-0.5">{m.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`text-[11px] px-2.5 py-0.5 rounded-md font-mono ${
                        tech.highlight
                          ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium'
                          : 'bg-slate-800/60 text-slate-400 border border-slate-800'
                      }`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <GitBranch className="w-3.5 h-3.5" />
                      <span>Source Code</span>
                    </a>
                  ) : (
                    <span className="text-[11px] font-mono text-amber-400/80 flex items-center gap-1">
                      <Lock className="w-3 h-3" />
                      <span>Client NDA Protected</span>
                    </span>
                  )}
                </div>

                {/* Primary Deep Dive Trigger */}
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-sky-500 hover:text-slate-950 text-white font-medium text-xs font-mono flex items-center gap-1.5 transition-all shadow-sm group/btn"
                >
                  <span>Deep Dive & Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Active Project Modal */}
      <ProjectDetailModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
