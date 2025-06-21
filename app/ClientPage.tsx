"use client"

import { ArrowRight, TrendingUp, Users, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroAnimation } from "@/components/hero-animation"
import { FeatureCard } from "@/components/feature-card"
import { StatsCounter } from "@/components/stats-counter"
import { ClientLogos } from "@/components/client-logos"
import { IndustriesGrid } from "@/components/industries-grid"
import { AnimatedGradient } from "@/components/animated-gradient"
import { ChatWidget } from "@/components/chat-widget"
import { FounderTestimonials } from "@/components/founder-testimonials"
import { EventsMeetups } from "@/components/events-meetups"
import { AboutSCNSection } from "@/components/about-scn-section"
import { InvestorSection } from "@/components/investor-section"
import { FundingProcess } from "@/components/funding-process"

const handleWhatsAppRedirect = (message: string) => {
  const phoneNumber = "917875942201"
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
}

export default function ClientPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-32">
        <AnimatedGradient />
        <div className="container relative z-10 px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Empowering Startups | Connecting Investors | Creating Impact
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  India's premier platform for startup funding, investor networking, and business consultancy.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button
                  size="lg"
                  className="group"
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Hi! I'm interested in applying for funding support for my startup. Can you please guide me through the process?",
                    )
                  }
                >
                  Apply for Funding
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Hello! I'm interested in joining as an investor. Please share more details about investment opportunities.",
                    )
                  }
                >
                  Join as an Investor
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* Why SCN Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Why Choose SCN</h2>
            <p className="text-muted-foreground md:text-xl">
              "SCN is the bridge between visionary founders and strategic investors."
            </p>
          </div>
          <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:max-w-5xl">
            <FeatureCard
              icon={<TrendingUp className="h-10 w-10" />}
              title="Investment-Ready Startups"
              description="We prepare startups with compelling pitch decks and business strategies"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10" />}
              title="Angel Investor Network"
              description="Connect with our extensive network of verified angel investors and syndicates"
            />
            <FeatureCard
              icon={<Target className="h-10 w-10" />}
              title="End-to-End Support"
              description="From ideation to funding, we provide comprehensive startup ecosystem support"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <StatsCounter />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">It's Time to Raise Capital</h2>
            <p className="md:text-xl">
              Focus on your business while we do the legwork to get you the funding you deserve.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center pt-4">
              <Button
                size="lg"
                variant="secondary"
                className="group"
                onClick={() =>
                  handleWhatsAppRedirect(
                    "Hi! I need funding support for my startup. Can you help me get started with the process?",
                  )
                }
              >
                Get Funding Support
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Clients</h2>
            <p className="text-muted-foreground md:text-xl">Trusted by innovative startups and established companies</p>
          </div>
          <ClientLogos />
        </div>
      </section>

      {/* NEW SECTIONS ADDED AFTER CLIENTS */}

      {/* Founder Testimonials */}
      <FounderTestimonials />

      {/* Events & Meetups */}
      <EventsMeetups />

      {/* About SCN Section */}
      <AboutSCNSection />

      {/* Investor Section */}
      <InvestorSection />

      {/* Funding Process */}
      <FundingProcess />

      {/* Industries We Serve */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Industries We Serve</h2>
            <p className="text-muted-foreground md:text-xl">
              Supporting startups across diverse sectors and emerging technologies
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-5xl">
            <IndustriesGrid />
          </div>
        </div>
      </section>

      <Footer />
      <ChatWidget />
    </div>
  )
}
