"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Mail, Send, Check, AlertCircle, User } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: 'user' | 'system'
  timestamp: Date
  status?: 'sending' | 'sent' | 'error'
  errorMessage?: string
}

export default function MessageMe() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! 👋 Send me a message and I'll get back to you soon.",
      sender: 'system',
      timestamp: new Date()
    }
  ])
  const [currentMessage, setCurrentMessage] = useState('')
  const [senderName, setSenderName] = useState('')
  const [senderEmail, setSenderEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)
  const [isMessageSent, setIsMessageSent] = useState(false)
  const [sentMessageData, setSentMessageData] = useState<{message: string, name: string, email: string} | null>(null)

  const sendMessage = async () => {
    if (!currentMessage.trim()) return

    // Store message data for confirmation view
    setSentMessageData({
      message: currentMessage,
      name: senderName,
      email: senderEmail
    })

    setIsLoading(true)

    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: currentMessage,
          email: senderEmail,
          name: senderName
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        // Show confirmation view
        setIsMessageSent(true)

      } else {
        // Handle API error response
        throw new Error(result.error || 'Unknown error occurred')
      }
    } catch (error) {
      console.error('Error sending message:', error)
      // For now, just log the error. We can add error handling UI later if needed
      alert('Failed to send message. Please try again or contact me directly.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  // Show confirmation view after message is sent
  if (isMessageSent && sentMessageData) {
    return (
      <Card className="card-enhanced overflow-hidden h-full hover:border-green-500/30 hover:shadow-[0_20px_40px_rgba(34,197,94,0.08)] transition-all duration-300">
        <CardContent className="p-6">
          {/* Success Header */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-500/10 p-3 rounded-full border border-green-500/20 mt-1">
              <Check className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex-1">
              <h3 className="font-medium text-lg mb-2 text-green-600">Message Sent Successfully!</h3>
              <p className="text-muted-foreground text-sm">
                Thank you for reaching out. I'll get back to you soon.
              </p>
            </div>
          </div>

          {/* Sent Message Display */}
          <div className="border border-border/40 rounded-lg p-4 bg-muted/30">
            <div className="flex items-center gap-2 mb-3">
              <Check className="h-4 w-4 text-green-500" />
              <span className="text-sm font-medium">Your Message:</span>
            </div>
            
            <div className="bg-background rounded-lg p-3 mb-3">
              <p className="text-sm">{sentMessageData.message}</p>
            </div>

            {(sentMessageData.name || sentMessageData.email) && (
              <div className="text-xs text-muted-foreground">
                {sentMessageData.name && <div>From: {sentMessageData.name}</div>}
                {sentMessageData.email && <div>Email: {sentMessageData.email}</div>}
              </div>
            )}
          </div>

          {/* Reset Button */}
          <div className="mt-6">
            <Button
              variant="outline"
              onClick={() => {
                setIsMessageSent(false)
                setSentMessageData(null)
                setCurrentMessage('')
                setSenderName('')
                setSenderEmail('')
                setShowContactForm(false)
              }}
              className="w-full"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <TooltipProvider>
      <Card className="card-enhanced overflow-hidden h-full">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="bg-primary/10 p-3 rounded-full border border-primary/20 mt-1">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium text-lg mb-2">Send a Message</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Start a conversation! Your message will be sent directly to my email.
            </p>
          </div>
        </div>

        {/* Optional Contact Info */}
        {!showContactForm && (
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowContactForm(true)}
            className="mb-4 text-xs"
          >
            <User className="h-3 w-3 mr-1" />
            Add your contact info (optional)
          </Button>
        )}

        {showContactForm && (
          <div className="mb-4 space-y-3 p-3 bg-muted/30 rounded-lg border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                placeholder="Your name (optional)"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                className="text-sm"
              />
              <Input
                type="email"
                placeholder="Your email (optional)"
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                className="text-sm"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setShowContactForm(false)}
              className="text-xs text-muted-foreground"
            >
              Hide contact info
            </Button>
          </div>
        )}

        {/* Chat Messages */}
        <div className="space-y-3 mb-4 max-h-64 overflow-y-auto">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm ${
                  message.sender === 'user'
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted border border-muted'
                }`}
              >
                <p>{message.text}</p>
                {message.sender === 'user' && (
                  <div className="flex items-center justify-end mt-1 space-x-1">
                    <span className="text-xs opacity-70">
                      {message.timestamp.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </span>
                    {message.status === 'sending' && (
                      <div className="animate-spin rounded-full h-3 w-3 border border-current border-t-transparent" />
                    )}
                    {message.status === 'sent' && (
                      <Check className="h-3 w-3 text-green-400" />
                    )}
                    {message.status === 'error' && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <AlertCircle className="h-3 w-3 text-red-400 cursor-help" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{message.errorMessage || "Message failed to send"}</p>
                        </TooltipContent>
                      </Tooltip>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <div className="flex gap-2">
          <Textarea
            placeholder="Type your message... (max 500 characters)"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
            maxLength={500}
            className="resize-none min-h-[60px] flex-1"
            rows={2}
          />
          <Button
            onClick={sendMessage}
            disabled={!currentMessage.trim() || isLoading}
            size="lg"
            className="bg-primary hover:bg-primary/90 self-end px-4"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Character Count */}
        <div className="mt-2 text-right">
          <span className="text-xs text-muted-foreground">
            {currentMessage.length}/500
          </span>
        </div>
      </CardContent>
    </Card>
    </TooltipProvider>
  )
}

