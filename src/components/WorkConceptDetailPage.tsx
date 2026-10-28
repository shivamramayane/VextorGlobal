import Image from "next/image"
import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { caseStudies, capabilities } from "../content"
import { ButtonLink, Eyebrow, Heading, InPageNav } from "./ui"

export default function WorkConceptDetailPage({ slug }: { slug: string }) {
  const study = caseStudies.find((item) => item.id === slug)
  if (!study) return null
  const capability = capabilities.find((item) => item.id === study.capability)

  return <main className="site-page additional-page concept-detail-page">
    <Navbar />
    <section className="article-hero concept-detail-hero">
      <div className="article-hero-inner">
        <Eyebrow>FICTIONAL PROJECT CONCEPT / {study.number}</Eyebrow>
        <Heading as="h1">{study.client}: <em>{study.product}</em></Heading>
        <p>{study.title}</p>
        <span>{study.industry} · Illustrative brief, not client work</span>
      </div>
    </section>
    <section className="section-shell concept-detail-content">
      <InPageNav links={[{ label: "Challenge", href: "#challenge" }, { label: "Concept direction", href: "#direction" }, { label: "Workstreams", href: "#workstreams" }, { label: "Possible measures", href: "#signals" }]} />
      <div className="concept-detail-grid">
        <article className="article-body">
          <section id="challenge"><Eyebrow number="01">THE CHALLENGE</Eyebrow><h2>A scenario to explore</h2><p>{study.challenge}</p></section>
          <section id="direction"><Eyebrow number="02">CONCEPT DIRECTION</Eyebrow><h2>What a useful first step could examine</h2><p>{study.direction}</p></section>
          <section id="workstreams"><Eyebrow number="03">POSSIBLE WORKSTREAMS</Eyebrow><h2>From question to <em>clear next steps.</em></h2><ol>{study.workstreams.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}</li>)}</ol></section>
          <section id="signals"><Eyebrow number="04">MEASURES TO AGREE</Eyebrow><h2>Evidence depends on <em>the real baseline.</em></h2><p>These are candidate signals for a discovery conversation, not results or targets. Any project would first confirm data availability, baseline, and a measure that fits the organization.</p><ul>{study.signals.map((item) => <li key={item}>{item}</li>)}</ul></section>
        </article>
        <aside className="concept-detail-aside">
          {capability && <Link className="concept-detail-image" href={`/expertise/${capability.id}`}>
            <Image src={capability.mapImage} alt={capability.mapImageAlt} width={1200} height={900} sizes="(max-width: 900px) 100vw, 35vw" priority placeholder="blur" blurDataURL="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" />
            <span>{capability.number} / RELATED CAPABILITY</span><strong>{capability.title} <i aria-hidden="true">→</i></strong>
          </Link>}
          <div className="concept-disclaimer"><Eyebrow>PLEASE NOTE</Eyebrow><p>{study.client} and {study.product} are fictional names. This page describes a possible approach only. It does not represent a real client, delivered project, or verified outcome.</p></div>
        </aside>
      </div>
      <div className="concept-detail-back"><Link href="/work">← Back to project concepts</Link><ButtonLink href="/contact" variant="solid">Discuss a similar challenge</ButtonLink></div>
    </section>
    <Footer />
  </main>
}
