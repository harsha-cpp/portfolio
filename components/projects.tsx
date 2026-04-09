import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "OpenLinear",
      description:
        "Open-source desktop app that bridges a Linear-style kanban board with AI coding agents. One-click task execution that generates pull requests with working code. Per-task git worktree isolation for parallel execution, real-time agent visibility with live tool calls and file edits, and GitHub-native OAuth + PR workflows via the OpenCode SDK sidecar.",
      tags: ["Next.js", "Tauri", "Express.js", "PostgreSQL", "Prisma"],
      codeLink: "https://github.com/harsha-cpp/openlinear",
      liveLink: null,
    },
    {
      title: "Verin",
      description:
        "Enterprise-grade document management system built in Go, optimized for p95 latency.",
      tags: ["Go", "DMS", "Enterprise"],
      codeLink: "https://github.com/harsha-cpp/verin",
      liveLink: null,
    },
    {
      title: "UniMess Portal",
      description:
        "Backend service handling mess reviews and complaints for 10,000+ students at VIT-AP. Go/Gin API with concurrent request handling, plus a Next.js admin dashboard for real-time monitoring, complaint tracking, and status management.",
      tags: ["Go", "Gin", "Next.js", "TypeScript"],
      codeLink: "https://github.com/harsha-cpp/unimessportal",
      liveLink: "https://unimessportal.vercel.app",
    },
    {
      title: "TRAQ",
      description:
        "AI-powered video analytics system that processes CCTV footage from signalized intersections to generate traffic intelligence. Detects and tracks multiple vehicle categories using YOLO and image recognition. Built for IIIT NETRIK.",
      tags: ["Python", "YOLO", "Computer Vision", "AI"],
      codeLink: "https://github.com/harsha-cpp/traq",
      liveLink: null,
    },
    {
      title: "MedBridge",
      description:
        "Connects clinic networks to share surplus medicines, prevent waste, and eliminate stockouts — all in real-time.",
      tags: ["TypeScript", "Next.js", "Full-Stack"],
      codeLink: "https://github.com/harsha-cpp/medbridge",
      liveLink: "https://medbridge-two.vercel.app",
    },
    {
      title: "Carmen ANPR Scanner",
      description:
        "License plate scanner built on Adaptive Recognition's Carmen Video SDK. Upload a video or use your webcam — returns plate number, make, model, color, and country.",
      tags: ["TypeScript", "Computer Vision", "SDK Integration"],
      codeLink: "https://github.com/harsha-cpp/carmen-anpr-scanner",
      liveLink: null,
    },
    {
      title: "Purple Technologies Landing Page",
      description:
        "Landing page for an IoT solutions company. Hero sections, company stats, service offerings, contact forms. Built with Qwik for instant interactions.",
      tags: ["Qwik", "Landing Page", "IoT"],
      codeLink: null,
      liveLink: "https://purple-technologies-mu.vercel.app/",
    },
    {
      title: "DOTpomodoro",
      description:
        "Productivity timer with session tracking, customizable settings, and progress analytics.",
      tags: ["React", "Web App"],
      codeLink: null,
      liveLink: "https://dotpomodoro.space",
      prototypeLink: "https://www.figma.com/design/NzTZfZXz3jvBq9wwfupxSZ/DOTpomodoro?node-id=0-1&t=JWbMJDNodExZvuGK-1",
    },
    {
      title: "Netts Mobility Website",
      description:
        "Company website and React Native mobile app for an EV mobility startup. 15+ screens including ride booking, fleet management, EV station locators, and pricing.",
      tags: ["React Native", "Next.js", "TypeScript"],
      codeLink: null,
      liveLink: "https://netts.in",
      prototypeLink: "https://www.figma.com/design/dTVdo4MP7PH1CbsxzzRl1i/Netts-Mobility-Application?node-id=0-1&t=eJmSpHrKWIYMQ511-1",
    },
    {
      title: "Piggywise",
      description:
        "Personal finance app with expense tracking and budget management. User research, personas, and frontend built from scratch.",
      tags: ["TypeScript", "Next.js", "Finance"],
      codeLink: "https://github.com/harsha-cpp/piggywise",
      liveLink: "https://piggywise-seven.vercel.app",
    },
  ]

  return (
    <div className="w-full section-alt">
      <section id="projects" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-12">
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                Projects <span className="cursive-text">& Work</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
              {projects.map((project) => (
                <div key={project.title} className="group">
                  <div className="relative p-6 rounded-xl bg-card/60 border border-border/50 transition-colors duration-200 hover:border-border h-full flex flex-col">
                    <div className="flex flex-col h-full space-y-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-200">
                          {project.title}
                        </h3>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-3 pt-2">
                        {project.codeLink && (
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn-secondary group/btn">
                              <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                              Code
                            </button>
                          </Link>
                        )}
                        {project.liveLink && (
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <button type="button" className={project.liveLink.includes('figma.com') ? "btn-secondary group/btn" : "btn-primary group/btn"}>
                              {project.liveLink.includes('figma.com') ? (
                                <Image
                                  src="/Figma-logo.svg.png"
                                  alt="Figma"
                                  width={16}
                                  height={16}
                                  className="mr-2 group-hover/btn:scale-110 transition-transform duration-300"
                                />
                              ) : (
                                <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" />
                              )}
                              {project.liveLink.includes('figma.com') ? 'Prototype' : 'Live Demo'}
                            </button>
                          </Link>
                        )}
                        {(project as any).prototypeLink && (
                          <Link href={(project as any).prototypeLink} target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn-secondary group/btn">
                              <Image
                                src="/Figma-logo.svg.png"
                                alt="Figma"
                                width={16}
                                height={16}
                                className="mr-2 group-hover/btn:scale-110 transition-transform duration-300"
                              />
                              Prototype
                            </button>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
