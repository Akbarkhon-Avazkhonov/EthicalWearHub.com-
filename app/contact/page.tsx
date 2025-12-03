"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add form submission logic here
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@ethicalwearhub.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 805-230-5389",
      description: "Mon-Fri, 9am-6pm EST",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "563 Eden Drive, Thousand Oaks, CA 91362",
      description: "By appointment only",
    },
  ]

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-secondary/5" />

      <Header />

      <main className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16 space-y-6 max-w-4xl mx-auto">
            <Badge className="bg-accent/20 text-accent border-accent/30 px-4 py-2">Get in Touch</Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground animate-text-glow">
              Let's Connect
            </h1>
            <p className="text-foreground/70 text-lg md:text-xl leading-relaxed">
              Have questions? Want to suggest a brand for review? Or just want to chat about sustainable fashion? We'd
              love to hear from you.
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, i) => {
              const Icon = info.icon
              return (
                <Card key={i} className="glass-morph p-8 text-center hover:scale-105 transition-all group">
                  <div className="relative inline-block mb-4">
                    <Icon className="w-10 h-10 text-primary mb-4" />
                    <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-glow-pulse" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-semibold mb-1 break-words">{info.content}</p>
                  <p className="text-foreground/60 text-sm">{info.description}</p>
                </Card>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="glass-morph p-8">
              <div className="mb-6">
                <MessageSquare className="w-12 h-12 text-primary mb-4" />
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Send us a Message</h2>
                <p className="text-foreground/70">Fill out the form and we'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="glass-morph border-primary/30"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="glass-morph border-primary/30"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    className="glass-morph border-primary/30"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us more..."
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-morph border-primary/30 min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6">
                  Send Message
                </Button>
              </form>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl font-bold text-foreground mb-2">Quick Answers</h2>
                <p className="text-foreground/70 mb-6">Common questions we receive</p>
              </div>

              <Card className="glass-morph p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">How do you rate brands?</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We use a comprehensive scoring system that evaluates environmental impact, labor practices, supply
                  chain transparency, and third-party certifications. Each brand is assessed across 50+ criteria.
                </p>
              </Card>

              <Card className="glass-morph p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                  Can I suggest a brand for review?
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Use the contact form above and select "Brand Suggestion" as your subject. We review all suggestions
                  and prioritize based on community interest.
                </p>
              </Card>

              <Card className="glass-morph p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">Do you work with brands?</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  We maintain editorial independence, but we do partner with verified ethical brands for educational
                  content. All partnerships are clearly disclosed.
                </p>
              </Card>

              <Card className="glass-morph p-6">
                <h3 className="font-heading text-lg font-bold text-foreground mb-2">How can I contribute?</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Join our community to share reviews, participate in discussions, and help spread awareness about
                  ethical fashion. Every voice matters in creating change.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
