# VextorGlobal website

Next.js App Router project using React, TypeScript, and Tailwind CSS v4.

## Main files

- `app/` contains route pages, the root layout, metadata, and the contact API route.
- `src/components/Home.tsx` and `src/components/InteriorPage.tsx` contain the shared site UI.
- `src/index.css` contains global styles, typography, responsive layouts, and the CSS 3D scenes.
- `app/api/contact/route.ts` validates and records contact submissions, then sends them through Resend to the configured inbox.

## Development

- `pnpm dev` starts the Next.js development server on port 8443.
- `pnpm build` creates a production build.
- `pnpm start` serves the production build on port 8443.

Install packages with `pnpm install` before running the scripts. Set `RESEND_API_KEY` in `.env.local` to enable contact email. Submissions are also appended to `data/contact-submissions.jsonl` on persistent Node.js hosts; use durable storage when deploying to serverless hosting.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
