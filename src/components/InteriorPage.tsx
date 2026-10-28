"use client"

import { useEffect, useRef, useState, type FormEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { approachSteps, capabilities, caseStudies, industries } from "../content"
import { ButtonLink, Card, Eyebrow, Heading, InPageNav, Reveal, StatCounter } from "./ui"

type PageType = "expertise" | "approach" | "work" | "company" | "contact" | "not-found"

const pages = {
  expertise: { eyebrow: "AI SOLUTIONS & SUPPORTING SERVICES", intro: "AI agents, automation, and intelligent products sit at the center of our work. Product, design, software, cloud, and advisory services help them perform in real business environments.", image: "/images/capability-map/intelligent-systems.jpg", imageLabel: "Abstract illustration representing artificial intelligence" },
  approach: { eyebrow: "OUR DELIVERY APPROACH", intro: "Our senior teams align business intent, user needs, and technical reality before we build—then deliver in measurable increments.", image: "/images/capability-map/it-consulting.jpg", imageLabel: "Technology specialists reviewing a project plan" },
  work: { eyebrow: "PROJECT CONCEPTS", intro: "Illustrative project concepts show how technology can address a business challenge. They are not client engagements or measured outcomes.", image: "/images/capability-map/custom-software.jpg", imageLabel: "A laptop displaying a software project" },
  company: { eyebrow: "ABOUT VEXTORGLOBAL", intro: "We are strategists, designers, engineers, and operators united by a belief that important technology should be built with care.", image: "/images/capability-map/it-consulting.jpg", imageLabel: "Technology specialists discussing a delivery plan" },
  contact: { eyebrow: "BOOK A FREE AI CONSULTATION", intro: "Tell us about the opportunity or workflow you want to improve. A senior VextorGlobal specialist will help you consider a practical next step.", image: "/images/capability-map/experience-design.jpg", imageLabel: "A designer working through a digital product concept" },
  "not-found": { eyebrow: "404 / NOT FOUND", intro: "Return home to continue exploring VextorGlobal.", image: "/images/capability-map/cloud-security.jpg", imageLabel: "Cloud infrastructure and network equipment" },
} as const

function PageTitle({ type }: { type: PageType }) {
  if (type === "expertise") return <>AI at the center. <em>Services built around it.</em></>
  if (type === "approach") return <>Clarity before code. <em>Outcomes before output.</em></>
  if (type === "work") return <>Work shaped around <em>real needs.</em></>
  if (type === "company") return <>Global perspective. <em>One accountable team.</em></>
  if (type === "contact") return <>Bring us your hardest <em>technology challenge.</em></>
  return <>This page has moved <em>beyond the map.</em></>
}

function ContactForm() {
  const [status, setStatus] = useState("")
  const [sending, setSending] = useState(false)
  const [message, setMessage] = useState("")
  const submissionLock = useRef(false)
  const submissionKey = useRef<string | null>(null)

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
    if (submissionLock.current) return
    submissionLock.current = true
    setSending(true)
    setStatus("")
    const formElement = event.currentTarget
    const form = new FormData(formElement)
    try {
      form.set("privacyAcknowledged", "true")
      submissionKey.current ??= crypto.randomUUID()
      const response = await fetch("/api/contact", { method: "POST", body: JSON.stringify(Object.fromEntries(form)), headers: { "Content-Type": "application/json", "Idempotency-Key": submissionKey.current } })
      const result = await response.json()
      if (!response.ok) throw new Error(result.error || "Please try again.")
      formElement.reset()
      setMessage("")
      submissionKey.current = null
      setStatus("Thanks — your project brief has been sent to our team. We’ll be in touch within one business day.")
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "We couldn’t send your message. Please try again.")
    } finally {
      submissionLock.current = false
      setSending(false)
    }
  }

  return <form onSubmit={submit} className="contact-form">
    <label className="contact-honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label>Name<input name="name" autoComplete="name" required minLength={2} placeholder="Your name" /></label>
    <label>Work email<input name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></label>
    <label>Company<input name="company" autoComplete="organization" placeholder="Company name" /></label>
    <label>Area<select name="area" defaultValue=""><option value="" disabled>Select an area</option><option>Digital products</option><option>AI solutions</option><option>Cloud & security</option><option>Experience design</option><option>Custom software</option><option>IT consulting</option></select></label>
    <label className="field-full">Project context<textarea name="message" required minLength={10} placeholder="A short description of the opportunity or challenge" rows={5} value={message} onChange={(event) => setMessage(event.target.value)} /></label>
    <label className="privacy-acknowledgement field-full"><input name="privacyAcknowledged" type="checkbox" required /> <span>I have read the <Link href="/privacy">Privacy Notice</Link>. My details will be used to respond to this enquiry.</span></label>
    <button className="form-submit" type="submit" disabled={sending}>{sending ? "Sending…" : "Send project brief"}<span aria-hidden="true">→</span></button>
    {status && <p className="form-status field-full" role={status.startsWith("Thanks") ? "status" : "alert"} aria-live="polite">{status}</p>}
  </form>
}

function CapabilityPage() {
  return <section className="interior-content-section section-shell">
    <InPageNav links={[{ label: "Capabilities", href: "#capability-list" }, { label: "How we work", href: "/approach" }, { label: "Start a conversation", href: "/contact" }]} />
    <div className="interior-section-intro" id="capability-list"><Eyebrow number="01">WHAT WE DO</Eyebrow><Heading>Specialists for the <em>whole journey.</em></Heading><p>Choose a focused capability or bring disciplines together around a larger transformation.</p></div>
    <div className="interior-capability-grid">
      {capabilities.map((item, index) => <Reveal key={item.id} delay={index * .05}><Card className="interior-capability-card"><span className="interior-card-number">{item.number}</span><figure className="interior-capability-image"><Image src={item.mapImage} alt={item.mapImageAlt} width={1200} height={900} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" loading="lazy" placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></figure><Eyebrow>{item.category}</Eyebrow><h2 id={item.id}>{item.title}</h2><p>{item.detail}</p><span className="capability-tags">{item.tags}</span><Link href="/contact">Discuss this capability <span aria-hidden="true">→</span></Link></Card></Reveal>)}
    </div>
  </section>
}

function ApproachPage() {
  return <>
    <section className="interior-content-section section-shell">
      <InPageNav links={[{ label: "The stages", href: "#approach-stages" }, { label: "Principles", href: "#approach-principles" }, { label: "Engagement models", href: "/pricing" }]} />
      <div className="interior-section-intro"><Eyebrow number="01">OUR DELIVERY APPROACH</Eyebrow><Heading>Four stages. <em>One shared direction.</em></Heading><p>Clear decisions, focused increments, and open collaboration keep the work connected to its intended outcome.</p></div>
      <div className="approach-timeline" id="approach-stages">
        {approachSteps.map((step, index) => <Reveal key={step.n} delay={index * .08}><article className="approach-stage"><span>{step.n}</span><div><h2>{step.title}</h2><p>{step.description}</p></div></article></Reveal>)}
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
        <span className="work-case-number">CONCEPT {study.number}</span><div className="work-case-copy"><Eyebrow>{study.industry}</Eyebrow><p className="work-project-client">{study.client} / {study.product}</p><h2>{study.title}</h2><Link href={`/work/${study.id}`}>Read concept brief <span aria-hidden="true">→</span></Link></div><div className="work-case-stat work-case-todo"><strong>CONCEPT</strong><span>{study.outcome}</span></div>
      </article></Reveal>)}
    </div>
    <div className="case-endnote"><span>VEXTORGLOBAL / CONCEPT WORK</span><p>Project names, products, and briefs shown here are fictional. No client result is implied.</p></div>
    <div className="delivery-principles" id="delivery-principles"><Eyebrow number="02">HOW WE DELIVER</Eyebrow><Heading>Focused teams. <em>Clear measures.</em></Heading><p>Each engagement starts by agreeing the intended outcome, owners, risks, and evidence that will show progress.</p><div className="delivery-principle-grid">{[["Agree the baseline", "Understand the current process, constraints, and available evidence."], ["Define success together", "Choose measures that make sense for your organization and users."], ["Review the result", "Make outcomes and lessons clear at handover and throughout delivery."]].map(([title, text], index) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></div>
  </section>
}

function CompanyPage() {
  const conceptNumbers = [4, 2, 1, 3, 6]
  const industryIds = ["financial-services", "healthcare", "retail-commerce", "logistics", "public-sector"]
  return <div className="company-content">
    <InPageNav links={[{ label: "Company", href: "#company-overview" }, { label: "Industries", href: "#industries" }, { label: "Team model", href: "#company-team" }, { label: "How we partner", href: "#company-principles" }]} />
    <section className="company-intro section-shell">
      <div id="company-overview"><Eyebrow number="01">WHAT DEFINES US</Eyebrow><Heading>Independent thinking. <em>International reach.</em></Heading></div>
      <div><p>VextorGlobal brings together senior specialists across disciplines. Our operating model is intentionally lean: the people in the room stay close to the people doing the work.</p><div className="company-stat-row"><StatCounter value={6} label="Capabilities" /><StatCounter value={4} label="Delivery stages" /><StatCounter value={3} label="Engagement models" /></div></div>
    </section>
    <section className="company-network section-shell" id="industries">
      <div className="interior-section-intro"><Eyebrow number="02">WHERE WE WORK</Eyebrow><Heading>Experience across <em>complex sectors.</em></Heading><p>Our teams bring context to the technical choices that shape critical products and operations.</p></div>
      <div className="company-industry-list">{industries.map((industry, index) => <Reveal key={industry} delay={index * .05}><Link id={`industry-${industryIds[index]}`} href={`/customers#project-concept-0${conceptNumbers[index]}`}><span>0{index + 1}</span><strong>{industry}</strong><span aria-hidden="true">→</span></Link></Reveal>)}</div>
    </section>
    <section className="company-team-section section-shell" id="company-team"><div className="interior-section-intro"><Eyebrow number="03">HOW THE TEAM IS SET UP</Eyebrow><Heading>Senior specialists, <em>close to the work.</em></Heading><p>We bring the right disciplines around the problem and keep experienced people involved from early decisions through delivery.</p></div><div className="delivery-principle-grid">{[["A clear lead", "One senior point of contact keeps goals, decisions, and next steps connected."], ["Specialists around the need", "Product, design, engineering, data, and cloud skills are matched to the project scope."], ["Knowledge stays with your team", "Important choices are documented, and handover is part of delivery."]].map(([title, text]) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></section>
    <section className="company-principles section-shell" id="company-principles"><div className="interior-section-intro"><Eyebrow number="04">HOW WE PARTNER</Eyebrow><Heading>Built around <em>shared ownership.</em></Heading><p>Good technology partnerships are clear about roles, decisions, and how knowledge moves between teams.</p></div><div className="delivery-principle-grid">{[["Work in the open", "Make plans, decisions, and risks visible to the people who need them."], ["Keep expertise close", "Put specialist judgment near the work and the decisions it affects."], ["Leave teams stronger", "Document important choices and support effective handover."]].map(([title, text]) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></section>
  </div>
}

function ContactPage() {
  return <section className="contact-content section-shell">
    <div className="contact-form-column"><Eyebrow number="01">TELL US ABOUT THE AI OPPORTUNITY</Eyebrow><h2>Start with <em>a useful question.</em></h2><p>Share the workflow, product, or business challenge you have in mind. A senior specialist will respond within one business day.</p><p className="form-security-note">Automated spam filtering is enabled. Your details are used to respond to this enquiry.</p><ContactForm /></div>
    <aside className="contact-aside"><span className="contact-aside-label">PREFER EMAIL?</span><a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com <span aria-hidden="true">↗</span></a><hr /><span className="contact-aside-label">WHAT TO INCLUDE</span><p>Share the challenge, people affected, and constraints or deadlines you already know.</p><div className="contact-aside-note"><span className="availability-dot" />A senior specialist will respond within one business day</div></aside>
  </section>
}

export default function InteriorPage({ type }: { type: PageType }) {
  const page = pages[type]
  return <main className={`site-page interior-page interior-${type}`}>
    <Navbar />
    <section className="page-hero-dark" aria-labelledby="interior-title">
      <div className="page-hero-inner"><div className="page-hero-copy"><Eyebrow>{page.eyebrow}</Eyebrow><Heading id="interior-title" as="h1" className="interior-title"><PageTitle type={type} /></Heading><p>{page.intro}</p>{type === "not-found" && <ButtonLink href="/" variant="solid">Return to homepage</ButtonLink>}</div>
        <figure className="page-hero-image"><Image src={page.image} alt={page.imageLabel} width={1500} height={1000} sizes="(max-width: 900px) 100vw, 45vw" priority placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /><figcaption>VEXTORGLOBAL / {page.imageLabel}</figcaption></figure>
      </div>
    </section>

    {type === "expertise" && <CapabilityPage />}
    {type === "approach" && <ApproachPage />}
    {type === "work" && <WorkPage />}
    {type === "company" && <CompanyPage />}
    {type === "contact" && <div id="contact-form"><ContactPage /></div>}
    {type === "contact" && <section className="contact-next-steps section-shell"><div className="interior-section-intro"><Eyebrow number="02">AFTER YOU REACH OUT</Eyebrow><Heading>A clear path <em>from here.</em></Heading><p>We’ll use your note to make the first discussion relevant to the challenge you described.</p></div><div className="contact-step-grid">{[{ title: "We review your brief", text: "A senior specialist reads the context and identifies the right follow-up." }, { title: "We arrange a conversation", text: "We clarify goals, constraints, and who should be involved." }, { title: "We agree a useful next step", text: "If there’s a fit, we outline a scope and engagement model together." }].map((step, index) => <article key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div></section>}
    {type === "not-found" && <div className="not-found-return section-shell"><Eyebrow>THE REST OF THE SITE IS RIGHT THIS WAY</Eyebrow><Link href="/">Return to the VextorGlobal homepage <span aria-hidden="true">→</span></Link></div>}

    {!["contact", "not-found"].includes(type) && <section className="interior-final-cta"><div><Eyebrow>BUILD WHAT’S NEXT</Eyebrow><Heading>Your ambition, <em>engineered.</em></Heading><p>Tell us where you want to go. We’ll bring the expertise to get you there.</p><ButtonLink href="/contact" variant="solid">Start a conversation</ButtonLink></div><div className="interior-cta-mark" aria-hidden="true"><span /><span /><span /><b>VG</b></div></section>}
    <Footer />
  </main>
}
