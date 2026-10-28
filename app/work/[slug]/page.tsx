import { notFound } from "next/navigation"
import WorkConceptDetailPage from "../../../src/components/WorkConceptDetailPage"
import { caseStudies } from "../../../src/content"
import { pageMetadata } from "../../../src/metadata"

export function generateStaticParams() {
  return caseStudies.map(({ id }) => ({ slug: id }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const study = caseStudies.find((item) => item.id === slug)
  if (!study) return pageMetadata("Work concepts", "Explore fictional VextorGlobal project concepts.", "/work")
  return pageMetadata(`${study.client} concept`, `${study.title} An illustrative fictional project concept, not client work or a measured result.`, `/work/${slug}`)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!caseStudies.some((item) => item.id === slug)) notFound()
  return <WorkConceptDetailPage slug={slug} />
}
