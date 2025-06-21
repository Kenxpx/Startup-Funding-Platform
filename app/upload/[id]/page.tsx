import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { UploadedDocumentChat } from "@/components/uploaded-document-chat"
import { UploadedDocumentInfo } from "@/components/uploaded-document-info"
import { UploadedDocumentSummary } from "@/components/uploaded-document-summary"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// ✅ Required for static export of dynamic route
export async function generateStaticParams() {
  return [
    { id: "doc-1" },
    { id: "doc-2" },
    { id: "doc-3" },
  ]
}

export const metadata: Metadata = {
  title: "Chat with Uploaded Document | AI Research Assistant",
  description: "Ask questions and get AI-powered insights about your uploaded document",
}

export default function UploadedDocumentPage({ params }: { params: { id: string } }) {
  const documentId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="mb-6 flex items-center justify-between">
            <Link href="/upload">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to upload
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Download Summary
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <FileText className="h-4 w-4" />
                View Original
              </Button>
            </div>
          </div>

          <UploadedDocumentInfo
            title="Quantum Computing: Recent Advances and Future Directions"
            type="PDF Document"
            pages={24}
            uploadDate="March 15, 2025"
          />

          <Tabs defaultValue="chat" className="mt-8">
            <TabsList>
              <TabsTrigger value="chat">Chat</TabsTrigger>
              <TabsTrigger value="summary">AI Summary</TabsTrigger>
              <TabsTrigger value="key-sections">Key Sections</TabsTrigger>
            </TabsList>
            <TabsContent value="chat" className="mt-6">
              <UploadedDocumentChat />
            </TabsContent>
            <TabsContent value="summary" className="mt-6">
              <UploadedDocumentSummary />
            </TabsContent>
            <TabsContent value="key-sections" className="mt-6">
              <div className="prose max-w-none dark:prose-invert">
                <h2>Abstract</h2>
                <p>
                  This paper provides a comprehensive overview of recent advances in quantum computing, focusing on
                  quantum algorithms, error correction, and hardware implementations...
                </p>

                <h2>Introduction</h2>
                <p>
                  Quantum computing leverages the principles of quantum mechanics to perform computations...
                </p>

                <h2>Key Findings</h2>
                <ul>
                  <li>Quantum algorithms for optimization problems show polynomial speedup</li>
                  <li>Error correction techniques have improved coherence times</li>
                  <li>Hybrid quantum-classical approaches are promising</li>
                  <li>Quantum ML shows potential for exponential speedup</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                  While challenges remain, the field is advancing rapidly, with practical applications on the horizon.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <Footer />
    </div>
  )
}
