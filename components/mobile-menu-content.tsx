"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

interface MobileMenuContentProps {
  routes: {
    href: string
    label: string
    active: boolean
  }[]
  joinNetworkRoutes: {
    href: string
    label: string
  }[]
  onClose: () => void
}

export default function MobileMenuContent({ routes, joinNetworkRoutes, onClose }: MobileMenuContentProps) {
  return (
    <div className="flex flex-col gap-4">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            route.active ? "text-primary" : "text-muted-foreground",
          )}
          onClick={onClose}
        >
          {route.label}
        </Link>
      ))}

      <Separator />

      <div className="space-y-2">
        <p className="text-sm font-medium">Join Network</p>
        {joinNetworkRoutes.map((route) => (
          <Link
            key={route.href}
            href={route.href}
            className="block text-sm text-muted-foreground hover:text-primary pl-4"
            onClick={onClose}
          >
            {route.label}
          </Link>
        ))}
      </div>

      <Separator />

      <div className="flex flex-col gap-2 mt-4">
        <Link href="/events" onClick={onClose}>
          <Button variant="ghost" size="sm" className="w-full justify-start">
            Events
          </Button>
        </Link>
        <Link href="/contact" onClick={onClose}>
          <Button size="sm" className="w-full justify-start">
            Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}
