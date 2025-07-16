import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Projects() {
  const projects = [
    {
      title: "DOTpomodoro Focus Timer",
      description:
        "A productivity-focused Pomodoro timer application designed to help users maintain focus and manage their work sessions effectively. Features clean, minimal interface design with customizable timer settings and progress tracking.",
      tags: ["Productivity App", "Timer Design", "UI/UX", "Focus Tool"],
      codeLink: null,
      liveLink: "https://dotpomodoro.space",
      prototypeLink: "https://www.figma.com/design/NzTZfZXz3jvBq9wwfupxSZ/DOTpomodoro?node-id=0-1&t=JWbMJDNodExZvuGK-1",
    },
    {
      title: "Piggywise Research and Development",
      description:
        "Comprehensive user research project involving user interviews, persona development, journey mapping, and usability testing to understand financial behavior patterns and design solutions for a personal finance application.",
      tags: ["User Research", "UX Research", "Personas", "Journey Mapping"],
      codeLink: null,
      liveLink: "https://www.figma.com/board/pHb8cQOpWyWe6ar6Ac0KBR/Piggywise-User-Research?node-id=0-1&t=9XCOiMJ8dLNlJCxi-1",
    },
    {
      title: "Netts Mobility App & Webpage",
      description:
        "Comprehensive mobile application and website design for a mobility services platform, featuring user-friendly interfaces for ride booking, fleet management, and seamless user experiences across all touchpoints.",
      tags: ["Mobile App", "Web Design", "Transport", "UI/UX"],
      codeLink: null,
      liveLink: "https://netts.in",
      prototypeLink: "https://www.figma.com/design/dTVdo4MP7PH1CbsxzzRl1i/Netts-Mobility-Application?node-id=0-1&t=eJmSpHrKWIYMQ511-1",
    },
    {
      title: "Investments App",
      description:
        "Designed a comprehensive mobile investment platform featuring portfolio tracking, real-time market data, and intuitive wealth management tools with a focus on user-friendly financial experiences.",
      tags: ["Mobile App", "FinTech", "UI Design", "Investment Platform"],
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
                A showcase of design solutions that create meaningful user experiences and drive business impact
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
