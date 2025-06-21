"use client"

import { useState } from "react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from "recharts"
import { Download, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function UserAnalytics() {
  const [timeRange, setTimeRange] = useState("7d")

  const dailyActiveUsers = [
    { date: "Mar 10", users: 1245 },
    { date: "Mar 11", users: 1356 },
    { date: "Mar 12", users: 1289 },
    { date: "Mar 13", users: 1478 },
    { date: "Mar 14", users: 1567 },
    { date: "Mar 15", users: 1342 },
    { date: "Mar 16", users: 1298 },
  ]

  const newSignups = [
    { date: "Mar 10", users: 87 },
    { date: "Mar 11", users: 92 },
    { date: "Mar 12", users: 78 },
    { date: "Mar 13", users: 105 },
    { date: "Mar 14", users: 113 },
    { date: "Mar 15", users: 94 },
    { date: "Mar 16", users: 89 },
  ]

  const userRetention = [
    { date: "Week 1", retention: 100 },
    { date: "Week 2", retention: 86 },
    { date: "Week 3", retention: 72 },
    { date: "Week 4", retention: 65 },
    { date: "Week 5", retention: 58 },
    { date: "Week 6", retention: 54 },
    { date: "Week 7", retention: 52 },
    { date: "Week 8", retention: 50 },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">User Analytics</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="1y">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="icon">
            <Download className="h-4 w-4" />
            <span className="sr-only">Download report</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Daily Active Users</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">1,298</div>
              <div className="text-sm text-green-500">+2.5%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={dailyActiveUsers}>
                  <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Compared to 1,267 last week</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">New Signups</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">89</div>
              <div className="text-sm text-green-500">+4.2%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={newSignups}>
                  <Line type="monotone" dataKey="users" stroke="#82ca9d" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Compared to 85 last week</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">24,789</div>
              <div className="text-sm text-green-500">+12.3%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Monthly growth</p>
                <p className="text-sm font-medium">+642 users</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Compared to 22,145 last month</p>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>User Activity</CardTitle>
          <CardDescription>Track daily active users and new signups over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active Users</TabsTrigger>
              <TabsTrigger value="signups">New Signups</TabsTrigger>
              <TabsTrigger value="retention">User Retention</TabsTrigger>
            </TabsList>
            <TabsContent value="active">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={dailyActiveUsers}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#8884d8" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="signups">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={newSignups}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="retention">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userRetention}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="retention" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>User Demographics</CardTitle>
          <CardDescription>Breakdown of users by location, institution type, and research field.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-sm font-medium">Top Countries</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">United States</span>
                  <span className="text-sm font-medium">42%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "42%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">United Kingdom</span>
                  <span className="text-sm font-medium">18%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "18%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Germany</span>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "12%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Canada</span>
                  <span className="text-sm font-medium">8%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "8%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Australia</span>
                  <span className="text-sm font-medium">6%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "6%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Institution Type</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">University</span>
                  <span className="text-sm font-medium">64%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "64%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Research Institute</span>
                  <span className="text-sm font-medium">21%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "21%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Corporate</span>
                  <span className="text-sm font-medium">9%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "9%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Government</span>
                  <span className="text-sm font-medium">4%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "4%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Other</span>
                  <span className="text-sm font-medium">2%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "2%" }}></div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-medium">Research Field</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Computer Science</span>
                  <span className="text-sm font-medium">38%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "38%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Medicine</span>
                  <span className="text-sm font-medium">24%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "24%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Biology</span>
                  <span className="text-sm font-medium">16%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "16%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Physics</span>
                  <span className="text-sm font-medium">12%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "12%" }}></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm">Other</span>
                  <span className="text-sm font-medium">10%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted">
                  <div className="h-2 rounded-full bg-primary" style={{ width: "10%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
