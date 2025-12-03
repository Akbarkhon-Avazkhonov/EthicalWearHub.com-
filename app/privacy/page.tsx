import Link from "next/link"
import { ArrowLeft, Lock, Eye, Database, Cookie, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function PrivacyPage() {
  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, and preferences for ethical fashion.",
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, send you technical notices and support messages, respond to your comments and questions, and communicate with you about ethical fashion tips and sustainability updates.",
    },
    {
      icon: Cookie,
      title: "Cookies and Tracking",
      content:
        "We use cookies and similar tracking technologies to track activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.",
    },
    {
      icon: Shield,
      title: "Data Security",
      content:
        "We take reasonable measures to help protect information about you from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no internet or electronic storage system is 100% secure.",
    },
    {
      icon: Lock,
      title: "Third-Party Services",
      content:
        "We work with Amazon and other ethical brands through affiliate programs. These third-party services have their own privacy policies. We encourage you to read their privacy policies when you visit their sites through our links.",
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
              <Lock className="w-16 h-16 text-primary mx-auto" />
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-glow-pulse" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Privacy Policy
            </h1>
            <p className="text-foreground/60">Last updated: January 2025</p>
          </div>

          <Card className="glass-morph p-8 mb-8">
            <h2 className="font-heading font-bold text-2xl mb-4">Your Privacy Matters</h2>
            <p className="text-foreground/80 leading-relaxed">
              At EthicalWearHub, we are committed to protecting your privacy and being transparent about how we handle
              your data. Just as we advocate for ethical practices in fashion, we believe in ethical data handling. This
              Privacy Policy explains how we collect, use, and safeguard your information.
            </p>
          </Card>

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

          <Card className="glass-morph p-8">
            <h2 className="font-heading font-bold text-2xl mb-4 text-center">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              You have the right to access, update, or delete your personal information at any time. You can also opt
              out of marketing communications while still receiving important service updates. If you have any concerns
              about your privacy or data, please don't hesitate to contact us.
            </p>
            <div className="text-center">
              <Button asChild>
                <Link href="/contact">Contact Us About Privacy</Link>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
