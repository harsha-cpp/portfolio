"use client"

import { useCallback, useEffect, useRef, useState } from "react"

const CELL_SIZE = 50
const FADE_DURATION = 2000

interface ActiveCell {
  key: string
  activatedAt: number
}

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [cells, setCells] = useState<ActiveCell[]>([])
  const [gridOpacity, setGridOpacity] = useState(1)
  const rafRef = useRef<number>()
  const lastCellRef = useRef("")

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const viewH = window.innerHeight
      const opacity = Math.max(0.3, 1 - (scrolled / viewH) * 0.7)
      setGridOpacity(opacity)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const getCellFromEvent = useCallback((e: MouseEvent) => {
    const container = containerRef.current
    if (!container) return null
    const scrollX = window.scrollX
    const scrollY = window.scrollY
    const x = e.clientX + scrollX
    const y = e.clientY + scrollY
    const col = Math.floor(x / CELL_SIZE)
    const row = Math.floor(y / CELL_SIZE)
    return { col, row, key: `${col}-${row}` }
  }, [])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cell = getCellFromEvent(e)
    if (!cell || cell.key === lastCellRef.current) return
    lastCellRef.current = cell.key

    setCells((prev) => {
      const existing = prev.find((c) => c.key === cell.key)
      if (existing) {
        return prev.map((c) =>
          c.key === cell.key ? { ...c, activatedAt: Date.now() } : c
        )
      }
      return [...prev, { key: cell.key, activatedAt: Date.now() }]
    })
  }, [getCellFromEvent])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [handleMouseMove])

  useEffect(() => {
    const cleanup = () => {
      const now = Date.now()
      setCells((prev) => {
        const next = prev.filter((c) => now - c.activatedAt < FADE_DURATION)
        setTimeout(() => {
          window.dispatchEvent(new CustomEvent("grid-cells", { detail: next.length }))
        }, 0)
        return next
      })
      rafRef.current = requestAnimationFrame(cleanup)
    }
    rafRef.current = requestAnimationFrame(cleanup)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{
        backgroundImage:
          `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${CELL_SIZE}' height='${CELL_SIZE}'%3E%3Cpath d='M${CELL_SIZE} 0L${CELL_SIZE} ${CELL_SIZE} 0 ${CELL_SIZE}' fill='none' stroke='rgba(255,255,255,0.03)' stroke-width='1'/%3E%3C/svg%3E")`,
        backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
        opacity: gridOpacity,
        transition: "opacity 0.2s ease-out",
      }}
    >
      {cells.map((cell) => {
        const [col, row] = cell.key.split("-").map(Number)
        const elapsed = Date.now() - cell.activatedAt
        const opacity = Math.max(0, 1 - elapsed / FADE_DURATION) * 0.08

        return (
          <div
            key={cell.key}
            className="absolute"
            style={{
              left: col * CELL_SIZE + 1,
              top: row * CELL_SIZE + 1,
              width: CELL_SIZE - 1,
              height: CELL_SIZE - 1,
              backgroundColor: `hsla(172, 50%, 45%, ${opacity})`,
            }}
          />
        )
      })}
    </div>
  )
}
