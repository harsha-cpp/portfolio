
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Calendar, Clock, User } from "lucide-react"

export default function BookCall() {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const handleBookingClick = () => {
    window.open("https://cal.com/harshatummalapalli", "_blank", "noopener,noreferrer")
  }

  return (
    <Card className="card-enhanced overflow-hidden h-full">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-primary/10 p-3 rounded-full border border-primary/20 mt-1">
            <Calendar className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg mb-2">Schedule a Call</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Let's discuss your project, ideas, or opportunities. I'm always excited to connect!
            </p>
          </div>
        </div>

        {/* Meeting Types */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-muted">
            <Clock className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">15min Portfolio Chat</p>
              <p className="text-xs text-muted-foreground">Quick portfolio review & interview chat</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-muted">
            <User className="h-4 w-4 text-primary" />
            <div>
              <p className="text-sm font-medium">45min Project Discussion</p>
              <p className="text-xs text-muted-foreground">Detailed project planning & collaboration</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          onClick={handleBookingClick}
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg hover:shadow-primary/20"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Book a Call
          <ExternalLink className="ml-2 h-4 w-4" />
        </Button>


      </CardContent>
    </Card>
  )
}
