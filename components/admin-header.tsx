"use client"

import { motion } from "framer-motion"

export function AdminHeader() {
  return (
    <div className="bg-muted/50 py-8">
      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-4xl space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Admin Dashboard</h1>
          <p className="text-muted-foreground md:text-lg">
            Monitor system usage, manage users, and track subscriptions
          </p>
        </div>
      </motion.div>
    </div>
  )
}
