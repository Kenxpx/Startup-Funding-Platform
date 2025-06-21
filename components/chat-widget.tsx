"use client"

import { useState } from "react"
import { MessageCircle, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [showTooltip, setShowTooltip] = useState(true)

  const handleWhatsAppRedirect = (message: string) => {
    const phoneNumber = "917875942201"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank")
    setIsOpen(false)
  }

  const handleCall = () => {
    window.open("tel:+917875942201", "_self")
  }

  const handleChatClick = () => {
    setIsOpen(!isOpen)
    setShowTooltip(false)
  }

  const chatOptions = [
    {
      icon: "💼",
      title: "Get Funding Support",
      message: "Hi! I need funding support for my startup. Can you help me get started?",
      bgColor: "bg-red-50 hover:bg-red-100 border-red-200",
    },
    {
      icon: "🤝",
      title: "Investor Connect",
      message: "Hello! I'm interested in connecting with investors. Please share more details.",
      bgColor: "bg-yellow-50 hover:bg-yellow-100 border-yellow-200",
    },
    {
      icon: "📋",
      title: "Business Consultation",
      message: "Hi! I would like to schedule a business consultation. What are the next steps?",
      bgColor: "bg-purple-50 hover:bg-purple-100 border-purple-200",
    },
  ]

  return (
    <>
      {/* Call Button - Opens phone dialer */}
      <div className="fixed bottom-24 right-6 z-50">
        <Button
          onClick={handleCall}
          size="lg"
          className="h-14 w-14 rounded-full bg-blue-500 hover:bg-blue-600 shadow-lg"
        >
          <Phone className="h-6 w-6 text-white" />
        </Button>
      </div>

      {/* Chat Widget */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <Card className="mb-4 w-80 shadow-xl">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Need Help?</CardTitle>
                  <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="h-8 w-8 p-0">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {chatOptions.map((option, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`w-full justify-start text-left h-auto p-3 ${option.bgColor}`}
                  onClick={() => handleWhatsAppRedirect(option.message)}
                >
                  <span className="mr-3 text-lg">{option.icon}</span>
                  <span className="font-medium">{option.title}</span>
                </Button>
              ))}
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white"
                onClick={() => handleWhatsAppRedirect("Hi! I have a question about your services. Can you help me?")}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Start Chat
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Chat with us tooltip */}
        {showTooltip && !isOpen && (
          <div className="absolute bottom-0 right-16 mb-4 mr-2">
            <div className="bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-lg">
              Chat with us!
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          </div>
        )}

        <Button
          onClick={handleChatClick}
          size="lg"
          className="h-14 w-14 rounded-full bg-green-600 hover:bg-green-700 shadow-lg"
        >
          <MessageCircle className="h-6 w-6 text-white" />
        </Button>
      </div>
    </>
  )
}
