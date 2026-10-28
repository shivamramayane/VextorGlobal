import type { Metadata } from "next"

export function pageMetadata(title: string, description: string, path = ""): Metadata {
  return {
    title,
    description,
    alternates: path ? { canonical: path } : undefined,
    openGraph: { type: "website", siteName: "VextorGlobal", title: `${title} | VextorGlobal`, description, images: [{ url: "/og-vextorglobal.png", width: 1200, height: 630, alt: "VextorGlobal AI agents, automation, and digital products" }] },
    twitter: { card: "summary_large_image", title: `${title} | VextorGlobal`, description, images: ["/og-vextorglobal.png"] },
  }
}
