'use client';

import React from 'react';
import Link from 'next/link';
import { BlogPost } from '../types/blog';
import { BlogCard } from './BlogCard';
import { BookOpen, ArrowRight, Terminal } from 'lucide-react';

interface BlogSectionProps {
  posts: BlogPost[];
}

export function BlogSection({ posts }: BlogSectionProps) {
  // Show up to 3 posts on the homepage: 1 featured + 2 grid
  const featured = posts.find((p) => p.featured) || posts[0];
  const otherPosts = posts.filter((p) => p.slug !== featured?.slug).slice(0, 2);

  return (
    <section id="blog" className="py-14 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800/80 pb-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs font-mono">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Publications &amp; Writing</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Dispatches &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-sky-300 to-emerald-400">Architecture Notes</span>
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
            In-depth breakdowns of real production problems: sub-2s live video streaming, ACID multi-tenant vector RAG in PostgreSQL, fintech idempotency locks, and desktop compositor memory debugging.
          </p>
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 border border-slate-800 text-sky-400 hover:text-white text-xs font-mono font-semibold transition-all group shrink-0"
        >
          <span>View All Writings ({posts.length})</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Featured Showcase */}
      {featured && (
        <div>
          <BlogCard post={featured} featured={true} />
        </div>
      )}

      {/* Secondary Highlights */}
      {otherPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="p-6 rounded-2xl glass-panel border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white">Looking for custom technical advisory or architecture review?</h4>
            <p className="text-xs text-slate-400">Read the technical writings or get in touch for lead/staff engineering advisory.</p>
          </div>
        </div>

        <Link
          href="/blog"
          className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs font-mono shadow-md shadow-amber-500/20 transition-all shrink-0"
        >
          Browse All Articles
        </Link>
      </div>
    </section>
  );
}
