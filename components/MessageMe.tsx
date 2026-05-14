"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Send, Check, Loader2 } from "lucide-react"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function MessageMe() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle")
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({})

  const validate = () => {
    const next: { name?: string; email?: string } = {}
    if (!name.trim()) next.name = "Name is required"
    if (!email.trim() || !EMAIL_RE.test(email.trim())) next.email = "Valid email is required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return
    if (!validate()) return

    setStatus("sending")

    try {
      const res = await fetch("/api/sendMessage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, email, name }),
      })

      const data = await res.json()
      if (!res.ok || !data.success) throw new Error(data.error || "Failed")

      setStatus("sent")
    } catch {
      setStatus("error")
    }
  }

  const reset = () => {
    setName("")
    setEmail("")
    setMessage("")
    setErrors({})
    setStatus("idle")
  }

  if (status === "sent") {
    return (
      <Card className="card-enhanced overflow-hidden h-full rounded-none">
        <CardContent className="p-8 flex flex-col items-center justify-center min-h-[320px] text-center">
          <div className="bg-primary/10 p-5 border border-primary/30 mb-5">
            <Check className="h-10 w-10 text-primary" strokeWidth={2.5} />
          </div>
          <h3 className="font-medium text-xl text-foreground mb-2">Message sent</h3>
          <p className="text-sm text-muted-foreground mb-8">
            I&apos;ll get back to you soon.
          </p>
          <button
            type="button"
            onClick={reset}
            className="btn-secondary"
          >
            Send another
          </button>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="card-enhanced overflow-hidden h-full">
      <CardContent className="p-6">
        <div className="flex items-start gap-4 mb-5">
          <div className="bg-primary/10 p-3  border border-primary/20 mt-1">
            <Mail className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-medium text-lg mb-1">Send a Message</h3>
            <p className="text-muted-foreground text-sm">
              Goes straight to my inbox.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3" noValidate>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Input
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  setName(e.target.value)
                  if (errors.name) setErrors((p) => ({ ...p, name: undefined }))
                }}
                aria-invalid={!!errors.name}
                className={`text-sm ${errors.name ? "border-red-500/70 focus-visible:ring-red-500/40" : ""}`}
              />
              {errors.name && (
                <p className="text-xs text-red-400 mt-1">{errors.name}</p>
              )}
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (errors.email) setErrors((p) => ({ ...p, email: undefined }))
                }}
                aria-invalid={!!errors.email}
                className={`text-sm ${errors.email ? "border-red-500/70 focus-visible:ring-red-500/40" : ""}`}
              />
              {errors.email && (
                <p className="text-xs text-red-400 mt-1">{errors.email}</p>
              )}
            </div>
          </div>
          <Textarea
            placeholder="Your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            maxLength={500}
              className="resize-none text-sm min-h-[200px]"
              rows={8}
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground/50">
              {message.length}/500
            </span>
            <Button
              type="submit"
              disabled={!message.trim() || status === "sending"}
              className="bg-primary hover:bg-primary/90"
            >
              {status === "sending" ? (
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              ) : (
                <Send className="h-4 w-4 mr-2" />
              )}
              {status === "sending" ? "Sending" : "Send"}
            </Button>
          </div>
          {status === "error" && (
            <p className="text-xs text-red-400">
              Failed to send. Try again or email me directly.
            </p>
          )}
        </form>
      </CardContent>
    </Card>
  )
}
