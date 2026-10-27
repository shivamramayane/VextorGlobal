"use client"

import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductShowcase from "./ProductShowcase"
import { ArrowIcon, ButtonLink, Card, Eyebrow, Heading, Marquee, Reveal, StatCounter } from "./ui"
import { approachSteps, capabilities, caseStudies, industries } from "../content"

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

const stackSignals = ["Product strategy", "Web platforms", "Mobile apps", "Commerce", "Custom software", "Applied AI", "Cloud architecture", "DevOps", "Cybersecurity", "Observability"] as const

const industryLinks = ["/work#financial-services", "/company#industries", "/work#retail-logistics", "/work#logistics", "/company#industries"] as const

function GlobeVisual() {
  return <div className="hero-visual" role="img" aria-label="Abstract illustration of connected global technology systems">
    <div className="visual-label"><span>Vextor Intelligence / 01</span><b>Systems connected</b></div>
    <span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" />
    <div className="globe-core"><span className="core-ring" /><strong>VG</strong><small>Global core</small></div>
    <div className="node node-a"><i />London<small>Cloud</small></div>
    <div className="node node-b"><i />Singapore<small>Product</small></div>
    <div className="node node-c"><i />New York<small>AI systems</small></div>
    <div className="visual-footer"><span className="visual-pulse" />Delivering across <b>6 continents</b><div className="bars"><i /><i /><i /><i /><i /></div></div>
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
          <Heading id="home-title" as="h1" className="home-title">Technology that moves <em>business forward.</em></Heading>
          <p className="hero-lead">We design, build, and modernize the digital systems ambitious organizations depend on—across every platform, market, and stage of growth.</p>
          <div className="hero-actions">
            <ButtonLink href="/contact" variant="solid">Discuss your project</ButtonLink>
            <ButtonLink href="#starting-point" variant="outline">Explore our capabilities</ButtonLink>
          </div>
        </div>
        <GlobeVisual />
      </div>
      <div className="hero-bottomline">
        <div className="hero-proof-items" aria-label="VextorGlobal at a glance">
          <span><b>42+</b> markets served</span><i /><span><b>96%</b> client retention</span><i /><span><b>15 yrs</b> combined expertise</span><i /><span><b>6</b> continents</span>
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
        {capabilities.map((item) => <Link className="starting-card" href={`#map-${item.id}`} key={item.id}>
          <span>{item.category}</span><strong>{item.title}</strong><i aria-hidden="true">↗</i>
        </Link>)}
      </div>
      <Link className="text-arrow-link explore-all" href="/expertise">Or explore all capabilities <span aria-hidden="true">↗</span></Link>
      <div className="stat-strip" aria-label="VextorGlobal experience">
        <StatCounter value={42} suffix="+" label="Markets served" />
        <StatCounter value={96} suffix="%" label="Client retention" />
        <StatCounter value={15} suffix=" yrs" label="Combined expertise" />
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
            <Eyebrow>{item.category}</Eyebrow>
            <h3>{item.title}</h3><p>{item.text}</p>
            <div className="suite-card-bottom"><span>{item.tags}</span><Link href={`/expertise#${item.id}`}>Explore <span aria-hidden="true">↗</span></Link></div>
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
      <div className="proof-intro"><Eyebrow number="04">WHY TEAMS TRUST VEXTORGLOBAL</Eyebrow><Heading>Proof, not <em>promises.</em></Heading><p>Business outcomes are the measure of good technology. Here’s what the work has changed.</p></div>
      <div className="proof-content">
        <div className="proof-stat-grid">
          <StatCounter value={3.2} decimals={1} suffix="×" label="Faster operations" />
          <StatCounter value={41} suffix="%" label="Lower cloud spend" />
          <StatCounter value={14} label="Markets unified" />
          <StatCounter value={96} suffix="%" label="Client retention" />
        </div>
        <blockquote className="client-quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <p>VextorGlobal didn’t just ship software. They transformed how our teams operate across 14 markets.</p>
          <footer><span className="quote-avatar" aria-hidden="true">TD</span><span><strong>Transformation Director</strong><small>Global logistics enterprise</small></span></footer>
        </blockquote>
      </div>
    </section>

    <section className="network-section section-shell" id="industries">
      <div className="network-heading"><div><Eyebrow number="05">THE CUSTOMER NETWORK</Eyebrow><Heading>Built for <em>complex industries.</em></Heading></div><div className="network-count"><strong>42+</strong><span>markets served<br />around the world</span></div></div>
      <p className="network-intro">We work across industries where dependable technology and thoughtful delivery make a measurable difference.</p>
      <div className="industry-grid">
        {industries.map((industry, index) => <Reveal key={industry} delay={index * .06}><Link href={industryLinks[index]} className="industry-card" aria-label={`Explore ${industry} engagements`}><span>VEXTORGLOBAL / {String(index + 1).padStart(2, "0")}</span><strong>{industry}</strong><i aria-hidden="true">↗</i></Link></Reveal>)}
      </div>
    </section>

    <section className="stack-section section-shell">
      <div className="section-heading"><div><Eyebrow number="06">CONNECTED TECHNOLOGY</Eyebrow><Heading>Plays well with <em>your systems.</em></Heading></div><p>Bring product, engineering, cloud, and operations together across the platforms your business depends on.</p></div>
      <div className="stack-grid">{stackSignals.map((item, index) => <Reveal key={item} delay={index * .035}><div className="stack-tile"><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong><i aria-hidden="true">↗</i></div></Reveal>)}</div>
    </section>

    <section className="engineering-section section-shell">
      <div className="engineering-heading"><Eyebrow number="07">ENGINEERING FOR THE LONG TERM</Eyebrow><Heading>Enterprise-grade, <em>by design.</em></Heading><p>Resilience is built into the decisions behind the product—not added after launch.</p></div>
      <div className="engineering-grid">
        {engineeringSignals.map(([number, title, text]) => <Reveal key={number}><Card className="engineering-card"><span>{number}</span><h3>{title}</h3><p>{text}</p><i aria-hidden="true">↗</i></Card></Reveal>)}
      </div>
    </section>

    <section className="principles-section section-shell">
      <div className="principles-heading"><Eyebrow number="08">A BETTER WAY TO BUILD</Eyebrow><Heading>Value from the <em>first conversation.</em></Heading><p>Good partnerships make the work clearer at every step.</p></div>
      <div className="principle-list">
        {principles.map(([title, text], index) => <Reveal key={title}><article className="principle-row"><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p><ArrowIcon /></article></Reveal>)}
      </div>
    </section>

    <section className="case-section section-shell" id="selected-work">
      <div className="section-heading"><div><Eyebrow number="09">SELECTED IMPACT</Eyebrow><Heading>Transformation you can <em>measure.</em></Heading></div><p>A selection of engagements where technology became a genuine commercial advantage.</p></div>
      <div className="case-grid">
        {caseStudies.map((study, index) => <Reveal className="case-card-wrap" delay={index * .08} key={study.id}><Link className="case-card" href={`/work#${study.id}`}>
          <span className="case-card-number">CASE {study.number}</span><Eyebrow>{study.industry}</Eyebrow><h3>{study.title}</h3><div><span>{study.outcome}</span><i aria-hidden="true">↗</i></div>
        </Link></Reveal>)}
      </div>
      <ButtonLink href="/work" variant="text">Explore selected impact</ButtonLink>
    </section>

    <section className="final-cta">
      <div className="cta-visual" aria-hidden="true"><span className="cta-orbit cta-orbit-one" /><span className="cta-orbit cta-orbit-two" /><i className="cta-core">VG</i></div>
      <div className="cta-content"><Eyebrow>READY WHEN YOU ARE</Eyebrow><Heading>See VextorGlobal on <em>your own data.</em></Heading><p>A conversation with a senior specialist is a clear place to start.</p><div className="cta-actions"><ButtonLink href="/contact" variant="solid">Discuss a project</ButtonLink><a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com <span aria-hidden="true">↗</span></a></div><div className="cta-trust">Senior-led delivery <i /> Global expertise <i /> Built around your goals</div></div>
    </section>

    <Footer />
  </main>
}
