"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import { timeAgo } from "@/lib/utils"

interface GuestbookMessage {
  id: string
  name: string
  message: string
  createdAt: string
}

const MAX_MESSAGE = 500
const MAX_NAME = 80

export default function GuestbookForm() {
  const [messages, setMessages] = useState<GuestbookMessage[]>([])
  const [name, setName] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)
  const successTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    let cancelled = false
    async function load() {
      try {
        const res = await fetch("/api/guestbook", { cache: "no-store" })
        const data = await res.json()
        if (!cancelled && data.success) {
          setMessages(data.messages as GuestbookMessage[])
        }
      } catch {
        if (!cancelled) setError("Could not load messages")
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    load()
    return () => {
      cancelled = true
      if (successTimeout.current) clearTimeout(successTimeout.current)
    }
  }, [])

  const flashSuccess = (text: string) => {
    setSuccess(text)
    if (successTimeout.current) clearTimeout(successTimeout.current)
    successTimeout.current = setTimeout(() => setSuccess(null), 3500)
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    const trimmedName = name.trim()
    const trimmedMessage = message.trim()

    if (!trimmedName) {
      setError("Please add your name")
      return
    }
    if (!trimmedMessage) {
      setError("Please write a message")
      return
    }
    if (trimmedMessage.length > MAX_MESSAGE) {
      setError(`Message must be ${MAX_MESSAGE} characters or less`)
      return
    }

    const optimistic: GuestbookMessage = {
      id: `optimistic-${Date.now()}`,
      name: trimmedName,
      message: trimmedMessage,
      createdAt: new Date().toISOString(),
    }

    setSubmitting(true)
    setMessages((prev) => [optimistic, ...prev])

    try {
      const res = await fetch("/api/guestbook", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: trimmedName, message: trimmedMessage }),
      })
      const data = await res.json()
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to post message")
      }
      const saved = data.message as GuestbookMessage
      setMessages((prev) => [saved, ...prev.filter((m) => m.id !== optimistic.id)])
      setName("")
      setMessage("")
      flashSuccess("Signed. Thanks for stopping by.")
    } catch (err) {
      setMessages((prev) => prev.filter((m) => m.id !== optimistic.id))
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setSubmitting(false)
    }
  }

  const remaining = MAX_MESSAGE - message.length

  return (
    <div className="space-y-16 md:space-y-20">
      <form
        onSubmit={handleSubmit}
        className="border-l-2 border-primary/70 pl-6 md:pl-8"
        noValidate
      >
        <h2 className="font-funnel-display text-xl md:text-2xl font-semibold text-foreground mb-5 tracking-tight">
          Sign the book
        </h2>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="gb-name"
              className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2"
            >
              Name
            </label>
            <input
              id="gb-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={MAX_NAME}
              disabled={submitting}
              autoComplete="name"
              placeholder="Your name"
              className="w-full  bg-card border border-border text-foreground placeholder:text-muted-foreground/70 px-4 py-3 text-sm transition-colors focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
            />
          </div>

          <div>
            <label
              htmlFor="gb-message"
              className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2"
            >
              <span>Message</span>
              <span
                className={
                  remaining < 0
                    ? "text-destructive normal-case tracking-normal"
                    : "text-muted-foreground/70 normal-case tracking-normal"
                }
              >
                {remaining} left
              </span>
            </label>
            <textarea
              id="gb-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={MAX_MESSAGE}
              disabled={submitting}
              rows={4}
              placeholder="Leave a note — a hello, a critique, a project you're proud of"
              className="w-full resize-none  bg-card border border-border text-foreground placeholder:text-muted-foreground/70 px-4 py-3 text-sm leading-relaxed transition-colors focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/30 disabled:opacity-60"
            />
          </div>

          <div className="flex items-center justify-between gap-4 flex-wrap pt-1">
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {submitting ? "Signing…" : "Sign guestbook"}
            </button>

            <div className="min-h-[1.25rem] text-sm" aria-live="polite">
              {error && <span className="text-destructive">{error}</span>}
              {!error && success && <span className="text-primary">{success}</span>}
            </div>
          </div>
        </div>
      </form>

      <section>
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="font-funnel-display text-xl md:text-2xl font-semibold text-foreground tracking-tight">
            Recent entries
          </h2>
          <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            {loading ? "…" : `${messages.length} ${messages.length === 1 ? "note" : "notes"}`}
          </span>
        </div>

        {loading ? (
          <p className="text-sm text-muted-foreground">Loading the book…</p>
        ) : messages.length === 0 ? (
          <p className="text-sm text-muted-foreground">No entries yet. Be the first.</p>
        ) : (
          <ul className="divide-y divide-border/60">
            {messages.map((entry) => (
              <li key={entry.id} className="py-6 first:pt-0 last:pb-0">
                <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
                  <span className="text-base md:text-lg font-medium text-foreground tracking-tight">
                    {entry.name}
                  </span>
                  <time
                    dateTime={entry.createdAt}
                    className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
                  >
                    {timeAgo(entry.createdAt)}
                  </time>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed whitespace-pre-wrap break-words">
                  {entry.message}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
