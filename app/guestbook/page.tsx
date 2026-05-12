import type { Metadata } from "next"
import GuestbookForm from "@/components/guestbook-form"

export const metadata: Metadata = {
  title: "Guestbook — Harsha Tummalapalli",
  description:
    "Leave a message. A small, public corner of the internet where you can say hello, share a thought, or simply mark your visit.",
  openGraph: {
    title: "Guestbook — Harsha Tummalapalli",
    description:
      "Leave a message. A small, public corner of the internet where you can say hello.",
    type: "article",
  },
}

export default function GuestbookPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] py-16 md:py-24">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="max-w-3xl">
          <header className="mb-12 md:mb-16">
            <h1 className="font-funnel-display text-5xl md:text-7xl font-bold tracking-tight text-foreground mb-4">
              Guestbook
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              A little corner of the internet for{" "}
              <span className="cursive-text">saying hello</span>. Leave a message,
              share a thought, or mark that you stopped by. No accounts, no
              tracking — just your name and a few words.
            </p>
          </header>

          <GuestbookForm />
        </div>
      </div>
    </main>
  )
}
