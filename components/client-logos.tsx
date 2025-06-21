"use client"
import Image from "next/image"

export function ClientLogos() {
  const logos = [
    { name: "Netflix", src: "/placeholder.svg?height=80&width=160&text=Netflix" },
    { name: "Tesla", src: "/placeholder.svg?height=80&width=160&text=Tesla" },
    { name: "Spotify", src: "/placeholder.svg?height=80&width=160&text=Spotify" },
    { name: "Microsoft", src: "/placeholder.svg?height=80&width=160&text=Microsoft" },
    { name: "Google", src: "/placeholder.svg?height=80&width=160&text=Google" },
    { name: "Amazon", src: "/placeholder.svg?height=80&width=160&text=Amazon" },
    { name: "Meta", src: "/placeholder.svg?height=80&width=160&text=Meta" },
    { name: "Apple", src: "/placeholder.svg?height=80&width=160&text=Apple" },
    { name: "Uber", src: "/placeholder.svg?height=80&width=160&text=Uber" },
    { name: "Airbnb", src: "/placeholder.svg?height=80&width=160&text=Airbnb" },
  ]

  return (
    <div className="mt-8 overflow-hidden relative py-4">
      {/* Gradient overlays for smooth edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      <div className="flex animate-scroll">
        {/* First set of logos */}
        {logos.map((logo, index) => (
          <div
            key={`first-${logo.name}-${index}`}
            className="flex h-20 min-w-[240px] items-center justify-center rounded-lg bg-muted/50 mx-4 px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={160}
              height={80}
              className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <div
            key={`second-${logo.name}-${index}`}
            className="flex h-20 min-w-[240px] items-center justify-center rounded-lg bg-muted/50 mx-4 px-8 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.name}
              width={160}
              height={80}
              className="max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}
