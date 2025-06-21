"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PaperCitations() {
  const citations = [
    {
      id: "bert",
      title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
      year: "2019",
      venue: "NAACL-HLT",
    },
    {
      id: "gpt3",
      title: "Language Models are Few-Shot Learners",
      authors: ["Tom B. Brown", "Benjamin Mann", "Nick Ryder", "et al."],
      year: "2020",
      venue: "NeurIPS",
    },
    {
      id: "t5",
      title: "Exploring the Limits of Transfer Learning with a Unified Text-to-Text Transformer",
      authors: ["Colin Raffel", "Noam Shazeer", "Adam Roberts", "et al."],
      year: "2020",
      venue: "JMLR",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">Showing top 3 of 45,000+ citations</p>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </div>

      <div className="space-y-4">
        {citations.map((citation) => (
          <Card key={citation.id}>
            <CardHeader className="p-4">
              <CardTitle className="text-base">
                <Link href={`/paper/${citation.id}`} className="hover:text-primary hover:underline">
                  {citation.title}
                </Link>
              </CardTitle>
              <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                <span>{citation.authors.join(", ")}</span>
                <span>•</span>
                <span>{citation.venue}</span>
                <span>•</span>
                <span>{citation.year}</span>
              </div>
            </CardHeader>
            <CardContent className="pb-4 pt-0 px-4">
              <Button variant="outline" size="sm" className="gap-1">
                <ExternalLink className="h-3 w-3" />
                View Paper
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </motion.div>
  )
}
