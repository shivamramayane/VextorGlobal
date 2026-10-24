import type { Metadata } from "next"
import type { ReactNode } from "react"
import "../src/index.css"

export const metadata: Metadata = {
  title: { default: "VextorGlobal | Technology that moves business forward", template: "%s | VextorGlobal" },
  description: "A global technology partner for digital products, intelligent systems, experience design, and secure cloud platforms.",
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
