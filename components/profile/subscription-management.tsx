"use client"

import { useState } from "react"
import { CreditCard, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export function SubscriptionManagement() {
  const [currentPlan, setCurrentPlan] = useState("pro")

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Subscription</CardTitle>
              <CardDescription>Manage your subscription and billing information.</CardDescription>
            </div>
            <Badge variant="outline" className="text-primary">
              Pro Plan
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="rounded-md border p-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-medium">Billing Cycle</h3>
                <p className="text-sm text-muted-foreground">Your subscription renews on April 15, 2025</p>
              </div>
              <Button variant="outline">Change Billing Cycle</Button>
            </div>

            <Separator className="my-4" />

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-medium">Payment Method</h3>
                <div className="mt-1 flex items-center gap-2">
                  <CreditCard className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">•••• •••• •••• 4242</span>
                  <Badge variant="outline" className="text-xs">
                    Visa
                  </Badge>
                </div>
              </div>
              <Button variant="outline">Update Payment Method</Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">Usage This Month</h3>
              <span className="text-sm">750 / 1,000 papers</span>
            </div>
            <Progress value={75} className="h-2" />
            <p className="text-xs text-muted-foreground">
              Your plan resets in 16 days. Need more?{" "}
              <a href="/pricing" className="text-primary hover:underline">
                Upgrade your plan
              </a>
              .
            </p>
          </div>

          <div className="rounded-md border p-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Shield className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium">Secure Billing</h3>
                <p className="text-sm text-muted-foreground">
                  Your payment information is securely stored and processed.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm text-muted-foreground">
              Need help with your subscription?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact support
              </a>
              .
            </p>
          </div>
          <Button variant="destructive">Cancel Subscription</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>View and download your past invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-4 border-b p-4 font-medium">
              <div>Date</div>
              <div>Amount</div>
              <div>Status</div>
              <div className="text-right">Invoice</div>
            </div>
            <div className="divide-y">
              <div className="grid grid-cols-4 p-4">
                <div className="text-sm">Mar 15, 2025</div>
                <div className="text-sm">$29.00</div>
                <div className="text-sm">
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    Paid
                  </Badge>
                </div>
                <div className="text-right">
                  <Button variant="ghost" size="sm" className="h-7 gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    PDF
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4">
                <div className="text-sm">Feb 15, 2025</div>
                <div className="text-sm">$29.00</div>
                <div className="text-sm">
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    Paid
                  </Badge>
                </div>
                <div className="text-right">
                  <Button variant="ghost" size="sm" className="h-7 gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    PDF
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-4 p-4">
                <div className="text-sm">Jan 15, 2025</div>
                <div className="text-sm">$29.00</div>
                <div className="text-sm">
                  <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                    Paid
                  </Badge>
                </div>
                <div className="text-right">
                  <Button variant="ghost" size="sm" className="h-7 gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-download"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    PDF
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
