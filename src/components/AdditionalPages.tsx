"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { approachSteps, capabilities, engagementModels, faqs, insights, projectConcepts } from "../content"
import { ButtonLink, Card, Eyebrow, Heading, InPageNav, Reveal } from "./ui"

function PageHero({ eyebrow, lead, title, accent }: { eyebrow: string; lead: string; title: string; accent: string }) {
  return <section className="marketing-page-hero"><div className="marketing-page-hero-inner"><Eyebrow>{eyebrow}</Eyebrow><Heading as="h1" accent={accent}>{title}</Heading><p>{lead}</p></div></section>
}

function ClosingCta({ title, accent }: { title: string; accent: string }) {
  return <section className="interior-final-cta"><div><Eyebrow>READY WHEN YOU ARE</Eyebrow><Heading>{title} <em>{accent}</em></Heading><p>Share the opportunity and we’ll help shape a useful next step.</p><ButtonLink href="/contact" variant="solid">Start a conversation</ButtonLink></div><div className="interior-cta-mark" aria-hidden="true"><span /><span /><span /><b>VG</b></div></section>
}

export function CustomersPage() {
  return <main className="site-page additional-page"><Navbar /><PageHero eyebrow="CUSTOMERS & PROJECT CONCEPTS" title="Good work is built" accent="together." lead="We publish client names, testimonials, and measured outcomes only when a client has approved them. The concepts below are illustrative, not client references." />
    <section className="section-shell customer-page-section"><InPageNav links={[{ label: "Project concepts", href: "#client-network" }, { label: "References", href: "#references" }, { label: "Our approach", href: "/approach" }]} /><div className="interior-section-intro" id="client-network"><Eyebrow number="01">FICTIONAL PROJECT CONCEPTS</Eyebrow><Heading>Companies, products, <em>and possibilities.</em></Heading><p>The names and project briefs below are fictional portfolio concepts to illustrate possible work. They are not VextorGlobal clients, delivered engagements, or verified outcomes.</p></div><div className="customer-logo-grid customer-page-grid sample-client-grid">{projectConcepts.map((project, index) => <Reveal key={project.name} delay={index * .035}><article id={`project-concept-0${index + 1}`} className="sample-client-card"><span>CONCEPT PROJECT / 0{index + 1}</span><strong>{project.name}</strong><small>{project.industry}</small><b>{project.product}</b><p>{project.brief}</p></article></Reveal>)}</div></section>
    <section className="customer-testimonial section-shell" id="references"><div className="interior-section-intro"><Eyebrow number="02">CLIENT REFERENCES</Eyebrow><Heading>Shared with <em>permission.</em></Heading><p>Client names, quotes, and outcome details will appear here only after each client approves their use. No fictional testimonial is presented as a reference.</p></div><Link className="text-arrow-link" href="/contact">Ask about relevant experience <span aria-hidden="true">→</span></Link></section>
    <section className="section-shell"><div className="delivery-principle-grid">{[["Context matters", "We begin with your goals, operating environment, and users."], ["Work stays visible", "Plans, decisions, and progress remain clear to the team."], ["Outcomes need evidence", "Success measures are agreed together and reported honestly."]].map(([title, text], index) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></section>
    <ClosingCta title="Have a challenge" accent="to solve?" /><Footer /></main>
}

export function PricingPage() {
  return <main className="site-page additional-page"><Navbar /><PageHero eyebrow="ENGAGEMENT MODELS" title="A way to work that" accent="fits the work." lead="Choose a focused pilot, a defined project, or a dedicated team. Scope and pricing are shaped around your goals; no unsupported rate card is published." />
    <section className="section-shell pricing-model-section"><InPageNav links={[{ label: "Models", href: "#models" }, { label: "How pricing works", href: "#pricing-process" }, { label: "Questions", href: "#pricing-faq" }]} /><div className="interior-section-intro" id="models"><Eyebrow number="01">THREE WAYS TO ENGAGE</Eyebrow><Heading>Start with the <em>right-sized team.</em></Heading><p>Each model has a clear purpose. We’ll recommend one only after understanding the need.</p></div><div className="pricing-model-grid">{engagementModels.map((model, index) => <Reveal key={model.id} delay={index * .08}><Card className="pricing-model-card"><div className="pricing-model-top"><span>{model.number}</span></div><h2>{model.title}</h2><p>{model.summary}</p><ul>{model.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><Link href="/contact">Discuss this model <span aria-hidden="true">→</span></Link></Card></Reveal>)}</div></section>
    <section className="section-shell pricing-process-section" id="pricing-process"><div className="interior-section-intro"><Eyebrow number="02">HOW SCOPE & PRICE ARE SET</Eyebrow><Heading>Clear scope <em>before commitment.</em></Heading><p>We shape a proposal with you rather than asking you to choose from an arbitrary package.</p></div><div className="detail-process-grid">{["Understand goals and constraints", "Agree deliverables and roles", "Set milestones and review points", "Confirm commercial terms"].map((step, index) => <article key={step}><span>0{index + 1}</span><h3>{step}</h3></article>)}</div></section>
    <section className="section-shell pricing-faq-section" id="pricing-faq"><div className="interior-section-intro"><Eyebrow number="03">FREQUENT QUESTIONS</Eyebrow><Heading>Details before <em>the decision.</em></Heading><p>A few considerations that help teams choose a useful engagement.</p></div><div className="faq-list">{faqs.slice(0, 3).map((faq, index) => <details className="faq-item" key={faq.question}><summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div></section>
    <ClosingCta title="Let’s shape the" accent="right engagement." /><Footer /></main>
}

export function InsightsPage() {
  return <main className="site-page additional-page"><Navbar /><PageHero eyebrow="VEXTORGLOBAL / INSIGHTS" title="Ideas for better" accent="technology decisions." lead="Notes on product strategy, software engineering, cloud, and the practical work of making systems useful." />
    <section className="section-shell insights-list-section"><InPageNav links={[{ label: "Articles", href: "#articles" }, { label: "Expertise", href: "/expertise" }, { label: "Start a conversation", href: "/contact" }]} /><div className="interior-section-intro" id="articles"><Eyebrow number="01">ARTICLES & FIELD NOTES</Eyebrow><Heading>Useful thinking, <em>in context.</em></Heading><p>Practical notes on product, engineering, and delivery, written for teams making technology decisions.</p></div><div className="insights-card-grid">{insights.map((article, index) => <Reveal key={article.slug} delay={index * .06}><Link className="insight-card" href={`/insights/${article.slug}`}><span>{article.category} · FIELD NOTE</span><h2>{article.title}</h2><p>{article.excerpt}</p><i>Read field note <b aria-hidden="true">→</b></i></Link></Reveal>)}</div></section>
    <ClosingCta title="Have a question" accent="for our team?" /><Footer /></main>
}

export function ExpertiseIndexPage() {
  return <main className="site-page additional-page"><Navbar /><PageHero eyebrow="AI SOLUTIONS & SUPPORTING SERVICES" title="AI at the center." accent="Services built around it." lead="AI agents, automation, and intelligent products sit at the center of our work. Product, design, software, cloud, and advisory services help put them to use." />
    <section className="section-shell customer-page-section"><InPageNav links={[{ label: "Capabilities", href: "#capabilities" }, { label: "Our approach", href: "/approach" }, { label: "Contact", href: "/contact" }]} /><div className="interior-section-intro" id="capabilities"><Eyebrow number="01">WHAT WE DO</Eyebrow><Heading>One connected set <em>of capabilities.</em></Heading><p>Choose a service to see its scope, process, and related work.</p></div><div className="interior-capability-grid">{capabilities.map((capability, index) => <Reveal key={capability.id} delay={index * .04}><Card className="interior-capability-card"><span className="interior-card-number">{capability.number}</span><figure className="interior-capability-image"><Image src={capability.mapImage} alt={capability.mapImageAlt} width={1200} height={900} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" loading="lazy" placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /></figure><Eyebrow>{capability.category}</Eyebrow><h2>{capability.title}</h2><p>{capability.text}</p><Link href={`/expertise/${capability.id}`}>Explore {capability.title.toLowerCase()} <span aria-hidden="true">→</span></Link></Card></Reveal>)}</div></section>
    <ClosingCta title="Have an opportunity" accent="to explore?" /><Footer /></main>
}

export function ApproachOverviewPage() {
  return <main className="site-page additional-page"><Navbar /><PageHero eyebrow="OUR DELIVERY APPROACH" title="Clarity before code." accent="Outcomes before output." lead="We align business intent, user needs, and technical reality before building, then work in focused increments with clear review points." />
    <section className="section-shell pricing-model-section"><InPageNav links={[{ label: "Stages", href: "#approach-stages" }, { label: "Principles", href: "#approach-principles" }, { label: "Engagement models", href: "/pricing" }]} /><div className="interior-section-intro" id="approach-stages"><Eyebrow number="01">FOUR DELIVERY STAGES</Eyebrow><Heading>One shared <em>direction.</em></Heading><p>Keep decisions, delivery, and learning connected to the problem being solved.</p></div><div className="approach-timeline">{approachSteps.map((step, index) => <Reveal key={step.n} delay={index * .06}><article className="approach-stage"><span>{step.n}</span><div><h2>{step.title}</h2><p>{step.description}</p></div></article></Reveal>)}</div></section>
    <section className="section-shell pricing-process-section" id="approach-principles"><div className="interior-section-intro"><Eyebrow number="02">WHAT GUIDES THE WORK</Eyebrow><Heading>Make progress <em>easy to see.</em></Heading><p>Plans, decisions, and risks stay visible to the people who need them. Outcome measures are agreed together and reviewed against evidence.</p></div><div className="delivery-principle-grid">{[["Start with context", "Understand users, constraints, and existing systems before choosing a direction."], ["Work in increments", "Share progress regularly and keep the next decision clear."], ["Plan for handover", "Document important choices so your team can operate and evolve the result."]].map(([title, text]) => <Card key={title}><h3>{title}</h3><p>{text}</p></Card>)}</div></section>
    <ClosingCta title="Discuss your" accent="next step." /><Footer /></main>
}

const articleBody: Record<string, Array<{ title: string; text: string }>> = {
  "choosing-a-cloud-modernization-path": [
    { title: "Start with the operating need", text: "A cloud decision should solve a business or service problem. Clarify what needs to improve, who depends on it, and how much change the organization can absorb." },
    { title: "Compare paths against constraints", text: "Migration, refactoring, and replacement carry different trade-offs. Review dependencies, data handling, reliability needs, and the skills available to operate the result." },
    { title: "Make the first step reversible", text: "A bounded discovery or pilot can reduce uncertainty before a broader program. Define evidence that will influence the next decision." },
  ],
  "turning-ai-experiments-into-useful-systems": [
    { title: "Choose a real workflow", text: "Begin with a repeated task where information is difficult to find or organize. Keep a person accountable for decisions that carry meaningful risk." },
    { title: "Design the evaluation early", text: "Agree what useful output looks like, which failure modes matter, and how the system will be monitored before expanding access." },
    { title: "Plan for operations", text: "Production systems need ownership, access controls, feedback, and a way to revise or disable behavior when results fall short." },
  ],
  "designing-products-around-real-work": [
    { title: "Observe the work, not assumptions", text: "Research should uncover handoffs, workarounds, and context that a screen inventory cannot show. These details often determine whether a new product fits." },
    { title: "Connect the journey to the system", text: "Service maps and prototypes help teams see where policy, data, and software shape the experience together." },
    { title: "Test the hard moments", text: "Validate the decisions and edge cases users face under pressure, then carry those findings into the product roadmap." },
  ],
}

export function ArticlePage({ slug }: { slug: string }) {
  const article = insights.find((item) => item.slug === slug)
  if (!article) return null
  const sections = articleBody[slug] ?? []
  return <main className="site-page additional-page"><Navbar /><section className="article-hero"><div className="article-hero-inner"><Eyebrow>{article.category} · FIELD NOTE</Eyebrow><Heading as="h1">{article.title}</Heading><p>{article.excerpt}</p><span>Practical guidance for product and technology teams</span></div></section>
    <div className="article-layout section-shell"><InPageNav links={sections.map((section, index) => ({ label: section.title, href: `#article-section-${index + 1}` })).concat([{ label: "Related expertise", href: "/expertise" }])} /><article className="article-body">{sections.map((section, index) => <section id={`article-section-${index + 1}`} key={section.title}><Eyebrow number={`0${index + 1}`}>FIELD NOTE</Eyebrow><h2>{section.title}</h2><p>{section.text}</p></section>)}<p className="article-source-note">This note is general information. Assess recommendations within the context of your product and operating environment.</p></article></div>
    <ClosingCta title="Explore the ideas" accent="with us." /><Footer /></main>
}
