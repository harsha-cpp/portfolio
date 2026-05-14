import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL('https://harshatummalapalli.com'),
  title: "Harsha Tummalapalli",
  description:
    "Harsha Tummalapalli | Full-stack engineer. TypeScript, Go, PostgreSQL, AWS, Azure. Founder & CTO at Memolane.",
  keywords: [
    "Harsha Tummalapalli",
    "Software Development Engineer",
    "Full Stack Developer",
    "TypeScript",
    "Go",
    "Golang",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Redis",
    "MongoDB",
    "AWS",
    "Azure",
    "Docker",
    "CI/CD",
    "Tauri",
    "Prisma",
    "REST APIs",
    "System Design",
    "Cloud Infrastructure",
    "Memolane",
    "OpenLinear",
  ],
  authors: [{ name: "Harsha Tummalapalli" }],
  creator: "Harsha Tummalapalli",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harshatummalapalli.com",
    title: "Harsha Tummalapalli",
    description:
      "Harsha Tummalapalli | Full-stack engineer. TypeScript, Go, PostgreSQL, AWS, Azure.",
    siteName: "Harsha Tummalapalli",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsha Tummalapalli",
    description:
      "Harsha Tummalapalli | Full-stack engineer. TypeScript, Go, PostgreSQL, AWS, Azure.",
    creator: "@harsha16x",
  },
  robots: {
    index: true,
    follow: true,
  },
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