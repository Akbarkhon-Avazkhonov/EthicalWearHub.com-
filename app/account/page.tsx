import { Settings, Heart, Package, CreditCard, LogOut } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function AccountPage() {
  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            My Account
          </h1>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-morph p-6 md:col-span-1">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-24 h-24 border-4 border-primary/30">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" />
                  <AvatarFallback>UN</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-heading font-bold">User Name</h3>
                  <p className="text-sm text-foreground/60">user@example.com</p>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/80">Edit Profile</Button>
              </div>

              <div className="mt-8 space-y-2">
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  <Settings className="w-4 h-4 mr-3" />
                  Settings
                </Button>
                <Button variant="ghost" className="w-full justify-start hover:bg-primary/10 hover:text-primary">
                  <LogOut className="w-4 h-4 mr-3" />
                  Log Out
                </Button>
              </div>
            </Card>

            <div className="md:col-span-2 space-y-6">
              <Card className="glass-morph p-6">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Package className="w-6 h-6 text-primary" />
                  Recent Orders
                </h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((order) => (
                    <div
                      key={order}
                      className="flex items-center justify-between p-4 glass-morph rounded-lg hover:scale-[1.02] transition-transform"
                    >
                      <div>
                        <p className="font-semibold">Order #{1000 + order}</p>
                        <p className="text-sm text-foreground/60">Placed on Dec {order}, 2024</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-primary">${49.99 * order}</p>
                        <p className="text-sm text-accent">Delivered</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4 bg-transparent">
                  View All Orders
                </Button>
              </Card>

              <Card className="glass-morph p-6">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                  <Heart className="w-6 h-6 text-primary" />
                  Wishlist
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[1, 2, 3].map((item) => (
                    <div
                      key={item}
                      className="glass-morph p-4 rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    >
                      <div className="aspect-square bg-primary/10 rounded-lg mb-2" />
                      <p className="text-sm font-semibold">Eco Product {item}</p>
                      <p className="text-xs text-foreground/60">$49.99</p>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="glass-morph p-6">
                <h3 className="text-2xl font-heading font-bold mb-6 flex items-center gap-2">
                  <CreditCard className="w-6 h-6 text-primary" />
                  Payment Methods
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-4 glass-morph rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-8 bg-gradient-to-r from-primary to-accent rounded" />
                      <div>
                        <p className="font-semibold">•••• •••• •••• 4242</p>
                        <p className="text-xs text-foreground/60">Expires 12/25</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
                  </div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Add Payment Method
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
