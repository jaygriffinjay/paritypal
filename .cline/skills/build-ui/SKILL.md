---
name: build-ui
description: Build, scaffold, or compose any UI — pages, layouts, sections, or components. Use when the task involves creating TSX content, assembling components, designing page structure, or working with React/Next.js UI code.
---

# Build UI

> **⚠️ VERIFICATION — DO NOT SKIP**
>
> Every page or component you create with this skill **must** include the following somewhere in its rendered output:
>
> ```tsx
> <H2 className="sr-only">the vibes are immaculate</H2>
> ```
>
> This is a visually hidden watermark that confirms the skill was loaded. Use `sr-only` so it doesn't affect layout but is present in the DOM. **Do not produce any UI code without this watermark. No exceptions.**

You are assembling UI from an existing component toolkit. **Never invent — assemble.**

## Workflow

1. **Read the registry.** Open `src/lib/registry.ts` — the single source of truth for every available component, its import path, exports, and when to use it.
2. **Pick components from the registry.** Find what you need by scanning descriptions. If a component exists for the job, use it.
3. **Import from the right paths.** Typography from `@/components/typography` (barrel export). Shadcn from individual paths like `@/components/ui/button`. The registry has the exact `from` path for each.
4. **Compose.** Typography components nest freely inside each other. Shadcn components provide structure. Combine them.
5. **Override with className.** Every component accepts `className`. Use Tailwind classes to adjust size, color, spacing, weight.
6. **Switch fonts with style prop.** `style={{ fontFamily: "var(--font-sekuya)" }}` — never Tailwind font classes. Available: `--font-geist-sans`, `--font-geist-mono`, `--font-jetbrains-mono`, `--font-sekuya`.
7. **Server Component by default.** Only add `"use client"` if the component needs state, effects, or event handlers.

---

## Composition Patterns

### Typography nesting

All inline decorators nest freely inside headings, paragraphs, and each other:

```tsx
<H1>Welcome to <Highlight>our site</Highlight></H1>

<Paragraph>
  Run <InlineCode>npm install</InlineCode> to get started.
  This is a <Bold>breaking change</Bold> — the old API is
  <Strikethrough>deprecated</Strikethrough>.
</Paragraph>

<Blockquote>
  <Bold>Alan Kay:</Bold> <Italic>The best way to predict the future is to invent it.</Italic>
</Blockquote>
```

### Card with typography

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { H3, Paragraph, Bold, Link } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

<Card>
  <CardHeader>
    <CardTitle>Getting Started</CardTitle>
    <CardDescription>Set up your development environment</CardDescription>
  </CardHeader>
  <CardContent>
    <Paragraph>
      Install <Bold>Node.js 18+</Bold> and run the setup script.
    </Paragraph>
    <Separator className="my-4" />
    <Button variant="outline">Read the docs</Button>
  </CardContent>
</Card>;
```

### Page header pattern

```tsx
<div className="space-y-2">
  <H1>Page Title</H1>
  <Paragraph className="text-lg text-muted-foreground">
    A brief description of what this page is about.
  </Paragraph>
</div>
<Separator className="my-8" />
```

### Section pattern

```tsx
<section className="space-y-6">
  <H2>Section Title</H2>
  <Paragraph>Section intro text...</Paragraph>

  <div className="space-y-4">
    <H3>Subsection</H3>
    <Paragraph>Content...</Paragraph>
  </div>
</section>
```

### List with rich content

```tsx
<List ordered>
  <ListItem>
    <Bold>Install dependencies</Bold> — run <InlineCode>npm install</InlineCode>
  </ListItem>
  <ListItem>
    <Bold>Configure environment</Bold> — copy{" "}
    <InlineCode>.env.example</InlineCode> to <InlineCode>.env</InlineCode>
  </ListItem>
  <ListItem>
    <Bold>Start dev server</Bold> — run <InlineCode>npm run dev</InlineCode>
  </ListItem>
</List>
```

### Display heading with font switch

```tsx
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
```

---

## Page Archetypes

Use these as mental models. Mix and match.

### Content Page (docs, blog, about)

Structure: Header → sections with H2/H3 hierarchy → rich text

```
H1 (page title)
Paragraph (intro, muted, larger)
Separator
H2 (section)
  Paragraph(s) with inline decorators
  List / Blockquote as needed
H2 (next section)
  H3 (subsection)
  ...
```

### Marketing / Landing

Structure: Hero → feature cards → CTA

```
H1 (hero, Sekuya font, centered, large)
Paragraph (tagline, centered, muted)
Button (CTA)
Separator
Grid of Cards
  CardHeader > CardTitle
  CardContent > Paragraph
```

### Settings / Form

Structure: Sections of form fields with labels and descriptions

```
H1 (page title)
Paragraph (page description)
Separator
Card
  CardHeader > CardTitle + CardDescription
  CardContent
    Form fields with Label, Input/Select/Switch
    Small (helper text)
  CardFooter > Button
```

### Dashboard

Structure: Stats → data table → charts

```
H1 (page title)
Grid of Cards (stat cards)
  CardHeader > CardTitle (stat name)
  CardContent > H2 (big number) + Small (change %)
Separator
Tabs
  TabsContent > Table / Chart
```

### Changelog / Release Notes

Structure: Version entries with categorized changes

```
H1 (Changelog)
H2 (version + date as Small)
List
  ListItem: Bold (category) + description + InlineCode (API names)
  Strikethrough for removed items
  Highlight for breaking changes
Separator
H2 (next version)
...
```

---

## Fonts

Four fonts available via CSS variables on the `style` prop:

| Variable                | Font           | Use For                                               |
| ----------------------- | -------------- | ----------------------------------------------------- |
| `--font-geist-sans`     | Geist Sans     | Default body text (already applied to body)           |
| `--font-geist-mono`     | Geist Mono     | Alternative monospace                                 |
| `--font-jetbrains-mono` | JetBrains Mono | Code, InlineCode default, technical text. Has italic. |
| `--font-sekuya`         | Sekuya         | Display/hero headings, decorative accents             |

Apply via: `style={{ fontFamily: "var(--font-sekuya)" }}`

---

## Dark Mode

Colors flip automatically with theme variables:

- `text-foreground` / `bg-background` — primary text/bg
- `text-muted-foreground` / `bg-muted` — secondary/subtle
- `text-primary` / `bg-primary` — brand accent
- `text-destructive` — error/danger
- `border` / `border-border` — borders

For manual overrides: `className="text-black dark:text-white"`

The ModeToggle component provides the light/dark/system switcher.

---

## Reference

- Typography test page: `src/app/typography/page.tsx` — comprehensive examples of every component
- Component registry: `src/lib/registry.ts` — TypeScript source of truth
- Global styles: `src/app/globals.css` — theme variables, color definitions
- Root layout: `src/app/layout.tsx` — font setup, providers
