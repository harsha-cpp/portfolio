import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import MessageMe from "@/components/MessageMe"
import { SITE, SPECIAL_PAGES } from "@/lib/data"

export default function Contact() {
  const explorePages = SPECIAL_PAGES.filter((p) => p.href === "/uses" || p.href === "/now")

  return (
    <div className="w-full section-alt">
      <section id="contact" className="py-20 relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Work <span className="cursive-text">with Me</span>
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have a project in mind or want to discuss opportunities? I'd love to hear from you!
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a
                    href={`https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${SITE.email}`}
                    className="text-primary hover:underline underline-offset-4"
                  >
                    {SITE.email}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(SITE.location)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline underline-offset-4"
                  >
                    {SITE.location}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <a
                    href={`tel:${SITE.phone.replace(/\s+/g, "")}`}
                    className="text-primary hover:underline underline-offset-4"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-medium text-white uppercase tracking-wider">Book a Call</h3>
                <a
                  href={`https://cal.com/${SITE.cal}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline underline-offset-4 inline-block"
                >
                  Schedule a call →
                </a>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-white uppercase tracking-wider">Explore</h3>
                <div className="space-y-2">
                  {explorePages.map((page) => (
                    <div key={page.href}>
                      <Link
                        href={page.href}
                        className="text-primary hover:underline underline-offset-4"
                      >
                        {page.name}
                      </Link>
                      <span className="text-muted-foreground"> - {page.description.toLowerCase()}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <MessageMe />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
