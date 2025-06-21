"use client"

import { motion } from "framer-motion"

interface PaperChatHeaderProps {
  title: string
  authors: string[]
  journal: string
  year: string
}

export function PaperChatHeader({ title, authors, journal, year }: PaperChatHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-lg border bg-card p-4 text-card-foreground shadow-sm"
    >
      <h1 className="text-xl font-bold md:text-2xl">{title}</h1>
      <div className="mt-2 flex flex-wrap gap-1 text-sm text-muted-foreground">
        <span>{authors.join(", ")}</span>
        <span>•</span>
        <span>{journal}</span>
        <span>•</span>
        <span>{year}</span>
      </div>
    </motion.div>
  )
}
