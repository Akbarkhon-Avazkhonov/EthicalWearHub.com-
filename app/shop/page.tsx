import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Droplet, Recycle, Heart, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { products } from "@/lib/products-data"

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="font-heading text-4xl md:text-6xl font-bold animate-text-glow">Ethical Collections</h1>
              <p className="text-lg md:text-xl text-foreground/80">
                Every piece tells a story of sustainability, fair labor, and conscious craftsmanship
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 border-t border-primary/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex items-center gap-2 w-full md:w-auto">
                <Search className="w-5 h-5 text-foreground/60" />
                <Input placeholder="Search sustainable products..." className="glass-morph max-w-xs" />
              </div>

              <div className="flex gap-4 flex-wrap">
                <Select>
                  <SelectTrigger className="glass-morph w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tops">Tops</SelectItem>
                    <SelectItem value="bottoms">Bottoms</SelectItem>
                    <SelectItem value="outerwear">Outerwear</SelectItem>
                    <SelectItem value="footwear">Footwear</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="glass-morph w-[180px]">
                    <SelectValue placeholder="Sort By" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eco-score">Highest Eco-Score</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" className="glass-morph bg-transparent">
                  <Filter className="w-4 h-4 mr-2" />
                  More Filters
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, i) => (
                <Card
                  key={i}
                  className="glass-morph overflow-hidden hover:scale-105 transition-all group cursor-pointer"
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 glass-morph-strong rounded-full px-3 py-1 flex items-center gap-1">
                      <Leaf className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold">{product.ecoScore}</span>
                    </div>
                    <Badge className="absolute top-3 left-3 bg-secondary/90">{product.category}</Badge>
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-sm text-foreground/60">{product.brand}</p>
                      <h3 className="font-heading text-xl font-semibold mt-1">{product.name}</h3>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/70">
                      <Recycle className="w-4 h-4 text-primary" />
                      <span>{product.material}</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm">
                      <Droplet className="w-4 h-4 text-primary" />
                      <span className="text-foreground/70">{product.impact}</span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-primary/20">
                      <Button size="sm" variant="outline" className="group bg-transparent">
                        <Heart className="w-4 h-4 mr-1 group-hover:fill-primary group-hover:text-primary transition-all" />
                        Save
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Banner */}
        <section className="py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="glass-morph-strong rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Your Purchases Make a Difference</h2>
              <p className="text-lg text-foreground/80 mb-8">
                Every ethical product you choose supports fair wages, reduces environmental impact, and builds a more
                sustainable future
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Droplet, value: "50M L", label: "Water Saved" },
                  { icon: Leaf, value: "125K kg", label: "CO₂ Offset" },
                  { icon: Heart, value: "15K", label: "Fair Wage Jobs" },
                  { icon: Recycle, value: "85%", label: "Recycled Materials" },
                ].map((stat, i) => {
                  const Icon = stat.icon
                  return (
                    <div key={i} className="space-y-2">
                      <Icon className="w-8 h-8 mx-auto text-primary" />
                      <div className="text-2xl font-bold text-primary">{stat.value}</div>
                      <div className="text-sm text-foreground/60">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
