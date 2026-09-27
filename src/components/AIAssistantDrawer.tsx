'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { 
  Bot, X, Send, Sparkles, Terminal, 
  RefreshCw, User, Cpu, Shield, Zap, 
  ExternalLink, ChevronDown 
} from 'lucide-react';

export function AIAssistantDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, isLoading, setInput, reload, error } = useChat({
    api: '/api/chat',
    initialMessages: [
      {
        id: 'welcome',
        role: 'assistant',
        content: `👋 Hello! I am **Samuel's AI Engineering Twin**. 

I can give you an executive pitch on his 8+ years of experience, explain the system design of his projects (like **Fenris LiveStream**, **SellersPro**, or his work at **HP Inc.**), or dive deep into his architectural decisions and tech stack.

How can I help you today?`,
      },
    ],
  });

  const quickPrompts = [
    { label: '⚡ 30s Recruiter Pitch', prompt: 'Give me the 30-second executive pitch on Samuel for a technical recruiter.' },
    { label: '🎥 Fenris LiveStream Architecture', prompt: 'Explain the architecture and AWS IVS video pipeline of Fenris Media.' },
    { label: '🛍️ SellersPro PgVector RAG', prompt: 'How does the autonomous AI agent and PgVector RAG work in SellersPro?' },
    { label: '🔒 Why are projects NDA?', prompt: 'Why are some of Samuel\'s projects marked Private / Client Architecture?' },
    { label: '🛠️ Core Tech Stack', prompt: 'What are Samuel\'s primary languages, databases, and frameworks?' },
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSelectPrompt = (promptText: string) => {
    setInput(promptText);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-slate-900 border border-sky-500/40 text-white font-mono text-xs shadow-2xl hover:border-sky-400 hover:scale-105 transition-all duration-300 backdrop-blur-xl"
          aria-label="Open AI Assistant"
        >
          {/* Animated Glow Halo */}
          <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-sky-500 to-emerald-500 opacity-30 group-hover:opacity-60 blur-sm transition duration-300" />
          
          <div className="relative flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
              <Bot className="w-3.5 h-3.5 animate-pulse" />
            </div>
            <span className="font-semibold text-slate-100 hidden sm:inline">Ask AI Agent</span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
          </div>
        </button>
      </div>

      {/* Slide-Over Chat Window */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-md bg-[#0a0e17] border-l border-slate-800 shadow-2xl flex flex-col justify-between text-slate-200">
          
          {/* Header */}
          <div className="p-4 border-b border-slate-800/80 bg-[#0c121e]/90 backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white flex items-center gap-1.5 font-mono">
                  <span>Samuel&apos;s AI Assistant</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </h3>
                <span className="text-[10px] text-slate-400 font-mono">
                  Vercel AI SDK • Knowledge Grounded
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-700/60 text-slate-400 hover:text-white transition-colors"
              aria-label="Close Assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 space-y-2 ${
                    m.role === 'user'
                      ? 'bg-sky-500 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-wrap'
                  }`}
                >
                  <div>{m.content}</div>
                </div>

                {m.role === 'user' && (
                  <div className="w-6 h-6 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-slate-400 text-xs font-mono">
                <div className="w-6 h-6 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-400">
                  <Bot className="w-3.5 h-3.5 animate-spin" />
                </div>
                <span>Streaming response...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Prompt Suggestions */}
          <div className="px-4 py-2 border-t border-slate-800/60 bg-slate-950/40">
            <div className="text-[10px] font-mono text-slate-500 mb-1.5 uppercase">Suggested Questions:</div>
            <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              {quickPrompts.map((p, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectPrompt(p.prompt)}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] font-mono whitespace-nowrap border border-slate-800 transition-colors shrink-0"
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input Footer */}
          <form
            onSubmit={handleSubmit}
            className="p-3 border-t border-slate-800/80 bg-[#0c121e] flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask anything about Samuel's systems..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 transition-colors font-mono"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-40 text-slate-950 font-bold transition-all"
              aria-label="Send message"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
