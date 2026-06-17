"use client"

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react"
import { GitHubCalendar } from "react-github-calendar"
import type { Activity } from "react-github-calendar"

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

type Tech = {
  name: string
  icon: string
  invert?: boolean
  aliases?: string[]
}

type Category = {
  label: string
  items: Tech[]
}

const categories: Category[] = [
  {
    label: "API & Server",
    items: [
      { name: "Go", icon: `${CDN}/go/go-original-wordmark.svg`, aliases: ["Gin", "Golang"] },
      { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg`, aliases: ["Node", "NodeJS"] },
      { name: "Express", icon: `${CDN}/express/express-original.svg`, invert: true, aliases: ["Express.js", "ExpressJS"] },
      { name: "Elysia", icon: `${CDN}/bun/bun-original.svg` },
      { name: "Swift", icon: `${CDN}/swift/swift-original.svg` },
    ],
  },
  {
    label: "Client",
    items: [
      { name: "React", icon: `${CDN}/react/react-original.svg`, aliases: ["React Native"] },
      { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true, aliases: ["NextJS", "Next"] },
      { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg`, aliases: ["TS"] },
      { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg`, aliases: ["JS"] },
      { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg`, aliases: ["TailwindCSS", "Tailwind CSS"] },
      { name: "Framer Motion", icon: `${CDN}/framermotion/framermotion-original.svg`, invert: true },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg`, aliases: ["Postgres"] },
      { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
      { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
      { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg`, aliases: ["Mongo"] },
      { name: "DynamoDB", icon: `${CDN}/dynamodb/dynamodb-original.svg` },
      { name: "Prisma", icon: `${CDN}/prisma/prisma-original.svg`, invert: true },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
      { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`, invert: true, aliases: ["Amazon Web Services", "S3"] },
      { name: "Azure", icon: `${CDN}/azure/azure-original.svg`, aliases: ["Microsoft Azure"] },
      { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
      { name: "Cloudflare", icon: `${CDN}/cloudflare/cloudflare-original.svg` },
      { name: "CI/CD", icon: `${CDN}/githubactions/githubactions-original.svg`, invert: true },
    ],
  },
  {
    label: "Craft",
    items: [
      { name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
      { name: "HTML5", icon: `${CDN}/html5/html5-original.svg`, aliases: ["HTML"] },
      { name: "CSS3", icon: `${CDN}/css3/css3-original.svg`, aliases: ["CSS"] },
      { name: "Git", icon: `${CDN}/git/git-original.svg` },
    ],
  },
]

const goldTheme = {
  dark: ["#161820", "#0d3630", "#145e50", "#1e8a78", "#2db8a0"],
}

function boostLevels(data: Activity[]): Activity[] {
  const counts = data.map((d) => d.count).filter((c) => c > 0)
  if (counts.length === 0) return data

  counts.sort((a, b) => a - b)
  const p25 = counts[Math.floor(counts.length * 0.25)]
  const p50 = counts[Math.floor(counts.length * 0.50)]
  const p75 = counts[Math.floor(counts.length * 0.75)]

  return data.map((d): Activity => {
    if (d.count === 0) return { ...d, level: 0 }
    if (d.count <= p25) return { ...d, level: 1 }
    if (d.count <= p50) return { ...d, level: 2 }
    if (d.count <= p75) return { ...d, level: 3 }
    return { ...d, level: 4 }
  })
}

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00")
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

const projectCounts: Record<string, number> = {
  "Go": 4,
  "Node.js": 2,
  "Express": 2,
  "Elysia": 1,
  "Swift": 1,
  "React": 7,
  "Next.js": 8,
  "TypeScript": 9,
  "JavaScript": 3,
  "Tailwind": 6,
  "Framer Motion": 5,
  "PostgreSQL": 4,
  "Redis": 3,
  "MongoDB": 1,
  "Prisma": 2,
  "Docker": 3,
  "AWS": 3,
  "Azure": 2,
  "Vercel": 5,
  "CI/CD": 3,
  "Figma": 3,
  "Python": 2,
  "Git": 11,
}

function TechCard({ tech }: { tech: Tech }) {
  const count = projectCounts[tech.name] ?? 0
  return (
    <a
      href={count > 0 ? "/#projects" : undefined}
      className="group flex items-center justify-between gap-3 px-3.5 py-3 bg-card border border-border/40 hover:border-border transition-colors duration-200"
    >
      <div className="flex flex-col min-w-0">
        <span className="text-sm text-foreground truncate">{tech.name}</span>
        {count > 0 && (
          <span className="text-[10px] text-muted-foreground/60 mt-0.5 tracking-wide">
            {count} project{count > 1 ? "s" : ""}
          </span>
        )}
      </div>
      <img
        src={tech.icon}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={`h-5 w-5 object-contain flex-shrink-0 ${tech.invert ? "icon-invert opacity-80" : ""}`}
      />
    </a>
  )
}

function CategoryBlock({ category }: { category: Category }) {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-muted-foreground/70 mb-4 font-medium">
        {category.label}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {category.items.map((tech) => (
          <TechCard key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  const [top3, setTop3] = useState<Activity[]>([])

  useEffect(() => {
    fetch("https://github-contributions-api.jogruber.de/v4/harsha-cpp?y=last")
      .then((r) => r.json())
      .then((data) => {
        const sorted = [...(data.contributions as Activity[])]
          .filter((d) => d.count > 0)
          .sort((a, b) => b.count - a.count)
          .slice(0, 3)
        setTop3(sorted)
      })
      .catch(() => {})
  }, [])

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
            <span className="cursive-text">stack</span>
          </h2>
        </div>

        <div className="space-y-12 mb-24 max-w-6xl mx-auto">
          {categories.map((cat) => (
            <CategoryBlock key={cat.label} category={cat} />
          ))}
        </div>

        <div className="flex flex-col items-center w-full">
          <p className="text-xs text-muted-foreground/40 mb-6 tracking-[0.25em] uppercase font-medium">
            GitHub Contributions
          </p>
          <div className="w-full overflow-x-auto flex justify-center">
            <GitHubCalendar
              username="harsha-cpp"
              colorScheme="dark"
              theme={goldTheme}
              blockSize={14}
              blockMargin={4}
              fontSize={13}
              transformData={boostLevels}
            />
          </div>

          {top3.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {top3.map((day, i) => (
                <div
                  key={day.date}
                  className="flex items-center gap-2 px-3 py-1.5 border border-border/40 bg-card"
                >
                  {/* rank badge */}
                  <span className="text-[10px] font-medium text-primary font-space-grotesk tracking-widest">
                    #{i + 1}
                  </span>
                  {/* arrow pointing up toward graph */}
                  <svg
                    className="text-primary flex-shrink-0 -rotate-90"
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                  >
                    <path d="M5 1L9 9H1L5 1Z" fill="currentColor" />
                  </svg>
                  <span className="text-xs text-foreground/80 font-space-grotesk">
                    {formatDate(day.date)}
                  </span>
                  <span className="text-xs text-primary font-medium font-space-grotesk">
                    {day.count} commits
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
