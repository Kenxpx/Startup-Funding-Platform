import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProfileHeader } from "@/components/profile-header"
import { ProfileTabs } from "@/components/profile-tabs"

export const metadata: Metadata = {
  title: "User Profile | AI Research Assistant",
  description: "Manage your account, saved papers, and subscription settings",
  openGraph: {
    title: "User Profile | AI Research Assistant",
    description: "Manage your account, saved papers, and subscription settings",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Research Assistant - User Profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "User Profile | AI Research Assistant",
    description: "Manage your account, saved papers, and subscription settings",
    images: ["/og-image.png"],
  },
}

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <ProfileHeader />
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <ProfileTabs />
        </div>
      </div>
      <Footer />
    </div>
  )
}
