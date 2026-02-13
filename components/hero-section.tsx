"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Heart, ChevronDown } from "lucide-react"
import { FloatingParticles } from "./floating-particles"
import { SparkleText } from "./sparkle-text"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <Image
          src="/images/image-a.jpeg"
          alt="Romantic sunset silhouette"
          fill
          sizes="100vw"
          className="object-cover scale-110"
          priority
        />
      </div>

      {/* Rich overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />

      {/* Animated vignette edges */}
      <div className="absolute inset-0 shadow-[inset_0_0_200px_rgba(0,0,0,0.5)]" />

      <FloatingParticles count={15} />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-[1.5s] ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
        }`}
      >
        {/* Decorative top line */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-20 md:w-32 bg-gradient-to-r from-transparent to-secondary/60" />
          <Heart className="w-6 h-6 text-secondary animate-heartbeat fill-secondary/30" />
          <div className="h-px w-20 md:w-32 bg-gradient-to-l from-transparent to-secondary/60" />
        </div>

        <p
          className={`text-secondary/80 font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          February 14th &mdash; Anniversary & Valentine{"'"}s Day
        </p>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-9xl text-primary-foreground leading-[1.1] mb-8">
          <span
            className={`block transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <SparkleText className="text-secondary">Our</SparkleText>
          </span>
          <span
            className={`block transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Story
          </span>
        </h1>

        <p
          className={`font-sans text-lg md:text-xl text-secondary/90 leading-relaxed max-w-xl mx-auto mb-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Celebrating our anniversary and Valentine&apos;s Day on the same
          beautiful day &mdash; because the universe knew we belonged together.
        </p>

        <a
          href="#our-story"
          className={`group inline-flex items-center gap-3 border-2 border-secondary/40 text-primary-foreground px-10 py-4 rounded-full font-sans text-sm tracking-[0.2em] uppercase hover:bg-secondary/20 hover:border-secondary/60 transition-all duration-500 animate-glow-pulse delay-[1.2s] ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Discover Our Journey
          <Heart className="w-4 h-4 group-hover:scale-125 transition-transform duration-300" />
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-secondary/50 font-sans text-xs tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5 text-secondary/50 animate-float" />
      </div>
    </section>
  )
}
