"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Feather } from "lucide-react"
import { FloatingParticles } from "./floating-particles"

export function LoveLetterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.15 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <section className="py-28 md:py-40 bg-primary relative overflow-hidden">
      <FloatingParticles count={12} />

      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary-foreground/5 blur-2xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full bg-primary-foreground/5 blur-2xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary-foreground/3 blur-3xl" />

      <div
        ref={ref}
        className="max-w-2xl mx-auto px-6 text-center relative z-10"
      >
        {/* Animated feather icon */}
        <div
          className={`mb-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
            }`}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 backdrop-blur-sm mb-6">
            <Feather className="w-7 h-7 text-primary-foreground/80 animate-float" />
          </div>
        </div>

        <h2
          className={`font-serif text-4xl md:text-6xl text-primary-foreground mb-12 text-balance transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          A Letter to You
        </h2>

        <div
          className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Letter card */}
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary-foreground/10">
            <div className="space-y-6 text-primary-foreground/90 font-sans text-lg leading-relaxed">
              <p className="font-serif text-xl text-primary-foreground italic">Hi Handsome,</p>
              <p>
                365 days were not easy. We had our ups and downs — that’s part of life. Falling in love and saying “I love you” is common, but staying in love and growing together is the hardest part. You remember, “zamling nang gi shob bom en sae”.
              </p>
              <p>
                I never imagined in my wildest dreams that I would be loved so genuinely. Whenever I feel low, you show up. You don’t try to fix me or give lectures — you just sit beside me, steady and present, letting me lean on you. That silence speaks louder than words and reminds me I’m not alone.
              </p>
              <p>
                Thank you for guiding me and loving me the way you do. And sorry if I’m too much sometimes… but somehow, you have to handle me tye la 😅💛
              </p>
              <div className="pt-4">
                <p className="font-serif text-2xl text-primary-foreground italic">
                  Forever and always my Naleypoko.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative bottom */}
        <div
          className={`flex items-center justify-center gap-4 mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary-foreground/30" />
          <Heart className="w-5 h-5 text-primary-foreground/50 animate-heartbeat fill-primary-foreground/20" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary-foreground/30" />
        </div>
      </div>
    </section>
  )
}
