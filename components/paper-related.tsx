"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function PaperRelated() {
  const relatedPapers = [
    {
      id: "bert",
      title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
      year: "2019",
    },
    {
      id: "gpt",
      title: "Improving Language Understanding by Generative Pre-Training",
      authors: ["Alec Radford", "Karthik Narasimhan", "Tim Salimans", "Ilya Sutskever"],
      year: "2018",
    },
    {
      id: "xlnet",
      title: "XLNet: Generalized Autoregressive Pretraining for Language Understanding",
      authors: ["Zhilin Yang", "Zihang Dai", "Yiming Yang", "Jaime Carbonell", "Ruslan Salakhutdinov", "Quoc V. Le"],
      year: "2019",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="space-y-4">
        {relatedPapers.map((paper) => (
          <div key={paper.id} className="space-y-1">
            <Link href={`/paper/${paper.id}`} className="text-sm font-medium hover:text-primary hover:underline">
              {paper.title}
            </Link>
            <div className="text-xs text-muted-foreground">
              {paper.authors.slice(0, 2).join(", ")}
              {paper.authors.length > 2 ? ", et al." : ""} • {paper.year}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
