"use client"

import { Github, Linkedin, Mail, Download } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import TextScramble from "@/components/text-scramble"

export default function Hero() {
  const [time, setTime] = useState("")
  const [activeCount, setActiveCount] = useState(0)
  const [showChangelog, setShowChangelog] = useState(true)

  useEffect(() => {
    const onScroll = () => setShowChangelog(window.scrollY <= 10)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const istMs = now.getTime() + (now.getTimezoneOffset() + 330) * 60000
      const ist = new Date(istMs)
      const hh = String(ist.getHours()).padStart(2, "0")
      const mm = String(ist.getMinutes()).padStart(2, "0")
      const ss = String(ist.getSeconds()).padStart(2, "0")
      setTime(`${hh}:${mm}:${ss}`)
    }
    updateTime()
    const id = setInterval(updateTime, 1000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const onCells = (e: Event) => {
      const detail = (e as CustomEvent<number>).detail
      if (typeof detail === "number") setActiveCount(detail)
    }
    window.addEventListener("grid-cells", onCells as EventListener)
    return () => window.removeEventListener("grid-cells", onCells as EventListener)
  }, [])

  return (
    <section id="home" className="relative flex flex-col items-start justify-center min-h-screen px-4 md:px-6">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container mx-auto">
        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ willChange: "opacity" }}
            className="font-funnel-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05] mb-4"
          >
            <TextScramble text="Harsha Tummalapalli" />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ willChange: "opacity" }}
            className="font-funnel-display text-5xl sm:text-6xl lg:text-7xl font-bold text-muted-foreground/40 tracking-tight leading-[0.95]"
          >
            I build things that ship.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-10 text-base md:text-lg text-muted-foreground leading-relaxed max-w-[540px]"
          >
            I design systems, write backend services, and ship products
            end-to-end. Currently leading engineering at{" "}
            <span className="text-foreground font-medium">Memolane</span>, architecting
            the platform, scaling the infrastructure, and getting an AI
            product into production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: "hsl(172 55% 50%)",
                borderColor: "hsl(172 55% 50% / 0.7)",
              }}
              className="btn-primary px-6 py-3 text-sm font-medium inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </motion.a>
            <Link
              href="/#projects"
              className="btn-secondary px-6 py-3 text-sm font-medium"
            >
              View Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="mt-10 flex items-center gap-5"
          >
            <Link
              href="https://github.com/harsha-cpp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors duration-200"
            >
              <Github className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/sri-harsha-tummalapalli/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-[18px] w-[18px]" />
            </Link>
            <Link
              href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=sriharshatummalapalli@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground/50 hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-[18px] w-[18px]" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="mt-5 flex items-center gap-4"
          >
            <span className="font-space-grotesk text-xs tracking-wider text-muted-foreground/50 tabular-nums">
              {time} IST
            </span>
            <span className="flex items-center gap-2 text-xs text-muted-foreground/50 font-space-grotesk tabular-nums">
              <span className="h-2.5 w-2.5 bg-primary/60 animate-pulse" />
              {activeCount} active
            </span>
          </motion.div>

        </div>
      </div>

      {showChangelog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="fixed bottom-6 right-6 z-50 max-w-[240px] border border-border/40 bg-background/80 backdrop-blur-sm p-4"
        >
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-medium text-primary font-space-grotesk tracking-widest uppercase">v2.1</span>
          <span className="text-[10px] text-muted-foreground/50">May 2026</span>
        </div>
        <ul className="space-y-1.5 mb-3">
          <li className="flex items-start gap-2 text-[11px] text-muted-foreground/60 leading-tight">
            <span className="mt-1 h-1 w-1 bg-primary/50 flex-shrink-0" />
            Interactive grid background
          </li>
          <li className="flex items-start gap-2 text-[11px] text-muted-foreground/60 leading-tight">
            <span className="mt-1 h-1 w-1 bg-primary/50 flex-shrink-0" />
            Command palette and guestbook
          </li>
          <li className="flex items-start gap-2 text-[11px] text-muted-foreground/60 leading-tight">
            <span className="mt-1 h-1 w-1 bg-primary/50 flex-shrink-0" />
            Categorized tech stack
          </li>
          <li className="flex items-start gap-2 text-[11px] text-muted-foreground/60 leading-tight">
            <span className="mt-1 h-1 w-1 bg-primary/50 flex-shrink-0" />
            Boxy design with teal accent
          </li>
        </ul>
        <Link
          href="/changelog"
          className="text-[10px] text-primary hover:text-primary/80 font-space-grotesk tracking-wide transition-colors"
        >
          View changelog &rarr;
        </Link>
      </motion.div>
      )}
    </section>
  )
}
