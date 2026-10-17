import { NextResponse } from "next/server"

// Replies are forwarded to RSVP_WEBHOOK_URL as JSON. A Google Apps Script
// web app bound to a Google Sheet works well (see README). Without it, replies
// are only written to the server log, so set it before sharing the site.

type Rsvp = {
  name: string
  email: string
  attending: "yes" | "no"
  guests: string
  transport: "yes" | "no" | ""
  dietary: string
  message: string
}

function clean(v: unknown, max = 500) {
  return typeof v === "string" ? v.trim().slice(0, max) : ""
}

export async function POST(req: Request) {
  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }

  const rsvp: Rsvp = {
    name:      clean(body.name, 120),
    email:     clean(body.email, 200),
    attending: body.attending === "yes" ? "yes" : "no",
    guests:    clean(body.guests, 2) || "1",
    transport: body.transport === "yes" ? "yes" : body.transport === "no" ? "no" : "",
    dietary:   clean(body.dietary),
    message:   clean(body.message, 2000),
  }

  if (!rsvp.name || !rsvp.email) {
    return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
  }

  const record = { ...rsvp, receivedAt: new Date().toISOString() }
  const webhook = process.env.RSVP_WEBHOOK_URL

  if (!webhook) {
    console.log("[rsvp] RSVP_WEBHOOK_URL not set, reply not stored:", record)
    return NextResponse.json({ ok: true, stored: false })
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
    })
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`)
  } catch (err) {
    console.error("[rsvp] failed to forward reply:", err)
    return NextResponse.json({ error: "Could not save your reply, please try again" }, { status: 502 })
  }

  return NextResponse.json({ ok: true, stored: true })
}
