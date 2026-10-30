import type { MetadataRoute } from "next"
import { capabilities, caseStudies, insights } from "../src/content"
import { SITE_URL } from "../src/metadata"

const staticRoutes = [
  "",
  "/company",
  "/approach",
  "/work",
  "/customers",
  "/pricing",
  "/insights",
  "/expertise",
  "/contact",
  "/privacy",
  "/terms",
]

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...capabilities.map(({ id }) => `/expertise/${id}`),
    ...caseStudies.map(({ id }) => `/work/${id}`),
    ...insights.map(({ slug }) => `/insights/${slug}`),
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: route === "" || route === "/insights" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.split("/").filter(Boolean).length === 1 ? 0.8 : 0.6,
  }))
}
