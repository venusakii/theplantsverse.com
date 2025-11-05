import { Hero } from "@/components/hero"
import { FeaturedPlants } from "@/components/featured-plants"
import { About } from "@/components/about"
import { Categories } from "@/components/categories"
import { Encyclopedia } from "@/components/encyclopedia"
import { CareGuides } from "@/components/care-guides"
import { Testimonials } from "@/components/testimonials"
import { Benefits } from "@/components/benefits"
import { Newsletter } from "@/components/newsletter"
import { Community } from "@/components/community"
import { LatestAdditions } from "@/components/latest-additions"
import { Footer } from "@/components/footer"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedPlants />
      <About />
      <Categories />
      <Encyclopedia />
      <Benefits />
      <CareGuides />
      <LatestAdditions />
      <Testimonials />
      <Community />
      <Newsletter />
      <Footer />
    </main>
  )
}
