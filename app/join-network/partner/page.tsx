import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"

export const metadata: Metadata = {
  title: "Partner Registration | Join SCN Network",
  description: "Partner with SCN to expand the startup ecosystem and create mutual growth opportunities",
}

export default function PartnerRegistrationPage() {
  const partnerTypes = [
    "Incubator/Accelerator",
    "Corporate Partner",
    "Government Agency",
    "Educational Institution",
    "Service Provider",
    "Technology Partner",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Partner Registration</h1>
            <p className="text-muted-foreground md:text-lg">
              Partner with SCN to expand the startup ecosystem and create mutual growth opportunities. Let's collaborate
              to support entrepreneurs and drive innovation together.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <RegistrationForm
              type="partner"
              dropdownLabel="Partner Type"
              dropdownOptions={partnerTypes}
              textareaLabel="Partnership Proposal"
              textareaPlaceholder="Describe your organization and how you'd like to collaborate with SCN..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
