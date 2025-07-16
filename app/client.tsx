"use client"

import type React from "react"
import { Lexend } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Header from "@/components/header"
import Footer from "@/components/footer"
import AnimatedBackground from "@/components/animated-background"
import NoScriptStyles from "@/components/noscript-styles"
import MobileBlock from "@/components/mobile-block"

const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <NoScriptStyles />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn("min-h-screen bg-background antialiased dark", lexend.variable)}>
        <MobileBlock>
          <div className="relative flex min-h-screen flex-col overflow-hidden">
            <noscript>
              <div className="bg-primary/20 p-4 text-center text-sm border-b border-primary/30">
                For the best experience, please enable JavaScript. Some features may be limited without it.
              </div>
            </noscript>
            <AnimatedBackground />
            <Header />
            <main className="flex-1 relative z-10">{children}</main>
            <Footer />
          </div>
        </MobileBlock>
      </body>
    </html>
  )
}
