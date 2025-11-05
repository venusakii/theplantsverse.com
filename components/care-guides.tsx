import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Droplets, Sun, Thermometer, Wind } from "lucide-react"

const guides = [
  {
    title: "Watering Guide",
    description: "Learn the perfect watering schedule for different plant types",
    icon: Droplets,
    image: "/watering-houseplants-care.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Light Requirements",
    description: "Understanding light needs from low to bright indirect",
    icon: Sun,
    image: "/plant-light-requirements-window.jpg",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Temperature & Humidity",
    description: "Creating the ideal climate for tropical plants",
    icon: Thermometer,
    image: "/humidity-tropical-plants-misting.jpg",
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Air Circulation",
    description: "Proper ventilation for healthy plant growth",
    icon: Wind,
    image: "/indoor-plants-air-circulation.jpg",
    color: "from-teal-500 to-green-500",
  },
]

export function CareGuides() {
  return (
    <section className="py-24 bg-background" id="care-guides">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Expert Care Guides</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know to keep your plants thriving
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {guides.map((guide, index) => {
            const Icon = guide.icon
            return (
              <Card key={index} className="glossy-card overflow-hidden group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${guide.color} opacity-20`} />
                  <div className="absolute top-6 left-6 w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">{guide.title}</h3>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <Button variant="link" className="text-primary p-0 h-auto">
                    Read Full Guide →
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            View All Care Guides
          </Button>
        </div>
      </div>
    </section>
  )
}
