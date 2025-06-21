"use client"

import { motion } from "framer-motion"

interface PaperHeaderProps {
  title: string
  authors: string[]
  journal: string
  year: string
}

export function PaperHeader({ title, authors, journal, year }: PaperHeaderProps) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <h1 className="text-2xl font-bold md:text-3xl">{title}</h1>
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
