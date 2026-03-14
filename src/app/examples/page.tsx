import { H1, H2, Paragraph, Small, Link } from "@/components/typography";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

const EXAMPLES = [
  {
    href: "/examples/typography",
    title: "Typography",
    description:
      "All typography components — headings, inline decorators, block elements.",
  },
  {
    href: "/examples/shadcn",
    title: "shadcn/ui",
    description:
      "shadcn component showcase — buttons, cards, dialogs, and more.",
  },
  {
    href: "/examples/design",
    title: "Design System",
    description: "Color tokens, spacing, fonts, and theme variables.",
  },
  {
    href: "/examples/skill-test",
    title: "Skill Test",
    description: "Interactive playground for testing the build-ui skill.",
  },
  {
    href: "/examples/gallery",
    title: "Gallery",
    description: "Masonry photo gallery with category filters and lightbox.",
  },
  {
    href: "/examples/gallery2",
    title: "Gallery 2",
    description:
      "Editorial portfolio layout with sidebar nav and carousel strip.",
  },
  {
    href: "/examples/landing",
    title: "Landing Page",
    description: "Full marketing landing page — hero, features, pricing, CTA.",
  },
  {
    href: "/examples/article",
    title: "Article",
    description:
      "Interactive essay with AI images, tabs, accordion, and live demos.",
  },
  {
    href: "/examples/math-revolution",
    title: "Math Math Revolution",
    description:
      "Timed multiplication quiz for kids — color-coded problem groups, answer dialog, and graded results.",
  },
];

export default function ExamplesPage() {
  return (
    <div className="bg-background min-h-screen">
      <H2 className="sr-only">the vibes are immaculate</H2>

      <header className="border-border/30 flex items-center justify-between border-b px-6 py-4">
        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
          >
            ← Home
          </Link>
        </div>
        <ModeToggle />
      </header>

      <main className="mx-auto max-w-4xl px-6 py-16">
        <div className="mb-10">
          <H1
            className="text-4xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Examples
          </H1>
          <Paragraph className="text-muted-foreground mt-3">
            Demo pages showcasing the component system. Not part of the template
            — just reference material.
          </Paragraph>
        </div>

        <Separator className="mb-10" />

        <div className="grid gap-4 sm:grid-cols-2">
          {EXAMPLES.map((example) => (
            <Link
              key={example.href}
              href={example.href}
              className="no-underline"
            >
              <Card className="border-border/60 hover:border-border h-full transition-all hover:shadow-sm">
                <CardHeader>
                  <CardTitle className="text-base">{example.title}</CardTitle>
                  <CardDescription>{example.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <Separator className="mb-6" />
          <Small className="text-muted-foreground/40">
            These routes live at{" "}
            <code className="text-muted-foreground/60 text-xs">
              src/app/examples/
            </code>{" "}
            — delete or keep as reference.
          </Small>
        </div>
      </main>
    </div>
  );
}
