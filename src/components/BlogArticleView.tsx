'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BlogPost } from '../types/blog';
import { 
  ArrowLeft, Clock, Calendar, Share2, Check, Copy, 
  ThumbsUp, Bookmark, Sparkles, AlertTriangle, Lightbulb, 
  Cpu, Terminal, ChevronRight, Hash 
} from 'lucide-react';
import { BlogCard } from './BlogCard';

interface BlogArticleViewProps {
  post: BlogPost;
  relatedPosts?: BlogPost[];
}

export function BlogArticleView({ post, relatedPosts = [] }: BlogArticleViewProps) {
  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedSnippetId, setCopiedSnippetId] = useState<string | null>(null);
  const [likes, setLikes] = useState<number>(42);
  const [hasLiked, setHasLiked] = useState<boolean>(false);
  const [isBookmarked, setIsBookmarked] = useState<boolean>(false);
  const [activeSectionId, setActiveSectionId] = useState<string>('');

  useEffect(() => {
    // Check local storage for likes & bookmarks
    const frameId = requestAnimationFrame(() => {
      try {
        const storedLikes = localStorage.getItem(`blog_likes_${post.slug}`);
        if (storedLikes) {
          setLikes(parseInt(storedLikes, 10));
        }
        const userLiked = localStorage.getItem(`blog_has_liked_${post.slug}`);
        if (userLiked === 'true') {
          setHasLiked(true);
        }
        const bookmarked = localStorage.getItem(`blog_bookmark_${post.slug}`);
        if (bookmarked === 'true') {
          setIsBookmarked(true);
        }
      } catch {
        // Storage access fail-safe
      }
    });


    // Scroll spy for Table of Contents
    const handleScroll = () => {
      const sections = post.sections.map((s) => document.getElementById(s.id));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSectionId(post.sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [post.slug, post.sections]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const handleCopyCode = (code: string, snippetId: string) => {
    navigator.clipboard.writeText(code);
    setCopiedSnippetId(snippetId);
    setTimeout(() => setCopiedSnippetId(null), 2000);
  };

  const handleLike = () => {
    if (!hasLiked) {
      const newCount = likes + 1;
      setLikes(newCount);
      setHasLiked(true);
      try {
        localStorage.setItem(`blog_likes_${post.slug}`, newCount.toString());
        localStorage.setItem(`blog_has_liked_${post.slug}`, 'true');
      } catch {
        // Ignored
      }
    }
  };

  const handleBookmark = () => {
    const newState = !isBookmarked;
    setIsBookmarked(newState);
    try {
      localStorage.setItem(`blog_bookmark_${post.slug}`, newState.toString());
    } catch {
      // Ignored
    }
  };

  const shareOnTwitter = () => {
    const text = encodeURIComponent(`"${post.title}" by @smartraysam`);
    const url = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  return (
    <article className="min-h-screen py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Action Row */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-8 sm:mb-12">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono text-slate-400 hover:text-sky-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to All Technical Writings</span>
        </Link>

        <div className="flex items-center gap-2">
          <button
            onClick={handleBookmark}
            className={`p-2 rounded-lg border text-xs font-mono flex items-center gap-1.5 transition-all ${
              isBookmarked
                ? 'bg-sky-500/20 border-sky-400/40 text-sky-300'
                : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white'
            }`}
            title={isBookmarked ? 'Bookmarked' : 'Bookmark this article'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-mono flex items-center gap-1.5 transition-all"
            title="Copy link to clipboard"
          >
            {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span className="hidden sm:inline">{copiedLink ? 'Copied' : 'Share'}</span>
          </button>

          <button
            onClick={shareOnTwitter}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 text-xs transition-all"
            title="Share on X / Twitter"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </button>

          <button
            onClick={shareOnLinkedIn}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 text-xs transition-all"
            title="Share on LinkedIn"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Main Hero Header */}
      <header className="space-y-6 max-w-4xl mx-auto text-left">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold uppercase tracking-wider bg-sky-500/10 border border-sky-500/30 text-sky-400">
            {post.category}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
            {post.difficulty}
          </span>
          <span className="text-slate-600 font-mono">•</span>
          <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-slate-500" />
            {post.publishedAt}
          </span>
          <span className="text-slate-600 font-mono">•</span>
          <span className="text-xs font-mono text-sky-400 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            {post.readTime}
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] sm:leading-[1.15]">
          {post.title}
        </h1>

        <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed">
          {post.subtitle}
        </p>

        {/* Author Bio Snippet */}
        <div className="flex items-center gap-3.5 pt-4 pb-2 border-y border-slate-800/80">
          <div className="w-10 h-10 rounded-full bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-300 font-mono font-bold text-sm">
            TS
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-white flex items-center gap-2">
              <span>{post.author.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Author
              </span>
            </div>
            <span className="text-xs text-slate-400 font-mono">{post.author.role}</span>
          </div>
        </div>

        {/* Highlighted Architecture Metrics */}
        {post.metricsHighlight && post.metricsHighlight.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80">
            {post.metricsHighlight.map((metric, idx) => (
              <div key={idx} className="space-y-0.5 font-mono">
                <div className="text-xl sm:text-2xl font-black text-white">{metric.value}</div>
                <div className="text-xs text-sky-400 font-semibold">{metric.label}</div>
                <div className="text-[10px] text-slate-400 leading-tight">{metric.subtext}</div>
              </div>
            ))}
          </div>
        )}

        {/* Executive Takeaways Box */}
        <div className="p-5 sm:p-6 rounded-2xl glass-panel border border-sky-500/30 bg-sky-950/15 space-y-3">
          <div className="flex items-center gap-2 text-sky-400 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Key Architecture Takeaways</span>
          </div>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
            {post.keyTakeaways.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-sky-400 font-mono mt-0.5">❯</span>
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </header>

      {/* Main Content Layout with Sticky Table of Contents on Desktop */}
      <div className="mt-12 lg:grid lg:grid-cols-12 lg:gap-12 max-w-7xl mx-auto">
        
        {/* Sticky TOC Sidebar (Desktop) */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 space-y-5 p-5 rounded-2xl glass-panel border border-slate-800">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Table of Contents</span>
            </div>
            <nav className="space-y-1.5 text-xs font-mono">
              {post.sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className={`block py-1.5 px-2.5 rounded-lg transition-colors leading-snug ${
                    activeSectionId === section.id
                      ? 'bg-sky-500/10 text-sky-300 border-l-2 border-sky-400 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                  }`}
                >
                  {section.heading}
                </a>
              ))}
            </nav>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <div className="text-[11px] font-mono text-slate-500">Tags</div>
              <div className="flex flex-wrap gap-1">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Article Body Content */}
        <main className="lg:col-span-9 max-w-3xl space-y-10">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-5">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-2 group">
                <a href={`#${section.id}`} className="text-slate-500 hover:text-sky-400 transition-colors">
                  <Hash className="w-5 h-5 text-sky-400/60" />
                </a>
                <span>{section.heading}</span>
              </h2>

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                  {p}
                </p>
              ))}

              {/* Callout Alert */}
              {section.callout && (
                <div className={`p-4 sm:p-5 rounded-xl border space-y-1.5 ${
                  section.callout.type === 'warning'
                    ? 'bg-rose-950/20 border-rose-500/30 text-rose-200'
                    : section.callout.type === 'tip'
                    ? 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                    : section.callout.type === 'insight'
                    ? 'bg-purple-950/20 border-purple-500/30 text-purple-200'
                    : 'bg-sky-950/20 border-sky-500/30 text-sky-200'
                }`}>
                  <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider">
                    {section.callout.type === 'warning' && <AlertTriangle className="w-4 h-4 text-rose-400" />}
                    {section.callout.type === 'tip' && <Lightbulb className="w-4 h-4 text-emerald-400" />}
                    {section.callout.type === 'insight' && <Sparkles className="w-4 h-4 text-purple-400" />}
                    {section.callout.type === 'architecture' && <Cpu className="w-4 h-4 text-sky-400" />}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {section.callout.message}
                  </p>
                </div>
              )}

              {/* Formatted Code Snippet */}
              {section.codeSnippet && (
                <div className="rounded-xl overflow-hidden border border-slate-800 bg-[#090d16] font-mono text-xs shadow-xl">
                  <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/90 border-b border-slate-800 text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/60 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/60 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60 inline-block" />
                      {section.codeSnippet.filename && (
                        <span className="ml-2 text-slate-300 font-semibold">{section.codeSnippet.filename}</span>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] uppercase tracking-wider text-slate-500">
                        {section.codeSnippet.language}
                      </span>
                      <button
                        onClick={() => handleCopyCode(section.codeSnippet!.code, section.id)}
                        className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800/80 hover:bg-slate-700 transition-colors"
                      >
                        {copiedSnippetId === section.id ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="p-4 overflow-x-auto text-slate-200 leading-relaxed font-mono">
                    <pre>
                      <code>{section.codeSnippet.code}</code>
                    </pre>
                  </div>
                </div>
              )}

              {/* Comparison Table */}
              {section.comparisonTable && (
                <div className="rounded-xl overflow-x-auto border border-slate-800 bg-slate-900/40 my-4">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-slate-900 border-b border-slate-800 text-slate-300">
                      <tr>
                        {section.comparisonTable.headers.map((h, i) => (
                          <th key={i} className="p-3 font-semibold">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-400">
                      {section.comparisonTable.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-slate-800/30 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3 ${cIdx === 0 ? 'text-white font-semibold' : ''}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          {/* Interactive Kudos / Like Banner */}
          <div className="p-6 rounded-2xl glass-panel border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <h4 className="text-base font-bold text-white">Found this engineering breakdown valuable?</h4>
              <p className="text-xs text-slate-400">Support technical writing by dropping a kudos reaction.</p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={`px-4 py-2.5 rounded-xl border font-mono text-xs flex items-center gap-2 transition-all ${
                  hasLiked
                    ? 'bg-sky-500/20 border-sky-400/50 text-sky-300'
                    : 'bg-slate-900 hover:bg-slate-800 border-slate-700 text-white'
                }`}
              >
                <ThumbsUp className={`w-4 h-4 ${hasLiked ? 'text-sky-400 fill-current' : ''}`} />
                <span>{likes} Kudos</span>
              </button>

              <button
                onClick={handleCopyLink}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 font-mono text-xs text-slate-300 hover:text-white flex items-center gap-1.5 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>{copiedLink ? 'Link Copied!' : 'Share Article'}</span>
              </button>
            </div>
          </div>

          {/* Author Recruiter Pitch Card */}
          <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-sky-500/30 bg-gradient-to-r from-sky-950/20 to-[#07090e] space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/40 flex items-center justify-center text-sky-300 font-mono font-bold text-lg">
                  TS
                </div>
                <div>
                  <h4 className="text-base font-bold text-white">Adeseluka Toba Samuel</h4>
                  <p className="text-xs text-slate-400 font-mono">Senior Distributed Systems &amp; Full-Stack Engineer</p>
                </div>
              </div>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for Staff / Lead Roles</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
              I architect high-throughput distributed media infrastructure, resilient payment ledgers, and autonomous agent workflows. Available for Technical Lead and Senior Software Engineering roles across US, Canada, Europe, and global remote teams.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="mailto:adeselukatobasamuel@yahoo.com"
                className="px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs font-mono transition-colors"
              >
                Discuss Systems / Hire Me
              </a>
              <a
                href="https://linkedin.com/in/toba-adeseluka"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-850 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono transition-colors"
              >
                Connect on LinkedIn
              </a>
              <Link
                href="/#projects"
                className="px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-800 text-slate-400 hover:text-white text-xs font-mono transition-colors"
              >
                View Shipped Projects
              </Link>
            </div>
          </div>
        </main>
      </div>

      {/* Related Engineering Deep Dives */}
      {relatedPosts.length > 0 && (
        <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-800/80">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                More Engineering Deep Dives
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Explore adjacent architectures, system post-mortems, and cloud optimizations.
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:inline-flex items-center gap-1 text-xs font-mono text-sky-400 hover:text-sky-300 font-semibold"
            >
              <span>View all posts</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <BlogCard key={related.slug} post={related} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
