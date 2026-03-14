"use client";

import { useState } from "react";
import {
  H1,
  H2,
  H3,
  H4,
  Paragraph,
  Bold,
  Italic,
  Highlight,
  Blockquote,
  InlineCode,
  Small,
  List,
  ListItem,
  Link,
} from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

function PollinationsImage({
  prompt,
  width = 800,
  height = 450,
  className,
  caption,
}: {
  prompt: string;
  width?: number;
  height?: number;
  className?: string;
  caption?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const url = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=${width}&height=${height}&nologo=true`;

  return (
    <figure className={cn("my-8", className)}>
      <div
        className={cn(
          "bg-muted relative overflow-hidden rounded-xl",
          !loaded && "animate-pulse",
        )}
        style={{ aspectRatio: `${width}/${height}` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={url}
          alt={prompt}
          className={cn(
            "h-full w-full object-cover transition-opacity duration-700",
            loaded ? "opacity-100" : "opacity-0",
          )}
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Small className="text-muted-foreground/40 text-xs">
              Generating image…
            </Small>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center">
          <Small className="text-muted-foreground/50 italic">{caption}</Small>
        </figcaption>
      )}
    </figure>
  );
}

// Interactive "sand castle builder" demo
function SandCastleDemo() {
  const [buckets, setBuckets] = useState<string[]>([]);
  const AVAILABLE = ["Tailwind", "shadcn", "Radix", "TypeScript", "Zod"];

  function toggle(b: string) {
    setBuckets((prev) =>
      prev.includes(b) ? prev.filter((x) => x !== b) : [...prev, b],
    );
  }

  const stability = Math.round((buckets.length / AVAILABLE.length) * 100);

  return (
    <Card className="border-border/60 my-8">
      <CardHeader>
        <CardTitle className="text-base">🏖️ Build Your Sand Castle</CardTitle>
        <CardDescription>
          Pick your buckets. Watch the castle get more stable.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {AVAILABLE.map((b) => (
            <Button
              key={b}
              variant={buckets.includes(b) ? "default" : "outline"}
              size="sm"
              onClick={() => toggle(b)}
              className="rounded-full"
            >
              {buckets.includes(b) ? "✓ " : ""}
              {b}
            </Button>
          ))}
        </div>
        <div className="space-y-1">
          <div className="flex justify-between">
            <Small className="text-muted-foreground">Castle stability</Small>
            <Small className="text-muted-foreground">{stability}%</Small>
          </div>
          <Progress value={stability} className="h-2" />
        </div>
        <Paragraph className="text-muted-foreground text-sm">
          {stability === 0 &&
            "Just raw sand. Beautiful chaos. Collapses immediately."}
          {stability > 0 &&
            stability <= 40 &&
            "Getting there. You have some structure, but the towers are wobbly."}
          {stability > 40 &&
            stability <= 79 &&
            "Solid foundation. The moat is holding. Looking good."}
          {stability === 100 &&
            "Immaculate. This castle could survive a tide. Ship it."}
        </Paragraph>
      </CardContent>
    </Card>
  );
}

// The "guardrails spectrum" visual
function GuardrailsSpectrum() {
  const layers = [
    {
      label: "Raw JS",
      color: "bg-destructive/20 text-destructive",
      desc: "Infinite freedom. Zero guardrails. Good luck.",
    },
    {
      label: "TypeScript",
      color: "bg-orange-500/20 text-orange-600 dark:text-orange-400",
      desc: "Type guardrails. Catches the obvious mistakes.",
    },
    {
      label: "Radix UI",
      color: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
      desc: "Behavior guardrails. Accessibility, keyboard nav, focus.",
    },
    {
      label: "shadcn/ui",
      color: "bg-primary/20 text-primary",
      desc: "Style guardrails. Consistent components, yours to own.",
    },
    {
      label: "Tailwind",
      color: "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400",
      desc: "Design guardrails. Constrained tokens, infinite combos.",
    },
    {
      label: "Test Suite",
      color: "bg-violet-500/20 text-violet-600 dark:text-violet-400",
      desc: "Regression guardrails. The scaffolding around the castle.",
    },
  ];

  return (
    <div className="my-8 space-y-2">
      {layers.map((layer, i) => (
        <div
          key={layer.label}
          className={cn(
            "flex items-center gap-4 rounded-lg px-4 py-3 transition-all",
            layer.color,
          )}
          style={{ marginLeft: `${i * 12}px` }}
        >
          <span className="w-28 shrink-0 text-sm font-semibold">
            {layer.label}
          </span>
          <span className="text-xs opacity-80">{layer.desc}</span>
        </div>
      ))}
    </div>
  );
}

export default function ArticlePage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hidden watermark */}
      <H2 className="sr-only">the vibes are immaculate</H2>

      {/* Nav */}
      <header className="border-border/30 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
          >
            ← Home
          </Link>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">
              Essay
            </Badge>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Article */}
      <article className="mx-auto max-w-3xl px-6 py-16">
        {/* Byline */}
        <div className="mb-8 flex items-center gap-3">
          <Badge variant="secondary">AI × Engineering</Badge>
          <Small className="text-muted-foreground">
            5 min read · February 2026
          </Small>
        </div>

        {/* Title */}
        <H1
          className="text-4xl leading-tight font-bold tracking-tight md:text-5xl"
          style={{ fontFamily: "var(--font-sekuya)" }}
        >
          Code is Sand.{" "}
          <Highlight className="bg-primary/15 px-1">
            Libraries are Buckets.
          </Highlight>
        </H1>

        <Paragraph className="text-muted-foreground mt-6 text-xl leading-relaxed">
          A theory of why the teams winning at AI-assisted development aren't
          the ones with the best prompts — they're the ones with the{" "}
          <Bold>best molds</Bold>.
        </Paragraph>

        <Separator className="my-10" />

        {/* Hero image */}
        <PollinationsImage
          prompt="aerial view of an elaborate sand castle on a beach at golden hour, cinematic photography, detailed"
          width={900}
          height={500}
          caption="The castle is the product. The sand is the code. The buckets are everything in between."
        />

        {/* Section 1 */}
        <H2 className="mt-12 text-2xl font-bold">The Sand Problem</H2>

        <Paragraph className="mt-4">
          Raw code is sand. It can become <Italic>anything</Italic> — a
          cathedral, a data pipeline, a game engine. That's the beauty of it.
          But sand without structure collapses. You can spend all day piling it
          up and watch it slide back down the moment you turn away.
        </Paragraph>

        <Paragraph className="mt-4">
          This is the AI coding problem in a nutshell. Give an AI a blank file
          and say "build me a navbar" and you'll get something. Give it the same
          prompt ten times and you'll get ten different navbars, none of them
          consistent with each other, none of them using your design tokens,
          none of them accessible by default.
        </Paragraph>

        <Blockquote className="my-6">
          The AI isn't bad at building sand castles. It's bad at building{" "}
          <Italic>your</Italic> sand castle — the one that matches the one you
          built yesterday.
        </Blockquote>

        <PollinationsImage
          prompt="close up of sand falling through fingers on a beach, soft light, minimalist photography"
          width={800}
          height={400}
          caption="Infinite potential. Zero structure. This is raw code without guardrails."
        />

        {/* Section 2 */}
        <H2 className="mt-12 text-2xl font-bold">Enter the Buckets</H2>

        <Paragraph className="mt-4">
          A bucket gives sand a shape. It doesn't limit what you can build — it
          limits <Italic>how</Italic> you build it, which is a completely
          different thing. You can still make any castle you want. You just make
          it with consistent, repeatable forms.
        </Paragraph>

        <Paragraph className="mt-4">
          In software, the buckets are your libraries and frameworks. Each one
          constrains a different dimension of the problem:
        </Paragraph>

        <GuardrailsSpectrum />

        <Paragraph className="mt-4">
          Notice the pattern: each layer adds guardrails, but also adds{" "}
          <Bold>composability</Bold>. Tailwind doesn't give you fewer styling
          options — it gives you a constrained token system that makes every
          option work together. shadcn doesn't give you fewer components — it
          gives you components that share the same design language.
        </Paragraph>

        {/* Interactive demo */}
        <H3 className="mt-10 text-xl font-semibold">Try It Yourself</H3>
        <Paragraph className="text-muted-foreground mt-2">
          This isn't just a metaphor. Pick your buckets and watch what happens
          to the castle.
        </Paragraph>

        <SandCastleDemo />

        {/* Section 3 */}
        <H2 className="mt-12 text-2xl font-bold">
          Why This Matters for AI Development
        </H2>

        <Paragraph className="mt-4">
          Here's the insight that changes everything: an AI working within a
          well-defined bucket system isn't just <Italic>constrained</Italic> —
          it's <Bold>amplified</Bold>. The guardrails aren't a cage. They're a
          launchpad.
        </Paragraph>

        <PollinationsImage
          prompt="architect reviewing blueprints with scaffolding around a building under construction, professional photography"
          width={800}
          height={450}
          caption="The scaffolding (tests, types, CI) holds the castle together while you build."
        />

        <Paragraph className="mt-6">
          When you tell an AI "use{" "}
          <InlineCode>@/components/typography</InlineCode> for all text" and
          "import from <InlineCode>@/components/ui/button</InlineCode> not a
          barrel file" — you're not micromanaging. You're handing it a bucket.
          Now every page it generates will use the same text components, the
          same button variants, the same spacing tokens.
        </Paragraph>

        <Paragraph className="mt-4">
          The teams winning at AI-assisted development right now aren't the ones
          with the cleverest prompts. They're the ones who invested in their
          bucket collection.
        </Paragraph>

        {/* Tabs: before/after */}
        <div className="my-8">
          <H4 className="mb-4 text-base font-semibold">
            The difference in practice
          </H4>
          <Tabs defaultValue="without">
            <TabsList className="w-full">
              <TabsTrigger value="without" className="flex-1">
                Without buckets
              </TabsTrigger>
              <TabsTrigger value="with" className="flex-1">
                With buckets
              </TabsTrigger>
            </TabsList>
            <TabsContent value="without" className="mt-4">
              <Card className="border-destructive/30 bg-destructive/5">
                <CardContent className="pt-4">
                  <Paragraph className="text-muted-foreground text-sm">
                    "Build me a navbar" →
                  </Paragraph>
                  <List className="mt-2">
                    <ListItem>
                      Random font choices, inconsistent with the rest of the
                      site
                    </ListItem>
                    <ListItem>
                      Inline styles or arbitrary Tailwind classes
                    </ListItem>
                    <ListItem>No keyboard navigation, no ARIA labels</ListItem>
                    <ListItem>Different every time you ask</ListItem>
                  </List>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="with" className="mt-4">
              <Card className="border-primary/30 bg-primary/5">
                <CardContent className="pt-4">
                  <Paragraph className="text-muted-foreground text-sm">
                    "Build me a navbar" (with registry + clinerules) →
                  </Paragraph>
                  <List className="mt-2">
                    <ListItem>
                      <InlineCode>var(--font-sekuya)</InlineCode> for the logo,
                      typography components for nav links
                    </ListItem>
                    <ListItem>
                      Theme tokens: <InlineCode>text-foreground</InlineCode>,{" "}
                      <InlineCode>bg-background/80</InlineCode>,{" "}
                      <InlineCode>border-border/40</InlineCode>
                    </ListItem>
                    <ListItem>
                      Radix-backed components handle all the accessibility
                    </ListItem>
                    <ListItem>
                      Consistent with every other page, every time
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Section 4 */}
        <H2 className="mt-12 text-2xl font-bold">The Scaffolding</H2>

        <Paragraph className="mt-4">
          Buckets shape the sand. Scaffolding holds the castle together while
          you're building — and catches it when it shifts.
        </Paragraph>

        <Paragraph className="mt-4">
          In software, scaffolding is your test suite, your CI pipeline, your
          TypeScript strict mode. It doesn't make the castle more beautiful. It
          makes it <Bold>survivable</Bold>. You can add a tower without worrying
          the whole thing collapses.
        </Paragraph>

        <PollinationsImage
          prompt="intricate sand castle with multiple towers and walls, detailed craftsmanship, golden hour beach photography"
          width={800}
          height={450}
          caption="This is what happens when you have good buckets AND good scaffolding."
        />

        <Accordion type="single" collapsible className="my-8">
          <AccordionItem value="types">
            <AccordionTrigger>TypeScript — the first scaffold</AccordionTrigger>
            <AccordionContent>
              <Paragraph className="text-muted-foreground text-sm">
                Types are the most basic scaffolding. They don't prevent you
                from building anything — they just tell you immediately when
                something won't hold. An AI generating typed code is an AI that
                gets instant feedback on whether its output is structurally
                sound.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="tests">
            <AccordionTrigger>Tests — the regression scaffold</AccordionTrigger>
            <AccordionContent>
              <Paragraph className="text-muted-foreground text-sm">
                Tests are scaffolding around the finished castle. They don't
                help you build it — they help you <Italic>keep</Italic> it.
                Every test is a promise: "this tower will still be standing
                after the next change." AI-generated code without tests is a
                castle with no scaffolding — beautiful until the tide comes in.
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="ci">
            <AccordionTrigger>CI/CD — the automated scaffold</AccordionTrigger>
            <AccordionContent>
              <Paragraph className="text-muted-foreground text-sm">
                CI is scaffolding that runs itself. Every push, it checks
                whether the castle is still standing. With AI generating code at
                speed, CI is the difference between "we ship fast" and "we ship
                fast and break things constantly."
              </Paragraph>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Section 5 — The thesis */}
        <H2 className="mt-12 text-2xl font-bold">The Thesis</H2>

        <Paragraph className="mt-4">
          The bleeding edge of AI development right now is{" "}
          <Bold>guardrail design</Bold>. Not prompt engineering. Not model
          selection. The question is: how well can you constrain an AI's output
          space while keeping it expressive enough to build real things?
        </Paragraph>

        <Blockquote className="my-6">
          The best AI collaborators aren't the ones who write the best prompts.
          They're the ones who built the best buckets.
        </Blockquote>

        <Paragraph className="mt-4">
          Tailwind is styling guardrails. shadcn is component guardrails. Radix
          is behavior guardrails. TypeScript is type guardrails. Your{" "}
          <InlineCode>.clinerules</InlineCode> file is the blueprint that tells
          the AI which buckets to use and how to fill them.
        </Paragraph>

        <Paragraph className="mt-4">
          Stack these layers correctly and something remarkable happens: the AI
          stops guessing and starts <Italic>composing</Italic>. Every page it
          generates is consistent with every other page. Every component it
          creates fits the design system. Every change it makes is type-safe.
        </Paragraph>

        <Paragraph className="mt-4">
          You're not steering the AI through freeform sand anymore. You're
          handing it a mold.
        </Paragraph>

        <PollinationsImage
          prompt="master craftsman building an elaborate sand castle with precision tools and molds, artistic photography"
          width={800}
          height={450}
          caption="The craftsman doesn't fight the sand. They work with the molds."
        />

        <Separator className="my-10" />

        {/* Closing */}
        <div className="border-border/40 bg-muted/20 rounded-2xl border p-8">
          <H3
            className="text-xl font-bold"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            The Takeaway
          </H3>
          <List className="mt-4 space-y-2">
            <ListItem>
              <Bold>Code is sand</Bold> — infinitely flexible, collapses without
              structure
            </ListItem>
            <ListItem>
              <Bold>Libraries are buckets</Bold> — give the sand shape,
              repeatable forms
            </ListItem>
            <ListItem>
              <Bold>Test suites are scaffolding</Bold> — hold the castle
              together while you build
            </ListItem>
            <ListItem>
              <Bold>Your config files are the blueprint</Bold> — tell the AI
              which buckets to use
            </ListItem>
            <ListItem>
              <Bold>The AI is the craftsman</Bold> — skilled, fast, consistent
              within the molds you give it
            </ListItem>
          </List>
          <Paragraph className="text-muted-foreground mt-6">
            The teams winning right now aren't the ones with the best AI.
            They're the ones with the best molds. Invest in your buckets.
          </Paragraph>
        </div>

        {/* Footer */}
        <div className="mt-12 flex items-center justify-between">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
          >
            ← Back to home
          </Link>
          <Small className="text-muted-foreground/40">
            Built with the very stack this article describes.
          </Small>
        </div>
      </article>
    </div>
  );
}
