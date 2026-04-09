import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Founder & CTO",
      company: "Memolane",
      period: "Jan 2026 - Present",
      location: "Hyderabad, India",
      tags: ["Go", "PostgreSQL", "Redis", "Azure", "CI/CD"],
      link: null,
      achievements: [
        "Designed the full stack architecture (Go API, Next.js, PostgreSQL, Redis), wrote Azure Bicep IaC, and deployed to Azure Container Apps with automated CI/CD.",
        "Built a production recruitment platform — shipped careers portal, applicant tracking, interview scheduling, admin panel with RBAC, email automation via Azure Communication Services. 34 migrations, 100+ commits.",
        "Ran hiring end-to-end solo — sourced, interviewed, and selected 11 employees across engineering, design, and operations. Automated status emails and onboarding communications.",
        "Architected the consumer product — authored technical blueprint, benchmarked 35 features against market leaders, designed the DB schema with pgvector for AI recall, and planned a 6-week build roadmap.",
        "Set up team operations — configured the product monorepo (Bun, Turborepo, Elysia, Next.js, Expo), established GitHub workflows, and structured daily sprint execution with task assignment across 5 engineers.",
      ],
    },
    {
      title: "Backend Developer",
      company: "Digital Fortress",
      period: "Aug 2025 - Jan 2026",
      location: "India",
      tags: ["Go", "Gin", "Next.js", "TypeScript"],
      link: null,
      achievements: [
        "Built a scalable backend service using Golang (Gin framework) to handle reviews and complaints for 10,000+ students, streamlining daily institutional operations.",
        "Designed RESTful APIs with structured routing, middleware, validation, and centralized error handling.",
        "Developed a Next.js admin dashboard for real-time monitoring, complaint tracking, filtering, and status management.",
        "Monitored development of mobile application simultaneously with junior developer.",
      ],
    },
    {
      title: "User Experience Designer",
      company: "Netts Mobility",
      period: "Apr 2025 - Jul 2025",
      location: "Bengaluru, India",
      tags: ["Figma", "React", "Next.js", "TypeScript"],
      link: "https://netts.in",
      achievements: [
        "Designed and developed the complete company website using React, Next.js, and TypeScript — translating UX research and wireframes into 15+ responsive, high-performance screens.",
        "Delivered landing pages, product showcases, EV station locators, pricing, and service documentation.",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
              <span className="cursive-text">Experience</span>
            </h2>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.location}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {experience.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mt-2 space-y-2 mb-4">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {experience.link && (
                      <div className="flex justify-start">
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-primary/5 group"
                        >
                          <ExternalLink className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" />
                          Visit Website
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
