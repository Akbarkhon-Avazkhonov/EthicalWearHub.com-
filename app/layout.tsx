import type React from "react"
import type { Metadata } from "next"
import { Merriweather } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "EthicalWearHub - Where Fashion Meets Conscience",
  description:
    "Discover ethically crafted apparel that tells a story. Join thousands making conscious fashion choices with our curated collection of sustainable clothing.",
  keywords: [
    "ethical fashion",
    "sustainable clothing",
    "eco-friendly apparel",
    "fair trade fashion",
    "conscious shopping",
  ],
  authors: [{ name: "EthicalWearHub" }],
  openGraph: {
    title: "EthicalWearHub - Shop for Tomorrow, Today",
    description: "Conscious consumption, curated for ethical fashion lovers",
    type: "website",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "EthicalWearHub Logo",
      },
    ],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
