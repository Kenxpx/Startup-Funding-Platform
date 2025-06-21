"use client"

import { motion } from "framer-motion"
import { TrendingUp, DollarSign, Users, Target } from "lucide-react"

export function HeroAnimation() {
  return (
    <div className="relative h-[400px] w-full max-w-[600px]">
      <motion.div
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Animated circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/30"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: [0.5, 1.5], opacity: [0, 1, 0] }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating icons */}
      {[
        { icon: TrendingUp, angle: 0 },
        { icon: DollarSign, angle: Math.PI / 2 },
        { icon: Users, angle: Math.PI },
        { icon: Target, angle: (3 * Math.PI) / 2 },
      ].map((item, i) => {
        const radius = 120
        const x = Math.cos(item.angle) * radius
        const y = Math.sin(item.angle) * radius

        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-lg"
            style={{
              x: x - 32,
              y: y - 32,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 360],
            }}
            transition={{
              duration: 2,
              delay: i * 0.2,
              rotate: {
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              },
            }}
          >
            <item.icon className="h-8 w-8 text-primary" />
          </motion.div>
        )
      })}

      {/* Central logo */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-2xl font-bold"
        >
          SCN
        </motion.div>
      </motion.div>
    </div>
  )
}
