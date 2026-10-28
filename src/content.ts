export const capabilities = [
  { id: "intelligent-systems", number: "01", title: "AI solutions", category: "AI ENGINEERING", text: "AI agents, automation and LLM integration that turn complex operations into an advantage.", detail: "Build AI agents and workflow automation around real operational needs, connect them to the right data and systems, and keep human oversight clear.", tags: "AI agents · Automation · LLM integration", signal: "PRACTICAL AI, BUILT TO WORK", mapImage: "/images/capability-map/intelligent-systems.jpg", mapImageAlt: "Geometric blue brain illustration representing artificial intelligence", deliver: ["AI opportunity and workflow assessment", "LLM integrations and AI agents", "Human-in-the-loop automation", "Evaluation, monitoring, and production rollout"], stack: ["TypeScript", "Next.js", "React", "Tailwind CSS"] },
  { id: "digital-products", number: "02", title: "Digital products", category: "PRODUCT ENGINEERING", text: "Web and mobile apps with AI built in.", detail: "Design and build web platforms and mobile apps with AI features integrated into useful customer and team workflows.", tags: "Web platforms · Mobile apps · Applied AI", signal: "PRODUCTS WITH AI BUILT IN", mapImage: "/images/capability-map/product-engineering.jpg", mapImageAlt: "Engineer studying a circuit design on a computer screen", deliver: ["Product discovery and roadmap", "Web and mobile applications", "AI-enabled customer and team features", "Commerce and customer portals"], stack: ["TypeScript", "React", "Next.js", "Motion"] },
  { id: "experience-design", number: "03", title: "Experience design", category: "PRODUCT STRATEGY & DESIGN", text: "Interfaces designed for AI-powered products.", detail: "Research and design interactions that make AI-powered products understandable, useful, and clear about where people stay in control.", tags: "AI product UX · UI systems · Research", signal: "HUMAN-CENTERED AI EXPERIENCES", mapImage: "/images/capability-map/experience-design.jpg", mapImageAlt: "Woman working on a laptop in a modern digital workspace", deliver: ["Research for AI-powered workflows", "Product and service strategy", "Interface and conversational design", "Prototyping and usability validation"], stack: ["Tailwind CSS", "React", "Motion", "Accessibility"] },
  { id: "cloud-security", number: "04", title: "Cloud & security", category: "CLOUD ENGINEERING", text: "Secure infrastructure to run AI reliably.", detail: "Create cloud foundations for AI and digital products, with security, reliability, observability, and sensible access controls built in.", tags: "AI infrastructure · Cloud · Security", signal: "SECURE, RELIABLE AI FOUNDATIONS", mapImage: "/images/capability-map/cloud-security.jpg", mapImageAlt: "Close view of server equipment in a dark data room", deliver: ["Cloud architecture for AI workloads", "Data access and security controls", "Infrastructure as code", "CI/CD and observability"], stack: ["Next.js", "Vercel", "Resend", "Security practices"] },
  { id: "custom-software", number: "05", title: "Custom software", category: "ENTERPRISE SYSTEMS", text: "Enterprise systems with AI and automation at the core.", detail: "Connect enterprise systems and build custom software that puts useful AI and automation into the heart of day-to-day operations.", tags: "AI integrations · Enterprise software · Automation", signal: "INTELLIGENCE IN EVERY WORKFLOW", mapImage: "/images/capability-map/custom-software.jpg", mapImageAlt: "Laptop displaying code for a software development project", deliver: ["AI-connected business systems and APIs", "Legacy modernization with automation", "Data and platform integration", "Workflow automation"], stack: ["TypeScript", "Next.js", "React", "Resend"] },
  { id: "it-consulting", number: "06", title: "IT consulting", category: "AI & TECHNOLOGY ADVISORY", text: "Find where AI pays off, then plan the rollout.", detail: "Identify where AI can create practical value, assess data and delivery readiness, and plan a responsible rollout your team can operate.", tags: "AI opportunity · Roadmaps · Readiness", signal: "A CLEAR PLAN FOR AI", mapImage: "/images/capability-map/it-consulting.jpg", mapImageAlt: "Business professionals reviewing plans together at a meeting table", deliver: ["AI opportunity and readiness assessment", "Use-case prioritization and business case", "Technology architecture and roadmap", "Adoption, governance, and rollout planning"], stack: ["AI readiness", "Architecture", "Product roadmaps", "Responsible AI"] },
] as const

export const industries = ["Financial services", "Healthcare", "Retail & commerce", "Logistics", "Public sector"] as const

// Fictional project concepts are identified as such in the UI; they are not client references.
export const projectConcepts = [
  { name: "Northstar Market", product: "Orbit Commerce", industry: "RETAIL & COMMERCE", brief: "Concept brief: bring discovery, checkout, and order operations into one clear customer journey." },
  { name: "Aster Health", product: "Aster Connect", industry: "HEALTHCARE", brief: "Concept brief: simplify patient-facing service workflows across digital channels." },
  { name: "Meridian Freight", product: "Meridian Control", industry: "LOGISTICS", brief: "Concept brief: connect dispatch operations through a modernized logistics platform." },
  { name: "Canopy Finance", product: "Canopy Onboard", industry: "FINANCIAL SERVICES", brief: "Concept brief: make secure customer onboarding easier to understand and complete." },
  { name: "Tidal Software", product: "Tidal Workspace", industry: "SOFTWARE", brief: "Concept brief: evolve a SaaS product roadmap and strengthen its cloud foundations." },
  { name: "CivicSpring", product: "Civic Access", industry: "PUBLIC SECTOR", brief: "Concept brief: improve access to clear, inclusive digital public services." },
] as const

// These are fictional concept projects, not client case studies or measured results.
export const caseStudies = [
  { id: "northstar-market", number: "01", client: "Northstar Market", product: "Orbit Commerce", industry: "RETAIL & COMMERCE", title: "One connected commerce journey, from discovery through delivery.", outcome: "Concept focus · Storefront, checkout, and order operations", capability: "digital-products", challenge: "Product discovery, checkout, and order support are treated as separate experiences, leaving customers to bridge the gaps.", direction: "Bring the storefront and post-purchase journey into one coherent product, with shared signals for customer and operations teams.", workstreams: ["Map the shopping and service journey", "Define storefront and commerce architecture", "Prototype checkout and order visibility", "Plan integration and phased delivery"], signals: ["Checkout completion", "Order status enquiries", "Fulfilment visibility"] },
  { id: "aster-health", number: "02", client: "Aster Health", product: "Aster Connect", industry: "HEALTHCARE", title: "A simpler digital front door for everyday care.", outcome: "Concept focus · Patient access and service workflows", capability: "experience-design", challenge: "Patients encounter disconnected steps when finding the right service and understanding what to do next.", direction: "Design a clear patient-facing service journey and the operational handoffs that support it, with clinical decisions kept with qualified care teams.", workstreams: ["Map patient service journeys", "Clarify information and accessibility needs", "Prototype service discovery and next steps", "Define privacy-aware integration requirements"], signals: ["Successful service discovery", "Task completion", "Support requests about next steps"] },
  { id: "meridian-freight", number: "03", client: "Meridian Freight", product: "Meridian Control", industry: "LOGISTICS", title: "A clearer operating picture across a moving network.", outcome: "Concept focus · Dispatch visibility and platform integration", capability: "custom-software", challenge: "Dispatch teams rely on separate systems to coordinate updates, exceptions, and handoffs across a moving network.", direction: "Explore a shared operations view that connects existing tools and makes important exceptions easier to act on.", workstreams: ["Map dispatch events and existing systems", "Prioritize operational exceptions", "Prototype a shared status view", "Plan API integration and ownership"], signals: ["Time to identify exceptions", "Manual status handoffs", "Data freshness across operations"] },
] as const

export const approachSteps = [
  { n: "01", title: "Discover", description: "Align leadership, users, data, and technical constraints around the real opportunity." },
  { n: "02", title: "Define", description: "Shape the product vision, architecture, roadmap, and success measures." },
  { n: "03", title: "Deliver", description: "Build in focused increments, share progress, and review decisions as the work develops." },
  { n: "04", title: "Evolve", description: "Measure performance, strengthen capability, and adapt the platform as your business grows." },
] as const

export const stackTools = [
  "TypeScript", "Next.js", "React", "Tailwind CSS", "Motion", "Lenis", "Resend",
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
  { number: "01", title: "Project scope", detail: "Outline goals, users, integrations, and constraints with our team.", href: "/contact?topic=project-estimate", action: "Start with this topic" },
  { number: "02", title: "Application planning", detail: "Talk through the scope and complexity that shape an application.", href: "/contact?topic=app-cost", action: "Start with this topic" },
  { number: "03", title: "Technology stack", detail: "Bring your current setup and questions to a focused conversation.", href: "/contact?topic=stack-checklist", action: "Start with this topic" },
] as const

export const insights = [
  { slug: "choosing-a-cloud-modernization-path", category: "CLOUD & PLATFORM", title: "Choosing a cloud modernization path that fits the business", excerpt: "A practical way to weigh migration, refactoring, and replacement against risk and operating needs." },
  { slug: "turning-ai-experiments-into-useful-systems", category: "AI SOLUTIONS", title: "Turning AI experiments into useful systems", excerpt: "Start with the workflow, define the human decision points, and measure the result before scaling." },
  { slug: "designing-products-around-real-work", category: "PRODUCT DESIGN", title: "Designing digital products around real work", excerpt: "How research and service design reveal the operational details that make or break a product." },
] as const
