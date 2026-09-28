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
    <section id="radar" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10">
        <div className="space-y-3 min-w-0">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-semibold tracking-wider uppercase flex-wrap">
            <Compass className="w-4 h-4 shrink-0" />
            <span className="break-words">Continuous Learning &amp; Engineering Edge</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight break-words">
            Engineering Radar &amp; TIL Notes
          </h2>
          <p className="text-slate-400 text-xs sm:text-base max-w-2xl leading-relaxed break-words">
            A real-time telemetry dashboard of active research topics, production mastery, and technical breakthroughs shipped weekly.
          </p>
        </div>

        {/* View Toggle Tabs */}
        <div className="grid grid-cols-2 w-full sm:w-auto sm:flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 font-mono text-xs">
          <button
            onClick={() => setActiveTab('radar')}
            className={`px-2.5 sm:px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 active:scale-[0.98] ${
              activeTab === 'radar'
                ? 'bg-emerald-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap text-[11px] sm:text-xs">Tech Radar ({radarItems.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('til')}
            className={`px-2.5 sm:px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-1.5 sm:gap-2 active:scale-[0.98] ${
              activeTab === 'til'
                ? 'bg-sky-500 text-slate-950 font-bold shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 shrink-0" />
            <span className="whitespace-nowrap text-[11px] sm:text-xs">TIL Notes ({tilNotes.length})</span>
          </button>
        </div>
      </div>

      {/* Tab 1: Tech Radar */}
      {activeTab === 'radar' && (
        <div className="space-y-6">
          
          {/* Status Filter Buttons with edge scrolling */}
          <div className="flex items-center gap-2 text-xs font-mono overflow-x-auto pb-2 pt-1 scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0">
            <button
              onClick={() => setStatusFilter('all')}
              className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all shrink-0 active:scale-[0.98] ${
                statusFilter === 'all'
                  ? 'bg-slate-800 text-white border-slate-700 font-semibold'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/80 hover:text-slate-300'
              }`}
            >
              All Topics
            </button>
            <button
              onClick={() => setStatusFilter('mastered')}
              className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 active:scale-[0.98] ${
                statusFilter === 'mastered'
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-semibold'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/80 hover:text-slate-300'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>Mastered &amp; Production-Tested</span>
            </button>
            <button
              onClick={() => setStatusFilter('experimenting')}
              className={`px-3 py-1.5 rounded-lg border whitespace-nowrap transition-all flex items-center gap-1.5 shrink-0 active:scale-[0.98] ${
                statusFilter === 'experimenting'
                  ? 'bg-sky-500/20 text-sky-300 border-sky-500/40 font-semibold'
                  : 'bg-slate-900/40 text-slate-500 border-slate-800/80 hover:text-slate-300'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
              <span>Active Experimentation</span>
            </button>
          </div>

          {/* Radar Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {filteredRadar.map((item) => (
              <div 
                key={item.id} 
                className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col justify-between space-y-4 min-w-0 overflow-hidden"
              >
                <div className="space-y-3 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] sm:text-[11px] font-mono text-slate-500 uppercase tracking-tight break-words">
                      {item.category}
                    </span>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase shrink-0 ${
                      item.status === 'mastered'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-sky-500/10 text-sky-400 border border-sky-500/20'
                    }`}>
                      {item.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight break-words">
                    {item.name}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-800/80 min-w-0">
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
                  <div className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/60 text-[11px] text-slate-300 break-words leading-relaxed">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {tilNotes.map((note) => (
              <div 
                key={note.id}
                className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-6 border border-slate-800 flex flex-col justify-between space-y-4 min-w-0 overflow-hidden"
              >
                <div className="space-y-3 min-w-0">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 gap-2 flex-wrap">
                    <span>{note.date}</span>
                    <div className="flex gap-1 flex-wrap">
                      {note.tags.map((t, idx) => (
                        <span key={idx} className="px-1.5 py-0.5 rounded bg-slate-800 text-[10px] text-slate-300">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white tracking-tight break-words">
                    {note.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed break-words">
                    {note.summary}
                  </p>

                  {note.codeSnippet && (
                    <div className="p-3 rounded-xl bg-[#06080e] border border-slate-800 font-mono text-[10px] sm:text-[11px] text-sky-300 overflow-x-auto max-w-full">
                      <pre className="leading-relaxed whitespace-pre">{note.codeSnippet}</pre>
                    </div>
                  )}
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-mono leading-relaxed break-words">
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
