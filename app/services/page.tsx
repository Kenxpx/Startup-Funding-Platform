import type { Metadata } from "next"
import { FileText, TrendingUp, Lightbulb, Users, DollarSign, BarChart3 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

export const metadata: Metadata = {
  title: "Our Services | Startup Centre Nagpur",
  description:
    "Comprehensive startup services including pitch decks, business plans, investor connect, and funding support",
}

export default function ServicesPage() {
  const services = [
    {
      icon: <FileText className="h-10 w-10" />,
      title: "Investment Pitch Deck",
      description: "We help create compelling investor-focused decks that tell your story and showcase your potential.",
    },
    {
      icon: <BarChart3 className="h-10 w-10" />,
      title: "Business Plan",
      description: "Comprehensive roadmaps, projections & deep financial analysis to guide your startup journey.",
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Startup Strategy",
      description: "Go from idea to execution with expert consulting and strategic planning support.",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Investor Connect",
      description: "Get connected with angel investors & syndicates through our extensive network.",
    },
    {
      icon: <DollarSign className="h-10 w-10" />,
      title: "Funding Support",
      description: "End-to-end assistance with your fundraising process from preparation to closing.",
    },
    {
      icon: <TrendingUp className="h-10 w-10" />,
      title: "Market Analysis",
      description: "Detailed reports on your competition & market landscape to inform strategic decisions.",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
            <p className="text-muted-foreground md:text-xl">
              Comprehensive support for startups at every stage of their journey
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
