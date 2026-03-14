# ParityPal — Copilot Instructions

## Stack
Next.js 16 app router, TypeScript, Tailwind CSS v4, shadcn/ui, Drizzle ORM, Turso (libSQL).

## Component usage
Always check `src/lib/registry.ts` before building UI. It lists every available component with import paths and descriptions. Prefer existing components over writing new ones. Do not invent or create new components unless explicitly instructed.

## Route index convention
`src/app/page.tsx` is the home page and serves as the live index of all routes in the app.

**When you create a new `src/app/[route]/page.tsx`, you must also add it to the route index in `src/app/page.tsx`.**

Each entry in the index should include:
- The route path as a link
- A one-line description of what the page is

Do not create routes without updating the index. This is how route discovery works in this project — there is no automatic scanning.

## Database
- Schema: `src/db/schema.ts`
- Client: `src/db/index.ts` — import `db` from here
- Queries: `src/db/queries.ts` — add named query functions here, import them in server components
- Never call `db` directly from a page — always go through a query function in `queries.ts`
- Run `npm run db:push` after schema changes

## Environment
- Secrets live in `.env.local` (never committed)
- Required vars: `TURSO_DATABASE_URL`, `TURSO_AUTH_TOKEN`

## Scripts
- `npm run dev` — start dev server
- `npm run db:push` — push schema to Turso
- `node --env-file=.env.local node_modules/.bin/tsx scripts/[file].ts` — run a script with env loaded

## Directives

- **Follow existing patterns**: Adhere to the established file structure, naming conventions, and coding styles present in the codebase.
- **Terminal trigger phrases**: Treat "send it", "ship it", "tee me up", "run it" as explicit permission to execute terminal commands for the current task rather than replying with text suggestions only.
- **Don't over-engineer**: Only make changes that are directly requested or clearly necessary. A bug fix doesn't need surrounding code cleaned up. A simple feature doesn't need extra configurability.
