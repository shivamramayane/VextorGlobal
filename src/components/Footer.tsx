import Link from "next/link"

const footerGroups = [
  { label: "CAPABILITIES", links: [["AI solutions", "/expertise/intelligent-systems"], ["Digital products", "/expertise/digital-products"], ["Experience design", "/expertise/experience-design"], ["Cloud & security", "/expertise/cloud-security"], ["Custom software", "/expertise/custom-software"], ["IT consulting", "/expertise/it-consulting"]] },
  { label: "AI SOLUTIONS", links: [["Build AI agents", "/expertise/intelligent-systems"], ["Add AI to a product", "/expertise/digital-products"], ["Plan an AI rollout", "/expertise/it-consulting"]] },
  { label: "RESOURCES", links: [["Customers", "/customers"], ["Engagement models", "/pricing"], ["Insights", "/insights"], ["Our approach", "/approach"], ["Work", "/work"], ["Company", "/company"]] },
  { label: "GET IN TOUCH", links: [["hello@vextorglobal.com", "mailto:hello@vextorglobal.com"], ["Contact form", "/contact"]] },
] as const

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-topline"><span>VEXTORGLOBAL / AI & TECHNOLOGY SERVICES</span><span>INDORE, MADHYA PRADESH, INDIA</span></div>
    <div className="footer-main">
      <div className="footer-brand-column">
        <Link className="brand-lockup" href="/" aria-label="VextorGlobal home"><span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span><span className="brand-wordmark">VEXTOR<span>GLOBAL</span></span></Link>
        <p>AI solutions, digital products, and the services behind them.</p>
      </div>
      {footerGroups.map((group) => <div className="footer-group" key={group.label}>
        <p>{group.label}</p>
        {group.links.map(([label, href]) => <Link href={href} key={href}>{label}<span aria-hidden="true">{href.startsWith("mailto:") ? "↗" : "→"}</span></Link>)}
      </div>)}
    </div>
    <div className="footer-bottom"><span>© 2026 VextorGlobal. Indore, Madhya Pradesh, India. · No analytics or advertising cookies.</span><nav aria-label="Legal"><Link href="/privacy">Privacy Notice</Link><Link href="/terms">Terms</Link><Link href="/privacy#cookies">Cookie notice</Link></nav></div>
  </footer>
}
