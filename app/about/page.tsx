import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Target, Heart, Users, Sparkles, Shield, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Transparency First",
      description:
        "We believe in radical transparency. Every brand review is backed by verified data and third-party certifications.",
    },
    {
      icon: Heart,
      title: "People & Planet",
      description: "Fashion shouldn't cost the earth or exploit workers. We champion brands that respect both.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Our platform is powered by a global community of conscious consumers sharing real experiences.",
    },
    {
      icon: Sparkles,
      title: "Innovation Focus",
      description: "We highlight cutting-edge sustainable technologies and materials that are reshaping fashion.",
    },
  ]

  const team = [
    {
      name: "Elena Rodriguez",
      role: "Founder & CEO",
      bio: "Former fashion industry executive turned sustainability advocate",
      image: "/professional-woman-ceo-sustainable-fashion.jpg",
    },
    {
      name: "Marcus Chen",
      role: "Chief Impact Officer",
      bio: "Environmental scientist specializing in textile lifecycle analysis",
      image: "/professional-asian-man-scientist-sustainability.jpg",
    },
    {
      name: "Aisha Patel",
      role: "Head of Community",
      bio: "Social entrepreneur passionate about ethical consumerism",
      image: "/professional-indian-woman-community-leader.jpg",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/5 via-transparent to-primary/5" />

      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-secondary/20 text-secondary border-secondary/30 px-4 py-2">Our Story</Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground animate-text-glow">
              Fashion for a Better Future
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              EthicalWearHub was born from a simple realization: the fashion industry needed a trusted guide for
              conscious consumers. We're here to make ethical fashion accessible, transparent, and inspiring.
            </p>
          </div>

          {/* Mission Section */}
          <Card className="glass-morph p-12 mb-16 text-center">
            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-foreground/80 text-lg max-w-3xl mx-auto leading-relaxed">
              To empower consumers with transparent, data-driven insights about fashion brands, making it easy to align
              purchasing decisions with personal values and contribute to a more sustainable, equitable fashion
              industry.
            </p>
          </Card>

          {/* Values Grid */}
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-12">What We Stand For</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => {
                const Icon = value.icon
                return (
                  <Card key={i} className="glass-morph p-6 text-center hover:scale-105 transition-all group">
                    <div className="relative inline-block mb-4">
                      <Icon className="w-12 h-12 text-primary" />
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />
                    </div>
                    <h3 className="font-heading text-xl font-bold text-foreground mb-2">{value.title}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">{value.description}</p>
                  </Card>
                )
              })}
            </div>
          </div>

          {/* Team Section */}
          <div className="mb-16">
            <h2 className="font-heading text-4xl font-bold text-center text-foreground mb-4">Meet the Team</h2>
            <p className="text-foreground/70 text-center mb-12 max-w-2xl mx-auto">
              A diverse group of fashion experts, scientists, and advocates united by one goal: making ethical fashion
              the norm, not the exception.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, i) => (
                <Card key={i} className="glass-morph overflow-hidden hover:scale-105 transition-all group">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 text-center space-y-2">
                    <h3 className="font-heading text-xl font-bold text-foreground">{member.name}</h3>
                    <p className="text-primary font-semibold text-sm">{member.role}</p>
                    <p className="text-foreground/70 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <Card className="glass-morph p-12">
            <div className="text-center mb-8">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Our Growing Impact</h2>
              <p className="text-foreground/70">Together, we're making a difference</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">2.5M+</div>
                <div className="text-sm text-foreground/60">Community Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">150+</div>
                <div className="text-sm text-foreground/60">Brands Reviewed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500k+</div>
                <div className="text-sm text-foreground/60">CO₂ Tons Offset</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">1M+</div>
                <div className="text-sm text-foreground/60">Ethical Purchases</div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
