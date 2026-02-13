import { HeroSection } from "@/components/hero-section"
import { OurStorySection } from "@/components/our-story-section"
import { MemoriesGallery } from "@/components/memories-gallery"
import { LoveLetterSection } from "@/components/love-letter-section"
import { FooterSection } from "@/components/footer-section"

export default function Page() {
  return (
    <main>
      <HeroSection />
      <OurStorySection />
      <MemoriesGallery />
      <LoveLetterSection />
      <FooterSection />
    </main>
  )
}
