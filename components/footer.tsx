import Link from "next/link"
import { Leaf, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-primary/20">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold text-primary">EthicalWearHub</span>
            </div>
            <p className="text-sm text-foreground/60">
              Where fashion meets conscience. Making ethical choices accessible to everyone.
            </p>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-foreground/60 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-foreground/60 hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-foreground/60 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-foreground/60 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-foreground/60 hover:text-primary transition-colors">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-foreground/60 hover:text-primary transition-colors">
                  Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-bold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input placeholder="Your email" className="glass-morph" />
              <Button size="icon" className="shrink-0">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-foreground/60 mt-2">Weekly ethical fashion tips</p>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 text-center text-sm text-foreground/60">
          <p className="mb-2">As an Amazon Associate, we earn from qualifying purchases.</p>
          <p>© 2025 EthicalWearHub. All rights reserved. Every purchase supports ethical practices.</p>
        </div>
      </div>
    </footer>
  )
}
