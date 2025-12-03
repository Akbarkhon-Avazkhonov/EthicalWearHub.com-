"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Leaf, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-morph-strong shadow-2xl shadow-primary/30 border-b border-primary/20"
          : "glass-morph backdrop-blur-xl"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/30 blur-2xl rounded-full animate-glow-pulse scale-150" />
              <div className="relative bg-gradient-to-br from-primary via-primary/80 to-accent p-2 rounded-xl rotate-6 group-hover:rotate-12 transition-transform duration-300">
                <Leaf className="w-7 h-7 text-background animate-breathe" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-2xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-text-glow tracking-tight">
                EthicalWearHub
              </span>
              <span className="text-[10px] text-foreground/60 tracking-widest uppercase font-sans">
                Conscious Fashion
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {[
              { href: "/", label: "Home", badge: null },
              { href: "/reviews", label: "Reviews", badge: "NEW" },
              { href: "/about", label: "About", badge: null },
              { href: "/contact", label: "Contact", badge: null },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-4 py-2 text-foreground/70 hover:text-primary transition-all duration-300 group font-sans font-medium"
              >
                <span className="relative z-10">{item.label}</span>
                {item.badge && (
                  <span className="absolute -top-1 -right-1 px-1.5 py-0.5 text-[8px] font-bold bg-accent text-background rounded-full">
                    {item.badge}
                  </span>
                )}
                <div className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden hover:bg-primary/10 hover:text-primary transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden mt-6 pb-4 animate-in slide-in-from-top-4 duration-300">
            <nav className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/reviews", label: "Reviews" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 text-foreground/70 hover:text-primary hover:bg-primary/10 rounded-lg transition-all duration-300 font-sans font-medium"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    </header>
  )
}
