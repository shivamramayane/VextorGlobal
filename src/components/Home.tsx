"use client"

import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductShowcase from "./ProductShowcase"
import { ArrowIcon, ButtonLink, Card, Eyebrow, Heading, Marquee, Reveal, StatCounter } from "./ui"
import { approachSteps, capabilities, caseStudies, engagementModels, faqs, freeTools, projectConcepts, stackTools } from "../content"

const principles = [
  ["Business-first strategy", "Tie technology decisions to clear commercial value."],
  ["Senior delivery teams", "Work directly with specialists matched to your challenge."],
  ["Built-in resilience", "Plan for security, performance, and scale from day one."],
] as const

const engineeringSignals = [
  ["01", "Security by design", "Bring security into architecture and delivery from the first decision."],
  ["02", "Modern cloud foundations", "Create infrastructure designed for resilience and sustainable growth."],
  ["03", "Performance at scale", "Make speed and reliability part of the product experience."],
  ["04", "Operational clarity", "Use observability and thoughtful operations to keep teams in control."],
] as const

const outcomeMeasures = [
  ["01", "Customer adoption", "Activation, task completion, or retention—where they fit the product."],
  ["02", "Service reliability", "Availability, error rates, and recovery time for critical services."],
  ["03", "Delivery confidence", "Release cadence, lead time, and the predictability of delivery."],
  ["04", "Operational efficiency", "Time saved, fewer handoffs, or less repetitive work."],
] as const

const trustSignals = ["Senior-led teams", "Fixed-scope pilots", "Response within 1 business day", "NDA by default"] as const

function GlobeVisual() {
  return <div className="hero-visual" role="img" aria-label="Animated map of product, data, cloud, and operations connected through one technology team">
    <div className="visual-label"><span>VextorGlobal / Systems map</span><b>Connected by design</b></div>
    <div className="system-scene" aria-hidden="true">
      <svg className="system-wires" viewBox="0 0 600 420" fill="none">
        <path className="system-wire" d="M130 115 C190 115 205 178 270 190" />
        <path className="system-wire system-wire-alt" d="M470 100 C410 100 395 174 330 190" />
        <path className="system-wire" d="M478 295 C410 295 397 238 330 222" />
        <path className="system-wire system-wire-alt" d="M145 303 C203 303 212 241 270 222" />
        <circle className="wire-point" cx="130" cy="115" r="4" /><circle className="wire-point" cx="470" cy="100" r="4" />
        <circle className="wire-point" cx="478" cy="295" r="4" /><circle className="wire-point" cx="145" cy="303" r="4" />
        <circle className="signal-dot" cx="130" cy="115" r="4" />
      </svg>
      <div className="system-node system-node-product"><span>01 / EXPERIENCE</span><strong>Product</strong><small>Useful by design</small><i>↗</i></div>
      <div className="system-node system-node-data"><span>02 / INTELLIGENCE</span><strong>Data & AI</strong><small>Signals into action</small><i>↗</i></div>
      <div className="system-node system-node-cloud"><span>03 / FOUNDATION</span><strong>Cloud</strong><small>Ready to scale</small><i>↗</i></div>
      <div className="system-node system-node-operations"><span>04 / DELIVERY</span><strong>Operations</strong><small>Built to keep moving</small><i>↗</i></div>
      <div className="system-core-card"><span className="core-card-mark">VG</span><div><small>ONE CONNECTED TEAM</small><strong>Ideas into<br />working systems.</strong></div><b>V / 01</b></div>
      <span className="scene-index scene-index-top">GLOBAL DELIVERY <i>•</i> 24/7 READY</span>
      <span className="scene-index scene-index-bottom">STRATEGY <b>—</b> DESIGN <b>—</b> ENGINEERING</span>
    </div>
    <div className="visual-footer"><span className="visual-pulse" />Six capabilities. One connected team.<span className="visual-footer-status">SYSTEM MAP <b>06</b></span></div>
  </div>
}

export default function Home() {
  return <main className="site-page home-page">
    <Navbar />

    <section className="hero-dark" aria-labelledby="home-title">
      <div className="hero-grid-glow" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <Eyebrow>GLOBAL TECHNOLOGY PARTNER</Eyebrow>
          <Heading id="home-title" as="h1" className="home-title"><span className="hero-title-line">Technology that moves</span><em className="hero-title-accent">business forward.</em></Heading>
          <p className="hero-lead">We design, build, and modernize the digital systems ambitious organizations depend on—across every platform, market, and stage of growth.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact" variant="solid">Discuss your project</ButtonLink>
            <ButtonLink href="#starting-point" variant="outline">Explore our capabilities</ButtonLink>
          </div>
          <div className="hero-trust-row">{trustSignals.map((item, index) => <span key={item}>{index > 0 && <i aria-hidden="true" />} {item}</span>)}</div>
        </div>
        <GlobeVisual />
      </div>
      <div className="hero-bottomline">
        <div className="hero-proof-items" aria-label="VextorGlobal at a glance">
          <span><b>6</b> capabilities</span><i /><span><b>4</b> delivery stages</span><i /><span><b>3</b> engagement models</span>
        </div>
        <a className="scroll-cue" href="#starting-point"><span className="scroll-cue-line" />SCROLL TO EXPLORE</a>
      </div>
    </section>

    <Marquee label="VextorGlobal capabilities" items={["Digital products", "Intelligent systems", "Experience design", "Cloud & security", "Custom software", "IT consulting"]} />

    <section className="section-shell starting-point-section" id="starting-point">
      <div className="section-heading starting-heading">
        <div><Eyebrow number="01">FIND YOUR STARTING POINT</Eyebrow><Heading>Start with the <em>challenge.</em></Heading></div>
        <p>Choose the outcome that matters most right now. Start with the capability built to move it forward, then bring in more of the team as the work grows.</p>
      </div>
      <div className="starting-grid">
        {capabilities.map((item, index) => <Link className="starting-card" href={`#map-${item.id}`} key={item.id}>
          <span>{item.category}</span><strong>{item.title}</strong><i aria-hidden="true">↗</i>
        </Link>)}
      </div>
      <Link className="text-arrow-link explore-all" href="/expertise">Or explore all capabilities <span aria-hidden="true">↗</span></Link>
      <div className="stat-strip" aria-label="VextorGlobal experience">
        <StatCounter value={6} label="Capabilities" />
        <StatCounter value={4} label="Delivery stages" />
        <StatCounter value={engagementModels.length} label="Engagement models" />
      </div>
    </section>

    <ProductShowcase />

    <section className="section-shell suite-section" id="suite">
      <div className="section-heading">
        <div><Eyebrow number="02">THE CAPABILITY SUITE</Eyebrow><Heading>One team. <em>Many ways forward.</em></Heading></div>
        <p>Bring the right specialists together around your goals. Each capability has a clear role and can stand on its own or work as part of a connected program.</p>
      </div>
      <div className="suite-grid">
        {capabilities.map((item, index) => <Reveal className="suite-card-wrap" delay={index * .045} key={item.id}>
          <Card className="suite-card">
            <div className="suite-card-top"><span>{item.number}</span><span className="suite-arrow" aria-hidden="true">↗</span></div>
            <figure className="suite-card-image"><img src={item.image} alt={item.imageAlt} loading="lazy" /></figure>
            <Eyebrow>{item.category}</Eyebrow>
            <h3>{item.title}</h3><p>{item.text}</p>
            <div className="suite-card-bottom"><span>{item.tags}</span><Link href={`/expertise/${item.id}`}>Explore <span aria-hidden="true">↗</span></Link></div>
          </Card>
        </Reveal>)}
      </div>
    </section>

    <section className="how-section section-shell" id="approach">
      <div className="section-heading">
        <div><Eyebrow number="03">HOW WE WORK</Eyebrow><Heading>Clarity before code. <em>Outcomes before output.</em></Heading></div>
        <p>Our senior teams align business intent, user needs, and technical reality before we build—then deliver in measurable increments.</p>
      </div>
      <div className="step-grid">
        {approachSteps.map((step, index) => <Reveal key={step.n} delay={index * .08}>
          <article className="step-card"><span>{step.n}</span><div><h3>{step.title}</h3><p>{step.description}</p></div><i aria-hidden="true">↗</i></article>
        </Reveal>)}
      </div>
      <ButtonLink href="/approach" variant="text">Explore our approach</ButtonLink>
    </section>

    <section className="proof-section section-shell" id="impact">
      <div className="proof-intro"><Eyebrow number="04">MEASURE WHAT MATTERS</Eyebrow><Heading>Outcomes are the <em>measure.</em></Heading><p>We agree the right signal for each project, establish a baseline, and review progress against it together.</p></div>
      <div className="proof-content">
        <div className="proof-stat-grid outcome-measure-grid">
          {outcomeMeasures.map(([number, title, detail]) => <article className="outcome-measure" key={number}><span>{number} / POSSIBLE SIGNAL</span><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
        <div className="outcome-method"><Eyebrow>HOW WE TRACK PROGRESS</Eyebrow><h3>Baseline. Target. <em>Evidence.</em></h3><ol><li><span>01</span>Understand the starting point and source of truth.</li><li><span>02</span>Agree a useful target that fits the project.</li><li><span>03</span>Review evidence together at each milestone.</li></ol></div>
      </div>
    </section>

    <section className="network-section section-shell" id="customers">
      <div className="network-heading"><div><Eyebrow number="05">FICTIONAL PROJECT CONCEPTS</Eyebrow><Heading>Ideas with <em>room to grow.</em></Heading></div><Link className="text-arrow-link" href="/customers">Explore concepts <span aria-hidden="true">↗</span></Link></div>
      <p className="network-intro">A separate concept portfolio: fictional company and product names used to show the kinds of challenges our team can help shape. These are not client references or shipped work.</p>
      <div className="customer-logo-grid sample-client-grid" aria-label="Fictional project concepts">
        {projectConcepts.slice(0, 3).map((project, index) => <Reveal key={project.name} delay={index * .04}><article className="sample-client-card"><span>CONCEPT PROJECT / 0{index + 1}</span><strong>{project.name}</strong><small>{project.industry}</small><b>{project.product}</b><small className="concept-project-lead">{project.lead}</small><p>{project.brief}</p></article></Reveal>)}
      </div>
    </section>

    <section className="stack-section section-shell">
      <div className="section-heading"><div><Eyebrow number="06">TECHNOLOGY ECOSYSTEM</Eyebrow><Heading>Built to fit <em>your digital estate.</em></Heading></div><p>Examples from the stack your team identified. Project-specific integrations and experience are confirmed during discovery.</p></div>
      <div className="stack-grid">{stackTools.map((item, index) => <Reveal key={item} delay={index * .035}><div className="stack-tile"><span className="stack-letter" aria-hidden="true">{item.charAt(0)}</span><strong>{item}</strong><i aria-hidden="true">↗</i></div></Reveal>)}</div>
      <Marquee label="Technology ecosystem examples" items={[...stackTools, ...stackTools]} slow />
    </section>

    <section className="engineering-section section-shell">
      <div className="engineering-heading"><Eyebrow number="07">ENGINEERING FOR THE LONG TERM</Eyebrow><Heading>Enterprise-grade, <em>by design.</em></Heading><p>Resilience is built into the decisions behind the product—not added after launch.</p></div>
      <div className="engineering-grid">
        {engineeringSignals.map(([number, title, text], index) => <Reveal key={number}><Card className="engineering-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i></Card></Reveal>)}
      </div>
    </section>

    <section className="principles-section section-shell">
      <div className="principles-heading"><Eyebrow number="08">A BETTER WAY TO BUILD</Eyebrow><Heading>Value from the <em>first conversation.</em></Heading><p>Good partnerships make the work clearer at every step.</p></div>
      <div className="principle-list">
        {principles.map(([title, text], index) => <Reveal key={title}><article className="principle-row"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><ArrowIcon /></article></Reveal>)}
      </div>
    </section>

    <section className="value-tools-section section-shell" id="resources">
      <div className="section-heading"><div><Eyebrow number="09">PRACTICAL STARTING POINTS</Eyebrow><Heading>Value before <em>the sales call.</em></Heading></div><p>Use these prompts to organize your goals and questions before a first conversation.</p></div>
      <div className="value-tools-grid">{freeTools.map((tool, index) => <Reveal key={tool.number}><Link className="value-tool-card" href={tool.href}><span>{tool.number} / WORKSHEET</span><strong>{tool.title}</strong><p>{tool.detail}</p><i>{tool.action} <b aria-hidden="true">↗</b></i></Link></Reveal>)}</div>
    </section>

    <section className="case-section section-shell" id="selected-work">
      <div className="section-heading"><div><Eyebrow number="10">CONCEPT PROJECTS</Eyebrow><Heading>Designed for <em>real-world needs.</em></Heading></div><p>Fictional project concepts explore practical product and platform challenges. They are not client work or measured outcomes.</p></div>
      <div className="case-grid">
        {caseStudies.map((study, index) => <Reveal className="case-card-wrap" delay={index * .08} key={study.id}><Link className="case-card" href={`/work#${study.id}`}>
          <span className="case-card-number">CONCEPT {study.number}</span><Eyebrow>{study.industry}</Eyebrow><h3>{study.client} · {study.product}</h3><p>{study.title}</p><div><span>{study.outcome}</span><i aria-hidden="true">↗</i></div>
        </Link></Reveal>)}
      </div>
      <ButtonLink href="/work" variant="text">Explore selected impact</ButtonLink>
    </section>

    <section className="faq-section section-shell" id="faq">
      <div className="section-heading"><div><Eyebrow number="11">COMMON QUESTIONS</Eyebrow><Heading>Good to know <em>before we start.</em></Heading></div><p>Some of the practical questions teams bring to the first conversation.</p></div>
      <div className="faq-list">{faqs.map((faq, index) => <details className="faq-item" key={faq.question}><summary><span>{String(index + 1).padStart(2, "0")}</span>{faq.question}<i aria-hidden="true">+</i></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    <section className="final-cta">
      <div className="cta-visual" aria-hidden="true"><span className="cta-orbit cta-orbit-one" /><span className="cta-orbit cta-orbit-two" /><i className="cta-core">VG</i></div>
      <div className="cta-content"><Eyebrow>READY WHEN YOU ARE</Eyebrow><Heading>Bring a clear challenge. <em>Build the next step.</em></Heading><p>A conversation with a senior specialist is a clear place to start.</p><div className="cta-actions"><ButtonLink href="/contact" variant="solid">Discuss a project</ButtonLink><a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com <span aria-hidden="true">↗</span></a></div><div className="cta-trust">{trustSignals.map((item, index) => <span key={item}>{index > 0 && <i />} {item}</span>)}</div></div>
    </section>

    <Footer />
  </main>
}
