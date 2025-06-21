"use client"

import { motion } from "framer-motion"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UploadedDocumentSummary() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="flex justify-end">
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          Download Summary
        </Button>
      </div>

      <div className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
        <h2 className="text-xl font-bold">Executive Summary</h2>
        <div className="mt-4 prose max-w-none dark:prose-invert">
          <p>
            This paper provides a comprehensive overview of recent advances in quantum computing, focusing on quantum
            algorithms, error correction, and hardware implementations. The authors discuss the potential impact of
            quantum computing on various fields, including cryptography, materials science, and artificial intelligence,
            while also exploring the challenges and opportunities in scaling quantum systems.
          </p>

          <h3>Key Findings</h3>
          <ul>
            <li>Quantum algorithms for optimization problems show polynomial speedup over classical counterparts</li>
            <li>Error correction techniques have improved qubit coherence times by an order of magnitude</li>
            <li>Hybrid quantum-classical approaches offer practical advantages for near-term applications</li>
            <li>Quantum machine learning algorithms demonstrate potential for exponential speedup in specific tasks</li>
          </ul>

          <h3>Methodology</h3>
          <p>
            The paper reviews recent experimental results from leading quantum computing platforms, including
            superconducting circuits, trapped ions, and photonic systems. It analyzes performance metrics such as gate
            fidelity, coherence time, and scalability across different hardware implementations. The authors also
            evaluate the theoretical foundations of quantum algorithms and their practical implementations.
          </p>

          <h3>Implications</h3>
          <p>
            The findings suggest that while quantum computing is still in its early stages, significant progress has
            been made in addressing key challenges. The development of error correction techniques and fault-tolerant
            quantum computing will be crucial for realizing the full potential of quantum systems. The authors predict
            that hybrid quantum-classical approaches will dominate near-term applications, with fully quantum solutions
            becoming viable as hardware capabilities improve.
          </p>

          <h3>Conclusion</h3>
          <p>
            While significant challenges remain in scaling quantum systems and mitigating errors, the rapid pace of
            advancement in quantum computing suggests that practical applications may be realized sooner than previously
            anticipated. Continued investment in both hardware and algorithm development is essential to unlock the full
            potential of quantum computing.
          </p>
        </div>
      </div>
    </motion.div>
  )
}
