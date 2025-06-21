"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function StatsCounter() {
  const [counts, setCounts] = useState({
    consultations: 0,
    investors: 0,
    startups: 0,
    partners: 0,
  })

  const finalCounts = {
    consultations: 4600,
    investors: 4000,
    startups: 156,
    partners: 100,
  }

  useEffect(() => {
    const duration = 2000 // 2 seconds
    const steps = 60
    const stepDuration = duration / steps

    const intervals = Object.keys(finalCounts).map((key) => {
      const finalCount = finalCounts[key as keyof typeof finalCounts]
      const increment = finalCount / steps

      return setInterval(() => {
        setCounts((prev) => {
          const newCount = Math.min(prev[key as keyof typeof prev] + increment, finalCount)
          return {
            ...prev,
            [key]: Math.floor(newCount),
          }
        })
      }, stepDuration)
    })

    return () => {
      intervals.forEach(clearInterval)
    }
  }, [])

  const stats = [
    {
      label: "Business Consultations",
      value: counts.consultations,
      suffix: "+",
    },
    {
      label: "Investors",
      value: counts.investors,
      suffix: "+",
    },
    {
      label: "Startups Funded",
      value: counts.startups,
      suffix: "+",
    },
    {
      label: "Channel Partners",
      value: counts.partners,
      suffix: "+",
    },
  ]

  return (
    <div className="mx-auto max-w-4xl">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-primary md:text-4xl">
              {stat.value.toLocaleString()}
              {stat.suffix}
            </div>
            <div className="mt-2 text-sm text-muted-foreground md:text-base">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
