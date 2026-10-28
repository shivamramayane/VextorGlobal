import Link from "next/link"

const footerGroups = [
  { label: "CAPABILITIES", links: [["Digital products", "/expertise/digital-products"], ["Intelligent systems", "/expertise/intelligent-systems"], ["Cloud & security", "/expertise/cloud-security"], ["Experience design", "/expertise/experience-design"], ["Custom software", "/expertise/custom-software"], ["IT consulting", "/expertise/it-consulting"]] },
  { label: "SOLUTIONS", links: [["Launch a digital product", "/expertise#digital-products"], ["Modernize operations", "/expertise#custom-software"], ["Scale with confidence", "/expertise#cloud-security"], ["Healthcare", "/company#industry-healthcare"]] },
  { label: "RESOURCES", links: [["Customers", "/customers"], ["Engagement models", "/pricing"], ["Insights", "/insights"], ["Our approach", "/approach"], ["Work", "/work"], ["Company", "/company"]] },
  { label: "GET IN TOUCH", links: [["hello@vextorglobal.com", "mailto:hello@vextorglobal.com"], ["Contact form", "/contact"]] },
] as const

export default function Footer() {
  return <footer className="site-footer">
    <div className="footer-topline"><span>VEXTORGLOBAL / TECHNOLOGY PARTNER</span><span>GLOBAL DELIVERY · SENIOR TEAMS</span></div>
    <div className="footer-main">
      <div className="footer-brand-column">
        <Link className="brand-lockup" href="/" aria-label="VextorGlobal home"><span className="brand-emblem" aria-hidden="true"><i /><i /><i /></span><span className="brand-wordmark">VEXTOR<span>GLOBAL</span></span></Link>
        <p>Digital products, software, and technology advisory.</p>
      </div>
      {footerGroups.map((group) => <div className="footer-group" key={group.label}>
        <p>{group.label}</p>
        {group.links.map(([label, href]) => <Link href={href} key={href}>{label}<span aria-hidden="true">{href.startsWith("mailto:") ? "↗" : "→"}</span></Link>)}
      </div>)}
    </div>
    <div className="footer-bottom"><span>© 2026 VextorGlobal. All rights reserved. · Legal details: TEST — replace before publishing. · No analytics or advertising cookies.</span><nav aria-label="Legal"><Link href="/privacy">Privacy Notice</Link><Link href="/terms">Terms</Link><a href="mailto:hello@vextorglobal.com">Contact <span aria-hidden="true">↗</span></a></nav></div>
  </footer>
}
