"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts"
import { Download, DollarSign } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function SubscriptionReports() {
  const [timeRange, setTimeRange] = useState("30d")

  const monthlyRevenue = [
    { month: "Jan", revenue: 12450 },
    { month: "Feb", revenue: 14280 },
    { month: "Mar", revenue: 15890 },
    { month: "Apr", revenue: 17650 },
    { month: "May", revenue: 19340 },
    { month: "Jun", revenue: 21780 },
  ]

  const planDistribution = [
    { name: "Free", value: 65, color: "#8884d8" },
    { name: "Pro", value: 30, color: "#82ca9d" },
    { name: "Team", value: 5, color: "#ffc658" },
  ]

  const recentSubscriptions = [
    { id: "SUB-1234", user: "john.doe@example.com", plan: "Pro", amount: "$29.00", date: "Mar 16, 2025" },
    { id: "SUB-1233", user: "sarah.smith@example.com", plan: "Team", amount: "$79.00", date: "Mar 15, 2025" },
    { id: "SUB-1232", user: "michael.johnson@example.com", plan: "Pro", amount: "$29.00", date: "Mar 15, 2025" },
    { id: "SUB-1231", user: "emily.brown@example.com", plan: "Pro", amount: "$29.00", date: "Mar 14, 2025" },
    { id: "SUB-1230", user: "david.wilson@example.com", plan: "Team", amount: "$79.00", date: "Mar 14, 2025" },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">Subscription Reports</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
              <SelectItem value="6m">Last 6 months</SelectItem>
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
            <CardTitle className="text-sm font-medium text-muted-foreground">Monthly Recurring Revenue</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">$21,780</div>
              <div className="text-sm text-green-500">+12.4%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue.slice(-3)}>
                  <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Compared to $19,340 last month</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Paid Subscribers</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">8,642</div>
              <div className="text-sm text-green-500">+8.7%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <DollarSign className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Conversion rate</p>
                <p className="text-sm font-medium">35.2%</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Compared to 7,952 last month</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Average Revenue Per User</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">$32.40</div>
              <div className="text-sm text-green-500">+3.2%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Pro plan ratio</p>
                <p className="text-sm font-medium">85.7%</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Compared to $31.40 last month</p>
          </CardFooter>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Revenue Trends</CardTitle>
            <CardDescription>Monthly recurring revenue over the past 6 months.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyRevenue}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                  <Bar dataKey="revenue" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Plan Distribution</CardTitle>
            <CardDescription>Breakdown of users by subscription plan.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={planDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {planDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Subscriptions</CardTitle>
          <CardDescription>Latest subscription and renewal activities.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subscription ID</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Plan</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentSubscriptions.map((subscription) => (
                <TableRow key={subscription.id}>
                  <TableCell className="font-medium">{subscription.id}</TableCell>
                  <TableCell>{subscription.user}</TableCell>
                  <TableCell>{subscription.plan}</TableCell>
                  <TableCell>{subscription.amount}</TableCell>
                  <TableCell>{subscription.date}</TableCell>
                  <TableCell className="text-right">
                    <span className="rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700">
                      Active
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="ml-auto">
            View All Subscriptions
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
