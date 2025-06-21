import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Check, CreditCard, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingHeader } from "@/components/pricing-header"
import { PricingTable } from "@/components/pricing-table"
import { PricingFaq } from "@/components/pricing-faq"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Pricing & Plans | AI Research Assistant",
  description: "Choose the perfect plan for your research needs with our flexible pricing options",
  openGraph: {
    title: "Pricing & Plans | AI Research Assistant",
    description: "Choose the perfect plan for your research needs with our flexible pricing options",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AI Research Assistant - Pricing & Plans",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing & Plans | AI Research Assistant",
    description: "Choose the perfect plan for your research needs with our flexible pricing options",
    images: ["/og-image.png"],
  },
}

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <PricingHeader />

        <div className="container px-4 py-12 md:px-6 md:py-16">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="monthly" className="mx-auto mb-12 w-fit">
              <TabsList className="grid w-[400px] grid-cols-2">
                <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                <TabsTrigger value="annual">Annual Billing (Save 20%)</TabsTrigger>
              </TabsList>

              <TabsContent value="monthly" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Free Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$0</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <CardDescription>Perfect for casual research and exploration.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">10 paper summaries per month</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Basic search functionality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Export to PDF</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan */}
                  <Card className="border-primary shadow-md">
                    <CardHeader>
                      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/4">
                        <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          Popular
                        </div>
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$29</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <CardDescription>For serious researchers and academics.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Unlimited paper summaries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Advanced search across all databases</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Citation network analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Custom exports and integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Priority support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup?plan=pro">
                          Start 7-Day Free Trial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Team Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Team</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$79</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <CardDescription>For research teams and departments.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Everything in Pro plan</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">5 team members included</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Collaborative workspaces</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Team analytics dashboard</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Admin controls</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Dedicated account manager</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/signup?plan=team">Contact Sales</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="annual" className="mt-6">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {/* Free Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Free</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$0</span>
                        <span className="text-muted-foreground">/year</span>
                      </div>
                      <CardDescription>Perfect for casual research and exploration.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">10 paper summaries per month</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Basic search functionality</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Export to PDF</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Email support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan */}
                  <Card className="border-primary shadow-md">
                    <CardHeader>
                      <div className="absolute right-0 top-0 -translate-y-1/2 translate-x-1/4">
                        <div className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                          Popular
                        </div>
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$279</span>
                        <span className="text-muted-foreground">/year</span>
                      </div>
                      <CardDescription>For serious researchers and academics.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Unlimited paper summaries</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Advanced search across all databases</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Citation network analysis</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Custom exports and integrations</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Priority support</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup?plan=pro-annual">
                          Start 7-Day Free Trial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Team Plan */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Team</CardTitle>
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-bold">$759</span>
                        <span className="text-muted-foreground">/year</span>
                      </div>
                      <CardDescription>For research teams and departments.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Everything in Pro plan</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">5 team members included</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Collaborative workspaces</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Team analytics dashboard</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Admin controls</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          <span className="text-sm">Dedicated account manager</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href="/signup?plan=team-annual">Contact Sales</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>

            <PricingTable />

            <div className="mt-16 rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Enterprise Solutions</h3>
                  <p className="text-muted-foreground">
                    Need a custom solution for your organization? We offer tailored enterprise plans with advanced
                    features, dedicated support, and custom integrations.
                  </p>
                </div>
                <Button size="lg" className="shrink-0" asChild>
                  <Link href="/contact">Contact Our Sales Team</Link>
                </Button>
              </div>
            </div>

            <div className="mt-16 space-y-4 text-center">
              <h2 className="text-2xl font-bold">Secure Payment Processing</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                We use industry-leading security practices to keep your payment information safe.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-8">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium">Credit Card</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  </svg>
                  <span className="text-sm font-medium">PayPal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-6 w-6 text-muted-foreground" />
                  <span className="text-sm font-medium">Secure Checkout</span>
                </div>
              </div>
            </div>

            <PricingFaq />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
