import { notFound } from "next/navigation"
import CapabilityDetailPage from "../../../src/components/CapabilityDetailPage"
import { capabilities } from "../../../src/content"
import { pageMetadata } from "../../../src/metadata"

export function generateStaticParams() {
  return capabilities.map(({ id }) => ({ slug: id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const capability = capabilities.find((item) => item.id === slug)
  if (!capability) return pageMetadata("Expertise", "Explore VextorGlobal technology capabilities.", "/expertise")
  return pageMetadata(capability.title, capability.detail, `/expertise/${slug}`)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!capabilities.some((item) => item.id === slug)) notFound()
  return <CapabilityDetailPage slug={slug} />
}
