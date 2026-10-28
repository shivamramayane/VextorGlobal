import { randomUUID } from "node:crypto"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  let payload: Record<string, unknown>
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== "object" || Array.isArray(body)) {
      return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 })
    }
    payload = body as Record<string, unknown>
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 })
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : ""
  const email = typeof payload.email === "string" ? payload.email.trim() : ""
  const message = typeof payload.message === "string" ? payload.message.trim() : ""
  const company = typeof payload.company === "string" ? payload.company.trim() : ""
  const area = typeof payload.area === "string" ? payload.area.trim() : ""
  const honeypot = typeof payload.companySite === "string" ? payload.companySite.trim() : typeof payload.website === "string" ? payload.website.trim() : ""

  if (honeypot) {
    if (process.env.NODE_ENV !== "production") {
      return NextResponse.json({ error: "The hidden spam-check field was filled. Leave companySite blank and retry." }, { status: 400 })
    }
    return NextResponse.json({ ok: true }, { status: 202 })
  }

  if (name.length < 2 || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || company.length > 200 || area.length > 120 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Add a name, valid work email, and a project description of at least 10 characters." }, { status: 400 })
  }
  if (payload.privacyAcknowledged !== true && payload.privacyAcknowledged !== "true") {
    return NextResponse.json({ error: "Please confirm you have read the Privacy Notice." }, { status: 400 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Email delivery isn’t configured yet. Please email hello@vextorglobal.com." }, { status: 503 })
  }

  const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeCompany = escapeHtml(company || "Not provided")
  const safeArea = escapeHtml(area || "Not provided")
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>")
  const safeSubjectName = name.replace(/[\r\n]+/g, " ").slice(0, 120)
  const suppliedIdempotencyKey = request.headers.get("Idempotency-Key") || ""
  const idempotencyKey = /^[a-zA-Z0-9_-]{1,200}$/.test(suppliedIdempotencyKey) ? suppliedIdempotencyKey : randomUUID()

  try {
    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
      body: JSON.stringify({
        from: "VextorGlobal <hello@vextorglobal.com>",
        to: ["maruhshivam48@gmail.com"],
        reply_to: email,
        subject: `New website enquiry from ${safeSubjectName}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nArea: ${area || "Not provided"}\n\nProject context:\n${message}`,
        html: `<h2>New VextorGlobal website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Company:</strong> ${safeCompany}</p><p><strong>Area:</strong> ${safeArea}</p><p><strong>Project context:</strong><br>${safeMessage}</p>`,
      }),
      signal: AbortSignal.timeout(10000),
    })

    if (!mailResponse.ok) {
      return NextResponse.json({ error: "Email delivery failed. Please email hello@vextorglobal.com." }, { status: 502 })
    }
    return NextResponse.json({ ok: true }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Email delivery failed. Please email hello@vextorglobal.com." }, { status: 502 })
  }
}
