import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Bold,
  Italic,
  InlineCode,
  Small,
  Text,
  Link,
  List,
  ListItem,
  Blockquote,
} from "@/components/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

function TokenRow({
  name,
  light,
  dark,
  usage,
}: {
  name: string;
  light: string;
  dark: string;
  usage: string;
}) {
  return (
    <div className="border-border grid grid-cols-[1fr_auto_auto] items-center gap-x-4 gap-y-1 border-b py-2.5 last:border-0">
      <div className="space-y-0.5">
        <InlineCode className="text-xs">{name}</InlineCode>
        <Small className="block text-xs">{usage}</Small>
      </div>
      <div className="flex items-center gap-1.5">
        <span
          className="border-border size-4 rounded-full border"
          style={{ background: light }}
        />
        <Small className="font-mono text-[10px]">light</Small>
      </div>
      <div className="flex items-center gap-1.5">
        <span
          className="border-border size-4 rounded-full border"
          style={{ background: dark }}
        />
        <Small className="font-mono text-[10px]">dark</Small>
      </div>
    </div>
  );
}

export default function DesignPage() {
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

      {/* ── Page header ── */}
      <div className="space-y-2">
        <H1>Design System</H1>
        <Paragraph className="text-muted-foreground text-lg">
          How our CSS, theme, and font systems are structured — and why.
        </Paragraph>
      </div>

      <Separator className="my-10" />

      {/* ── globals.css ── */}
      <section className="space-y-8">
        <div className="space-y-2">
          <H2>globals.css</H2>
          <Paragraph className="text-muted-foreground">
            The single CSS entry point. Everything flows through here.
          </Paragraph>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <H3>Imports</H3>
            <Paragraph>
              Three imports at the top set up the whole CSS foundation:
            </Paragraph>
            <List>
              <ListItem>
                <InlineCode>@import "tailwindcss"</InlineCode> — loads Tailwind
                v4. In v4 there is no{" "}
                <InlineCode>tailwind.config.js</InlineCode>; all config lives in
                CSS.
              </ListItem>
              <ListItem>
                <InlineCode>
                  @import "tw-animate-css/dist/tw-animate.css"
                </InlineCode>{" "}
                — drop-in animation utilities used by shadcn transitions
                (slide-in, fade-in, zoom, etc.).
              </ListItem>
              <ListItem>
                <InlineCode>@import "shadcn/tailwind.css"</InlineCode> — the
                shadcn preset; registers its own Tailwind plugin and{" "}
                <InlineCode>@layer</InlineCode> base styles.
              </ListItem>
            </List>
          </div>

          <div className="space-y-3">
            <H3>
              <InlineCode>@custom-variant dark</InlineCode>
            </H3>
            <Paragraph>
              <InlineCode>@custom-variant dark (&:is(.dark *))</InlineCode>
            </Paragraph>
            <Paragraph>
              This teaches Tailwind v4 what <InlineCode>dark:</InlineCode>{" "}
              means. Instead of using{" "}
              <InlineCode>prefers-color-scheme</InlineCode> media queries, we
              use a <InlineCode>.dark</InlineCode> class on the{" "}
              <InlineCode>{"<html>"}</InlineCode> element — managed by{" "}
              <Bold>next-themes</Bold>. The selector{" "}
              <InlineCode>&:is(.dark *)</InlineCode> means "any element that is
              a descendant of a <InlineCode>.dark</InlineCode> element." This is
              what makes <InlineCode>dark:text-white</InlineCode> work.
            </Paragraph>
          </div>

          <div className="space-y-3">
            <H3>
              <InlineCode>@theme inline</InlineCode>
            </H3>
            <Paragraph>
              This block is the bridge between our raw CSS variables and
              Tailwind's utility class system.
            </Paragraph>
            <Paragraph>
              Without it, Tailwind knows nothing about{" "}
              <InlineCode>--background</InlineCode> or{" "}
              <InlineCode>--primary</InlineCode>. By writing:
            </Paragraph>
            <Blockquote>
              <InlineCode>--color-background: var(--background);</InlineCode>
            </Blockquote>
            <Paragraph>
              …we register <InlineCode>--background</InlineCode> as a Tailwind
              color token. That's what allows{" "}
              <InlineCode>bg-background</InlineCode>,{" "}
              <InlineCode>text-foreground</InlineCode>,{" "}
              <InlineCode>text-primary</InlineCode>, etc. to work as utility
              classes. The <InlineCode>inline</InlineCode> keyword means the
              generated CSS is inlined rather than emitted as a separate layer —
              important for CSS variable resolution order.
            </Paragraph>
            <Paragraph>
              The <InlineCode>--radius-*</InlineCode> entries do the same for
              border radius, deriving a scale from a single{" "}
              <InlineCode>--radius</InlineCode> base value.
            </Paragraph>
          </div>

          <div className="space-y-3">
            <H3>
              <InlineCode>@layer base</InlineCode>
            </H3>
            <Paragraph>
              Two rules applied globally at the lowest specificity layer:
            </Paragraph>
            <List>
              <ListItem>
                <InlineCode>
                  * {"{"} @apply border-border outline-ring/50 {"}"}
                </InlineCode>{" "}
                — every element's default border color is{" "}
                <InlineCode>border</InlineCode> and focus outline is{" "}
                <InlineCode>ring</InlineCode> at 50% opacity. Means you never
                have to specify border colors on inputs, cards, dividers.
              </ListItem>
              <ListItem>
                <InlineCode>
                  body {"{"} @apply bg-background text-foreground {"}"}
                </InlineCode>{" "}
                — page background and default text color are always the theme
                tokens. Dark mode flips these automatically.
              </ListItem>
            </List>
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      {/* ── Theme system ── */}
      <section className="space-y-8">
        <div className="space-y-2">
          <H2>Theme System</H2>
          <Paragraph className="text-muted-foreground">
            Semantic color tokens in oklch, dark mode via class strategy.
          </Paragraph>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <H3>Why oklch?</H3>
            <Paragraph>
              All colors are defined in the{" "}
              <Bold>oklch(lightness chroma hue)</Bold> color space rather than
              hex or hsl. There are three practical reasons:
            </Paragraph>
            <List ordered>
              <ListItem>
                <Bold>Perceptual uniformity.</Bold> A change of{" "}
                <InlineCode>0.1</InlineCode> in lightness looks the same across
                all hues — not true in hsl, where yellow at 50% lightness looks
                much brighter than blue at 50%.
              </ListItem>
              <ListItem>
                <Bold>P3 gamut access.</Bold> oklch can represent wide-gamut
                colors that hex/hsl cannot, so the design system is future-proof
                for displays that support it.
              </ListItem>
              <ListItem>
                <Bold>Legible values.</Bold>{" "}
                <InlineCode>oklch(0.13 0.028 261)</InlineCode> reads as "very
                dark, low chroma, blue-ish" — more legible than{" "}
                <InlineCode>#0f172a</InlineCode>.
              </ListItem>
            </List>
          </div>

          <div className="space-y-3">
            <H3>Semantic tokens, not raw colors</H3>
            <Paragraph>
              We never use literal color values (e.g.{" "}
              <InlineCode>text-blue-500</InlineCode>) for UI chrome. Instead we
              use <Bold>semantic tokens</Bold> — names that describe{" "}
              <Italic>purpose</Italic>, not appearance. Each token is a CSS
              variable with separate <InlineCode>:root</InlineCode> (light) and{" "}
              <InlineCode>.dark</InlineCode> values:
            </Paragraph>
            <Card>
              <CardHeader>
                <CardTitle>Core token pairs</CardTitle>
                <CardDescription>
                  Every token has a foreground counterpart for legible text on
                  that surface.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TokenRow
                  name="--background / --foreground"
                  light="oklch(1 0 0)"
                  dark="oklch(0.13 0.028 261.692)"
                  usage="Page background and default text"
                />
                <TokenRow
                  name="--primary / --primary-foreground"
                  light="oklch(0.21 0.034 264.665)"
                  dark="oklch(0.928 0.006 264.531)"
                  usage="Brand accent — buttons, links, focus rings"
                />
                <TokenRow
                  name="--muted / --muted-foreground"
                  light="oklch(0.967 0.003 264.542)"
                  dark="oklch(0.278 0.033 256.848)"
                  usage="Subtle surfaces and de-emphasized text"
                />
                <TokenRow
                  name="--card / --card-foreground"
                  light="oklch(1 0 0)"
                  dark="oklch(0.21 0.034 264.665)"
                  usage="Card surface backgrounds"
                />
                <TokenRow
                  name="--destructive"
                  light="oklch(0.577 0.245 27.325)"
                  dark="oklch(0.704 0.191 22.216)"
                  usage="Errors, warnings, delete actions"
                />
                <TokenRow
                  name="--border / --ring"
                  light="oklch(0.928 0.006 264.531)"
                  dark="oklch(1 0 0 / 10%)"
                  usage="Element borders and focus rings"
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <H3>How dark mode works</H3>
            <Paragraph>
              Dark mode uses the <Bold>class strategy</Bold>: when the{" "}
              <InlineCode>{"<html>"}</InlineCode> element has the{" "}
              <InlineCode>dark</InlineCode> class, the{" "}
              <InlineCode>.dark {"{ ... }"}</InlineCode> block in globals.css
              overrides every token. This is managed by <Bold>next-themes</Bold>
              , which reads the user's system preference on first load and
              stores their choice in localStorage.
            </Paragraph>
            <Paragraph>
              Because <Bold>all</Bold> component colors reference CSS variables
              rather than hard-coded values, the entire UI switches theme
              without a single component needing to know about it. The{" "}
              <InlineCode>ModeToggle</InlineCode> component provides the light /
              dark / system switcher.
            </Paragraph>
            <Blockquote>
              If you use <InlineCode>text-foreground</InlineCode> and{" "}
              <InlineCode>bg-background</InlineCode> everywhere, you never think
              about dark mode again.
            </Blockquote>
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      {/* ── Font system ── */}
      <section className="space-y-8">
        <div className="space-y-2">
          <H2>Font System</H2>
          <Paragraph className="text-muted-foreground">
            Four fonts, loaded via Next.js, applied via CSS variables.
          </Paragraph>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <H3>How fonts are loaded</H3>
            <Paragraph>
              Fonts are defined once in{" "}
              <InlineCode>src/app/fonts.ts</InlineCode> using{" "}
              <InlineCode>next/font/google</InlineCode>. Each font is configured
              with a <Bold>CSS variable name</Bold>:
            </Paragraph>
            <List>
              <ListItem>
                <InlineCode>Geist</InlineCode> →{" "}
                <InlineCode>--font-geist-sans</InlineCode> — default body font
              </ListItem>
              <ListItem>
                <InlineCode>Geist_Mono</InlineCode> →{" "}
                <InlineCode>--font-geist-mono</InlineCode> — alternative
                monospace
              </ListItem>
              <ListItem>
                <InlineCode>JetBrains_Mono</InlineCode> →{" "}
                <InlineCode>--font-jetbrains-mono</InlineCode> — code and
                technical text, with italic variant
              </ListItem>
              <ListItem>
                <InlineCode>Sekuya</InlineCode> →{" "}
                <InlineCode>--font-sekuya</InlineCode> — display / hero
                headings, decorative accents
              </ListItem>
            </List>
            <Paragraph>
              All four variables are joined and applied as a single{" "}
              <InlineCode>className</InlineCode> on{" "}
              <InlineCode>{"<body>"}</InlineCode> in{" "}
              <InlineCode>layout.tsx</InlineCode>. This makes all four fonts
              available as CSS custom properties to the entire document.{" "}
              <InlineCode>globals.css</InlineCode> then sets the default:{" "}
              <InlineCode>
                font-family: var(--font-geist-sans), system-ui, sans-serif
              </InlineCode>
              .
            </Paragraph>
          </div>

          <div className="space-y-3">
            <H3>Why CSS variables instead of Tailwind classes?</H3>
            <Paragraph>
              Tailwind provides font family utilities like{" "}
              <InlineCode>font-sans</InlineCode> and{" "}
              <InlineCode>font-mono</InlineCode>. We deliberately don't use them
              for font switching. Here's why:
            </Paragraph>
            <List ordered>
              <ListItem>
                <Bold>They're not per-font.</Bold>{" "}
                <InlineCode>font-sans</InlineCode> maps to whatever you put in{" "}
                <InlineCode>theme.fontFamily.sans</InlineCode>. If you have four
                different fonts, you'd need to extend the theme with four new
                utility names (<InlineCode>font-geist</InlineCode>,{" "}
                <InlineCode>font-sekuya</InlineCode>, etc.) and keep that in
                sync. More config, more fragility.
              </ListItem>
              <ListItem>
                <Bold>They don't work inside shadcn components.</Bold> A shadcn{" "}
                <InlineCode>CardTitle</InlineCode> is a div you don't control
                directly — you can pass <InlineCode>className</InlineCode>, but
                a Tailwind font class just adds a class that may be overridden
                by specificity. The <InlineCode>style</InlineCode> prop with an
                inline <InlineCode>font-family</InlineCode> always wins.
              </ListItem>
              <ListItem>
                <Bold>They can't be composed by reference.</Bold> CSS variables
                can be passed, aliased, and overridden at any level of the tree.
                A parent can set{" "}
                <InlineCode>
                  style={"{"}
                  {"{"} "--font-current": "var(--font-sekuya)" {"}"}
                  {"}"}
                </InlineCode>{" "}
                and children can inherit it. Tailwind classes have no such
                mechanism.
              </ListItem>
              <ListItem>
                <Bold>Runtime flexibility.</Bold> A CSS variable can be swapped
                at runtime via JavaScript — useful for font preference toggles,
                theming, or A/B tests — without rebuilding or purging.
              </ListItem>
            </List>
            <Paragraph>
              The tradeoff is verbosity at the call site:{" "}
              <InlineCode>
                style={"{"}
                {'{ fontFamily: "var(--font-sekuya)" }'}
                {"}"}
              </InlineCode>{" "}
              is longer than <InlineCode>font-sekuya</InlineCode>. But the
              explicitness is a feature — it's immediately obvious what font is
              being applied and why.
            </Paragraph>
          </div>

          <div className="space-y-3">
            <H3>Font showcase</H3>
            <div className="space-y-4">
              <div className="space-y-1">
                <Small className="block text-xs tracking-wide uppercase">
                  <InlineCode>--font-geist-sans</InlineCode> — default body
                </Small>
                <H4 style={{ fontFamily: "var(--font-geist-sans)" }}>
                  The quick brown fox jumps over the lazy dog
                </H4>
              </div>
              <div className="space-y-1">
                <Small className="block text-xs tracking-wide uppercase">
                  <InlineCode>--font-geist-mono</InlineCode> — alternative
                  monospace
                </Small>
                <H4 style={{ fontFamily: "var(--font-geist-mono)" }}>
                  The quick brown fox jumps over the lazy dog
                </H4>
              </div>
              <div className="space-y-1">
                <Small className="block text-xs tracking-wide uppercase">
                  <InlineCode>--font-jetbrains-mono</InlineCode> — code, italic
                  variant
                </Small>
                <H4 style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  The quick brown fox jumps over the lazy dog
                </H4>
                <H4
                  className="italic"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  The quick brown fox jumps over the lazy dog (italic)
                </H4>
              </div>
              <div className="space-y-1">
                <Small className="block text-xs tracking-wide uppercase">
                  <InlineCode>--font-sekuya</InlineCode> — display / decorative
                </Small>
                <H4 style={{ fontFamily: "var(--font-sekuya)" }}>
                  The quick brown fox jumps over the lazy dog
                </H4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      {/* ── Quick reference ── */}
      <section className="space-y-6">
        <H2>Quick Reference</H2>

        <div className="grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Theme tokens in Tailwind</CardTitle>
              <CardDescription>
                Use these everywhere — never raw colors for UI chrome
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-1">
              {[
                ["bg-background", "text-foreground", "Page surface + text"],
                ["bg-primary", "text-primary-foreground", "Brand accent"],
                ["bg-muted", "text-muted-foreground", "Subtle / secondary"],
                ["bg-card", "text-card-foreground", "Card surfaces"],
                ["bg-destructive", "text-destructive", "Errors / danger"],
                ["border-border", "", "Borders"],
              ].map(([bg, fg, note]) => (
                <div key={bg} className="flex items-baseline gap-2">
                  <InlineCode className="text-[11px]">{bg}</InlineCode>
                  {fg && (
                    <>
                      <Text className="text-muted-foreground text-xs">+</Text>
                      <InlineCode className="text-[11px]">{fg}</InlineCode>
                    </>
                  )}
                  <Text className="text-muted-foreground ml-auto text-xs">
                    {note}
                  </Text>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Font variables</CardTitle>
              <CardDescription>
                Apply via <InlineCode>style</InlineCode> prop, not className
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                ["--font-geist-sans", "Body default"],
                ["--font-geist-mono", "Monospace alt"],
                ["--font-jetbrains-mono", "Code + italic"],
                ["--font-sekuya", "Display / hero"],
              ].map(([variable, usage]) => (
                <div key={variable} className="space-y-0.5">
                  <InlineCode className="text-[11px]">{variable}</InlineCode>
                  <Small className="block text-xs">{usage}</Small>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
