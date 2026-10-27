export const capabilities = [
  { id: "digital-products", number: "01", title: "Digital products", category: "PRODUCT ENGINEERING", text: "High-performance web platforms and mobile experiences built to scale.", detail: "Web platforms, mobile applications, commerce, and connected customer experiences.", tags: "Web platforms · Mobile apps", signal: "STRATEGY → DESIGN → BUILD" },
  { id: "intelligent-systems", number: "02", title: "Intelligent systems", category: "SOFTWARE & AI", text: "Custom software and practical AI that turn complex operations into an advantage.", detail: "Responsible AI strategy, intelligent workflows, copilots, and production-grade models.", tags: "AI solutions · Custom software", signal: "PURPOSE-BUILT SYSTEMS" },
  { id: "experience-design", number: "03", title: "Experience design", category: "PRODUCT STRATEGY & DESIGN", text: "Research-led interfaces that make sophisticated products feel remarkably simple.", detail: "Product strategy, research, service design, UI systems, and rapid prototyping.", tags: "UI/UX · Product strategy", signal: "RESEARCH-LED DESIGN" },
  { id: "cloud-security", number: "04", title: "Cloud & security", category: "CLOUD ENGINEERING", text: "Resilient infrastructure, modern cloud architecture, and security by design.", detail: "Cloud architecture, DevOps, observability, cybersecurity, and managed resilience.", tags: "Cloud services · Cybersecurity", signal: "SECURE BY DESIGN" },
  { id: "custom-software", number: "05", title: "Custom software", category: "ENTERPRISE SYSTEMS", text: "Purpose-built enterprise systems, integrations, automation, and modernization.", detail: "Purpose-built enterprise systems, integrations, automation, and modernization.", tags: "Integrations · Automation", signal: "MADE FOR YOUR OPERATIONS" },
  { id: "it-consulting", number: "06", title: "IT consulting", category: "TECHNOLOGY ADVISORY", text: "Technology strategy, architecture advisory, delivery leadership, and transformation.", detail: "Technology strategy, architecture advisory, delivery leadership, and transformation.", tags: "Architecture · Transformation", signal: "CLEARER TECHNOLOGY DECISIONS" },
] as const

export const industries = ["Financial services", "Healthcare", "Retail & commerce", "Logistics", "Public sector"] as const

export const caseStudies = [
  { id: "logistics", number: "01", industry: "GLOBAL LOGISTICS", title: "A unified operations platform across 14 markets.", outcome: "3.2× faster operations", value: 3.2, suffix: "×", decimals: 1 },
  { id: "financial-services", number: "02", industry: "FINANCIAL SERVICES", title: "Secure cloud migration without business interruption.", outcome: "41% lower cloud spend", value: 41, suffix: "%", decimals: 0 },
  { id: "retail-logistics", number: "03", industry: "RETAIL TECHNOLOGY", title: "A commerce ecosystem built for international scale.", outcome: "+68% conversion", value: 68, prefix: "+", suffix: "%", decimals: 0 },
] as const

export const approachSteps = [
  { n: "01", title: "Discover", description: "Align leadership, users, data, and technical constraints around the real opportunity." },
  { n: "02", title: "Define", description: "Shape the product vision, architecture, roadmap, and success measures." },
  { n: "03", title: "Deliver", description: "Build in focused increments with senior multidisciplinary teams and total transparency." },
  { n: "04", title: "Evolve", description: "Measure performance, strengthen capability, and adapt the platform as your business grows." },
]
