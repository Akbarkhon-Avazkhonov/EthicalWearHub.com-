import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Star, CheckCircle2, TrendingUp, Award, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getBrands } from "@/lib/products-data"

export default function ReviewsPage() {
  const brandReviews = getBrands()

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/5" />

      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6">
            <Badge className="bg-primary/20 text-primary border-primary/30 px-4 py-2">Brand Reviews & Ratings</Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground animate-text-glow">
              Ethical Brand Reviews
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Comprehensive analysis of fashion brands based on their environmental impact, labor practices, and
              sustainability commitments
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">150+</div>
              <div className="text-sm text-foreground/60">Brands Reviewed</div>
            </Card>
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <CheckCircle2 className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-accent">50+</div>
              <div className="text-sm text-foreground/60">Certifications Verified</div>
            </Card>
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <TrendingUp className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-secondary">25k+</div>
              <div className="text-sm text-foreground/60">Community Reviews</div>
            </Card>
            <Card className="glass-morph p-6 text-center hover:scale-105 transition-all">
              <Star className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">4.7</div>
              <div className="text-sm text-foreground/60">Average Rating</div>
            </Card>
          </div>

          {/* Brand Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandReviews.map((review, i) => (
              <Card key={i} className="glass-morph overflow-hidden hover:scale-105 transition-all group cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={review.image || "/placeholder.svg"}
                    alt={review.brand}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 glass-morph-strong px-3 py-1 rounded-full">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-primary fill-primary" />
                      <span className="font-bold text-primary">{review.rating}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-1">{review.brand}</h3>
                    <p className="text-sm text-foreground/60">{review.category}</p>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/70">Ethics Score</span>
                      <span className="font-bold text-primary">{review.ethicsScore}/100</span>
                    </div>
                    <div className="w-full bg-background/50 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full animate-glow-pulse"
                        style={{ width: `${review.ethicsScore}%` }}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    {review.highlights.slice(0, 3).map((highlight, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Read More button */}
                  <Link href={`/reviews/${review.slug}`}>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
