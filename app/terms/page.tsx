import Link from "next/link"
import { ArrowLeft, Shield, Scale, FileText, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using EthicalWearHub, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
    },
    {
      icon: Shield,
      title: "2. Use License",
      content:
        "Permission is granted to temporarily download one copy of the materials on EthicalWearHub for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.",
    },
    {
      icon: Scale,
      title: "3. Affiliate Disclosure",
      content:
        "As an Amazon Associate and affiliate partner with various ethical brands, we earn from qualifying purchases. This means when you click on links and make a purchase, we may receive a commission at no extra cost to you.",
    },
    {
      icon: AlertCircle,
      title: "4. Accuracy of Information",
      content:
        "While we strive to provide accurate sustainability ratings and ethical information, brand practices may change. We encourage users to verify information and report any discrepancies.",
    },
  ]

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block relative mb-4">
              <Scale className="w-16 h-16 text-primary mx-auto" />
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-glow-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Terms of Service
            </h1>
            <p className="text-foreground/60">Last updated: January 2025</p>
          </div>

          <div className="space-y-6 mb-12">
            {sections.map((section, i) => {
              const Icon = section.icon
              return (
                <Card key={i} className="glass-morph p-6 hover:scale-[1.02] transition-all">
                  <div className="flex gap-4">
                    <div className="relative flex-shrink-0">
                      <Icon className="w-8 h-8 text-primary" />
                      <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                    </div>
                    <div>
                      <h2 className="font-heading font-bold text-xl mb-3">{section.title}</h2>
                      <p className="text-foreground/80 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>

          <Card className="glass-morph p-8 text-center">
            <h2 className="font-heading font-bold text-2xl mb-4">Questions About Our Terms?</h2>
            <p className="text-foreground/60 mb-6">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  )
}
