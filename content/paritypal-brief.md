# ParityPal — Project Brief

## What Is It

A semantic search reference database for Rubik's cube and twisty puzzle algorithms, notation, solving guides, and parity cases. Built for practical solvers — not competitive speedcubers — who need to quickly look up a case, verify notation, and step through an algorithm without digging through 3 sites and scrubbing YouTube videos.

**The core loop:**
1. Vague search ("4x4 corner parity", "two edges flipped") → finds the right case
2. Visual confirms "yes that's my situation"
3. Pick an alg (easy → fast options)
4. Step through it
5. Done, back to solving

---

## Positioning

- **AlgDB** — exhaustive speedsolving db, jargon-heavy, 3x3/4x4 focused
- **Speedsolving Wiki** — encyclopedia, broken search
- **ParityPal** — practical reference for real solvers, weird puzzles included (megaminx, teraminx, mastermorphix, 10x10, etc.)

The content that doesn't exist anywhere good yet: center orientation cases, big cube parity, solving guides for shape mods and weird twisty puzzles.

---

## MVP (v1)

A database and search engine. That's it.

- Search "4x4 parity" → several relevant case results
- Search "notation 5x5" → here it is
- Clean result cards, same widget for every result type
- No interactive cube yet — that's v2

**Content strategy:** top-down, not bottom-up. Document actual pain points — the cases that make you go to 3 sites. Not every OLL case ever.

---

## Future (v2+)

- **Trainer skin** — stripped back, just affected pieces, for drilling
- **Solver skin** — full cube, real state, scramble/solve/midsolve buttons
- **Scrubber** — timeline for stepping through alg move by move at any pace
- **SERP widget** — embeddable result small enough to fit a Google search snippet
- **Semantic search** — embeddings + vector search so "two edges look swapped" finds the right case

---

## Contributions

- **v1:** GitHub only — PRs to add/edit cases, developer contributors
- **v2+:** Web form that opens a PR under the hood for non-dev cubers

Open source from day one.

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js |
| Hosting | Vercel |
| Database | Turso (edge SQLite) |
| ORM | Drizzle |
| Language | TypeScript |
| Asset Storage | Cloudflare R2 |
| IDs | nanoid |
| Version Control | GitHub |

---

## Schema

### `puzzles`
| Field | Type | Notes |
|---|---|---|
| id | nanoid | |
| name | text | e.g. "4x4 Rubik's Cube" |
| slug | text | e.g. "4x4" |
| size | text | e.g. "4x4", "megaminx" |

### `cases`
| Field | Type | Notes |
|---|---|---|
| id | nanoid | |
| puzzle_id | ref → puzzles | |
| title | text | Display name |
| slug | text | URL slug, unique |
| description | text | Plain language, powers search |
| image_id | text | Asset key in R2 |
| tags | JSON array | e.g. ["parity", "OLL", "edges", "advanced"] |
| created_at | timestamp | Set on insert, never changes |
| updated_at | timestamp | Bumped on every edit |

### `algs`
| Field | Type | Notes |
|---|---|---|
| id | nanoid | |
| case_id | ref → cases | |
| notation | text | e.g. "r U2 x r U2 r U2 r' U2 l U2 r' U2 r U2 r' U2 r'" |
| move_count | integer | |
| difficulty | text | "beginner" / "intermediate" / "advanced" |
| notes | text | e.g. "best for speed", "easiest to learn" |

### `aliases`
| Field | Type | Notes |
|---|---|---|
| id | nanoid | |
| case_id | ref → cases | |
| alias | text | Alternative search terms e.g. "wing flip", "two edges swapped" |

---

## Schema Notes

- **Tags replace category + stage + related_cases** — a tag of `oll` replaces category, tags like `parity` + `4x4` replace filtering, related cases are computed by tag overlap
- **image_id not image_url** — URL constructed at app layer from image_id, so storage provider can change without db migration
- **aliases are the semantic search magic for v1** — "two edges look swapped" maps to the right case without needing embeddings yet
- **difficulty lives on algs not cases** — same case can have a beginner alg (more moves, easier to remember) and an advanced alg (fewer moves, faster)

---

## Drizzle Setup

```bash
npm install drizzle-orm @libsql/client
npm install -D drizzle-kit
```

1. Write schema in TypeScript
2. Configure drizzle.config.ts with Turso URL + auth token
3. Run `drizzle-kit push` to sync to Turso
4. Seed with real cases immediately (4x4 OLL parity, 5x5 edge parity, etc.)

---

## First Seed Cases (suggested)

- 4x4 OLL parity
- 4x4 PLL parity  
- 5x5 edge parity
- 4x4/5x5 center orientation
- Megaminx last layer parity
