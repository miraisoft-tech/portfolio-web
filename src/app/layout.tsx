import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Terminal, Cpu, BookOpen, User, Sparkles, Globe, Mail } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Samuel (SmartRay) | Lead Distributed Systems & Full-Stack Engineer",
  description: "High-technical, learning-focused portfolio showcasing distributed event-driven engines, real-time settlement ledgers, and autonomous AI architectures.",
  keywords: [
    "Distributed Systems",
    "Full-Stack Engineer",
    "Go",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "Kafka",
    "Fintech Architecture",
    "AI Agent Runtime"
  ],
  authors: [{ name: "Samuel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-[#07090e] text-[#f8fafc] antialiased selection:bg-sky-500/20 selection:text-sky-300 min-h-screen flex flex-col font-sans`}
      >
        {/* Ambient Top Glows */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-radial-glow pointer-events-none -z-10" />
        <div className="fixed top-20 right-0 w-96 h-96 bg-radial-emerald pointer-events-none -z-10" />

        {/* Global Navigation Header */}
        <header className="sticky top-0 z-40 w-full glass-nav">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            {/* Logo / Identity */}
            <Link 
              href="/" 
              className="flex items-center gap-2.5 group"
            >
              <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 group-hover:scale-105 group-hover:border-sky-400 transition-all duration-200">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-mono font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
                  smartray.dev
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </span>
                <span className="text-[10px] text-slate-400 font-mono">systems & cloud craft</span>
              </div>
            </Link>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <Link 
                href="/#projects" 
                className="px-3.5 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center gap-1.5"
              >
                <Cpu className="w-4 h-4 text-sky-400" />
                Projects
              </Link>
              <Link 
                href="/#radar" 
                className="px-3.5 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center gap-1.5"
              >
                <BookOpen className="w-4 h-4 text-emerald-400" />
                Tech Radar & TIL
              </Link>
              <Link 
                href="/#about" 
                className="px-3.5 py-1.5 rounded-md text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors flex items-center gap-1.5"
              >
                <User className="w-4 h-4 text-purple-400" />
                Engineering Bio
              </Link>
            </nav>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex items-center gap-2 pr-2 border-r border-slate-800">
                <a
                  href="https://github.com/smartraysam"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
                <a
                  href="https://linkedin.com/in/toba-adeseluka"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 text-slate-400 hover:text-white transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>

              {/* Status Badge */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
                <span>Open for Staff / Lead Roles</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 w-full bg-grid-pattern">
          {children}
        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900 bg-[#06080c] py-12 text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs">
                <span>© {new Date().getFullYear()} Samuel (SmartRay)</span>
                <span>•</span>
                <span className="text-sky-400">Next.js 15 + Edge AI</span>
              </div>
              <p className="text-xs text-slate-600">
                Architected with clean domain models, sub-millisecond local-first state, and zero fluff.
              </p>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                All Systems Operational
              </span>
              <span>•</span>
              <a href="#about" className="hover:text-sky-400 transition-colors">Recruiter Fast Pitch</a>
              <span>•</span>
              <a href="mailto:contact@smartray.dev" className="hover:text-sky-400 transition-colors">contact@smartray.dev</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
