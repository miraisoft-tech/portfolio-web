import { getSystemPrompt } from '../../../lib/aiKnowledge';
import { streamText } from 'ai';
import { google } from '@ai-sdk/google';
import { openai } from '@ai-sdk/openai';

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const systemPrompt = getSystemPrompt();

    // Check for Google Gemini Key
    const hasGoogleKey = Boolean(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
    // Check for OpenAI Key
    const hasOpenAIKey = Boolean(process.env.OPENAI_API_KEY);

    if (hasGoogleKey) {
      const result = streamText({
        model: google('gemini-1.5-flash') as any,
        system: systemPrompt,
        messages,
      });
      return result.toDataStreamResponse();
    }

    if (hasOpenAIKey) {
      const result = streamText({
        model: openai('gpt-4o-mini') as any,
        system: systemPrompt,
        messages,
      });
      return result.toDataStreamResponse();
    }

    // Fallback: Intelligent Simulated Streaming Engine based on context
    // This guarantees the AI agent always works smoothly even before API keys are added in .env!
    const latestUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || '';

    let reply = `### Samuel's AI Assistant
Results-driven Senior Software Engineer and Tech Lead with 8+ years of end-to-end ownership across full-stack, AI, IoT, and cloud-native platforms. Proven track record of architecting scalable systems from real-time live-streaming infrastructure to AI-powered SaaS products serving thousands of active users. Brings deep technical expertise in modern web frameworks, LLM integration, and cloud DevOps, paired with strong leadership of cross-functional engineering teams. Execution-focused, shipping reliably in high-stakes environments across Lagos, Canada, and globally distributed teams.

- **Fenris Media**: Scaled live video infrastructure to **10,000+ concurrent viewers** (<2s latency) on Go & AWS IVS, reducing cloud transcoding bills by **28%**.
- **SellersPro.app**: Multi-tenant commerce SaaS featuring autonomous AI sales reps powered by **PgVector RAG** and Paystack settlement.
- **Hewlett-Packard (HP Inc.)**: Developed Linux OS performance patches and GNOME extensions planned to reach **50,000+ developer workstations** (hardware line discontinued by HP).
- **Contact**: Reach Samuel directly at [adeselukatobasamuel@yahoo.com](mailto:adeselukatobasamuel@yahoo.com) or book a technical chat.`;

    if (latestUserMessage.includes('pitch') || latestUserMessage.includes('recruiter') || latestUserMessage.includes('who is')) {
      reply = `### ⚡ 30-Second Executive Pitch for Recruiters
Samuel (SmartRay) is a proven **Senior Software Engineer and Tech Lead** with **8+ years of production experience** delivering high-reliability backends, cloud architectures, and autonomous AI applications:

1. **Proven Scale**: Scaled live streaming to **10,000+ concurrent viewers** with sub-2-second latency using Go and AWS IVS at Fenris Media.
2. **Global Enterprise Impact**: Optimized Linux kernel and desktop compositors planned to reach **50,000+ HP Dev One developer workstations** at Hewlett-Packard (HP Inc., device subsequently discontinued).
3. **AI & Modern RAG Mastery**: Shipped production RAG pipelines (PgVector + OpenAI + LangChain) powering multi-tenant SaaS platforms like **SellersPro.app**.
4. **Cloud Economics**: Slashed enterprise media transcoding costs by **28%** by migrating to serverless event-driven AWS MediaConvert.

🎯 **Availability**: Open to Senior / Staff Software Engineer, Tech Lead, or Distributed Systems roles. Email him at [adeselukatobasamuel@yahoo.com](mailto:adeselukatobasamuel@yahoo.com)!`;
    } else if (latestUserMessage.includes('fenris') || latestUserMessage.includes('stream') || latestUserMessage.includes('video')) {
      reply = `### 🎥 Fenris Live-Streaming Architecture Breakdown
At **Fenris Media Limited**, Samuel served as **Tech Lead / Software Engineer** architecting their video broadcast and monetization platform from scratch:

- **Ultra-Low Latency Ingest**: Integrated **AWS Interactive Video Service (IVS)** delivering live RTMP video to 10,000+ concurrent viewers with **<2.0s broadcast latency**.
- **Adaptive Transcoding & DRM**: Automated multi-bitrate HLS packaging (1080p, 720p, 480p) with AES-128 DRM encryption using **AWS Elemental MediaConvert**.
- **28% Cloud Cost Reduction**: Migrated idle EC2 FFmpeg servers to serverless SNS event-driven MediaConvert jobs, eliminating idle server costs.
- **Resilient Uploads**: Implemented **Tus resumable chunked protocol** in Go to guarantee uninterrupted video uploads over fluctuating mobile connections.`;
    } else if (latestUserMessage.includes('sellerspro') || latestUserMessage.includes('rag') || latestUserMessage.includes('vector')) {
      reply = `### 🛍️ SellersPro AI & PgVector Architecture
**SellersPro (sellerspro.app)** is Samuel's production multi-tenant commerce SaaS platform powering Nigerian merchants:

- **Autonomous Sales Rep Widget**: Embeddable on any merchant website via a single script tag, offering 24/7 product consultation and checkout support.
- **PgVector In-Database RAG**: Rather than paying for and synchronizing an external Pinecone instance, Samuel integrated the **pgvector** extension directly into PostgreSQL. Product embeddings and inventory counts are queried in a single ACID transaction with <180ms latency.
- **Automated Paystack Reconciliation**: Webhook-driven event pipelines with Redis idempotency locks guarantee zero double-charging or fulfillment lag.`;
    } else if (latestUserMessage.includes('private') || latestUserMessage.includes('nda')) {
      reply = `### 🔒 Why Some Projects Are Marked "Private / NDA"
Projects like the **Fenris Media Live-Streaming Engine** and **HP Dev One Linux Internals** were engineered for private enterprise clients and corporate employers (Hewlett-Packard Inc. and Fenris Media).

- **What is Confidential**: The proprietary business source code, internal credentials, and client IP.
- **What is Public**: Samuel has published comprehensive **system architecture diagrams, Architecture Decision Records (ADRs), data flow models, and performance benchmarks** with client consent to demonstrate high-level engineering craftsmanship.`;
    } else if (latestUserMessage.includes('stack') || latestUserMessage.includes('tech') || latestUserMessage.includes('skill')) {
      reply = `### 🛠️ Samuel's Core Technical Matrix
With 8+ years across the stack, Samuel's core competencies include:

- **Languages**: TypeScript, JavaScript, Go (Golang), Python, PHP, C/C++, Bash
- **AI & LLM Systems**: OpenAI API, LangChain, LlamaIndex, PgVector, VectorizeDB, Pipecat-AI (Speech-to-Speech), RAG pipelines
- **Frameworks**: Next.js (App Router), React 19, NestJS, Node.js, Express, Laravel
- **Cloud & DevOps**: AWS (IVS, Elemental MediaConvert, SQS, DynamoDB, EC2, S3), Cloudflare Workers & AI, Docker, GitHub Actions CI/CD
- **Databases & Messaging**: PostgreSQL, Redis, MySQL, RabbitMQ, MQTT IoT protocols`;
    }

    // Return custom streaming response
    const encoder = new TextEncoder();
    const stream = new ReadableStream({
      async start(controller) {
        // Stream out in simulated chunks for typing effect
        const words = reply.split(' ');
        for (let i = 0; i < words.length; i++) {
          const chunk = (i === 0 ? '' : ' ') + words[i];
          controller.enqueue(encoder.encode(`0:${JSON.stringify(chunk)}\n`));
          await new Promise((resolve) => setTimeout(resolve, 20));
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'x-vercel-ai-data-stream': 'v1',
      },
    });
  } catch (err: any) {
    console.error('Chat API Error:', err);
    return new Response(
      JSON.stringify({ error: err?.message || 'Internal Server Error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
