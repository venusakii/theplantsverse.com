import { Leaf, Award, Globe, Heart } from "lucide-react"

export function About() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/10" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Your Trusted Source for Rare Houseplants
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              LyophiHome is more than just a plant shop. We're a community of passionate plant enthusiasts dedicated to
              bringing the world's most extraordinary houseplants to your home.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Every plant in our collection is carefully sourced from ethical growers worldwide, ensuring you receive
              healthy, thriving specimens with complete care documentation.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Premium Quality</h3>
                  <p className="text-sm text-muted-foreground">Certified healthy plants</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Global Sourcing</h3>
                  <p className="text-sm text-muted-foreground">From 30+ countries</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Expert Care</h3>
                  <p className="text-sm text-muted-foreground">24/7 support team</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Sustainable</h3>
                  <p className="text-sm text-muted-foreground">Eco-friendly practices</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glossy-card p-8 rounded-2xl">
              <img
                src="/beautiful-indoor-plant-collection-greenhouse.jpg"
                alt="Plant collection"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/30 rounded-full blur-3xl" />
            <div className="absolute -top-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
