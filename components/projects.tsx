import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "Purple Technologies Landing Page",
      description:
        "Designed and developed a modern, responsive landing page for Purple Technologies, an IoT solutions company. Features include hero sections, company statistics, service offerings, and contact forms. Built using Qwik for super fast interactions and optimized for performance and user experience across all devices.",
      tags: ["Web Development", "Landing Page", "IoT", "Qwik", "Responsive Design"],
      codeLink: null,
      liveLink: "https://purple-technologies-mu.vercel.app/",
    },
    {
      title: "University Mess Review Portal",
      description:
        "Developed a full-stack Mess Review Portal using Next.js, Go, PocketBase, and TypeScript with multi-role authentication, smart menu management, and real-time reviews. Built analytics dashboards for trends and performance, optimized backend/database design, and deployed via Docker pipelines, showcasing scalable full-stack and enterprise-grade architecture expertise.",
      tags: ["Next.js", "Go", "PocketBase", "TypeScript", "Full-Stack", "Enterprise"],
      codeLink: null,
      liveLink: "NDA",
    },
    {
      title: "DOTpomodoro Focus Timer",
      description:
        "A productivity-focused web application built with React and modern frontend technologies, featuring session tracking, customizable timer settings, and progress analytics. Designed with clean UI/UX principles and implemented with responsive design patterns for seamless user experience across devices.",
      tags: ["React", "Frontend", "UI/UX", "Web App"],
      codeLink: null,
      liveLink: "https://dotpomodoro.space",
      prototypeLink: "https://www.figma.com/design/NzTZfZXz3jvBq9wwfupxSZ/DOTpomodoro?node-id=0-1&t=JWbMJDNodExZvuGK-1",
    },
    {
      title: "Piggywise Personal Finance App",
      description:
        "Comprehensive user research and frontend development project for a personal finance application. Conducted user interviews, created personas, and designed intuitive interfaces for expense tracking and budget management. Developed responsive frontend components with focus on user experience and accessibility.",
      tags: ["User Research", "UI/UX", "Frontend", "Finance App"],
      codeLink: null,
      liveLink: "https://www.figma.com/board/pHb8cQOpWyWe6ar6Ac0KBR/Piggywise-User-Research?node-id=0-1&t=9XCOiMJ8dLNlJCxi-1",
    },
    {
      title: "Netts Mobility App & Website",
      description:
        "Designed and developed a comprehensive mobility services platform featuring React Native mobile app and Next.js website. Created user-friendly interfaces for ride booking and fleet management, implemented responsive design patterns, and deployed the application with modern web technologies.",
      tags: ["React Native", "Next.js", "UI/UX", "Mobile App"],
      codeLink: null,
      liveLink: "https://netts.in",
      prototypeLink: "https://www.figma.com/design/dTVdo4MP7PH1CbsxzzRl1i/Netts-Mobility-Application?node-id=0-1&t=eJmSpHrKWIYMQ511-1",
    },
    {
      title: "Investment Portfolio App",
      description:
        "Designed and prototyped a comprehensive mobile investment platform featuring portfolio tracking, market data visualization, and intuitive wealth management interfaces. Created user-centered design solutions with focus on clear data presentation and seamless user experience for financial applications.",
      tags: ["Mobile App", "FinTech", "UI/UX", "Data Visualization"],
      codeLink: null,
      liveLink: "https://www.figma.com/design/h4L7lT3yfsr2l6Ny8m85Ow/Investments-App?node-id=0-1&t=XPfSeMBMcEeiG41o-1",
    },

  ]

  return (
    <div className="w-full section-alt">
      <section id="projects" className="py-20 w-full relative">
        <div className="container px-4 md:px-6 mx-auto relative z-10">
          <div className="space-y-12">
            {/* Left-aligned header */}
            <div className="space-y-4 text-left">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
                Projects <span className="cursive-text">& Work</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                A showcase of scalable software solutions that solve complex problems and drive technical innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-12">
              {projects.map((project, index) => (
                <div key={index} className="group animate-in">
                  <div className="relative p-6 rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/20 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-gradient-to-br hover:from-white/12 hover:to-white/4 h-full flex flex-col">
                    <div className="flex flex-col h-full space-y-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-white group-hover:text-primary/90 transition-colors duration-300">
                          {project.title}
                        </h3>
                      </div>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 4).map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-semibold bg-gradient-to-r from-slate-700 to-slate-600 border border-slate-500/60 text-slate-100 rounded-full hover:border-slate-400 hover:from-slate-600 hover:to-slate-500 hover:text-white transition-all duration-300 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center gap-3 pt-2">
                        {project.codeLink && (
                          <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                            <button className="btn-secondary group/btn">
                              <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform duration-300" /> 
                              Code
                            </button>
                          </Link>
                        )}
                        {project.liveLink && (
                          project.liveLink === "NDA" ? (
                            <button className="btn-secondary group/btn cursor-not-allowed opacity-60" disabled>
                              <ExternalLink className="mr-2 h-4 w-4" />
                              NDA
                            </button>
                          ) : (
                            <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                              <button className={project.liveLink.includes('figma.com') ? "btn-secondary group/btn" : "btn-primary group/btn"}>
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
                                {project.liveLink.includes('figma.com/board') ? 'FigJam' : 
                                 project.liveLink.includes('figma.com') ? 'Prototype' : 'Live Demo'}
                              </button>
                            </Link>
                          )
                        )}
                        {(project as any).prototypeLink && (
                          <Link href={(project as any).prototypeLink} target="_blank" rel="noopener noreferrer">
                            <button className="btn-secondary group/btn">
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
