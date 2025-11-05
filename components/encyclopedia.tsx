import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Search, Star } from "lucide-react"

const entries = [
  {
    name: "Monstera Deliciosa",
    scientificName: "Monstera deliciosa",
    family: "Araceae",
    origin: "Central America",
    difficulty: "Easy",
    image: "/monstera-deliciosa-plant.jpg",
  },
  {
    name: "Fiddle Leaf Fig",
    scientificName: "Ficus lyrata",
    family: "Moraceae",
    origin: "West Africa",
    difficulty: "Moderate",
    image: "/fiddle-leaf-fig.png",
  },
  {
    name: "Snake Plant",
    scientificName: "Sansevieria trifasciata",
    family: "Asparagaceae",
    origin: "West Africa",
    difficulty: "Easy",
    image: "/snake-plant-sansevieria.png",
  },
]

export function Encyclopedia() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background" id="encyclopedia">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Plant Encyclopedia</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Complete Plant Database</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access detailed information about thousands of plant species, care requirements, and growing tips
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search plants by name, family, or origin..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none transition-colors"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {entries.map((entry, index) => (
            <Card key={index} className="glossy-card overflow-hidden group cursor-pointer">
              <img
                src={entry.image || "/placeholder.svg"}
                alt={entry.name}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-1">{entry.name}</h3>
                <p className="text-sm italic text-muted-foreground mb-4">{entry.scientificName}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Family:</span>
                    <span className="font-medium text-foreground">{entry.family}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Origin:</span>
                    <span className="font-medium text-foreground">{entry.origin}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Difficulty:</span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-primary text-primary" />
                      <span className="font-medium text-foreground">{entry.difficulty}</span>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <BookOpen className="w-5 h-5 mr-2" />
            Browse Full Encyclopedia
          </Button>
        </div>
      </div>
    </section>
  )
}
