import type { Metadata } from "next"
import { colophon } from "@/lib/data"

export const metadata: Metadata = {
  title: "Colophon - How this site was built",
  description:
    "A detailed breakdown of the technology, typography, color palette, and design philosophy behind this portfolio.",
}

const fontFamilyMap: Record<string, string> = {
  Lexend: "var(--font-lexend)",
  "Funnel Display": "var(--font-funnel-display)",
  "Space Grotesk": "var(--font-space-grotesk)",
}

export default function ColophonPage() {
  return (
    <main className="container px-4 md:px-6 mx-auto py-16 md:py-24">
      <header className="mb-20">
        <p className="text-xs uppercase tracking-[0.2em] text-primary mb-6 font-space-grotesk">
          / Behind the build
        </p>
        <h1
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
          style={{ fontFamily: "var(--font-funnel-display)" }}
        >
          Colophon
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
          A colophon is a statement at the end of a book describing how it was
          produced. This is the same - for a website.
        </p>
      </header>

      <section className="pb-16 mb-16 border-b border-border/30">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-xs text-muted-foreground font-space-grotesk tabular-nums">
            01
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Stack
          </h2>
        </div>

        <ul className="space-y-6">
          {colophon.stack.map((item) => (
            <li
              key={item.name}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-baseline pb-6 border-b border-border/20 last:border-b-0"
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-4">
                <span className="text-foreground text-lg font-medium">
                  {item.name}
                </span>
                <span className="text-[0.65rem] uppercase tracking-[0.18em] text-primary font-space-grotesk mt-1 md:mt-0">
                  {item.role}
                </span>
              </div>
              <p className="text-sm text-muted-foreground md:max-w-md">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="pb-16 mb-16 border-b border-border/30">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-xs text-muted-foreground font-space-grotesk tabular-nums">
            02
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Typography
          </h2>
        </div>

        <div className="space-y-12">
          {colophon.fonts.map((font) => {
            const fontFamily = fontFamilyMap[font.name] || "inherit"
            return (
              <div key={font.name} className="space-y-4">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-2xl font-medium text-foreground">
                      {font.name}
                    </h3>
                    <span className="text-[0.65rem] uppercase tracking-[0.18em] text-primary font-space-grotesk">
                      {font.role}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground md:max-w-sm">
                    {font.detail}
                  </p>
                </div>
                <p
                  className="text-4xl md:text-5xl text-foreground leading-tight"
                  style={{ fontFamily }}
                >
                  The quick brown fox jumps over the lazy dog.
                </p>
                <p
                  className="text-xs text-muted-foreground tracking-widest"
                  style={{ fontFamily }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ &nbsp; 0123456789
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="pb-16 mb-16 border-b border-border/30">
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-xs text-muted-foreground font-space-grotesk tabular-nums">
            03
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Color Palette
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
          {colophon.colors.map((color) => (
            <div key={color.name} className="flex gap-5 items-start">
              <div
                className="w-8 h-8 rounded-md border border-border/40 shrink-0 mt-1"
                style={{ backgroundColor: color.swatch }}
                aria-hidden="true"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-3 mb-1">
                  <h3 className="text-foreground font-medium">{color.name}</h3>
                  <code className="text-xs text-primary font-space-grotesk uppercase tracking-wider">
                    {color.swatch}
                  </code>
                </div>
                <code className="block text-xs text-muted-foreground font-space-grotesk mb-2">
                  {color.value}
                </code>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {color.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="flex items-baseline gap-4 mb-10">
          <span className="text-xs text-muted-foreground font-space-grotesk tabular-nums">
            04
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Philosophy
          </h2>
        </div>

        <ol className="space-y-6">
          {colophon.philosophy.map((principle, index) => (
            <li
              key={index}
              className="grid grid-cols-[auto_1fr] gap-6 items-baseline pb-6 border-b border-border/20 last:border-b-0"
            >
              <span className="text-primary font-space-grotesk text-sm tabular-nums tracking-wider">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="text-base md:text-lg text-foreground leading-relaxed">
                {principle}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <footer className="mt-24 pt-10 border-t border-border/30">
        <p className="text-xs text-muted-foreground font-space-grotesk uppercase tracking-[0.2em]">
          Set in Lexend, Funnel Display & Space Grotesk -
          <br className="md:hidden" /> hand-crafted in TypeScript.
        </p>
      </footer>
    </main>
  )
}
