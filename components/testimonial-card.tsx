"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  avatarSrc: string
}

export function TestimonialCard({ quote, author, role, avatarSrc }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full">
        <CardContent className="pt-6">
          <div className="mb-4 text-4xl text-primary">"</div>
          <p className="text-muted-foreground">{quote}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src={avatarSrc} alt={author} />
              <AvatarFallback>{author[0]}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{author}</p>
              <p className="text-sm text-muted-foreground">{role}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
