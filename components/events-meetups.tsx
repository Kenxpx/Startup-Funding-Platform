"use client"

import { Calendar, Clock, MapPin, Users, Share2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const handleWhatsAppRedirect = (eventName: string, eventDate: string) => {
  const message = `Hi! I want to register for the ${eventName} event scheduled on ${eventDate}. Please share the registration details.`
  const phoneNumber = "917875942201"
  const encodedMessage = encodeURIComponent(message)
  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
}

export function EventsMeetups() {
  return (
    <section className="bg-muted/50 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Events & <span className="text-blue-600">Meetups</span>
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Join our exclusive events to network with investors, mentors, and fellow entrepreneurs
          </p>
        </div>

        <div className="mx-auto mt-12 grid gap-6 md:grid-cols-2 max-w-4xl">
          {/* SCN Investor Meetup */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white">
              <Badge className="bg-blue-400 text-blue-900 mb-4">Networking</Badge>
              <h3 className="text-2xl font-bold mb-2">SCN Investor Meetup</h3>
              <div className="flex items-center space-x-4 text-blue-100">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>April 15, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>6:00 PM - 9:00 PM</span>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Network with angel investors, VCs, and successful entrepreneurs. Pitch your startup to potential
                investors.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>Hotel Centre Point, Nagpur</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>50+ Investors</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleWhatsAppRedirect("SCN Investor Meetup", "April 15, 2025")}
                >
                  Register Now →
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Startup Pitch Night */}
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white">
              <Badge className="bg-purple-400 text-purple-900 mb-4">Pitch Event</Badge>
              <h3 className="text-2xl font-bold mb-2">Startup Pitch Night</h3>
              <div className="flex items-center space-x-4 text-purple-100">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>May 20, 2025</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4" />
                  <span>7:00 PM - 10:00 PM</span>
                </div>
              </div>
            </div>
            <CardContent className="p-6">
              <p className="text-muted-foreground mb-4">
                Selected startups present their ideas to a panel of investors and industry experts for funding
                opportunities.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-2 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>IIM Nagpur Campus</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span>100+ Attendees</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="rounded-full w-10 h-10 p-0">
                    <Calendar className="w-4 h-4" />
                  </Button>
                </div>
                <Button
                  className="bg-purple-600 hover:bg-purple-700"
                  onClick={() => handleWhatsAppRedirect("Startup Pitch Night", "May 20, 2025")}
                >
                  Register Now →
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
