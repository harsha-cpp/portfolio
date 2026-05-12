"use client"

import { useEffect, useRef, useState } from "react"

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const CYCLES_PER_CHAR = 4
const CYCLE_MS = 35
const STAGGER_MS = 25

interface TextScrambleProps {
  text: string
  className?: string
}

export default function TextScramble({ text, className }: TextScrambleProps) {
  const [chars, setChars] = useState<{ char: string; resolved: boolean }[]>(
    () => text.split("").map((ch) => ({ char: ch === " " ? " " : GLYPHS[Math.floor(Math.random() * GLYPHS.length)], resolved: ch === " " }))
  )
  const rafRef = useRef<number | null>(null)
  const startRef = useRef<number | null>(null)

  useEffect(() => {
    const letters = text.split("")

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now
      const elapsed = now - startRef.current

      let allDone = true
      const next = letters.map((target, i) => {
        if (target === " ") return { char: " ", resolved: true }

        const charStart = i * STAGGER_MS
        const charElapsed = elapsed - charStart
        if (charElapsed < 0) {
          allDone = false
          return { char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)], resolved: false }
        }

        const cycle = Math.floor(charElapsed / CYCLE_MS)
        if (cycle >= CYCLES_PER_CHAR) {
          return { char: target, resolved: true }
        }

        allDone = false
        return { char: GLYPHS[Math.floor(Math.random() * GLYPHS.length)], resolved: false }
      })

      setChars(next)

      if (!allDone) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    startRef.current = null
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [text])

  return (
    <span className={className} aria-label={text}>
      {chars.map((c, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            opacity: c.resolved ? 1 : 0.4,
            transition: c.resolved ? "opacity 0.15s ease" : "none",
            minWidth: c.char === " " ? "0.3em" : undefined,
          }}
        >
          {c.char}
        </span>
      ))}
    </span>
  )
}
