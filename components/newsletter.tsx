import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-20 h-20 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-10 h-10" />
          </div>

          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and expert plant care tips
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-lg text-foreground bg-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary-foreground/50"
            />
            <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8">
              Subscribe
            </Button>
          </div>

          <p className="text-sm opacity-75 mt-4">Join 50,000+ plant enthusiasts. Unsubscribe anytime.</p>
        </div>
      </div>
    </section>
  )
}
