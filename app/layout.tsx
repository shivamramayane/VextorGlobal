import type { Metadata } from "next"
import type { ReactNode } from "react"
import { IBM_Plex_Mono, Instrument_Serif, Manrope, Outfit } from "next/font/google"
import "../src/index.css"
import SmoothScrollProvider from "../src/components/SmoothScrollProvider"

const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" })
const displayFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit", display: "swap" })
const editorialFont = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" })
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ibm-plex-mono", display: "swap" })

export const metadata: Metadata = {
  metadataBase: new URL("https://vextor-global.vercel.app"),
  title: { default: "VextorGlobal | Digital products, software, and technology advisory", template: "%s | VextorGlobal" },
  description: "VextorGlobal designs and builds web platforms, mobile apps, custom software, and cloud systems for businesses.",
  applicationName: "VextorGlobal",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    type: "website",
    siteName: "VextorGlobal",
    title: "VextorGlobal | Digital products, software, and technology advisory",
    description: "VextorGlobal designs and builds web platforms, mobile apps, custom software, and cloud systems for businesses.",
    images: [{ url: "/og-vextorglobal.png", width: 1200, height: 630, alt: "VextorGlobal digital products, software, and technology advisory" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VextorGlobal | Digital products, software, and technology advisory",
    description: "VextorGlobal designs and builds web platforms, mobile apps, custom software, and cloud systems for businesses.",
    images: ["/og-vextorglobal.png"],
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${editorialFont.variable} ${monoFont.variable}`}><body><SmoothScrollProvider>{children}</SmoothScrollProvider></body></html>
}
