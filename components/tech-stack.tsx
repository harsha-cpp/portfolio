"use client"

/* eslint-disable @next/next/no-img-element */
import { GitHubCalendar } from "react-github-calendar"

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const row1 = [
  { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
  { name: "Go", icon: `${CDN}/go/go-original-wordmark.svg` },
  { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
  { name: "Python", icon: `${CDN}/python/python-original.svg` },
  { name: "React", icon: `${CDN}/react/react-original.svg` },
  { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
  { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: "Express", icon: `${CDN}/express/express-original.svg`, invert: true },
  { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: "Prisma", icon: `${CDN}/prisma/prisma-original.svg`, invert: true },
]

const row2 = [
  { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
  { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`, invert: true },
  { name: "Azure", icon: `${CDN}/azure/azure-original.svg` },
  { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
  { name: "Cloudflare", icon: `${CDN}/cloudflare/cloudflare-original.svg` },
  { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
  { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
  { name: "Git", icon: `${CDN}/git/git-original.svg` },
  { name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
]

const goldTheme = {
  dark: ["#161820", "#2a2210", "#4d3e1a", "#7a6428", "#b8943e"] as const,
}

function Marquee({
  icons,
  direction = "left",
}: {
  icons: typeof row1
  direction?: "left" | "right"
}) {
  const doubled = [...icons, ...icons]

  return (
    <div className="marquee-track relative overflow-hidden">
      <div
        className={`flex items-center gap-14 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        }`}
        style={{ width: "max-content" }}
      >
        {doubled.map((tech, i) => (
          <div
            key={`${tech.name}-${i}`}
            className="flex flex-col items-center gap-2.5 flex-shrink-0"
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className={`h-10 w-10 object-contain transition-opacity ${
                tech.invert ? "icon-invert" : ""
              }`}
              loading="lazy"
              draggable={false}
            />
            <span className="text-[11px] text-muted-foreground/50 font-medium tracking-wide">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="shimmer-text text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-8 mb-24">
          <Marquee icons={row1} direction="left" />
          <Marquee icons={row2} direction="right" />
        </div>

        <div className="flex flex-col items-center">
          <p className="text-xs text-muted-foreground/40 mb-6 tracking-[0.25em] uppercase font-medium">
            GitHub Contributions
          </p>
          <div className="max-w-full overflow-x-auto pb-2">
            <GitHubCalendar
              username="harsha-cpp"
              colorScheme="dark"
              theme={goldTheme}
              blockSize={13}
              blockMargin={4}
              fontSize={13}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
