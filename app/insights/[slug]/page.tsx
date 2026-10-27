import { notFound } from "next/navigation"
import { ArticlePage } from "../../../src/components/AdditionalPages"
import { insights } from "../../../src/content"
import { pageMetadata } from "../../../src/metadata"

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = insights.find((item) => item.slug === slug)
  if (!article) return pageMetadata("Insights", "Practical thinking on technology and product delivery.", "/insights")
  return pageMetadata(article.title, article.excerpt, `/insights/${slug}`)
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  if (!insights.some((item) => item.slug === slug)) notFound()
  return <ArticlePage slug={slug} />
}
