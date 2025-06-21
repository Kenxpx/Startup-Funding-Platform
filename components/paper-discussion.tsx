"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function PaperDiscussion() {
  const [comment, setComment] = useState("")

  const comments = [
    {
      id: "1",
      author: "Dr. Sarah Chen",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "2 days ago",
      content:
        "This paper revolutionized the field of NLP. The attention mechanism introduced here has become a fundamental building block for almost all state-of-the-art language models today.",
      replies: [
        {
          id: "1-1",
          author: "James Wilson",
          avatar: "/placeholder.svg?height=40&width=40",
          time: "1 day ago",
          content:
            "Absolutely agree. It's fascinating how the elimination of recurrence and convolutions led to such a breakthrough in performance and parallelization.",
        },
      ],
    },
    {
      id: "2",
      author: "Dr. Michael Rodriguez",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "3 days ago",
      content:
        "I'm curious about the computational efficiency comparisons between Transformers and RNNs for very long sequences. Has anyone done a comprehensive analysis on this?",
      replies: [],
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="space-y-4">
            <div className="flex gap-4">
              <Avatar>
                <AvatarImage src={comment.avatar} alt={comment.author} />
                <AvatarFallback>{comment.author[0]}</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="font-medium">{comment.author}</span>
                  <span className="text-xs text-muted-foreground">{comment.time}</span>
                </div>
                <p className="text-sm">{comment.content}</p>
                <Button variant="ghost" size="sm" className="h-7 text-xs">
                  Reply
                </Button>
              </div>
            </div>

            {comment.replies.length > 0 && (
              <div className="ml-12 space-y-4 border-l pl-4">
                {comment.replies.map((reply) => (
                  <div key={reply.id} className="flex gap-4">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={reply.avatar} alt={reply.author} />
                      <AvatarFallback>{reply.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{reply.author}</span>
                        <span className="text-xs text-muted-foreground">{reply.time}</span>
                      </div>
                      <p className="text-sm">{reply.content}</p>
                      <Button variant="ghost" size="sm" className="h-7 text-xs">
                        Reply
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Add a comment</h3>
        <div className="flex gap-4">
          <Avatar>
            <AvatarFallback>You</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-2">
            <Textarea
              placeholder="Share your thoughts or ask a question..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-24"
            />
            <div className="flex justify-end">
              <Button className="gap-1">
                <Send className="h-4 w-4" />
                Post Comment
              </Button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
