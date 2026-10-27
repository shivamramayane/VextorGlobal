import type { Metadata } from "next"

export function pageMetadata(title: string, description: string, _path = ""): Metadata {
  return {
    title,
    description,
    openGraph: { type: "website", siteName: "VextorGlobal", title: `${title} | VextorGlobal`, description },
    twitter: { card: "summary_large_image", title: `${title} | VextorGlobal`, description },
  }
}
