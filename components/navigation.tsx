"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ShoppingCart, Search } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-2xl">🌿</span>
            </div>
            <span className="text-2xl font-serif font-bold text-primary">ThePlantsVerse</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#encyclopedia" className="text-foreground hover:text-primary transition-colors">
              Encyclopedia
            </a>
            <a href="#care-guides" className="text-foreground hover:text-primary transition-colors">
              Care Guides
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="w-5 h-5" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Sign In</Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#shop" className="text-foreground hover:text-primary transition-colors">
              Shop
            </a>
            <a href="#encyclopedia" className="text-foreground hover:text-primary transition-colors">
              Encyclopedia
            </a>
            <a href="#care-guides" className="text-foreground hover:text-primary transition-colors">
              Care Guides
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              Community
            </a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">Sign In</Button>
          </div>
        )}
      </div>
    </nav>
  )
}
