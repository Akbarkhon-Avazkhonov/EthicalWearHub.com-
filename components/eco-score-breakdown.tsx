"use client"

import { useState } from "react"
import { Leaf, Users, Truck, Package } from "lucide-react"
import { Progress } from "@/components/ui/progress"

const categories = [
  {
    icon: Leaf,
    name: "Materials",
    score: 92,
    color: "text-primary",
    bgColor: "bg-primary",
    description: "Organic and recycled materials sourced responsibly",
  },
  {
    icon: Users,
    name: "Labor",
    score: 88,
    color: "text-secondary",
    bgColor: "bg-secondary",
    description: "Fair wages and safe working conditions guaranteed",
  },
  {
    icon: Truck,
    name: "Transportation",
    score: 78,
    color: "text-primary",
    bgColor: "bg-primary",
    description: "Carbon-neutral shipping and local production prioritized",
  },
  {
    icon: Package,
    name: "Packaging",
    score: 95,
    color: "text-secondary",
    bgColor: "bg-secondary",
    description: "Biodegradable and minimal packaging solutions",
  },
]

export function EcoScoreBreakdown() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null)

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-text-glow">Eco-Score Breakdown</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Transparency in every thread - see how we measure ethical impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {categories.map((category, i) => {
            const Icon = category.icon
            return (
              <div
                key={i}
                className="glass-morph p-6 rounded-xl hover:scale-105 transition-all cursor-pointer group"
                onMouseEnter={() => setActiveCategory(i)}
                onMouseLeave={() => setActiveCategory(null)}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <Icon className={`w-12 h-12 ${category.color} animate-breathe`} />
                    <div className={`absolute inset-0 ${category.bgColor} opacity-20 blur-xl rounded-full`} />
                  </div>

                  <h3 className="font-heading text-xl font-bold">{category.name}</h3>

                  <div className="w-full space-y-2">
                    <Progress value={category.score} className="h-2" />
                    <div className={`text-3xl font-bold ${category.color}`}>{category.score}%</div>
                  </div>

                  {activeCategory === i && (
                    <p className="text-sm text-foreground/60 animate-in fade-in">{category.description}</p>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
