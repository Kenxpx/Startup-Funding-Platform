"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"

export function DashboardFilters() {
  const [openSections, setOpenSections] = useState({
    sources: true,
    date: true,
    type: true,
  })

  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 1, width: "auto" }}
        animate={{
          opacity: isCollapsed ? 0 : 1,
          width: isCollapsed ? 0 : "auto",
          display: isCollapsed ? "none" : "block",
        }}
        transition={{ duration: 0.3 }}
      >
        <Card className="h-full">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle>Filters</CardTitle>
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setIsCollapsed(true)}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Collapse filters</span>
            </Button>
          </CardHeader>
          <CardContent className="space-y-6 px-4 pb-6">
            <Collapsible open={openSections.sources} onOpenChange={() => toggleSection("sources")}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
                  Sources
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSections.sources ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <Separator className="my-2" />
              <CollapsibleContent className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-arxiv" />
                  <Label htmlFor="source-arxiv">arXiv</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-pubmed" />
                  <Label htmlFor="source-pubmed">PubMed</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-ieee" />
                  <Label htmlFor="source-ieee">IEEE</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-acm" />
                  <Label htmlFor="source-acm">ACM Digital Library</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="source-springer" />
                  <Label htmlFor="source-springer">Springer</Label>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openSections.date} onOpenChange={() => toggleSection("date")}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
                  Date
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSections.date ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <Separator className="my-2" />
              <CollapsibleContent className="space-y-2 pt-2">
                <RadioGroup defaultValue="all">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="all" id="date-all" />
                    <Label htmlFor="date-all">All time</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="year" id="date-year" />
                    <Label htmlFor="date-year">Past year</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="month" id="date-month" />
                    <Label htmlFor="date-month">Past month</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="week" id="date-week" />
                    <Label htmlFor="date-week">Past week</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="custom" id="date-custom" />
                    <Label htmlFor="date-custom">Custom range</Label>
                  </div>
                </RadioGroup>
              </CollapsibleContent>
            </Collapsible>

            <Collapsible open={openSections.type} onOpenChange={() => toggleSection("type")}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="flex w-full justify-between p-0 font-medium">
                  Publication Type
                  <ChevronDown className={`h-4 w-4 transition-transform ${openSections.type ? "rotate-180" : ""}`} />
                </Button>
              </CollapsibleTrigger>
              <Separator className="my-2" />
              <CollapsibleContent className="space-y-2 pt-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-journal" />
                  <Label htmlFor="type-journal">Journal Articles</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-conference" />
                  <Label htmlFor="type-conference">Conference Papers</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-preprint" />
                  <Label htmlFor="type-preprint">Preprints</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-review" />
                  <Label htmlFor="type-review">Review Articles</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="type-book" />
                  <Label htmlFor="type-book">Books & Chapters</Label>
                </div>
              </CollapsibleContent>
            </Collapsible>

            <div className="pt-4">
              <Button variant="outline" className="w-full">
                Reset Filters
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute left-0 top-0"
        >
          <Button variant="outline" size="icon" className="h-10 w-10" onClick={() => setIsCollapsed(false)}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Expand filters</span>
          </Button>
        </motion.div>
      )}
    </div>
  )
}
