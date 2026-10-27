"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react"

const menus = {
  expertise: {
    label: "Expertise",
    groups: [
      { title: "DIGITAL DELIVERY", items: [["Digital products", "Web platforms and mobile experiences"], ["Intelligent systems", "Custom software and practical AI"], ["Experience design", "Research-led product experiences"]] },
      { title: "PLATFORM ENGINEERING", items: [["Cloud & security", "Resilient infrastructure by design"], ["Custom software", "Systems, integrations, and automation"], ["IT consulting", "Architecture and transformation"]] },
    ],
  },
  solutions: {
    label: "Solutions",
    groups: [
      { title: "BY BUSINESS GOAL", items: [["Launch a digital product", "Strategy through production delivery"], ["Modernize operations", "Connect systems and simplify workflows"], ["Scale with confidence", "Cloud, security, and performance"]] },
      { title: "BY INDUSTRY", items: [["Financial services", "Digital systems for complex markets"], ["Healthcare", "Secure and thoughtful experiences"], ["Retail & logistics", "Connected commerce and operations"]] },
    ],
  },
  resources: {
    label: "Resources",
    groups: [
      { title: "HOW WE WORK", items: [["Our approach", "Discover, define, deliver, evolve"], ["Selected impact", "Transformation in business terms"], ["About VextorGlobal", "Meet the people behind the work"]] },
      { title: "START A CONVERSATION", items: [["Discuss a project", "Talk with a senior specialist"], ["Explore our capabilities", "Find the right place to begin"]] },
    ],
  },
} as const

const routes: Record<string, string> = {
  "Digital products": "/expertise#digital-products",
  "Intelligent systems": "/expertise#intelligent-systems",
  "Experience design": "/expertise#experience-design",
  "Cloud & security": "/expertise#cloud-security",
  "Custom software": "/expertise#custom-software",
  "IT consulting": "/expertise#it-consulting",
  "Launch a digital product": "/expertise#digital-products",
  "Modernize operations": "/expertise#custom-software",
  "Scale with confidence": "/expertise#cloud-security",
  "Financial services": "/work#financial-services",
  Healthcare: "/company#industries",
  "Retail & logistics": "/work#retail-logistics",
  "Our approach": "/approach",
  "Selected impact": "/work",
  "About VextorGlobal": "/company",
  "Discuss a project": "/contact",
  "Explore our capabilities": "/expertise",
}

const simpleLinks = [
  ["Impact", "/work"],
  ["Company", "/company"],
] as const

export default function Navbar() {
  const pathname = usePathname()
  const [activeMenu, setActiveMenu] = useState<keyof typeof menus | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY, scrollYProgress } = useScroll()

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

  function closeMenus() {
    setActiveMenu(null)
    setMobileOpen(false)
  }

  return <>
    <motion.header className={`global-header ${scrolled ? "is-scrolled" : ""}`}>
      <motion.div className="reading-progress" style={{ scaleX: scrollYProgress }} />
      <div className="header-inner">
        <Link className="brand-lockup" href="/" aria-label="VextorGlobal home" onClick={closeMenus}>
          <span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span>
          <span className="brand-wordmark">VEXTOR<span>GLOBAL</span></span>
        </Link>

        <nav className="desktop-navigation" aria-label="Main navigation">
          {(Object.keys(menus) as Array<keyof typeof menus>).map((key) => <button className={activeMenu === key ? "nav-menu-trigger active" : "nav-menu-trigger"} key={key} aria-expanded={activeMenu === key} aria-controls={`menu-${key}`} onClick={() => setActiveMenu(activeMenu === key ? null : key)}>{menus[key].label}<span>{activeMenu === key ? "−" : "+"}</span></button>)}
          {simpleLinks.map(([label, href]) => <Link className="nav-simple-link" href={href} key={href} aria-current={pathname === href ? "page" : undefined}>{label}</Link>)}
          <div className="language-switch" aria-label="Language selection"><span aria-current="true">EN</span><span aria-disabled="true" title="German translation is not available yet">DE</span></div>
        </nav>

        <div className="header-actions">
          <Link className="header-action header-action-primary" href="/expertise">Explore capabilities <span aria-hidden="true">↗</span></Link>
          <Link className="header-action header-action-secondary" href="/contact">Get in touch <span aria-hidden="true">↗</span></Link>
        </div>

        <button className="mobile-menu-toggle" type="button" aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen} onClick={() => setMobileOpen(!mobileOpen)}><span /><span /></button>
      </div>

      <AnimatePresence>
        {activeMenu && <motion.div id={`menu-${activeMenu}`} className="mega-menu" initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: .2 }}>
          <div className="mega-menu-inner">
            {menus[activeMenu].groups.map((group) => <div className="mega-menu-group" key={group.title}>
              <p>{group.title}</p>
              {group.items.map(([title, description]) => <Link href={routes[title] ?? "/expertise"} key={title} onClick={closeMenus}>
                <span><strong>{title}</strong><small>{description}</small></span><i aria-hidden="true">↗</i>
              </Link>)}
            </div>)}
            <div className="mega-menu-note"><span>VEXTORGLOBAL / 01—06</span><p>Senior thinking.<br /><em>Measurable outcomes.</em></p><Link href="/contact" onClick={closeMenus}>Start a conversation <span aria-hidden="true">↗</span></Link></div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </motion.header>

    <AnimatePresence>
      {mobileOpen && <motion.div className="mobile-menu-panel" initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }} exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }} transition={{ duration: .4, ease: [0.22, 1, 0.36, 1] }}>
        <p className="mobile-menu-label">EXPLORE VEXTORGLOBAL</p>
        {[["Expertise", "/expertise"], ["Our approach", "/approach"], ["Selected impact", "/work"], ["Company", "/company"], ["Contact", "/contact"]].map(([label, href], index) => <Link key={href} href={href} onClick={closeMenus}><span>0{index + 1}</span>{label}<i aria-hidden="true">↗</i></Link>)}
        <p className="mobile-menu-foot">Technology without borders. Impact without limits.</p>
      </motion.div>}
    </AnimatePresence>
  </>
}
