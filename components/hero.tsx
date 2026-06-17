"use client"

import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import TextScramble from "@/components/text-scramble"

/* eslint-disable @next/next/no-img-element */

function BiomeLogo({ className }: { className?: string }) {
  return (
    <img
      src="https://biomejs.dev/img/favicon.svg"
      alt="Biome"
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}

function EncoreLogo({ className }: { className?: string }) {
  return (
    <img
      src="https://user-images.githubusercontent.com/78424526/214602214-52e0483a-b5fc-4d4c-b03e-0b7b23e012df.svg"
      alt="Encore"
      className={className}
      aria-hidden="true"
      draggable={false}
    />
  )
}

function FacebookLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M36 18C36 8.059 27.941 0 18 0S0 8.059 0 18c0 8.983 6.584 16.42 15.188 17.78V23.203h-4.57V18h4.57v-3.965c0-4.512 2.687-7.004 6.8-7.004 1.97 0 4.031.351 4.031.351v4.43h-2.27c-2.237 0-2.934 1.388-2.934 2.812V18h4.993l-.798 5.203h-4.195V35.78C29.416 34.42 36 26.983 36 18Z"
        fill="#0866FF"
      />
      <path
        d="M24.99 23.203 25.788 18H20.82v-3.376c0-1.424.694-2.812 2.93-2.812h2.27v-4.43s-2.06-.351-4.03-.351c-4.114 0-6.801 2.492-6.801 7.004V18h-4.57v5.203h4.57V35.78a18.14 18.14 0 0 0 5.625 0V23.203h4.195Z"
        fill="#fff"
      />
    </svg>
  )
}

const contributions = [
  {
    pr: "#10568",
    url: "https://github.com/biomejs/biome/pull/10568",
    logo: <BiomeLogo className="h-5 w-5 object-contain" />,
    org: "Biome",
    desc: "Linter / Formatter toolchain",
  },
  {
    pr: "#2471",
    url: "https://github.com/encoredev/encore/pull/2471",
    logo: <EncoreLogo className="h-5 w-5 object-contain" />,
    org: "Encore",
    desc: "Backend framework",
  },
  {
    pr: "#1969",
    url: "https://github.com/facebook/yoga/pull/1969",
    logo: <FacebookLogo className="h-5 w-5 object-contain flex-shrink-0" />,
    org: "Meta",
    desc: "Layout engine (React Native)",
  },
]

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
    <section id="home" className="relative flex flex-col items-start justify-center min-h-screen px-4 md:px-6 pt-safe-top">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-16 lg:gap-12">

          {/* ── Left: existing hero content ── */}
          <div className="max-w-2xl lg:max-w-2xl flex-1">

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ willChange: "opacity" }}
            className="font-funnel-display text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.05] mb-3"
          >
            <TextScramble text="Harsha Tummalapalli" />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ willChange: "opacity" }}
            className="font-funnel-display text-3xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground/40 tracking-tight leading-[0.95]"
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

          {/* ── Right: Open Source Contributions ── */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="hidden lg:block w-full lg:w-[300px] flex-shrink-0"
          >
            <p className="text-[10px] font-medium text-primary font-space-grotesk tracking-widest uppercase mb-4">
              Open Source
            </p>

            <div className="space-y-2">
              {contributions.map((c, i) => (
                <motion.a
                  key={c.pr}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                  className="group flex items-center justify-between gap-3 px-4 py-3.5 bg-card border border-border/40 hover:border-border transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-secondary/60 border border-border/40">
                      {c.logo}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-foreground font-medium leading-tight truncate">
                        {c.org}
                      </p>
                      <p className="text-[11px] text-muted-foreground/60 mt-0.5 leading-tight truncate">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="text-[11px] font-space-grotesk text-muted-foreground/50 tabular-nums">
                      {c.pr}
                    </span>
                    <ExternalLink className="h-3 w-3 text-muted-foreground/30 group-hover:text-primary transition-colors duration-200" />
                  </div>
                </motion.a>
              ))}
            </div>


          </motion.div>

        </div>
      </div>

      {showChangelog && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="hidden lg:block fixed bottom-6 right-6 z-50 max-w-[240px] border border-border/40 bg-background/80 backdrop-blur-sm p-4"
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
