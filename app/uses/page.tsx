import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Mail } from "lucide-react"
import { usesData, SITE } from "@/lib/data"
import MonsterFuel from "@/components/monster-fuel"

export const metadata: Metadata = {
    title: "Workspace | Harsha Tummalapalli",
  description:
    "The hardware, software, CLI tools, and apps I use every day to build, ship, and think.",
  openGraph: {
  title: "Workspace | Harsha Tummalapalli",
    description:
      "The hardware, software, CLI tools, and apps I use every day to build, ship, and think.",
    type: "website",
  },
}

export default function UsesPage() {
  const totalItems = usesData.reduce((sum, s) => sum + s.items.length, 0)

  return (
    <main className="min-h-screen bg-background">
      <header className="container px-4 md:px-6 mx-auto pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
            <span className="h-px w-8 bg-border" />
            <span className="font-space-grotesk">Vol. 01 — Workspace</span>
          </div>
          <h1 className="font-funnel-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground leading-[0.95]">
            Workspace
          </h1>
          <p className="mt-8 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            A working inventory of the hardware, software, and rituals I rely on
            to build, ship, and think. Updated as the kit{" "}
            <span className="cursive-text">evolves</span>.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-4 text-sm text-muted-foreground border-t border-border pt-8">
            <div className="flex items-baseline gap-3">
              <span className="font-funnel-display text-2xl text-primary tabular-nums">
                {usesData.length.toString().padStart(2, "0")}
              </span>
              <span className="uppercase tracking-wider text-xs">Sections</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-funnel-display text-2xl text-primary tabular-nums">
                {totalItems.toString().padStart(2, "0")}
              </span>
              <span className="uppercase tracking-wider text-xs">Items</span>
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-funnel-display text-2xl text-foreground tabular-nums">
                {new Date().toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </span>
              <span className="uppercase tracking-wider text-xs">Last Revised</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container px-4 md:px-6 mx-auto">
        {usesData.map((section) => (
          <section
            key={section.number}
            className="relative border-t border-border py-20 md:py-28"
            aria-labelledby={`section-${section.number}`}
          >
            <span
              aria-hidden
              className="pointer-events-none select-none absolute -top-6 md:-top-10 right-0 md:right-4 font-funnel-display font-bold text-[8rem] md:text-[14rem] leading-none text-primary/[0.07] tracking-tighter"
            >
              {section.number}
            </span>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative">
              <div className="lg:col-span-4 lg:sticky lg:top-24 lg:self-start">
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-funnel-display text-5xl md:text-6xl font-bold text-primary tabular-nums leading-none">
                    {section.number}
                  </span>
                  <span className="h-px flex-1 bg-border max-w-[60px]" />
                </div>
                <h2
                  id={`section-${section.number}`}
                  className="font-funnel-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight leading-tight"
                >
                  {section.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-relaxed">
                  {section.subtitle}
                </p>
                <div className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-muted-foreground/80">
                  <span className="font-space-grotesk tabular-nums">
                    {section.items.length.toString().padStart(2, "0")} entries
                  </span>
                </div>
              </div>

              <ol className="lg:col-span-8 divide-y divide-border border-y border-border">
                {section.items.map((item, itemIdx) => {
                  const itemNumber = `${section.number}.${(itemIdx + 1)
                    .toString()
                    .padStart(2, "0")}`
                  const Wrapper: React.ElementType = item.link ? "a" : "div"
                  const wrapperProps = item.link
                    ? {
                        href: item.link,
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {}

                  return (
                    <li key={item.name} className="group">
                      <Wrapper
                        {...wrapperProps}
                        className={`block py-7 md:py-8 px-4 md:px-5 -mx-4 md:-mx-5  transition-colors duration-200 ${
                          item.link ? "hover:bg-primary/[0.04]" : ""
                        }`}
                      >
                        <div className="grid grid-cols-12 gap-4 md:gap-6 items-baseline">
                          <span className="col-span-12 md:col-span-1 font-space-grotesk text-xs text-muted-foreground/60 tabular-nums tracking-wider">
                            {itemNumber}
                          </span>
                          <div className="col-span-12 md:col-span-11">
                            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                              <h3 className="font-funnel-display text-xl md:text-2xl font-medium text-foreground tracking-tight">
                                {item.name}
                              </h3>
                              {item.link && (
                                <span className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.16em] text-primary/70 group-hover:text-primary transition-colors">
                                  Visit
                                  <ArrowUpRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </span>
                              )}
                            </div>
                            <p className="mt-3 text-[0.95rem] md:text-base text-muted-foreground leading-relaxed max-w-3xl">
                              {item.description}
                            </p>
                            {item.link && (
                              <span className="mt-3 inline-block text-xs font-space-grotesk text-muted-foreground/60 tracking-wide">
                                <span className="underline decoration-border decoration-1 underline-offset-4 group-hover:decoration-primary/60 transition-colors">
                                  {new URL(item.link).hostname.replace(/^www\./, "")}
                                </span>
                              </span>
                            )}
                          </div>
                        </div>
                      </Wrapper>
                    </li>
                  )
                })}
              </ol>
            </div>
          </section>
        ))}
      </div>

      <section className="border-t border-border py-16 md:py-20">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
            <div className="flex-shrink-0">
              <MonsterFuel />
            </div>
            <div className="max-w-xl">
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
                <span className="h-px w-8 bg-border" />
                <span className="font-space-grotesk">Off the record</span>
              </div>
              <h3 className="font-funnel-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-4">
                Powered by <span className="cursive-text">caffeine</span>
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Every late-night deploy and early-morning code review is fueled by
                Monster Ultra White. Zero sugar, maximum focus. The white can is
                non-negotiable — it&apos;s part of the stack at this point.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border mt-12">
        <div className="container px-4 md:px-6 mx-auto py-24 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
              <span className="h-px w-8 bg-border" />
              <span className="font-space-grotesk">Colophon</span>
            </div>
            <h2 className="font-funnel-display text-4xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.05]">
              Curious about a tool, or have one I should{" "}
              <span className="cursive-text">try</span>?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">
              I&apos;m always trading notes on workflows, keyboards, and the
              eternal search for the perfect terminal font. Send me a line.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/#contact" className="btn-primary">
                <Mail className="h-4 w-4 mr-2" />
                Get in Touch
              </Link>
              <a
                href={`mailto:${SITE.email}`}
                className="btn-secondary"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
