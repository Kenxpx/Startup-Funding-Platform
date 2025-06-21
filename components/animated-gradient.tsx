"use client"

import { useEffect, useRef } from "react"

export function AnimatedGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    let animationFrameId: number
    let t = 0

    const animate = () => {
      t += 0.005

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create gradient
      const gradient = ctx.createLinearGradient(
        canvas.width * (0.5 + 0.5 * Math.sin(t * 0.5)),
        0,
        canvas.width * (0.5 + 0.5 * Math.cos(t * 0.3)),
        canvas.height,
      )

      // Add colors
      gradient.addColorStop(0, "rgba(125, 39, 255, 0.05)")
      gradient.addColorStop(0.5, "rgba(0, 87, 255, 0.05)")
      gradient.addColorStop(1, "rgba(0, 200, 255, 0.05)")

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw some circles
      for (let i = 0; i < 5; i++) {
        const x = canvas.width * (0.2 + 0.6 * Math.sin(t + i))
        const y = canvas.height * (0.2 + 0.6 * Math.cos(t + i * 0.7))
        const radius = 50 + 30 * Math.sin(t * 0.8 + i)

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        circleGradient.addColorStop(0, "rgba(125, 39, 255, 0.03)")
        circleGradient.addColorStop(1, "rgba(125, 39, 255, 0)")

        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fillStyle = circleGradient
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" style={{ pointerEvents: "none" }} />
}
