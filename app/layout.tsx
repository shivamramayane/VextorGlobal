import type { Metadata } from "next"
import type { ReactNode } from "react"
import { IBM_Plex_Mono, Instrument_Serif, Manrope, Outfit } from "next/font/google"
import Script from "next/script"
import { headers } from "next/headers"
import "../src/index.css"
import SmoothScrollProvider from "../src/components/SmoothScrollProvider"
import { SITE_URL } from "../src/metadata"

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "VextorGlobal",
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: "VextorGlobal is an AI agency building AI agents, automation and intelligent digital products, from web and mobile apps to cloud platforms.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    addressCountry: "IN",
  },
  sameAs: ["https://www.linkedin.com/company/vextorglobal"],
}

const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" })
const displayFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit", display: "swap" })
const editorialFont = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" })
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ibm-plex-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  other: { "google-adsense-account": "ca-pub-4362515316719150" },
  title: { default: "VextorGlobal | AI agents, automation, and intelligent products", template: "%s | VextorGlobal" },
  description: "VextorGlobal is an AI agency building AI agents, automation and intelligent digital products, from web and mobile apps to cloud platforms.",
  applicationName: "VextorGlobal",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "VextorGlobal",
    title: "VextorGlobal | AI agents, automation, and intelligent products",
    description: "VextorGlobal is an AI agency building AI agents, automation and intelligent digital products, from web and mobile apps to cloud platforms.",
    images: [{ url: "/og-vextorglobal.png", width: 1200, height: 630, alt: "VextorGlobal AI agents, automation, and digital products" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VextorGlobal | AI agents, automation, and intelligent products",
    description: "VextorGlobal is an AI agency building AI agents, automation and intelligent digital products, from web and mobile apps to cloud platforms.",
    images: ["/og-vextorglobal.png"],
  },
}

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined

  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${editorialFont.variable} ${monoFont.variable}`}><body><Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4362515316719150" strategy="beforeInteractive" async crossOrigin="anonymous" nonce={nonce} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} /><SmoothScrollProvider>{children}</SmoothScrollProvider></body></html>
}
