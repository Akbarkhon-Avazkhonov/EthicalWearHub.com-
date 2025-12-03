"use client"

import { useEffect, useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

const stories = [
  {
    name: "Freya Chen",
    image: "/professional-portrait-asian-woman-smiling.jpg",
    story: "Switched to 100% ethical wardrobe",
    impact: "2.4 tons CO₂ saved",
  },
  {
    name: "Elias Romanov",
    image: "/professional-portrait-man-thoughtful-expression.jpg",
    story: "Built capsule wardrobe with EthicalWear",
    impact: "1,200L water saved",
  },
  {
    name: "Anya Sharma",
    image: "/professional-portrait-indian-woman-smiling.jpg",
    story: "Zero-waste fashion advocate",
    impact: "15kg plastic prevented",
  },
  {
    name: "Diego Costa",
    image: "/professional-portrait-latino-man-smiling.jpg",
    story: "Supporting fair trade artisans",
    impact: "$5,000 fair wages",
  },
]

export function CommunityImpact() {
  const [waterSaved, setWaterSaved] = useState(2458901)
  const [wagesPaid, setWagesPaid] = useState(3200000)

  useEffect(() => {
    const interval = setInterval(() => {
      setWaterSaved((prev) => prev + Math.floor(Math.random() * 50))
      setWagesPaid((prev) => prev + Math.floor(Math.random() * 100))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-text-glow">Community Impact Wall</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">Real people making real change in ethical fashion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Card className="glass-morph p-8 text-center">
            <div className="text-4xl font-bold text-primary mb-2 animate-text-glow">{waterSaved.toLocaleString()}</div>
            <div className="text-foreground/60">Liters of water saved</div>
          </Card>
          <Card className="glass-morph p-8 text-center">
            <div className="text-4xl font-bold text-secondary mb-2 animate-text-glow">
              ${(wagesPaid / 1000000).toFixed(1)}M
            </div>
            <div className="text-foreground/60">Fair wages ensured</div>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stories.map((story, i) => (
            <Card key={i} className="glass-morph p-6 hover:scale-105 transition-all group cursor-pointer">
              <div className="flex flex-col items-center text-center space-y-4">
                <Avatar className="w-20 h-20 border-2 border-primary">
                  <AvatarImage src={story.image || "/placeholder.svg"} alt={story.name} />
                  <AvatarFallback>
                    {story.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-bold mb-1">{story.name}</h3>
                  <p className="text-sm text-foreground/60 mb-2">{story.story}</p>
                  <div className="text-primary font-bold text-sm">{story.impact}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
