import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, ShoppingCart } from "lucide-react"

const plants = [
  {
    name: "Monstera Albo Variegata",
    price: "$299",
    image: "/monstera-albo-variegata-rare-plant.jpg",
    rarity: "Ultra Rare",
  },
  {
    name: "Philodendron Pink Princess",
    price: "$189",
    image: "/philodendron-pink-princess-plant.jpg",
    rarity: "Rare",
  },
  {
    name: "Anthurium Clarinervium",
    price: "$149",
    image: "/anthurium-clarinervium-velvet-leaf.jpg",
    rarity: "Rare",
  },
  {
    name: "Alocasia Dragon Scale",
    price: "$129",
    image: "/alocasia-dragon-scale-metallic-plant.jpg",
    rarity: "Limited",
  },
]

export function FeaturedPlants() {
  return (
    <section className="py-24 bg-background" id="shop">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Featured Rare Plants</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of the most sought-after houseplants. Limited availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plants.map((plant, index) => (
            <Card
              key={index}
              className="glossy-card overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={plant.image || "/placeholder.svg"}
                  alt={plant.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {plant.rarity}
                </div>
                <Button
                  size="icon"
                  variant="secondary"
                  className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="w-4 h-4" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2 text-balance">{plant.name}</h3>
                <div className="flex items-center justify-between">
                  
                  <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            View All Plants
          </Button>
        </div>
      </div>
    </section>
  )
}
