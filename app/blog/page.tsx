import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Calendar, User } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export const metadata: Metadata = {
  title: "Blog | Startup Catalyst Network",
  description: "Latest insights, tips, and trends in startup funding and entrepreneurship",
}

export default function BlogPage() {
  const blogPosts = [
    {
      title: "How to Create a Winning Pitch Deck",
      excerpt: "Learn the essential elements that make investors say yes to your startup pitch.",
      author: "SCN Team",
      date: "March 15, 2025",
      readTime: "5 min read",
      image: "/images/blog-business-analysis.png",
      slug: "winning-pitch-deck",
    },
    {
      title: "Top 5 Investment Trends in 2025",
      excerpt: "Discover the sectors and technologies that are attracting the most investor attention this year.",
      author: "SCN Team",
      date: "March 10, 2025",
      readTime: "7 min read",
      image: "/images/blog-investment-trends.avif",
      slug: "investment-trends-2025",
    },
    {
      title: "Government Grants for Startups",
      excerpt: "A comprehensive guide to available government funding schemes for Indian startups.",
      author: "SCN Team",
      date: "March 5, 2025",
      readTime: "6 min read",
      image: "/images/blog-government-grants.avif",
      slug: "government-grants-startups",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h1>
            <p className="text-muted-foreground md:text-xl">
              Latest insights, tips, and trends in startup funding and entrepreneurship
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8">
              {blogPosts.map((post, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="grid gap-6 md:grid-cols-[300px_1fr]">
                    <div className="aspect-video md:aspect-square bg-muted overflow-hidden">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-between p-6">
                      <div>
                        <CardHeader className="p-0">
                          <CardTitle className="text-xl">{post.title}</CardTitle>
                          <CardDescription className="mt-2">{post.excerpt}</CardDescription>
                        </CardHeader>
                        <CardContent className="p-0 pt-4">
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              {post.author}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4" />
                              {post.date}
                            </div>
                            <span>{post.readTime}</span>
                          </div>
                        </CardContent>
                      </div>
                      <CardFooter className="p-0 pt-4">
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="outline" className="group">
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-primary text-primary-foreground py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-4 text-center">
            <h2 className="text-2xl font-bold">Subscribe to Our Newsletter</h2>
            <p className="text-primary-foreground/80">
              Get the latest startup insights and funding opportunities delivered to your inbox
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="bg-background text-foreground" />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
