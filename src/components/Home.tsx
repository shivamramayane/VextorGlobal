"use client"

import { useState } from "react"
import Link from "next/link"

const services = [
  { n: "01", title: "Digital products", text: "High-performance web platforms and mobile experiences built to scale.", tags: "Web development · Mobile apps" },
  { n: "02", title: "Intelligent systems", text: "Custom software and practical AI that turn complex operations into an advantage.", tags: "AI solutions · Custom software" },
  { n: "03", title: "Experience design", text: "Research-led interfaces that make sophisticated products feel remarkably simple.", tags: "UI/UX · Product strategy" },
  { n: "04", title: "Cloud & security", text: "Resilient infrastructure, modern cloud architecture, and security by design.", tags: "Cloud services · Cybersecurity" },
]

const Icon = ({ name }: { name: "arrow" | "check" | "globe" | "menu" | "close" }) => {
  const paths = {
    arrow: <><path d="M5 12h14M14 6l6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.4 3 14.6 0 18M12 3c-3 3.4-3 14.6 0 18" /></>,
    menu: <><path d="M4 8h16M4 16h16" /></>,
    close: <><path d="m6 6 12 12M18 6 6 18" /></>,
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name]}</svg>
}

export default function Home() {
  const [open, setOpen] = useState(false)

  return (
    <main>
      <header className="nav">
        <Link className="brand" href="/" aria-label="VextorGlobal home">
          <span className="brand-mark"><i /><i /><i /></span>
          <span>Vextor<span>Global</span></span>
        </Link>
        <nav className={open ? "nav-links open" : "nav-links"} aria-label="Main navigation">
          <Link href="/expertise" onClick={() => setOpen(false)}>Expertise</Link>
          <Link href="/approach" onClick={() => setOpen(false)}>Approach</Link>
          <Link href="/work" onClick={() => setOpen(false)}>Impact</Link>
          <Link href="/company" onClick={() => setOpen(false)}>Company</Link>
          <Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a project <Icon name="arrow" /></Link>
        </nav>
        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Icon name={open ? "close" : "menu"} /></button>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Global technology partner</p>
          <h1>Technology that moves <em>business forward.</em></h1>
          <p className="hero-lead">We design, build, and modernize the digital systems ambitious organizations depend on—across every platform, market, and stage of growth.</p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">Discuss your project <Icon name="arrow" /></Link>
            <a className="text-link" href="#services">Explore our capabilities <span>↓</span></a>
          </div>
          <div className="trust-row">
            <div><strong>42+</strong><span>Markets served</span></div>
            <div><strong>96%</strong><span>Client retention</span></div>
            <div><strong>15 yrs</strong><span>Combined expertise</span></div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Connected global technology systems illustration">
          <div className="visual-label"><span>Vextor Intelligence</span><b>All systems operational</b></div>
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="globe-core">
            <span className="core-ring" />
            <strong>VG</strong>
            <small>Global core</small>
          </div>
          <div className="node node-a"><i />London <small>Cloud</small></div>
          <div className="node node-b"><i />Singapore <small>Product</small></div>
          <div className="node node-c"><i />New York <small>AI systems</small></div>
          <div className="visual-footer"><Icon name="globe" /><span>Delivering across<br/><b>6 continents</b></span><div className="bars"><i/><i/><i/><i/><i/></div></div>
        </div>
      </section>

      <section className="client-strip" aria-label="Industries served">
        <span>Trusted across complex industries</span>
        <div>FINANCIAL SERVICES</div><div>HEALTHCARE</div><div>RETAIL & COMMERCE</div><div>LOGISTICS</div><div>PUBLIC SECTOR</div>
      </section>

      <section className="services section" id="services">
        <div className="section-heading">
          <div><p className="kicker">What we do</p><h2>One partner.<br/><em>Every digital challenge.</em></h2></div>
          <p>From first concept to mission-critical scale, our multidisciplinary teams bring strategy, engineering, and design together under one roof.</p>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <Link href="/contact" className="service" key={service.n}>
              <span className="service-num">{service.n}</span>
              <div><h3>{service.title}</h3><p>{service.text}</p></div>
              <span className="service-tags">{service.tags}</span>
              <span className="service-arrow"><Icon name="arrow" /></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approach-visual">
          <div className="code-window">
            <div className="window-top"><span/><span/><span/><b>vextor.platform</b></div>
            <div className="code-grid">
              <div className="code-lines"><i/><i/><i/><i/><i/><i/></div>
              <div className="metric"><small>Performance</small><strong>99.99<sup>%</sup></strong><div><i/><i/><i/><i/><i/><i/><i/></div></div>
              <div className="deploy"><span><Icon name="check" /></span><p><b>Deployment complete</b><small>Production · Global</small></p></div>
            </div>
          </div>
          <div className="float-note">Built for what’s next.<span>Secure. Scalable. Adaptable.</span></div>
        </div>
        <div className="approach-copy">
          <p className="kicker">How we work</p>
          <h2>Senior thinking.<br/><em>Measurable outcomes.</em></h2>
          <p>We embed with your team, clarify the hard problems, and deliver with a level of rigor that earns long-term trust.</p>
          <ul>
            <li><Icon name="check" /><span><b>Business-first strategy</b>Technology decisions tied to clear commercial value.</span></li>
            <li><Icon name="check" /><span><b>Elite delivery teams</b>Senior specialists, carefully matched to your challenge.</span></li>
            <li><Icon name="check" /><span><b>Built-in resilience</b>Security, performance, and scale from day one.</span></li>
          </ul>
          <Link className="text-link blue" href="/approach">Our delivery approach <Icon name="arrow" /></Link>
        </div>
      </section>

      <section className="impact section" id="work">
        <div className="impact-title"><p className="kicker">Selected impact</p><h2>Results that speak<br/>in <em>business terms.</em></h2></div>
        <div className="impact-story">
          <p className="quote">“VextorGlobal didn’t just ship software. They transformed how our teams operate across 14 markets.”</p>
          <div className="result-grid">
            <div><strong>3.2×</strong><span>faster operations</span></div>
            <div><strong>41%</strong><span>lower cloud spend</span></div>
            <div><strong>14</strong><span>markets unified</span></div>
          </div>
          <p className="attribution"><b>Transformation Director</b><span>Global logistics enterprise</span></p>
        </div>
      </section>

      <section className="cta section" id="contact">
        <div className="cta-mark"><span className="brand-mark light"><i/><i/><i/></span></div>
        <p className="kicker">Your next move</p>
        <h2>Let’s build something<br/><em>that matters.</em></h2>
        <p>Tell us where you want to go. We’ll bring the expertise to get you there.</p>
        <a className="button light-button" href="mailto:hello@vextorglobal.com">hello@vextorglobal.com <Icon name="arrow" /></a>
      </section>

      <footer id="company">
        <Link className="brand" href="/"><span className="brand-mark"><i/><i/><i/></span><span>Vextor<span>Global</span></span></Link>
        <p>Technology without borders.<br/>Impact without limits.</p>
        <div className="footer-links"><Link href="/expertise">Expertise</Link><Link href="/approach">Approach</Link><Link href="/work">Impact</Link><Link href="/contact">Contact</Link></div>
        <small>© 2025 VextorGlobal. All rights reserved.</small>
      </footer>
    </main>
  )
}
