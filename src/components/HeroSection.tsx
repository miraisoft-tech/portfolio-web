'use client';

import React, { useState } from 'react';
import { EngineerBio } from '../types/portfolio';
import { 
  Terminal, Sparkles, ArrowRight, Calendar, 
  Download, Bot, CheckCircle, Zap, Shield, Cpu 
} from 'lucide-react';

interface HeroSectionProps {
  bio: EngineerBio;
  onOpenAIModal?: () => void;
}

export function HeroSection({ bio, onOpenAIModal }: HeroSectionProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [showPitchModal, setShowPitchModal] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(bio.socials.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section className="relative pt-8 sm:pt-12 pb-14 sm:pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      
      {/* Recruiter Quick Status Banner */}
      <div className="flex items-center gap-2 sm:gap-3 mb-6 flex-wrap">
        <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-[11px] sm:text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse shrink-0" />
          <span>Tech Lead &amp; Senior Engineer</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-[11px] sm:text-xs font-mono">
          <Shield className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="truncate">Full-Stack • AI • Distributed Systems</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="space-y-4 sm:space-y-6 max-w-4xl">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] sm:leading-[1.1]">
          Architecting resilient <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400">distributed backends</span>, high-scale media, and autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">AI agents</span>.
        </h1>

        <p className="text-slate-300 text-sm sm:text-lg max-w-2xl font-light leading-relaxed">
          Hi, I&apos;m <strong className="text-white font-semibold">{bio.name}</strong>. Senior Software Engineer &amp; Tech Lead with 8+ years architecting scalable full-stack, AI, and cloud systems—spanning real-time live streaming, embedded IoT protocols, and LLM-powered SaaS serving thousands globally.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-2.5 sm:gap-3 pt-2">
          
          <a
            href="#projects"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all group active:scale-[0.98]"
          >
            <span>Explore Systems</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={() => setShowPitchModal(true)}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm flex items-center justify-center gap-2 border border-slate-800 transition-all font-mono active:scale-[0.98]"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Recruiter 30s Pitch</span>
          </button>

          <div className="grid grid-cols-1 sm:flex sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
            {bio.socials.calendarUrl && (
              <a
                href={bio.socials.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm flex items-center justify-center gap-2 border border-slate-800/80 transition-all font-mono active:scale-[0.98]"
              >
                <Calendar className="w-4 h-4 text-sky-400" />
                <span>Book Technical Chat</span>
              </a>
            )}

            <button
              onClick={handleCopyEmail}
              className="w-full sm:w-auto px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm flex items-center justify-center gap-2 border border-slate-800/80 transition-all font-mono active:scale-[0.98]"
            >
              <Terminal className="w-4 h-4 text-slate-400" />
              <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
            </button>
          </div>

        </div>
      </div>

      {/* Key Metric Ribbon */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-slate-800/80">
        {bio.highlights.map((item, idx) => (
          <div key={idx} className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-900/40 border border-slate-800/70 space-y-1">
            <div className="text-xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {item.value}
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-sky-400 font-mono">
              {item.label}
            </div>
            <p className="text-[10px] sm:text-[11px] text-slate-400 leading-normal">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* 30-Second Pitch Modal */}
      {showPitchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPitchModal(false)} />
          <div className="relative w-full max-w-xl max-h-[88vh] overflow-y-auto bg-[#0d121e] border border-slate-700 rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5 z-10 shadow-2xl my-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold font-mono text-xs sm:text-sm">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Executive 30-Second Summary</span>
              </div>
              <button 
                onClick={() => setShowPitchModal(false)} 
                className="p-1.5 rounded-lg bg-slate-800/60 text-slate-400 hover:text-white text-xs font-mono transition-colors"
                aria-label="Close Pitch Modal"
              >
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Who I Am:</strong> Senior Software Engineer &amp; Tech Lead with 8+ years across full-stack, distributed media, and autonomous AI systems.
              </p>
              <p>
                <strong className="text-white">High-Impact Wins:</strong>
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-300 text-xs sm:text-sm">
                <li>Scaled live-streaming infrastructure to <strong>10,000+ concurrent viewers</strong> with sub-2s latency using Go and AWS IVS.</li>
                <li>Developed Linux desktop optimizations and GNOME extensions <strong>planned to reach 50,000+ developer workstations at HP Inc</strong> (device line discontinued by HP).</li>
                <li>Built production RAG pipelines (PgVector + OpenAI + LangChain) powering <strong>SellersPro.app</strong> and conversational AI apps.</li>
                <li>Cut enterprise cloud video transcoding costs by <strong>28%</strong> through serverless event architecture.</li>
              </ul>
              <p>
                <strong className="text-white">Looking For:</strong> Senior / Staff Software Engineer, Tech Lead, or Distributed Systems roles in forward-thinking engineering organizations.
              </p>
            </div>

            <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-xs font-mono">
              <span className="text-emerald-400 text-center sm:text-left">Available immediately for interviews</span>
              <a
                href={`mailto:${bio.socials.email}`}
                className="px-4 py-2.5 rounded-lg bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors text-center"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
