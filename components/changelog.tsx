"use client"

import { Zap, ChevronUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Changelog() {
  const [isVisible, setIsVisible] = useState(true)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      // Instantly hide when scrolling past 10px
      setIsVisible(scrollY <= 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const changelogEntries = [
    {
      version: "v1.4",
      date: "Aug 2025",
      changes: [
        "Added messaging system with AWS SES",
        "Integrated Cal.com booking calendar"
      ]
    },
    {
      version: "v1.3",
      date: "July 2025",
      changes: [
        "Enhanced project showcase layout",
        "Improved hover effects"
      ]
    },
    {
      version: "v1.2",
      date: "June 2025",
      changes: [
        "Added interactive skills visualization",
        "Implemented smooth scroll navigation"
      ]
    },
    {
      version: "v1.1",
      date: "Mar 2025",
      changes: [
        "Portfolio is born",
        "Details added and deployed"
      ]
    }
  ]

  const latestEntry = changelogEntries[0]
  const olderEntries = changelogEntries.slice(1)

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-xs">
      <div className="flex flex-col items-end space-y-2">
        {/* Expanded entries (shown above, in reverse order) */}
        {isExpanded && (
          <div className="space-y-2">
            {olderEntries.reverse().map((entry, index) => (
                              <div 
                  key={index} 
                  className="text-xs border border-border/40 rounded-lg p-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
              >
                {/* Version and Date */}
                <div className="flex items-center justify-between mb-2">
                  <span 
                    className="font-semibold text-sm"
                    style={{color: 'hsl(0 65% 55%)'}}
                  >
                    {entry.version}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {entry.date}
                  </span>
                </div>

                {/* Changes */}
                <div className="space-y-1">
                  {entry.changes.map((change, changeIndex) => (
                    <div key={changeIndex} className="flex items-start gap-2">
                      <Zap className="h-2.5 w-2.5 mt-1 flex-shrink-0" style={{color: 'hsl(0 65% 55%)'}} />
                      <span className="text-muted-foreground leading-tight">
                        {change}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Latest entry card */}
        <div className="text-xs border border-border/40 rounded-lg p-3 bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors">
          {/* Version and Date */}
          <div className="flex items-center justify-between mb-2">
            <span 
              className="font-semibold text-sm"
              style={{color: 'hsl(0 65% 55%)'}}
            >
              {latestEntry.version}
            </span>
            <span className="text-muted-foreground text-xs">
              {latestEntry.date}
            </span>
          </div>

          {/* Changes */}
          <div className="space-y-1">
            {latestEntry.changes.map((change, changeIndex) => (
              <div key={changeIndex} className="flex items-start gap-2">
                <Zap className="h-2.5 w-2.5 mt-1 flex-shrink-0" style={{color: 'hsl(0 65% 55%)'}} />
                <span className="text-muted-foreground leading-tight">
                  {change}
                </span>
              </div>
            ))}
          </div>

          {/* Expand button */}
          {changelogEntries.length > 1 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 w-full flex items-center justify-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronUp 
                className={`h-3 w-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
              />
              <span>{isExpanded ? 'Less' : 'View Full Changelog'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
