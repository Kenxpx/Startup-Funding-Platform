"use client"

import { FileText, CheckCircle, Users, Handshake, ArrowRight, Phone } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const handleWhatsAppRedirect = (message: string) => {
  const phoneNumber = "917875942201"
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
}

const handlePhoneCall = () => {
  window.open("tel:+917875942201", "_self")
}

export function FundingProcess() {
  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Need <span className="text-orange-500">Funding</span> for Your Startup?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Our proven 4-step process helps startups secure funding from angel investors and VCs
          </p>
        </div>

        {/* Process Steps */}
        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl">
          <Card className="relative">
            <CardContent className="p-6 text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                1
              </div>
              <div className="bg-blue-100 p-4 rounded-lg w-fit mx-auto mb-4 mt-2">
                <FileText className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Review</h3>
              <p className="text-sm text-muted-foreground">
                Submit your startup details and business plan for our expert review
              </p>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="p-6 text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                2
              </div>
              <div className="bg-purple-100 p-4 rounded-lg w-fit mx-auto mb-4 mt-2">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Investment Readiness</h3>
              <p className="text-sm text-muted-foreground">
                We help you prepare pitch decks, financial models, and legal documentation
              </p>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="p-6 text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                3
              </div>
              <div className="bg-orange-100 p-4 rounded-lg w-fit mx-auto mb-4 mt-2">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Investor Matchmaking</h3>
              <p className="text-sm text-muted-foreground">Connect with relevant investors from our curated network</p>
            </CardContent>
          </Card>

          <Card className="relative">
            <CardContent className="p-6 text-center">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                4
              </div>
              <div className="bg-green-100 p-4 rounded-lg w-fit mx-auto mb-4 mt-2">
                <Handshake className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Deal Closure</h3>
              <p className="text-sm text-muted-foreground">
                Complete due diligence and finalize your funding agreement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mx-auto mt-16 max-w-2xl">
          <Card className="bg-gradient-to-r from-gray-50 to-gray-100">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Funded?</h3>
              <p className="text-muted-foreground mb-6">
                Join 50+ successful startups that have raised funding through our platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700"
                  onClick={() =>
                    handleWhatsAppRedirect(
                      "Hi! I'm ready to get funding for my startup. Please guide me through your 4-step process.",
                    )
                  }
                >
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Start Your Journey
                </Button>
                <Button size="lg" variant="outline" onClick={handlePhoneCall}>
                  <Phone className="w-4 h-4 mr-2" />
                  Schedule Funding Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
