"use client"

import dynamic from "next/dynamic"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, Lightbulb, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

// Lazy load the sheet content for mobile menu
const MobileMenuContent = dynamic(() => import("@/components/mobile-menu-content"), {
  loading: () => <div className="p-6">Loading...</div>,
  ssr: false,
})

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  const routes = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/about",
      label: "About Us",
      active: pathname === "/about",
    },
    {
      href: "/services",
      label: "Services",
      active: pathname === "/services",
    },
    {
      href: "/blog",
      label: "Blog",
      active: pathname === "/blog",
    },
    {
      href: "/contact",
      label: "Contact",
      active: pathname === "/contact",
    },
  ]

  const joinNetworkRoutes = [
    {
      href: "/join-network/startup",
      label: "Startup Registration",
    },
    {
      href: "/join-network/investor",
      label: "Investor Registration",
    },
    {
      href: "/join-network/mentor",
      label: "Mentor Registration",
    },
    {
      href: "/join-network/partner",
      label: "Partner Registration",
    },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Lightbulb className="h-8 w-8 text-primary" />
          <span className="hidden font-bold sm:inline-block">SCN</span>
        </Link>
        <nav className="hidden md:flex md:flex-1 md:items-center md:justify-between">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  route.active ? "text-primary" : "text-muted-foreground",
                )}
              >
                {route.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
                Join Network
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {joinNetworkRoutes.map((route) => (
                  <DropdownMenuItem key={route.href} asChild>
                    <Link href={route.href}>{route.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/events">
              <Button variant="ghost" size="sm">
                Events
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden ml-auto">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="pr-0">
            {isOpen && (
              <MobileMenuContent
                routes={routes}
                joinNetworkRoutes={joinNetworkRoutes}
                onClose={() => setIsOpen(false)}
              />
            )}
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
