"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import TextScramble from "@/components/text-scramble"

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col items-start justify-center min-h-screen px-4 md:px-6">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />

      <div className="container mx-auto">
        <div className="max-w-4xl">

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="font-funnel-display text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05] mb-4"
          >
            <TextScramble text="Harsha Tummalapalli" />
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
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
            <Link
              href="#contact"
              className="btn-primary  px-6 py-3 text-sm font-medium"
            >
              Get In Touch
            </Link>
            <Link
              href="/#projects"
              className="btn-secondary  px-6 py-3 text-sm font-medium"
            >
              View Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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

        </div>
      </div>
    </section>
  )
}
