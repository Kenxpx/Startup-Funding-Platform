"use client"

import { useState } from "react"
import Link from "next/link"
import { FileText, MessageSquare, Search, Star, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SavedPapers() {
  const [searchQuery, setSearchQuery] = useState("")

  const savedPapers = [
    {
      id: "1",
      title: "Attention Is All You Need: Transformer Networks and Their Impact on Natural Language Processing",
      authors: [
        "Ashish Vaswani",
        "Noam Shazeer",
        "Niki Parmar",
        "Jakob Uszkoreit",
        "Llion Jones",
        "Aidan N. Gomez",
        "Łukasz Kaiser",
        "Illia Polosukhin",
      ],
      journal: "Advances in Neural Information Processing Systems (NeurIPS 2017)",
      year: "2017",
      savedDate: "2 days ago",
    },
    {
      id: "2",
      title: "BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding",
      authors: ["Jacob Devlin", "Ming-Wei Chang", "Kenton Lee", "Kristina Toutanova"],
      journal: "NAACL-HLT 2019",
      year: "2019",
      savedDate: "1 week ago",
    },
    {
      id: "3",
      title: "Language Models are Few-Shot Learners",
      authors: [
        "Tom B. Brown",
        "Benjamin Mann",
        "Nick Ryder",
        "Melanie Subbiah",
        "Jared Kaplan",
        "Prafulla Dhariwal",
        "Arvind Neelakantan",
        "Pranav Shyam",
        "Girish Sastry",
        "Amanda Askell",
      ],
      journal: "Advances in Neural Information Processing Systems (NeurIPS 2020)",
      year: "2020",
      savedDate: "3 weeks ago",
    },
  ]

  const recentSearches = [
    "transformer architecture",
    "attention mechanism",
    "language models",
    "BERT fine-tuning",
    "GPT architecture",
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search your saved papers..."
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <Tabs defaultValue="papers">
        <TabsList>
          <TabsTrigger value="papers">Saved Papers</TabsTrigger>
          <TabsTrigger value="searches">Recent Searches</TabsTrigger>
        </TabsList>

        <TabsContent value="papers" className="mt-6">
          <div className="space-y-4">
            {savedPapers.map((paper) => (
              <Card key={paper.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-bold">
                      <Link href={`/paper/${paper.id}`} className="hover:text-primary hover:underline">
                        {paper.title}
                      </Link>
                    </CardTitle>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-primary">
                      <Star className="h-4 w-4 fill-primary" />
                      <span className="sr-only">Unsave paper</span>
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-1 text-sm text-muted-foreground">
                    <span>
                      {paper.authors.slice(0, 3).join(", ")}
                      {paper.authors.length > 3 ? ", et al." : ""}
                    </span>
                    <span>•</span>
                    <span>{paper.journal}</span>
                    <span>•</span>
                    <span>{paper.year}</span>
                    <span>•</span>
                    <span>Saved {paper.savedDate}</span>
                  </div>
                </CardHeader>
                <CardFooter className="flex justify-between pt-0">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href={`/paper/${paper.id}`}>View Details</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1">
                      <FileText className="h-4 w-4" />
                      PDF
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-1" asChild>
                      <Link href={`/paper/${paper.id}/chat`}>
                        <MessageSquare className="h-4 w-4" />
                        Chat
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-1 text-destructive hover:bg-destructive/10">
                      <Trash2 className="h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="searches" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="mb-4 text-lg font-medium">Recent Searches</h3>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <div key={index} className="flex items-center justify-between rounded-md border p-3">
                    <div className="flex items-center gap-2">
                      <Search className="h-4 w-4 text-muted-foreground" />
                      <span>{search}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        Search Again
                      </Button>
                      <Button variant="ghost" size="sm" className="text-destructive hover:bg-destructive/10">
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
