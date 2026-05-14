import type { Metadata } from "next"
import { changelog } from "@/lib/data"

export const metadata: Metadata = {
  title: "Changelog - Harsha Tummalapalli",
  description:
    "Version history of this site. Treated as a product - every version is intentional.",
}

export default function ChangelogPage() {
  return (
    <main className="min-h-screen py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
        <header className="mb-20 md:mb-24">
          <p className="text-xs uppercase tracking-[0.2em] text-[hsl(172_50%_45%)] mb-4">
            / Changelog
          </p>
          <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-foreground mb-6">
            Changelog
          </h1>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            This site is treated as a product. Every version is intentional.
          </p>
        </header>

        <div className="relative">
          <div
            aria-hidden="true"
            className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-[hsl(172_50%_45%)] via-[hsl(172_50%_45%/0.5)] to-[hsl(172_50%_45%/0.1)]"
          />

          <ol className="space-y-16 md:space-y-20">
            {changelog.map((entry, index) => {
              const isLatest = index === 0
              return (
                <li key={entry.version} className="relative pl-10 md:pl-14">
                  <span
                    aria-hidden="true"
                    className={`absolute left-0 top-2 w-[15px] h-[15px] rounded-full border-2 ${
                      isLatest
                        ? "bg-[hsl(172_50%_45%)] border-[hsl(172_50%_45%)] shadow-[0_0_0_6px_hsl(172_50%_45%/0.15),0_0_20px_hsl(172_50%_45%/0.4)]"
                        : "bg-background border-[hsl(172_50%_45%/0.6)]"
                    }`}
                  />

                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-5">
                    <span className="text-2xl md:text-3xl font-medium tracking-tight text-[hsl(172_50%_45%)] tabular-nums">
                      {entry.version}
                    </span>
                    <span className="text-sm text-muted-foreground tabular-nums">
                      {entry.date}
                    </span>
                    {isLatest && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-medium text-[hsl(172_50%_45%)] px-2.5 py-1 rounded-full border border-[hsl(172_50%_45%/0.4)] bg-[hsl(172_50%_45%/0.08)]">
                        <span className="w-1 h-1 rounded-full bg-[hsl(172_50%_45%)] animate-pulse" />
                        Latest
                      </span>
                    )}
                  </div>

                  <ul className="space-y-3">
                    {entry.changes.map((change, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-[15px] md:text-base text-foreground/85 leading-relaxed"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2.5 flex-shrink-0 w-1 h-1 rounded-full bg-[hsl(172_50%_45%/0.7)]"
                        />
                        <span>{change}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              )
            })}
          </ol>

          <div className="relative pl-10 md:pl-14 mt-16">
            <span
              aria-hidden="true"
              className="absolute left-[3px] top-2 w-[9px] h-[9px] rounded-full bg-[hsl(220_5%_14%)] border border-[hsl(172_50%_45%/0.3)]"
            />
            <p className="text-sm text-muted-foreground italic">
              The beginning. More to come.
            </p>
          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-border">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every change is shipped from{" "}
            <span className="text-foreground/80">main</span> through Vercel.
            Source lives on{" "}
            <a
              href="https://github.com/harsha-cpp"
              className="text-[hsl(172_50%_45%)] hover:text-[hsl(172_40%_58%)] underline decoration-[hsl(172_50%_45%/0.3)] underline-offset-4 transition-colors"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </main>
  )
}
