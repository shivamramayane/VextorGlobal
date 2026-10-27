"use client"

import { useEffect, useState, type FormEvent } from "react"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { approachSteps, capabilities, caseStudies, industries } from "../content"
import { ArrowIcon, ButtonLink, Card, Eyebrow, Heading, InPageNav, Reveal, StatCounter } from "./ui"

type PageType = "expertise" | "approach" | "work" | "company" | "contact" | "not-found"

const pages = {
  expertise: { eyebrow: "CAPABILITIES", intro: "Strategy, experience, engineering, and operations working as one system—not a collection of disconnected vendors.", image: "https://images.unsplash.com/photo-1462556791646-c201b8241a94?auto=format&fit=crop&w=1600&q=85", imageLabel: "Digital systems and product engineering" },
  approach: { eyebrow: "THE VEXTOR METHOD", intro: "Our senior teams align business intent, user needs, and technical reality before we build—then deliver in measurable increments.", image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1600&q=85", imageLabel: "A team collaborating on a technology roadmap" },
  work: { eyebrow: "SELECTED IMPACT", intro: "A selection of engagements where technology became a genuine commercial advantage.", image: "https://images.unsplash.com/photo-1725913496276-47d7147da99f?auto=format&fit=crop&w=1600&q=85", imageLabel: "A global logistics and technology network" },
  company: { eyebrow: "ABOUT VEXTORGLOBAL", intro: "We are strategists, designers, engineers, and operators united by a belief that important technology should be built with care.", image: "https://images.unsplash.com/photo-1758691737124-05c5bffe46f0?auto=format&fit=crop&w=1600&q=85", imageLabel: "A global team bringing technology and business together" },
  contact: { eyebrow: "START A CONVERSATION", intro: "Tell us what needs to change. A senior VextorGlobal specialist will respond within one business day.", image: "https://images.unsplash.com/photo-1558095625-f882e3436125?auto=format&fit=crop&w=1600&q=85", imageLabel: "A calm, modern workspace for a project conversation" },
  "not-found": { eyebrow: "404 / NOT FOUND", intro: "Return home to continue exploring VextorGlobal.", image: "https://images.unsplash.com/photo-1527643448713-eea496619e3c?auto=format&fit=crop&w=1600&q=85", imageLabel: "An abstract landscape" },
} as const

function PageTitle({ type }: { type: PageType }) {
  if (type === "expertise") return <>Technology expertise, connected <em>end to end.</em></>
  if (type === "approach") return <>Clarity before code. <em>Outcomes before output.</em></>
  if (type === "work") return <>Transformation you can <em>measure.</em></>
  if (type === "company") return <>Global perspective. <em>One accountable team.</em></>
  if (type === "contact") return <>Bring us your hardest <em>technology challenge.</em></>
  return <>This page has moved <em>beyond the map.</em></>
}

function ContactForm() {
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    const topic = new URLSearchParams(window.location.search).get("topic")
    const prompts: Record<string, string> = {
      "project-estimate": "I’d like to plan a project. The goal is… The users are… Constraints or integrations include…",
      "app-cost": "I’d like to discuss application scope and cost drivers. The application should… It will serve… Key integrations are…",
      "stack-checklist": "I’d like to review our technology stack. Our current stack includes… Our main concerns are…",
    }
    if (topic && prompts[topic]) setMessage(prompts[topic])
  }, [])

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
      setMessage("")
      setStatus("Thanks — your project brief has been sent to our team. We’ll be in touch within one business day.")
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "We couldn’t send your message. Please try again.")
    } finally {
      setSending(false)
    }
  }

  return <form onSubmit={submit} className="contact-form">
    <label>Name<input name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label>
    <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
    <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
    <label>Area<select name="area" defaultValue=""><option value="" disabled>Select an area</option><option>Digital products</option><option>AI solutions</option><option>Cloud & security</option><option>Experience design</option><option>Custom software</option><option>IT consulting</option></select></label>
    <label className="field-full">Project context<textarea name="message" required minLength={10} placeholder="A short description of the opportunity or challenge" rows={5} value={message} onChange={(event) => setMessage(event.target.value)} /></label>
    <button className="form-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send project brief"}<span aria-hidden="true">↗</span></button>
    {status && <p className="form-status field-full" role="status">{status}</p>}
  </form>
}

function CapabilityPage() {
  return <section className="interior-content-section section-shell">
    <InPageNav links={[{ label: "Capabilities", href: "#capability-list" }, { label: "How we work", href: "/approach" }, { label: "Start a conversation", href: "/contact" }]} />
    <div className="interior-section-intro" id="capability-list"><Eyebrow number="01">WHAT WE DO</Eyebrow><Heading>Specialists for the <em>whole journey.</em></Heading><p>Choose a focused capability or bring disciplines together around a larger transformation.</p></div>
    <div className="interior-capability-grid">
      {capabilities.map((item, index) => <Reveal key={item.id} delay={index * .05}><Card className="interior-capability-card"><span className="interior-card-number">{item.number}</span><figure className="interior-capability-image"><img src={item.image} alt={item.imageAlt} loading="lazy" /></figure><Eyebrow>{item.category}</Eyebrow><h2 id={item.id}>{item.title}</h2><p>{item.detail}</p><span className="capability-tags">{item.tags}</span><Link href="/contact">Discuss this capability <span aria-hidden="true">↗</span></Link></Card></Reveal>)}
    </div>
  </section>
}

function ApproachPage() {
  return <>
    <section className="interior-content-section section-shell">
      <InPageNav links={[{ label: "The stages", href: "#approach-stages" }, { label: "Principles", href: "#approach-principles" }, { label: "Engagement models", href: "/pricing" }]} />
      <div className="interior-section-intro"><Eyebrow number="01">OUR DELIVERY APPROACH</Eyebrow><Heading>Four stages. <em>One shared direction.</em></Heading><p>Clear decisions, focused increments, and open collaboration keep the work connected to its intended outcome.</p></div>
      <div className="approach-timeline" id="approach-stages">
        {approachSteps.map((step, index) => <Reveal key={step.n} delay={index * .08}><article className="approach-stage"><span>{step.n}</span><div><h2>{step.title}</h2><p>{step.description}</p></div><i aria-hidden="true">↗</i></article></Reveal>)}
      </div>
    </section>
    <section className="approach-beliefs section-shell" id="approach-principles">
      <div><Eyebrow>WHAT GUIDES THE WORK</Eyebrow><Heading>Clarity at every <em>decision point.</em></Heading></div>
      <p>We embed with your team, clarify the hard problems, and deliver with a level of rigor that earns long-term trust.</p>
      <ButtonLink href="/contact" variant="outline">Talk through your roadmap</ButtonLink>
    </section>
  </>
}

function WorkPage() {
  return <section className="interior-content-section work-content-section section-shell">
    <InPageNav links={[{ label: "Project concepts", href: "#case-studies" }, { label: "How we deliver", href: "#delivery-principles" }, { label: "Start a project", href: "/contact" }]} />
    <div className="interior-section-intro" id="case-studies"><Eyebrow number="01">FICTIONAL PROJECT CONCEPTS</Eyebrow><Heading>Technology with a <em>business case.</em></Heading><p>These illustrative concepts use fictional company and product names. They show possible directions for work and are not client projects or measured outcomes.</p></div>
    <div className="work-case-list">
      {caseStudies.map((study, index) => <Reveal key={study.id} delay={index * .08}><article id={study.id} className="work-case-card">
        <span className="work-case-number">CONCEPT {study.number}</span><div className="work-case-copy"><Eyebrow>{study.industry}</Eyebrow><p className="work-project-client">{study.client} / {study.product}</p><h2>{study.title}</h2><Link href="/contact">Discuss a similar challenge <span aria-hidden="true">↗</span></Link></div><div className="work-case-stat work-case-todo"><strong>CONCEPT</strong><span>{study.outcome}</span></div>
      </article></Reveal>)}
    </div>
    <div className="case-endnote"><span>VEXTORGLOBAL / CONCEPT WORK</span><p>Project names, products, and briefs shown here are fictional. No client result is implied.</p></div>
    <div className="delivery-principles" id="delivery-principles"><Eyebrow number="02">HOW WE DELIVER</Eyebrow><Heading>Focused teams. <em>Clear measures.</em></Heading><p>Each engagement starts by agreeing the intended outcome, owners, risks, and evidence that will show progress.</p><div className="delivery-principle-grid">{[["Agree the baseline", "Understand the current process, constraints, and available evidence."], ["Define success together", "Choose measures that make sense for your organization and users."], ["Review the result", "Make outcomes and lessons clear at handover and throughout delivery."]].map(([title, text], index) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></div>
  </section>
}

function CompanyPage() {
  return <div className="company-content">
    <InPageNav links={[{ label: "Company", href: "#company-overview" }, { label: "Industries", href: "#industries" }, { label: "How we partner", href: "#company-principles" }]} />
    <section className="company-intro section-shell">
      <div id="company-overview"><Eyebrow number="01">WHAT DEFINES US</Eyebrow><Heading>Independent thinking. <em>International reach.</em></Heading></div>
      <div><p>VextorGlobal brings together senior specialists across disciplines. Our operating model is intentionally lean: the people in the room stay close to the people doing the work.</p><div className="company-stat-row"><StatCounter value={6} label="Capabilities" /><StatCounter value={4} label="Delivery stages" /><StatCounter value={3} label="Engagement models" /></div></div>
    </section>
    <section className="company-network section-shell" id="industries">
      <div className="interior-section-intro"><Eyebrow number="02">WHERE WE WORK</Eyebrow><Heading>Experience across <em>complex sectors.</em></Heading><p>Our teams bring context to the technical choices that shape critical products and operations.</p></div>
      <div className="company-industry-list">{industries.map((industry, index) => <Reveal key={industry} delay={index * .05}><div><span>0{index + 1}</span><strong>{industry}</strong><i aria-hidden="true">↗</i></div></Reveal>)}</div>
    </section>
    <section className="company-principles section-shell" id="company-principles"><div className="interior-section-intro"><Eyebrow number="03">HOW WE PARTNER</Eyebrow><Heading>Built around <em>shared ownership.</em></Heading><p>Good technology partnerships are clear about roles, decisions, and how knowledge moves between teams.</p></div><div className="delivery-principle-grid">{[["Work in the open", "Make plans, decisions, and risks visible to the people who need them."], ["Keep expertise close", "Put specialist judgment near the work and the decisions it affects."], ["Leave teams stronger", "Document important choices and support effective handover."]].map(([title, text], index) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></section>
  </div>
}

function ContactPage() {
  return <section className="contact-content section-shell">
    <div className="contact-form-column"><Eyebrow number="01">TELL US WHAT YOU’RE BUILDING</Eyebrow><h2>Every good engagement starts with <em>a clear conversation.</em></h2><p>Share a little about your project and a senior specialist will respond within one business day.</p><ContactForm /></div>
    <aside className="contact-aside"><span className="contact-aside-label">PREFER EMAIL?</span><a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com <span aria-hidden="true">↗</span></a><hr /><span className="contact-aside-label">WHAT TO INCLUDE</span><p>Share the challenge, people affected, and constraints or deadlines you already know.</p><div className="contact-aside-note"><span className="availability-dot" />A senior specialist will respond within one business day</div></aside>
  </section>
}

export default function InteriorPage({ type }: { type: PageType }) {
  const page = pages[type]
  return <main className={`site-page interior-page interior-${type}`}>
    <Navbar />
    <section className="page-hero-dark" aria-labelledby="interior-title">
      <div className="page-hero-inner"><div className="page-hero-copy"><Eyebrow>{page.eyebrow}</Eyebrow><Heading id="interior-title" as="h1" className="interior-title"><PageTitle type={type} /></Heading><p>{page.intro}</p>{type === "contact" && <ButtonLink href="#contact-form" variant="solid">Start a conversation</ButtonLink>}{type === "not-found" && <ButtonLink href="/" variant="solid">Return to homepage</ButtonLink>}</div>
        <figure className="page-hero-image"><img src={page.image} alt={page.imageLabel} fetchPriority="high" /><figcaption>VEXTORGLOBAL / {page.imageLabel}</figcaption></figure>
      </div>
    </section>

    {type === "expertise" && <CapabilityPage />}
    {type === "approach" && <ApproachPage />}
    {type === "work" && <WorkPage />}
    {type === "company" && <CompanyPage />}
    {type === "contact" && <div id="contact-form"><ContactPage /></div>}
    {type === "contact" && <section className="contact-next-steps section-shell"><div className="interior-section-intro"><Eyebrow number="02">AFTER YOU REACH OUT</Eyebrow><Heading>A clear path <em>from here.</em></Heading><p>We’ll use your note to make the first discussion relevant to the challenge you described.</p></div><div className="contact-step-grid">{[{ title: "We review your brief", text: "A senior specialist reads the context and identifies the right follow-up." }, { title: "We arrange a conversation", text: "We clarify goals, constraints, and who should be involved." }, { title: "We agree a useful next step", text: "If there’s a fit, we outline a scope and engagement model together." }].map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>}
    {type === "not-found" && <div className="not-found-return section-shell"><Eyebrow>THE REST OF THE SITE IS RIGHT THIS WAY</Eyebrow><Link href="/">Return to the VextorGlobal homepage <span aria-hidden="true">↗</span></Link></div>}

    {!["contact", "not-found"].includes(type) && <section className="interior-final-cta"><div><Eyebrow>BUILD WHAT’S NEXT</Eyebrow><Heading>Your ambition, <em>engineered.</em></Heading><p>Tell us where you want to go. We’ll bring the expertise to get you there.</p><ButtonLink href="/contact" variant="solid">Start a conversation</ButtonLink></div><div className="interior-cta-mark" aria-hidden="true"><span /><span /><span /><b>VG</b></div></section>}
    <Footer />
  </main>
}
