"use client"

/* eslint-disable @next/next/no-img-element */
import { GitHubCalendar } from "react-github-calendar"

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons"

const row1 = [
  { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
  { name: "Go", icon: `${CDN}/go/go-original-wordmark.svg` },
  { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
  { name: "Python", icon: `${CDN}/python/python-original.svg` },
  { name: "Swift", icon: `${CDN}/swift/swift-original.svg` },
  { name: "React", icon: `${CDN}/react/react-original.svg` },
  { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg`, invert: true },
  { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
  { name: "Express", icon: `${CDN}/express/express-original.svg`, invert: true },
  { name: "HTML5", icon: `${CDN}/html5/html5-original.svg` },
  { name: "CSS3", icon: `${CDN}/css3/css3-original.svg` },
  { name: "Tailwind", icon: `${CDN}/tailwindcss/tailwindcss-original.svg` },
  { name: "Framer Motion", icon: `${CDN}/framermotion/framermotion-original.svg`, invert: true },
]

const row2 = [
  { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
  { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
  { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
  { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
  { name: "DynamoDB", icon: `${CDN}/dynamodb/dynamodb-original.svg` },
  { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
  { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`, invert: true },
  { name: "Azure", icon: `${CDN}/azure/azure-original.svg` },
  { name: "Vercel", icon: `${CDN}/vercel/vercel-original.svg`, invert: true },
  { name: "Cloudflare", icon: `${CDN}/cloudflare/cloudflare-original.svg` },
  { name: "Git", icon: `${CDN}/git/git-original.svg` },
  { name: "Figma", icon: `${CDN}/figma/figma-original.svg` },
  { name: "Prisma", icon: `${CDN}/prisma/prisma-original.svg`, invert: true },
]

const noLogoSkills = [
  "CI/CD",
  "User Research",
  "Prototyping",
  "Design Systems",
]

const goldTheme = {
  dark: ["#161820", "#2a2210", "#4d3e1a", "#7a6428", "#b8943e"] as const,
}

function IconSet({ icons }: { icons: typeof row1 }) {
  return (
    <div className="flex items-center gap-14 flex-shrink-0 pr-14">
      {icons.map((tech) => (
        <div
          key={tech.name}
          className="flex flex-col items-center gap-2.5 flex-shrink-0"
        >
          <img
            src={tech.icon}
            alt={tech.name}
            className={`h-10 w-10 object-contain ${tech.invert ? "icon-invert" : ""}`}
            draggable={false}
          />
          <span className="text-[11px] text-muted-foreground/50 font-medium tracking-wide">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  )
}

function Marquee({
  icons,
  direction = "left",
}: {
  icons: typeof row1
  direction?: "left" | "right"
}) {
  return (
    <div className="marquee-track relative overflow-hidden">
      <div
        className={
          direction === "left"
            ? "flex animate-marquee-left"
            : "flex animate-marquee-right"
        }
      >
        <IconSet icons={icons} />
        <IconSet icons={icons} />
        <IconSet icons={icons} />
        <IconSet icons={icons} />
      </div>
    </div>
  )
}

export default function TechStack() {
  return (
    <section id="skills" className="py-24 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-20">
          <h2 className="shimmer-text text-4xl sm:text-5xl md:text-6xl font-light tracking-[0.2em] uppercase leading-none font-space-grotesk">
            Tech Stack
          </h2>
        </div>

        <div className="space-y-8 mb-16">
          <Marquee icons={row1} direction="left" />
          <Marquee icons={row2} direction="right" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-24">
          {noLogoSkills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 text-sm text-muted-foreground/70 border border-border/30 rounded-full transition-colors duration-200 hover:border-border/60 hover:text-muted-foreground"
            >
              {skill}
            </span>
          ))}
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
