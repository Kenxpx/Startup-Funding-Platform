"use client"

import type React from "react"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export function DemoSearchBar() {
  const [query, setQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsSearching(true)
    setTimeout(() => {
      setIsSearching(false)
      setShowResults(true)
    }, 1500)
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Try: 'Recent advances in transformer models'"
            className="pl-10 pr-20"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1/2 -translate-y-1/2"
            disabled={isSearching || !query.trim()}
          >
            {isSearching ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            ) : (
              "Search"
            )}
          </Button>
        </div>
      </form>

      <AnimatePresence>
        {showResults && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 right-0 top-full z-10 mt-2"
          >
            <Card>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium">Top Result</h3>
                    <p className="text-sm text-muted-foreground">
                      "Attention Is All You Need: Transformer Networks and Their Impact on Natural Language Processing"
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">Vaswani et al., 2017 - Cited by 45,000+</p>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-medium">AI Summary</h3>
                    <p className="text-sm text-muted-foreground">
                      This groundbreaking paper introduced the Transformer architecture, which relies entirely on
                      self-attention mechanisms without recurrence or convolutions. Transformers have become the
                      foundation for modern NLP models like BERT, GPT, and T5, enabling significant advances in machine
                      translation, text generation, and language understanding.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <Button size="sm" onClick={() => setShowResults(false)}>
                      View Full Results
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
