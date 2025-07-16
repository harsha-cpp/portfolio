"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  baseX: number
  baseY: number
  opacity: number
  size: number
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    const initParticles = () => {
      const particles: Particle[] = []
      const spacing = 50
      const cols = Math.floor(canvas.width / spacing)
      const rows = Math.floor(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          particles.push({
            x: i * spacing + spacing / 2,
            y: j * spacing + spacing / 2,
            baseX: i * spacing + spacing / 2,
            baseY: j * spacing + spacing / 2,
            opacity: 0.1,
            size: 2
          })
        }
      }
      particlesRef.current = particles
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update particles
      particles.forEach(particle => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const maxDistance = 150

        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance
          particle.opacity = Math.min(0.8, 0.1 + force * 0.7)
          particle.size = Math.min(4, 2 + force * 2)
          
          // Subtle movement toward cursor
          particle.x = particle.baseX + (dx * force * 0.1)
          particle.y = particle.baseY + (dy * force * 0.1)
        } else {
          particle.opacity = Math.max(0.05, particle.opacity - 0.02)
          particle.size = Math.max(1, particle.size - 0.02)
          particle.x += (particle.baseX - particle.x) * 0.1
          particle.y += (particle.baseY - particle.y) * 0.1
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(0, 65%, 55%, ${particle.opacity})`
        ctx.fill()

        // Draw connections to nearby particles
        particles.forEach(otherParticle => {
          if (particle === otherParticle) return
          
          const dx2 = particle.x - otherParticle.x
          const dy2 = particle.y - otherParticle.y
          const distance2 = Math.sqrt(dx2 * dx2 + dy2 * dy2)
          
          if (distance2 < 100 && particle.opacity > 0.2 && otherParticle.opacity > 0.2) {
            const lineOpacity = Math.min(particle.opacity, otherParticle.opacity) * 0.3
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `hsla(0, 65%, 55%, ${lineOpacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.6 }}
    />
  )
}
