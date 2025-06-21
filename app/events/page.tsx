import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ChatWidget } from "@/components/chat-widget"
import EventsPageClient from "./EventsPageClient"

export const metadata = {
  title: "Events | Startup Centre Nagpur",
  description: "Join our upcoming startup events, investor meetups, and pitch nights.",
}

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <EventsPageClient />
      <Footer />
      <ChatWidget />
    </div>
  )
}
