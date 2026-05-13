"use client"

import { useEffect, useRef } from "react"

export default function FooterParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<{ x: number; y: number; baseX: number; baseY: number; opacity: number; size: number }[]>([])
  const rafRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.clientWidth
      canvas.height = parent.clientHeight
      const spacing = 45
      const cols = Math.floor(canvas.width / spacing)
      const rows = Math.floor(canvas.height / spacing)
      const particles: typeof particlesRef.current = []
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            baseX: i * spacing + spacing / 2,
            baseY: j * spacing + spacing / 2,
            opacity: 0.06,
            size: 1.5,
          })
        }
      }
      particlesRef.current = particles
    }

    const onMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current.x = e.clientX - rect.left
      mouseRef.current.y = e.clientY - rect.top
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const { x: mx, y: my } = mouseRef.current

      for (const p of particlesRef.current) {
        const dx = mx - p.x
        const dy = my - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < 120) {
          const force = (120 - dist) / 120
          p.opacity = Math.min(0.5, 0.06 + force * 0.44)
          p.size = Math.min(3, 1.5 + force * 1.5)
          p.x = p.baseX + dx * force * 0.06
          p.y = p.baseY + dy * force * 0.06
        } else {
          p.opacity = Math.max(0.04, p.opacity - 0.01)
          p.size = Math.max(1, p.size - 0.01)
          p.x += (p.baseX - p.x) * 0.06
          p.y += (p.baseY - p.y) * 0.06
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(172, 50%, 45%, ${p.opacity})`
        ctx.fill()

        for (const other of particlesRef.current) {
          if (p === other) continue
          const d = Math.sqrt((p.x - other.x) ** 2 + (p.y - other.y) ** 2)
          if (d < 80 && p.opacity > 0.15 && other.opacity > 0.15) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(other.x, other.y)
            ctx.strokeStyle = `hsla(172, 50%, 45%, ${Math.min(p.opacity, other.opacity) * 0.25})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    resize()
    window.addEventListener("resize", resize)
    const parent = canvas.parentElement
    if (parent) parent.addEventListener("mousemove", onMouse)
    animate()

    return () => {
      window.removeEventListener("resize", resize)
      if (parent) parent.removeEventListener("mousemove", onMouse)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  )
}
