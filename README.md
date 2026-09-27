# ⚡ Adeseluka Toba Samuel — Senior Software Engineer & Tech Lead Portfolio

[![Next.js](https://img.shields.io/badge/Next.js-16.3.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.8-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Vercel AI SDK](https://img.shields.io/badge/Vercel_AI_SDK-v4-black?style=for-the-badge&logo=vercel)](https://sdk.vercel.ai/)
[![License: MIT](https://img.shields.io/badge/License-MIT-emerald?style=for-the-badge)](LICENSE)

An architectural-grade, interactive engineering portfolio and AI digital twin for **Adeseluka Toba Samuel (SmartRay)** — Senior Software Engineer, Tech Lead, and Distributed Systems / AI Specialist.

Unlike traditional static portfolio templates, this web platform is engineered as a **living technical showcase**: featuring deep-dive architectural decision records (ADRs), interactive system topology modals, a continuous learning tech radar, and an **embedded streaming AI Engineering Assistant** that advocates and answers technical queries in real time.

---

## 🌟 Key Highlights & Features

### 🤖 1. Embedded AI Engineering Assistant (Digital Twin)
- **Streaming Conversations**: Real-time conversational drawer powered by the **Vercel AI SDK** (`ai`, `@ai-sdk/google`, `@ai-sdk/openai`).
- **Multi-Provider LLM Integration**: Dynamically connects to **Google Gemini** (`gemini-1.5-flash`) or **OpenAI** (`gpt-4o-mini`).
- **Zero-Config Fallback Engine**: If no API keys are configured in local development, an intelligent simulated streaming engine responds contextually to recruiter pitches, technical architecture questions, and contact inquiries.
- **RAG-Ready System Prompt**: Synthesizes Samuel's comprehensive career trajectory, ADRs, metrics, and engineering principles directly into the LLM context.

### 🏗️ 2. Deep-Dive Production Case Studies
Every project showcases real engineering challenges, before-and-after benchmarks, and tradeoffs:
- **[SellersPro.app](https://sellerspro.app)**: AI-driven multi-tenant SaaS storefront with PgVector RAG product discovery, Paystack settlement ledgers, and idempotent webhook processing.
- **Fenris Video Engine**: Live streaming infrastructure scaled to **10,000+ concurrent viewers** (<2s latency) using Go and AWS IVS, with an event-driven AWS MediaConvert pipeline reducing cloud transcoding costs by **28%**.
- **resQ360 Monorepo**: Emergency dispatch system built with NestJS, WebSockets, and geospatial PostgreSQL queries.
- **Hewlett-Packard (HP Dev One)**: Pop!_OS Linux kernel optimizations and GNOME Shell compositor performance patches shipped to **50,000+ developer workstations**.
- **SmartGridNG & SusejMeters**: IoT telemetry, MikroTik hotspot provisioning, and STS-compliant smart prepaid electricity token dispensing over low-bandwidth cellular networks.

### 📐 3. Interactive Architecture Modals & ADRs
- **Topology Diagrams**: High-clarity ASCII/component diagrams mapping ingest pipelines, database partitions, caching tiers, and event workers.
- **Architectural Decision Records (ADRs)**: Documents *Why* choices were made (e.g., *PgVector vs. Standalone Pinecone*, *SNS-Triggered MediaConvert vs. EC2 Ingest*, *Modular Monorepo vs. Multi-Repo*), including alternatives and evaluated tradeoffs.
- **Engineering Challenges & Solutions**: Root cause analysis and measurable outcomes.

### 📡 4. Continuous Learning Tech Radar & TIL
- **Dynamic Radar**: Tracks engineering competencies across four evaluation rings: **Adopt**, **Trial**, **Assess**, and **Hold**.
- **"Today I Learned" (TIL) Archive**: Production micro-insights and lessons learned from live environments (e.g., GNOME compositor memory leak fixes, PostgreSQL vector indexing).

### 🎨 5. Modern Dark-Mode Technical Aesthetic
- Built with **Next.js 16 (App Router)** and **React 19**.
- Ultra-modern dark engineering theme with glassmorphism, radial grid glow, and responsive drawer navigation.
- Smooth animations and micro-interactions powered by CSS and Canvas Confetti.

---

## 🛠️ Technology Stack

| Layer | Technologies |
| :--- | :--- |
| **Framework & Core** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack), [React 19](https://react.dev/), [TypeScript 5](https://www.typescriptlang.org/) |
| **Styling & Design** | [Tailwind CSS v4](https://tailwindcss.com/), `@tailwindcss/postcss`, Custom CSS Design System |
| **AI & LLM Streaming** | [Vercel AI SDK](https://sdk.vercel.ai/) (`ai`), `@ai-sdk/google` (Gemini), `@ai-sdk/openai` (GPT-4o) |
| **Icons & Micro-UI** | [Lucide React](https://lucide.dev/), [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) |
| **Code Quality & Linting** | [ESLint 9](https://eslint.org/), Next.js Core Web Vitals |

---

## 📁 Repository Structure

```text
portfolio-web/
├── public/                 # Static assets, SVG icons, and media
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── chat/       # Edge/Node streaming AI chat route (Gemini / OpenAI / Fallback)
│   │   │       └── route.ts
│   │   ├── globals.css     # Design tokens, radial glows, glassmorphism utilities
│   │   ├── layout.tsx      # Root HTML layout, header, footer, SEO metadata
│   │   └── page.tsx        # Homepage assembling Hero, Projects, Radar & About
│   ├── components/
│   │   ├── AIAssistantDrawer.tsx   # Floating interactive AI chatbot drawer
│   │   ├── AboutSection.tsx        # Career timeline, engineering principles & skills
│   │   ├── HeroSection.tsx         # Executive summary, quick stats, primary CTAs
│   │   ├── ProjectDetailModal.tsx  # Deep-dive architecture modal with ADRs
│   │   ├── ProjectsGrid.tsx        # Filterable project catalog with category tabs
│   │   └── TechRadarSection.tsx    # Tech radar rings & TIL engineering notes
│   ├── data/
│   │   └── portfolioData.ts        # Single source of truth: Bio, Projects, ADRs, TILs
│   ├── lib/
│   │   ├── aiKnowledge.ts          # System prompt synthesis & knowledge injection
│   │   └── content.ts              # UI copy and helper utilities
│   └── types/
│       └── portfolio.ts            # TypeScript definitions for projects, ADRs, bio
├── .env.example            # Sample environment variables template
├── next.config.ts          # Next.js build configuration
├── package.json            # Dependencies and npm run scripts
├── postcss.config.mjs      # PostCSS configuration for Tailwind v4
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have installed:
- **Node.js**: `v20.x` or `v22.x` recommended (Minimum `v18.17+`)
- **Package Manager**: `npm`, `pnpm`, `yarn`, or `bun`

### 1. Clone the Repository

```bash
git clone https://github.com/miraisoft-tech/portfolio-web.git
cd portfolio-web
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
# or
yarn install
```

### 3. Configure Environment Variables (Optional)

Create a `.env.local` file from the provided `.env.example`:

```bash
cp .env.example .env.local
```

Add your preferred AI provider API key:

```env
# Google Gemini (Default recommended provider)
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key_here

# OR OpenAI
OPENAI_API_KEY=your_openai_api_key_here
```

> **Note**: If you don't provide an API key, the app gracefully activates its **built-in simulated streaming engine**, allowing full functional testing and demonstration of the AI assistant without any external API calls.

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 💻 Available Scripts

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot reload at `localhost:3000` |
| `npm run build` | Compiles the production build |
| `npm run start` | Runs the production-optimized Next.js server |
| `npm run lint` | Runs ESLint to check for code style and syntax issues |

---

## ⚙️ Customization & Updating Content

All personal, technical, and architectural data is centralized in typed data files:

1. **Profile, Philosophy & Skills**:
   Edit `src/data/portfolioData.ts` -> `engineerBio`
2. **Projects & Architecture Decision Records (ADRs)**:
   Add or update items in `src/data/portfolioData.ts` -> `portfolioProjects`
3. **Continuous Learning Radar**:
   Modify entries in `src/data/portfolioData.ts` -> `learningRadar`
4. **TIL (Today I Learned) Notes**:
   Update notes in `src/data/portfolioData.ts` -> `tilNotes`
5. **AI Assistant Knowledge Base**:
   The prompt in `src/lib/aiKnowledge.ts` automatically consumes `portfolioData.ts`, ensuring the AI assistant is always synchronized with your latest projects and metrics.

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy this Next.js application is with [Vercel](https://vercel.com):

1. Push your changes to GitHub (`main` branch).
2. Import your repository into Vercel.
3. Configure your Environment Variables (`GOOGLE_GENERATIVE_AI_API_KEY` or `OPENAI_API_KEY`).
4. Click **Deploy**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fmiraisoft-tech%2Fportfolio-web)

---

## 👤 Author

**Adeseluka Toba Samuel (SmartRay)**
*Senior Software Engineer | Tech Lead | Distributed Systems & AI*

- 💼 **LinkedIn**: [linkedin.com/in/toba-adeseluka](https://linkedin.com/in/toba-adeseluka)
- 🐙 **GitHub**: [@smartraysam](https://github.com/smartraysam)
- 📧 **Email**: [adeselukatobasamuel@yahoo.com](mailto:adeselukatobasamuel@yahoo.com)
- 📅 **Schedule a Call**: [cal.com/smartraysam](https://cal.com/smartraysam)

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.
