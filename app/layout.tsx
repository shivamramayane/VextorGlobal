import type { Metadata } from "next"
import type { ReactNode } from "react"
import { IBM_Plex_Mono, Instrument_Serif, Manrope, Outfit } from "next/font/google"
import "../src/index.css"

const bodyFont = Manrope({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-manrope", display: "swap" })
const displayFont = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-outfit", display: "swap" })
const editorialFont = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-instrument-serif", display: "swap" })
const monoFont = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-ibm-plex-mono", display: "swap" })

export const metadata: Metadata = {
  title: { default: "VextorGlobal | Technology that moves business forward", template: "%s | VextorGlobal" },
  description: "A global technology partner for digital products, intelligent systems, experience design, and secure cloud platforms.",
  applicationName: "VextorGlobal",
  openGraph: {
    type: "website",
    siteName: "VextorGlobal",
    title: "VextorGlobal | Technology that moves business forward",
    description: "A global technology partner for digital products, intelligent systems, experience design, and secure cloud platforms.",
  },
  twitter: {
    card: "summary",
    title: "VextorGlobal | Technology that moves business forward",
    description: "A global technology partner for digital products, intelligent systems, experience design, and secure cloud platforms.",
  },
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={`${bodyFont.variable} ${displayFont.variable} ${editorialFont.variable} ${monoFont.variable}`}><body>{children}</body></html>
}
