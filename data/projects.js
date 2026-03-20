export const projects = [
  {
    slug: "ai-ops-assistant",
    title: "AI Ops Assistant",
    description:
      "Production-style incident analysis platform that ingests raw logs, fingerprints events, groups incidents, runs deterministic rule-based findings, and generates evidence-cited AI explanations.",
    stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Docker", "React", "Groq"],
    links: {
      demo: "https://aiops.rawasi.app",
      github: "https://github.com/MohamedTamer94/ai-ops-assistant",
    },
    category: "product",
    featured: true,
    showOnHome: true,
    highlights: [
      "Sustains 5k–7.7k events/sec ingestion throughput",
      "Multi-tenant RBAC with org/project isolation",
      "Deterministic detection first (rules + grouping), AI only for explainability",
    ],
    hasCaseStudy: true,
    case_study: {
      challenge: "Production logs are noisy and unstructured. Engineers waste hours manually correlating incidents across systems, and existing tools either lack intelligence or require complex setup. The gap between raw log data and actionable insights costs teams significant debugging time.",
      solution: "Built an intelligent incident analysis platform with a deterministic-first approach: logs are parsed, normalized, and fingerprinted to group similar events. A two-pass findings engine detects critical patterns (OOM, DB failures, timeouts) before any AI is involved. The LLM layer only generates explanations grounded in detected evidence, never inventing facts.",
      metrics: [
        { label: "Ingestion Throughput", value: "7.7k evt/sec", description: "Sustained on 100k log batch" },
        { label: "Batch Processing", value: "500k logs", description: "Processed in 98.8s without failure" },
        { label: "Error Rate", value: "0%", description: "During k6 load testing (10 users, 30s)" },
      ],
      architecture: "FastAPI async backend with Celery workers for ingestion. PostgreSQL for structured data, Redis as broker/cache. Deterministic fingerprinting groups incidents, findings engine runs rule-based detection, and Groq provides evidence-cited explanations. Frontend in React with server-driven filtering.",
      impact: "Enables engineers to investigate production incidents in minutes instead of hours. The system clearly identifies its own bottleneck (aggregation queries) — a honest engineering signal that points to next optimization steps like pre-aggregation caching or materialized views.",
    },
    images: [
      { url: "/screenshots/ai-ops/Architecture2.png", alt: "Architecture" },
      { url: "/screenshots/ai-ops/New_Ingestion.png", alt: "New Ingestion" },
      { url: "/screenshots/ai-ops/Ingestion_Overview.png", alt: "Ingestion Overview" },
      { url: "/screenshots/ai-ops/Ingestion_Logs.png", alt: "Ingestion Logs" },
      { url: "/screenshots/ai-ops/Log_Groups.png", alt: "Log Groups" },
      { url: "/screenshots/ai-ops/Ingestion_Finding.png", alt: "Ingestion Finding" },
    ],
  },
  {
    slug: "rawasi",
    title: "Rawasi",
    description:
      "Multi-tenant LMS platform serving Tarbya Rahima Academy with 2,000+ active users — featuring tenant provisioning, integrated payments, exams, courses, and content management.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Paymob", "Docker"],
    links: {
      demo: "https://rawasi.app",
      github: "",
    },
    category: "product",
    featured: true,
    showOnHome: true,
    highlights: [
      "Schema-per-tenant isolation serving real production tenant since 5 months",
      "2,000+ users onboarded, active exams and courses",
      "Integrated Paymob payments with subscription management",
      "Complete course, exam, and article management system",
    ],
    hasCaseStudy: true,
    case_study: {
      challenge: "Educational organizations need branded learning platforms with isolated data, custom configurations, and integrated payment systems. Building from scratch is expensive, and existing solutions lack flexibility for Egyptian market needs like Paymob integration.",
      solution: "Engineered a robust multi-tenant SaaS platform from the ground up with schema-per-tenant isolation, complete course/exam/article management, and integrated Paymob payments. Deployed for Tarbya Rahima Academy, onboarding 2,000+ users over 5 months.",
      metrics: [
        { label: "Users Onboarded", value: "2,000+", description: "Active students and teachers" },
        { label: "Production Time", value: "5 months", description: "Stable operation since launch" },
        { label: "Payment Integration", value: "Paymob", description: "Egyptian market payment gateway" },
      ],
      architecture: "Next.js frontend with full type safety, Node.js backend with clean service architecture, PostgreSQL with schema-per-tenant isolation pattern, Paymob for payments. Complete admin dashboard for content management.",
      impact: "Enabled Tarbya Rahima Academy to launch their digital learning platform without infrastructure overhead. Students can access courses, take exams, and manage subscriptions seamlessly. The platform is ready to onboard additional tenants.",
    },
    images: [
      { url: "/screenshots/rawasi/logo.png", alt: "Logo" },
    ]
  },
  {
    slug: "knowbase-ai",
    title: "Knowbase AI",
    description:
      "Multi-tenant document intelligence platform enabling organizations to upload documents, generate per-tenant embeddings, and chat with context-aware AI — with embeddable widgets for external websites.",
    stack: ["FastAPI", "PostgreSQL", "Chroma", "SentenceTransformers", "React", "Groq"],
    links: {
      github: "https://github.com/MohamedTamer94/KnowbaseAI",
    },
    category: "product",
    featured: true,
    showOnHome: true,
    highlights: [
      "Per-tenant isolation with Chroma collections",
      "End-to-end RAG pipeline: upload → chunk → embed → retrieve → answer",
      "Embeddable widget with CORS support for external sites",
      "JWT auth + RBAC + rate limiting",
    ],
    hasCaseStudy: false,
    case_study: null,
    images: [
      { url: "/screenshots/knowbase/chat.png", alt: "Chat" },
      { url: "/screenshots/knowbase/dashboard.png", alt: "Dashboard" },
      { url: "/screenshots/knowbase/documents.png", alt: "Documents" },
      { url: "/screenshots/knowbase/widgets.png", alt: "Widgets" },
    ]
  },
  {
    slug: "raftkv",
    title: "RaftKV",
    description:
      "A compact, educational implementation of a replicated key-value store using the Raft consensus algorithm — with leader election, log replication, commit index, and multi-node cluster support.",
    stack: ["Go", "HTTP/JSON"],
    links: {
      demo: "",
      github: "https://github.com/MohamedTamer94/RaftKV",
    },
    category: "infrastructure",
    featured: true,
    showOnHome: true,
    highlights: [
      "Full Raft core: leader election, AppendEntries replication, commit application",
      "Multi-node local cluster via launcher script",
      "Clean internal separation: raft core / HTTP API / KV state machine",
      "Clear documentation of limitations (no persistence, no snapshots/compaction)",
    ],
    hasCaseStudy: true,
    case_study: {
      challenge: "Understanding Raft consensus algorithm requires reading academic papers and complex production codebases. There's a gap between theory and practical implementation — most educational examples are either too simplistic or too complex.",
      solution: "Built a minimal, readable Raft implementation that demonstrates the core algorithm end-to-end: leader election, heartbeats, log replication, and commit application to a key-value store. Includes a cluster launcher script to run multi-node setups locally.",
      metrics: [
        { label: "Core Raft Features", value: "Full", description: "Election + replication + commit" },
        { label: "Node Support", value: "Multi-node", description: "Cluster launcher for testing" },
        { label: "Code Focus", value: "Educational", description: "Prioritizes clarity over performance" },
      ],
      architecture: "Go-based implementation with three main components: Raft core (state transitions, election, replication), HTTP API (KV operations, status, RPCs), and in-memory KV store as state machine. Communication via HTTP/JSON for simplicity.",
      impact: "Provides a clear, runnable reference for developers learning Raft. The codebase is small enough to understand in a few hours while still demonstrating all core consensus concepts.",
    }
  },
  {
    slug: "mtse-cms",
    title: "MTSE CMS",
    description:
      "Production CMS for a Egyptian telecom solutions company (mtse.com.eg) — enabling administrators to manage products and solutions content through a role-based admin backend. Paid client work, maintained live.",
    stack: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    links: {
      demo: "https://mtse.com.eg",
      github: "",
    },
    category: "client-work",
    featured: false,
    showOnHome: false,
    highlights: [
      "Live production website serving real business",
      "Admin + superadmin roles for content management",
      "End-to-end ownership: DB schema → backend → UI → deployment",
      "Maintained post-delivery",
    ],
    hasCaseStudy: false,
    case_study: null,
    images: [
      { url: "/screenshots/mtse/Homepage.png", alt: "Homepage" },
    ]
  },
  {
    slug: "fibonacci-grpc",
    title: "Fibonacci gRPC",
    description:
      "Mini distributed system demonstrating gRPC service patterns: API gateway + Fibonacci service with Redis caching + stats service with fire-and-forget updates, retries, and concurrency safety.",
    stack: ["Go", "gRPC", "Redis", "Docker"],
    links: {
      demo: "",
      github: "https://github.com/MohamedTamer94/Fibonacci-gRPC",
    },
    category: "infrastructure",
    featured: false,
    showOnHome: false,
    highlights: [
      "gRPC unary RPCs with clean proto definitions",
      "Redis caching with TTL for demonstration",
      "Fire-and-forget stats updates with retry logic",
      "Docker Compose for full stack deployment",
    ],
    hasCaseStudy: false,
    case_study: null
  },
  {
    slug: "task-manager",
    title: "Task Manager",
    description:
      "Full-stack CRUD application built for engineering assessment — demonstrating layered architecture, validation (Joi + Mongoose), filtering/pagination, and clean frontend state management with TanStack Query.",
    stack: ["Node.js", "Express", "MongoDB", "React", "TanStack Query", "Tailwind"],
    links: {
      demo: "",
      github: "https://github.com/MohamedTamer94/task-manager",
    },
    category: "project",
    featured: false,
    showOnHome: false,
    highlights: [
      "Layered backend (routes/controllers/services/models)",
      "Filters (status/priority/date) + search + pagination",
      "Soft deletion + partial updates",
      "React Query for server-state management",
    ],
    hasCaseStudy: false,
    case_study: null
  },
  {
    slug: "pdf-inspect",
    title: "PDF Inspect",
    description:
      "Lightweight RAG experiment demonstrating PDF ingestion, embedding with FAISS, and semantic Q&A — built as a foundation for understanding retrieval pipelines.",
    stack: ["FastAPI", "FAISS", "SentenceTransformers", "React", "Docker"],
    links: {
      demo: "",
      github: "https://github.com/MohamedTamer94/PDF-Inspect",
    },
    category: "experiment",
    featured: false,
    showOnHome: false,
    highlights: [
      "Background processing with progress tracking",
      "FAISS semantic search + embeddings",
      "Docker Compose for one-command setup",
    ],
    hasCaseStudy: false,
    case_study: null
  },
  {
    slug: "mindweave",
    title: "MindWeave",
    description:
      "AI-assisted learning platform that adapts study materials to learner profiles via interactive assessment — 1st place winner at ZPreneurs entrepreneurship competition. Currently paused.",
    stack: ["Flask", "React", "MySQL", "Groq"],
    links: {
      demo: "",
      github: "",
    },
    category: "project",
    featured: false,
    showOnHome: false,
    highlights: [
      "Assessment-driven personalization (rule-based)",
      "LLM generation for summaries, explanations, quizzes",
      "1st place at ZPreneurs entrepreneurship competition",
      "End-to-end full stack implementation",
    ],
    hasCaseStudy: false,
    case_study: null
  },
  {
    slug: "chatplus",
    title: "ChatPlus",
    description:
      "Simple WebSocket-based chat server in Go with TLS support and chat history — built to understand real-time communication patterns.",
    stack: ["Go", "WebSockets", "TLS"],
    links: {
      demo: "",
      github: "https://github.com/MohamedTamer94/ChatPlus",
    },
    category: "experiment",
    featured: false,
    showOnHome: false,
    highlights: [
      "WebSocket server with room-based chat",
      "TLS support for secure connections",
      "Chat history persistence",
    ],
    hasCaseStudy: false,
    case_study: null
  }
];