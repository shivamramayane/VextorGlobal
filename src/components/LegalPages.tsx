import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Eyebrow, Heading, InPageNav } from "./ui"

const legalIdentityNote = "TEST — replace with the registered legal entity name and postal address before publishing."

export function PrivacyPage() {
  return <main className="site-page additional-page legal-page"><Navbar />
    <section className="marketing-page-hero"><div className="marketing-page-hero-inner"><Eyebrow>WEBSITE INFORMATION</Eyebrow><Heading as="h1">Privacy, <em>plainly explained.</em></Heading><p>This test notice describes how an enquiry sent through this website is handled.</p></div></section>
    <div className="section-shell legal-layout"><InPageNav links={[{ label: "Who we are", href: "#controller" }, { label: "Enquiries", href: "#enquiries" }, { label: "Providers", href: "#providers" }, { label: "Cookies", href: "#cookies" }]} /><article className="article-body">
      <p className="legal-test-note"><strong>Test copy.</strong> {legalIdentityNote}</p>
      <section id="controller"><Eyebrow number="01">WHO HANDLES YOUR DATA</Eyebrow><h2>Website operator</h2><p>Controller name: <strong>{legalIdentityNote}</strong></p><p>Postal address: <strong>TEST — replace before publishing.</strong> For privacy questions, contact <a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a>.</p></section>
      <section id="enquiries"><Eyebrow number="02">CONTACT ENQUIRIES</Eyebrow><h2>What the form collects</h2><p>The contact form asks for your name, work email, company (optional), area of interest, and project context. We use these details to read and reply to your enquiry. The site does not add enquiry contacts to a marketing list.</p><p>Submitted enquiries are sent through Resend to <a href="mailto:maruhshivam48@gmail.com">maruhshivam48@gmail.com</a>, with replies directed to the address you provided. The website does not keep a local submission log. The receiving mailbox and email delivery providers may retain messages under their own settings and policies.</p><p>We keep enquiry information only as long as it is useful for responding and maintaining a record of business communications. You can ask to access, correct, delete, restrict, or object to the use of your details by emailing us. You may also complain to the relevant data protection authority. The lawful basis and retention period should be confirmed by the responsible VextorGlobal legal entity before this test notice is published.</p></section>
      <section id="providers"><Eyebrow number="03">SERVICE PROVIDERS</Eyebrow><h2>Email delivery</h2><p>Resend processes form details to deliver the message. Review its <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> for information about its handling of data. The operator should confirm the account’s region and any applicable international transfer safeguards before publication.</p></section>
      <section id="cookies"><Eyebrow number="04">COOKIES & SITE USE</Eyebrow><h2>No analytics or advertising cookies</h2><p>This site does not include analytics or advertising scripts. The current website code does not set analytics or advertising cookies. If optional tracking is added later, this notice and the site controls must be updated first.</p><p>Last reviewed: 27 October 2026.</p></section>
    </article></div><Footer /></main>
}

export function TermsPage() {
  return <main className="site-page additional-page legal-page"><Navbar />
    <section className="marketing-page-hero"><div className="marketing-page-hero-inner"><Eyebrow>WEBSITE INFORMATION</Eyebrow><Heading as="h1">Terms of <em>website use.</em></Heading><p>These test terms cover browsing this site and sending a project enquiry.</p></div></section>
    <div className="section-shell legal-layout"><InPageNav links={[{ label: "Operator", href: "#operator" }, { label: "Website content", href: "#content" }, { label: "Enquiries", href: "#enquiries" }, { label: "Contact", href: "#contact" }]} /><article className="article-body">
      <p className="legal-test-note"><strong>Test copy.</strong> {legalIdentityNote}</p>
      <section id="operator"><Eyebrow number="01">SITE OPERATOR</Eyebrow><h2>Who publishes this site</h2><p>This test website is presented as VextorGlobal. The legal entity name and postal address are not yet supplied and must replace the marked test fields before publication.</p></section>
      <section id="content"><Eyebrow number="02">INFORMATION</Eyebrow><h2>Website content</h2><p>Website content is general information about digital products, software, and technology services. It is not professional, legal, security, or financial advice, and it does not create a service agreement.</p><p>Project concepts are fictional examples and are not client references or claims of delivered results. A written agreement is required for any paid work.</p></section>
      <section id="enquiries"><Eyebrow number="03">CONTACT FORM</Eyebrow><h2>Project enquiries</h2><p>Sending a form is a request to discuss a possible project, not a commitment to buy or provide services. Do not include passwords, payment details, or sensitive personal information in the form.</p><p>Details submitted through the form are handled as described in the <Link href="/privacy">Privacy Notice</Link>.</p></section>
      <section id="contact"><Eyebrow number="04">QUESTIONS</Eyebrow><h2>Contact</h2><p>Questions about these test terms can be sent to <a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a>.</p><p>Last reviewed: 27 October 2026.</p></section>
    </article></div><Footer /></main>
}
