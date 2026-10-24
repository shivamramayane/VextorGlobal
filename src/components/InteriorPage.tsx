"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"

type PageType = "expertise" | "approach" | "work" | "company" | "contact" | "not-found"

const pages = {
  expertise: ["Capabilities", "Technology expertise, connected end to end.", "Strategy, experience, engineering, and operations working as one system—not a collection of disconnected vendors.", "https://images.unsplash.com/photo-1462556791646-c201b8241a94?auto=format&fit=crop&w=1600&q=85"],
  approach: ["The Vextor method", "Clarity before code. Outcomes before output.", "Our senior teams align business intent, user needs, and technical reality before we build—then deliver in measurable increments.", "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=85"],
  work: ["Selected impact", "Transformation you can measure.", "A selection of engagements where technology became a genuine commercial advantage.", "https://images.unsplash.com/photo-1725913496276-47d7147da99f?auto=format&fit=crop&w=1600&q=85"],
  company: ["About VextorGlobal", "Global perspective. One accountable team.", "We are strategists, designers, engineers, and operators united by a belief that important technology should be built with care.", "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=1600&q=85"],
  contact: ["Start a conversation", "Bring us your hardest technology challenge.", "Tell us what needs to change. A senior VextorGlobal specialist will respond within one business day.", "https://images.unsplash.com/photo-1558095625-f882e3436125?auto=format&fit=crop&w=1600&q=85"],
  "not-found": ["404", "This page has moved beyond the map.", "Return home to continue exploring VextorGlobal.", "https://images.unsplash.com/photo-1527643448713-eea496619e3c?auto=format&fit=crop&w=1600&q=85"],
}

const offerings = [
  ["Digital products", "Web platforms, mobile applications, commerce, and connected customer experiences."],
  ["Custom software", "Purpose-built enterprise systems, integrations, automation, and modernization."],
  ["AI solutions", "Responsible AI strategy, intelligent workflows, copilots, and production-grade models."],
  ["Cloud & security", "Cloud architecture, DevOps, observability, cybersecurity, and managed resilience."],
  ["Experience design", "Product strategy, research, service design, UI systems, and rapid prototyping."],
  ["IT consulting", "Technology strategy, architecture advisory, delivery leadership, and transformation."],
]

const Mark = () => <span className="brand-mark"><i /><i /><i /></span>

function ContactForm() {
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSending(true)
    setStatus("")
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    try {
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json" } })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Please try again.")
      formElement.reset()
      setStatus("Thanks — your project brief has been sent to our team. We’ll be in touch within one business day.")
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "We couldn’t send your message. Please try again.")
    } finally { setSending(false) }
  }
  return <form onSubmit={submit}>
    <label>Name<input name="name" required minLength={2} placeholder="Your name" /></label>
    <label>Work email<input name="email" type="email" required placeholder="name@company.com" /></label>
    <label>Company<input name="company" placeholder="Company name" /></label>
    <label>Area<select name="area" defaultValue=""><option value="" disabled>Select an area</option><option>Digital products</option><option>AI solutions</option><option>Cloud & security</option><option>Experience design</option></select></label>
    <label className="full">Project context<textarea name="message" required minLength={10} placeholder="A short description of the opportunity or challenge" rows={4}/></label>
    <button type="submit" disabled={sending}>{sending ? "Sending…" : "Send project brief"} <span>→</span></button>
    {status && <p className="form-status full" role="status">{status}</p>}
  </form>
}

export default function InteriorPage({ type }: { type: PageType }) {
  const [menu, setMenu] = useState(false)
  const [eyebrow, title, intro, image] = pages[type]
  const isContact = type === "contact"
  return <main className="interior">
    <header className="nav">
      <Link className="brand" href="/"><Mark /><span>Vextor<span>Global</span></span></Link>
      <nav className={menu ? "nav-links open" : "nav-links"}>
        <Link href="/expertise" onClick={() => setMenu(false)}>Expertise</Link><Link href="/approach" onClick={() => setMenu(false)}>Approach</Link><Link href="/work" onClick={() => setMenu(false)}>Impact</Link><Link href="/company" onClick={() => setMenu(false)}>Company</Link>
        <Link className="nav-cta" href="/contact" onClick={() => setMenu(false)}>Start a project <span>→</span></Link>
      </nav>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="Toggle menu"><span>{menu ? "×" : "☰"}</span></button>
    </header>
    <section className="page-hero">
      <div className="page-hero-copy"><p className="kicker">{eyebrow}</p><h1>{title}</h1><p>{intro}</p></div>
      <figure><img src={image} alt="" /><figcaption>VextorGlobal / {eyebrow}</figcaption></figure>
    </section>
    {type === "expertise" && <section className="offering-grid">{offerings.map(([name, text], i) => <article key={name}><span>0{i + 1}</span><h2>{name}</h2><p>{text}</p><Link href="/contact">Discuss this capability →</Link></article>)}</section>}
    {type === "approach" && <section className="process">{["Discover", "Define", "Deliver", "Evolve"].map((item, i) => <article key={item}><b>0{i + 1}</b><h2>{item}</h2><p>{["Align leadership, users, data, and technical constraints around the real opportunity.", "Shape the product vision, architecture, roadmap, and success measures.", "Build in focused increments with senior multidisciplinary teams and total transparency.", "Measure performance, strengthen capability, and adapt the platform as your business grows."][i]}</p></article>)}</section>}
    {type === "work" && <section className="case-list">{[["Global logistics", "A unified operations platform across 14 markets.", "3.2× faster"], ["Financial services", "Secure cloud migration without business interruption.", "41% lower cost"], ["Retail technology", "A new commerce ecosystem built for international scale.", "+68% conversion"]].map((c, i) => <article key={c[0]}><span>CASE 0{i + 1}</span><div><small>{c[0]}</small><h2>{c[1]}</h2></div><strong>{c[2]}</strong></article>)}</section>}
    {type === "company" && <section className="company-story"><div><p className="kicker">What defines us</p><h2>Independent thinking.<br/>International reach.</h2></div><div><p>VextorGlobal brings together senior specialists across disciplines and borders. Our operating model is intentionally lean: the people in the room are the people doing the work.</p><div className="company-numbers"><span><b>42+</b>markets served</span><span><b>96%</b>client retention</span><span><b>18</b>delivery hubs</span></div></div></section>}
    {isContact && <section className="contact-panel">
      <ContactForm />
      <aside><p>Prefer email?</p><a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a><hr/><p>Global delivery</p><span>London · New York · Singapore<br/>Working worldwide</span></aside>
    </section>}
    {type === "not-found" && <div className="return-home"><Link href="/">Return to homepage →</Link></div>}
    {!isContact && type !== "not-found" && <section className="three-d-cta"><div className="kinetic-scene" aria-hidden="true"><span className="ring r1"/><span className="ring r2"/><span className="ring r3"/><i/><b>VG</b></div><div><p className="kicker">Build what’s next</p><h2>Your ambition,<br/>engineered.</h2><Link href="/contact">Start a conversation →</Link></div></section>}
    <footer><Link className="brand" href="/"><Mark /><span>Vextor<span>Global</span></span></Link><p>Technology without borders.<br/>Impact without limits.</p><div className="footer-links"><Link href="/expertise">Expertise</Link><Link href="/company">Company</Link><Link href="/contact">Contact</Link></div><small>© 2026 VextorGlobal. All rights reserved.</small></footer>
  </main>
}
