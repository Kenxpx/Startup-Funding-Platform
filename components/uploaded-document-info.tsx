"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

interface UploadedDocumentInfoProps {
  title: string
  type: string
  pages: number
  uploadDate: string
}

export function UploadedDocumentInfo({ title, type, pages, uploadDate }: UploadedDocumentInfoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-start gap-4 rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <FileText className="h-6 w-6" />
      </div>
      <div>
        <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
        <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
          <span>{type}</span>
          <span>•</span>
          <span>{pages} pages</span>
          <span>•</span>
          <span>Uploaded on {uploadDate}</span>
        </div>
      </div>
    </motion.div>
  )
}
