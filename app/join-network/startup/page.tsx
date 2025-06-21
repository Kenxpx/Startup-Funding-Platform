import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"

export const metadata: Metadata = {
  title: "Startup Registration | Join SCN Network",
  description: "Register your startup to access funding opportunities, mentorship, and investor connections",
}

export default function StartupRegistrationPage() {
  const fundingStages = ["Pre-Seed", "Seed", "Series A", "Series B", "Series C+", "Growth Stage"]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Startup Registration</h1>
            <p className="text-muted-foreground md:text-lg">
              Join our network to access funding opportunities, expert mentorship, and connect with potential investors.
              Let us help you take your startup to the next level.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <RegistrationForm
              type="startup"
              dropdownLabel="Funding Stage"
              dropdownOptions={fundingStages}
              textareaLabel="Business Summary"
              textareaPlaceholder="Briefly describe your startup, the problem you're solving, and your target market..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
