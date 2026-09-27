'use client';

import React, { useState } from 'react';
import { EngineerBio } from '../types/portfolio';
import { 
  User, Briefcase, GraduationCap, Award, 
  Cpu, Sparkles, ShieldCheck, GitMerge, 
  ExternalLink, Calendar, MapPin, Mail, CheckCircle2 
} from 'lucide-react';

interface AboutSectionProps {
  bio: EngineerBio;
}

export function AboutSection({ bio }: AboutSectionProps) {
  const [selectedTechTab, setSelectedTechTab] = useState(0);

  const careerTimeline = [
    {
      company: "Fenris Media Limited",
      role: "Tech Lead / Senior Software Engineer",
      period: "2021 – May 2026",
      location: "Lagos, Nigeria",
      achievements: [
        "Architected live-streaming platform from scratch using Go, AWS IVS, SQS, and DynamoDB scaling to 10,000+ concurrent viewers with sub-2s latency.",
        "Integrated AWS Elemental MediaConvert for DRM-compliant HLS encryption and multi-bitrate transcoding across desktop and mobile clients.",
        "Reduced cloud infrastructure costs by 28% by migrating transcoding workloads from dedicated EC2 to SNS-driven serverless events.",
        "Spearheaded automated AI content moderation and image recognition pipelines."
      ]
    },
    {
      company: "BreezeLearn Technologies",
      role: "Full-Stack Software Engineer",
      period: "Jan 2024 – May 2026",
      location: "Calgary, Canada (Remote)",
      achievements: [
        "Built conversational AI agents with RAG knowledge bases (PgVector + LlamaIndex), reducing customer support resolution time by 45%.",
        "Architected AI email automation using LangChain and OpenAI, triaging 10,000+ emails/month with 89% classification accuracy.",
        "Engineered real-time speech-to-speech voice chat widgets using Pipecat-AI deployed directly on client storefronts.",
        "Utilized Cloudflare Workers and Cloudflare AI for edge inference, delivering global p95 latency under 200ms."
      ]
    },
    {
      company: "LEWK",
      role: "Full-Stack Software Engineer",
      period: "Jan 2024 – Jan 2025",
      location: "Calgary, Canada (Remote)",
      achievements: [
        "Designed and published a Shopify application with AI-driven personalized fashion recommendations, yielding a 22% uplift in add-to-cart conversions.",
        "Architected scalable Next.js and React frontend interfaces with SSR, cutting Time-to-Interactive (TTI) by 40%.",
        "Built automated GitHub Actions CI/CD pipelines enabling daily zero-downtime releases."
      ]
    },
    {
      company: "Hewlett-Packard Inc. (HP)",
      role: "Software Engineer (Contract)",
      period: "Mar 2022 – Jan 2023",
      location: "Remote",
      achievements: [
        "Optimized Pop!_OS / Linux kernel bottlenecks and resolved GNOME Shell compositor memory leaks for the flagship HP Dev One developer workstation.",
        "Developed a native GNOME Shell extension shipped via Debian OTA repository, improving daily workflow for 50,000+ developers.",
        "Built a GDPR-compliant abandoned-checkout recovery service using React and Express, recovering an estimated 12% of abandoned sessions."
      ]
    },
    {
      company: "Susej Nigeria Limited",
      role: "Senior Software Engineer / Embedded Engineer",
      period: "Nov 2018 – 2022",
      location: "Lagos, Nigeria",
      achievements: [
        "Led architecture for a monorepo microservices platform with RabbitMQ inter-service messaging and NestJS JWT/RBAC security.",
        "Integrated Azure IoT Hub to handle 100,000+ daily MQTT messages from industrial field devices.",
        "Developed industrial firmware for STM32 (ARM Cortex-M3) and AVR microcontrollers in C/C++."
      ]
    },
    {
      company: "Hinges Technologies Limited",
      role: "Software Engineer",
      period: "Feb 2021 – Jan 2022",
      location: "Lagos, Nigeria",
      achievements: [
        "Delivered Park Facility and Estate Management systems (vgcpora.com, arctic.hinge.systems) with offline-resilient Raspberry Pi local server fallbacks."
      ]
    }
  ];

  const certifications = [
    { name: "ALX Software Engineer Program", year: "2024", id: "nTxzCP3m7f" },
    { name: "Andela React Learning Program", year: "2023", id: "bbacd434" },
    { name: "Certified Project Manager — IPMP", year: "2017", id: "IPMP/2017/EOA11267" },
    { name: "Andela Mobile Web Specialist", year: "2018", id: "Verified" },
    { name: "IAENG Professional Member", year: "2016", id: "No. 110430" }
  ];

  const getPhilosophyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5 text-sky-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case 'GitMerge': return <GitMerge className="w-5 h-5 text-amber-400" />;
      default: return <Cpu className="w-5 h-5 text-sky-400" />;
    }
  };

  return (
    <section id="about" className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      
      {/* Section Header */}
      <div className="space-y-3 mb-14">
        <div className="flex items-center gap-2 text-purple-400 font-mono text-xs font-semibold tracking-wider uppercase">
          <User className="w-4 h-4" />
          <span>Engineering Profile & Leadership</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Adeseluka Toba Samuel (SmartRay)
        </h2>
        <p className="text-slate-400 text-sm sm:text-base max-w-3xl leading-relaxed">
          {bio.summary}
        </p>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400 pt-2 flex-wrap">
          <span className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-rose-400" />
            {bio.location}
          </span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">{bio.availabilityStatus}</span>
        </div>
      </div>

      {/* Engineering Philosophy Cards */}
      <div className="space-y-4 mb-16">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-sky-400" />
          <span>Engineering Philosophy & Standards</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bio.philosophy.map((item, idx) => (
            <div key={idx} className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800 space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  {getPhilosophyIcon(item.iconName)}
                </div>
                <h4 className="text-sm font-semibold text-white">{item.title}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed pl-11">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Tech Stack Matrix */}
      <div className="space-y-4 mb-16">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <Cpu className="w-4 h-4 text-emerald-400" />
            <span>Technical Competency Matrix</span>
          </h3>
          <span className="text-xs font-mono text-slate-500">8+ Years Production Experience</span>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-slate-800">
          {bio.techMatrix.map((group, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedTechTab(idx)}
              className={`px-4 py-2 text-xs font-mono font-medium rounded-t-lg transition-all whitespace-nowrap ${
                selectedTechTab === idx
                  ? 'bg-slate-800 text-sky-400 border-b-2 border-sky-400 font-bold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {group.category}
            </button>
          ))}
        </div>

        {/* Selected Category Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
          {bio.techMatrix[selectedTechTab].skills.map((skill, idx) => (
            <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-white font-mono">{skill.name}</span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full uppercase font-bold ${
                  skill.level === 'Expert' 
                    ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                    : 'bg-sky-500/15 text-sky-400 border border-sky-500/30'
                }`}>
                  {skill.level}
                </span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                {skill.context}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Career Experience Timeline */}
      <div className="space-y-6 mb-16">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Briefcase className="w-4 h-4 text-purple-400" />
          <span>Professional Experience & Track Record</span>
        </h3>

        <div className="relative border-l border-slate-800 ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {careerTimeline.map((item, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-slate-900 border-2 border-sky-400 group-hover:bg-sky-400 transition-colors" />

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h4 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors">
                      {item.role}
                    </h4>
                    <span className="text-sm font-semibold text-sky-400 font-mono">
                      {item.company}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.period}</span>
                    <span>•</span>
                    <span>{item.location}</span>
                  </div>
                </div>

                <ul className="space-y-1.5 pt-2">
                  {item.achievements.map((ach, aIdx) => (
                    <li key={aIdx} className="text-xs text-slate-300 leading-relaxed flex items-start gap-2">
                      <span className="text-sky-400 font-bold shrink-0 mt-0.5">•</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-800">
        
        {/* Education */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <GraduationCap className="w-5 h-5 text-sky-400" />
            <span>Formal Education</span>
          </div>
          <div>
            <div className="font-semibold text-sm text-white">B.Eng. Electrical & Electronics Engineering</div>
            <div className="text-xs font-mono text-sky-400 mt-0.5">Federal University of Technology, Akure (FUTA)</div>
            <div className="text-xs text-slate-500 mt-1">Class of 2016 • Rigorous foundation in circuit analysis, digital systems, signal processing, and low-level firmware.</div>
          </div>
        </div>

        {/* Certifications */}
        <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-base">
            <Award className="w-5 h-5 text-emerald-400" />
            <span>Certifications & Honors</span>
          </div>
          <div className="space-y-2">
            {certifications.map((c, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs font-mono border-b border-slate-800/60 pb-1.5">
                <span className="text-slate-300">{c.name}</span>
                <span className="text-slate-500 font-semibold">{c.year}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}
