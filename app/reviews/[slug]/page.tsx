import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, CheckCircle2, Factory, Leaf, Droplet, Users, Award, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

// Brand data with full details
const brandData: Record<string, any> = {
  patagonia: {
    brand: "Patagonia",
    slug: "patagonia",
    rating: 9.5,
    category: "Outdoor Wear",
    ethicsScore: 95,
    image: "/patagonia-outdoor-jacket-sustainable.jpg",
    description:
      "Patagonia has been a pioneer in sustainable outdoor wear for over 40 years. Their commitment to environmental activism and fair trade practices sets the industry standard.",
    highlights: [
      "Fair Trade Certified",
      "1% for the Planet",
      "Repair Program",
      "Transparent Supply Chain",
      "Organic Materials",
      "Climate Neutral Certified",
    ],
    metrics: {
      carbonFootprint: "Low",
      waterUsage: "Minimal",
      laborScore: 98,
      transparency: 95,
    },
    fullReview:
      "Patagonia stands as one of the most trusted names in ethical fashion. Their Worn Wear program encourages repair over replacement, and they openly share their supply chain information. With Fair Trade certification across many products and a donation of 1% of sales to environmental causes, they practice what they preach.",
    certifications: ["B Corp", "Fair Trade", "Bluesign", "1% for the Planet", "Climate Neutral"],
  },
  everlane: {
    brand: "Everlane",
    slug: "everlane",
    rating: 8.7,
    category: "Everyday Essentials",
    ethicsScore: 87,
    image: "/everlane-minimalist-clothing-sustainable.jpg",
    description:
      "Everlane revolutionized fashion transparency by showing customers the true cost breakdown of each product, from materials to labor to transportation.",
    highlights: [
      "Radical Transparency",
      "Ethical Factories",
      "Carbon Neutral Shipping",
      "Recycled Materials",
      "Living Wage Commitment",
      "Plastic-Free Packaging",
    ],
    metrics: {
      carbonFootprint: "Low-Medium",
      waterUsage: "Moderate",
      laborScore: 85,
      transparency: 92,
    },
    fullReview:
      "Everlane's 'Radical Transparency' model shows exactly what you're paying for. They partner with ethical factories worldwide and have committed to eliminating virgin plastic from their supply chain. Their ReNew collection uses recycled materials, and they offer carbon-neutral shipping options.",
    certifications: ["SA8000", "WRAP", "Climate Neutral"],
  },
  veja: {
    brand: "Veja",
    slug: "veja",
    rating: 9.2,
    category: "Footwear",
    ethicsScore: 92,
    image: "/veja-sustainable-sneakers.jpg",
    description:
      "French sneaker brand Veja creates stylish footwear using organic cotton, wild rubber from the Amazon, and leather tanned without heavy metals.",
    highlights: [
      "Fair Trade",
      "Organic Cotton",
      "Wild Rubber",
      "No Advertising",
      "Transparent Pricing",
      "Direct Trade",
    ],
    metrics: {
      carbonFootprint: "Low",
      waterUsage: "Low",
      laborScore: 90,
      transparency: 88,
    },
    fullReview:
      "Veja has disrupted the sneaker industry by working directly with producer associations in Brazil and using ecological materials. They don't spend on advertising, instead investing in sustainable production. Their wild rubber is sourced from the Amazon rainforest, supporting local communities.",
    certifications: ["Fair Trade", "Organic", "B Corp"],
  },
  reformation: {
    brand: "Reformation",
    slug: "reformation",
    rating: 8.9,
    category: "Women's Fashion",
    ethicsScore: 89,
    image: "/reformation-sustainable-dress-fashion.jpg",
    description:
      "Reformation proves that sustainable fashion can be sexy and stylish. They track the environmental footprint of every product with their RefScale system.",
    highlights: [
      "Climate Positive",
      "Deadstock Fabrics",
      "Water Conservation",
      "RefScale Tracking",
      "Sustainable Facilities",
      "Carbon Offset",
    ],
    metrics: {
      carbonFootprint: "Climate Positive",
      waterUsage: "Low",
      laborScore: 82,
      transparency: 90,
    },
    fullReview:
      "Reformation is leading the charge in making sustainable fashion desirable. Their RefScale shows the environmental impact saved by choosing Reformation over conventional fashion. They use deadstock fabrics, sustainable materials, and have committed to being climate positive by 2025.",
    certifications: ["Climate Neutral", "LEED Certified Facilities"],
  },
  allbirds: {
    brand: "Allbirds",
    slug: "allbirds",
    rating: 8.5,
    category: "Footwear",
    ethicsScore: 85,
    image: "/allbirds-wool-shoes-sustainable.jpg",
    description:
      "Allbirds pioneered the use of natural, renewable materials like merino wool, eucalyptus tree fiber, and sugarcane in footwear production.",
    highlights: [
      "Carbon Footprint Labels",
      "Natural Materials",
      "B Corp Certified",
      "Renewable Energy",
      "Carbon Negative Goal",
      "Transparent Impact",
    ],
    metrics: {
      carbonFootprint: "Low",
      waterUsage: "Low",
      laborScore: 83,
      transparency: 86,
    },
    fullReview:
      "Allbirds was one of the first footwear brands to label every product with its carbon footprint. Using materials like ZQ-certified merino wool, eucalyptus tree fiber, and SweetFoam made from sugarcane, they've created a unique sustainable shoe category.",
    certifications: ["B Corp", "Climate Neutral", "ZQ Merino"],
  },
  tentree: {
    brand: "Tentree",
    slug: "tentree",
    rating: 9.0,
    category: "Casual Wear",
    ethicsScore: 90,
    image: "/tentree-sustainable-casual-clothing-trees.jpg",
    description:
      "For every item purchased, Tentree plants 10 trees. They've planted over 100 million trees and use sustainable materials like organic cotton, recycled polyester, and Tencel.",
    highlights: [
      "10 Trees per Item",
      "Sustainable Materials",
      "Climate+ Positive",
      "Transparent Impact",
      "B Corp Certified",
      "Carbon Neutral",
    ],
    metrics: {
      carbonFootprint: "Climate Positive",
      waterUsage: "Low",
      laborScore: 88,
      transparency: 92,
    },
    fullReview:
      "Tentree's mission is simple but powerful: plant trees with every purchase. They've planted over 100 million trees globally and track each one. Their clothing uses sustainable materials and their facilities run on renewable energy. They're working toward being the most environmentally progressive brand on the planet.",
    certifications: ["B Corp", "Climate Neutral", "Fair Trade", "OEKO-TEX"],
  },
}

export default function BrandReviewPage({ params }: { params: { slug: string } }) {
  const brand = brandData[params.slug]

  if (!brand) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link href="/reviews">
            <Button variant="ghost" className="mb-8 hover:bg-primary/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Reviews
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="relative h-[400px] rounded-2xl overflow-hidden glass-morph">
              <img src={brand.image || "/placeholder.svg"} alt={brand.brand} className="w-full h-full object-cover" />
              <div className="absolute top-6 right-6 glass-morph-strong px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-primary fill-primary" />
                  <span className="font-bold text-primary text-xl">{brand.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <Badge className="bg-accent/20 text-accent border-accent/30 mb-4">{brand.category}</Badge>
                <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground animate-text-glow mb-4">
                  {brand.brand}
                </h1>
                <p className="text-foreground/70 text-lg leading-relaxed">{brand.description}</p>
              </div>

              <div className="glass-morph p-6 rounded-xl space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-foreground/70">Overall Ethics Score</span>
                  <span className="text-3xl font-bold text-primary">{brand.ethicsScore}/100</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-glow-pulse"
                    style={{ width: `${brand.ethicsScore}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <Leaf className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-foreground/60 mb-1">Carbon Footprint</div>
              <div className="text-xl font-bold text-foreground">{brand.metrics.carbonFootprint}</div>
            </Card>
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <Droplet className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-sm text-foreground/60 mb-1">Water Usage</div>
              <div className="text-xl font-bold text-foreground">{brand.metrics.waterUsage}</div>
            </Card>
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-sm text-foreground/60 mb-1">Labor Score</div>
              <div className="text-xl font-bold text-foreground">{brand.metrics.laborScore}/100</div>
            </Card>
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <Factory className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-sm text-foreground/60 mb-1">Transparency</div>
              <div className="text-xl font-bold text-foreground">{brand.metrics.transparency}/100</div>
            </Card>
          </div>

          {/* Full Review */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="md:col-span-2 space-y-8">
              <Card className="glass-morph p-8">
                <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Detailed Review</h2>
                <p className="text-foreground/80 text-lg leading-relaxed mb-6">{brand.fullReview}</p>

                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Key Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {brand.highlights.map((highlight: string, i: number) => (
                    <div key={i} className="flex items-start gap-3 glass-morph p-4 rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground/90">{highlight}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="glass-morph p-6">
                <h3 className="font-heading text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {brand.certifications.map((cert: string, i: number) => (
                    <Badge key={i} className="w-full justify-center bg-primary/10 text-primary border-primary/30 py-2">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </Card>

              <Card className="glass-morph p-6 bg-gradient-to-br from-primary/10 to-accent/10">
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">Shop {brand.brand}</h3>
                <p className="text-foreground/70 text-sm mb-4">
                  Support ethical fashion by choosing brands that align with your values
                </p>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Visit Brand Website
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
