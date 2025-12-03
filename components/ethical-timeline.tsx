"use client"

import { Calendar, Award, Sprout, Globe } from "lucide-react"

const timeline = [
  {
    year: "1990",
    title: "First Fair Trade Initiatives",
    description: "The beginning of certified fair trade fashion",
    icon: Globe,
  },
  {
    year: "2005",
    title: "Organic Certification Boom",
    description: "Global standards for organic cotton production",
    icon: Sprout,
  },
  {
    year: "2015",
    title: "Recycled Materials Innovation",
    description: "Breakthrough in recycled polyester and ocean plastics",
    icon: Award,
  },
  {
    year: "2024",
    title: "Carbon Neutral Fashion",
    description: "Industry-wide commitment to net-zero emissions",
    icon: Calendar,
  },
]

export function EthicalTimeline() {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 animate-text-glow">
            Evolution of Ethical Fashion
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Journey through the milestones that shaped sustainable fashion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary" />

            <div className="space-y-12">
              {timeline.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={i} className={`flex items-center gap-8 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                      <div className="glass-morph p-6 rounded-xl hover:scale-105 transition-transform inline-block">
                        <div className="text-primary font-bold text-lg mb-2">{item.year}</div>
                        <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-foreground/60 text-sm">{item.description}</p>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="glass-morph-strong p-4 rounded-full">
                        <Icon className="w-6 h-6 text-primary animate-breathe" />
                      </div>
                    </div>

                    <div className="flex-1" />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
