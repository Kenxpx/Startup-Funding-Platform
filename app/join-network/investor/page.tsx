import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"

export const metadata: Metadata = {
  title: "Investor Registration | Join SCN Network",
  description: "Join our investor network to discover promising startups and investment opportunities",
}

export default function InvestorRegistrationPage() {
  const investorTypes = [
    "Angel Investor",
    "Venture Capital",
    "Private Equity",
    "Corporate Investor",
    "Family Office",
    "Syndicate Lead",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Investor Registration</h1>
            <p className="text-muted-foreground md:text-lg">
              Join our exclusive investor network to discover promising startups and high-potential investment
              opportunities. Connect with vetted entrepreneurs and innovative business models.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <RegistrationForm
              type="investor"
              dropdownLabel="Investor Type"
              dropdownOptions={investorTypes}
              textareaLabel="Investment Focus"
              textareaPlaceholder="Describe your investment criteria, preferred sectors, ticket size, and areas of expertise..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
