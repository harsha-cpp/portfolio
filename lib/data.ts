// ─────────────────────────────────────────────────────────────
// Centralized data layer - single source of truth for all content
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Harsha Tummalapalli",
  title: "Software Development Engineer",
  url: "https://harsha16x.in",
  github: "https://github.com/harsha-cpp",
  linkedin: "https://www.linkedin.com/in/sri-harsha-tummalapalli/",
  email: "sriharshatummalapalli@gmail.com",
  twitter: "@harsha16x",
  location: "Hyderabad, India",
  phone: "+91 8328663371",
  cal: "harshatummalapalli",
} as const

// ── Projects ────────────────────────────────────────────────

export interface ProjectScreenshot {
  src: string
  alt: string
  title: string
  caption: string
  width: number
  height: number
}

export interface Project {
  slug: string
  title: string
  tagline: string
  description: string
  tags: string[]
  technologies?: string[]
  codeLink: string | null
  liveLink: string | null
  prototypeLink?: string
  featured: boolean
  overview?: string
  focusAreas?: string[]
  gallery?: {
    note?: string
    images: ProjectScreenshot[]
  }
  commitRange?: {
    first: string
    last: string
    count: number
    branch: string
  }
  architecture?: {
    src: string
    alt: string
    width: number
    height: number
    caption: string
  }
  // Case study fields (optional - only for featured projects)
  caseStudy?: {
    hero: string // one-line hero subtitle
    role?: string
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
    "slug": "blade",
    "title": "Blade",
    "tagline": "Healthcare data protection at the point of entry.",
    "description": "A Chrome extension and Python backend that check outgoing Gmail messages and block sensitive patient data in web inputs.",
    "tags": [
      "FastAPI",
      "React",
      "Chrome MV3",
      "PostgreSQL",
      "Celery",
      "Redis"
    ],
    "technologies": ["TypeScript", "Python", "React", "FastAPI", "PostgreSQL", "Redis", "Celery", "spaCy", "Tesseract", "PaddleOCR", "Docker", "MinIO", "Vite", "Git"],
    "codeLink": "https://github.com/harsha-cpp/blade",
    "liveLink": null,
    "featured": true,
    "gallery": {
      "note": "Demo dashboard with synthetic data. Counts and verification results are illustrative.",
      "images": [
        {
          "src": "/gallery/blade/01-overview.webp",
          "title": "Scan overview",
          "caption": "Daily scan outcomes, detected data types and where sharing was stopped.",
          "alt": "Blade overview with daily scan outcomes, detected identifier types, sender activity and blocked websites in a synthetic healthcare workspace.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/blade/02-quarantine-review.webp",
          "title": "Quarantine review",
          "caption": "Review held messages, masked findings and matched rules before release.",
          "alt": "Blade quarantine queue beside a selected message with masked patient identifiers, matched policy, attachment and release or reject actions.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/blade/03-policy-simulation.webp",
          "title": "Policy simulation",
          "caption": "Preview how ordered rules handle a message before changing the policy.",
          "alt": "Blade policy editor with ordered rules and a message simulator comparing saved and edited verdicts for sample risk, recipients and entity types.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/blade/04-audit-history.webp",
          "title": "Audit history",
          "caption": "Trace scan decisions and admin changes through a hash-chained log.",
          "alt": "Blade audit log listing scan decisions, device enrollments, policy changes and member actions with actors, timestamps and illustrative hash-chain verification.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/blade/05-device-management.webp",
          "title": "Device management",
          "caption": "Enroll each extension separately and revoke access one device at a time.",
          "alt": "Blade device management with an enrollment form and devices showing labels, enrolling users, last activity, expiry and individual revoke actions.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/blade/06-team-access.webp",
          "title": "Team access",
          "caption": "Invite teammates and set access for owners, admins, analysts and viewers.",
          "alt": "Blade team access with an invitation form and member table showing roles, account status, email verification and two-factor authentication.",
          "width": 1600,
          "height": 1000
        }
      ]
    },
    "architecture": {
      "src": "/architecture/blade.svg",
      "alt": "Blade architecture showing Gmail and a local web input guard, the Chrome service worker, FastAPI detection and policy checks, PostgreSQL, Redis, Celery and attachment storage.",
      "width": 1380,
      "height": 1011,
      "caption": "Gmail scans go to the backend. Web input checks run locally."
    },
    "caseStudy": {
      "hero": "Catch patient data before it leaves the workflow.",
      "timeline": "03 Sep 2026 - 30 Sep 2026",
      "stack": [
        "Chrome MV3",
        "React",
        "FastAPI",
        "PostgreSQL",
        "Celery",
        "Redis",
        "spaCy"
      ],
      "sections": [
        {
          "number": "01",
          "title": "Two paths for patient data",
          "content": "Gmail sends wait for a backend scan of the message and attachments. On other websites, the extension checks typed and pasted text locally using the same rule pack. Only masked findings and the site hostname leave that input path for audit."
        },
        {
          "number": "02",
          "title": "Deep scans without tying up the API",
          "content": "FastAPI imports the Python detection library directly. Queued attachment scans run in Celery through Redis, with bytes staged in MinIO. Text extraction uses Tesseract first and PaddleOCR for difficult pages. The worker reuses the same detection library."
        },
        {
          "number": "03",
          "title": "A verdict you can trace",
          "content": "Tenant policies determine the response, from a warning to quarantine or blocking. Device enrollment and a hash-chained audit log record who triggered a scan and its outcome. On 119 labelled documents, the detection engine reached 98.26% entity F1."
        }
      ]
    },
    "overview": "A browser safety check for teams handling patient data. It scans outgoing email and attachments, and stops sensitive information from being entered into other websites. Admins set the rules and review blocked activity.",
    "focusAreas": [
      "Full stack",
      "Backend",
      "Security"
    ],
    "commitRange": {
      "first": "2026-09-03T23:08:59Z",
      "last": "2026-09-30T16:40:15Z",
      "count": 9,
      "branch": "main"
    }
  },
  {
    "slug": "entity",
    "title": "Entity",
    "tagline": "Matching businesses across noisy, multilingual records.",
    "description": "An offline retrieval and ranking pipeline that resolves business records using bounded candidate search, LightGBM and sparse neural reranking.",
    "tags": [
      "Python",
      "LightGBM",
      "PyTorch",
      "MiniLM",
      "Native Indexes"
    ],
    "technologies": ["Python", "LightGBM", "PyTorch", "MiniLM", "NumPy", "pandas", "Git"],
    "codeLink": "https://github.com/harsha-cpp/entity",
    "liveLink": null,
    "featured": true,
    "architecture": {
      "src": "/architecture/entity.svg",
      "alt": "Entity architecture showing TSV inputs, normalization, disk indexes, bounded retrieval, pair features, LightGBM, offline MiniLM reranking, decisions and validated exports.",
      "width": 1380,
      "height": 1002,
      "caption": "Bounded retrieval and offline scoring, with the candidate set preserved for validation."
    },
    "caseStudy": {
      "hero": "Find the same business when the records disagree.",
      "timeline": "25 Sep 2026 - 27 Sep 2026",
      "stack": [
        "Python",
        "LightGBM",
        "PyTorch",
        "MiniLM",
        "Native Indexes"
      ],
      "sections": [
        {
          "number": "01",
          "title": "Find the right pairs first",
          "content": "Names, addresses and identifiers vary across sources. Normalization and disk-backed posting lists narrow the search to bounded candidate pools. Bridge lookups recover additional candidates before pair features capture name, address and numeric evidence."
        },
        {
          "number": "02",
          "title": "Spend model time where it matters",
          "content": "LightGBM scores candidate pairs with context about competing owners. A sparse route applies offline MiniLM scoring and an adapter to selected pairs. Decision rules use that evidence without forcing a match for records that should remain singletons."
        },
        {
          "number": "03",
          "title": "Freeze the run, verify the result",
          "content": "The latest completed submission covered 1,732,544 test references and received a team-reported portal macro F0.5 of 0.970. Both validators passed. Versioned models, source hashes and the exact scored candidates preserve the run separately from later local experiments."
        }
      ]
    },
    "overview": "A system that figures out whether messy business records describe the same company. Built for the Amazon ML Challenge, it handles different names, incomplete addresses and multiple languages, then exports matches that can be checked and reproduced.",
    "focusAreas": [
      "ML",
      "Data pipelines"
    ],
    "commitRange": {
      "first": "2026-09-25T05:50:56Z",
      "last": "2026-09-27T18:14:59Z",
      "count": 71,
      "branch": "main"
    }
  },
  {
    "slug": "openlinear",
    "title": "OpenLinear",
    "tagline": "From a task on the board to a pull request.",
    "description": "A desktop workspace connecting a kanban board to local coding agents, isolated git worktrees and GitHub pull requests.",
    "tags": [
      "Next.js",
      "Tauri",
      "Express.js",
      "PostgreSQL",
      "Prisma",
      "OpenCode SDK"
    ],
    "technologies": ["TypeScript", "React", "Next.js", "Tauri", "Node.js", "Express.js", "PostgreSQL", "Prisma", "OpenCode SDK", "Docker", "Git"],
    "codeLink": "https://github.com/kaizen403/openlinear",
    "liveLink": "https://openlinear.tech",
    "featured": true,
    "gallery": {
      "note": "Demo workspace with sample data.",
      "images": [
        {
          "src": "/gallery/openlinear/release-board.png",
          "title": "Release board",
          "caption": "Issues, priorities and agent execution in one board.",
          "alt": "OpenLinear release board with issue columns, priorities, assignees and agent execution controls.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/openlinear/implementation-plan.png",
          "title": "Implementation plan",
          "caption": "Dependency waves and acceptance checks before work starts.",
          "alt": "OpenLinear implementation plan with dependency waves, acceptance checks and an approval action.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/openlinear/issue-detail.png",
          "title": "Issue detail",
          "caption": "Task context, acceptance checks and a pull request in one view.",
          "alt": "OpenLinear issue detail with an agent conclusion, acceptance checks, pull request status and team discussion.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/openlinear/code-review.png",
          "title": "Code review",
          "caption": "Review the diff, check verification and send feedback to the agent.",
          "alt": "OpenLinear code review with a file diff, verification checks and feedback for the coding agent.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/openlinear/project-knowledge.png",
          "title": "Project knowledge",
          "caption": "Shared conventions and procedures for agent runs.",
          "alt": "OpenLinear project knowledge showing approved engineering conventions and procedures.",
          "width": 1600,
          "height": 1000
        },
        {
          "src": "/gallery/openlinear/ai-chat.png",
          "title": "AI chat",
          "caption": "A project-scoped conversation with release context.",
          "alt": "OpenLinear AI chat showing a release-readiness conversation in the demo workspace.",
          "width": 1600,
          "height": 1000
        }
      ]
    },
    "architecture": {
      "src": "/architecture/openlinear.svg",
      "alt": "OpenLinear architecture showing the Tauri board, local execution sidecar, coding agent, git worktrees, cloud metadata API, PostgreSQL and GitHub.",
      "width": 1380,
      "height": 1038,
      "caption": "Local code execution, cloud task metadata and live updates to the board."
    },
    "caseStudy": {
      "hero": "A task becomes code, with every tool call visible.",
      "timeline": "05 Feb 2026 - 22 Oct 2026",
      "stack": [
        "Next.js",
        "Tauri",
        "Express.js",
        "PostgreSQL",
        "Prisma",
        "OpenCode SDK"
      ],
      "sections": [
        {
          "number": "01",
          "title": "From ticket to pull request",
          "content": "Select a task, run the agent and get a pull request. The Tauri app brings the board and execution into one workspace. Tool calls, file edits and progress stream back over SSE so you can follow the work as it happens."
        },
        {
          "number": "02",
          "title": "Parallel tasks, separate branches",
          "content": "Parallel and queue modes give each task its own git worktree. Changes stay separate until the batch merge, where conflicts can be skipped or stop the run. Combined mode uses one worktree and agent session for the selected tasks."
        },
        {
          "number": "03",
          "title": "Local execution, shared context",
          "content": "An Express sidecar manages OpenCode on your machine. The cloud API stores tasks, teams and repository metadata in PostgreSQL through Prisma. GitHub OAuth connects the repositories and PR workflow, while model credentials stay with the local agent."
        }
      ]
    },
    "overview": "A desktop project manager that can act on your backlog. Pick a task on the board and a local coding agent works on the repository, streams its progress and opens a GitHub pull request for review.",
    "focusAreas": [
      "Full stack",
      "Backend",
      "AI"
    ],
    "commitRange": {
      "first": "2026-02-05T18:19:33Z",
      "last": "2026-10-22T03:48:53Z",
      "count": 736,
      "branch": "dev"
    }
  },
  {
    "slug": "carmen-anpr",
    "title": "Vahaan Watch",
    "tagline": "Plate matching that keeps working without a connection.",
    "description": "ANPR surveillance built at the request of A.P. Police, with local watchlist matching, field alerts and reliable event sync.",
    "tags": [
      "Next.js",
      "Hono",
      "Node.js",
      "PostgreSQL",
      "SQLite",
      "Tesseract"
    ],
    "technologies": ["TypeScript", "React", "Next.js", "Node.js", "Hono", "PostgreSQL", "SQLite", "Tesseract", "ffmpeg", "Docker", "Turborepo", "Git"],
    "codeLink": "https://github.com/kaizen403/vahaan-watch",
    "liveLink": null,
    "featured": true,
    "architecture": {
      "src": "/architecture/vahaan-watch.svg",
      "alt": "Vahaan Watch architecture showing camera capture, the edge agent, tablet alerts, a local SQLite hitlist, the event outbox, Hono API, PostgreSQL and admin portal.",
      "width": 1380,
      "height": 973,
      "caption": "Matches happen at the edge. Events sync when the connection returns."
    },
    "caseStudy": {
      "hero": "Plate matching built at the request of A.P. Police.",
      "timeline": "21 Mar 2026 - 15 Apr 2026",
      "stack": [
        "Next.js",
        "Hono",
        "Node.js",
        "PostgreSQL",
        "SQLite",
        "Tesseract",
        "ffmpeg"
      ],
      "sections": [
        {
          "number": "01",
          "title": "A match cannot wait for the network",
          "content": "The workstation agent captures video with ffmpeg, reads plates and checks a local SQLite copy of the hitlist. A match triggers a nearby tablet alert over WebSocket. Field devices can keep matching when the central API is unreachable."
        },
        {
          "number": "02",
          "title": "Sync without counting twice",
          "content": "Detections and match events enter a local outbox before upload. Retry and backoff handle connection failures. Stable event IDs and idempotent ingestion let devices send an event again without creating a second central record."
        },
        {
          "number": "03",
          "title": "One view across field devices",
          "content": "A Hono API manages device registration, hitlists and event ingestion in PostgreSQL. The Next.js portal brings alerts, watchlists, analytics and workstation health into one view. Versioned hitlist sync keeps local copies aligned with central updates."
        }
      ]
    },
    "overview": "A vehicle surveillance system built at the request of A.P. Police. Devices read number plates from camera feeds, check local watchlists and alert a nearby tablet. A central dashboard brings device health and detections together when a connection is available.",
    "focusAreas": [
      "Full stack",
      "Backend",
      "Computer vision"
    ],
    "commitRange": {
      "first": "2026-03-21T04:04:21Z",
      "last": "2026-04-15T11:26:33Z",
      "count": 134,
      "branch": "main"
    }
  },
  {
    slug: "verin",
    title: "Verin",
    tagline: "Cloud-native document management built for audit trails",
    description:
      "Cloud-native document management system. React + Go (Chi) monorepo with PostgreSQL, Redis-backed async jobs via Asynq, and S3-compatible storage. Signed direct-to-storage uploads, OCR and preview generation queued through a Go worker, role-based access (admin/editor/auditor), and OpenAPI-generated client. Built for p95 latency.",
    tags: ["Go", "React", "PostgreSQL", "Redis", "S3", "Asynq"],
    technologies: ["TypeScript", "React", "Go", "Chi", "PostgreSQL", "Redis", "Asynq", "S3", "Docker"],
    codeLink: "https://github.com/harsha-cpp/verin",
    liveLink: null,
    featured: false,
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
      "Built as a Founding Engineer at Memolane. Designed the full stack architecture (Go API, Next.js, PostgreSQL, Redis), wrote Azure Bicep IaC, and deployed to Azure Container Apps. Built a production recruitment platform, hired 11 people, and set up the engineering org from scratch.",
    tags: ["Go", "PostgreSQL", "Redis", "Azure", "Next.js", "Turborepo"],
    codeLink: null,
    liveLink: "https://memolane.in",
    featured: false,
    caseStudy: {
      hero: "Building a consumer product and engineering org from zero",
      role: "Founding Engineer",
      timeline: "Jan 2026 - Aug 2026",
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
    technologies: ["Go", "Gin", "Next.js", "React", "TypeScript", "PostgreSQL", "SQLC", "Flutter"],
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
    tags: ["TypeScript", "Go", "Neo4j"],
    codeLink: "https://github.com/harsha-cpp/medbridge",
    liveLink: "https://medbridge-two.vercel.app",
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
    title: "AI Engineer",
    company: "TOPO AI",
    period: "Sep 2026 - Present",
    location: "Shenzhen, China",
    tags: ["AI Agents", "OpenAI", "Anthropic", "OCR", "Verilog"],
    link: "https://topolabs.ai",
    achievements: [
      "Built an AI verification copilot using OpenAI and Anthropic models to generate and validate Verilog test modules, integrating with proprietary test tooling for automated feedback loops.",
      "Designed an OCR and parsing pipeline that converts chipset diagrams and test specifications across 20+ document formats into structured context for the agent, reducing verification turnaround by approximately 50% compared with prompting LLMs directly.",
    ],
  },
  {
    title: "Founding Engineer",
    company: "Memolane",
    period: "Jan 2026 - Aug 2026",
    location: "Hyderabad, India",
    tags: ["Go", "PostgreSQL", "Redis", "Azure", "CI/CD"],
    link: "https://memolane.in",
    achievements: [
      "Designed the full stack architecture (Go API, Next.js, PostgreSQL, Redis), wrote Azure Bicep IaC, and deployed to Azure Container Apps with automated CI/CD.",
      "Built a production recruitment platform. Shipped careers portal, applicant tracking, interview scheduling, admin panel with RBAC, email automation via Azure Communication Services. 34 migrations, 100+ commits.",
      "Ran hiring end-to-end solo. Sourced, interviewed, and selected 11 employees across engineering, design, and operations. Automated status emails and onboarding communications.",
      "Architected the consumer product. Authored the technical blueprint, benchmarked 35 features against market leaders, designed the database schema with pgvector for AI recall, and planned an 8-week roadmap.",
      "Set up team operations. Configured the product monorepo (Bun, Turborepo, Elysia, Next.js, Expo), established GitHub workflows, and structured daily sprint execution with task assignment across 5 engineers.",
    ],
  },
  {
    title: "Backend Developer",
    company: "Digital Fortress",
    period: "Aug 2025 - Jan 2026",
    location: "Amaravathi, India",
    tags: ["Go", "Gin", "REST APIs", "Observability"],
    link: "https://digitalfortress.in",
    achievements: [
      "Built a Go/Gin backend for mess reviews and complaints serving a student population of 10,000+, streamlining daily institutional operations.",
      "Designed RESTful APIs with structured routing, middleware, validation, and centralized error handling.",
      "Built concurrent Go services using goroutine worker pools and added structured logging, health checks, and alerting to reduce incident triage time.",
      "Mentored a junior developer building the companion mobile app, guiding API integration, code reviews, and release.",
    ],
  },
  {
    title: "User Experience Designer",
    company: "Netts Mobility",
    period: "Apr 2025 - Jul 2025",
    location: "Bengaluru, India",
    tags: ["Figma", "UI/UX", "Prototyping"],
    link: "https://netts.in",
    achievements: [
      "Designed 20+ responsive web and mobile screens covering landing pages, product showcases, EV station locators, pricing, and service documentation, translating UX research and wireframes into high-fidelity Figma prototypes.",
      "Owned the UI/UX design pipeline across desktop and mobile, from user research and information architecture to final handoff.",
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
        name: "MacBook Pro M5 Pro (24GB, 2TB)",
        description: "Primary development machine with 24GB of memory and 2TB of storage.",
      },
      {
        name: "BenQ EW270Q (200Hz)",
        description: "External display for the desk setup, running at 200Hz.",
      },
      {
        name: "Apple Magic Keyboard",
        description: "Keyboard for the desk setup.",
      },
      {
        name: "Apple Magic Trackpad",
        description: "Trackpad for the desk setup.",
      },
      {
        name: "Razer BlackShark V2 X",
        description: "Headset for calls, work and listening.",
      },
      {
        name: "Green Soul Jupiter Pro",
        description: "Chair for the workspace.",
      },
      {
        name: "WHOOP Peak 5.0",
        description: "Daily wearable.",
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
      {
        name: "Claude Code",
        description: "Coding agent for implementation, debugging and code review.",
      },
      {
        name: "Conductor",
        description: "Workspace tool for coordinating coding-agent work.",
      },
      {
        name: "Grokbot",
        description: "AI assistant in my workflow.",
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
        description: "Music for work and downtime. Lo-fi, electronic, and video game soundtracks on rotation.",
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
