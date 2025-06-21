import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PaperChatHeader } from "@/components/paper-chat-header"
import { PaperChatInterface } from "@/components/paper-chat-interface"
import { PaperSummaryPanel } from "@/components/paper-summary-panel"
import { PaperSwitcher } from "@/components/paper-switcher"

// Optional: Replace with dynamic fetch logic if needed
export async function generateStaticParams() {
  return [
    { id: "paper-1" },
    { id: "paper-2" },
    { id: "paper-3" },
  ]
}

export const metadata: Metadata = {
  title: "Chat with Paper | AI Research Assistant",
  description: "Ask questions and get AI-powered insights about this research paper",
}

export default function PaperChatPage({ params }: { params: { id: string } }) {
  const paperId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="mb-6 flex items-center justify-between">
            <Link href={`/paper/${paperId}`}>
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to paper details
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <PaperSwitcher />
              <Button variant="outline" size="sm" className="gap-1">
                <Download className="h-4 w-4" />
                Export Chat
              </Button>
              <Button variant="outline" size="sm" className="gap-1">
                <FileText className="h-4 w-4" />
                View PDF
              </Button>
            </div>
          </div>

          <PaperChatHeader
            title="Attention Is All You Need: Transformer Networks and Their Impact on Natural Language Processing"
            authors={[
              "Ashish Vaswani",
              "Noam Shazeer",
              "Niki Parmar",
              "Jakob Uszkoreit",
              "Llion Jones",
              "Aidan N. Gomez",
              "Łukasz Kaiser",
              "Illia Polosukhin",
            ]}
            journal="Advances in Neural Information Processing Systems (NeurIPS 2017)"
            year="2017"
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_300px]">
            <PaperChatInterface />
            <PaperSummaryPanel />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
