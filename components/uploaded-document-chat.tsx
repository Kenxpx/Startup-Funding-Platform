"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Bot, Send, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "user" | "assistant"
  content: string
  references?: {
    text: string
    page: number
  }[]
}

export function UploadedDocumentChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I've analyzed your document about quantum computing. Ask me anything about it, and I'll provide insights based on its content.",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSend = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses: Record<string, Message> = {
        "what are the key findings?": {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content:
            "The paper identifies four key findings related to quantum computing advancements: (1) Quantum algorithms for optimization problems show polynomial speedup over classical counterparts, (2) Error correction techniques have improved qubit coherence times by an order of magnitude, (3) Hybrid quantum-classical approaches offer practical advantages for near-term applications, and (4) Quantum machine learning algorithms demonstrate potential for exponential speedup in specific tasks.",
          references: [
            {
              text: "Quantum algorithms for optimization problems show polynomial speedup over classical counterparts",
              page: 8,
            },
            {
              text: "Error correction techniques have improved qubit coherence times by an order of magnitude",
              page: 12,
            },
          ],
        },
        "what is quantum supremacy?": {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content:
            "According to the document, quantum supremacy (sometimes called quantum advantage) refers to the demonstration that a programmable quantum device can solve a problem that no classical computer can solve in any feasible amount of time. The paper mentions that Google's 53-qubit Sycamore processor achieved quantum supremacy in 2019 by performing a specific sampling task in 200 seconds that would take the world's fastest supercomputer approximately 10,000 years.",
          references: [
            {
              text: "Quantum supremacy refers to the demonstration that a programmable quantum device can solve a problem that no classical computer can solve in any feasible amount of time.",
              page: 5,
            },
            {
              text: "Google's 53-qubit Sycamore processor achieved quantum supremacy in 2019 by performing a specific sampling task in 200 seconds that would take the world's fastest supercomputer approximately 10,000 years.",
              page: 6,
            },
          ],
        },
        default: {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content:
            "The document discusses recent advances in quantum computing, including improvements in quantum algorithms, error correction, and hardware implementations. It highlights the potential impact on fields like cryptography, materials science, and artificial intelligence, while acknowledging the challenges in scaling quantum systems and mitigating errors.",
          references: [
            {
              text: "While significant challenges remain in scaling quantum systems and mitigating errors, the rapid pace of advancement in quantum computing suggests that practical applications may be realized sooner than previously anticipated.",
              page: 22,
            },
          ],
        },
      }

      // Find a matching response or use default
      const lowerInput = input.toLowerCase().trim()
      const aiMessage = Object.keys(aiResponses).find((key) => lowerInput.includes(key))
        ? aiResponses[Object.keys(aiResponses).find((key) => lowerInput.includes(key)) as string]
        : aiResponses["default"]

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex h-[600px] flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={cn("flex", message.role === "user" ? "justify-end" : "justify-start")}
            >
              <div
                className={cn(
                  "flex max-w-[80%] gap-3 rounded-lg px-4 py-3",
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted",
                )}
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background/20">
                  {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                </div>
                <div className="space-y-2">
                  <div className="prose prose-sm dark:prose-invert">{message.content}</div>

                  {message.references && (
                    <div className="mt-2 space-y-2">
                      <p className="text-xs font-medium">References:</p>
                      {message.references.map((ref, index) => (
                        <div key={index} className="rounded border-l-2 border-primary/50 bg-primary/5 p-2 text-xs">
                          <p className="italic">"{ref.text}"</p>
                          <p className="mt-1 text-xs text-muted-foreground">Page {ref.page}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {isLoading && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-start">
              <div className="flex max-w-[80%] gap-3 rounded-lg bg-muted px-4 py-3">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-background/20">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 animate-bounce rounded-full bg-primary"></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                  <div
                    className="h-2 w-2 animate-bounce rounded-full bg-primary"
                    style={{ animationDelay: "0.4s" }}
                  ></div>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t p-4">
        <div className="flex gap-2">
          <Textarea
            placeholder="Ask a question about your document..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-12 resize-none"
            disabled={isLoading}
          />
          <Button onClick={handleSend} disabled={!input.trim() || isLoading} className="shrink-0">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Try asking about specific findings, methodologies, or conclusions in the document.
        </p>
      </div>
    </div>
  )
}
