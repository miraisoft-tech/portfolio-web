'use client';

import React, { useState } from 'react';
import { LearningRadarItem, TILNote } from '../types/portfolio';
import { 
  BookOpen, Terminal, Sparkles, Code2, 
  TrendingUp, Compass, CheckCircle2, ChevronRight 
} from 'lucide-react';

interface TechRadarSectionProps {
  radarItems: LearningRadarItem[];
  tilNotes: TILNote[];
}

export function TechRadarSection({ radarItems, tilNotes }: TechRadarSectionProps) {
  const [activeTab, setActiveTab] = useState<'radar' | 'til'>('radar');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredRadar = radarItems.filter(item => {
    if (statusFilter === 'all') return true;
    return item.status === statusFilter;
  });

  return (
    <section id="radar" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase">
            <Compass className="w-4 h-4" />
            <span>Continuous Learning & Engineering Edge</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Engineering Radar & TIL Notes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            A real-time telemetry dashboard of active research topics, production mastery, and technical breakthroughs shipped weekly.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs self-start md:self-auto">
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'radar'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Tech Radar ({radarItems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('til')}
            className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
              activeTab === 'til'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Today I Learned ({tilNotes.length})</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Tech Radar */}
      {activeTab === 'radar' && (
        <div className="space-y-6">
          
          {/* Status Filter Buttons */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg border transition-all ${
                statusFilter === 'all'
                  ? 'bg-slate-800 text-white border-slate-700 font-semibold'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/80 hover:text-slate-300'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setStatusFilter('mastered')}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                statusFilter === 'mastered'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/80 hover:text-slate-300'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Mastered & Production-Tested</span>
            </button>
            <button
              onClick={() => setStatusFilter('experimenting')}
              className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                statusFilter === 'experimenting'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 font-semibold'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/80 hover:text-slate-300'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span>Active Experimentation</span>
            </button>
          </div>

          {/* Radar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredRadar.map((item) => (
              <div 
                key={item.id} 
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-tight">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase ${
                      item.status === 'mastered'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80">
                  {/* Progress / Mastery Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-500">
                      <span>Proficiency</span>
                      <span className="text-slate-300 font-bold">{item.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full transition-all duration-500 ${
                          item.status === 'mastered' ? 'bg-emerald-400' : 'bg-sky-400'
                        }`}
                        style={{ width: `${item.level}%` }}
                      />
                    </div>
                  </div>

                  {/* Recent Milestone */}
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-[11px] text-slate-300">
                    <span className="text-emerald-400 font-mono font-semibold block mb-0.5">Latest Milestone:</span>
                    {item.recentMilestone}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      )}

      {/* Tab 2: TIL Notes */}
      {activeTab === 'til' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tilNotes.map((note) => (
              <div 
                key={note.id}
                className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500">
                    <span>{note.date}</span>
                    <div className="flex gap-1">
                      {note.tags.map((t, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight">
                    {note.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {note.summary}
                  </p>

                  {note.codeSnippet && (
                    <div className="p-3 rounded-xl bg-[#06080e] border border-slate-800 font-mono text-[11px] text-sky-300 overflow-x-auto">
                      <pre>{note.codeSnippet}</pre>
                    </div>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono">
                  <strong className="text-emerald-400">Production Impact:</strong> {note.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </section>
  );
}
