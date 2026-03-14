import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Highlight,
  InlineCode,
  Small,
  Paragraph,
  Text,
  Blockquote,
  List,
  ListItem,
  Link,
} from "@/components/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Kbd } from "@/components/ui/kbd";
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
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function TypographyPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <H2 className="sr-only">the vibes are immaculate</H2>
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground text-sm transition-colors"
        >
          ← Home
        </Link>
        <ModeToggle />
      </div>

      <H1 className="mb-8">Typography Test</H1>

      <section className="space-y-6">
        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H1 — text-5xl / bold / tracking-tight
          </p>
          <H1>The quick brown fox jumps over the lazy dog</H1>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H2 — text-4xl / bold / tracking-tight
          </p>
          <H2>The quick brown fox jumps over the lazy dog</H2>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H3 — text-3xl / semibold
          </p>
          <H3>The quick brown fox jumps over the lazy dog</H3>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H4 — text-2xl / semibold
          </p>
          <H4>The quick brown fox jumps over the lazy dog</H4>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H5 — text-xl / medium
          </p>
          <H5>The quick brown fox jumps over the lazy dog</H5>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H6 — text-lg / medium
          </p>
          <H6>The quick brown fox jumps over the lazy dog</H6>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>With className overrides</H2>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H1 with text-blue-500
          </p>
          <H1 className="text-blue-500">Colored heading</H1>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H2 with Sekuya font
          </p>
          <H2 style={{ fontFamily: "var(--font-sekuya)" }}>
            Display font heading
          </H2>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H3 with JetBrains Mono font
          </p>
          <H3 style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
            Monospace heading
          </H3>
        </div>

        <div>
          <p className="text-muted-foreground mb-2 text-xs tracking-wide uppercase">
            H4 with text-muted-foreground and italic
          </p>
          <H4 className="text-muted-foreground italic">Muted italic heading</H4>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Inline Decorators</H2>

        <p className="text-lg">
          This text has a <Bold>bold</Bold> word.
        </p>

        <p className="text-lg">
          This text has an <Italic>italic</Italic> word.
        </p>

        <p className="text-lg">
          This text has an <Underline>underlined</Underline> word.
        </p>

        <p className="text-lg">
          This text has a <Strikethrough>struck through</Strikethrough> word.
        </p>

        <p className="text-lg">
          This text has a <Highlight>highlighted</Highlight> word.
        </p>

        <p className="text-lg">
          This text has <InlineCode>inline code</InlineCode> in it.
        </p>

        <p className="text-lg">
          This text has <Small>small fine print</Small> in it.
        </p>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Decorators with Overrides</H2>

        <p className="text-lg">
          <Bold className="text-blue-500">Blue bold</Bold> ·{" "}
          <Bold className="text-2xl text-emerald-500">Large green bold</Bold> ·{" "}
          <Bold
            className="text-amber-500"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Sekuya bold
          </Bold>
        </p>

        <p className="text-lg">
          <Italic className="text-rose-500">Red italic</Italic> ·{" "}
          <Italic className="text-xl text-purple-400">
            Large purple italic
          </Italic>{" "}
          ·{" "}
          <Italic
            className="text-sky-500"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            JetBrains italic
          </Italic>
        </p>

        <p className="text-lg">
          <Underline className="text-indigo-500">Indigo underline</Underline> ·{" "}
          <Underline className="text-pink-500 decoration-pink-500/50 decoration-wavy underline-offset-4">
            Wavy pink underline
          </Underline>{" "}
          ·{" "}
          <Underline className="text-teal-500 decoration-2">
            Thick teal underline
          </Underline>
        </p>

        <p className="text-lg">
          <Strikethrough className="text-red-500">
            Red strikethrough
          </Strikethrough>{" "}
          ·{" "}
          <Strikethrough className="text-muted-foreground text-sm">
            Small muted strikethrough
          </Strikethrough>{" "}
          ·{" "}
          <Strikethrough className="text-orange-500 decoration-2">
            Thick orange strikethrough
          </Strikethrough>
        </p>

        <p className="text-lg">
          <Highlight className="bg-yellow-300/40">Yellow highlight</Highlight> ·{" "}
          <Highlight className="bg-emerald-300/40 text-emerald-900 dark:text-emerald-100">
            Green highlight
          </Highlight>{" "}
          ·{" "}
          <Highlight className="bg-rose-300/40 text-rose-900 dark:text-rose-100">
            Rose highlight
          </Highlight>{" "}
          ·{" "}
          <Highlight className="bg-sky-300/40 text-sky-900 dark:text-sky-100">
            Sky highlight
          </Highlight>
        </p>

        <p className="text-lg">
          <InlineCode className="text-emerald-600 dark:text-emerald-400">
            green code
          </InlineCode>{" "}
          ·{" "}
          <InlineCode
            className="text-base"
            style={{ fontFamily: "var(--font-geist-mono)" }}
          >
            Geist Mono code
          </InlineCode>{" "}
          ·{" "}
          <InlineCode className="border-blue-500/30 bg-blue-500/10 text-blue-600 dark:text-blue-400">
            blue themed code
          </InlineCode>
        </p>

        <p className="text-lg">
          <Small className="text-blue-500">Blue small</Small> ·{" "}
          <Small
            className="text-xs text-amber-600 dark:text-amber-400"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Sekuya tiny amber
          </Small>{" "}
          ·{" "}
          <Small className="text-foreground text-base font-medium">
            Upgraded small (base size, medium weight)
          </Small>
        </p>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Composed Together</H2>

        <H3>
          A heading with <Bold>bold</Bold>, <Italic>italic</Italic>, and{" "}
          <InlineCode>code</InlineCode>
        </H3>

        <p className="text-lg">
          You can{" "}
          <Bold>
            <Italic>combine them</Italic>
          </Bold>{" "}
          and even{" "}
          <Underline>
            <Bold>stack multiple</Bold>
          </Underline>{" "}
          decorators. Here is{" "}
          <Highlight>
            <Bold>bold highlighted</Bold>
          </Highlight>{" "}
          text and{" "}
          <Strikethrough>
            <Italic>struck italic</Italic>
          </Strikethrough>{" "}
          text.
        </p>

        <Small>
          Footnote: This is <Bold>bold small</Bold> text with{" "}
          <InlineCode>code</InlineCode> inside it.
        </Small>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Real-World Examples</H2>

        <div className="space-y-4">
          <H3>Technical Documentation</H3>
          <p className="text-lg leading-relaxed">
            To install the package, run{" "}
            <InlineCode>npm install next</InlineCode> in your terminal. Make
            sure you have <Bold>Node.js 18 or later</Bold> installed.{" "}
            <Small>See the official docs for more details.</Small>
          </p>
          <p className="text-lg leading-relaxed">
            The <InlineCode>getServerSideProps</InlineCode> function is{" "}
            <Strikethrough>deprecated</Strikethrough> — use{" "}
            <InlineCode className="border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              server components
            </InlineCode>{" "}
            instead. This is a <Highlight>breaking change</Highlight> in v16.
          </p>
        </div>

        <div className="space-y-4">
          <H3>Academic / Textbook</H3>
          <p className="text-lg leading-relaxed">
            The concept of <Italic>cognitive load</Italic> was first introduced
            by Sweller in 1988.<sup>1</sup> It refers to the total amount of
            mental effort being used in <Bold>working memory</Bold>. Water (H
            <sub>2</sub>O) boils at 100°C under standard atmospheric pressure.
            <sup>2</sup>
          </p>
          <Small className="mt-2 block">
            <sup>1</sup> Sweller, J. (1988). Cognitive load during problem
            solving. <Italic>Cognitive Science, 12</Italic>(2), 257–285.
          </Small>
        </div>

        <div className="space-y-4">
          <H3>Marketing / Hero</H3>
          <H1
            className="text-center text-6xl"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Build <Italic className="text-blue-500">faster</Italic>. Ship{" "}
            <Underline className="decoration-emerald-500 decoration-4 underline-offset-4">
              sooner
            </Underline>
            .
          </H1>
          <p className="text-muted-foreground text-center text-xl">
            The{" "}
            <Highlight className="bg-amber-300/30">modern toolkit</Highlight>{" "}
            for teams that move fast.
          </p>
        </div>

        <div className="space-y-4">
          <H3>Changelog / Release Notes</H3>
          <H4>
            v2.4.0{" "}
            <Small className="text-muted-foreground font-normal">
              — February 2026
            </Small>
          </H4>
          <ul className="list-disc space-y-2 pl-6 text-lg">
            <li>
              <Bold>New:</Bold> Added <InlineCode>dark mode</InlineCode> support
            </li>
            <li>
              <Bold className="text-amber-500">Changed:</Bold> Updated{" "}
              <InlineCode>Button</InlineCode> API —{" "}
              <Strikethrough className="text-muted-foreground">
                variant=&quot;primary&quot;
              </Strikethrough>{" "}
              is now <InlineCode>variant=&quot;default&quot;</InlineCode>
            </li>
            <li>
              <Bold className="text-red-500">Breaking:</Bold>{" "}
              <Highlight className="bg-red-300/30">Removed</Highlight>{" "}
              <InlineCode>legacyTheme</InlineCode> prop
            </li>
            <li>
              <Bold className="text-emerald-500">Fixed:</Bold> Tooltip
              positioning on mobile
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <H3>Multi-font Paragraph</H3>
          <p className="text-lg leading-relaxed">
            This paragraph is in <Bold>Geist Sans</Bold> (the default). Switch
            to{" "}
            <span style={{ fontFamily: "var(--font-geist-mono)" }}>
              Geist Mono for technical bits
            </span>
            , or{" "}
            <Italic style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              JetBrains Mono for code-style italic
            </Italic>
            , or even{" "}
            <Bold
              className="text-2xl"
              style={{ fontFamily: "var(--font-sekuya)" }}
            >
              Sekuya for a display accent
            </Bold>{" "}
            — all in one paragraph.
          </p>
        </div>

        <div className="space-y-4">
          <H3>Sizing Scale</H3>
          <div className="space-y-1">
            <p className="text-xs">
              <Bold>text-xs:</Bold> The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-sm">
              <Bold>text-sm:</Bold> The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-base">
              <Bold>text-base:</Bold> The quick brown fox jumps over the lazy
              dog
            </p>
            <p className="text-lg">
              <Bold>text-lg:</Bold> The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-xl">
              <Bold>text-xl:</Bold> The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-2xl">
              <Bold>text-2xl:</Bold> The quick brown fox jumps over the lazy dog
            </p>
            <p className="text-3xl">
              <Bold>text-3xl:</Bold> The quick brown fox jumps over the lazy dog
            </p>
          </div>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Block-Level Components</H2>

        <div className="space-y-4">
          <H3>Paragraph</H3>
          <Paragraph>
            This is a default paragraph. It has relaxed line height and base
            text size. It works great for body copy and long-form content where
            readability matters most.
          </Paragraph>
          <Paragraph className="text-muted-foreground text-lg">
            A larger, muted paragraph — good for introductions or subheadings
            that aren't quite headings.
          </Paragraph>
          <Paragraph
            className="text-sm"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            A small monospaced paragraph — useful for technical notes or
            terminal-style output blocks.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <H3>Text (inline span)</H3>
          <div className="flex items-center gap-2">
            <Text className="text-muted-foreground">Status:</Text>
            <Text className="font-medium text-emerald-500">Active</Text>
          </div>
          <div className="flex items-center gap-2">
            <Text className="text-muted-foreground">Role:</Text>
            <Text className="font-medium text-blue-500">Admin</Text>
          </div>
          <div className="flex items-center gap-3">
            <Text className="text-muted-foreground text-xs tracking-wide uppercase">
              Tags:
            </Text>
            <Text className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs">
              React
            </Text>
            <Text className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-500">
              TypeScript
            </Text>
            <Text className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-500">
              Tailwind
            </Text>
          </div>
        </div>

        <div className="space-y-4">
          <H3>Blockquote</H3>
          <Blockquote>
            The best way to predict the future is to invent it.
          </Blockquote>
          <Blockquote className="text-foreground border-emerald-500 not-italic">
            Non-italic blockquote with a custom border color. Great for callouts
            or important notes that aren't quotes.
          </Blockquote>
          <Blockquote
            className="border-amber-500 text-amber-700 dark:text-amber-300"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            A display-font blockquote with warm colors.
          </Blockquote>
        </div>

        <div className="space-y-4">
          <H3>Lists</H3>

          <H4>Unordered</H4>
          <List>
            <ListItem>First item in the list</ListItem>
            <ListItem>
              Second item with <Bold>bold</Bold> text
            </ListItem>
            <ListItem>
              Third item with <InlineCode>inline code</InlineCode> and a{" "}
              <Highlight>highlight</Highlight>
            </ListItem>
          </List>

          <H4>Ordered</H4>
          <List ordered>
            <ListItem>Install the dependencies</ListItem>
            <ListItem>Configure the environment</ListItem>
            <ListItem>
              Run <InlineCode>npm run dev</InlineCode>
            </ListItem>
          </List>

          <H4>Custom styled</H4>
          <List className="space-y-3 text-lg">
            <ListItem className="text-blue-500">
              <Bold>Blue item</Bold> — with extra spacing
            </ListItem>
            <ListItem className="text-emerald-500">
              <Bold>Green item</Bold> — custom colored
            </ListItem>
            <ListItem className="text-amber-500">
              <Bold>Amber item</Bold> — each item styled independently
            </ListItem>
          </List>

          <H4>Nested lists</H4>
          <List>
            <ListItem>
              Top-level item
              <List className="mt-2">
                <ListItem>Nested child one</ListItem>
                <ListItem>Nested child two</ListItem>
              </List>
            </ListItem>
            <ListItem>Another top-level item</ListItem>
          </List>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Links</H2>

        <div className="space-y-4">
          <H3>Default</H3>
          <Paragraph>
            Here is a <Link href="/">link to the home page</Link> inside a
            paragraph. Links default to primary color with underline on hover.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <H3>External</H3>
          <Paragraph>
            Check out{" "}
            <Link href="https://nextjs.org" target="_blank">
              Next.js
            </Link>
            ,{" "}
            <Link href="https://tailwindcss.com" target="_blank">
              Tailwind CSS
            </Link>
            , and{" "}
            <Link href="https://ui.shadcn.com" target="_blank">
              shadcn/ui
            </Link>{" "}
            for more info.
          </Paragraph>
        </div>

        <div className="space-y-4">
          <H3>Custom colors</H3>
          <Paragraph>
            Links can be{" "}
            <Link href="/" className="text-emerald-500 hover:text-emerald-400">
              green
            </Link>
            ,{" "}
            <Link href="/" className="text-rose-500 hover:text-rose-400">
              red
            </Link>
            ,{" "}
            <Link href="/" className="text-amber-500 hover:text-amber-400">
              amber
            </Link>
            , or{" "}
            <Link href="/" className="text-purple-500 hover:text-purple-400">
              purple
            </Link>
            .
          </Paragraph>
        </div>

        <div className="space-y-4">
          <H3>With decorators</H3>
          <Paragraph>
            A{" "}
            <Link href="/">
              <Bold>bold link</Bold>
            </Link>
            , a{" "}
            <Link href="/">
              <Italic>italic link</Italic>
            </Link>
            , a{" "}
            <Link href="/" className="text-blue-500">
              <InlineCode>code link</InlineCode>
            </Link>
            , and a{" "}
            <Link href="/" className="text-lg font-semibold text-emerald-500">
              big styled link
            </Link>
            .
          </Paragraph>
        </div>

        <div className="space-y-4">
          <H3>In lists</H3>
          <List>
            <ListItem>
              <Link href="/">Documentation</Link> — get started guide
            </ListItem>
            <ListItem>
              <Link href="/">API Reference</Link> — full endpoint list
            </ListItem>
            <ListItem>
              <Link href="/" className="text-amber-500">
                Changelog
              </Link>{" "}
              — what's new
            </ListItem>
          </List>
        </div>

        <div className="space-y-4">
          <H3>In headings</H3>
          <H4>
            <Link href="/">A clickable heading link</Link>
          </H4>
          <H5>
            <Link href="/" className="text-emerald-500">
              Another heading link in green
            </Link>
          </H5>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>shadcn: Separator & Label</H2>

        <div className="space-y-4">
          <H3>Separator (horizontal)</H3>
          <Paragraph>Content above the separator.</Paragraph>
          <Separator />
          <Paragraph>Content below the separator.</Paragraph>
        </div>

        <div className="space-y-4">
          <H3>Separator (vertical)</H3>
          <div className="flex h-5 items-center gap-4 text-sm">
            <span>Home</span>
            <Separator orientation="vertical" />
            <span>About</span>
            <Separator orientation="vertical" />
            <span>Contact</span>
          </div>
        </div>

        <div className="space-y-4">
          <H3>Separator with custom color</H3>
          <Separator className="bg-primary" />
          <Separator className="bg-emerald-500" />
          <Separator className="bg-amber-500" />
        </div>

        <div className="space-y-4">
          <H3>Label (form label)</H3>
          <div className="space-y-3">
            <div className="space-y-1">
              <Label htmlFor="example-1">Default label</Label>
              <input
                id="example-1"
                className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm"
                placeholder="Type something..."
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="example-2" className="text-destructive">
                Error label
              </Label>
              <input
                id="example-2"
                className="border-destructive bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm"
                placeholder="Invalid input"
              />
            </div>
            <div className="space-y-1">
              <Label
                htmlFor="example-3"
                className="text-muted-foreground text-xs tracking-wide uppercase"
              >
                Styled label
              </Label>
              <input
                id="example-3"
                className="border-input bg-background flex h-9 w-full rounded-md border px-3 py-1 text-sm"
                placeholder="With custom label style"
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Edge Cases & Stress Tests</H2>

        {/* --- The Everything Bagel: every decorator on one word --- */}
        <div className="space-y-4">
          <H3>The Everything Bagel</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Every decorator stacked on a single word
          </Small>
          <Paragraph>
            Here is the word{" "}
            <Highlight>
              <Bold>
                <Italic>
                  <Underline>
                    <Strikethrough>everything</Strikethrough>
                  </Underline>
                </Italic>
              </Bold>
            </Highlight>{" "}
            wearing all five decorators at once. And here it is inside{" "}
            <InlineCode>
              <Bold>
                <Italic>code too</Italic>
              </Bold>
            </InlineCode>
            .
          </Paragraph>
        </div>

        {/* --- Deeply nested decorator chains --- */}
        <div className="space-y-4">
          <H3>Deep Nesting (6 levels)</H3>
          <Paragraph>
            <Highlight className="bg-sky-300/40">
              <Bold>
                <Italic>
                  <Underline className="decoration-wavy">
                    <Strikethrough>
                      <Small>six layers deep — can you read me?</Small>
                    </Strikethrough>
                  </Underline>
                </Italic>
              </Bold>
            </Highlight>
          </Paragraph>
        </div>

        {/* --- Empty components --- */}
        <div className="space-y-4">
          <H3>Empty / Whitespace-Only Components</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Do they render invisible or break layout?
          </Small>
          <Paragraph>
            Before<Bold>{"\u200B"}</Bold>After · Before
            <Highlight> </Highlight>After · Before
            <InlineCode>{"\u200B"}</InlineCode>After · Before
            <Underline> </Underline>After
          </Paragraph>
        </div>

        {/* --- Heading that is entirely InlineCode --- */}
        <div className="space-y-4">
          <H3>Headings Made Entirely of Other Components</H3>
          <H2>
            <InlineCode>npm install chaos</InlineCode>
          </H2>
          <H4>
            <Highlight className="bg-rose-300/40">
              <Strikethrough>Deprecated Heading</Strikethrough>
            </Highlight>{" "}
            → <Highlight className="bg-emerald-300/40">New Heading</Highlight>
          </H4>
          <H5>
            <Small className="text-muted-foreground font-normal">
              tiny H5 via Small
            </Small>
          </H5>
        </div>

        {/* --- Blockquote containing block-level children --- */}
        <div className="space-y-4">
          <H3>Blockquote with Block-Level Children</H3>
          <Blockquote>
            <Paragraph>
              First paragraph inside a blockquote. The <Bold>HTML spec</Bold>{" "}
              says this is legal, but does it <Italic>look</Italic> right?
            </Paragraph>
            <List className="mt-2">
              <ListItem>
                A list inside a blockquote — <InlineCode>why not</InlineCode>
              </ListItem>
              <ListItem>
                <Highlight>Highlighted list item</Highlight> in a quote
              </ListItem>
            </List>
            <Small className="mt-2 block">— Someone, probably</Small>
          </Blockquote>
        </div>

        {/* --- Overflow: absurdly long unbroken string --- */}
        <div className="space-y-4">
          <H3>Overflow Stress Test</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Long unbroken word — does it overflow the container?
          </Small>
          <Paragraph className="break-all">
            <Bold>Bold:</Bold>{" "}
            Supercalifragilisticexpialidociousantidisestablishmentarianismhippopotomonstrosesquipedaliophobiapneumonoultramicroscopicsilicovolcanoconiosis
          </Paragraph>
          <Paragraph>
            <InlineCode>
              /api/v3/organizations/my-really-long-organization-name/repositories/this-is-an-absurdly-named-repo/branches/feature/JIRA-12345-fix-the-thing-that-was-broken-by-the-other-thing
            </InlineCode>
          </Paragraph>
        </div>

        {/* --- Link wrapping complex compositions --- */}
        <div className="space-y-4">
          <H3>Links Wrapping Complex Children</H3>
          <Paragraph>
            <Link href="/">
              <Highlight className="bg-amber-300/30">
                <Bold>
                  <Italic>A bold italic highlighted link</Italic>
                </Bold>
              </Highlight>
            </Link>{" "}
            — does the underline fight the highlight?
          </Paragraph>
          <Paragraph>
            <Link href="/" className="no-underline">
              <InlineCode className="border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
                clickable code chip →
              </InlineCode>
            </Link>
          </Paragraph>
        </div>

        {/* --- Adjacent identical decorators --- */}
        <div className="space-y-4">
          <H3>Adjacent Identical Decorators</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Do they visually merge or show seams?
          </Small>
          <Paragraph>
            <Bold>Bold one</Bold>
            <Bold>Bold two</Bold>
            <Bold>Bold three</Bold>{" "}
            <Text className="text-muted-foreground">← no spaces between</Text>
          </Paragraph>
          <Paragraph>
            <Highlight>High</Highlight>
            <Highlight className="bg-emerald-300/40">light</Highlight>
            <Highlight className="bg-sky-300/40">fusion</Highlight>{" "}
            <Text className="text-muted-foreground">← color seams?</Text>
          </Paragraph>
          <Paragraph>
            <InlineCode>a</InlineCode>
            <InlineCode>b</InlineCode>
            <InlineCode>c</InlineCode>{" "}
            <Text className="text-muted-foreground">
              ← do borders double up?
            </Text>
          </Paragraph>
        </div>

        {/* --- Contradictory className overrides --- */}
        <div className="space-y-4">
          <H3>Contradictory Overrides</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            What wins when component defaults fight className?
          </Small>
          <Paragraph>
            <Bold className="font-light">Bold component, font-light class</Bold>
          </Paragraph>
          <Paragraph>
            <Italic className="font-bold not-italic">
              Italic component, not-italic + bold class
            </Italic>
          </Paragraph>
          <H1 className="text-xs font-thin tracking-widest">
            H1 shrunk to text-xs / thin / wide tracking
          </H1>
          <Small className="text-5xl font-black">
            Small component at text-5xl / black weight
          </Small>
        </div>

        {/* --- Unicode, emoji, and special characters --- */}
        <div className="space-y-4">
          <H3>Unicode & Special Characters</H3>
          <Paragraph>
            <Bold>RTL text:</Bold> <Highlight>مرحبا بالعالم</Highlight> ·{" "}
            <Bold>CJK:</Bold> <Underline>你好世界</Underline> ·{" "}
            <Bold>Emoji stack:</Bold>{" "}
            <Italic>
              <Highlight>🔥🎨✨🚀💀</Highlight>
            </Italic>
          </Paragraph>
          <Paragraph>
            <InlineCode>{"const π = Math.PI; // τ = 2π"}</InlineCode> ·{" "}
            <InlineCode>{"f(x) = x² + √x · ∑∞"}</InlineCode>
          </Paragraph>
          <H4>
            <Highlight>🎉</Highlight> Heading with emoji and{" "}
            <InlineCode>{"<angle brackets>"}</InlineCode>
          </H4>
        </div>

        {/* --- Typography as data display --- */}
        <div className="space-y-4">
          <H3>Abusing Typography as Data Display</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Using text components as a key-value table
          </Small>
          <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
            <Text className="text-muted-foreground text-sm">Name</Text>
            <Bold>Jay Doe</Bold>
            <Text className="text-muted-foreground text-sm">Email</Text>
            <Link href="mailto:jay@example.com">jay@example.com</Link>
            <Text className="text-muted-foreground text-sm">Status</Text>
            <Text>
              <Highlight className="bg-emerald-300/40 text-emerald-700 dark:text-emerald-300">
                Active
              </Highlight>
            </Text>
            <Text className="text-muted-foreground text-sm">Plan</Text>
            <Text>
              <Strikethrough className="text-muted-foreground">
                Free
              </Strikethrough>{" "}
              <Bold className="text-primary">Pro</Bold>
            </Text>
            <Text className="text-muted-foreground text-sm">API Key</Text>
            <InlineCode className="text-xs">sk-proj-a1b2c3...x7y8z9</InlineCode>
          </div>
        </div>

        {/* --- Nested lists gone wild --- */}
        <div className="space-y-4">
          <H3>Deeply Nested Lists</H3>
          <List>
            <ListItem>
              <Bold>Level 1</Bold> — top
              <List className="mt-1">
                <ListItem>
                  <Italic>Level 2</Italic> — nested
                  <List ordered className="mt-1">
                    <ListItem>
                      <InlineCode>Level 3</InlineCode> — ordered inside
                      unordered
                      <List className="mt-1">
                        <ListItem>
                          <Highlight>Level 4</Highlight> — we need to go deeper
                          <List ordered className="mt-1">
                            <ListItem>
                              <Small>
                                Level 5 —{" "}
                                <Strikethrough>too deep?</Strikethrough>{" "}
                                <Bold>never.</Bold>
                              </Small>
                            </ListItem>
                          </List>
                        </ListItem>
                      </List>
                    </ListItem>
                  </List>
                </ListItem>
              </List>
            </ListItem>
          </List>
        </div>

        {/* --- Paragraph that is one giant composed sentence --- */}
        <div className="space-y-4">
          <H3>The Kitchen Sink Paragraph</H3>
          <Paragraph className="text-lg leading-loose">
            This <Bold>bold</Bold> and <Italic>italic</Italic> paragraph has{" "}
            <Underline>underlined</Underline> words,{" "}
            <Strikethrough>struck text</Strikethrough>,{" "}
            <Highlight>highlights</Highlight>,{" "}
            <InlineCode>inline code</InlineCode>,{" "}
            <Small>small fine print</Small>, <Link href="/">a link</Link>,{" "}
            <Bold>
              <Italic>
                <Underline>triple-stacked decorators</Underline>
              </Italic>
            </Bold>
            ,{" "}
            <Highlight className="bg-rose-300/40">
              <Bold>
                <Link href="/">a highlighted bold link</Link>
              </Bold>
            </Highlight>
            ,{" "}
            <InlineCode>
              <Strikethrough>deprecated_fn()</Strikethrough>
            </InlineCode>
            , and even{" "}
            <Text
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
              style={{ fontFamily: "var(--font-sekuya)" }}
            >
              gradient Sekuya text
            </Text>{" "}
            all in one sentence — because why not.
          </Paragraph>
        </div>
      </section>

      <hr className="border-border my-10" />

      <section className="space-y-6">
        <H2>Typography × shadcn Composition</H2>

        {/* --- Badge with typography innards --- */}
        <div className="space-y-4">
          <H3>Badge + Typography</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Typography components nested inside Badge variants
          </Small>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>
              <Bold>Bold</Bold> badge
            </Badge>
            <Badge variant="secondary">
              <InlineCode className="border-none bg-transparent p-0 text-xs">
                v2.4.0
              </InlineCode>
            </Badge>
            <Badge variant="destructive">
              <Strikethrough>removed</Strikethrough>
            </Badge>
            <Badge variant="outline">
              <Italic>Italic</Italic> outline
            </Badge>
            <Badge variant="outline" className="gap-1.5">
              <Highlight className="rounded-full bg-emerald-500 px-1 py-0 text-[10px] text-white">
                ✓
              </Highlight>
              <Text>Passing</Text>
            </Badge>
            <Badge
              variant="secondary"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              <Small className="text-foreground text-[10px]">
                monospace badge
              </Small>
            </Badge>
          </div>
        </div>

        {/* --- Kbd mixed with typography --- */}
        <div className="space-y-4">
          <H3>Kbd + Typography in Prose</H3>
          <Paragraph>
            Press <Kbd>⌘</Kbd> <Kbd>K</Kbd> to open the command palette, or{" "}
            <Kbd>⌘</Kbd> <Kbd>S</Kbd> to save. Use <Kbd>⌘</Kbd> <Kbd>Shift</Kbd>{" "}
            <Kbd>P</Kbd> for <InlineCode>Quick Open</InlineCode>.{" "}
            <Small>
              (<Bold>Tip:</Bold> on Windows, replace <Kbd>⌘</Kbd> with{" "}
              <Kbd>Ctrl</Kbd>)
            </Small>
          </Paragraph>
          <Paragraph>
            <Strikethrough>
              <Kbd>⌘</Kbd> <Kbd>E</Kbd>
            </Strikethrough>{" "}
            <Text className="text-muted-foreground">
              deprecated — use <Kbd>⌘</Kbd> <Kbd>P</Kbd> instead
            </Text>
          </Paragraph>
        </div>

        {/* --- Card stuffed with every typography component --- */}
        <div className="space-y-4">
          <H3>Card Stuffed with Typography</H3>
          <Card>
            <CardHeader>
              <CardTitle>
                <H4 className="mb-0">
                  <InlineCode>@acme/components</InlineCode>{" "}
                  <Badge variant="secondary" className="ml-2 align-middle">
                    <Small className="text-foreground text-[10px]">
                      v3.1.0
                    </Small>
                  </Badge>
                </H4>
              </CardTitle>
              <CardDescription>
                <Paragraph className="text-muted-foreground m-0 text-sm">
                  A{" "}
                  <Highlight className="bg-amber-300/30">
                    production-ready
                  </Highlight>{" "}
                  component library with{" "}
                  <Bold>
                    <Italic>zero runtime dependencies</Italic>
                  </Bold>
                  .
                </Paragraph>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <List>
                <ListItem>
                  <Bold className="text-emerald-500">Added:</Bold>{" "}
                  <InlineCode>Combobox</InlineCode> component
                </ListItem>
                <ListItem>
                  <Bold className="text-amber-500">Changed:</Bold>{" "}
                  <Strikethrough className="text-muted-foreground">
                    variant=&quot;primary&quot;
                  </Strikethrough>{" "}
                  → <InlineCode>variant=&quot;default&quot;</InlineCode>
                </ListItem>
                <ListItem>
                  <Bold className="text-red-500">Removed:</Bold>{" "}
                  <InlineCode>legacyTheme</InlineCode> prop —{" "}
                  <Link href="/">migration guide</Link>
                </ListItem>
              </List>
              <Blockquote className="text-sm">
                <Italic>
                  Upgrade carefully — this includes{" "}
                  <Highlight className="bg-red-300/30">
                    breaking changes
                  </Highlight>
                  .
                </Italic>
              </Blockquote>
            </CardContent>
            <CardFooter className="gap-4">
              <Small>
                Published <Bold>2 hours ago</Bold>
              </Small>
              <Separator orientation="vertical" className="h-4" />
              <Small>
                License: <InlineCode className="text-xs">MIT</InlineCode>
              </Small>
            </CardFooter>
          </Card>
        </div>

        {/* --- Alert with rich typography content --- */}
        <div className="space-y-4">
          <H3>Alert with Rich Typography</H3>
          <Alert>
            <AlertTitle>
              <Bold>Heads up!</Bold> Typography inside an{" "}
              <InlineCode>Alert</InlineCode>
            </AlertTitle>
            <AlertDescription>
              <Paragraph className="m-0 text-sm">
                You can compose <Bold>bold</Bold>, <Italic>italic</Italic>,{" "}
                <InlineCode>code</InlineCode>, and <Link href="/">links</Link>{" "}
                freely inside alert descriptions.{" "}
                <Highlight>Highlights</Highlight> work too.
              </Paragraph>
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>
              <Strikethrough>getServerSideProps</Strikethrough> removed
            </AlertTitle>
            <AlertDescription>
              <Paragraph className="text-destructive/90 m-0 text-sm">
                This API was <Strikethrough>deprecated in v15</Strikethrough>{" "}
                and is now{" "}
                <Bold>
                  <Highlight className="bg-red-300/30">fully removed</Highlight>
                </Bold>{" "}
                in v16. Use <InlineCode>async</InlineCode> server components
                instead.
              </Paragraph>
            </AlertDescription>
          </Alert>
        </div>

        {/* --- Table with typography in every cell --- */}
        <div className="space-y-4">
          <H3>Table with Typography Cells</H3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Bold>Component</Bold>
                </TableHead>
                <TableHead>
                  <Bold>Status</Bold>
                </TableHead>
                <TableHead>
                  <Bold>Notes</Bold>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>
                  <InlineCode>Button</InlineCode>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className="text-emerald-500">
                    Stable
                  </Badge>
                </TableCell>
                <TableCell>
                  <Small>
                    Ships with <Bold>5 variants</Bold>
                  </Small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <InlineCode>
                    <Strikethrough>LegacyModal</Strikethrough>
                  </InlineCode>
                </TableCell>
                <TableCell>
                  <Badge variant="destructive">Removed</Badge>
                </TableCell>
                <TableCell>
                  <Small>
                    Use <Link href="/">Dialog</Link> instead
                  </Small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <InlineCode>Combobox</InlineCode>
                </TableCell>
                <TableCell>
                  <Badge variant="secondary">Beta</Badge>
                </TableCell>
                <TableCell>
                  <Small>
                    <Highlight className="bg-amber-300/30">
                      API may change
                    </Highlight>
                  </Small>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <InlineCode>Sidebar</InlineCode>
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-16" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>

        {/* --- Skeleton as inline placeholder inside typography --- */}
        <div className="space-y-4">
          <H3>Skeleton Inside Typography</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Loading placeholders interleaved with real text
          </Small>
          <H4>
            Welcome back,{" "}
            <Skeleton className="inline-block h-5 w-24 align-middle" />
          </H4>
          <Paragraph>
            Your account has{" "}
            <Skeleton className="inline-block h-4 w-10 align-middle" /> unread
            messages and{" "}
            <Skeleton className="inline-block h-4 w-8 align-middle" /> pending
            tasks. Last login:{" "}
            <Skeleton className="inline-block h-4 w-28 align-middle" />.
          </Paragraph>
          <List>
            <ListItem>
              <Bold>Project:</Bold>{" "}
              <Skeleton className="inline-block h-4 w-32 align-middle" />
            </ListItem>
            <ListItem>
              <Bold>Branch:</Bold>{" "}
              <Skeleton className="inline-block h-4 w-40 align-middle" />
            </ListItem>
          </List>
        </div>

        {/* --- Typography wrapping Badge (inverted control) --- */}
        <div className="space-y-4">
          <H3>Inverted Nesting: Typography Wrapping shadcn</H3>
          <Small className="mb-2 block text-xs tracking-wide uppercase">
            Decorators on the outside, shadcn on the inside
          </Small>
          <Paragraph>
            Status:{" "}
            <Bold>
              <Badge variant="outline" className="align-middle">
                Online
              </Badge>
            </Bold>{" "}
            · Priority:{" "}
            <Italic>
              <Badge variant="destructive" className="align-middle">
                Critical
              </Badge>
            </Italic>{" "}
            · Version:{" "}
            <Highlight className="bg-sky-300/30">
              <Badge variant="secondary" className="align-middle">
                v4.2.0-rc.1
              </Badge>
            </Highlight>
          </Paragraph>
          <H4>
            Release: <Badge className="align-middle">Stable</Badge>{" "}
            <Separator
              orientation="vertical"
              className="mx-1 inline-block h-4 align-middle"
            />{" "}
            <Kbd>⌘</Kbd> <Kbd>R</Kbd>{" "}
            <Text className="text-muted-foreground text-sm">to refresh</Text>
          </H4>
        </div>
      </section>
    </div>
  );
}
