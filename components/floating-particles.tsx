"use client"

import { useEffect, useState } from "react"
import { Heart, Sparkles, Star } from "lucide-react"

interface Particle {
  id: number
  x: number
  size: number
  delay: number
  duration: number
  type: "heart" | "sparkle" | "star"
  opacity: number
}

export function FloatingParticles({ count = 20 }: { count?: number }) {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const items: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: 8 + Math.random() * 16,
      delay: Math.random() * 8,
      duration: 4 + Math.random() * 6,
      type: (["heart", "sparkle", "star"] as const)[Math.floor(Math.random() * 3)],
      opacity: 0.1 + Math.random() * 0.25,
    }))
    setParticles(items)
  }, [count])

  if (particles.length === 0) return null

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {particles.map((p) => {
        const Icon = p.type === "heart" ? Heart : p.type === "sparkle" ? Sparkles : Star
        return (
          <Icon
            key={p.id}
            className="absolute text-primary-foreground"
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              bottom: "-5%",
              opacity: p.opacity,
              animation: `rise ${p.duration}s ease-out ${p.delay}s infinite`,
            }}
          />
        )
      })}
    </div>
  )
}
