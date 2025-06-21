"use client"

import { useState } from "react"
import { AlertTriangle, CheckCircle, Flag, MessageSquare, Search, Trash2, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ContentModeration() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")

  const flaggedComments = [
    {
      id: "1",
      user: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content:
        "This paper is completely wrong and the authors are incompetent. The methodology is flawed and the conclusions are nonsense.",
      paper: "Attention Is All You Need",
      reason: "Harassment",
      date: "Mar 16, 2025",
      status: "pending",
    },
    {
      id: "2",
      user: {
        name: "Sarah Smith",
        email: "sarah.smith@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "Check out my website for more research papers: www.suspicious-link.com",
      paper: "BERT: Pre-training of Deep Bidirectional Transformers",
      reason: "Spam",
      date: "Mar 15, 2025",
      status: "pending",
    },
    {
      id: "3",
      user: {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      content: "This research contains inappropriate content that violates community guidelines.",
      paper: "Language Models are Few-Shot Learners",
      reason: "Inappropriate Content",
      date: "Mar 14, 2025",
      status: "resolved",
    },
  ]

  const userReports = [
    {
      id: "1",
      reportedUser: {
        name: "John Doe",
        email: "john.doe@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      reportedBy: {
        name: "Sarah Smith",
        email: "sarah.smith@example.com",
      },
      reason: "Harassment",
      details: "User has been posting offensive comments on multiple papers.",
      date: "Mar 16, 2025",
      status: "pending",
    },
    {
      id: "2",
      reportedUser: {
        name: "David Wilson",
        email: "david.wilson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      reportedBy: {
        name: "Emily Brown",
        email: "emily.brown@example.com",
      },
      reason: "Spam",
      details: "User is repeatedly posting promotional links in discussions.",
      date: "Mar 15, 2025",
      status: "pending",
    },
    {
      id: "3",
      reportedUser: {
        name: "Michael Johnson",
        email: "michael.johnson@example.com",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      reportedBy: {
        name: "James Wilson",
        email: "james.wilson@example.com",
      },
      reason: "Impersonation",
      details: "User is pretending to be a well-known researcher.",
      date: "Mar 14, 2025",
      status: "resolved",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">Content Moderation</h2>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="pl-10 w-[200px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Select defaultValue={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="resolved">Resolved</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="comments">
        <TabsList>
          <TabsTrigger value="comments" className="flex items-center gap-2">
            <MessageSquare className="h-4 w-4" />
            Flagged Comments
            <Badge variant="secondary" className="ml-1">
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger value="users" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            User Reports
            <Badge variant="secondary" className="ml-1">
              3
            </Badge>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comments" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Flagged Comments</CardTitle>
              <CardDescription>
                Review and moderate comments that have been flagged by users or the system.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flaggedComments.map((comment) => (
                  <div
                    key={comment.id}
                    className={`rounded-lg border p-4 ${comment.status === "resolved" ? "bg-muted/50" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={comment.user.avatar} alt={comment.user.name} />
                        <AvatarFallback>{comment.user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{comment.user.name}</p>
                            <p className="text-sm text-muted-foreground">{comment.user.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Flag className="h-3 w-3" />
                              {comment.reason}
                            </Badge>
                            <Badge
                              variant={comment.status === "pending" ? "secondary" : "outline"}
                              className={
                                comment.status === "resolved" ? "bg-green-50 text-green-700 hover:bg-green-50" : ""
                              }
                            >
                              {comment.status === "pending" ? "Pending" : "Resolved"}
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm">{comment.content}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            On paper: <span className="font-medium">{comment.paper}</span> • {comment.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    {comment.status === "pending" && (
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Approve
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1 text-destructive hover:bg-destructive/10">
                          <Trash2 className="h-4 w-4" />
                          Remove
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>User Reports</CardTitle>
              <CardDescription>Review reports submitted by users about other users.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {userReports.map((report) => (
                  <div
                    key={report.id}
                    className={`rounded-lg border p-4 ${report.status === "resolved" ? "bg-muted/50" : ""}`}
                  >
                    <div className="flex items-start gap-4">
                      <Avatar>
                        <AvatarImage src={report.reportedUser.avatar} alt={report.reportedUser.name} />
                        <AvatarFallback>{report.reportedUser.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">{report.reportedUser.name}</p>
                            <p className="text-sm text-muted-foreground">{report.reportedUser.email}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3" />
                              {report.reason}
                            </Badge>
                            <Badge
                              variant={report.status === "pending" ? "secondary" : "outline"}
                              className={
                                report.status === "resolved" ? "bg-green-50 text-green-700 hover:bg-green-50" : ""
                              }
                            >
                              {report.status === "pending" ? "Pending" : "Resolved"}
                            </Badge>
                          </div>
                        </div>
                        <div className="mt-2">
                          <p className="text-sm">{report.details}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            Reported by: <span className="font-medium">{report.reportedBy.name}</span> • {report.date}
                          </p>
                        </div>
                      </div>
                    </div>
                    {report.status === "pending" && (
                      <div className="mt-4 flex justify-end gap-2">
                        <Button variant="outline" size="sm" className="gap-1">
                          <CheckCircle className="h-4 w-4" />
                          Dismiss
                        </Button>
                        <Button variant="outline" size="sm" className="gap-1 text-destructive hover:bg-destructive/10">
                          <Trash2 className="h-4 w-4" />
                          Take Action
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle>Moderation Settings</CardTitle>
          <CardDescription>Configure automated moderation rules and thresholds.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Profanity Filter</label>
                <Select defaultValue="moderate">
                  <SelectTrigger>
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="strict">Strict</SelectItem>
                    <SelectItem value="moderate">Moderate</SelectItem>
                    <SelectItem value="lenient">Lenient</SelectItem>
                    <SelectItem value="off">Off</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Spam Detection</label>
                <Select defaultValue="high">
                  <SelectTrigger>
                    <SelectValue placeholder="Select sensitivity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="high">High Sensitivity</SelectItem>
                    <SelectItem value="medium">Medium Sensitivity</SelectItem>
                    <SelectItem value="low">Low Sensitivity</SelectItem>
                    <SelectItem value="off">Off</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium">Auto-Moderation</label>
                <Select defaultValue="review">
                  <SelectTrigger>
                    <SelectValue placeholder="Select action" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="remove">Auto-Remove Flagged Content</SelectItem>
                    <SelectItem value="review">Flag for Review</SelectItem>
                    <SelectItem value="off">Disabled</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">User Report Threshold</label>
                <Select defaultValue="3">
                  <SelectTrigger>
                    <SelectValue placeholder="Select threshold" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Report</SelectItem>
                    <SelectItem value="3">3 Reports</SelectItem>
                    <SelectItem value="5">5 Reports</SelectItem>
                    <SelectItem value="10">10 Reports</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="ml-auto">Save Settings</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
