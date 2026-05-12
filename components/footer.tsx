import Link from "next/link"
import { Github, Linkedin, Mail, Twitter, MapPin, Calendar } from "lucide-react"
import { SITE, NAV_ITEMS, SPECIAL_PAGES } from "@/lib/data"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: "GitHub", href: SITE.github, icon: Github, external: true },
    { name: "LinkedIn", href: SITE.linkedin, icon: Linkedin, external: true },
    { name: "Email", href: `mailto:${SITE.email}`, icon: Mail, external: false },
    { name: "Twitter", href: `https://twitter.com/${SITE.twitter.replace("@", "")}`, icon: Twitter, external: true },
  ]

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 md:px-6 mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4 lg:pr-6">
            <Link href="/" className="inline-block">
              <span className="gradient-text text-2xl font-bold tracking-tight">HT</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Full-stack engineer building products from zero to production.
            </p>
            <div className="flex gap-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    aria-label={social.name}
                    {...(social.external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border/40 text-muted-foreground transition-colors hover:text-primary hover:border-border"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                )
              })}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {SPECIAL_PAGES.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {page.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mb-4">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                  <span className="break-all">{SITE.email}</span>
                </a>
              </li>
              <li className="inline-flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-muted-foreground/60" />
                <span>{SITE.location}</span>
              </li>
              <li>
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Calendar className="h-4 w-4 shrink-0 text-muted-foreground/60 group-hover:text-primary transition-colors" />
                  <span>Book a call</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="container px-4 md:px-6 mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Harsha Tummalapalli
          </p>
          <p className="text-xs text-muted-foreground/70">
            Built with Next.js, Tailwind, and too much coffee.
          </p>
        </div>
      </div>
    </footer>
  )
}
