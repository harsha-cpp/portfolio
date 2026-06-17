import Link from "next/link"
import { ExternalLink, ArrowRight, Github } from "lucide-react"
import type { Metadata } from "next"
import { projects, SITE } from "@/lib/data"

export const metadata: Metadata = {
  title: `Projects — ${SITE.name}`,
  description: "All projects by Harsha Tummalapalli — open source, products, and experiments.",
  openGraph: {
    title: `Projects — ${SITE.name}`,
    description: "All projects by Harsha Tummalapalli — open source, products, and experiments.",
    type: "website",
  },
}

export default function ProjectsPage() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen pb-24">
      <div className="container px-4 md:px-6 mx-auto">

        {/* back */}
        <div className="pt-12 pb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back</span>
          </Link>
        </div>

        {/* header */}
        <header className="py-8 md:py-12 border-b border-border/60">
          <h1 className="font-funnel-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
            Projects
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-xl">
            Things I've designed, built, and shipped — from consumer products to open-source tools.
          </p>
        </header>

        {/* featured */}
        <section className="mt-12">
          <h2 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
            Featured
          </h2>
          <div className="flex flex-col gap-3">
            {featured.map((project) => (
              <div key={project.slug} className="group relative flex items-center min-h-[72px] px-5 py-4 bg-background border border-border/50 hover:border-border transition-colors duration-200 overflow-hidden">
                {/* accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-primary/40 to-transparent" />

                {/* left: name + tagline — entire left is clickable to case study */}
                <Link href={`/projects/${project.slug}`} className="flex-1 min-w-0 pr-4 block">
                  <span className="text-base font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate block">
                    {project.title}
                  </span>
                  <span className="text-xs text-muted-foreground/60 line-clamp-1 mt-0.5">
                    {project.tagline}
                  </span>
                </Link>

                {/* right: stack + links */}
                <div className="flex items-center gap-3 flex-shrink-0">
                  <span className="hidden sm:inline-flex px-2.5 py-1 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground">
                    {project.tags[0]}
                  </span>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground/50 hover:text-primary transition-colors duration-200"
                      aria-label={`${project.title} source code`}
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground/50 hover:text-primary transition-colors duration-200"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden="true">
                    <ArrowRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-0.5 transition-all duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* all other projects */}
        <section className="mt-14">
          <h2 className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-6">
            All Projects
          </h2>
          <div className="flex flex-col gap-3">
            {rest.map((project) => (
              <div key={project.slug} className="group relative flex items-center min-h-[64px] px-5 py-4 bg-background border border-border/40 hover:border-border/70 transition-colors duration-200 overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />

                <div className="flex-1 min-w-0 pr-4">
                  <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 truncate block">
                    {project.title}
                  </span>
                  <span className="text-xs text-muted-foreground/50 line-clamp-1 mt-0.5">
                    {project.tagline}
                  </span>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  <div className="hidden sm:flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-secondary/40 border border-border/30 text-muted-foreground/70"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.codeLink && (
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground/40 hover:text-primary transition-colors duration-200"
                      aria-label={`${project.title} source code`}
                    >
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 text-muted-foreground/40 hover:text-primary transition-colors duration-200"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}
