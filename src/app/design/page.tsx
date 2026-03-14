import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Bold,
  InlineCode,
  List,
  ListItem,
  Small,
} from "@/components/typography";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function ArchitectureBriefPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 space-y-12">
      <div className="space-y-3">
        <H1>Design</H1>
        <Paragraph className="text-muted-foreground">
          How the app is put together and why.
        </Paragraph>
      </div>

      <Separator />

      <section className="space-y-4">
        <H2>SPA vs. standard Next.js pages</H2>
        <Paragraph>
          The original instinct was one route, URL-driven state, everything on
          one page. That works — but standard Next.js routing is actually
          simpler here and gives us more for free.
        </Paragraph>
        <Paragraph>
          The search experience <Bold>feels</Bold> like one continuous surface
          because Next.js does client-side navigation between routes by default.
          There's no full page reload. The URL changes, the content updates,
          and the browser back button works — but we didn't write any client
          state to make it happen.
        </Paragraph>
        <Alert>
          <AlertTitle>The key insight</AlertTitle>
          <AlertDescription>
            Next.js App Router pages are server components by default. The
            search query happens on the server, data arrives pre-rendered, and
            there's zero client JS involved in a typical search → result →
            detail flow.
          </AlertDescription>
        </Alert>
      </section>

      <section className="space-y-6">
        <H2>Three routes, one experience</H2>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>
                  <InlineCode>/</InlineCode>
                </CardTitle>
                <Badge variant="secondary">Home</Badge>
              </div>
              <CardDescription>
                Just the search bar. Nothing else.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Paragraph>
                A plain HTML <InlineCode>&lt;form action="/search"&gt;</InlineCode> with
                a text input named <InlineCode>q</InlineCode>. When submitted it
                navigates to <InlineCode>/search?q=...</InlineCode>. No
                JavaScript required — works without JS at all.
              </Paragraph>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>
                  <InlineCode>/search?q=...</InlineCode>
                </CardTitle>
                <Badge variant="secondary">SERP</Badge>
              </div>
              <CardDescription>
                Results list. One card per case.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Paragraph>
                Reads <InlineCode>searchParams.q</InlineCode> server-side, runs
                a SQL query against Turso, renders result cards. The query hits{" "}
                <InlineCode>cases.title</InlineCode>,{" "}
                <InlineCode>cases.description</InlineCode>, and the{" "}
                <InlineCode>aliases</InlineCode> table — so "two edges swapped"
                finds the right case even if those exact words aren't in the
                title.
              </Paragraph>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3">
                <CardTitle>
                  <InlineCode>/cases/[slug]</InlineCode>
                </CardTitle>
                <Badge variant="secondary">Case Detail</Badge>
              </div>
              <CardDescription>
                Full case view. Algs, difficulty, notes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Paragraph>
                Reads the slug from the URL, fetches the case with all its algs
                and aliases. Shareable, bookmarkable, linkable. Eventually this
                is the page that gets embedded in a SERP snippet.
              </Paragraph>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <H2>Search query strategy</H2>
        <Paragraph>
          v1 search is plain SQL — no embeddings, no vector index. The{" "}
          <InlineCode>aliases</InlineCode> table does the semantic heavy
          lifting: natural-language phrases like "single edge flipped" or
          "impossible PLL" are stored as aliases and matched with{" "}
          <InlineCode>LIKE</InlineCode>.
        </Paragraph>
        <H3>Ranking logic</H3>
        <Paragraph>Results are ordered by match quality:</Paragraph>
        <List ordered>
          <ListItem>
            <Bold>Title match</Bold> — the search term appears in the case
            title (highest confidence)
          </ListItem>
          <ListItem>
            <Bold>Alias match</Bold> — the term matches a stored alias
          </ListItem>
          <ListItem>
            <Bold>Description match</Bold> — the term appears somewhere in the
            plain-language description (broadest, lowest confidence)
          </ListItem>
        </List>
        <Paragraph>
          In practice this is a <InlineCode>UNION</InlineCode> of three queries
          with a priority column, deduplicated by case ID.
        </Paragraph>
      </section>

      <Separator />

      <section className="space-y-4">
        <H2>Data flow</H2>
        <Paragraph>
          All data access lives in <InlineCode>src/db/queries.ts</InlineCode>.
          Pages call query functions directly — no API layer, no server actions,
          no <InlineCode>fetch()</InlineCode>. Server components can import and
          await async functions directly.
        </Paragraph>
        <Card>
          <CardContent className="pt-6 space-y-4">
            <H4>What each file does</H4>
            <List>
              <ListItem>
                <InlineCode>src/db/schema.ts</InlineCode> — table definitions
              </ListItem>
              <ListItem>
                <InlineCode>src/db/index.ts</InlineCode> — the{" "}
                <InlineCode>db</InlineCode> client singleton
              </ListItem>
              <ListItem>
                <InlineCode>src/db/queries.ts</InlineCode> — named query
                functions
              </ListItem>
              <ListItem>
                <InlineCode>src/app/search/page.tsx</InlineCode> — calls{" "}
                <InlineCode>searchCases(q)</InlineCode>, renders cards
              </ListItem>
              <ListItem>
                <InlineCode>src/app/cases/[slug]/page.tsx</InlineCode> — calls{" "}
                <InlineCode>getCase(slug)</InlineCode>, renders detail
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </section>

      <Separator />

      <section className="space-y-6">
        <H2>Data model</H2>
        <Paragraph>
          Four tables. The hierarchy is:{" "}
          <Bold>puzzle → case → alg</Bold>, with aliases hanging off cases.
        </Paragraph>
        <div className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle><InlineCode>puzzles</InlineCode></CardTitle>
              <CardDescription>The cube type. 4x4, 5x5, Megaminx, etc.</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                <InlineCode>id</InlineCode>, <InlineCode>name</InlineCode>,{" "}
                <InlineCode>slug</InlineCode>. Every case belongs to a puzzle.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle><InlineCode>cases</InlineCode></CardTitle>
              <CardDescription>A specific parity or algorithm scenario.</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                <InlineCode>title</InlineCode>, <InlineCode>slug</InlineCode>,{" "}
                <InlineCode>description</InlineCode>, <InlineCode>tags</InlineCode>{" "}
                (JSON array), <InlineCode>puzzleId</InlineCode>. This is the
                primary searchable entity.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle><InlineCode>algs</InlineCode></CardTitle>
              <CardDescription>One or more algorithms per case, sorted by difficulty.</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                <InlineCode>notation</InlineCode>, <InlineCode>moveCount</InlineCode>,{" "}
                <InlineCode>difficulty</InlineCode> (beginner / intermediate / advanced),{" "}
                <InlineCode>notes</InlineCode>. Multiple algs per case is the norm — there's
                usually a short expert alg and a longer beginner-friendly one.
              </Paragraph>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle><InlineCode>aliases</InlineCode></CardTitle>
              <CardDescription>All the other ways people refer to a case.</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph>
                Just <InlineCode>caseId</InlineCode> and <InlineCode>alias</InlineCode>.
                This is what makes search actually useful — see the alias system section below.
              </Paragraph>
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator />

      <section className="space-y-4">
        <H2>The alias system</H2>
        <Paragraph>
          The most interesting part of the data model. Cubers don't have
          standardized names for cases — the same situation gets called
          different things depending on who taught you, what country you're
          from, and what era you learned it in.
        </Paragraph>
        <Paragraph>
          A single case might be known as:
        </Paragraph>
        <List>
          <ListItem>4x4 OLL parity</ListItem>
          <ListItem>last layer parity</ListItem>
          <ListItem>single dedge flip</ListItem>
          <ListItem>impossible OLL</ListItem>
          <ListItem>wing edge parity</ListItem>
        </List>
        <Paragraph>
          Without aliases, a search for "impossible OLL" returns nothing even
          though the case exists. With aliases, every phrase someone might
          plausibly use is stored and matched. The{" "}
          <InlineCode>aliases</InlineCode> table is what transforms a naive
          keyword search into something that feels domain-aware.
        </Paragraph>
        <Alert>
          <AlertTitle>Aliases are content, not code</AlertTitle>
          <AlertDescription>
            Adding a new alias is a database insert, not a code change. As the
            alias set grows, search quality improves automatically — no
            redeployment needed.
          </AlertDescription>
        </Alert>
      </section>

      <Separator />

      <section className="space-y-4">
        <H2>What's next for search</H2>
        <Paragraph>
          v1 uses <InlineCode>LIKE '%query%'</InlineCode> with prioritized
          ranking. It's fast, requires no infrastructure, and works well when
          the alias set is comprehensive. But it has real limits.
        </Paragraph>
        <H3>The gaps</H3>
        <List>
          <ListItem>
            <Bold>No fuzzy matching.</Bold> A typo in "megaminx" returns
            nothing.
          </ListItem>
          <ListItem>
            <Bold>No stemming.</Bold> "flipped edge" won't match "edge flip".
          </ListItem>
          <ListItem>
            <Bold>No semantic understanding.</Bold> "I can't solve the last
            layer on my 4x4" is a valid query that currently returns nothing.
          </ListItem>
        </List>
        <H3>Where this goes</H3>
        <Paragraph>
          The two most likely paths forward are SQLite FTS5 (full-text search
          built into libSQL — adds stemming, ranking, and prefix matching with
          zero added infrastructure) and embedding-based semantic search (store
          a vector per case, match on meaning rather than keywords — powerful
          but adds operational complexity).
        </Paragraph>
        <Paragraph>
          FTS5 is probably the right next step. It handles stemming and fuzzy
          matching without any external service, and Turso supports it natively.
        </Paragraph>
      </section>

      <Separator />

      <section className="space-y-4">
        <H2>Repo structure</H2>
        <List>
          <ListItem>
            <InlineCode>src/app/page.tsx</InlineCode> — home page. Also the
            route index — every new route must be listed here.
          </ListItem>
          <ListItem>
            <InlineCode>src/app/search/page.tsx</InlineCode> — SERP
          </ListItem>
          <ListItem>
            <InlineCode>src/app/cases/[slug]/page.tsx</InlineCode> — case
            detail
          </ListItem>
          <ListItem>
            <InlineCode>src/db/schema.ts</InlineCode> — table definitions,
            single source of truth for types
          </ListItem>
          <ListItem>
            <InlineCode>src/db/index.ts</InlineCode> — db client singleton
          </ListItem>
          <ListItem>
            <InlineCode>src/db/queries.ts</InlineCode> — all data access.
            Never call <InlineCode>db</InlineCode> directly from a page.
          </ListItem>
          <ListItem>
            <InlineCode>src/components/ui/</InlineCode> — shadcn components
          </ListItem>
          <ListItem>
            <InlineCode>src/components/typography/</InlineCode> — typed
            wrappers for H1–H6, Paragraph, InlineCode, etc.
          </ListItem>
          <ListItem>
            <InlineCode>src/lib/registry.ts</InlineCode> — every available
            component with import paths and descriptions
          </ListItem>
          <ListItem>
            <InlineCode>scripts/seed.ts</InlineCode> — seed the database
          </ListItem>
          <ListItem>
            <InlineCode>.github/copilot-instructions.md</InlineCode> — Copilot
            conventions for this repo
          </ListItem>
        </List>
      </section>
    </div>
  );
}
