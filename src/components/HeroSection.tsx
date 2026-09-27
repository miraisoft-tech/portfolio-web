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
    <section className="relative pt-12 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Recruiter Quick Status Banner */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
          <span>Tech Lead & Senior Software Engineer</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
          <Shield className="w-3.5 h-3.5 text-emerald-400" />
          <span>Full-Stack • AI Systems • Distributed Media</span>
        </div>
      </div>

      {/* Main Headline */}
      <div className="space-y-6 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Architecting resilient <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400">distributed backends</span>, high-scale media, and autonomous <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-sky-400">AI agents</span>.
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-light leading-relaxed">
          Hi, I&apos;m <strong className="text-white font-semibold">{bio.name}</strong>. Senior Software Engineer &amp; Tech Lead with 8+ years architecting scalable full-stack, AI, and cloud systems—spanning real-time live streaming, embedded IoT protocols, and LLM-powered SaaS serving thousands globally.
        </p>

        {/* Action Buttons */}
        <div className="flex items-center gap-3 flex-wrap pt-2">
          
          <a
            href="#projects"
            className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-sky-500/25 transition-all group"
          >
            <span>Explore Systems</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>

          <button
            onClick={() => setShowPitchModal(true)}
            className="px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-sm flex items-center gap-2 border border-slate-800 transition-all font-mono"
          >
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Recruiter 30s Pitch</span>
          </button>

          {bio.socials.calendarUrl && (
            <a
              href={bio.socials.calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm flex items-center gap-2 border border-slate-800/80 transition-all font-mono"
            >
              <Calendar className="w-4 h-4 text-sky-400" />
              <span>Book Technical Chat</span>
            </a>
          )}

          <button
            onClick={handleCopyEmail}
            className="px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 hover:text-white text-sm flex items-center gap-2 border border-slate-800/80 transition-all font-mono"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            <span>{copiedEmail ? 'Copied to Clipboard!' : 'Copy Email'}</span>
          </button>

        </div>
      </div>

      {/* Key Metric Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-16 pt-8 border-t border-slate-800/80">
        {bio.highlights.map((item, idx) => (
          <div key={idx} className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/70 space-y-1">
            <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-mono">
              {item.value}
            </div>
            <div className="text-xs font-semibold text-sky-400 font-mono">
              {item.label}
            </div>
            <p className="text-[11px] text-slate-400 leading-normal">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      {/* 30-Second Pitch Modal */}
      {showPitchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPitchModal(false)} />
          <div className="relative w-full max-w-xl bg-[#0d121e] border border-slate-700 rounded-2xl p-6 sm:p-8 space-y-5 z-10 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold font-mono text-sm">
                <Zap className="w-4 h-4 text-amber-400" />
                <span>Executive 30-Second Summary for Recruiters</span>
              </div>
              <button onClick={() => setShowPitchModal(false)} className="text-slate-400 hover:text-white text-xs font-mono">
                ✕ Close
              </button>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Who I Am:</strong> Senior Software Engineer & Tech Lead with 8+ years across full-stack, distributed media, and autonomous AI systems.
              </p>
              <p>
                <strong className="text-white">High-Impact Wins:</strong>
              </p>
              <ul className="space-y-1.5 pl-4 list-disc text-slate-300">
                <li>Scaled live-streaming infrastructure to <strong>10,000+ concurrent viewers</strong> with sub-2s latency using Go and AWS IVS.</li>
                <li>Shipped Linux desktop optimizations and GNOME extensions to <strong>50,000+ developer workstations at HP Inc</strong>.</li>
                <li>Built production RAG pipelines (PgVector + OpenAI + LangChain) powering <strong>SellersPro.app</strong> and conversational AI apps.</li>
                <li>Cut enterprise cloud video transcoding costs by <strong>28%</strong> through serverless event architecture.</li>
              </ul>
              <p>
                <strong className="text-white">Looking For:</strong> Senior / Staff Software Engineer, Tech Lead, or Distributed Systems roles in forward-thinking engineering organizations.
              </p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs font-mono">
              <span className="text-emerald-400">Available immediately for interviews</span>
              <a
                href={`mailto:${bio.socials.email}`}
                className="px-3.5 py-1.5 rounded-lg bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 transition-colors"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
