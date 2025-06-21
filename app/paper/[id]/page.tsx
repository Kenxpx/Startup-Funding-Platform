import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, BookOpen, Download, MessageSquare, Share2, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PaperHeader } from "@/components/paper-header"
import { PaperMetadata } from "@/components/paper-metadata"
import { PaperSummary } from "@/components/paper-summary"
import { PaperCitations } from "@/components/paper-citations"
import { PaperRelated } from "@/components/paper-related"
import { PaperDiscussion } from "@/components/paper-discussion"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// ✅ Required for static export of dynamic route
export async function generateStaticParams() {
  return [
    { id: "paper-1" },
    { id: "paper-2" },
    { id: "paper-3" },
  ]
}

export const metadata: Metadata = {
  title: "Paper Details | AI Research Assistant",
  description: "View detailed information and AI-generated summary of research paper",
  openGraph: {
    title: "Research Paper Details | AI Research Assistant",
    description: "View detailed information and AI-generated summary of this research paper",
    type: "article",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Research Assistant - Paper Details",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Paper Details | AI Research Assistant",
    description: "View detailed information and AI-generated summary of this research paper",
    images: ["/og-image.png"],
  },
}

export default function PaperPage({ params }: { params: { id: string } }) {
  const paperId = params.id

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <div className="container px-4 py-6 md:px-6 md:py-8">
          <div className="mb-6">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to search results
              </Button>
            </Link>
          </div>

          <PaperHeader
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

          <div className="mt-6 flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="gap-1">
              <Star className="h-4 w-4" />
              Save
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <Share2 className="h-4 w-4" />
              Share
            </Button>
            <Button variant="outline" size="sm" className="gap-1">
              <BookOpen className="h-4 w-4" />
              Read Full Paper
            </Button>
            <Button variant="primary" size="sm" className="gap-1" asChild>
              <Link href={`/paper/${paperId}/chat`}>
                <MessageSquare className="h-4 w-4" />
                Chat with Paper
              </Link>
            </Button>
          </div>

          <div className="mt-8 grid gap-8 lg:grid-cols-[2fr_1fr]">
            <div className="space-y-8">
              <Tabs defaultValue="summary">
                <TabsList>
                  <TabsTrigger value="summary">AI Summary</TabsTrigger>
                  <TabsTrigger value="abstract">Abstract</TabsTrigger>
                  <TabsTrigger value="discussion">
                    Discussion
                    <span className="ml-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs">12</span>
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="summary" className="mt-6">
                  <PaperSummary />
                </TabsContent>
                <TabsContent value="abstract" className="mt-6">
                  <div className="prose max-w-none dark:prose-invert">
                    <p>
                      The dominant sequence transduction models are based on complex recurrent or convolutional neural
                      networks that include an encoder and a decoder. The best performing models also connect the
                      encoder and decoder through an attention mechanism. We propose a new simple network architecture,
                      the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions
                      entirely. Experiments on two machine translation tasks show these models to be superior in quality
                      while being more parallelizable and requiring significantly less time to train. Our model achieves
                      28.4 BLEU on the WMT 2014 English-to-German translation task, improving over the existing best
                      results, including ensembles, by over 2 BLEU. On the WMT 2014 English-to-French translation task,
                      our model establishes a new single-model state-of-the-art BLEU score of 41.8 after training for
                      3.5 days on eight GPUs, a small fraction of the training costs of the best models from the
                      literature.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="discussion" className="mt-6">
                  <PaperDiscussion />
                </TabsContent>
              </Tabs>

              <div>
                <h2 className="text-2xl font-bold">Citations & References</h2>
                <Separator className="my-4" />
                <PaperCitations />
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold">Paper Metadata</h2>
                <Separator className="my-4" />
                <PaperMetadata />
              </div>

              <div>
                <h2 className="text-xl font-bold">Related Papers</h2>
                <Separator className="my-4" />
                <PaperRelated />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
