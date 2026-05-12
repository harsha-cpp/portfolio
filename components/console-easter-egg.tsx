"use client"

import { useEffect } from "react"
import { SITE } from "@/lib/data"

export default function ConsoleEasterEgg() {
  useEffect(() => {
    const asciiArt = `
██╗  ██╗ █████╗ ██████╗ ███████╗██╗  ██╗ █████╗ 
██║  ██║██╔══██╗██╔══██╗██╔════╝██║  ██║██╔══██╗
███████║███████║██████╔╝███████╗███████║███████║
██╔══██║██╔══██║██╔══██╗╚════██║██╔══██║██╔══██║
██║  ██║██║  ██║██║  ██║███████║██║  ██║██║  ██║
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝
`

    console.log(
      "%c" + asciiArt,
      "color: #2db8a0; font-family: monospace; font-size: 12px;"
    )

    console.log(
      "%cHey, fellow developer! 👋",
      "color: #2db8a0; font-size: 14px; font-weight: bold; font-family: monospace;"
    )

    console.log(
      "%cCurious about the code? → github.com/harsha-cpp/portfolio",
      "color: #ededed; font-family: monospace; font-size: 12px;"
    )

    console.log(" ")

    console.log(
      "%cTry these in the console:",
      "color: #787a7d; font-family: monospace; font-size: 12px;"
    )

    console.log(
      "%c  profile()  — who I am\n  skills()   — what I work with\n  hire()     — let's talk",
      "color: #2db8a0; font-family: monospace; font-size: 12px;"
    )

    ;(window as any).profile = () => {
      console.log(
        "%c── Profile ──────────────────────────────",
        "color: #2db8a0; font-family: monospace;"
      )
      console.log(
        "%c  Name     : Harsha Tummalapalli\n  Title    : Software Development Engineer\n  Location : Hyderabad, India\n  Role     : Founder & CTO @ Memolane",
        "color: #ededed; font-family: monospace; font-size: 12px;"
      )
      console.log(
        "%c  GitHub   : github.com/harsha-cpp\n  LinkedIn : linkedin.com/in/sri-harsha-tummalapalli",
        "color: #787a7d; font-family: monospace; font-size: 12px;"
      )
    }

    ;(window as any).skills = () => {
      console.log(
        "%c── Skills ───────────────────────────────",
        "color: #2db8a0; font-family: monospace;"
      )
      console.table([
        { Category: "Languages",   Technologies: "Go, TypeScript, Python, Rust" },
        { Category: "Frontend",    Technologies: "Next.js, React, Tailwind CSS, Framer Motion" },
        { Category: "Backend",     Technologies: "Go (Chi/Gin/Elysia), Node.js, Express" },
        { Category: "Databases",   Technologies: "PostgreSQL, Redis, pgvector, SQLite" },
        { Category: "Cloud",       Technologies: "Azure, Vercel, AWS SES, S3" },
        { Category: "DevOps",      Technologies: "Docker, GitHub Actions, Turborepo, Bun" },
        { Category: "Mobile",      Technologies: "Expo, React Native, Tauri" },
      ])
    }

    ;(window as any).hire = () => {
      console.log(
        "%c── Let's Talk ───────────────────────────",
        "color: #2db8a0; font-family: monospace;"
      )
      console.log(
        "%c  Email  : sriharshatummalapalli@gmail.com\n  Cal    : cal.com/harshatummalapalli\n  Twitter: @harsha_cpp",
        "color: #ededed; font-family: monospace; font-size: 12px;"
      )
      console.log(
        "%c  Opening email...",
        "color: #787a7d; font-family: monospace; font-size: 12px;"
      )
      window.open(`mailto:${SITE.email}?subject=Let's work together`)
    }
  }, [])

  return null
}
