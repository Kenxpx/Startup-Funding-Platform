"use client"

import { useState } from "react"
import { Copy, Key, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ApiKeys() {
  const [isCreatingKey, setIsCreatingKey] = useState(false)
  const [newKeyName, setNewKeyName] = useState("")

  const apiKeys = [
    {
      id: "1",
      name: "Research Project",
      prefix: "ra_1a2b3c",
      created: "Mar 10, 2025",
      lastUsed: "2 hours ago",
    },
    {
      id: "2",
      name: "Personal Website Integration",
      prefix: "ra_4d5e6f",
      created: "Feb 28, 2025",
      lastUsed: "3 days ago",
    },
  ]

  const handleCopyKey = (prefix: string) => {
    navigator.clipboard.writeText(`${prefix}...`)
    toast({
      title: "API key copied",
      description: "The API key has been copied to your clipboard.",
    })
  }

  const handleCreateKey = () => {
    if (!newKeyName.trim()) return

    // In a real app, this would call an API to create a new key
    toast({
      title: "API key created",
      description: "Your new API key has been created successfully.",
    })

    setIsCreatingKey(false)
    setNewKeyName("")
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>Manage your API keys for programmatic access to our services.</CardDescription>
            </div>
            <Dialog open={isCreatingKey} onOpenChange={setIsCreatingKey}>
              <DialogTrigger asChild>
                <Button className="gap-1">
                  <Plus className="h-4 w-4" />
                  Create New Key
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New API Key</DialogTitle>
                  <DialogDescription>Give your API key a name to help you identify it later.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="key-name">API Key Name</Label>
                    <Input
                      id="key-name"
                      placeholder="e.g., Research Project"
                      value={newKeyName}
                      onChange={(e) => setNewKeyName(e.target.value)}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsCreatingKey(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleCreateKey}>Create Key</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>API Key</TableHead>
                  <TableHead>Created</TableHead>
                  <TableHead>Last Used</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {apiKeys.map((key) => (
                  <TableRow key={key.id}>
                    <TableCell className="font-medium">{key.name}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Key className="h-4 w-4 text-muted-foreground" />
                        <code className="rounded bg-muted px-1 py-0.5 text-sm">{key.prefix}...</code>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() => handleCopyKey(key.prefix)}
                        >
                          <Copy className="h-3 w-3" />
                          <span className="sr-only">Copy API key</span>
                        </Button>
                      </div>
                    </TableCell>
                    <TableCell>{key.created}</TableCell>
                    <TableCell>{key.lastUsed}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete API key</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>API Documentation</CardTitle>
          <CardDescription>Learn how to use our API to integrate with your applications.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md bg-muted p-4">
            <h3 className="mb-2 font-medium">Quick Start Example</h3>
            <pre className="overflow-x-auto rounded bg-card p-4 text-sm">
              <code>
                {`curl -X GET "https://api.researchai.com/v1/papers/search?query=transformer" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
              </code>
            </pre>
          </div>

          <div className="space-y-2">
            <h3 className="font-medium">Rate Limits</h3>
            <p className="text-sm text-muted-foreground">
              Free tier: 100 requests per day
              <br />
              Pro tier: 10,000 requests per day
              <br />
              Team tier: 50,000 requests per day
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="gap-1" asChild>
            <a href="/docs/api" target="_blank" rel="noopener noreferrer">
              View Full API Documentation
            </a>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
