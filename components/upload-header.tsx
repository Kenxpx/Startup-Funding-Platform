"use client"

import { motion } from "framer-motion"

export function UploadHeader() {
  return (
    <div className="bg-muted/50 py-12 md:py-16">
      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upload Your Research Paper</h1>
          <p className="text-muted-foreground md:text-xl">
            Get AI-powered summaries and insights from your own documents
          </p>
        </div>
      </motion.div>
    </div>
  )
}
