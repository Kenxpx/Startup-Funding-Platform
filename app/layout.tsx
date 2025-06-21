import type React from "react"
import "./globals.css"
import { ChatWidget } from "@/components/chat-widget"

export const metadata = {
  metadataBase: new URL("https://research-ai-assistant.vercel.app"),
  title: {
    default: "AI Research Assistant",
    template: "%s | AI Research Assistant",
  },
  description:
    "AI-powered research assistant that helps you discover, summarize, and analyze research papers with ease",
  keywords: ["research", "AI", "papers", "academic", "summarize", "analysis", "chat", "upload"],
  authors: [{ name: "ResearchAI Team" }],
  creator: "ResearchAI",
  publisher: "ResearchAI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://research-ai-assistant.vercel.app",
    title: "AI Research Assistant",
    description:
      "AI-powered research assistant that helps you discover, summarize, and analyze research papers with ease",
    siteName: "AI Research Assistant",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Research Assistant",
    description:
      "AI-powered research assistant that helps you discover, summarize, and analyze research papers with ease",
    creator: "@researchai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <ChatWidget />
      </body>
    </html>
  )
}
