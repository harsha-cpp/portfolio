import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Calendar } from "lucide-react"
import { SITE, NAV_ITEMS, SPECIAL_PAGES } from "@/lib/data"
import FooterParticles from "@/components/footer-particles"

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socials = [
    { name: "GitHub", href: SITE.github, icon: Github, external: true },
    { name: "LinkedIn", href: SITE.linkedin, icon: Linkedin, external: true },
    { name: "Email", href: `mailto:${SITE.email}`, icon: Mail, external: false },
    { name: "X", href: `https://x.com/${SITE.twitter.replace("@", "")}`, icon: XIcon, external: true },
  ]

  return (
    <footer className="relative border-t border-border/40 bg-background overflow-hidden">
      <FooterParticles />
      <div className="relative z-10 container px-4 md:px-6 mx-auto py-16">
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
              <li className="pt-4">
                <img
                  src="/monster-energy-logo.png"
                  alt="Monster Energy"
                  className="h-14 w-auto opacity-50 hover:opacity-80 transition-opacity"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-border/30">
        <div className="container px-4 md:px-6 mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Harsha Tummalapalli
          </p>
          <p className="text-xs text-muted-foreground/70">
              Built with Next.js, Tailwind, and too much caffeine.
          </p>
        </div>
      </div>
    </footer>
  )
}
