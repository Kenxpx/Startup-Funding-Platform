"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { FileText, MessageSquare, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export function PaperResults() {
  const [papers, setPapers] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setPapers([
        {
          id: "1",
          title: "Attention Is All You Need: Transformer Networks and Their Impact on Natural Language Processing",
          authors: [
            "Ashish Vaswani",
            "Noam Shazeer",
            "Niki Parmar",
            "Jakob Uszkoreit",
            "Llion Jones",
            "Aidan N. Gomez",
            "Łukasz Kaiser",
            "Illia Polosukhin",
          ],
          journal: "Advances in Neural Information Processing Systems (NeurIPS 2017)",
          year: "2017",
          citations: 45000,
          abstract:
            "The dominant sequence transduction models are based on complex recurrent or convolutional neural networks that include an encoder and a decoder. The best performing models also connect the encoder and decoder through an attention mechanism. We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
        },
        {
          id: "2",
          title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
          authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
          journal: "NAACL-HLT 2019",
          year: "2019",
          citations: 32000,
          abstract:
            "We introduce a new language representation model called BERT, which stands for Bidirectional Encoder Representations from Transformers. Unlike recent language representation models, BERT is designed to pre-train deep bidirectional representations from unlabeled text by jointly conditioning on both left and right context in all layers.",
        },
        {
          id: "3",
          title: "Language Models are Few-Shot Learners",
          authors: [
            "Tom B. Brown",
            "Benjamin Mann",
            "Nick Ryder",
            "Melanie Subbiah",
            "Jared Kaplan",
            "Prafulla Dhariwal",
            "Arvind Neelakantan",
            "Pranav Shyam",
            "Girish Sastry",
            "Amanda Askell",
          ],
          journal: "Advances in Neural Information Processing Systems (NeurIPS 2020)",
          year: "2020",
          citations: 18000,
          abstract:
            "Recent work has demonstrated substantial gains on many NLP tasks and benchmarks by pre-training on a large corpus of text followed by fine-tuning on a specific task. While typically task-agnostic in architecture, this method still requires task-specific fine-tuning datasets of thousands or tens of thousands of examples. By contrast, humans can generally perform a new language task from only a few examples or from simple instructions.",
        },
      ])
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          {loading ? "Loading results..." : `Showing ${papers.length} results`}
        </p>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Sort by: Relevance
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {loading ? (
            <>
              {[1, 2, 3].map((i) => (
                <Card key={`skeleton-${i}`}>
                  <CardHeader className="pb-2">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-5/6" />
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <div className="flex gap-2">
                      <Skeleton className="h-9 w-24" />
                      <Skeleton className="h-9 w-16" />
                    </div>
                    <div className="flex gap-2">
                      <Skeleton className="h-9 w-32" />
                      <Skeleton className="h-9 w-20" />
                    </div>
                  </CardFooter>
                </Card>
              ))}
            </>
          ) : (
            papers.map((paper, index) => (
              <motion.div
                key={paper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-xl font-bold">
                        <Link href={`/paper/${paper.id}`} className="hover:text-primary hover:underline">
                          {paper.title}
                        </Link>
                      </CardTitle>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Star className="h-4 w-4" />
                        <span className="sr-only">Save paper</span>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                      <span>
                        {paper.authors.slice(0, 3).join(", ")}
                        {paper.authors.length > 3 ? ", et al." : ""}
                      </span>
                      <span>•</span>
                      <span>{paper.journal}</span>
                      <span>•</span>
                      <span>{paper.year}</span>
                      <span>•</span>
                      <span>Cited by {paper.citations.toLocaleString()}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground line-clamp-2">{paper.abstract}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between pt-0">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href={`/paper/${paper.id}`}>View Details</Link>
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1">
                        <FileText className="h-4 w-4" />
                        PDF
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Generate Summary
                      </Button>
                      <Button variant="outline" size="sm" className="gap-1" asChild>
                        <Link href={`/paper/${paper.id}/chat`}>
                          <MessageSquare className="h-4 w-4" />
                          Chat
                        </Link>
                      </Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
