"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SavedPapers } from "@/components/profile/saved-papers"
import { AccountSettings } from "@/components/profile/account-settings"
import { ApiKeys } from "@/components/profile/api-keys"
import { SubscriptionManagement } from "@/components/profile/subscription-management"

export function ProfileTabs() {
  const [activeTab, setActiveTab] = useState("saved")

  return (
    <div className="mx-auto max-w-4xl">
      <Tabs defaultValue="saved" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="saved">Saved Papers</TabsTrigger>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="api">API Keys</TabsTrigger>
          <TabsTrigger value="subscription">Subscription</TabsTrigger>
        </TabsList>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6"
        >
          <TabsContent value="saved" className="mt-0">
            <SavedPapers />
          </TabsContent>

          <TabsContent value="account" className="mt-0">
            <AccountSettings />
          </TabsContent>

          <TabsContent value="api" className="mt-0">
            <ApiKeys />
          </TabsContent>

          <TabsContent value="subscription" className="mt-0">
            <SubscriptionManagement />
          </TabsContent>
        </motion.div>
      </Tabs>
    </div>
  )
}
