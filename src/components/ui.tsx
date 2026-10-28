"use client"

import Link from "next/link"
import type { ComponentProps, ReactNode } from "react"
import { animate, motion, useInView, useMotionValue, useReducedMotion, useTransform } from "motion/react"
import { useEffect, useRef } from "react"

type HeadingProps = {
  as?: "h1" | "h2" | "h3"
  children: ReactNode
  accent?: string
  className?: string
  id?: string
}

export function Heading({ as: Tag = "h2", children, accent, className = "", id }: HeadingProps) {
  return <Tag id={id} className={`display-heading ${className}`}>{children}{accent && <> <em>{accent}</em></>}</Tag>
}

export function Eyebrow({ children, number }: { children: ReactNode; number?: string }) {
  return <p className="eyebrow-label">{number && <span className="eyebrow-number">{number}</span>}{children}</p>
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: "solid" | "outline" | "text" }

export function ButtonLink({ children, className = "", variant = "solid", ...props }: ButtonLinkProps) {
  const href = typeof props.href === "string" ? props.href : ""
  const external = /^(https?:|mailto:|tel:)/i.test(href)
  const arrow = external ? "↗" : variant === "solid" ? "" : "→"
  return <Link className={`button-link button-${variant} ${className}`} {...props}>{children}{arrow && <span className="button-arrow" aria-hidden="true">{arrow}</span>}</Link>
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <article className={`editorial-card ${className}`}>{children}</article>
}

export function Reveal({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion()
  // Keep server-rendered content visible; motion may enhance it after hydration.
  return <motion.div className={className} initial={false} whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }} viewport={{ once: true, amount: 0.16 }} transition={{ duration: reduceMotion ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
}

export function StatCounter({ value, prefix = "", suffix = "", decimals = 0, label }: { value: number; prefix?: string; suffix?: string; decimals?: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.7 })
  const reduceMotion = useReducedMotion()
  // The server-rendered value remains meaningful if JS or motion never runs.
  const count = useMotionValue(value)
  const rounded = useTransform(count, (latest) => (decimals ? latest.toFixed(decimals) : Math.round(latest).toLocaleString("en-US")))

  useEffect(() => {
    if (!inView) return
    if (reduceMotion) return
    count.set(0)
    const controls = animate(count, value, { duration: 1.25, ease: "easeOut" })
    return () => controls.stop()
  }, [count, inView, reduceMotion, value])

  return <div className="stat-counter" role="group" aria-label={`${label}: ${prefix}${value}${suffix}`}>
    <span className="stat-value" ref={ref} aria-hidden="true">{prefix}<motion.span>{rounded}</motion.span>{suffix}</span>
    <span className="stat-label">{label}</span>
  </div>
}

export function Marquee({ items, label, slow = false }: { items: string[]; label: string; slow?: boolean }) {
  return <div className="marquee" role="group" aria-label={label}>
    <div className={`marquee-track ${slow ? "marquee-track-slow" : ""}`}>
      {[0, 1].map((copy) => <div className="marquee-group" key={copy} aria-hidden={copy === 1}>
        {items.map((item, index) => <span className="marquee-item" key={`${copy}-${item}-${index}`}>{item}<i aria-hidden="true">✳</i></span>)}
      </div>)}
    </div>
  </div>
}

export function InPageNav({ links }: { links: Array<{ label: string; href: string }> }) {
  return <nav className="in-page-nav" aria-label="On this page">{links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}</nav>
}
