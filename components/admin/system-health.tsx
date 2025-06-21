"use client"

import { useState } from "react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { AlertTriangle, CheckCircle, Clock, Download, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SystemHealth() {
  const [timeRange, setTimeRange] = useState("24h")

  const apiResponseTimes = [
    { time: "00:00", value: 120 },
    { time: "02:00", value: 132 },
    { time: "04:00", value: 125 },
    { time: "06:00", value: 140 },
    { time: "08:00", value: 210 },
    { time: "10:00", value: 290 },
    { time: "12:00", value: 310 },
    { time: "14:00", value: 280 },
    { time: "16:00", value: 240 },
    { time: "18:00", value: 190 },
    { time: "20:00", value: 150 },
    { time: "22:00", value: 130 },
  ]

  const errorRates = [
    { time: "00:00", value: 0.2 },
    { time: "02:00", value: 0.3 },
    { time: "04:00", value: 0.2 },
    { time: "06:00", value: 0.4 },
    { time: "08:00", value: 0.8 },
    { time: "10:00", value: 1.2 },
    { time: "12:00", value: 0.9 },
    { time: "14:00", value: 0.7 },
    { time: "16:00", value: 0.5 },
    { time: "18:00", value: 0.4 },
    { time: "20:00", value: 0.3 },
    { time: "22:00", value: 0.2 },
  ]

  const services = [
    {
      name: "API Gateway",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "None",
    },
    {
      name: "Database",
      status: "operational",
      uptime: "99.95%",
      lastIncident: "Mar 10, 2025",
    },
    {
      name: "Search Service",
      status: "operational",
      uptime: "99.98%",
      lastIncident: "Mar 5, 2025",
    },
    {
      name: "AI Processing",
      status: "degraded",
      uptime: "98.75%",
      lastIncident: "Mar 16, 2025",
    },
    {
      name: "Storage",
      status: "operational",
      uptime: "99.99%",
      lastIncident: "Feb 28, 2025",
    },
  ]

  const recentErrors = [
    {
      id: "ERR-1234",
      service: "AI Processing",
      message: "Rate limit exceeded for model inference",
      count: 24,
      timestamp: "Mar 16, 2025 14:32:15",
    },
    {
      id: "ERR-1233",
      service: "Database",
      message: "Connection timeout during peak load",
      count: 12,
      timestamp: "Mar 16, 2025 12:15:43",
    },
    {
      id: "ERR-1232",
      service: "Search Service",
      message: "Index optimization failed",
      count: 3,
      timestamp: "Mar 15, 2025 23:45:12",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <h2 className="text-2xl font-bold">System Health</h2>
        <div className="flex items-center gap-2">
          <Select defaultValue={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select time range" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1h">Last hour</SelectItem>
              <SelectItem value="24h">Last 24 hours</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
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
            <CardTitle className="text-sm font-medium text-muted-foreground">API Response Time</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">187ms</div>
              <div className="text-sm text-amber-500">+12.4%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={apiResponseTimes}>
                  <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Avg. over the last 24 hours</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Error Rate</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">0.5%</div>
              <div className="text-sm text-green-500">-0.2%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="h-[80px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={errorRates}>
                  <Line type="monotone" dataKey="value" stroke="#ff6b6b" strokeWidth={2} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">Avg. over the last 24 hours</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">System Uptime</CardTitle>
            <div className="flex items-baseline justify-between">
              <div className="text-2xl font-bold">99.95%</div>
              <div className="text-sm text-green-500">+0.03%</div>
            </div>
          </CardHeader>
          <CardContent className="pb-2">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Last outage</p>
                <p className="text-sm font-medium">12 days ago</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="pt-0">
            <p className="text-xs text-muted-foreground">30-day rolling average</p>
          </CardFooter>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>API response times and error rates over time.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="response">
            <TabsList className="mb-4">
              <TabsTrigger value="response">Response Time</TabsTrigger>
              <TabsTrigger value="errors">Error Rate</TabsTrigger>
            </TabsList>
            <TabsContent value="response">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={apiResponseTimes}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value} ms`, "Response Time"]} />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
            <TabsContent value="errors">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={errorRates}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis />
                    <Tooltip formatter={(value) => [`${value}%`, "Error Rate"]} />
                    <Line type="monotone" dataKey="value" stroke="#ff6b6b" strokeWidth={2} />
                    />
                    <Line type="monotone" dataKey="value" stroke="#ff6b6b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Service Status</CardTitle>
          <CardDescription>Current status of all system components and services.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.name} className="flex items-center justify-between rounded-lg border p-4">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      service.status === "operational" ? "bg-green-50 text-green-600" : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {service.status === "operational" ? (
                      <Server className="h-5 w-5" />
                    ) : (
                      <AlertTriangle className="h-5 w-5" />
                    )}
                  </div>
                  <div>
                    <p className="font-medium">{service.name}</p>
                    <p className="text-sm text-muted-foreground">Uptime: {service.uptime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <p className="text-muted-foreground">Last incident</p>
                    <p>{service.lastIncident}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={`${
                      service.status === "operational"
                        ? "bg-green-50 text-green-700 hover:bg-green-50"
                        : "bg-amber-50 text-amber-700 hover:bg-amber-50"
                    }`}
                  >
                    {service.status === "operational" ? (
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        Operational
                      </span>
                    ) : (
                      <span className="flex items-center gap-1">
                        <AlertTriangle className="h-3 w-3" />
                        Degraded
                      </span>
                    )}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Resource Usage</CardTitle>
            <CardDescription>Current system resource utilization.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">CPU Usage</label>
                  <span className="text-sm">42%</span>
                </div>
                <Progress value={42} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Memory Usage</label>
                  <span className="text-sm">68%</span>
                </div>
                <Progress value={68} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Storage Usage</label>
                  <span className="text-sm">54%</span>
                </div>
                <Progress value={54} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">Database Connections</label>
                  <span className="text-sm">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Errors</CardTitle>
            <CardDescription>Most frequent errors in the last 24 hours.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentErrors.map((error) => (
                <div key={error.id} className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">{error.service}</p>
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      {error.count} occurrences
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm">{error.message}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{error.timestamp}</p>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="ml-auto">
              View Error Logs
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
