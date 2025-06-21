"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

export function PaperMetadata() {
  const metadata = [
    { label: "Published", value: "June 12, 2017" },
    { label: "DOI", value: "10.48550/arXiv.1706.03762" },
    { label: "Citations", value: "45,000+" },
    { label: "Publisher", value: "NeurIPS" },
    { label: "Pages", value: "11" },
    { label: "Language", value: "English" },
  ]

  const keywords = ["Transformer", "Attention Mechanism", "Neural Networks", "NLP", "Machine Translation"]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-2">
        {metadata.map((item) => (
          <div key={item.label} className="flex justify-between">
            <span className="text-sm text-muted-foreground">{item.label}</span>
            <span className="text-sm font-medium">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-medium">Keywords</h3>
        <div className="flex flex-wrap gap-2">
          {keywords.map((keyword) => (
            <Badge key={keyword} variant="secondary">
              {keyword}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
