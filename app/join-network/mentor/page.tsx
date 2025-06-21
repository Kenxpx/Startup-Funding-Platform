import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { RegistrationForm } from "@/components/registration-form"

export const metadata: Metadata = {
  title: "Mentor Registration | Join SCN Network",
  description: "Share your expertise and guide the next generation of entrepreneurs",
}

export default function MentorRegistrationPage() {
  const expertiseAreas = [
    "Technology & Product",
    "Marketing & Sales",
    "Finance & Fundraising",
    "Operations & Strategy",
    "Legal & Compliance",
    "HR & Team Building",
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mentor Registration</h1>
            <p className="text-muted-foreground md:text-lg">
              Share your expertise and guide the next generation of entrepreneurs. Help startups navigate challenges and
              accelerate their growth through your valuable insights and experience.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl">
            <RegistrationForm
              type="mentor"
              dropdownLabel="Expertise Area"
              dropdownOptions={expertiseAreas}
              textareaLabel="Professional Background"
              textareaPlaceholder="Share your professional experience, achievements, and how you can help startups..."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
