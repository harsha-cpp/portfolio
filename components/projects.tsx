"use client"

import { ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { projects } from "@/lib/data"

const FEATURED_SLUGS = ["openlinear", "memolane", "medbridge"]

const featured = FEATURED_SLUGS.map(
  (slug) => projects.find((p) => p.slug === slug)!
).filter(Boolean)

const PRIMARY_TAG: Record<string, string> = {
  openlinear: "Next.js",
  memolane: "Go",
  medbridge: "Next.js",
}

function ProjectCard({ project }: { project: typeof featured[number] }) {
  const router = useRouter()

  return (
    <div
      className="group relative flex items-center min-h-[72px] px-5 py-4 bg-background border border-border/50 hover:border-border transition-colors duration-200 overflow-hidden cursor-pointer"
      onClick={() => router.push(`/projects/${project.slug}`)}
    >
      {/* left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-primary/40 to-transparent" />

      {/* project name — left */}
      <div className="flex-1 min-w-0 pr-4">
        <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate block">
          {project.title}
        </span>

      </div>

      {/* right side: primary stack badge + live link + arrow */}
      <div className="flex items-center gap-3 flex-shrink-0">
        {/* primary stack pill */}
        <span className="hidden sm:inline-flex px-2.5 py-1 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground">
          {PRIMARY_TAG[project.slug] ?? project.tags[0]}
        </span>

        {/* live link — real <a>, stops propagation to prevent double-nav */}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 text-muted-foreground/50 hover:text-primary transition-colors duration-200"
            aria-label={`Open ${project.title} live site`}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}

        {/* arrow */}
        <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div className="w-full section-alt">
      <section id="projects" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-10">

            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
              <span className="cursive-text">projects</span>
            </h2>

            <div className="flex flex-col gap-3">
              {featured.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>

            <div className="flex justify-start">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors duration-200 group"
              >
                view all projects
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
