"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export function PaperSummaryPanel() {
  return (
    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
      <Card className="h-full">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Paper Summary</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-4">
          <div className="space-y-4 text-sm">
            <div>
              <h3 className="font-medium">Key Contributions</h3>
              <ul className="mt-1 space-y-1 pl-4 text-muted-foreground">
                <li>• Introduced the Transformer architecture based solely on attention mechanisms</li>
                <li>• Eliminated recurrence and convolutions from sequence models</li>
                <li>• Proposed multi-head attention mechanism</li>
                <li>• Achieved state-of-the-art results on translation tasks</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Methodology</h3>
              <p className="mt-1 text-muted-foreground">
                The Transformer uses stacked self-attention and point-wise, fully connected layers for both the encoder
                and decoder. The encoder consists of 6 identical layers, each with two sub-layers: multi-head
                self-attention and a position-wise feed-forward network.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Results</h3>
              <p className="mt-1 text-muted-foreground">
                Achieved 28.4 BLEU on the WMT 2014 English-to-German translation task and 41.8 BLEU on the
                English-to-French task, outperforming previous state-of-the-art models while requiring significantly
                less training time.
              </p>
            </div>

            <div>
              <h3 className="font-medium">Impact</h3>
              <p className="mt-1 text-muted-foreground">
                The Transformer architecture has become foundational for modern NLP models, including BERT, GPT, and T5,
                enabling significant advances in language understanding and generation tasks.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
