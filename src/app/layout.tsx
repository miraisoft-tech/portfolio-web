import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";
import { Header } from "@/components/Header";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Adeseluka Toba Samuel | Lead Distributed Systems & Full-Stack Engineer",
  description: "High-technical, learning-focused portfolio showcasing distributed event-driven engines, real-time settlement ledgers, and autonomous AI architectures.",
  keywords: [
    "Distributed Systems",
    "Full-Stack Engineer",
    "Go",
    "TypeScript",
    "Next.js",
    "PostgreSQL",
    "AI Agent Runtime"
  ],
  authors: [{ name: "Adeseluka Toba Samuel" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className="bg-[#07090e] text-[#f8fafc] antialiased selection:bg-sky-500/20 selection:text-sky-300 min-h-screen flex flex-col font-sans"
      >
        {/* Ambient Top Glows */}
        <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-64 bg-radial-glow pointer-events-none -z-10" />
        <div className="fixed top-20 right-0 w-96 h-96 bg-radial-emerald pointer-events-none -z-10" />

        {/* Global Responsive Navigation Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-1 w-full bg-grid-pattern overflow-x-hidden">
          {children}
        </main>

        {/* Responsive Footer */}
        <footer className="border-t border-slate-900 bg-[#06080c] py-10 sm:py-12 text-sm text-slate-500">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start gap-1.5">
              <div className="flex items-center gap-2 text-slate-300 font-mono text-xs flex-wrap justify-center md:justify-start">
                <span>© {new Date().getFullYear()} Adeseluka Toba Samuel</span>
                <span className="text-slate-600">•</span>
                <span className="text-sky-400">Next.js + Edge AI</span>
              </div>
              <p className="text-xs text-slate-600 max-w-md">
                Architected with clean domain models, sub-millisecond local-first state, and zero fluff.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                All Systems Operational
              </span>
              <Link href="/blog" className="hover:text-amber-400 text-slate-300 transition-colors py-1">Engineer Blog</Link>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a href="#about" className="hover:text-sky-400 transition-colors py-1">Fast Pitch</a>
              <span className="hidden sm:inline text-slate-700">•</span>
              <a href="mailto:adeselukatobasamuel@yahoo.com" className="hover:text-sky-400 transition-colors break-all py-1">
                adeselukatobasamuel@yahoo.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
