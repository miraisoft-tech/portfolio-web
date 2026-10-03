'use client';

import React, { useState, useMemo } from 'react';
import { BlogPost } from '../types/blog';
import { BlogCard } from './BlogCard';
import { Search, Sparkles, Terminal, Filter, BookOpen } from 'lucide-react';

interface BlogIndexClientProps {
  initialPosts: BlogPost[];
}

export function BlogIndexClient({ initialPosts }: BlogIndexClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique categories and tags
  const categories = useMemo(() => {
    const cats = new Set<string>();
    initialPosts.forEach((p) => cats.add(p.category));
    return ['All', ...Array.from(cats)];
  }, [initialPosts]);

  const popularTags = useMemo(() => {
    const tagMap = new Map<string, number>();
    initialPosts.forEach((p) => {
      p.tags.forEach((tag) => {
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1);
      });
    });
    return Array.from(tagMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 8)
      .map(([tag]) => tag);
  }, [initialPosts]);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return initialPosts.filter((post) => {
      // Category match
      if (selectedCategory !== 'All' && post.category !== selectedCategory) {
        return false;
      }

      // Tag filter
      if (selectedTag && !post.tags.includes(selectedTag)) {
        return false;
      }

      // Search query match across title, subtitle, tags, excerpt, and section headings
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = post.title.toLowerCase().includes(q);
        const inSubtitle = post.subtitle.toLowerCase().includes(q);
        const inExcerpt = post.excerpt.toLowerCase().includes(q);
        const inTags = post.tags.some((t) => t.toLowerCase().includes(q));
        const inHeadings = post.sections.some((s) => s.heading.toLowerCase().includes(q));
        return inTitle || inSubtitle || inExcerpt || inTags || inHeadings;
      }

      return true;
    });
  }, [initialPosts, selectedCategory, selectedTag, searchQuery]);

  // Identify featured post for top spotlight (only when no active search/tag filter)
  const featuredPost = useMemo(() => {
    if (searchQuery.trim() || selectedCategory !== 'All' || selectedTag) {
      return null;
    }
    return initialPosts.find((p) => p.featured) || initialPosts[0];
  }, [initialPosts, searchQuery, selectedCategory, selectedTag]);

  const remainingPosts = useMemo(() => {
    if (featuredPost) {
      return filteredPosts.filter((p) => p.slug !== featuredPost.slug);
    }
    return filteredPosts;
  }, [filteredPosts, featuredPost]);

  return (
    <div className="min-h-screen py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Blog Page Hero */}
      <div className="space-y-4 max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-400 text-xs font-mono">
          <Terminal className="w-3.5 h-3.5" />
          <span>Technical Writings &amp; Case Studies</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
          Engineering Dispatches &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-300 to-indigo-400">Architecture Notes</span>.
        </h1>

        <p className="text-slate-300 text-sm sm:text-base font-light leading-relaxed">
          Production post-mortems, low-latency media systems, multi-tenant AI pipelines, and kernel performance optimization—written from real production code shipped to thousands of users.
        </p>
      </div>

      {/* Search Bar & Category Filter Bar */}
      <div className="space-y-4 p-5 sm:p-6 rounded-2xl glass-panel border border-slate-800">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search architecture topics, tech (e.g. Go, AWS IVS, PgVector, Redis, GJS)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 font-mono transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-400 hover:text-white"
              >
                Clear
              </button>
            )}
          </div>

          {/* Quick Counter */}
          <div className="text-xs font-mono text-slate-400 self-center px-2">
            Showing <strong className="text-white">{filteredPosts.length}</strong> article{filteredPosts.length === 1 ? '' : 's'}
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
          <span className="text-xs font-mono text-slate-500 mr-1 flex items-center gap-1">
            <Filter className="w-3 h-3" />
            Category:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setSelectedCategory(cat);
                setSelectedTag(null);
              }}
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-slate-200 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Popular Tags Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-[11px] font-mono text-slate-500 mr-1">Filter by Tech:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
              className={`px-2 py-0.5 rounded text-[11px] font-mono transition-all ${
                selectedTag === tag
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 border font-semibold'
                  : 'bg-slate-900/60 hover:bg-slate-850 border border-slate-800 text-slate-400 hover:text-slate-300'
              }`}
            >
              #{tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="text-[11px] font-mono text-sky-400 hover:underline ml-2"
            >
              Reset tag
            </button>
          )}
        </div>
      </div>

      {/* Featured Spotlight Article (if present) */}
      {featuredPost && (
        <section className="space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Spotlight Case Study</span>
          </div>
          <BlogCard post={featuredPost} featured={true} />
        </section>
      )}

      {/* All / Filtered Articles Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h2 className="text-lg font-bold text-white tracking-tight font-mono flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>
              {selectedCategory === 'All' ? 'Latest Publications' : `${selectedCategory} Deep Dives`}
            </span>
          </h2>
          <span className="text-xs font-mono text-slate-500">
            {remainingPosts.length} article{remainingPosts.length === 1 ? '' : 's'}
          </span>
        </div>

        {remainingPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {remainingPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-2xl glass-panel border border-slate-800 space-y-3">
            <Terminal className="w-8 h-8 text-slate-600 mx-auto" />
            <h3 className="text-base font-semibold text-white">No articles matched your filter</h3>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Try adjusting your search query or selecting a different category or tech tag.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedTag(null);
              }}
              className="mt-2 px-4 py-2 rounded-lg bg-sky-500/10 border border-sky-500/30 text-sky-400 text-xs font-mono hover:bg-sky-500/20 transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </section>

      {/* Technical Author Newsletter / Collaboration Pitch */}
      <section className="p-8 sm:p-10 rounded-2xl glass-panel border border-sky-500/30 bg-gradient-to-r from-sky-950/20 via-[#0d121d] to-[#07090e] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span>Engineering Discussions</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Have a question on these system architectures?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-light">
            I enjoy discussing high-concurrency video pipelines, vector search optimization, and distributed systems. Drop me an email or let&apos;s connect on LinkedIn.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
          <a
            href="mailto:adeselukatobasamuel@yahoo.com"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono shadow-lg shadow-sky-500/25 transition-all"
          >
            Email Adeseluka
          </a>
          <a
            href="https://linkedin.com/in/toba-adeseluka"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}
