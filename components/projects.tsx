import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/data"

export default function Projects() {
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
                  <div className="relative p-6  bg-background border border-border/50 transition-colors duration-200 hover:border-border h-full flex flex-col">
                    <div className="flex flex-col h-full space-y-4">
                      <div className="flex items-center justify-between">
                        <Link href={`/projects/${project.slug}`} className="flex items-center gap-2 hover:gap-3 transition-all duration-200">
                          <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-200">
                            {project.title}
                          </h3>
                          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                        </Link>
                        {project.featured && (
                          <span className="text-[10px] uppercase tracking-[0.15em] text-primary/80 border border-primary/30 px-2 py-0.5 ">
                            Case Study
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1.5 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground "
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
                        {project.prototypeLink && (
                          <Link href={project.prototypeLink} target="_blank" rel="noopener noreferrer">
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
