import { Truck, Shield, Headphones, RefreshCw, Award, Leaf } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over $100 with secure packaging",
  },
  {
    icon: Shield,
    title: "30-Day Guarantee",
    description: "Healthy arrival or full refund",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "24/7 plant care assistance",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Hassle-free return process",
  },
  {
    icon: Award,
    title: "Quality Certified",
    description: "All plants inspected and certified",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Sustainable and ethical sourcing",
  },
]

export function Benefits() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Why Choose LyophiHome</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            We're committed to providing the best plant shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="opacity-90">{benefit.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
