import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Harsha Tummalapalli | UX Designer & Researcher",
  description:
    "Portfolio of Harsha Tummalapalli, a User Experience Designer and UX Researcher specializing in user-centered design, prototyping, and frontend development.",
  keywords: [
    "Harsha Tummalapalli",
    "UX Designer",
    "UX Researcher",
    "User Experience",
    "UI/UX Design",
    "Prototyping",
    "Frontend Developer",
    "Figma",
  ],
  authors: [{ name: "Harsha Tummalapalli" }],
  creator: "Harsha Tummalapalli",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshatummalapalli.com",
    title: "Harsha Tummalapalli | UX Designer & Researcher",
    description:
      "Portfolio of Harsha Tummalapalli, a User Experience Designer and UX Researcher specializing in user-centered design, prototyping, and frontend development.",
    siteName: "Harsha Tummalapalli Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Harsha Tummalapalli Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Tummalapalli | UX Designer & Researcher",
    description:
      "Portfolio of Harsha Tummalapalli, a User Experience Designer and UX Researcher specializing in user-centered design, prototyping, and frontend development.",
    creator: "@harsha_cpp",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'