"use client"

import { TrendingUp, Users, Calendar, Shield, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const handleWhatsAppRedirect = (message: string) => {
  const phoneNumber = "917875942201"
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
}

export function InvestorSection() {
  return (
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Invest in the <span className="text-blue-600">Next Big Idea</span>
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Join our exclusive network of angel investors and discover high-potential startups in Central India
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 max-w-4xl">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Deal Flow</h3>
              <p className="text-muted-foreground mb-4">
                Access to pre-screened, high-potential startups before they go to market
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-blue-600 group-hover:text-blue-700"
                onClick={() =>
                  handleWhatsAppRedirect(
                    "Hi! I'm interested in learning more about exclusive deal flow opportunities. Please share more details.",
                  )
                }
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Syndicate Investments</h3>
              <p className="text-muted-foreground mb-4">
                Co-invest with experienced angels and reduce individual risk exposure
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-purple-600 group-hover:text-purple-700"
                onClick={() =>
                  handleWhatsAppRedirect(
                    "Hi! I want to know more about syndicate investment opportunities. Can you provide details?",
                  )
                }
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
                <Calendar className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Investor Meetups</h3>
              <p className="text-muted-foreground mb-4">
                Regular networking events and pitch sessions with fellow investors
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-orange-600 group-hover:text-orange-700"
                onClick={() =>
                  handleWhatsAppRedirect(
                    "Hi! I'd like to attend investor meetups. Please share the upcoming event schedule.",
                  )
                }
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Legal & Financial Assistance</h3>
              <p className="text-muted-foreground mb-4">
                Complete support for due diligence, documentation, and deal structuring
              </p>
              <Button
                variant="link"
                className="p-0 h-auto text-green-600 group-hover:text-green-700"
                onClick={() =>
                  handleWhatsAppRedirect(
                    "Hi! I need information about legal and financial assistance for investments. Please help.",
                  )
                }
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Investment Stats */}
        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-3 max-w-4xl">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">25%</div>
              <div className="text-lg font-semibold mb-1">Average ROI</div>
              <div className="text-sm text-muted-foreground">Historical returns for our investors</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
              <div className="text-lg font-semibold mb-1">Active Investors</div>
              <div className="text-sm text-muted-foreground">Growing network of angel investors</div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">₹25Cr+</div>
              <div className="text-lg font-semibold mb-1">Total Invested</div>
              <div className="text-sm text-muted-foreground">Cumulative investment through our platform</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
