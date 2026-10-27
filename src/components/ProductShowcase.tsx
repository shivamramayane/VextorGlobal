"use client"

import Link from "next/link"
import { useMemo, useRef, useState } from "react"
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react"
import { capabilities } from "../content"
import { Eyebrow } from "./ui"

export default function ProductShowcase() {
  const mapRef = useRef<HTMLElement>(null)
  const [active, setActive] = useState(0)
  const reduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: mapRef, offset: ["start start", "end end"] })
  const activeCapability = capabilities[active]
  const formattedProgress = useMemo(() => capabilities.map((_, index) => index), [])

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = Math.min(capabilities.length - 1, Math.floor(latest * capabilities.length))
    setActive((current) => current === next ? current : next)
  })

  return <section className="capability-map-section" id="capability-map" ref={mapRef}>
    <div className="section-shell capability-map-shell">
      <div className="section-heading map-heading">
        <div><Eyebrow number="01 / 06">THE CAPABILITY MAP</Eyebrow><h2>One partner.<br /><em>Every clear next move.</em></h2></div>
        <p>Start with the challenge in front of you. Bring the right mix of strategy, design, engineering, and delivery together as your needs evolve.</p>
      </div>

      <div className="capability-map-layout">
        <aside className="capability-map-sticky" aria-live="polite">
          <div className="map-active-content">
            <Eyebrow>{activeCapability.category}</Eyebrow>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={activeCapability.id} initial={reduceMotion ? false : { opacity: 0, y: 12, filter: "blur(5px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={reduceMotion ? undefined : { opacity: 0, y: -8, filter: "blur(4px)" }} transition={{ duration: reduceMotion ? 0 : .3 }}>
                <span className="map-large-number">{activeCapability.number}</span>
                <h3>{activeCapability.title}</h3>
                <p>{activeCapability.detail}</p>
                <span className="map-signal">{activeCapability.signal}</span>
              </motion.div>
            </AnimatePresence>
            <Link className="text-arrow-link" href={`/expertise#${activeCapability.id}`}>Explore this capability <span aria-hidden="true">↗</span></Link>
          </div>

          <nav className="capability-map-index" aria-label="Capability map chapters">
            {formattedProgress.map((index) => {
              const item = capabilities[index]
              return <a href={`#map-${item.id}`} key={item.id} className={active === index ? "active" : ""} aria-current={active === index ? "step" : undefined}>
                <span>{item.number}</span>{item.title}
                <motion.i animate={{ scaleX: active === index ? 1 : 0 }} transition={{ duration: reduceMotion ? 0 : .25 }} />
              </a>
            })}
          </nav>
        </aside>

        <div className="capability-map-chapters">
          {capabilities.map((item, index) => <article className="capability-chapter" id={`map-${item.id}`} key={item.id}>
            <div className={`capability-art capability-art-${index + 1}`} aria-hidden="true"><span /><span /><span /><b>{item.number}</b></div>
            <div className="chapter-copy"><Eyebrow number={item.number}>{item.category}</Eyebrow><h3>{item.title}</h3><p>{item.text}</p><span>{item.tags}</span></div>
          </article>)}
        </div>
      </div>
    </div>
  </section>
}
