import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { EthicsMap } from "@/components/ethics-map"
import { EcoScoreBreakdown } from "@/components/eco-score-breakdown"
import { FeaturedReviews } from "@/components/featured-reviews"
import { MaterialGalaxy } from "@/components/material-galaxy"
import { EthicalTimeline } from "@/components/ethical-timeline"
import { CommunityImpact } from "@/components/community-impact"
import { ProductFinder } from "@/components/product-finder"
import { Footer } from "@/components/footer"
import { CookieNotice } from "@/components/cookie-notice"
import { FloatingParticles } from "@/components/floating-particles"

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingParticles />
      <Header />
      <main>
        <HeroSection />
        <EthicsMap />
        <EcoScoreBreakdown />
        <FeaturedReviews />
        <MaterialGalaxy />
        <EthicalTimeline />
        <CommunityImpact />
        <ProductFinder />
      </main>
      <Footer />
      <CookieNotice />
    </div>
  )
}
