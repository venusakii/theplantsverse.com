import { Button } from "@/components/ui/button"
import { ArrowRight, Leaf } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-[#F1F8E9] via-[#A5D6A7]/20 to-[#F1F8E9]" />

      {/* Floating leaf decorations */}
      <div className="absolute top-20 left-10 animate-float-leaf opacity-30">
        <Leaf className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute top-40 right-20 animate-float-leaf opacity-20" style={{ animationDelay: "2s" }}>
        <Leaf className="w-32 h-32 text-primary" />
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float-leaf opacity-25" style={{ animationDelay: "4s" }}>
        <Leaf className="w-20 h-20 text-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-secondary/30 rounded-full text-sm font-medium text-primary">
            🌱 Welcome to Your Plant Paradise
          </div>

          <h1 className="text-5xl md:text-7xl font-serif font-bold text-primary mb-6 text-balance">
            Discover Rare & Exotic Houseplants
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed text-pretty">
            Explore our curated collection of rare houseplants from around the world. Your journey to creating a
            botanical sanctuary starts here.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6">
              Explore Collection
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              Browse Encyclopedia
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Rare Species</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
