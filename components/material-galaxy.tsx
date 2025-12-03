"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"

const materials = [
  { name: "Organic Cotton", water: "-91%", carbon: "-46%", biodegradable: true, x: 20, y: 30 },
  { name: "Hemp", water: "-70%", carbon: "-32%", biodegradable: true, x: 70, y: 20 },
  { name: "Tencel", water: "-95%", carbon: "-50%", biodegradable: true, x: 50, y: 60 },
  { name: "Recycled Polyester", water: "-90%", carbon: "-75%", biodegradable: false, x: 30, y: 70 },
  { name: "Cork", water: "-98%", carbon: "-80%", biodegradable: true, x: 80, y: 50 },
  { name: "Bamboo", water: "-85%", carbon: "-40%", biodegradable: true, x: 60, y: 80 },
]

export function MaterialGalaxy() {
  const [activeMaterial, setActiveMaterial] = useState<number | null>(null)

  return (
    null
  )
}
