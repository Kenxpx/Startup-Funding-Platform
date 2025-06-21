import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AdminHeader } from "@/components/admin-header"
import { AdminTabs } from "@/components/admin-tabs"

export const metadata: Metadata = {
  title: "Admin Dashboard | AI Research Assistant",
  description: "Monitor system usage, manage users, and track subscriptions",
}

export default function AdminPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <AdminHeader />
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <AdminTabs />
        </div>
      </div>
      <Footer />
    </div>
  )
}
