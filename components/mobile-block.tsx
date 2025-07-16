"use client"

import { useEffect, useState } from "react"
import { Monitor, Smartphone } from "lucide-react"

export default function MobileBlock({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkIfMobile = () => {
      const userAgent = navigator.userAgent
      const mobileKeywords = [
        'Android', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 
        'IEMobile', 'Opera Mini', 'Mobile', 'mobile'
      ]
      
      const isMobileUA = mobileKeywords.some(keyword => 
        userAgent.includes(keyword)
      )
      
      const isMobileScreen = window.innerWidth < 768
      
      setIsMobile(isMobileUA || isMobileScreen)
      setIsLoading(false)
    }

    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  if (isMobile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-card flex items-center justify-center p-6">
        <div className="text-center space-y-8 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 space-y-6">
              <div className="flex justify-center space-x-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-full border border-primary/20">
                  <Smartphone className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-0.5 bg-muted-foreground/30"></div>
                </div>
                <div className="p-3 bg-primary/20 rounded-full border border-primary/30">
                  <Monitor className="h-8 w-8 text-primary" />
                </div>
              </div>
              
              <div className="space-y-4">
                <h1 className="text-2xl font-bold text-white">
                  Desktop Experience Required
                </h1>
                <p className="text-muted-foreground leading-relaxed">
                  This website is optimized for desktop viewing and can be accessed through PC for the best experience.
                </p>
                <p className="text-sm text-muted-foreground/80">
                  Please visit us on a desktop or laptop computer.
                </p>
              </div>
              
              <div className="pt-4">
                <div className="text-xs text-muted-foreground/60">
                  Harsha Tummalapalli Portfolio
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return <>{children}</>
} 