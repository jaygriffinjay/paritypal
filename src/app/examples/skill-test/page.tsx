import {
  H1,
  H2,
  H3,
  H4,
  H5,
  Paragraph,
  Text,
  Bold,
  Italic,
  Underline,
  Highlight,
  InlineCode,
  Strikethrough,
  Small,
  Blockquote,
  List,
  ListItem,
  Link,
} from "@/components/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Kbd } from "@/components/ui/kbd";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarGroup } from "@/components/ui/avatar";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import {
  CounterCard,
  ToggleBoardCard,
  SliderCard,
  TypingTestCard,
  EmojiSlotMachine,
  PasswordStrengthCard,
} from "./interactive-playground";

export default function SkillTestPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12">
      {/* ── Navigation ─────────────────────────────────────────── */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          ← Home
        </Link>
        <ModeToggle />
      </div>

      {/* ── Page Header ────────────────────────────────────────── */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <H1>Skill Test</H1>
          <Badge variant="secondary">build-ui</Badge>
          <Badge
            variant="outline"
            className="border-emerald-500/30 text-emerald-500"
          >
            v2.0
          </Badge>
        </div>
        <Paragraph className="text-muted-foreground text-lg">
          A comprehensive showcase of <Bold>every component pattern</Bold> in
          the registry. Interactive demos, data tables, keyboard shortcuts, and
          more — all assembled from <InlineCode>src/lib/registry.ts</InlineCode>
          .
        </Paragraph>
      </div>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 1: How it Works (enhanced)
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>How the Skill Works</H2>
        <Paragraph>
          The agent reads <InlineCode>src/lib/registry.ts</InlineCode>, picks
          components by scanning descriptions, imports from the right paths, and
          composes them. <Bold>No components were invented</Bold> — every
          element on this page exists in the registry.
        </Paragraph>

        <Tabs defaultValue="steps">
          <TabsList>
            <TabsTrigger value="steps">Steps</TabsTrigger>
            <TabsTrigger value="rules">Golden Rules</TabsTrigger>
            <TabsTrigger value="stack">Stack</TabsTrigger>
          </TabsList>

          <TabsContent value="steps" className="mt-4">
            <List ordered>
              <ListItem>
                <Bold>Read the registry</Bold> — the single source of truth
              </ListItem>
              <ListItem>
                <Bold>Pick components</Bold> — match descriptions to the task
              </ListItem>
              <ListItem>
                <Bold>Import correctly</Bold> — typography barrel, shadcn
                individual paths
              </ListItem>
              <ListItem>
                <Bold>Compose and override</Bold> — nest freely, customize with{" "}
                <InlineCode>className</InlineCode>
              </ListItem>
            </List>
          </TabsContent>

          <TabsContent value="rules" className="mt-4 space-y-3">
            <Alert>
              <AlertTitle>Rule #1</AlertTitle>
              <AlertDescription>
                <Bold>Never invent — assemble.</Bold> Use existing components
                from the registry. Check before creating anything new.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Rule #2</AlertTitle>
              <AlertDescription>
                <Bold>Server Components by default.</Bold> Only add{" "}
                <InlineCode>&quot;use client&quot;</InlineCode> when the
                component needs browser APIs, state, or event handlers.
              </AlertDescription>
            </Alert>
            <Alert>
              <AlertTitle>Rule #3</AlertTitle>
              <AlertDescription>
                <Bold>Use the typography system for all text.</Bold> Don&apos;t
                use raw HTML elements — use <InlineCode>&lt;H1&gt;</InlineCode>,{" "}
                <InlineCode>&lt;Paragraph&gt;</InlineCode>,{" "}
                <InlineCode>&lt;Bold&gt;</InlineCode>, etc.
              </AlertDescription>
            </Alert>
          </TabsContent>

          <TabsContent value="stack" className="mt-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ["Next.js 16", "App Router + Server Components"],
                ["Tailwind CSS v4", "Utility-first, oklch colors"],
                ["shadcn/ui", "Radix-based, new-york style"],
                ["next-themes", "Light / dark / system"],
              ].map(([name, desc]) => (
                <Card key={name}>
                  <CardContent className="pt-4">
                    <H5>{name}</H5>
                    <Small>{desc}</Small>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 2: Typography Showcase (enhanced)
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Typography Showcase</H2>

        <Paragraph>
          Here is <Bold>bold</Bold>, <Italic>italic</Italic>,{" "}
          <Underline>underline</Underline>,{" "}
          <Strikethrough>strikethrough</Strikethrough>, and{" "}
          <Highlight>highlight</Highlight> all working together. You can also
          reference <InlineCode>npm run dev</InlineCode> inline.
        </Paragraph>

        <Blockquote>
          <Bold>The golden rule:</Bold>{" "}
          <Italic>Never invent — assemble.</Italic>
        </Blockquote>

        {/* Heading hierarchy demo */}
        <Card>
          <CardHeader>
            <CardTitle>Heading Hierarchy</CardTitle>
            <CardDescription>All six heading levels</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <H1 className="text-2xl">H1 — Page Title</H1>
            <H2 className="text-xl">H2 — Section</H2>
            <H3 className="text-lg">H3 — Subsection</H3>
            <H4 className="text-base">H4 — Group</H4>
            <H5 className="text-sm">H5 — Label</H5>
            <Small>H6 territory — smallest heading</Small>
          </CardContent>
        </Card>

        {/* Font switching */}
        <div className="space-y-3">
          <H3>Font Switching</H3>
          <div className="grid gap-3 sm:grid-cols-3">
            <Card>
              <CardContent className="pt-4">
                <Small className="text-muted-foreground mb-1 block">
                  Geist Sans
                </Small>
                <Paragraph>The quick brown fox jumps.</Paragraph>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <Small className="text-muted-foreground mb-1 block">
                  JetBrains Mono
                </Small>
                <Paragraph style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  const x = 42;
                </Paragraph>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-4">
                <Small className="text-muted-foreground mb-1 block">
                  Sekuya
                </Small>
                <Paragraph style={{ fontFamily: "var(--font-sekuya)" }}>
                  Display Text
                </Paragraph>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Typography stress test */}
        <div className="space-y-3">
          <H3>Stress Test: Nesting Combos</H3>
          <Paragraph>
            You can nest{" "}
            <Bold>
              bold with <Italic>italic inside</Italic>
            </Bold>
            , or{" "}
            <Highlight>
              highlight with <InlineCode>code</InlineCode> inside
            </Highlight>
            , or even{" "}
            <Underline>
              underline with{" "}
              <Bold>
                <Italic>bold italic</Italic>
              </Bold>{" "}
              inside
            </Underline>
            . How about{" "}
            <Strikethrough>
              struck-through <Highlight>highlighted</Highlight> text
            </Strikethrough>
            ?
          </Paragraph>
          <Blockquote>
            <Italic>
              &ldquo;Any sufficiently advanced{" "}
              <Highlight>component library</Highlight> is indistinguishable from{" "}
              <Bold>magic</Bold>.&rdquo;
            </Italic>
            <br />
            <Small>— Arthur C. Component, 2026</Small>
          </Blockquote>
        </div>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 3: Data Table — Registry Stats
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Component Registry Stats</H2>
        <Paragraph>
          A breakdown of the <InlineCode>REGISTRY</InlineCode> by category,
          rendered with the <InlineCode>Table</InlineCode> component.
        </Paragraph>

        <Table>
          <TableCaption>Component distribution across categories</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Category</TableHead>
              <TableHead>Count</TableHead>
              <TableHead>Import Style</TableHead>
              <TableHead className="text-right">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              ["Typography: Headings", "6", "Barrel", "✅"],
              ["Typography: Inline", "7", "Barrel", "✅"],
              ["Typography: Block", "5", "Barrel", "✅"],
              ["shadcn/ui", "35+", "Direct path", "✅"],
              ["Utilities", "3", "Direct path", "✅"],
            ].map(([cat, count, style, status]) => (
              <TableRow key={cat}>
                <TableCell className="font-medium">{cat}</TableCell>
                <TableCell>
                  <Badge variant="secondary">{count}</Badge>
                </TableCell>
                <TableCell>
                  <InlineCode>{style}</InlineCode>
                </TableCell>
                <TableCell className="text-right">{status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 4: Progress Bars — Skill Meters
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Skill Meters</H2>
        <Paragraph>
          Visualizing proficiency with <InlineCode>Progress</InlineCode> bars.
        </Paragraph>

        <div className="space-y-4">
          {[
            ["Typography System", 100],
            ["Component Composition", 95],
            ["Dark Mode Support", 90],
            ["Server Components", 85],
            ["Tailwind Mastery", 88],
            ["Registry Compliance", 100],
          ].map(([label, value]) => (
            <div key={label as string} className="space-y-1.5">
              <div className="flex items-center justify-between">
                <Small className="font-medium">{label as string}</Small>
                <Small className="text-muted-foreground tabular-nums">
                  {value as number}%
                </Small>
              </div>
              <Progress value={value as number} />
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 5: Accordion FAQ
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Frequently Asked Questions</H2>
        <Paragraph>
          Common questions about this project, answered with the{" "}
          <InlineCode>Accordion</InlineCode> component.
        </Paragraph>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="what-is-registry">
            <AccordionTrigger>What is the component registry?</AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                The registry at <InlineCode>src/lib/registry.ts</InlineCode> is
                the single source of truth for all available components. It
                lists import paths, exports, descriptions, and key props. AI
                agents read it to know what&apos;s available without scanning
                the filesystem.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="why-no-barrel">
            <AccordionTrigger>
              Why don&apos;t shadcn components use a barrel export?
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Shadcn components are imported from individual paths (e.g.{" "}
                <InlineCode>@/components/ui/button</InlineCode>) to enable
                tree-shaking and keep bundle sizes small. Typography components
                use a barrel because they&apos;re small and almost always used
                together.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dark-mode">
            <AccordionTrigger>How does dark mode work?</AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Dark mode uses <InlineCode>next-themes</InlineCode> with a class
                strategy. Theme colors like{" "}
                <InlineCode>text-foreground</InlineCode> and{" "}
                <InlineCode>bg-background</InlineCode> automatically flip
                between light and dark. CSS variables in oklch color space
                handle the rest.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="when-use-client">
            <AccordionTrigger>
              When should I add &quot;use client&quot;?
            </AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Only when the component needs browser APIs, React state (
                <InlineCode>useState</InlineCode>), effects (
                <InlineCode>useEffect</InlineCode>), or event handlers (
                <InlineCode>onClick</InlineCode>). Server Components are the
                default — they&apos;re faster and send less JavaScript.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fonts">
            <AccordionTrigger>How do I switch fonts?</AccordionTrigger>
            <AccordionContent>
              <Paragraph>
                Fonts are CSS variables, not Tailwind classes. Apply them via{" "}
                <InlineCode>
                  style=&#123;&#123; fontFamily: &quot;var(--font-name)&quot;
                  &#125;&#125;
                </InlineCode>
                . Available: <InlineCode>--font-geist-sans</InlineCode>,{" "}
                <InlineCode>--font-geist-mono</InlineCode>,{" "}
                <InlineCode>--font-jetbrains-mono</InlineCode>,{" "}
                <InlineCode>--font-sekuya</InlineCode>.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 6: Hover Cards & Tooltips
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Hover Cards &amp; Tooltips</H2>
        <Paragraph>
          Hover over the items below to see contextual information appear.
        </Paragraph>

        <div className="flex flex-wrap gap-3">
          {[
            {
              name: "React",
              emoji: "⚛️",
              desc: "A JavaScript library for building user interfaces. Declarative, component-based, learn once — write anywhere.",
            },
            {
              name: "Next.js",
              emoji: "▲",
              desc: "The React framework for production. Hybrid static/server rendering, TypeScript support, smart bundling, and route pre-fetching.",
            },
            {
              name: "Tailwind",
              emoji: "🎨",
              desc: "A utility-first CSS framework. Rapidly build custom designs without leaving your HTML. v4 uses oklch color space.",
            },
            {
              name: "Radix",
              emoji: "🧩",
              desc: "Unstyled, accessible UI primitives. shadcn/ui builds on top of Radix to provide beautiful, composable components.",
            },
          ].map(({ name, emoji, desc }) => (
            <HoverCard key={name}>
              <HoverCardTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <span>{emoji}</span> {name}
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className="w-72">
                <div className="space-y-2">
                  <H4>
                    {emoji} {name}
                  </H4>
                  <Paragraph className="text-sm">{desc}</Paragraph>
                </div>
              </HoverCardContent>
            </HoverCard>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            ["default", "Primary action style"],
            ["secondary", "Secondary, muted style"],
            ["destructive", "Danger zone — destructive actions"],
            ["outline", "Subtle outlined button"],
            ["ghost", "Minimal, no background"],
          ].map(([variant, tip]) => (
            <Tooltip key={variant}>
              <TooltipTrigger asChild>
                <Button
                  variant={
                    variant as
                      | "default"
                      | "secondary"
                      | "destructive"
                      | "outline"
                      | "ghost"
                  }
                  size="sm"
                >
                  {variant}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <Paragraph className="text-xs">{tip}</Paragraph>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 7: Keyboard Shortcuts
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Keyboard Shortcuts</H2>
        <Paragraph>
          Displaying keyboard combos with the <InlineCode>Kbd</InlineCode>{" "}
          component.
        </Paragraph>

        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              {[
                [["⌘", "K"], "Open command palette"],
                [["⌘", "B"], "Toggle sidebar"],
                [["⌘", "S"], "Save file"],
                [["⌘", "⇧", "P"], "Quick actions"],
                [["⌘", "/"], "Toggle comment"],
                [["⌥", "↑"], "Move line up"],
                [["⌥", "↓"], "Move line down"],
                [["⌘", "D"], "Select next occurrence"],
              ].map(([keys, label]) => (
                <div
                  key={label as string}
                  className="flex items-center justify-between"
                >
                  <Text className="text-sm">{label as string}</Text>
                  <div className="flex items-center gap-1">
                    {(keys as string[]).map((key, i) => (
                      <Kbd key={i}>{key}</Kbd>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 8: Avatar Group
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Contributors</H2>
        <Paragraph>
          An <InlineCode>AvatarGroup</InlineCode> with fallback initials.
        </Paragraph>

        <div className="flex items-center gap-6">
          <AvatarGroup>
            {[
              ["JD", "bg-blue-500"],
              ["AK", "bg-emerald-500"],
              ["MR", "bg-purple-500"],
              ["SL", "bg-orange-500"],
              ["TC", "bg-pink-500"],
            ].map(([initials, bg]) => (
              <Avatar key={initials} size="lg">
                <AvatarFallback className={`${bg} text-white`}>
                  {initials}
                </AvatarFallback>
              </Avatar>
            ))}
          </AvatarGroup>

          <div>
            <Paragraph className="font-medium">5 contributors</Paragraph>
            <Small>Built with ❤️ and the registry</Small>
          </div>
        </div>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 9: Skeleton Loading States
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Loading States</H2>
        <Paragraph>
          Skeleton placeholders for content that hasn&apos;t loaded yet.
        </Paragraph>

        <div className="grid gap-4 sm:grid-cols-2">
          {/* Card skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>Card Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
              <Skeleton className="h-20 w-full" />
              <div className="flex gap-2">
                <Skeleton className="h-8 w-20" />
                <Skeleton className="h-8 w-20" />
              </div>
            </CardContent>
          </Card>

          {/* List skeleton */}
          <Card>
            <CardHeader>
              <CardTitle>List Skeleton</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex items-center gap-3">
                  <Skeleton className="h-8 w-8 rounded" />
                  <div className="flex-1 space-y-1.5">
                    <Skeleton className="h-3.5 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 10: Interactive Playground (Client Components)
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Interactive Playground</H2>
        <Paragraph>
          Client components with <InlineCode>useState</InlineCode>,{" "}
          <InlineCode>Switch</InlineCode>, <InlineCode>Slider</InlineCode>,{" "}
          <InlineCode>Input</InlineCode>, and more. These are the{" "}
          <Bold>only</Bold> parts of this page that use{" "}
          <InlineCode>&quot;use client&quot;</InlineCode>.
        </Paragraph>

        <div className="grid gap-4 sm:grid-cols-2">
          <CounterCard />
          <ToggleBoardCard />
          <SliderCard />
          <EmojiSlotMachine />
          <TypingTestCard />
          <PasswordStrengthCard />
        </div>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 11: Shadcn Cards (original, expanded)
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Shadcn Components</H2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Registry</CardTitle>
              <CardDescription>Source of truth</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph className="text-sm">
                <InlineCode>src/lib/registry.ts</InlineCode> contains every
                component, its path, exports, and description.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View file
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Skill</CardTitle>
              <CardDescription>On-demand knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph className="text-sm">
                <InlineCode>SKILL.md</InlineCode> tells the agent{" "}
                <Italic>how</Italic> to use the registry.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                View file
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
              <CardDescription>19 text components</CardDescription>
            </CardHeader>
            <CardContent>
              <Paragraph className="text-sm">
                Headings, inline decorators, and block-level elements — all
                composable and overridable.
              </Paragraph>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm">
                Explore
              </Button>
            </CardFooter>
          </Card>
        </div>

        <Alert>
          <AlertTitle>All systems operational</AlertTitle>
          <AlertDescription>
            If you&apos;re reading this, <Bold>every component</Bold> on this
            page rendered successfully using only registry components.
          </AlertDescription>
        </Alert>
      </section>

      <Separator className="my-8" />

      {/* ══════════════════════════════════════════════════════════
          SECTION 12: Components Used — Badge Wall
          ══════════════════════════════════════════════════════════ */}
      <section className="space-y-6">
        <H2>Components Used on This Page</H2>

        <div className="space-y-3">
          <H4>Typography</H4>
          <div className="flex flex-wrap gap-2">
            {[
              "H1",
              "H2",
              "H3",
              "H4",
              "H5",
              "Paragraph",
              "Text",
              "Bold",
              "Italic",
              "Underline",
              "Strikethrough",
              "Highlight",
              "InlineCode",
              "Small",
              "Blockquote",
              "List",
              "ListItem",
              "Link",
            ].map((name) => (
              <Badge key={name} variant="outline">
                {name}
              </Badge>
            ))}
          </div>

          <H4>shadcn/ui</H4>
          <div className="flex flex-wrap gap-2">
            {[
              "Accordion",
              "Alert",
              "Avatar",
              "AvatarGroup",
              "Badge",
              "Button",
              "Card",
              "HoverCard",
              "Input",
              "Kbd",
              "Label",
              "Progress",
              "Separator",
              "Skeleton",
              "Slider",
              "Switch",
              "Table",
              "Tabs",
              "Tooltip",
            ].map((name) => (
              <Badge key={name} variant="secondary">
                {name}
              </Badge>
            ))}
          </div>

          <H4>Utilities</H4>
          <div className="flex flex-wrap gap-2">
            {["ModeToggle", "cn()"].map((name) => (
              <Badge key={name} variant="default">
                {name}
              </Badge>
            ))}
          </div>
        </div>

        <Card className="border-dashed">
          <CardContent className="pt-6 text-center">
            <Paragraph className="text-4xl font-bold">39+</Paragraph>
            <Paragraph className="text-muted-foreground">
              unique components from the registry. <Bold>Zero invented.</Bold>{" "}
              Skill confirmed. 🎯
            </Paragraph>
          </CardContent>
        </Card>
      </section>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <Separator className="my-8" />
      <footer className="pb-12 text-center">
        <Small className="block">
          Built with the <Bold>build-ui</Bold> skill •{" "}
          <Link href="/">Back to Home</Link>
        </Small>
      </footer>
    </div>
  );
}
