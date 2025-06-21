import type { Metadata } from "next"
import { Target, Eye } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "About Us | Startup Centre Nagpur",
  description:
    "Learn about SCN's mission to empower startups in Tier-2/3 India through funding, mentorship, and investor access",
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Who We Are</h1>
            <p className="text-muted-foreground md:text-xl">
              Startup Centre Nagpur (SCN) empowers startups in Tier-2/3 India by bridging them with funding, mentorship,
              and investor access.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Eye className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Our Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To establish SCN as Central India's leading startup investment hub, creating a thriving ecosystem
                    that connects innovative founders with strategic capital and mentorship.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="h-full">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Target className="h-8 w-8 text-primary" />
                    <CardTitle className="text-2xl">Our Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    To build a thriving startup ecosystem in Vidarbha by connecting founders with capital and strategic
                    guidance, enabling sustainable growth and innovation in smaller cities.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
