import ClientPage from "./ClientPage"

export const metadata = {
  title: "Startup Centre Nagpur | Empowering Startups | Connecting Investors",
  description:
    "India's premier platform for startup funding, investor networking, and business consultancy. Bridging visionary founders with strategic investors.",
  openGraph: {
    title: "Startup Centre Nagpur | Empowering Startups | Connecting Investors",
    description: "India's premier platform for startup funding, investor networking, and business consultancy.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Startup Centre Nagpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Startup Centre Nagpur | Empowering Startups | Connecting Investors",
    description: "India's premier platform for startup funding, investor networking, and business consultancy.",
    images: ["/og-image.png"],
  },
}

export default function Home() {
  return <ClientPage />
}
