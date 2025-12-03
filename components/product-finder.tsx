"use client"

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Sparkles, Leaf } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Organic Cotton T-Shirt",
    brand: "Patagonia",
    price: 45,
    style: 30, // casual = 0-50, formal = 50-100
    ethicsScore: 95,
    image: "/organic-cotton-tshirt.png",
    category: "Tops",
  },
  {
    id: 2,
    name: "Recycled Wool Blazer",
    brand: "Everlane",
    price: 180,
    style: 85,
    ethicsScore: 88,
    image: "/wool-blazer-sustainable.jpg",
    category: "Outerwear",
  },
  {
    id: 3,
    name: "Hemp Canvas Sneakers",
    brand: "Veja",
    price: 120,
    style: 40,
    ethicsScore: 92,
    image: "/hemp-sneakers-sustainable.jpg",
    category: "Shoes",
  },
  {
    id: 4,
    name: "Linen Dress Shirt",
    brand: "Reformation",
    price: 98,
    style: 75,
    ethicsScore: 90,
    image: "/linen-dress-shirt.jpg",
    category: "Tops",
  },
  {
    id: 5,
    name: "Bamboo Casual Joggers",
    brand: "Tentree",
    price: 65,
    style: 25,
    ethicsScore: 85,
    image: "/bamboo-joggers.jpg",
    category: "Bottoms",
  },
  {
    id: 6,
    name: "Recycled Polyester Suit",
    brand: "Everlane",
    price: 450,
    style: 95,
    ethicsScore: 87,
    image: "/recycled-suit-formal.jpg",
    category: "Suits",
  },
  {
    id: 7,
    name: "Organic Denim Jeans",
    brand: "Nudie Jeans",
    price: 140,
    style: 45,
    ethicsScore: 91,
    image: "/organic-denim-jeans.jpg",
    category: "Bottoms",
  },
  {
    id: 8,
    name: "Cork Sandals",
    brand: "Birkenstock",
    price: 85,
    style: 20,
    ethicsScore: 82,
    image: "/cork-sandals.jpg",
    category: "Shoes",
  },
]

export function ProductFinder() {
  const [style, setStyle] = useState([50])
  const [ethics, setEthics] = useState([75])
  const [budget, setBudget] = useState([100])
  const [showResults, setShowResults] = useState(false)

  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        const styleMatch = Math.abs(product.style - style[0]) <= 30
        const ethicsMatch = product.ethicsScore >= ethics[0]
        const budgetMatch = product.price <= budget[0]

        return styleMatch && ethicsMatch && budgetMatch
      })
      .slice(0, 4)
  }, [style, ethics, budget])

  const handleFindMatch = () => {
    setShowResults(true)
  }

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-text-glow">
            Find Your Perfect Match
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Personalized ethical fashion recommendations just for you
          </p>
        </div>

        <div className="max-w-4xl mx-auto glass-morph rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <Label className="text-lg mb-4 block">Style Preference</Label>
                <Slider value={style} onValueChange={setStyle} max={100} step={1} />
                <div className="flex justify-between text-sm text-foreground/60 mt-2">
                  <span>Casual</span>
                  <span>Formal</span>
                </div>
              </div>

              <div>
                <Label className="text-lg mb-4 block">Ethics Priority (Minimum Score)</Label>
                <Slider
                  value={ethics}
                  onValueChange={setEthics}
                  max={100}
                  step={1}
                  className="[&_[role=slider]]:bg-primary"
                />
                <div className="flex justify-between text-sm text-foreground/60 mt-2">
                  <span>Standard ({ethics[0]}%)</span>
                  <span>Maximum</span>
                </div>
              </div>

              <div>
                <Label className="text-lg mb-4 block">Budget Range</Label>
                <Slider value={budget} onValueChange={setBudget} max={500} step={10} />
                <div className="flex justify-between text-sm text-foreground/60 mt-2">
                  <span>$0</span>
                  <span>${budget[0]}</span>
                </div>
              </div>

              <Button size="lg" className="w-full group" onClick={handleFindMatch}>
                <Sparkles className="w-5 h-5 mr-2" />
                Find My Ethical Match
              </Button>
            </div>

            <div className="flex items-center justify-center">
              {!showResults ? (
                <div className="glass-morph-strong p-8 rounded-xl text-center space-y-4">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center animate-rotate-3d">
                    <Sparkles className="w-24 h-24 text-primary" />
                  </div>
                  <p className="text-foreground/60">Adjust the sliders to see your personalized recommendations</p>
                </div>
              ) : (
                <div className="space-y-4 w-full">
                  <p className="text-center text-sm text-foreground/60 mb-4">
                    Found {filteredProducts.length} matches for you
                  </p>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <Card key={product.id} className="glass-morph p-4 hover:scale-102 transition-all">
                        <div className="flex gap-4">
                          <img
                            src={product.image || "/placeholder.svg"}
                            alt={product.name}
                            className="w-20 h-20 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-semibold text-sm">{product.name}</h4>
                            <p className="text-xs text-foreground/60">{product.brand}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-primary font-bold">${product.price}</span>
                              <div className="flex items-center gap-1">
                                <Leaf className="w-3 h-3 text-primary" />
                                <span className="text-xs">{product.ethicsScore}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))
                  ) : (
                    <div className="text-center py-8 text-foreground/60">
                      <p>No products match your criteria.</p>
                      <p className="text-sm mt-2">Try adjusting your filters.</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
