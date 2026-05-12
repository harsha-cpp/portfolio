import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Now — Harsha Tummalapalli",
  description:
    "What I'm currently working on, learning, reading, and listening to. A living document, updated whenever life shifts.",
  openGraph: {
    title: "Now — Harsha Tummalapalli",
    description:
      "What I'm currently working on, learning, reading, and listening to.",
    type: "article",
  },
}

const sections = [
  {
    title: "Currently",
    body: "Building Memolane — an AI-powered memory platform. Leading a team of 5 engineers. Shipping the consumer product after spending 4 months on infrastructure and hiring.",
  },
  {
    title: "Working on",
    body: "The Memolane consumer app (React Native + Next.js). OpenLinear — open-source AI coding agent with kanban. This portfolio (you're looking at v3.0).",
  },
  {
    title: "Learning",
    body: "Systems design at scale. How to run a 5-person engineering team without burning out. Rust — slowly, on weekends.",
  },
  {
    title: "Reading",
    body: "'Designing Data-Intensive Applications' by Martin Kleppmann. 'The Hard Thing About Hard Things' by Ben Horowitz. PostgreSQL documentation (yes, for fun).",
  },
  {
    title: "Listening",
    body: "lo-fi hip-hop, video game soundtracks, and Fred again.. on repeat.",
  },
  {
    title: "Location",
    body: "Hyderabad, India. Third-year CS undergrad at VIT Amaravati.",
  },
]

export default function NowPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl">
          <header className="mb-12 md:mb-16">
            <h1 className="font-funnel-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
              Now
            </h1>
            <p className="text-sm text-muted-foreground tracking-wide">
              Last updated · <span className="text-foreground/80">May 2026</span>
            </p>
          </header>

          <section className="mb-16 md:mb-20">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              This is a <span className="cursive-text">/now page</span> — a snapshot of
              what I&apos;m focused on at this point in my life. The idea comes from{" "}
              <a
                href="https://sive.rs/nowff"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 decoration-primary/40"
              >
                Derek Sivers
              </a>
              . If you have a personal website, you should have one too —{" "}
              <a
                href="https://nownownow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 decoration-primary/40"
              >
                nownownow.com
              </a>{" "}
              keeps a directory.
            </p>
          </section>

          <div className="space-y-12 md:space-y-14">
            {sections.map((section) => (
              <section
                key={section.title}
                className="border-l-2 border-primary/70 pl-6 md:pl-8"
              >
                <h2 className="font-funnel-display text-xl md:text-2xl font-semibold text-foreground mb-3 tracking-tight">
                  {section.title}
                </h2>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {section.body}
                </p>
              </section>
            ))}
          </div>

          <footer className="mt-20 md:mt-28 pt-8 border-t border-border/60">
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              What is a <span className="cursive-text">/now page</span>? It&apos;s a single
              page that tells you what someone is focused on right now — like a public
              status update for their life. Find more at{" "}
              <a
                href="https://nownownow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4 decoration-primary/40"
              >
                nownownow.com
              </a>
              .
            </p>
          </footer>
        </div>
      </div>
    </main>
  )
}
