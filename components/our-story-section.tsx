"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Sparkles } from "lucide-react"

interface Milestone {
  year: string
  icon: typeof Heart
  title: string
  description: string
  color: string
}

const milestones: Milestone[] = [
  {
    year: "The Beginning",
    icon: Heart,
    title: "Lucky Number?- Known destiny lol! ",
    description:
      "An unknown number kept calling. I almost ignored it and told you WRONG NUMBER!.But something told me to answer. Turns out, it was the beginning of the best decision of my life.",
    color: "from-primary/20 to-transparent",
  },
  {
    year: "First Date",
    icon: Sparkles,
    title: "The whole conversation Changed Everything",
    description:
      "Nervous laughter, shared stories over evening walk after dinner, and the quiet realization that this was something different, something real.",
    color: "from-accent/30 to-transparent",
  },
  {
    year: "Growing Together",
    icon: Heart,
    title: "Building Our World",
    description:
      "Through late-night conversations, spontaneous fights, and quiet mornings together, we built a love that only grew stronger.",
    color: "from-primary/20 to-transparent",
  },
  {
    year: "Today",
    icon: Sparkles,
    title: "Still Falling For You",
    description:
      "Every anniversary and Valentine\u2019s Day reminds us that the best love stories never truly end \u2014 they just keep getting better.",
    color: "from-accent/30 to-transparent",
  },
]

export function OurStorySection() {
  return (
    <section id="our-story" className="py-28 md:py-40 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeader />
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
            <div className="h-full w-full bg-gradient-to-b from-primary/40 via-accent/40 to-primary/40" />
          </div>
          {milestones.map((milestone, index) => (
            <TimelineItem key={index} milestone={milestone} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader() {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true) },
      { threshold: 0.2 }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  return (
    <div
      ref={ref}
      className={`text-center mb-24 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
    >
      <div className="inline-flex items-center gap-3 bg-primary/10 rounded-full px-5 py-2 mb-6">
        <Heart className="w-4 h-4 text-primary animate-heartbeat" />
        <span className="text-primary font-sans text-xs tracking-[0.3em] uppercase">Our Journey</span>
      </div>
      <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 text-balance">
        A Timeline of Us
      </h2>
      <p className="font-sans text-muted-foreground text-lg max-w-lg mx-auto leading-relaxed">
        Every great love story has its chapters. Here are some of ours.
      </p>
    </div>
  )
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    const el = ref.current
    if (el) observer.observe(el)
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  const isEven = index % 2 === 0
  const Icon = milestone.icon

  return (
    <div
      ref={ref}
      className={`relative flex items-start mb-20 last:mb-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      style={{ transitionDelay: `${index * 0.2}s` }}
    >
      {/* Timeline dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/30 ring-4 ring-background">
          <Icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
        </div>
      </div>

      {/* Card */}
      <div
        className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)] ${isEven ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
          }`}
      >
        <div className={`relative bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-500 group overflow-hidden`}>
          {/* Gradient accent */}
          <div className={`absolute top-0 ${isEven ? "right-0" : "left-0"} w-1/2 h-1 bg-gradient-to-r ${milestone.color}`} />

          <span className="inline-block text-primary font-sans text-xs font-semibold tracking-[0.2em] uppercase bg-primary/10 rounded-full px-3 py-1 mb-3">
            {milestone.year}
          </span>
          <h3 className="font-serif text-2xl md:text-3xl text-foreground mt-1 mb-4 group-hover:text-primary transition-colors duration-300">
            {milestone.title}
          </h3>
          <p className="font-sans text-muted-foreground leading-relaxed">
            {milestone.description}
          </p>
        </div>
      </div>
    </div>
  )
}
