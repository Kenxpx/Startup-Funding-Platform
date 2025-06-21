"use client"

import { motion } from "framer-motion"

export function PaperSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-4"
    >
      <div className="rounded-md bg-muted/50 p-4">
        <h3 className="font-medium">Key Contributions</h3>
        <ul className="mt-2 space-y-2 text-sm">
          <li>
            • Introduced the Transformer architecture, which relies entirely on self-attention mechanisms without
            recurrence or convolutions
          </li>
          <li>
            • Demonstrated superior performance on machine translation tasks while being more parallelizable and
            requiring less training time
          </li>
          <li>
            • Proposed multi-head attention to allow the model to jointly attend to information from different
            representation subspaces
          </li>
          <li>• Established a foundation for future models like BERT, GPT, and T5</li>
        </ul>
      </div>

      <div className="prose max-w-none dark:prose-invert">
        <p>
          This paper introduces the Transformer, a novel neural network architecture based entirely on attention
          mechanisms, eliminating the need for recurrence and convolutions found in previous sequence models. The
          authors demonstrate that this approach not only improves performance on translation tasks but also
          significantly reduces training time due to increased parallelization.
        </p>

        <p>
          The core innovation is the multi-head self-attention mechanism, which allows the model to focus on different
          parts of the input sequence simultaneously. This is combined with position-wise feed-forward networks,
          residual connections, layer normalization, and careful attention to positional encoding.
        </p>

        <p>
          The Transformer architecture consists of an encoder and decoder, each composed of stacked self-attention and
          feed-forward neural network layers. In the encoder, each layer has two sub-layers: a multi-head self-attention
          mechanism and a position-wise fully connected feed-forward network. The decoder introduces a third sub-layer
          that performs multi-head attention over the encoder's output.
        </p>

        <p>
          Experimental results show that the Transformer outperforms previous state-of-the-art models on WMT 2014
          English-to-German and English-to-French translation tasks, achieving 28.4 BLEU and 41.8 BLEU respectively. The
          model's success has led to its adoption as the foundation for numerous subsequent models in NLP, including
          BERT, GPT, and T5.
        </p>
      </div>
    </motion.div>
  )
}
