import { NextRequest, NextResponse } from "next/server"
import { addMessage, getMessages } from "@/lib/guestbook"

export const dynamic = "force-dynamic"

export async function GET() {
  try {
    const messages = await getMessages()
    return NextResponse.json({ success: true, messages }, { status: 200 })
  } catch (error) {
    console.error("Error reading guestbook:", error)
    return NextResponse.json(
      { success: false, error: "Failed to load guestbook" },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => null)
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, error: "Invalid request body" },
        { status: 400 },
      )
    }

    const { name, message } = body as { name?: unknown; message?: unknown }

    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Name is required" },
        { status: 400 },
      )
    }

    if (name.trim().length > 80) {
      return NextResponse.json(
        { success: false, error: "Name must be 80 characters or less" },
        { status: 400 },
      )
    }

    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Message is required" },
        { status: 400 },
      )
    }

    if (message.trim().length > 500) {
      return NextResponse.json(
        { success: false, error: "Message must be 500 characters or less" },
        { status: 400 },
      )
    }

    const sanitizedName = name.replace(/<[^>]*>/g, "").trim()
    const sanitizedMessage = message.replace(/<[^>]*>/g, "").trim()

    const entry = await addMessage({
      name: sanitizedName,
      message: sanitizedMessage,
    })

    return NextResponse.json({ success: true, message: entry }, { status: 201 })
  } catch (error) {
    console.error("Error writing guestbook:", error)
    return NextResponse.json(
      { success: false, error: "Failed to save message" },
      { status: 500 },
    )
  }
}
