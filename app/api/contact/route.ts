import { appendFile, mkdir } from "node:fs/promises"
import { randomUUID } from "node:crypto"
import path from "node:path"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(request: Request) {
  let payload: Record<string, unknown>
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 })
  }

  const name = typeof payload.name === "string" ? payload.name.trim() : ""
  const email = typeof payload.email === "string" ? payload.email.trim() : ""
  const message = typeof payload.message === "string" ? payload.message.trim() : ""
  const company = typeof payload.company === "string" ? payload.company.trim() : ""
  const area = typeof payload.area === "string" ? payload.area.trim() : ""
  if (name.length < 2 || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254 || message.length < 10 || message.length > 5000) {
    return NextResponse.json({ error: "Add a name, valid work email, and a project description of at least 10 characters." }, { status: 400 })
  }

  const submission = { id: randomUUID(), createdAt: new Date().toISOString(), name, email, company: company.slice(0, 200), area: area.slice(0, 120), message }
  const storePath = path.join(process.cwd(), "data", "contact-submissions.jsonl")
  try {
    await mkdir(path.dirname(storePath), { recursive: true })
    await appendFile(storePath, `${JSON.stringify(submission)}\n`, { encoding: "utf8", mode: 0o600 })
  } catch {
    return NextResponse.json({ error: "We couldn’t save your message right now. Please email hello@vextorglobal.com." }, { status: 503 })
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: "Your brief was saved, but email delivery isn’t configured yet. Please email hello@vextorglobal.com." }, { status: 503 })
  }

  const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character] ?? character)
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeCompany = escapeHtml(company || "Not provided")
  const safeArea = escapeHtml(area || "Not provided")
  const safeMessage = escapeHtml(message).replace(/\r?\n/g, "<br>")
  const safeSubjectName = name.replace(/[\r\n]+/g, " ").slice(0, 120)
  let mailResponse: Response
  try {
    mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "Idempotency-Key": submission.id },
      body: JSON.stringify({
        from: "VextorGlobal <hello@vextorglobal.com>",
        to: ["maruhshivam48@gmail.com"],
        reply_to: email,
        subject: `New website enquiry from ${safeSubjectName}`,
        text: `Name: ${name}\nEmail: ${email}\nCompany: ${company || "Not provided"}\nArea: ${area || "Not provided"}\n\nProject context:\n${message}`,
        html: `<h2>New VextorGlobal website enquiry</h2><p><strong>Name:</strong> ${safeName}</p><p><strong>Email:</strong> ${safeEmail}</p><p><strong>Company:</strong> ${safeCompany}</p><p><strong>Area:</strong> ${safeArea}</p><p><strong>Project context:</strong><br>${safeMessage}</p>`,
      }),
    })
  } catch {
    return NextResponse.json({ error: "Your brief was saved, but email delivery failed. Please email hello@vextorglobal.com." }, { status: 502 })
  }

  if (!mailResponse.ok) {
    return NextResponse.json({ error: "Your brief was saved, but email delivery failed. Please email hello@vextorglobal.com." }, { status: 502 })
  }

  return NextResponse.json({ ok: true }, { status: 201 })
}
