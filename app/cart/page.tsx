import { ShoppingBag, Trash2, Plus, Minus } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: "Organic Cotton T-Shirt",
      brand: "Patagonia",
      price: 45.0,
      quantity: 2,
      image: "/placeholder.svg?height=100&width=100",
      ecoScore: 4.5,
    },
    {
      id: 2,
      name: "Recycled Denim Jeans",
      brand: "Everlane",
      price: 89.0,
      quantity: 1,
      image: "/placeholder.svg?height=100&width=100",
      ecoScore: 4.8,
    },
  ]

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const shipping = 10.0
  const total = subtotal + shipping

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent flex items-center gap-3">
            <ShoppingBag className="w-10 h-10 text-primary" />
            Shopping Cart
          </h1>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="glass-morph p-6">
                  <div className="flex gap-6">
                    <div className="w-24 h-24 bg-primary/10 rounded-lg flex-shrink-0" />

                    <div className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-heading font-bold text-lg">{item.name}</h3>
                          <p className="text-sm text-foreground/60">{item.brand}</p>
                        </div>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:text-red-600">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>

                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-sm ${
                                i < Math.floor(item.ecoScore) ? "text-primary" : "text-foreground/20"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-xs text-primary font-semibold">Eco Score: {item.ecoScore}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 glass-morph px-3 py-2 rounded-lg">
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="font-semibold w-8 text-center">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-6 w-6">
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <p className="text-xl font-bold text-primary">${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              <Card className="glass-morph p-6">
                <h3 className="font-heading font-bold mb-3">Add Promo Code</h3>
                <div className="flex gap-3">
                  <Input placeholder="Enter code" className="glass-morph" />
                  <Button className="bg-primary hover:bg-primary/80">Apply</Button>
                </div>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="glass-morph p-6 sticky top-32">
                <h3 className="font-heading font-bold text-xl mb-6">Order Summary</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-primary/20" />
                  <div className="flex justify-between text-xl font-bold">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6 p-4 glass-morph rounded-lg">
                  <h4 className="font-semibold text-sm text-primary">Your Impact</h4>
                  <div className="space-y-2 text-sm text-foreground/70">
                    <p>🌱 Carbon saved: 2.4kg CO₂</p>
                    <p>💧 Water saved: 145L</p>
                    <p>♻️ Recycled materials: 85%</p>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/80 text-lg py-6">Proceed to Checkout</Button>

                <p className="text-xs text-center text-foreground/60 mt-4">
                  Free carbon-neutral shipping on orders over $100
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
