import { Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="py-16 bg-primary relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary-foreground/5 blur-3xl rounded-full" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-12 bg-primary-foreground/20" />
          <Heart className="w-5 h-5 text-primary-foreground/60 fill-primary-foreground/30 animate-heartbeat" />
          <div className="h-px w-12 bg-primary-foreground/20" />
        </div>
        <p className="font-serif text-xl text-primary-foreground/90 mb-2">
          Made with love, for you
        </p>
        <p className="text-primary-foreground/50 font-sans text-sm tracking-wider">
          Happy Anniversary & Happy Valentine&apos;s Day
        </p>
      </div>
    </footer>
  )
}
