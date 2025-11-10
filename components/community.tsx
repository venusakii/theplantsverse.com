import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Users } from "lucide-react"

export function Community() {
  return (
    <section className="py-24 bg-gradient-to-b from-secondary/10 to-background" id="community">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">Join Our Growing Community</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with fellow plant enthusiasts, share your collection, and get expert advice
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Instagram className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Instagram</h3>
            <p className="text-muted-foreground mb-4">Share your plant photos with #LyophiHome</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              Follow Us
            </Button>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Discord</h3>
            <p className="text-muted-foreground mb-4">Chat with plant lovers 24/7</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              Join Server
            </Button>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Forum</h3>
            <p className="text-muted-foreground mb-4">Ask questions and share knowledge</p>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 bg-transparent">
              Visit Forum
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://images.unsplash.com/photo-1509937528035-ad76254b0356?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1463320726281-696a485928c7?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&h=300&fit=crop",
            "https://images.unsplash.com/photo-1470058869958-2a77ade41c02?w=300&h=300&fit=crop",
          ].map((url, i) => (
            <div key={i} className="aspect-square rounded-lg overflow-hidden glossy-card">
              <img
                src={url || "/placeholder.svg"}
                alt={`Community plant ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
