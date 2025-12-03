"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { products as allProducts } from "@/lib/products-data"

export function FeaturedReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const products = allProducts.filter((p) => p.reviewer).slice(0, 4)

  const next = () => setCurrentIndex((prev) => (prev + 1) % products.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-text-glow">Featured Reviews</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Expert-reviewed ethical fashion that makes a difference
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[0, 1, 2].map((offset) => {
              const index = (currentIndex + offset) % products.length
              const product = products[index]
              return (
                <Card key={index} className="glass-morph p-6 hover:scale-105 transition-all group cursor-pointer">
                  <div className="aspect-square mb-4 rounded-lg overflow-hidden bg-muted relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">Reviewed</Badge>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-1">{product.name}</h3>
                      <p className="text-sm text-foreground/60">{product.brand}</p>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < product.ecoScore ? "fill-primary text-primary" : "text-muted-foreground"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-foreground/60 ml-2">Eco-Score: {product.ecoScore}/5</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <Link href={`/review/${product.name.toLowerCase().replace(/\s+/g, "-")}`}>
                        <Button size="sm" variant="outline" className="glass-morph bg-transparent">
                          Read Review
                        </Button>
                      </Link>
                    </div>

                    <p className="text-xs text-foreground/50">Reviewed by {product.reviewer}</p>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button onClick={prev} size="icon" variant="outline" className="glass-morph bg-transparent">
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button onClick={next} size="icon" variant="outline" className="glass-morph bg-transparent">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
