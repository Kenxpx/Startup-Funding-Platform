"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    title: "Co-Founder @TechVenture Solutions",
    company: "TechVenture Solutions",
    rating: 5,
    testimonial:
      "The support we received from SCN was exceptional. From pitch deck preparation to investor introductions, they guided us every step of the way.",
    image: "/images/founder-1.png",
  },
  {
    id: 2,
    name: "Rohan Sharma",
    title: "Founder @InnovateTech",
    company: "InnovateTech",
    rating: 5,
    testimonial:
      "SCN's network of investors and mentors helped us secure our Series A funding. Their expertise in the startup ecosystem is unmatched.",
    image: "/images/founder-2.png",
  },
  {
    id: 3,
    name: "Vikram Singh",
    title: "CEO @NextGen Enterprises",
    company: "NextGen Enterprises",
    rating: 5,
    testimonial:
      "Working with SCN transformed our business strategy. Their guidance on market analysis and investor readiness was invaluable.",
    image: "/images/founder-3.png",
  },
]

export function FounderTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="bg-background py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            What Our <span className="text-blue-600">Founders</span> Say
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Success stories from startups that have grown with SCN's support
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Avatar Section */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center overflow-hidden">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 right-4 text-4xl text-blue-600 bg-white/80 rounded-full w-12 h-12 flex items-center justify-center">
                    "
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="space-y-6">
              <div className="flex space-x-1">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-lg text-muted-foreground italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              <div>
                <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                <div className="text-blue-600 font-medium">{currentTestimonial.title}</div>
                <div className="text-sm text-muted-foreground">{currentTestimonial.company}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <Button variant="outline" size="icon" onClick={prevTestimonial} className="rounded-full">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={nextTestimonial} className="rounded-full">
              <ChevronRight className="w-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
