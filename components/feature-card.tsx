"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      <Card className="h-full overflow-hidden">
        <CardHeader className="pb-2">
          <motion.div whileHover={{ scale: 1.05 }} className="text-primary">
            {icon}
          </motion.div>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="mt-2 text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
