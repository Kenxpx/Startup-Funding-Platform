"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Camera, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ProfileHeader() {
  const [isEditing, setIsEditing] = useState(false)

  return (
    <div className="bg-muted/50 py-8">
      <motion.div
        className="container px-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute -top-16 left-0 right-0 h-32 rounded-t-lg bg-gradient-to-r from-primary/20 to-primary/40"></div>

          <div className="relative flex flex-col items-center gap-4 rounded-lg border bg-card p-6 shadow-sm sm:flex-row sm:items-start">
            <div className="relative">
              <Avatar className="h-24 w-24 border-4 border-background">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile picture" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button
                variant="secondary"
                size="icon"
                className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-sm"
                onClick={() => setIsEditing(true)}
              >
                <Camera className="h-4 w-4" />
                <span className="sr-only">Change profile picture</span>
              </Button>
            </div>

            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-2xl font-bold">John Doe</h1>
              <div className="mt-1 flex flex-col gap-1 text-sm text-muted-foreground sm:flex-row sm:gap-4">
                <div className="flex items-center justify-center gap-1 sm:justify-start">
                  <Mail className="h-4 w-4" />
                  <span>john.doe@example.com</span>
                </div>
                <div className="flex items-center justify-center gap-1 sm:justify-start">
                  <MapPin className="h-4 w-4" />
                  <span>Stanford University</span>
                </div>
              </div>
              <p className="mt-4 text-sm">
                PhD Candidate in Computer Science, focusing on Natural Language Processing and Machine Learning.
              </p>
            </div>

            <div className="mt-4 sm:mt-0">
              <Button variant="outline" onClick={() => setIsEditing(true)}>
                Edit Profile
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
