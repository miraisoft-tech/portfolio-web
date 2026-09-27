import { Project, LearningRadarItem, TILNote, EngineerBio } from '../types/portfolio';

export const engineerBio: EngineerBio = {
  name: "Adeseluka Toba Samuel",
  role: "Senior Software Engineer | Tech Lead | AI & Full-Stack Specialist",
  tagline: "Architecting high-throughput live streaming infrastructure, distributed IoT ecosystems, and autonomous AI agents serving global users.",
  summary: "Results-driven Senior Software Engineer and Tech Lead with 8+ years of end-to-end ownership across full-stack, AI, IoT, and cloud-native platforms. Proven track record of architecting scalable systems from real-time live-streaming infrastructure to AI-powered SaaS products serving thousands of active users. Brings deep technical expertise in modern web frameworks, LLM integration, and cloud DevOps, paired with strong leadership of cross-functional engineering teams. Execution-focused, shipping reliably in high-stakes environments across Lagos, Canada, and globally distributed teams.",
  location: "Lagos, Nigeria • Remote Global (Experience with Canada, US & Global teams)",
  availabilityStatus: "Open to Senior / Staff Software Engineer & Technical Lead Roles",
  highlights: [
    { label: "Engineering Experience", value: "8+ Years", detail: "End-to-end system ownership from firmware to cloud AI" },
    { label: "Live Concurrency", value: "10,000+", detail: "Simultaneous live video viewers scaled on AWS IVS & Go" },
    { label: "Global Users Reached", value: "50,000+", detail: "Daily HP Dev One workstation engineers using shipped tools" },
    { label: "Cost Reduction", value: "28% Infra", detail: "Optimized video transcoding pipelines via event-driven SNS" }
  ],
  philosophy: [
    {
      title: "End-to-End Ownership & Pragmatic Architecture",
      description: "True engineering craftsmanship means owning the entire lifecycle: from domain requirements, database schemas, and microservice boundaries to load-testing and p99 latency telemetry.",
      iconName: "Cpu"
    },
    {
      title: "AI as a Deterministic System Amplifier",
      description: "Generative AI is only as good as the system architecture around it. Ground LLMs in strict RAG pipelines, schema validation, vector embeddings, and self-healing fallback loops.",
      iconName: "Sparkles"
    },
    {
      title: "Offline Resilience & Fault Isolation",
      description: "From IoT firmware running on Raspberry Pi to distributed cloud microservices, always design for network failure, partition tolerance, and zero data loss.",
      iconName: "ShieldCheck"
    },
    {
      title: "Code Review Culture & Engineering Excellence",
      description: "High velocity comes from high discipline. Rigorous PR checklists, automated CI/CD quality gates, and thoughtful mentorship reduce production escape rates by 50%+.",
      iconName: "GitMerge"
    }
  ],
  techMatrix: [
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "OpenAI API & Anthropic", level: "Expert", context: "Prompt engineering, function calling, agent orchestration, fine-tuning" },
        { name: "LangChain & LlamaIndex", level: "Expert", context: "RAG architectures, recursive chunking, multi-agent chains, context compaction" },
        { name: "Vector Databases & Search", level: "Expert", context: "PgVector, Cloudflare VectorizeDB, semantic similarity embeddings" },
        { name: "Pipecat-AI & Speech AI", level: "Proficient", context: "Real-time speech-to-speech voice chat widgets on client websites" }
      ]
    },
    {
      category: "Languages & Runtimes",
      skills: [
        { name: "TypeScript / JavaScript", level: "Expert", context: "8+ yrs enterprise Next.js, Node.js, NestJS, and browser runtimes" },
        { name: "Go (Golang)", level: "Proficient", context: "High-concurrency live streaming ingest, microservices, worker pools" },
        { name: "Python", level: "Proficient", context: "LangChain, AI agent workflows, backend data processing" },
        { name: "PHP / Laravel", level: "Expert", context: "High-scale monolithic backends, queuing, event systems, REST APIs" },
        { name: "C / C++", level: "Proficient", context: "Firmware for STM32 ARM Cortex-M3 and AVR microcontrollers" }
      ]
    },
    {
      category: "Cloud, DevOps & Streaming",
      skills: [
        { name: "AWS (IVS, Elemental, SQS, S3)", level: "Expert", context: "AWS IVS live streaming, MediaConvert HLS/DRM transcoding, DynamoDB" },
        { name: "Docker & Containerization", level: "Expert", context: "Docker Compose, multi-stage builds, production container runtimes" },
        { name: "Cloudflare Workers & AI", level: "Expert", context: "Edge serverless inference (<200ms p95), Cloudflare R2 storage" },
        { name: "CI/CD & GitHub Actions", level: "Expert", context: "Zero-downtime release pipelines, automated test runs, Docker registries" }
      ]
    },
    {
      category: "Databases, Caching & Message Brokers",
      skills: [
        { name: "PostgreSQL", level: "Expert", context: "Complex indexing, partitioning, PgVector embeddings, ACID migrations" },
        { name: "Redis", level: "Expert", context: "Session caching, rate limiting, pub/sub, sliding window counters" },
        { name: "MySQL", level: "Expert", context: "Enterprise transactional schemas, query optimization, replication" },
        { name: "RabbitMQ & MQTT", level: "Proficient", context: "Event-driven inter-service messaging, 100k+ MQTT IoT messages/day" }
      ]
    }
  ],
  targetRoles: [
    "Tech Lead / Engineering Lead",
    "Senior Software Engineer (Full-Stack / Backend)",
    "AI Systems & Applications Engineer",
    "Distributed Systems Architect"
  ],
  socials: {
    github: "https://github.com/smartraysam",
    linkedin: "https://linkedin.com/in/toba-adeseluka",
    email: "adeselukatobasamuel@yahoo.com",
    calendarUrl: "https://cal.com/smartraysam"
  }
};

export const portfolioProjects: Project[] = [
  {
    slug: "sellerspro-ai-saas",
    title: "SellersPro: AI-Powered Multi-Tenant SaaS Storefront",
    tagline: "AI-driven commerce platform with embedded 24/7 sales agent, vector RAG product discovery, and automated Paystack settlement.",
    overview: "Architected a multi-tenant commerce SaaS platform enabling Nigerian sellers to launch isolated storefronts with instant order tracking and Paystack integration. Features an embedded autonomous AI sales representative trained on merchant catalogues via PgVector RAG.",
    featured: true,
    category: "AI & Machine Learning",
    visibility: "private",
    date: "2024 - 2026",
    version: "v2.1.0-prod",
    metrics: [
      { label: "Active Merchants", value: "100+", trend: "Growing organically" },
      { label: "Reconciliation Time", value: "Seconds", trend: "Reduced from hours" },
      { label: "AI Sales Support", value: "24/7", trend: "PgVector + OpenAI RAG" },
      { label: "Catalog Query Latency", value: "<180ms", trend: "Vector Search" }
    ],
    techStack: [
      { name: "Next.js 15", category: "framework", highlight: true },
      { name: "TypeScript", category: "language", highlight: true },
      { name: "PostgreSQL & PgVector", category: "database", highlight: true },
      { name: "OpenAI API", category: "tool", highlight: true },
      { name: "Redis", category: "database" },
      { name: "Paystack", category: "tool", highlight: true },
      { name: "Cloudflare R2", category: "infra" }
    ],
    productionUrl: "https://sellerspro.app",
    architecture: {
      summary: "Multi-tenant Next.js application utilizing subdomains/path routing for merchant storefront isolation. Storefront inquiries invoke an edge AI chat pipeline backed by semantic embeddings stored in PostgreSQL via PgVector. Payment events trigger webhook pipelines for real-time ledger updates.",
      diagramMermaid: `flowchart TD
    Buyer[Shopper on Merchant Storefront] -->|Ask Question| Widget[Embeddable AI Sales Widget]
    Widget -->|Embedding Query| API[Next.js App Router Edge]
    API -->|Vector Similarity| DB[(PostgreSQL + PgVector)]
    DB -->|Relevant Products & Policies| API
    API -->|Synthesized Response| LLM[OpenAI GPT-4o-mini]
    LLM -->|Streamed Recommendation| Buyer
    Buyer -->|Checkout| Paystack[Paystack Payment Gateway]
    Paystack -->|Webhook Verification| Worker[Order Reconciliation Pipeline]
    Worker -->|Update Inventory & Notify| DB`,
      adrs: [
        {
          title: "ADR-01: PgVector in PostgreSQL vs Standalone Vector Database (Pinecone)",
          context: "Running a separate Pinecone or Milvus instance introduces extra network hops, synchronization issues with merchant inventory updates, and dual-system maintenance costs.",
          decision: "Integrated the \`pgvector\` extension directly into the primary PostgreSQL database. Product catalogues and embeddings exist in the same ACID transactional store.",
          tradeOffs: "Slightly higher compute overhead on Postgres during large re-indexing, but guarantees instant transactional consistency when a merchant edits a product."
        },
        {
          title: "ADR-02: Webhook Event Idempotency for Order Settlement",
          context: "Paystack sends duplicate webhook delivery attempts upon momentary network timeouts, risking double-crediting merchant orders.",
          decision: "Implemented Redis atomic SETNX lock on the transaction reference with a 24-hour expiration window prior to processing any ledger update.",
          tradeOffs: "Requires Redis dependency; guarantees zero duplicate order fulfillment."
        }
      ],
      challenges: [
        {
          problem: "LLM hallucinated out-of-stock items and quoted inaccurate merchant shipping policies during customer negotiations.",
          solution: "Constrained the RAG system prompt with strict schema grounding, requiring the agent to cite exact item stock counts and return JSON structured cart actions.",
          outcome: "Reduced hallucination rate to under 0.2%, enabling safe autonomous checkout assistance."
        }
      ]
    },
    readmeContent: `# SellersPro: Autonomous AI E-Commerce Platform

SellersPro is a multi-tenant commerce and merchant automation suite powering Nigerian merchants.

### Key Highlights
- **Autonomous Sales Rep Widget**: Embeddable via a single \`<script>\` tag on any third-party storefront.
- **PgVector Semantic Discovery**: Hybrid lexical and semantic search across products and refund policies.
- **Paystack Automated Settlement**: Instant webhook validation and invoice generation.
`,
    learnedSkills: [
      "PgVector HNSW index tuning and high-speed cosine similarity querying",
      "Multi-tenant data isolation and dynamic storefront routing",
      "Paystack webhook verification, idempotency locks, and automated ledgering",
      "Prompt engineering for transactional sales conversational agents"
    ]
  },
  {
    slug: "fenris-livestream-engine",
    title: "Fenris: Real-Time Live Streaming & Monetization Engine",
    tagline: "Scalable content monetization and live video infrastructure designed for 10,000+ concurrent viewers with sub-2s latency.",
    overview: "Tech Lead for end-to-end video streaming and monetization architecture. Built high-concurrency ingestion and broadcasting pipelines using Go, AWS IVS, SQS, and DynamoDB, with DRM-compliant multi-bitrate transcoding via AWS Elemental MediaConvert.",
    featured: true,
    category: "Distributed Systems",
    visibility: "private",
    date: "2023 - 2026",
    version: "v3.0.0-prod",
    metrics: [
      { label: "Concurrent Viewers", value: "10,000+", trend: "Live stress tested" },
      { label: "Broadcast Latency", value: "<2.0s", trend: "AWS IVS Ultra-Low" },
      { label: "Infra Cost Reduction", value: "28%", trend: "SNS-triggered MediaConvert" },
      { label: "Content Processed", value: "500+ hrs/mo", trend: "Adaptive HLS" }
    ],
    techStack: [
      { name: "Go (Golang)", category: "language", highlight: true },
      { name: "AWS IVS (Interactive Video)", category: "infra", highlight: true },
      { name: "AWS MediaConvert", category: "infra", highlight: true },
      { name: "DynamoDB & SQS", category: "database", highlight: true },
      { name: "Node.js & Next.js", category: "framework" },
      { name: "Docker", category: "infra" }
    ],
    productionUrl: "https://allaccessfans.co",
    ndaNotice: "Client Enterprise Architecture: Source code is proprietary under NDA. This case study details the sanitized system design, video transcoding pipeline, and cost optimization methodologies.",
    architecture: {
      summary: "Decoupled video ingestion and playback architecture. Live RTMP/RTMPS streams are ingested via AWS IVS for ultra-low latency playback. On-demand video uploads use Tus protocol on EC2 before dispatching asynchronous SNS events to AWS Elemental MediaConvert for multi-bitrate HLS packaging.",
      diagramMermaid: `flowchart TD
    Broadcaster[Live Broadcaster (OBS / Mobile)] -->|RTMPS Broadcast| IVS[AWS Interactive Video Service]
    IVS -->|Ultra-Low Latency HLS| CDN[Amazon CloudFront CDN]
    CDN -->|Sub-2s Video Stream| Viewers[10,000+ Viewers (Web & Mobile)]
    
    Uploader[Content Creator] -->|Tus Resumable Upload| TusSrv[Tus Ingest Server (Go/EC2)]
    TusSrv -->|Raw MP4 File| S3In[(S3 Ingest Bucket)]
    S3In -->|Event Notification| SNS[AWS SNS Event]
    SNS -->|Trigger Transcode| MC[AWS Elemental MediaConvert]
    MC -->|Multi-Bitrate HLS (1080p, 720p, 480p)| S3Out[(S3 HLS Storage)]
    MC -->|Status Webhook| API[Metadata API (Go)]
    API --> DB[(DynamoDB Stream Records)]`,
      adrs: [
        {
          title: "ADR-01: SNS-Triggered AWS MediaConvert vs On-Demand EC2 Transcoding",
          context: "Original implementation ran dedicated EC2 instances with FFmpeg daemon workers. Instances sat idle 60% of the time, resulting in high baseline AWS compute bills.",
          decision: "Migrated to serverless AWS Elemental MediaConvert triggered via S3/SNS events, completely eliminating on-demand EC2 transcoding clusters.",
          tradeOffs: "Slight cold-start delay (15-30s) before transcoding begins; in return, slashed monthly infrastructure costs by 28% and gained automatic multi-resolution HLS packaging."
        }
      ],
      challenges: [
        {
          problem: "Viewer chat dropped connections and lagged when viewer counts surged past 3,000 during high-profile live events.",
          solution: "Re-architected WebSocket chat using Socket.io with Redis Pub/Sub backplane across clustered NestJS nodes.",
          outcome: "Delivered sub-100ms message broadcast latency across 5,000+ simultaneous chat participants."
        }
      ]
    },
    readmeContent: `# Fenris Media Live-Streaming Architecture (Sanitized Overview)

High-performance video broadcast and monetization platform engineered for high-concurrency African and global audiences.

### Core Architectural Pillars:
1. **Ultra-Low Latency Broadcast**: Sub-2-second broadcast-to-display latency using AWS IVS.
2. **Resumable Chunked Ingest**: Tus protocol integration handling flaky mobile uplinks.
3. **DRM & Multi-Bitrate Encryption**: HLS AES-128 encryption with multi-resolution streaming.
`,
    learnedSkills: [
      "AWS IVS, Elemental MediaConvert, SQS, and CloudWatch distributed telemetry",
      "High-concurrency Go services and WebSocket clustering with Redis Pub/Sub",
      "Tus protocol implementation for mobile network upload fault-tolerance",
      "DRM content protection and video transcoding pipeline economics"
    ]
  },
  {
    slug: "resq360-emergency-dispatch",
    title: "resQ360: Full-Stack Emergency Response & Dispatch Monorepo",
    tagline: "Mission-critical emergency dispatch and service marketplace monorepo delivering sub-5s responder alerting and real-time GPS tracking.",
    overview: "Led the end-to-end system design and backend architecture for a high-concurrency emergency dispatch platform. Built in a TypeScript monorepo serving web, mobile (Flutter), and admin clients with real-time WebSockets, automated responder dispatch, and Paystack wallet settlements.",
    featured: true,
    category: "Full-Stack",
    visibility: "private",
    date: "2024 - 2025",
    version: "v1.4.0",
    metrics: [
      { label: "Dispatch Alert Delivery", value: "<5s", trend: "Real-time WebSockets" },
      { label: "Monorepo Clients", value: "3 Clients", trend: "Web, Mobile, Admin" },
      { label: "Audit Traceability", value: "100%", trend: "Immutable Wallet Ledger" }
    ],
    techStack: [
      { name: "NestJS (TypeScript)", category: "framework", highlight: true },
      { name: "Next.js", category: "framework", highlight: true },
      { name: "PostgreSQL", category: "database", highlight: true },
      { name: "Redis", category: "database" },
      { name: "WebSockets", category: "infra", highlight: true },
      { name: "Docker", category: "infra" },
      { name: "Paystack", category: "tool" }
    ],
    productionUrl: "https://resq360.ng",
    architecture: {
      summary: "Centralized NestJS microservice gateway orchestrating emergency sessions, spatial geospatial proximity queries (PostGIS), and bidirectional WebSocket events to emergency responders.",
      diagramMermaid: `flowchart TD
    Citizen[Citizen in Distress (Mobile App)] -->|Trigger SOS Alert| Gateway[NestJS Gateway API]
    Gateway -->|Spatial Proximity Search| PostGIS[(PostgreSQL + PostGIS)]
    PostGIS -->|Top 5 Nearest Responders| Gateway
    Gateway -->|High-Priority WebSocket Push| Dispatch[Responder Dispatch Service]
    Dispatch --> Responder[Nearest Verified Emergency Responder]
    Responder -->|Accept Incident| Gateway
    Gateway -->|Real-Time GPS Tracking| Citizen`,
      adrs: [
        {
          title: "ADR-01: NestJS Modular Monorepo vs Multi-Repository Microservices",
          context: "A small, agile engineering team needed to maintain shared types, DTO validation schemas, and database entities across mobile, web, and admin clients.",
          decision: "Adopted a Nx/NestJS monorepo architecture with strict module encapsulation.",
          tradeOffs: "Slightly longer initial build pipelines; in return, eliminated type drift between frontend and backend contracts and sped up development velocity by 3x."
        }
      ],
      challenges: [
        {
          problem: "Responders driving through cellular dead zones missed critical emergency dispatch notifications.",
          solution: "Engineered an escalating delivery pipeline: WebSocket dispatch first; if unacknowledged within 8 seconds, automatically fallback to high-priority SMS and automated voice alert.",
          outcome: "Achieved 99.8% responder notification success within 15 seconds."
        }
      ]
    },
    readmeContent: `# resQ360 Monorepo

Next-generation emergency response and services marketplace.

\`\`\`bash
# Start backend and web apps concurrently
npm install
npm run dev:all
\`\`\`
`,
    learnedSkills: [
      "PostGIS spatial indexing and geospatial proximity queries",
      "Mission-critical failover alerting (WebSockets to SMS/Voice fallback)",
      "Financial ledger design for provider disbursements and audit trails",
      "Monorepo architecture with TypeScript and NestJS"
    ]
  },
  {
    slug: "hp-devone-linux-optimization",
    title: "HP Dev One: Linux Workstation Optimization & Cloud Service",
    tagline: "Optimized Pop!_OS / Linux kernel bottlenecks and developed GNOME desktop software shipped to 50,000+ HP Dev One developer workstations.",
    overview: "Software Engineer at Hewlett-Packard (HP Inc.). Diagnosed and resolved memory leaks in GNOME Shell, built a native GNOME extension enabling desktop workflow shortcuts for 50,000+ users, and built a GDPR-compliant abandoned-checkout recovery service for hpdevone.com.",
    featured: true,
    category: "Cloud & DevOps",
    visibility: "private",
    date: "2022 - 2023",
    version: "v1.1-deb",
    metrics: [
      { label: "Active Workstation Users", value: "50,000+", trend: "Shipped globally" },
      { label: "Abandoned Checkout Recovery", value: "12%", trend: "GDPR-compliant" },
      { label: "OTA Distribution", value: "Debian repo", trend: "Automated updates" }
    ],
    techStack: [
      { name: "JavaScript / GJS", category: "language", highlight: true },
      { name: "Linux (Debian / Pop!_OS)", category: "infra", highlight: true },
      { name: "C / C++", category: "language" },
      { name: "React", category: "framework" },
      { name: "Node.js / Express", category: "framework" }
    ],
    productionUrl: "https://hpdevone.com",
    ndaNotice: "Enterprise HP Inc. Engineering: Work completed under contract for Hewlett-Packard. Shipped publicly across HP Dev One developer hardware platforms.",
    architecture: {
      summary: "Developed desktop extensions interfacing with GNOME Mutter window manager and DBus IPC subsystems. Built decoupled cloud microservices for user consent and abandoned checkout notifications.",
      diagramMermaid: `flowchart LR
    Dev[HP Dev One User] -->|Desktop Interaction| GNOME[GNOME Shell Extension (GJS)]
    GNOME -->|DBus IPC| System[Systemd / Kernel Services]
    
    Web[hpdevone.com Storefront] -->|Checkout Dropoff| Srv[Consent & Cart Recovery Cloud Srv]
    Srv -->|GDPR Consent Validation| Identity[HP Identity Platform]
    Srv -->|Automated Recovery Email| Email[Notification Gateway]`,
      adrs: [
        {
          title: "ADR-01: Native GNOME GJS Extension vs Background Electron Daemon",
          context: "Needed to provide desktop productivity shortcuts without incurring additional RAM overhead on a developer workstation.",
          decision: "Built a native GNOME Shell extension in GJS directly embedded in the compositor thread.",
          tradeOffs: "Required deep debugging of Mutter memory lifecycles; resulted in 0.0MB additional persistent RAM usage compared to 150MB+ for an Electron app."
        }
      ],
      challenges: [
        {
          problem: "Mutter compositor memory leak during repeated display resolution changes and docking station hotplugs.",
          solution: "Identified dangling C-pointer bindings in GJS signal disconnect listeners and released patches via the Debian OTA repository.",
          outcome: "Workstation memory remained flat across weeks of continuous developer uptime."
        }
      ]
    },
    readmeContent: `# HP Dev One Desktop & Cloud Enhancements

Work completed for Hewlett-Packard Inc. on the flagship Linux developer workstation.

### Features Shipped:
- GNOME Desktop right-click application launcher.
- OTA Debian package distribution pipeline.
- GDPR-compliant cart recovery cloud backend.
`,
    learnedSkills: [
      "Linux kernel and GNOME Shell compositor internals (Mutter / GJS / DBus)",
      "Debian package creation, signing, and OTA update pipelines",
      "GDPR compliance architectures and consent management",
      "Enterprise performance auditing using Lighthouse and Web Vitals"
    ]
  },
  {
    slug: "smartgrid-hotspot-management",
    title: "SmartGridNG: Campus Hotspot & MikroTik Provisioning Engine",
    tagline: "Automated campus internet subscription platform cutting manual hotspot provisioning from minutes to under 5 seconds.",
    overview: "Built an automated campus connectivity platform for Nigerian tertiary institutions. Connects student Paystack subscription payments with real-time MikroTik RouterOS API provisioning, bandwidth quota management, and renewal job schedulers.",
    featured: false,
    category: "Full-Stack",
    visibility: "private",
    date: "2023 - 2025",
    version: "v2.0.0",
    metrics: [
      { label: "Provisioning Speed", value: "<5s", trend: "Down from 15 mins" },
      { label: "Monthly Sessions", value: "10,000+", trend: "Campus-wide" },
      { label: "Churn Reduction", value: "35%", trend: "Automated renewals" }
    ],
    techStack: [
      { name: "Next.js", category: "framework", highlight: true },
      { name: "Node.js", category: "framework" },
      { name: "MikroTik RouterOS API", category: "infra", highlight: true },
      { name: "PostgreSQL", category: "database" },
      { name: "Redis", category: "database" },
      { name: "Paystack", category: "tool" }
    ],
    productionUrl: "https://smartgrid.ng",
    architecture: {
      summary: "Payment webhooks trigger asynchronous background workers that issue commands over MikroTik RouterOS API to generate credentials, configure firewall user profiles, and enforce data caps.",
      diagramMermaid: `flowchart LR
    Student[Student on Campus] -->|Purchase Data Pass| Web[SmartGrid Next.js Web]
    Web -->|Paystack Charge| Paystack[Paystack API]
    Paystack -->|Verified Webhook| Worker[Provisioning Worker]
    Worker -->|RouterOS Socket API| Router[MikroTik Campus Core Gateway]
    Router -->|Unlock WiFi Access| Student`,
      adrs: [
        {
          title: "ADR-01: MikroTik Socket API vs RADIUS Server",
          context: "Needed low-complexity, instant account creation without the operational overhead of maintaining a distributed FreeRADIUS cluster across independent campus hostels.",
          decision: "Directly interfaced with MikroTik RouterOS API via persistent connection pooling.",
          tradeOffs: "Requires local router API exposure; enabled deployment in hours with sub-5-second activation."
        }
      ],
      challenges: [
        {
          problem: "Frequent campus power cuts dropped active router connections mid-transaction.",
          solution: "Implemented an idempotent queue in Redis with automatic reconciliation when the router heartbeat resumes.",
          outcome: "100% of paid passes provisioned correctly upon router reconnection."
        }
      ]
    },
    readmeContent: `# SmartGridNG Core Engine

Campus Internet & Hotspot Automation Platform.
`,
    learnedSkills: [
      "MikroTik RouterOS API integration and network bandwidth management",
      "Fault-tolerant job scheduling for recurring network provisioning",
      "Network reliability engineering in infrastructure-constrained environments"
    ]
  },
  {
    slug: "susejmeters-smart-metering",
    title: "SusejMeters: Smart Prepaid Electricity Token & OTA Vending",
    tagline: "End-to-end smart metering platform eliminating physical vending agents with real-time STS token generation and OTA loading.",
    overview: "Architected an end-to-end smart prepaid electricity metering platform. Enables consumers to purchase electricity tokens online with instant over-the-air (OTA) transmission to smart meters via cellular/IoT channels, cutting utility operating costs by 40%.",
    featured: false,
    category: "Full-Stack",
    visibility: "private",
    date: "2021 - 2023",
    version: "v1.8.0",
    metrics: [
      { label: "Utility Cost Reduction", value: "40%", trend: "Eliminated field visits" },
      { label: "Token Generation", value: "Real-Time", trend: "STS-compliant" },
      { label: "Meters Managed", value: "5,000+", trend: "Across estates" }
    ],
    techStack: [
      { name: "React.js", category: "framework" },
      { name: "Node.js & Express", category: "framework", highlight: true },
      { name: "MySQL", category: "database" },
      { name: "IoT Cellular Protocols", category: "infra", highlight: true },
      { name: "REST APIs", category: "tool" }
    ],
    productionUrl: "https://susejmeters.org",
    architecture: {
      summary: "Secure payment gateway triggers the Standard Transfer Specification (STS) token generation module. Tokens are converted into encrypted payloads and dispatched directly to the smart meter's cellular modem.",
      diagramMermaid: `flowchart LR
    User[Consumer] -->|Buy Units Online| Portal[SusejMeters Web]
    Portal -->|Card Payment| Gateway[Payment Gateway]
    Gateway -->|Token Request| STS[STS Token Engine]
    STS -->|20-digit Encrypted Token| Dispatch[OTA Dispatch Service]
    Dispatch -->|GSM / Cellular Push| Meter[Smart Electricity Meter]`,
      adrs: [
        {
          title: "ADR-01: Direct OTA Token Loading vs SMS-Only Delivery",
          context: "Elderly consumers struggled entering 20-digit STS tokens on keypad meters, leading to high support ticket volume.",
          decision: "Equipped meters with cellular modems to allow direct over-the-air token insertion via remote command.",
          tradeOffs: "Higher modem hardware cost per meter; cut customer support inquiries by 75%."
        }
      ],
      challenges: [
        {
          problem: "Inconsistent cellular network coverage across residential estates delayed token deliveries.",
          solution: "Implemented store-and-forward queuing: tokens are held in state until meter sends an hourly MQTT heartbeat.",
          outcome: "Zero lost tokens and guaranteed eventual credit application."
        }
      ]
    },
    readmeContent: `# SusejMeters Platform

Prepaid utility token vending and remote telemetry.
`,
    learnedSkills: [
      "Standard Transfer Specification (STS) electricity token encryption",
      "IoT remote telemetry and over-the-air meter firmware loading",
      "Estate utility management and multi-tenant electricity billing"
    ]
  }
];

export const learningRadar: LearningRadarItem[] = [
  {
    id: "radar-1",
    name: "Autonomous Agent Tool Calling & Generative UI",
    category: "AI & Agents",
    status: "mastered",
    description: "Designing structured tool-calling interfaces, real-time token streaming, and dynamic UI rendering directly from LLMs using Vercel AI SDK and LangChain.",
    level: 95,
    recentMilestone: "Shipped embedded sales representative agent on SellersPro with PgVector RAG and sub-200ms latency."
  },
  {
    id: "radar-2",
    name: "AWS Interactive Video (IVS) & Multi-Bitrate HLS",
    category: "Cloud & Infra",
    status: "mastered",
    description: "Ultra-low latency live streaming architectures, multi-resolution DRM transcoding via AWS Elemental MediaConvert, and Tus resumable uploads.",
    level: 92,
    recentMilestone: "Delivered sub-2s broadcast latency across 10,000+ simultaneous viewers on Fenris Media."
  },
  {
    id: "radar-3",
    name: "PgVector & Semantic Search Ingestion",
    category: "Databases & Storage",
    status: "mastered",
    description: "Optimizing PostgreSQL PgVector HNSW indexing, hybrid lexical/semantic queries, and embeddings compaction.",
    level: 90,
    recentMilestone: "Integrated multi-tenant catalogue vector search on PostgreSQL with zero hallucination rate."
  },
  {
    id: "radar-4",
    name: "Pipecat-AI & Speech-to-Speech Real-Time Agents",
    category: "AI & Agents",
    status: "experimenting",
    description: "Building zero-lag conversational voice agents using WebRTC audio streaming, Whisper transcription, and low-latency voice synthesis.",
    level: 78,
    recentMilestone: "Engineered embeddable voice-chat widget deployed on client websites with natural speech turn-taking."
  },
  {
    id: "radar-5",
    name: "Cloudflare Edge AI & Workers Inference",
    category: "Cloud & Infra",
    status: "experimenting",
    description: "Edge-deployed LLM inference using Cloudflare Workers and VectorizeDB to eliminate backend cold-starts.",
    level: 82,
    recentMilestone: "Achieved global p95 latency under 200ms for edge AI feature endpoints."
  },
  {
    id: "radar-6",
    name: "Raft Consensus Protocol & Distributed Storage in Go",
    category: "Distributed Systems",
    status: "experimenting",
    description: "Building an educational 3-node Raft consensus cluster in Go to master leader election, log replication, and split-brain resolution.",
    level: 75,
    recentMilestone: "Implemented heartbeat timers and deterministic leader election across simulated network partitions."
  }
];

export const tilNotes: TILNote[] = [
  {
    id: "til-1",
    date: "Sep 2026",
    title: "Why PgVector in PostgreSQL Beats Standalone Pinecone for Multi-Tenant SaaS",
    tags: ["PostgreSQL", "PgVector", "AI", "SaaS"],
    summary: "In a multi-tenant platform like SellersPro, synchronizing inventory edits between PostgreSQL and a standalone vector database creates eventual consistency lag and dual-system authorization overhead. Using PgVector allows querying embeddings with WHERE merchant_id = $1 in a single ACID query with sub-20ms latency.",
    codeSnippet: `-- Filter by tenant and rank by cosine similarity in one ACID query
SELECT id, title, price, 1 - (embedding <=> $1) AS similarity
FROM products
WHERE merchant_id = $2 AND in_stock = true
ORDER BY embedding <=> $1
LIMIT 5;`,
    impact: "Eliminated external vector DB costs and guaranteed real-time product inventory sync."
  },
  {
    id: "til-2",
    date: "Aug 2026",
    title: "Slashing AWS Video Transcoding Costs by 28% via Event-Driven SNS",
    tags: ["AWS", "MediaConvert", "Cost Optimization", "Go"],
    summary: "Running persistent EC2 clusters running FFmpeg daemons results in massive waste during off-peak hours. Migrating to serverless AWS Elemental MediaConvert triggered automatically by S3 upload SNS events meant we only pay for the exact seconds of video transcoded.",
    impact: "Slashed monthly cloud infrastructure spend by 28% for 500+ hours of video/month."
  },
  {
    id: "til-3",
    date: "Jul 2026",
    title: "Preventing Memory Leaks in GNOME Shell Compositor Extensions",
    tags: ["Linux", "GNOME", "GJS", "Kernel"],
    summary: "When building desktop shell extensions in GJS on HP Dev One workstations, signal listener disconnects that reference outer closure variables create circular C-pointer bindings that survive garbage collection. Explicitly nullifying reference bindings in disable() keeps compositor memory permanently flat.",
    impact: "Ensured rock-solid memory stability for 50,000+ HP Dev One developer machines."
  }
];
