import Link from "next/link"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { Eyebrow, Heading, InPageNav } from "./ui"

export function PrivacyPage() {
  return <main className="site-page additional-page legal-page"><Navbar />
    <section className="marketing-page-hero"><div className="marketing-page-hero-inner"><Eyebrow>WEBSITE INFORMATION</Eyebrow><Heading as="h1">Privacy, <em>plainly explained.</em></Heading><p>This notice describes how an enquiry sent through this website is handled.</p></div></section>
    <div className="section-shell legal-layout"><InPageNav links={[{ label: "Who we are", href: "#controller" }, { label: "Enquiries", href: "#enquiries" }, { label: "Providers", href: "#providers" }, { label: "Cookies", href: "#cookies" }]} /><article className="article-body">
      <section id="controller"><Eyebrow number="01">WHO HANDLES YOUR DATA</Eyebrow><h2>Website operator</h2><p>Website name: <strong>VextorGlobal</strong></p><p>Postal address: <strong>Indore, Madhya Pradesh, India.</strong> For privacy questions, contact <a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a>.</p></section>
      <section id="enquiries"><Eyebrow number="02">CONTACT ENQUIRIES</Eyebrow><h2>What the form collects</h2><p>The contact form asks for your name, work email, company (optional), area of interest, and project context. It also asks you to confirm that you have read this notice. We use the details to respond to the enquiry and do not add them to a marketing list.</p><p>Submissions are sent through Resend to the contact inbox configured by VextorGlobal. Replies go to the email address supplied in the form. This website does not keep a separate database copy; the email service and receiving mailbox may retain messages under their own settings and policies. For privacy questions or requests, email <a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a>.</p><p>We use enquiry details only as needed to review and respond to the request, then remove them from our active inbox when they are no longer needed, subject to any applicable legal obligations.</p></section>
      <section id="providers"><Eyebrow number="03">SERVICE PROVIDER</Eyebrow><h2>Email delivery</h2><p>Resend processes contact form details to deliver email notifications. Review its <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a> for information about its data handling.</p></section>
      <section id="cookies"><Eyebrow number="04">COOKIES & SITE USE</Eyebrow><h2>No analytics or advertising cookies</h2><p>This site does not include analytics or advertising scripts. The current website code does not set analytics or advertising cookies. If optional tracking is added later, this notice and the site controls must be updated first.</p><p>Last reviewed: 28 October 2026.</p></section>
    </article></div><Footer /></main>
}

export function TermsPage() {
  return <main className="site-page additional-page legal-page"><Navbar />
    <section className="marketing-page-hero"><div className="marketing-page-hero-inner"><Eyebrow>WEBSITE INFORMATION</Eyebrow><Heading as="h1">Terms of <em>website use.</em></Heading><p>These terms cover browsing this site and sending a project enquiry.</p></div></section>
    <div className="section-shell legal-layout"><InPageNav links={[{ label: "Operator", href: "#operator" }, { label: "Website content", href: "#content" }, { label: "Enquiries", href: "#enquiries" }, { label: "Contact", href: "#contact" }]} /><article className="article-body">
      <section id="operator"><Eyebrow number="01">SITE OPERATOR</Eyebrow><h2>Who publishes this site</h2><p>This website is published under the name VextorGlobal and is based in Indore, Madhya Pradesh, India. For questions about the site or these terms, email <a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a>.</p></section>
      <section id="content"><Eyebrow number="02">INFORMATION</Eyebrow><h2>Website content</h2><p>Website content is general information about digital products, software, and technology services. It is not professional, legal, security, or financial advice, and it does not create a service agreement.</p><p>Project concepts are fictional examples and are not client references or claims of delivered results. A written agreement is required for any paid work.</p></section>
      <section id="enquiries"><Eyebrow number="03">CONTACT FORM</Eyebrow><h2>Project enquiries</h2><p>Sending a form is a request to discuss a possible project, not a commitment to buy or provide services. Do not include passwords, payment details, or sensitive personal information in the form.</p><p>Details submitted through the form are handled as described in the <Link href="/privacy">Privacy Notice</Link>.</p></section>
      <section id="contact"><Eyebrow number="04">QUESTIONS</Eyebrow><h2>Contact</h2><p>Questions about these terms can be sent to <a href="mailto:hello@vextorglobal.com">hello@vextorglobal.com</a>.</p><p>Last reviewed: 28 October 2026.</p></section>
    </article></div><Footer /></main>
}
