'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types/blog';
import { Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Distributed Systems':
        return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
      case 'AI & LLMs':
        return 'text-purple-400 border-purple-500/30 bg-purple-500/10';
      case 'Full-Stack':
        return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
      case 'Linux & Systems':
        return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
      case 'Cloud & DevOps':
        return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
      default:
        return 'text-sky-400 border-sky-500/30 bg-sky-500/10';
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Deep Dive':
        return 'bg-purple-950/60 text-purple-300 border-purple-800/60';
      case 'Architecture Design':
        return 'bg-sky-950/60 text-sky-300 border-sky-800/60';
      case 'Practical Guide':
        return 'bg-emerald-950/60 text-emerald-300 border-emerald-800/60';
      case 'Post-Mortem':
        return 'bg-rose-950/60 text-rose-300 border-rose-800/60';
      default:
        return 'bg-slate-800/80 text-slate-300 border-slate-700/60';
    }
  };

  if (featured) {
    return (
      <div className="relative group rounded-2xl glass-panel p-6 sm:p-8 border border-sky-500/25 bg-gradient-to-b from-sky-950/20 via-[#0d121e]/80 to-[#07090e] hover:border-sky-400/50 transition-all duration-300 shadow-xl shadow-sky-950/20">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-sky-500/20 text-sky-300 border border-sky-400/40 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              Featured Deep Dive
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-mono border ${getDifficultyBadge(post.difficulty)}`}>
              {post.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {post.publishedAt}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 text-sky-400">
              <Clock className="w-3.5 h-3.5" />
              {post.readTime}
            </span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`} className="block group-hover:text-sky-300 transition-colors">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors">
            {post.title}
          </h3>
        </Link>

        <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed line-clamp-3">
          {post.subtitle || post.excerpt}
        </p>

        {/* Metrics Highlight Pills */}
        {post.metricsHighlight && post.metricsHighlight.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-5 pt-4 border-t border-slate-800/80">
            {post.metricsHighlight.map((metric, idx) => (
              <div key={idx} className="p-2.5 rounded-lg bg-slate-900/60 border border-slate-800/80 font-mono">
                <div className="text-base sm:text-lg font-bold text-white">{metric.value}</div>
                <div className="text-[11px] text-sky-400 font-medium truncate">{metric.label}</div>
              </div>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap items-center gap-1.5">
            {post.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-900 border border-slate-800 text-slate-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 group/btn"
          >
            <span>Read Architecture Case</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <article className="group flex flex-col justify-between rounded-2xl glass-panel p-5 sm:p-6 border border-slate-800/80 hover:border-sky-500/40 hover:bg-slate-900/70 transition-all duration-300 glass-panel-hover">
      <div>
        {/* Category & Read Time Bar */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono font-medium border ${getCategoryColor(post.category)}`}>
            {post.category}
          </span>
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              {post.readTime}
            </span>
          </div>
        </div>

        {/* Title */}
        <Link href={`/blog/${post.slug}`} className="block group-hover:text-sky-300 transition-colors">
          <h4 className="text-lg sm:text-xl font-bold text-white tracking-tight leading-snug group-hover:text-sky-300 transition-colors line-clamp-2">
            {post.title}
          </h4>
        </Link>

        {/* Excerpt */}
        <p className="mt-2 text-slate-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-800/80 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-slate-400"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer info & CTA */}
        <div className="flex items-center justify-between text-xs pt-1">
          <span className="font-mono text-slate-500 text-[11px]">{post.publishedAt}</span>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-xs text-sky-400 hover:text-sky-300 group-hover:translate-x-0.5 transition-all"
          >
            <span>Read post</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
