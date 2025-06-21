"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserAnalytics } from "@/components/admin/user-analytics"
import { SubscriptionReports } from "@/components/admin/subscription-reports"
import { ContentModeration } from "@/components/admin/content-moderation"
import { SystemHealth } from "@/components/admin/system-health"

export function AdminTabs() {
  const [activeTab, setActiveTab] = useState("analytics")

  return (
    <div className="mx-auto max-w-6xl">
      <Tabs defaultValue="analytics" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analytics">User Analytics</TabsTrigger>
          <TabsTrigger value="subscriptions">Subscriptions</TabsTrigger>
          <TabsTrigger value="moderation">Content Moderation</TabsTrigger>
          <TabsTrigger value="system">System Health</TabsTrigger>
        </TabsList>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <TabsContent value="analytics" className="mt-0">
            <UserAnalytics />
          </TabsContent>

          <TabsContent value="subscriptions" className="mt-0">
            <SubscriptionReports />
          </TabsContent>

          <TabsContent value="moderation" className="mt-0">
            <ContentModeration />
          </TabsContent>

          <TabsContent value="system" className="mt-0">
            <SystemHealth />
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  )
}
