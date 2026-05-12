import { promises as fs } from "fs"
import path from "path"
import { randomUUID } from "crypto"

export interface GuestbookMessage {
  id: string
  name: string
  message: string
  createdAt: string
}

interface GuestbookData {
  messages: GuestbookMessage[]
}

const DATA_FILE = path.join(process.cwd(), "data", "guestbook.json")

async function readData(): Promise<GuestbookData> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8")
    const parsed = JSON.parse(raw) as GuestbookData
    if (!parsed.messages || !Array.isArray(parsed.messages)) {
      return { messages: [] }
    }
    return parsed
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") {
      return { messages: [] }
    }
    throw err
  }
}

async function writeData(data: GuestbookData): Promise<void> {
  await fs.mkdir(path.dirname(DATA_FILE), { recursive: true })
  await fs.writeFile(DATA_FILE, JSON.stringify(data, null, 2), "utf-8")
}

export async function getMessages(): Promise<GuestbookMessage[]> {
  const data = await readData()
  return [...data.messages].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
  )
}

export async function addMessage(input: {
  name: string
  message: string
}): Promise<GuestbookMessage> {
  const data = await readData()
  const entry: GuestbookMessage = {
    id: randomUUID(),
    name: input.name.trim(),
    message: input.message.trim(),
    createdAt: new Date().toISOString(),
  }
  data.messages.push(entry)
  await writeData(data)
  return entry
}
