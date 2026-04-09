"use client"

import { useEffect } from "react"
import Cal, { getCalApi } from "@calcom/embed-react"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

export default function BookCall() {
  useEffect(() => {
    const lockScroll = () => {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    }
    const unlockScroll = () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
    const hasCalModal = () => {
      const elements = document.querySelectorAll('[data-cal-namespace="harsha"]')
      return Array.from(elements).some(
        (el) => getComputedStyle(el).position === "fixed"
      )
    }

    ;(async function () {
      const cal = await getCalApi({ namespace: "harsha" })
      cal("ui", {
        theme: "dark",
        cssVarsPerTheme: {
          dark: {
            "cal-bg": "transparent",
            "cal-bg-emphasis": "hsl(220, 6%, 10%)",
            "cal-text": "hsl(0, 0%, 93%)",
            "cal-text-emphasis": "hsl(0, 0%, 98%)",
            "cal-text-muted": "hsl(220, 3%, 48%)",
            "cal-border": "hsl(220, 5%, 18%)",
            "cal-border-emphasis": "hsl(220, 5%, 22%)",
            "cal-brand": "hsl(38, 30%, 55%)",
            "cal-brand-emphasis": "hsl(38, 35%, 62%)",
            "cal-brand-text": "hsl(220, 8%, 4%)",
          },
        },
        hideEventTypeDetails: false,
      })

      cal("on", {
        action: "__routeChanged",
        callback: () => {
          setTimeout(() => { if (hasCalModal()) lockScroll() }, 100)
          setTimeout(() => { if (hasCalModal()) lockScroll() }, 300)
        },
      })

      cal("on", {
        action: "bookingSuccessful",
        callback: unlockScroll,
      })
    })()

    const observer = new MutationObserver(() => {
      if (hasCalModal()) {
        lockScroll()
      } else {
        unlockScroll()
      }
    })
    observer.observe(document.body, { childList: true })

    return () => {
      observer.disconnect()
      unlockScroll()
    }
  }, [])

  return (
    <Card className="card-enhanced overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-primary/10 p-3 rounded-full border border-primary/20 mt-1">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg mb-1">Schedule a Call</h3>
            <p className="text-muted-foreground text-sm">
              Pick a time that works for you.
            </p>
          </div>
        </div>

        <Cal
          namespace="harsha"
          calLink="harshatummalapalli"
          config={{ layout: "month_view", theme: "dark" }}
          style={{ width: "100%", height: "100%", overflow: "auto" }}
        />
      </CardContent>
    </Card>
  )
}
