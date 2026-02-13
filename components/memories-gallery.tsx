"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Heart, Camera } from "lucide-react"

const memories = [
  {
    src: "/images/WhatsApp Image 2026-02-13 at 7.39.54 PM.jpeg",
    alt: "Night Walk to kharpandi Lhakhang",
    caption: "Our favorite walks",
    subtitle: "Where every step felt like floating",
    span: "md:col-span-1 md:row-span-2",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/food.jpeg",
    alt: "outing",
    caption: "Every Outing for Food rituals",
    subtitle: "Two Foodies, one love",
    span: "md:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/picnic.jpeg",
    alt: "A romantic  two",
    caption: "College Picnic together ",
    subtitle: "fun and laughter",
    span: "md:col-span-1",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/WhatsApp Image 2026-02-13 at 7.05.51 PM.jpeg",
    alt: "Dancing under the stars",
    caption: "Moment at Amochhu Bridge ",
    subtitle: "When it was the final moment before our summer vacation",
    span: "md:col-span-2",
    aspect: "aspect-[21/9]",
  },
]

export function MemoriesGallery() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.2 }
    )
    const el = headerRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <section className="py-28 md:py-40 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-1000 ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-5 py-2 mb-6">
            <Camera className="w-4 h-4 text-primary" />
            <span className="text-primary font-sans text-xs tracking-[0.3em] uppercase">Cherished Moments</span>
          </div>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
            Memories We Hold Dear
          </h2>
          <p className="font-sans text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
            A collection of moments that remind us why every day together is a gift.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {memories.map((memory, index) => (
            <GalleryCard key={index} memory={memory} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function GalleryCard({
  memory,
  index,
}: {
  memory: (typeof memories)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ${memory.span} ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"
        }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`${memory.aspect} relative`}>
        <Image
          src={memory.src}
          alt={memory.alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover transition-all duration-1000 ${isHovered ? "scale-110 brightness-75" : "scale-100 brightness-100"
            }`}
        />

        {/* Hover overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent transition-opacity duration-700 ${isHovered ? "opacity-100" : "opacity-0"
          }`} />

        {/* Content on hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
          <Heart
            className={`w-8 h-8 text-secondary mb-4 transition-all duration-500 ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-50"
              }`}
          />
          <h3
            className={`font-serif text-2xl md:text-3xl text-primary-foreground text-center mb-2 transition-all duration-500 delay-100 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {memory.caption}
          </h3>
          <p
            className={`font-sans text-sm text-secondary/80 text-center transition-all duration-500 delay-200 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
          >
            {memory.subtitle}
          </p>
        </div>

        {/* Corner accent */}
        <div className="absolute top-4 right-4">
          <div className={`w-8 h-8 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${isHovered ? "opacity-100 rotate-0" : "opacity-0 rotate-45"
            }`}>
            <Heart className="w-4 h-4 text-primary-foreground fill-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}
