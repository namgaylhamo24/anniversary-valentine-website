"use client"

import { useEffect, useState } from "react"

interface Sparkle {
  id: number
  x: number
  y: number
  size: number
  delay: number
}

export function SparkleText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])

  useEffect(() => {
    const items = Array.from({ length: 6 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 3,
    }))
    setSparkles(items)
  }, [])

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      {sparkles.map((s) => (
        <svg
          key={s.id}
          className="absolute pointer-events-none"
          style={{
            width: s.size,
            height: s.size,
            left: `${s.x}%`,
            top: `${s.y}%`,
            animation: `sparkle 2s ease-in-out ${s.delay}s infinite`,
          }}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41Z" />
        </svg>
      ))}
    </span>
  )
}
