import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const categories = [
  {
    name: "Aroids",
    count: "120+ species",
    image: "/monstera-philodendron-aroid-plants.jpg",
    color: "from-[#2E7D32] to-[#66BB6A]",
  },
  {
    name: "Begonias",
    count: "85+ species",
    image: "/begonia-rex-colorful-leaves.jpg",
    color: "from-[#558B2F] to-[#A5D6A7]",
  },
  {
    name: "Ferns",
    count: "60+ species",
    image: "/rare-ferns-tropical-plants.jpg",
    color: "from-[#66BB6A] to-[#C8E6C9]",
  },
  {
    name: "Succulents",
    count: "95+ species",
    image: "/rare-succulent-collection.jpg",
    color: "from-[#2E7D32] to-[#558B2F]",
  },
  {
    name: "Carnivorous",
    count: "40+ species",
    image: "/carnivorous-plants-venus-flytrap.jpg",
    color: "from-[#558B2F] to-[#66BB6A]",
  },
  {
    name: "Orchids",
    count: "75+ species",
    image: "/rare-orchid-flowers-exotic.jpg",
    color: "from-[#66BB6A] to-[#A5D6A7]",
  },
]

export function Categories() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Explore by Category</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our extensive collection organized by plant families
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card key={index} className="glossy-card overflow-hidden group cursor-pointer relative">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-40 group-hover:opacity-30 transition-opacity`}
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.count}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-primary group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
