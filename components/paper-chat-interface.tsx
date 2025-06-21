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

export function PaperChatInterface() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Hello! I'm your AI research assistant. Ask me anything about this paper, and I'll provide insights based on its content.",
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
        "what is the transformer architecture?": {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content:
            "The Transformer architecture is a neural network design that relies entirely on self-attention mechanisms, without using recurrence or convolutions. It consists of an encoder and a decoder, each composed of stacked self-attention and feed-forward neural network layers.",
          references: [
            {
              text: "We propose a new simple network architecture, the Transformer, based solely on attention mechanisms, dispensing with recurrence and convolutions entirely.",
              page: 1,
            },
            {
              text: "The Transformer follows this overall architecture using stacked self-attention and point-wise, fully connected layers for both the encoder and decoder.",
              page: 3,
            },
          ],
        },
        "what is multi-head attention?": {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content:
            "Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions. Instead of performing a single attention function with d_model-dimensional keys, values, and queries, the authors found it beneficial to linearly project the queries, keys, and values h times with different, learned linear projections. This enables the model to capture different aspects of the input sequence simultaneously.",
          references: [
            {
              text: "Multi-head attention allows the model to jointly attend to information from different representation subspaces at different positions.",
              page: 4,
            },
            {
              text: "Instead of performing a single attention function with d_model-dimensional keys, values and queries, we found it beneficial to linearly project the queries, keys and values h times with different, learned linear projections.",
              page: 4,
            },
          ],
        },
        default: {
          id: Date.now().toString() + "-ai",
          role: "assistant",
          content:
            "The Transformer architecture introduced in this paper has become foundational for modern NLP models. It uses self-attention mechanisms to process input sequences in parallel, which provides significant advantages in terms of training speed and performance compared to previous recurrent or convolutional models.",
          references: [
            {
              text: "Experiments on two machine translation tasks show these models to be superior in quality while being more parallelizable and requiring significantly less time to train.",
              page: 1,
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
            placeholder="Ask a question about this paper..."
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
          Ask specific questions about the paper's methodology, findings, or implications.
        </p>
      </div>
    </div>
  )
}
