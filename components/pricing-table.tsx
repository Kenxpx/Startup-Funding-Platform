"use client"

import { motion } from "framer-motion"
import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function PricingTable() {
  const features = [
    {
      name: "Paper Summaries",
      free: "10 per month",
      pro: "Unlimited",
      team: "Unlimited",
    },
    {
      name: "Search Functionality",
      free: "Basic",
      pro: "Advanced",
      team: "Advanced",
    },
    {
      name: "Export to PDF",
      free: true,
      pro: true,
      team: true,
    },
    {
      name: "Citation Network Analysis",
      free: false,
      pro: true,
      team: true,
    },
    {
      name: "Custom Exports & Integrations",
      free: false,
      pro: true,
      team: true,
    },
    {
      name: "Upload Your Own Papers",
      free: "3 per month",
      pro: "Unlimited",
      team: "Unlimited",
    },
    {
      name: "Chat with Papers",
      free: "Limited (100 messages)",
      pro: "Unlimited",
      team: "Unlimited",
    },
    {
      name: "API Access",
      free: false,
      pro: "Limited",
      team: "Full Access",
    },
    {
      name: "Collaborative Workspaces",
      free: false,
      pro: false,
      team: true,
    },
    {
      name: "Team Members",
      free: "1",
      pro: "1",
      team: "5+",
    },
    {
      name: "Support",
      free: "Email",
      pro: "Priority Email",
      team: "Dedicated Manager",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-100px" }}
      className="mt-16"
    >
      <h2 className="mb-6 text-center text-2xl font-bold">Feature Comparison</h2>
      <div className="rounded-lg border shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[300px]">Feature</TableHead>
              <TableHead className="text-center">Free</TableHead>
              <TableHead className="text-center">Pro</TableHead>
              <TableHead className="text-center">Team</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {features.map((feature) => (
              <TableRow key={feature.name}>
                <TableCell className="font-medium">{feature.name}</TableCell>
                <TableCell className="text-center">
                  {typeof feature.free === "boolean" ? (
                    feature.free ? (
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground" />
                    )
                  ) : (
                    feature.free
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {typeof feature.pro === "boolean" ? (
                    feature.pro ? (
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground" />
                    )
                  ) : (
                    feature.pro
                  )}
                </TableCell>
                <TableCell className="text-center">
                  {typeof feature.team === "boolean" ? (
                    feature.team ? (
                      <Check className="mx-auto h-5 w-5 text-primary" />
                    ) : (
                      <X className="mx-auto h-5 w-5 text-muted-foreground" />
                    )
                  ) : (
                    feature.team
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </motion.div>
  )
}
