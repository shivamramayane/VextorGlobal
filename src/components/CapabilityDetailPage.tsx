"use client"

import Link from "next/link"
import Image from "next/image"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { capabilities } from "../content"
import { ButtonLink, Card, Eyebrow, Heading, InPageNav, Reveal } from "./ui"

export default function CapabilityDetailPage({ slug }: { slug: string }) {
  const capability = capabilities.find((item) => item.id === slug)
  if (!capability) return null
  const related = capabilities.filter((item) => item.id !== capability.id).slice(0, 3)

  return <main className="site-page detail-page">
    <Navbar />
      <section className="page-hero-dark capability-detail-hero"><div className="page-hero-inner detail-hero-inner"><div className="page-hero-copy"><Eyebrow number={capability.number}>{capability.category}</Eyebrow><Heading id="capability-title" as="h1" accent={capability.title}>Technology for <span className="detail-title-break">work that matters.</span></Heading><p>{capability.detail}</p><ButtonLink href="/contact" variant="solid">Discuss this capability</ButtonLink></div><figure className="detail-hero-visual"><Image src={capability.mapImage} alt={capability.mapImageAlt} width={1200} height={900} sizes="(max-width: 980px) 100vw, 45vw" priority placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" /><figcaption><span>{capability.number} / 06</span><strong>{capability.category}</strong></figcaption></figure></div></section>
    <div className="section-shell detail-page-shell">
      <InPageNav links={[{ label: "What we deliver", href: "#deliver" }, { label: "Process", href: "#process" }, { label: "Outcomes", href: "#outcomes" }, { label: "Technology", href: "#technology" }, { label: "Related expertise", href: "#related" }]} />
      <section className="detail-section" id="deliver"><div className="interior-section-intro"><Eyebrow number="01">WHAT WE DELIVER</Eyebrow><Heading>From first decision <em>to real capability.</em></Heading><p>{capability.detail}</p></div><div className="detail-deliver-grid">{capability.deliver.map((item, index) => <Reveal key={item} delay={index * .04}><article><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3></article></Reveal>)}</div></section>
      <section className="detail-section" id="process"><div className="interior-section-intro"><Eyebrow number="02">HOW WE WORK</Eyebrow><Heading>Four stages. <em>Shared direction.</em></Heading><p>A clear delivery path ties the work to your context, constraints, and success measures.</p></div><div className="detail-process-grid">{["Discover the need", "Define a useful scope", "Deliver in increments", "Evolve with evidence"].map((item, index) => <article key={item}><span>0{index + 1}</span><h3>{item}</h3></article>)}</div></section>
      <section className="detail-section" id="outcomes"><div className="interior-section-intro"><Eyebrow number="03">MEASUREMENT APPROACH</Eyebrow><Heading>Make the result <em>measurable.</em></Heading><p>Outcome measures are agreed with each client before delivery begins.</p></div><Card className="outcomes-todo-card"><span>BASELINE · TARGET · EVIDENCE</span><strong>We define what progress means for your project.</strong><p>Measures, data sources, and review points are chosen together. Client results are shared only with permission.</p></Card></section>
      <section className="detail-section" id="technology"><div className="interior-section-intro"><Eyebrow number="04">TECHNOLOGY EXAMPLES</Eyebrow><Heading>Tools chosen for <em>the context.</em></Heading><p>These examples reflect technologies identified for the VextorGlobal stack. Exact fit is confirmed during discovery.</p></div><div className="stack-grid detail-stack-grid">{capability.stack.map((tool, index) => <div className="stack-tile" key={tool}><span className="stack-letter" aria-hidden="true">{tool.charAt(0)}</span><strong>{tool}</strong></div>)}</div></section>
      <section className="detail-section" id="related"><div className="interior-section-intro"><Eyebrow number="05">RELATED CAPABILITIES</Eyebrow><Heading>Bring disciplines <em>together.</em></Heading><p>Combine this capability with complementary expertise as the work grows.</p></div><div className="related-capability-grid">{related.map((item) => <Link href={`/expertise/${item.id}`} key={item.id}><span>{item.number} / {item.category}</span><strong>{item.title}</strong><i aria-hidden="true">→</i></Link>)}</div></section>
    </div>
    <section className="interior-final-cta"><div><Eyebrow>START WITH THE CHALLENGE</Eyebrow><Heading>Bring the hard part. <em>We’ll work it through.</em></Heading><p>A focused conversation can help define a useful next step.</p><ButtonLink href="/contact" variant="solid">Start a conversation</ButtonLink></div><div className="interior-cta-mark" aria-hidden="true"><span /><span /><span /><b>VG</b></div></section>
    <Footer />
  </main>
}
