export const capabilities = [
  { id: "digital-products", number: "01", title: "Digital products", category: "PRODUCT ENGINEERING", text: "High-performance web platforms and mobile experiences built to scale.", detail: "Shape a clear product direction, then design, build, and improve the digital experiences your customers and teams rely on.", tags: "Web platforms · Mobile apps", signal: "STRATEGY → DESIGN → BUILD", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=85", imageAlt: "Close view of a detailed electronic circuit board", mapImage: "/images/capability-map/product-engineering.jpg", mapImageAlt: "Engineer studying a circuit design on a computer screen", deliver: ["Product discovery and roadmap", "Web and mobile applications", "Commerce and customer portals", "Ongoing product evolution"], stack: ["Next.js", "React", "TypeScript", "Shopify", "Firebase"] },
  { id: "intelligent-systems", number: "02", title: "Intelligent systems", category: "SOFTWARE & AI", text: "Custom software and practical AI that turn complex operations into an advantage.", detail: "Apply AI and software engineering to real operational needs, with clear human oversight and a practical path to production.", tags: "AI solutions · Custom software", signal: "PURPOSE-BUILT SYSTEMS", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=85", imageAlt: "Abstract visualization of artificial intelligence and connected data", mapImage: "/images/capability-map/intelligent-systems.jpg", mapImageAlt: "Geometric blue brain illustration representing artificial intelligence", deliver: ["AI opportunity assessment", "Workflow automation", "Data-connected applications", "Production integration and evaluation"], stack: ["Python", "TypeScript", "OpenAI APIs", "AWS", "PostgreSQL"] },
  { id: "experience-design", number: "03", title: "Experience design", category: "PRODUCT STRATEGY & DESIGN", text: "Research-led interfaces that make sophisticated products feel remarkably simple.", detail: "Connect customer research, service design, and interface systems so useful experiences remain clear as products grow.", tags: "UI/UX · Product strategy", signal: "RESEARCH-LED DESIGN", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=900&q=85", imageAlt: "Designer reviewing a digital interface on a screen", mapImage: "/images/capability-map/experience-design.jpg", mapImageAlt: "Woman working on a laptop in a modern digital workspace", deliver: ["User research and journey mapping", "Product and service strategy", "Interface design systems", "Prototyping and usability validation"], stack: ["Figma", "FigJam", "React", "Storybook", "Accessibility"] },
  { id: "cloud-security", number: "04", title: "Cloud & security", category: "CLOUD ENGINEERING", text: "Resilient infrastructure, modern cloud architecture, and security by design.", detail: "Build and operate cloud foundations around reliability, observability, sensible access controls, and the needs of your service.", tags: "Cloud services · Cybersecurity", signal: "SECURE BY DESIGN", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85", imageAlt: "Digital visualization of a connected global network", mapImage: "/images/capability-map/cloud-security.jpg", mapImageAlt: "Close view of server equipment in a dark data room", deliver: ["Cloud architecture and migration", "Infrastructure as code", "CI/CD and observability", "Threat-aware engineering practices"], stack: ["AWS", "Vercel", "Docker", "Terraform", "GitHub Actions"] },
  { id: "custom-software", number: "05", title: "Custom software", category: "ENTERPRISE SYSTEMS", text: "Purpose-built enterprise systems, integrations, automation, and modernization.", detail: "Connect existing systems and build the software your operating model needs, with maintainability planned from the start.", tags: "Integrations · Automation", signal: "MADE FOR YOUR OPERATIONS", image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=900&q=85", imageAlt: "Code displayed on a software developer’s screen", mapImage: "/images/capability-map/custom-software.jpg", mapImageAlt: "Laptop displaying code for a software development project", deliver: ["Business systems and APIs", "Legacy modernization", "Data and platform integration", "Workflow automation"], stack: ["Node.js", "TypeScript", "PostgreSQL", "Stripe", "Firebase"] },
  { id: "it-consulting", number: "06", title: "IT consulting", category: "TECHNOLOGY ADVISORY", text: "Technology strategy, architecture advisory, delivery leadership, and transformation.", detail: "Make technology choices with a clear view of business priorities, delivery constraints, and long-term ownership.", tags: "Architecture · Transformation", signal: "CLEARER TECHNOLOGY DECISIONS", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85", imageAlt: "Technology team discussing a shared project plan", mapImage: "/images/capability-map/it-consulting.jpg", mapImageAlt: "Business professionals reviewing plans together at a meeting table", deliver: ["Technology and architecture assessment", "Platform selection and roadmaps", "Technical due diligence", "Fractional technology leadership"], stack: ["Cloud platforms", "Data platforms", "Product architecture", "Security practices", "Delivery systems"] },
] as const

export const industries = ["Financial services", "Healthcare", "Retail & commerce", "Logistics", "Public sector"] as const

// Fictional project concepts are identified as such in the UI; they are not client references.
export const projectConcepts = [
  { name: "Northstar Market", product: "Orbit Commerce", lead: "Maya Chen · Product Director", industry: "RETAIL & COMMERCE", brief: "Concept brief: bring discovery, checkout, and order operations into one clear customer journey." },
  { name: "Aster Health", product: "Aster Connect", lead: "Dr. Leena Rao · Digital Health Lead", industry: "HEALTHCARE", brief: "Concept brief: simplify patient-facing service workflows across digital channels." },
  { name: "Meridian Freight", product: "Meridian Control", lead: "Daniel Brooks · Operations Director", industry: "LOGISTICS", brief: "Concept brief: connect dispatch operations through a modernized logistics platform." },
  { name: "Canopy Finance", product: "Canopy Onboard", lead: "Amara Okafor · Product Owner", industry: "FINANCIAL SERVICES", brief: "Concept brief: make secure customer onboarding easier to understand and complete." },
  { name: "Tidal Software", product: "Tidal Workspace", lead: "Ethan Park · Platform Lead", industry: "SOFTWARE", brief: "Concept brief: evolve a SaaS product roadmap and strengthen its cloud foundations." },
  { name: "CivicSpring", product: "Civic Access", lead: "Priya Nair · Service Designer", industry: "PUBLIC SECTOR", brief: "Concept brief: improve access to clear, inclusive digital public services." },
] as const

// These are fictional concept projects, not client case studies or measured results.
export const caseStudies = [
  { id: "northstar-market", number: "01", client: "Northstar Market", product: "Orbit Commerce", industry: "RETAIL & COMMERCE", title: "One connected commerce journey, from discovery through delivery.", outcome: "Concept focus · Storefront, checkout, and order operations" },
  { id: "aster-health", number: "02", client: "Aster Health", product: "Aster Connect", industry: "HEALTHCARE", title: "A simpler digital front door for everyday care.", outcome: "Concept focus · Patient access and service workflows" },
  { id: "meridian-freight", number: "03", client: "Meridian Freight", product: "Meridian Control", industry: "LOGISTICS", title: "A clearer operating picture across a moving network.", outcome: "Concept focus · Dispatch visibility and platform integration" },
] as const

export const approachSteps = [
  { n: "01", title: "Discover", description: "Align leadership, users, data, and technical constraints around the real opportunity." },
  { n: "02", title: "Define", description: "Shape the product vision, architecture, roadmap, and success measures." },
  { n: "03", title: "Deliver", description: "Build in focused increments with senior multidisciplinary teams and total transparency." },
  { n: "04", title: "Evolve", description: "Measure performance, strengthen capability, and adapt the platform as your business grows." },
] as const

export const stackTools = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "Shopify", "Stripe", "AWS", "Vercel", "Firebase", "Supabase",
  "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Figma", "OpenAI",
] as const

export const engagementModels = [
  { id: "pilot", number: "01", title: "Pilot", summary: "A focused, fixed-scope engagement to test an opportunity or resolve a defined technical question.", details: ["Defined question and deliverables", "Short, agreed timeframe", "Decision-ready findings or working proof of concept"] },
  { id: "project", number: "02", title: "Project", summary: "A multidisciplinary team delivering a product or platform against an agreed brief and roadmap.", details: ["Shared scope and milestones", "Specialists assembled around the work", "Transparent delivery and handover"] },
  { id: "dedicated-team", number: "03", title: "Dedicated team", summary: "A consistent team that extends your organization and evolves a product or platform over time.", details: ["Stable team composition", "Embedded collaboration", "Roadmap-led continuous delivery"] },
] as const

export const faqs = [
  { question: "How do we choose an engagement model?", answer: "We start with your goals, constraints, and decision timeline. A pilot, project, or dedicated team can then be shaped around the work rather than a preset package." },
  { question: "Can your team work with our existing systems?", answer: "Yes. We begin by understanding your current architecture and constraints, then plan changes that fit your environment. Specific integrations are confirmed during discovery." },
  { question: "Who will we work with day to day?", answer: "The specialists doing the work stay close to your team. The exact roles and cadence are agreed during scoping." },
  { question: "How do you handle security and confidentiality?", answer: "We apply security-minded engineering practices and can discuss confidentiality requirements before project details are shared. Specific standards or certifications are only stated when verified." },
] as const

export const freeTools = [
  { number: "01", title: "Project estimate worksheet", detail: "Outline goals, users, integrations, and constraints before estimating effort.", href: "/contact?topic=project-estimate", action: "Plan a project" },
  { number: "02", title: "App cost planning guide", detail: "Compare scope and complexity drivers with a structured planning conversation.", href: "/contact?topic=app-cost", action: "Plan an application" },
  { number: "03", title: "Technology stack checklist", detail: "Review ownership, security, scalability, and delivery fit across your stack.", href: "/contact?topic=stack-checklist", action: "Review your stack" },
] as const

export const insights = [
  { slug: "choosing-a-cloud-modernization-path", category: "CLOUD & PLATFORM", title: "Choosing a cloud modernization path that fits the business", excerpt: "A practical way to weigh migration, refactoring, and replacement against risk and operating needs.", date: "EDITORIAL / TODO" },
  { slug: "turning-ai-experiments-into-useful-systems", category: "INTELLIGENT SYSTEMS", title: "Turning AI experiments into useful systems", excerpt: "Start with the workflow, define the human decision points, and measure the result before scaling.", date: "EDITORIAL / TODO" },
  { slug: "designing-products-around-real-work", category: "PRODUCT DESIGN", title: "Designing digital products around real work", excerpt: "How research and service design reveal the operational details that make or break a product.", date: "EDITORIAL / TODO" },
] as const
