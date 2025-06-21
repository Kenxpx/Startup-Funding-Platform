"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function EventsPageClient() {
  const handleEventRegistration = (eventName: string, eventDate: string) => {
    const phoneNumber = "917875942201"
    const message = `Hi! I would like to register for the "${eventName}" event scheduled for ${eventDate}. Please confirm my registration and share the details.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
  }

  const upcomingEvents = [
    {
      title: "SCN Investor Meetup",
      date: "April 2025",
      description: "Connect with angel investors and venture capitalists",
      image: "/images/business-meeting-presentation.jpeg",
      attendees: "50+ Investors Expected",
    },
    {
      title: "Startup Pitch Night",
      date: "May 2025",
      description: "Present your startup to potential investors and mentors",
      image: "/images/workshop-presentation.jpeg",
      attendees: "30+ Startups Participating",
    },
  ]

  const pastEvents = [
    "/images/data-analysis-session.jpeg",
    "/images/collaborative-workspace.jpeg",
    "/images/modern-office-building.png",
    "/images/business-handshake.jpeg",
  ]

  return (
    <main className="flex-1 pt-24">
      {/* Hero Section */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Startup Events & Networking</h1>
            <p className="text-muted-foreground md:text-xl">
              Join our community events to connect with investors, mentors, and fellow entrepreneurs
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Upcoming Events</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    {event.title}
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {event.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {event.attendees}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full" onClick={() => handleEventRegistration(event.title, event.date)}>
                    Register for Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Past Events</h2>
            <p className="text-muted-foreground md:text-xl">
              Take a look at our previous successful events and networking sessions
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-6xl mx-auto">
            {pastEvents.map((image, index) => (
              <div key={index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Past Event ${index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
