"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [count, setCount] = useState(12000)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev + Math.floor(Math.random() * 10))
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-heading text-5xl md:text-7xl font-bold animate-text-glow">
            Where Fashion Meets Conscience
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto">
            Discover ethically crafted apparel that tells a story
          </p>

          <div className="glass-morph inline-block px-6 py-3 rounded-full">
            <p className="text-sm">
              <span className="text-primary font-bold">{count.toLocaleString()}</span> kg of CO₂ saved by our community
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="group relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                Explore Ethical Collections
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform" />
            </Button>

            <Button size="lg" variant="outline" className="glass-morph bg-transparent">
              Learn Our Mission
            </Button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { value: "2.4M", label: "Liters Water Saved" },
            { value: "$3.2M", label: "Fair Wages Paid" },
            { value: "45K+", label: "Ethical Items" },
            { value: "98%", label: "Customer Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="glass-morph p-4 rounded-lg hover:scale-105 transition-transform">
              <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
