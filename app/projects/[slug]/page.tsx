import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { projects, SITE } from "@/lib/data"
import ProjectFocus from "@/components/project-focus"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) {
    return { title: "Project Not Found" }
  }
  return {
    title: `${project.title} - ${SITE.name}`,
    description: project.tagline,
    openGraph: {
      title: `${project.title} - ${SITE.name}`,
      description: project.tagline,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} - ${SITE.name}`,
      description: project.tagline,
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  const featured = projects.filter((p) => p.featured)
  const currentFeaturedIndex = featured.findIndex((p) => p.slug === project.slug)
  const nextProject =
    currentFeaturedIndex >= 0
      ? featured[(currentFeaturedIndex + 1) % featured.length]
      : null

  return (
    <main className="min-h-screen pb-24">
        <div className="container px-4 md:px-6 mx-auto">
        <div className="pt-12 pb-8">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <span aria-hidden="true">←</span>
            <span>Back to Projects</span>
          </Link>
        </div>

        <header className="py-8 md:py-12 border-b border-border/60">
          <h1 className="font-funnel-display text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.05]">
            {project.title}
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.caseStudy?.hero ?? project.tagline}
          </p>
        </header>

        {project.caseStudy ? (
          <div className="py-8 border-b border-border/60">
            <dl className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {project.focusAreas && (
                <div>
                  <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                    Project type
                  </dt>
                  <dd><ProjectFocus areas={project.focusAreas} /></dd>
                </div>
              )}
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Timeline
                </dt>
                <dd className="text-sm text-foreground">{project.caseStudy.timeline}</dd>
                {project.commitRange && (
                  <dd className="mt-2 text-xs text-muted-foreground leading-relaxed">
                    First to latest recorded commit (UTC).<br />
                    {project.commitRange.count} commits on {project.commitRange.branch}.
                  </dd>
                )}
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-2">
                  Stack
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.caseStudy.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-border/80 bg-card/60 px-2.5 py-0.5 text-xs text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        ) : (
          <div className="py-8 border-b border-border/60">
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full border border-border/80 bg-card/60 px-2.5 py-0.5 text-xs text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {(project.codeLink || project.liveLink || project.prototypeLink) && (
          <div className="py-8 flex flex-wrap gap-3">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Visit Live Site ↗
              </a>
            )}
            {project.codeLink && (
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Source ↗
              </a>
            )}
            {project.prototypeLink && (
              <a
                href={project.prototypeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Prototype ↗
              </a>
            )}
          </div>
        )}

        {project.overview && (
          <section className="py-10 border-b border-border/30" aria-labelledby="project-overview">
            <h2 id="project-overview" className="font-funnel-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-4">
              What it is
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              {project.overview}
            </p>
          </section>
        )}

        {project.architecture && (
          <figure className="mt-8 border border-border/60">
            <a
              href={project.architecture.src}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} architecture diagram full size`}
              className="block"
            >
              <Image
                src={project.architecture.src}
                alt={project.architecture.alt}
                width={project.architecture.width}
                height={project.architecture.height}
                className="w-full h-auto"
              />
            </a>
            <figcaption className="px-5 py-4 text-sm text-muted-foreground leading-relaxed">
              <p>{project.architecture.caption}</p>
              <a
                href={project.architecture.src}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-primary hover:underline underline-offset-4"
              >
                Open full-size ↗
              </a>
            </figcaption>
          </figure>
        )}

        {project.caseStudy ? (
          <div className="mt-8">
            {project.caseStudy.sections.map((section) => (
              <section
                key={section.number}
                className="py-16 border-b border-border/30 last:border-b-0"
              >
                <div className="flex items-baseline gap-6 mb-8">
                  <span
                    aria-hidden="true"
                    className="font-funnel-display text-6xl md:text-7xl font-bold text-primary/15 leading-none select-none"
                  >
                    {section.number}
                  </span>
                  <h2 className="font-funnel-display text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="space-y-6 pl-0 md:pl-2">
                  {section.content.split("\n\n").map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-lg text-muted-foreground leading-relaxed"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="py-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </div>
        )}

        {nextProject && nextProject.slug !== project.slug && (
          <div className="mt-16 pt-12 border-t border-border/60">
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group block"
            >
              <div className="text-xs uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Next Project
              </div>
              <div className="flex items-baseline justify-between gap-6">
                <h3 className="font-funnel-display text-3xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {nextProject.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-2xl text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all"
                >
                  →
                </span>
              </div>
              <p className="mt-3 text-base text-muted-foreground">
                {nextProject.tagline}
              </p>
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
