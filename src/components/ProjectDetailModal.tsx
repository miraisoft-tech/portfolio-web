'use client';

import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { 
  X, ExternalLink, ShieldCheck, Lock, 
  Layers, AlertTriangle, CheckCircle2, BookOpen, 
  Cpu, GitBranch 
} from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0c101a] border border-slate-700/60 rounded-2xl shadow-2xl overflow-y-auto z-10 flex flex-col my-auto text-slate-200">
        
        {/* Header */}
        <div className="sticky top-0 z-20 glass-panel border-b border-slate-800/80 px-6 py-4 flex items-start justify-between bg-[#0c101a]/95 backdrop-blur-xl">
          <div className="space-y-1 pr-6">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className={`text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full font-semibold ${
                project.visibility === 'private' 
                  ? 'bg-amber-500/15 text-amber-400 border border-amber-500/30' 
                  : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
              }`}>
                {project.visibility === 'private' ? '🔒 Private Client Architecture' : '🟢 Public / Open Source'}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.category} • {project.date}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Tagline & Links */}
          <div className="space-y-4">
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              {project.tagline}
            </p>

            <div className="flex items-center gap-3 flex-wrap">
              {project.productionUrl && (
                <a
                  href={project.productionUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm flex items-center gap-2 shadow-lg shadow-sky-500/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  Visit Production App
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm flex items-center gap-2 border border-slate-700 transition-all"
                >
                  <GitBranch className="w-4 h-4 text-slate-400" />
                  View GitHub Source
                </a>
              )}
            </div>

            {project.ndaNotice && (
              <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs flex items-start gap-2.5">
                <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{project.ndaNotice}</span>
              </div>
            )}
          </div>

          {/* Key Metrics Ribbon */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
                <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">{m.label}</div>
                <div className="text-xl font-bold text-white mt-1">{m.value}</div>
                {m.trend && <div className="text-[11px] text-emerald-400 font-mono mt-0.5">{m.trend}</div>}
              </div>
            ))}
          </div>

          {/* Tech Stack Chips */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Engineered With</h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  className={`text-xs px-3 py-1 rounded-lg font-mono flex items-center gap-1.5 ${
                    tech.highlight 
                      ? 'bg-sky-500/15 text-sky-300 border border-sky-500/30 font-medium'
                      : 'bg-slate-800/80 text-slate-300 border border-slate-700/60'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 opacity-70" />
                  {tech.name}
                </span>
              ))}
            </div>
          </div>

          {/* System Architecture Section */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-white font-semibold text-lg">
              <Layers className="w-5 h-5 text-sky-400" />
              <h3>System Architecture & Data Flow</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.architecture.summary}
            </p>

            {/* Architecture Diagram Representation */}
            {project.architecture.diagramMermaid && (
              <div className="p-5 rounded-xl bg-[#070a12] border border-slate-800 font-mono text-xs overflow-x-auto text-sky-300/90 shadow-inner">
                <div className="text-[11px] text-slate-500 mb-2 uppercase font-semibold">Architecture Topology (Mermaid DSL)</div>
                <pre className="whitespace-pre">{project.architecture.diagramMermaid}</pre>
              </div>
            )}
          </div>

          {/* Architecture Decision Records (ADRs) */}
          {project.architecture.adrs.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <h3>Architecture Decision Records (ADRs)</h3>
              </div>
              <div className="space-y-3">
                {project.architecture.adrs.map((adr, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                    <div className="font-semibold text-sm text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {adr.title}
                    </div>
                    <div className="text-xs text-slate-300 space-y-1.5">
                      <p><strong className="text-slate-400 font-mono">Context:</strong> {adr.context}</p>
                      <p><strong className="text-emerald-400 font-mono">Decision:</strong> {adr.decision}</p>
                      <p><strong className="text-amber-400 font-mono">Trade-offs:</strong> {adr.tradeOffs}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hard Engineering Challenges Solved */}
          {project.architecture.challenges.length > 0 && (
            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-2 text-white font-semibold text-lg">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <h3>Hard Engineering Challenges Solved</h3>
              </div>
              <div className="space-y-3">
                {project.architecture.challenges.map((c, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2">
                    <p className="text-xs text-rose-300">
                      <strong className="font-mono text-rose-400">Bottleneck:</strong> {c.problem}
                    </p>
                    <p className="text-xs text-sky-300">
                      <strong className="font-mono text-sky-400">Solution:</strong> {c.solution}
                    </p>
                    <p className="text-xs text-emerald-300">
                      <strong className="font-mono text-emerald-400">Outcome:</strong> {c.outcome}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Continuous Learning & Evolution */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h4 className="text-sm font-semibold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-sky-400" />
              Key Competencies Leveled Up
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.learnedSkills.map((skill, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 flex items-start gap-2">
                  <span className="text-sky-400 font-bold">•</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Embedded Project README */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <div className="flex items-center gap-2 text-white font-semibold text-sm font-mono">
              <BookOpen className="w-4 h-4 text-purple-400" />
              <span>Project README Documentation</span>
            </div>
            <div className="p-4 rounded-xl bg-[#06080d] border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-60 overflow-y-auto">
              {project.readmeContent}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="sticky bottom-0 z-20 glass-panel border-t border-slate-800/80 px-6 py-4 flex items-center justify-between bg-[#0c101a]/95">
          <span className="text-xs font-mono text-slate-500">
            Press <kbd className="px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">ESC</kbd> to close
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold transition-all"
          >
            Close Breakdown
          </button>
        </div>

      </div>
    </div>
  );
}
