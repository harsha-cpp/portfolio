"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

import { experiences, type Experience as ExperienceEntry } from "@/lib/data"

function ExperienceCard({ experience, index }: { experience: ExperienceEntry; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="timeline-item"
    >
      <Card className="relative overflow-hidden border border-border/50 transition-all duration-300 hover:border-border hover:shadow-lg">
        <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-primary/40 to-transparent" />

        {/* ── Always-visible header ── */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="w-full text-left"
          aria-expanded={open}
        >
          <CardContent className="p-5 md:p-6">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-foreground">{experience.title}</h3>
                <p className="text-muted-foreground text-sm">{experience.company}</p>
              </div>

              <div className="flex sm:flex-col sm:items-end items-center gap-2 sm:gap-1 flex-shrink-0">
                <Badge variant="outline" className="border-border/60 text-muted-foreground text-xs">
                  {experience.period}
                </Badge>
                <span className="text-xs text-muted-foreground/70">{experience.location}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {experience.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs font-medium bg-secondary/60 border border-border/40 text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* chevron */}
            <div className="flex justify-end mt-3">
              <motion.div
                animate={{ rotate: open ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="h-4 w-4 text-muted-foreground/50" />
              </motion.div>
            </div>
          </CardContent>
        </button>

        {/* ── Collapsible achievements ── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="content"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              <div className="px-5 md:px-6 pb-5 md:pb-6 border-t border-border/30 pt-4">
                <ul className="space-y-2">
                  {experience.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-2 mt-2 h-1 w-1 bg-primary/50 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </li>
                  ))}
                </ul>

                {experience.link && (
                  <div className="flex justify-start mt-4">
                    <a
                      href={experience.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 px-3 py-2 text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200 hover:bg-primary/5 group"
                    >
                      <ExternalLink className="h-3.5 w-3.5 group-hover:scale-110 transition-transform duration-200" />
                      Visit Website
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-left">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl text-white">
              <span className="cursive-text">experience</span>
            </h2>
          </div>

          <div className="space-y-4 mt-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={index} experience={experience} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
