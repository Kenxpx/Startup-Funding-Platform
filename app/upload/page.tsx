import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UploadHeader } from "@/components/upload-header"
import { DocumentUploader } from "@/components/document-uploader"
import { UploadFeatures } from "@/components/upload-features"

// Static metadata
export const metadata: Metadata = {
  title: "Upload Document | AI Research Assistant",
  description: "Upload your research papers to summarize and chat with them using AI",
  openGraph: {
    title: "Upload & Chat with Research Papers | AI Research Assistant",
    description: "Upload your research papers to get AI-powered summaries and insights",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Research Assistant - Upload & Chat with Papers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Upload & Chat with Research Papers | AI Research Assistant",
    description: "Upload your research papers to get AI-powered summaries and insights",
    images: ["/og-image.png"],
  },
}

// ✅ Required for static export
// Replace these IDs with your actual expected document IDs
export async function generateStaticParams() {
  return [
    { id: "example-doc-1" },
    { id: "example-doc-2" },
    { id: "example-doc-3" },
  ]
}

// ✅ Page component with dynamic ID
export default function UploadPage({ params }: { params: { id: string } }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <UploadHeader />
        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-4xl">
            <DocumentUploader />
            <UploadFeatures />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
