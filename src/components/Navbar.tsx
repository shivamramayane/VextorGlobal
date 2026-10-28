"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"

const menus = {
  expertise: {
    label: "Expertise",
    groups: [
      { title: "AI & DIGITAL PRODUCTS", items: [["AI solutions", "Agents, automation, and LLM integration"], ["Digital products", "Web and mobile apps with AI built in"], ["Experience design", "Interfaces for AI-powered products"]] },
      { title: "PLATFORM ENGINEERING", items: [["Cloud & security", "Resilient infrastructure by design"], ["Custom software", "Systems, integrations, and automation"], ["IT consulting", "Architecture and transformation"]] },
    ],
  },
  solutions: {
    label: "Solutions",
    groups: [
      { title: "APPLY AI IN PRACTICE", items: [["Build AI agents", "Connect language models to useful workflows"], ["Add AI to a product", "Bring intelligent features to web and mobile"], ["Plan an AI rollout", "Find value, readiness, and a clear next step"]] },
      { title: "BY INDUSTRY", items: [["Financial services", "Digital systems for complex markets"], ["Healthcare", "Secure and thoughtful experiences"], ["Retail & commerce", "Connected customer and commerce journeys"], ["Logistics", "Clearer tools for moving operations"]] },
    ],
  },
  resources: {
    label: "Resources",
    groups: [
      { title: "HOW WE WORK", items: [["Our approach", "Discover, define, deliver, evolve"], ["Engagement models", "Pilot, project, or dedicated team"], ["About VextorGlobal", "Our company and operating principles"]] },
      { title: "LEARN & EXPLORE", items: [["Insights", "Ideas on product, engineering, and delivery"], ["Customers", "Project concepts and partnership principles"], ["Discuss a project", "Talk with a senior specialist"]] },
    ],
  },
} as const

const routes: Record<string, string> = {
  "Digital products": "/expertise/digital-products",
  "AI solutions": "/expertise/intelligent-systems",
  "Experience design": "/expertise/experience-design",
  "Cloud & security": "/expertise/cloud-security",
  "Custom software": "/expertise/custom-software",
  "IT consulting": "/expertise/it-consulting",
  "Build AI agents": "/expertise/intelligent-systems",
  "Add AI to a product": "/expertise/digital-products",
  "Plan an AI rollout": "/expertise/it-consulting",
  "Financial services": "/company#industry-financial-services",
  Healthcare: "/company#industry-healthcare",
  "Retail & commerce": "/company#industry-retail-commerce",
  Logistics: "/company#industry-logistics",
  "Our approach": "/approach",
  "Work": "/work",
  "About VextorGlobal": "/company",
  "Engagement models": "/pricing",
  "Insights": "/insights",
  "Customers": "/customers",
  "Discuss a project": "/contact",
}

const simpleLinks = [
  ["Work", "/work"],
  ["Customers", "/customers"],
  ["Pricing", "/pricing"],
  ["Company", "/company"],
] as const

export default function Navbar() {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<keyof typeof menus | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const mobileToggleRef = useRef<HTMLButtonElement>(null)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 24))

  useEffect(() => {
    if (!activeMenu && !mobileOpen) return
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [activeMenu, mobileOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const panel = document.getElementById("mobile-navigation")
    const focusable = panel?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])")
    const first = focusable?.[0]
    const last = focusable?.[focusable.length - 1]
    first?.focus()
    function trapFocus(event: KeyboardEvent) {
      if (event.key !== "Tab" || !first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    window.addEventListener("keydown", trapFocus)
    return () => window.removeEventListener("keydown", trapFocus)
  }, [mobileOpen])

  function closeMenus() {
    setActiveMenu(null)
    if (mobileOpen) mobileToggleRef.current?.focus()
    setMobileOpen(false)
  }

  return <>
    <motion.header className={`global-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-inner">
        <Link className="brand-lockup" href="/" aria-label="VextorGlobal home" onClick={closeMenus}>
          <span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-wordmark">VEXTOR<span>GLOBAL</span></span>
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          {(Object.keys(menus) as Array<keyof typeof menus>).map((key) => <button className={activeMenu === key ? "nav-menu-trigger active" : "nav-menu-trigger"} key={key} aria-expanded={activeMenu === key} aria-controls={`menu-${key}`} onClick={() => setActiveMenu(activeMenu === key ? null : key)}>{menus[key].label}<span className="nav-menu-chevron" aria-hidden="true"><svg viewBox="0 0 12 12" fill="none"><path d="m2.5 4.5 3.5 3 3.5-3" /></svg></span></button>)}
          {simpleLinks.map(([label, href]) => <Link className="nav-simple-link" href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
        </nav>

        <div className="header-actions">
          <Link className="header-action header-action-secondary" href="/contact">Get in touch <span aria-hidden="true">→</span></Link>
        </div>

        <button ref={mobileToggleRef} className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} aria-controls="mobile-navigation" onClick={() => setMobileOpen(!mobileOpen)}><span /><span /></button>
      </div>

      <AnimatePresence>
        {activeMenu && <motion.div id={`menu-${activeMenu}`} className="mega-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .2 }}>
          <div className="mega-menu-inner">
            {menus[activeMenu].groups.map((group) => <div className="mega-menu-group" key={group.title}>
              <p>{group.title}</p>
              {group.items.map(([title, description]) => <Link href={routes[title] ?? "/expertise"} key={title} onClick={closeMenus}>
                <span><strong>{title}</strong><small>{description}</small></span><i aria-hidden="true">→</i>
              </Link>)}
            </div>)}
            <div className="mega-menu-note"><span>VEXTORGLOBAL / 01—06</span><p>Senior thinking.<br /><em>Measurable outcomes.</em></p><Link href="/contact" onClick={closeMenus}>Start a conversation <span aria-hidden="true">→</span></Link></div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </motion.header>

    <AnimatePresence>
      {mobileOpen && <motion.nav id="mobile-navigation" aria-label="Mobile navigation" className="mobile-menu-panel" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}>
        <p className="mobile-menu-label">EXPLORE VEXTORGLOBAL</p>
        {[["Expertise", "/expertise"], ["Our approach", "/approach"], ["Work", "/work"], ["Customers", "/customers"], ["Pricing", "/pricing"], ["Insights", "/insights"], ["Company", "/company"], ["Contact", "/contact"]].map(([label, href], index) => <Link key={href} href={href} onClick={closeMenus}><span>{String(index + 1).padStart(2, "0")}</span>{label}<i aria-hidden="true">→</i></Link>)}
        <p className="mobile-menu-foot">AI solutions, digital products, and the services behind them.</p>
      </motion.nav>}
    </AnimatePresence>
  </>
}
