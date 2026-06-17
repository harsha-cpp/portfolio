// ─────────────────────────────────────────────────────────────
// Centralized data layer - single source of truth for all content
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Harsha Tummalapalli",
  title: "Software Development Engineer",
  url: "https://harshatummalapalli.com",
  github: "https://github.com/harsha-cpp",
  linkedin: "https://www.linkedin.com/in/sri-harsha-tummalapalli/",
  email: "sriharshatummalapalli@gmail.com",
  twitter: "@harsha16x",
  location: "Hyderabad, India",
  phone: "+91 8328663371",
  cal: "harshatummalapalli",
} as const

// ── Projects ────────────────────────────────────────────────

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  codeLink: string | null
  liveLink: string | null
  prototypeLink?: string
  featured: boolean
  // Case study fields (optional - only for featured projects)
  caseStudy?: {
    hero: string // one-line hero subtitle
    role: string
    timeline: string
    stack: string[]
    sections: {
      number: string // "01", "02", etc.
      title: string
      content: string // markdown-ish, paragraphs separated by \n\n
    }[]
  }
}

export const projects: Project[] = [
  {
    slug: "openlinear",
    title: "OpenLinear",
    tagline: "AI-powered project management that writes code for you",
    description:
      "Open-source desktop app that bridges a Linear-style kanban board with AI coding agents. One-click task execution that generates pull requests with working code. Per-task git worktree isolation for parallel execution, real-time agent visibility with live tool calls and file edits, and GitHub-native OAuth + PR workflows via the OpenCode SDK sidecar.",
    tags: ["Next.js", "Tauri", "Express.js", "PostgreSQL", "Prisma"],
    codeLink: "https://github.com/harsha-cpp/openlinear",
    liveLink: "https://openlinear.tech",
    featured: true,
    caseStudy: {
      hero: "An open-source bridge between project management and AI code generation",
      role: "Solo Engineer & Designer",
      timeline: "Mar 2026 - Present",
      stack: ["Next.js", "Tauri", "Express.js", "PostgreSQL", "Prisma", "OpenCode SDK", "GitHub OAuth"],
      sections: [
        {
          number: "01",
          title: "Why I Built This",
          content:
            "Every developer I know has the same workflow: read a Linear ticket, context-switch to the IDE, write the code, push a PR, go back to Linear and move the card. That's four context switches per task.\n\nI wanted to collapse that into one click. Select a task on the board, hit 'Execute,' and get a pull request with working code - reviewed, tested, and ready to merge. Not a copilot that autocompletes lines, but an agent that takes ownership of entire tasks.\n\nThe gap in the market was clear: AI coding tools operate inside editors. Project management tools have no idea code exists. OpenLinear sits in the middle - it understands both your backlog and your codebase.",
        },
        {
          number: "02",
          title: "How It Works",
          content:
            "OpenLinear is a Tauri desktop app (Rust shell, Next.js UI) with an Express.js sidecar running the OpenCode SDK. When you execute a task, the sidecar spins up an isolated git worktree, runs the AI agent against it, and streams tool calls and file edits back to the UI in real-time.\n\nThe kanban board is a full Linear-style project manager - columns, drag-and-drop, labels, priorities, assignments. But every card has an 'Execute' button. Click it and you can watch the agent read files, reason about architecture, write code, and create a PR - all without leaving the app.\n\nGitHub OAuth handles identity. The agent creates PRs under your account. You review the diff right in the app.",
        },
        {
          number: "03",
          title: "Key Decisions",
          content:
            "Tauri over Electron - Electron bundles an entire Chromium. Tauri uses the system webview and ships a ~3MB binary. For a dev tool that sits open all day, memory matters. The tradeoff: fewer cross-platform guarantees on Linux webview rendering. I accepted that because the primary audience is macOS developers.\n\nGit worktree isolation - Rather than having the agent modify your working directory (and potentially break your in-progress work), each task execution creates a fresh worktree. Parallel tasks run in parallel worktrees. This was non-negotiable for trust: if you can't trust the tool not to corrupt your local state, you won't use it.\n\nExpress sidecar over in-process - The OpenCode SDK is a Node process. Tauri's backend is Rust. Instead of bridging FFI, I run Express alongside Tauri and communicate via localhost HTTP. Simpler debugging, independent restarts, and the SDK can evolve without Rust recompilation.",
        },
        {
          number: "04",
          title: "What I Learned",
          content:
            "Building AI-powered developer tools taught me that reliability is the entire product. A flashy demo means nothing if the agent hallucinates a file path 5% of the time. I spent more time on error recovery and rollback logic than on the happy path.\n\nThe hardest UX challenge was transparency. Developers need to trust the agent. Showing live tool calls and file diffs in real-time - not just the final PR - was the difference between 'this is magic' and 'I'd never let this touch my code.'\n\nShipping a desktop app in 2026 is still harder than it should be. Auto-updates, code signing, notarization, platform-specific builds - the infrastructure overhead for a solo developer is significant. But the result is a tool that feels native and fast in a way web apps never will.",
        },
      ],
    },
  },
  {
    slug: "verin",
    title: "Verin",
    tagline: "Cloud-native document management built for audit trails",
    description:
      "Cloud-native document management system. React + Go (Chi) monorepo with PostgreSQL, Redis-backed async jobs via Asynq, and S3-compatible storage. Signed direct-to-storage uploads, OCR and preview generation queued through a Go worker, role-based access (admin/editor/auditor), and OpenAPI-generated client. Built for p95 latency.",
    tags: ["Go", "React", "PostgreSQL", "Redis", "S3", "Asynq"],
    codeLink: "https://github.com/harsha-cpp/verin",
    liveLink: null,
    featured: true,
    caseStudy: {
      hero: "A document management system designed for compliance-first organizations",
      role: "Solo Engineer",
      timeline: "Dec 2025 - Feb 2026",
      stack: ["Go", "Chi", "React", "PostgreSQL", "Redis", "Asynq", "S3", "OpenAPI"],
      sections: [
        {
          number: "01",
          title: "Why I Built This",
          content:
            "Most document management systems are either enterprise monsters (SharePoint, Box) or toy apps that store files in a folder. I wanted something in between: simple enough for a small team, but with real audit trails, role-based access, and async processing.\n\nThe trigger was a compliance project where I needed to track every document version, who accessed it, and when. No existing tool gave me that without a six-figure contract.",
        },
        {
          number: "02",
          title: "How It Works",
          content:
            "The API is Go with Chi router - chosen over Gin for its stdlib-compatible middleware chain. Documents upload directly to S3 via pre-signed URLs (the server never touches the file bytes). Once uploaded, a Redis-backed Asynq job fires for OCR extraction and thumbnail generation.\n\nRole-based access is granular: admin, editor, auditor. Auditors can view documents and access logs but can't modify anything. Every action (view, download, edit, delete) is logged to an immutable audit table with timestamp, user, IP, and action type.\n\nThe React frontend is generated from the OpenAPI spec - types, API client, and request hooks are all auto-generated. Zero drift between backend and frontend contracts.",
        },
        {
          number: "03",
          title: "Key Decisions",
          content:
            "Pre-signed uploads over server proxy - The server never handles file bytes. Clients upload directly to S3 using a pre-signed URL. This eliminated the server as a bandwidth bottleneck and reduced p95 upload latency by 60%. The tradeoff: more complex client-side error handling for multipart uploads.\n\nAsynq over direct processing - OCR and thumbnail generation take 2-8 seconds per document. Processing inline would block the upload response. Asynq (Redis-backed, Go-native) queues these as background jobs with automatic retries. Failed jobs retry 3x with exponential backoff before alerting.\n\nOpenAPI-first development - I wrote the OpenAPI spec before writing any code. The Go server validates requests against the spec at runtime. The React client is generated from it. This front-loaded design time but eliminated an entire class of integration bugs.",
        },
        {
          number: "04",
          title: "What I Learned",
          content:
            "Async job processing changes everything about how you think about user experience. The upload feels instant even though processing happens over 8 seconds. But you need to design for partial states - what does the UI show while OCR is running? What happens if the job fails after the user has already navigated away?\n\nGo's simplicity is its superpower for backend services. No ORM, no magic. sql.DB + hand-written queries + proper error handling. It's verbose but I can read any file and understand exactly what it does. After working in TypeScript ORMs, this felt like fresh air.",
        },
      ],
    },
  },
  {
    slug: "memolane",
    title: "Memolane",
    tagline: "AI-powered memory platform for the moments that matter",
    description:
      "The product I'm building as Founder & CTO. Designed the full stack architecture (Go API, Next.js, PostgreSQL, Redis), wrote Azure Bicep IaC, and deployed to Azure Container Apps. Built a production recruitment platform, hired 11 people, and set up the engineering org from scratch.",
    tags: ["Go", "PostgreSQL", "Redis", "Azure", "Next.js", "Turborepo"],
    codeLink: null,
    liveLink: "https://memolane.in",
    featured: true,
    caseStudy: {
      hero: "Building a consumer product and engineering org from zero",
      role: "Founder & CTO",
      timeline: "Jan 2026 - Present",
      stack: ["Go", "PostgreSQL", "Redis", "Azure Container Apps", "Next.js", "Expo", "Turborepo", "Bun", "Elysia"],
      sections: [
        {
          number: "01",
          title: "Why I Built This",
          content:
            "Every photo app stores images. None of them understand memories. I benchmarked 35 features across market leaders and found the same pattern: storage-first, meaning-last. No one was using AI to surface context - who was there, what happened before and after, how that moment connects to a larger story.\n\nMemolane is built on a simple thesis: your memories have a narrative arc, and technology should help you discover it, not just archive it. The database schema uses pgvector for semantic search across memories - not keyword matching, but meaning matching.",
        },
        {
          number: "02",
          title: "How It Works",
          content:
            "The consumer product is a monorepo: Bun workspace with Turborepo orchestration. Elysia API server, Next.js web app, Expo mobile app - all sharing types and utilities from internal packages.\n\nInfrastructure is Azure-native: Container Apps for the API, Azure Communication Services for email automation, Blob Storage for media, PostgreSQL Flexible Server with pgvector extension. Everything is defined in Bicep IaC and deploys through GitHub Actions CI/CD.\n\nBefore building the consumer product, I built the company itself. The recruitment platform handles the careers portal, applicant tracking, interview scheduling, admin panel with RBAC, and automated status emails. 34 database migrations. 100+ commits. All shipped by me before the first employee started.",
        },
        {
          number: "03",
          title: "Key Decisions",
          content:
            "Go API over Node.js - With pgvector similarity searches, embedding generation, and media processing, the API is CPU-bound. Go's goroutines handle concurrent requests without the event loop bottleneck. I benchmarked both: Go handled 3x the throughput for vector operations.\n\nAzure over AWS - Azure Container Apps give me serverless containers with auto-scaling at a fraction of ECS/Fargate complexity. Communication Services replaced three separate email tools. The student credits didn't hurt either.\n\nMonorepo with Bun - A 5-person engineering team needs to move fast without stepping on each other. The monorepo (Bun + Turborepo) means shared types, atomic PRs across API and frontend, and cached builds that run the full pipeline in under 2 minutes.\n\nBuilding the recruitment platform first - Counter-intuitive, but hiring 11 people through spreadsheets would have been a disaster. Building the internal tool first gave me a production codebase to evaluate candidates against and onboarding flows that ran automatically.",
        },
        {
          number: "04",
          title: "What I Learned",
          content:
            "The hardest part of being a technical founder isn't the code - it's context switching between architecture decisions, hiring interviews, and sprint planning in the same afternoon. You have to be comfortable with nothing being fully 'done' because you're always unblocking someone else.\n\nHiring is engineering. You're designing a system (the team) that needs to handle load (work), scale (new problems), and degrade gracefully (when someone is sick or leaves). The same principles apply.\n\nI learned that infrastructure-as-code isn't optional, it's survival. When I needed to spin up a staging environment for candidate code reviews, it took 10 minutes with Bicep. Without IaC, it would have taken a day.",
        },
      ],
    },
  },
  {
    slug: "unimess-portal",
    title: "UniMess Portal",
    tagline: "Mess management for 10,000+ students",
    description:
      "Backend service handling mess reviews and complaints for 10,000+ students at VIT-AP. Go/Gin API with concurrent request handling, plus a Next.js admin dashboard for real-time monitoring, complaint tracking, and status management.",
    tags: ["Go", "Gin", "Next.js", "TypeScript"],
    codeLink: "https://github.com/harsha-cpp/unimessportal",
    liveLink: "https://unimessportal.vercel.app",
    featured: false,
  },
  {
    slug: "traq",
    title: "TRAQ",
    tagline: "AI-powered traffic intelligence from CCTV",
    description:
      "AI-powered video analytics system that processes CCTV footage from signalized intersections to generate traffic intelligence. Detects and tracks multiple vehicle categories using YOLO and image recognition. Built for IIIT NETRIK.",
    tags: ["Python", "YOLO", "Computer Vision", "AI"],
    codeLink: "https://github.com/harsha-cpp/traq",
    liveLink: null,
    featured: false,
  },
  {
    slug: "medbridge",
    title: "MedBridge",
    tagline: "Medicine surplus sharing between clinics",
    description:
      "Connects clinic networks to share surplus medicines, prevent waste, and eliminate stockouts in real-time.",
    tags: ["TypeScript", "Next.js", "Full-Stack"],
    codeLink: "https://github.com/harsha-cpp/medbridge",
    liveLink: "https://medbridge-two.vercel.app",
    featured: false,
  },
  {
    slug: "carmen-anpr",
    title: "Carmen ANPR Scanner",
    tagline: "License plate recognition from video feeds",
    description:
      "License plate scanner built on Adaptive Recognition's Carmen Video SDK. Upload a video or use your webcam, get plate number, make, model, color, and country.",
    tags: ["TypeScript", "Computer Vision", "SDK Integration"],
    codeLink: "https://github.com/harsha-cpp/carmen-anpr-scanner",
    liveLink: null,
    featured: false,
  },
  {
    slug: "purple-technologies",
    title: "Purple Technologies Landing Page",
    tagline: "IoT solutions company website",
    description:
      "Landing page for an IoT solutions company. Hero sections, company stats, service offerings, contact forms. Built with Qwik for instant interactions.",
    tags: ["Qwik", "Landing Page", "IoT"],
    codeLink: null,
    liveLink: "https://purple-technologies-mu.vercel.app/",
    featured: false,
  },
  {
    slug: "dotpomodoro",
    title: "DOTpomodoro",
    tagline: "Focused productivity timer",
    description:
      "Productivity timer with session tracking, customizable settings, and progress analytics.",
    tags: ["React", "Web App"],
    codeLink: null,
    liveLink: "https://dotpomodoro.space",
    prototypeLink:
      "https://www.figma.com/design/NzTZfZXz3jvBq9wwfupxSZ/DOTpomodoro?node-id=0-1&t=JWbMJDNodExZvuGK-1",
    featured: false,
  },
  {
    slug: "netts-mobility",
    title: "Netts Mobility Website",
    tagline: "EV mobility startup platform",
    description:
      "Company website and React Native mobile app for an EV mobility startup. 15+ screens including ride booking, fleet management, EV station locators, and pricing.",
    tags: ["React Native", "Next.js", "TypeScript"],
    codeLink: null,
    liveLink: "https://netts.in",
    prototypeLink:
      "https://www.figma.com/design/dTVdo4MP7PH1CbsxzzRl1i/Netts-Mobility-Application?node-id=0-1&t=eJmSpHrKWIYMQ511-1",
    featured: false,
  },
  {
    slug: "piggywise",
    title: "Piggywise",
    tagline: "Personal finance tracker",
    description:
      "Personal finance app with expense tracking and budget management. User research, personas, and frontend built from scratch.",
    tags: ["TypeScript", "Next.js", "Finance"],
    codeLink: "https://github.com/harsha-cpp/piggywise",
    liveLink: "https://piggywise-seven.vercel.app",
    featured: false,
  },
]

// ── Experience ──────────────────────────────────────────────

export interface Experience {
  title: string
  company: string
  period: string
  location: string
  tags: string[]
  link: string | null
  achievements: string[]
}

export const experiences: Experience[] = [
  {
    title: "Founder & CTO",
    company: "Memolane",
    period: "Jan 2026 - Present",
    location: "Hyderabad, India",
    tags: ["Go", "PostgreSQL", "Redis", "Azure", "CI/CD"],
    link: "https://memolane.in",
    achievements: [
      "Designed the full stack architecture (Go API, Next.js, PostgreSQL, Redis), wrote Azure Bicep IaC, and deployed to Azure Container Apps with automated CI/CD.",
      "Built a production recruitment platform. Shipped careers portal, applicant tracking, interview scheduling, admin panel with RBAC, email automation via Azure Communication Services. 34 migrations, 100+ commits.",
      "Ran hiring end-to-end solo. Sourced, interviewed, and selected 11 employees across engineering, design, and operations. Automated status emails and onboarding communications.",
      "Architected the consumer product. Authored technical blueprint, benchmarked 35 features against market leaders, designed the DB schema with pgvector for AI recall, and planned a 6-week build roadmap.",
      "Set up team operations. Configured the product monorepo (Bun, Turborepo, Elysia, Next.js, Expo), established GitHub workflows, and structured daily sprint execution with task assignment across 5 engineers.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Digital Fortress",
    period: "Aug 2025 - Jan 2026",
    location: "India",
    tags: ["Go", "Gin", "Next.js", "TypeScript"],
    link: "https://digitalfortress.in",
    achievements: [
      "Built a scalable backend service using Golang (Gin framework) to handle reviews and complaints for 10,000+ students, streamlining daily institutional operations.",
      "Designed RESTful APIs with structured routing, middleware, validation, and centralized error handling.",
      "Developed a Next.js admin dashboard for real-time monitoring, complaint tracking, filtering, and status management.",
      "Monitored development of mobile application simultaneously with junior developer.",
    ],
  },
  {
    title: "Design Intern",
    company: "Netts Mobility",
    period: "Apr 2025 - Jul 2025",
    location: "Bengaluru, India",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://netts.in",
    achievements: [
      "Designed mobile and web interfaces with 20+ interactive screens covering ride booking, fleet management, EV station locators, and pricing flows.",
      "Delivered the complete company website design and collaborated with engineering on implementation.",
    ],
  },
]

// ── Changelog ───────────────────────────────────────────────

export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
}

export const changelog: ChangelogEntry[] = [
  {
    version: "v2.1",
    date: "May 2026",
    changes: [
      "Redesigned hero with text scramble effect and staggered animations",
      "Switched entire theme from gold to teal",
      "Added interactive grid background with hover-activated cells",
      "Redesigned tech stack into categorized boxy cards",
      "Redesigned contact section into 2-column layout",
      "Added live IST clock and active grid counter",
      "Switched to fully boxy/sharp design language",
      "Added command palette, guestbook, and case study pages",
      "Custom scrollbar with teal gradient",
      "Monster Energy footer tribute",
    ],
  },
  {
    version: "v2.0",
    date: "Apr 2026",
    changes: [
      "Full content overhaul, added Memolane, Digital Fortress experience",
      "Added OpenLinear, Verin, TRAQ, MedBridge, Carmen ANPR projects",
      "New dark theme with warm gold accent",
      "Updated skills from GitHub profile",
    ],
  },
  {
    version: "v1.4",
    date: "Aug 2025",
    changes: [
      "Added messaging system with AWS SES",
      "Integrated Cal.com booking calendar",
    ],
  },
  {
    version: "v1.3",
    date: "Jul 2025",
    changes: [
      "Enhanced project showcase layout",
      "Improved hover effects",
    ],
  },
  {
    version: "v1.2",
    date: "Jun 2025",
    changes: [
      "Added interactive skills visualization",
      "Implemented smooth scroll navigation",
    ],
  },
  {
    version: "v1.1",
    date: "Mar 2025",
    changes: [
      "Portfolio is born",
      "Details added and deployed",
    ],
  },
]

// ── Navigation ──────────────────────────────────────────────

export const NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Experience", href: "/#experience" },
  { name: "Stack", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Contact Me", href: "/#contact" },
] as const

export const SPECIAL_PAGES = [
  { name: "Workspace", href: "/uses", description: "Tools, gear, and software I use daily" },
  { name: "Now", href: "/now", description: "What I'm currently working on" },
  { name: "Guestbook", href: "/guestbook", description: "Leave a message" },
  { name: "Colophon", href: "/colophon", description: "How this site was built" },
  { name: "Changelog", href: "/changelog", description: "Version history of this site" },
] as const

// ── Uses Page Data ──────────────────────────────────────────

export interface UsesItem {
  name: string
  description: string
  link?: string
}

export interface UsesSection {
  number: string
  title: string
  subtitle: string
  items: UsesItem[]
}

export const usesData: UsesSection[] = [
  {
    number: "01",
    title: "Hardware & Setup",
    subtitle: "The physical workspace that powers everything",
    items: [
      {
        name: "MacBook Air M2 (15\", 16GB)",
        description: "Primary machine. Silent, fanless, handles Docker containers and multiple processes without thermal throttling. 16GB is the sweet spot for running databases, dev servers, and an IDE simultaneously.",
      },
      {
        name: "Lenovo ThinkVision 24\" 144Hz",
        description: "External monitor for the desk. High refresh for smooth scrolling through codebases and UI work. 24 inches is the right size for keeping everything in peripheral vision.",
      },
      {
        name: "OnePlus Nord Buds 3 Pro",
        description: "Active noise cancellation for deep work sessions. Quick switch between devices. Good enough audio quality that I forget they're wireless.",
      },
      {
        name: "Logitech MX Master 3S for Mac",
        description: "The scroll wheel alone is worth it. Infinite scroll for long codebases, horizontal scroll for wide tables. Side buttons mapped to Mission Control and window management.",
      },
      {
        name: "IKEA BEKANT Standing Desk",
        description: "Sit-stand desk. I alternate every 90 minutes. The electric motor remembers two heights. No excuses not to stand.",
      },
    ],
  },
  {
    number: "02",
    title: "Development Tools",
    subtitle: "The software I write code in, every day",
    items: [
      {
        name: "Ghostty",
        description: "GPU-accelerated terminal emulator. Native on macOS, fast rendering, clean typography. Replaced every other terminal I've tried.",
        link: "https://ghostty.org",
      },
      {
        name: "Zed",
        description: "Code editor built in Rust. Native performance, multiplayer editing, built-in terminal. My primary editor for Rust and Go projects where speed matters.",
        link: "https://zed.dev",
      },
      {
        name: "Cursor",
        description: "AI-native code editor. The tab completion and inline chat are genuinely useful for boilerplate generation and refactoring. Main editor for TypeScript projects.",
        link: "https://cursor.sh",
      },
      {
        name: "Codex",
        description: "OpenAI's coding agent. Use it for large-scale refactors and generating test suites. Works best when you give it precise, scoped instructions.",
      },
      {
        name: "OpenCode",
        description: "Terminal-based AI coding agent. Runs in the terminal, understands project context, delegates to sub-agents. Powers most of my automation workflows.",
        link: "https://opencode.ai",
      },
      {
        name: "Docker Desktop",
        description: "Local development databases all run in containers. docker-compose up and the entire stack is ready. No installing databases on the host machine.",
      },
      {
        name: "openUsage",
        description: "Utility for checking API usage limits across providers. Keeps me from hitting rate limits mid-flow.",
      },
      {
        name: "VSCodium",
        description: "Open-source VS Code without telemetry. Use it for quick edits and when I need the extension ecosystem without the Microsoft tracking.",
        link: "https://vscodium.com",
      },
    ],
  },
  {
    number: "03",
    title: "CLI & Productivity",
    subtitle: "Terminal tools and workflow accelerators",
    items: [
      {
        name: "zsh + Oh My Zsh",
        description: "Shell with plugins for git aliases, autocompletions, and syntax highlighting. The git plugin alone saves hundreds of keystrokes per day.",
      },
      {
        name: "Bun",
        description: "JavaScript runtime and toolkit. Faster than Node for scripts, built-in bundler and test runner. Use it for monorepo tooling at Memolane.",
        link: "https://bun.sh",
      },
      {
        name: "pnpm",
        description: "Package manager. Strict dependency resolution, content-addressable storage, and workspace support for monorepos. npm feels slow after pnpm.",
        link: "https://pnpm.io",
      },
      {
        name: "npm",
        description: "Still use it for global installs and quick prototypes where pnpm's strictness is overkill.",
      },
      {
        name: "gh (GitHub CLI)",
        description: "Create PRs, review issues, check CI status from the terminal. gh pr create with a template is faster than the web UI.",
        link: "https://cli.github.com",
      },
      {
        name: "Raycast",
        description: "Spotlight replacement. Clipboard history, window management, snippets, and custom scripts. The calculator and color picker alone justify it.",
        link: "https://raycast.com",
      },
    ],
  },
  {
    number: "04",
    title: "Apps & Services",
    subtitle: "The daily-driver apps outside the editor",
    items: [
      {
        name: "Firefox",
        description: "Primary browser. Privacy-focused, great DevTools, container tabs for separating work and personal contexts. Chromium-free by choice.",
        link: "https://firefox.com",
      },
      {
        name: "Notion",
        description: "Knowledge base and long-form writing. Meeting notes, technical specs, PRDs, decision logs. Not my task manager, but my thinking tool.",
        link: "https://notion.so",
      },
      {
        name: "Discord",
        description: "Developer communities, async collaboration, and voice calls with the team. Better than Slack for open-source community management.",
      },
      {
        name: "Telegram (OpenClaw)",
        description: "Quick messaging and OpenClaw community channels. Lightweight, fast, good bot ecosystem for notifications.",
      },
      {
        name: "Cal.com",
        description: "Scheduling. Open-source Calendly alternative. Connected to my portfolio for booking calls. Automatic timezone detection.",
        link: "https://cal.com",
      },
      {
        name: "Apple Music",
        description: "Background music for deep work. Spatial audio with the Nord Buds. Lo-fi, electronic, and video game soundtracks on rotation.",
      },
      {
        name: "NordVPN",
        description: "VPN for security on public networks and accessing region-locked documentation. Always-on when working from cafes.",
        link: "https://nordvpn.com",
      },
    ],
  },
]

// ── Colophon Data ───────────────────────────────────────────

export const colophon = {
  stack: [
    { name: "Next.js 16", role: "Framework", detail: "App Router, React Server Components, Turbopack" },
    { name: "React 19", role: "UI Library", detail: "Server Components, Suspense, streaming SSR" },
    { name: "TypeScript 5.9", role: "Language", detail: "Strict mode, no any, no ts-ignore" },
    { name: "Tailwind CSS 3.4", role: "Styling", detail: "Utility-first, custom design tokens, dark theme" },
    { name: "Framer Motion 12", role: "Animation", detail: "Page transitions, scroll reveals, layout animations" },
    { name: "Vercel", role: "Hosting", detail: "Edge network, preview deployments, analytics" },
    { name: "AWS SES", role: "Email", detail: "Contact form delivery, transactional emails" },
    { name: "Cal.com", role: "Scheduling", detail: "Embedded calendar for booking calls" },
  ],
  fonts: [
    { name: "Lexend", role: "Body text", detail: "Designed for improved reading proficiency. Variable weight, clean geometry." },
    { name: "Funnel Display", role: "Hero name", detail: "Display font for the primary heading. Bold, distinctive presence." },
    { name: "Space Grotesk", role: "Section headings", detail: "Geometric sans-serif for 'Tech Stack' and accent headings." },
  ],
  colors: [
    { name: "Background", value: "hsl(220 8% 4%)", swatch: "#0a0b0d", detail: "Near-black with a cool blue-gray tint" },
    { name: "Primary / Teal", value: "hsl(172 50% 45%)", swatch: "#2db8a0", detail: "Cool teal accent - buttons, links, emphasis" },
    { name: "Foreground", value: "hsl(0 0% 93%)", swatch: "#ededed", detail: "Off-white text for comfortable reading" },
    { name: "Muted", value: "hsl(220 3% 48%)", swatch: "#787a7d", detail: "Secondary text, descriptions, metadata" },
    { name: "Card", value: "hsl(220 6% 8%)", swatch: "#131416", detail: "Elevated surface for cards and dialogs" },
    { name: "Border", value: "hsl(220 5% 14%)", swatch: "#222326", detail: "Subtle separation, low-contrast borders" },
  ],
  philosophy: [
    "Dark-only. No light mode toggle - the design was conceived in darkness and lives there.",
    "Content over chrome. Every animation earns its milliseconds. No motion for motion's sake.",
    "Hardcoded content. No CMS, no database for portfolio content. Data lives in TypeScript files with full type safety.",
    "Performance is a feature. Zero layout shift. Minimal JavaScript. Server-rendered where possible.",
    "The site is the resume. Every detail - from font choice to error handling - demonstrates engineering taste.",
  ],
}
