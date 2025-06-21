"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"

const papers = [
  {
    id: "1",
    title: "Attention Is All You Need",
  },
  {
    id: "2",
    title: "BERT: Pre-training of Deep Bidirectional Transformers",
  },
  {
    id: "3",
    title: "Language Models are Few-Shot Learners",
  },
  {
    id: "4",
    title: "Deep Residual Learning for Image Recognition",
  },
  {
    id: "5",
    title: "Generative Adversarial Networks",
  },
]

export function PaperSwitcher() {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("1")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" role="combobox" aria-expanded={open} className="w-[200px] justify-between" size="sm">
          {value ? papers.find((paper) => paper.id === value)?.title.substring(0, 20) + "..." : "Select paper..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[300px] p-0">
        <Command>
          <CommandInput placeholder="Search papers..." />
          <CommandList>
            <CommandEmpty>No paper found.</CommandEmpty>
            <CommandGroup>
              {papers.map((paper) => (
                <CommandItem
                  key={paper.id}
                  value={paper.id}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  <Check className={cn("mr-2 h-4 w-4", value === paper.id ? "opacity-100" : "opacity-0")} />
                  {paper.title}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
