import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardSearch } from "@/components/dashboard-search"
import { PaperResults } from "@/components/paper-results"
import { DashboardFilters } from "@/components/dashboard-filters"

export const metadata: Metadata = {
  title: "Dashboard | AI Research Assistant",
  description: "Search and analyze research papers with our AI assistant",
  openGraph: {
    title: "Research Dashboard | AI Research Assistant",
    description: "Search, discover, and analyze research papers with AI assistance",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Research Assistant Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Dashboard | AI Research Assistant",
    description: "Search, discover, and analyze research papers with AI assistance",
    images: ["/og-image.png"],
  },
}

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <DashboardHeader />
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="grid gap-6 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
            <div className="hidden md:block">
              <DashboardFilters />
            </div>
            <div className="space-y-6">
              <DashboardSearch />
              <PaperResults />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
