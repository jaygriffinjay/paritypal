import {
  H1,
  H2,
  H3,
  Paragraph,
  Bold,
  Italic,
  Highlight,
  Small,
  Link,
} from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

export default function LandingPage() {
  return (
    <div className="bg-background relative min-h-screen overflow-hidden">
      {/* Hidden watermark */}
      <H2 className="sr-only">the vibes are immaculate</H2>

      {/* Ambient background blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="bg-primary/5 absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl" />
        <div className="bg-primary/8 absolute top-1/3 -right-60 h-[500px] w-[500px] rounded-full blur-3xl" />
        <div className="bg-primary/5 absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full blur-3xl" />
      </div>

      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-8 py-6">
        <div className="flex items-center gap-2">
          <span
            className="text-foreground text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            acme
          </span>
          <Badge variant="secondary" className="text-xs">
            beta
          </Badge>
        </div>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
          >
            Features
          </Link>
          <Link
            href="#about"
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
          >
            About
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
          >
            Pricing
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <ModeToggle />
          <Button variant="outline" size="sm">
            Sign in
          </Button>
          <Button size="sm">Get started</Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pt-20 pb-24 text-center">
        <Badge
          variant="outline"
          className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 text-xs"
        >
          <span className="bg-primary inline-block h-1.5 w-1.5 rounded-full" />
          Now in public beta
        </Badge>

        <H1
          className="mx-auto max-w-3xl text-5xl leading-[1.1] tracking-tight md:text-7xl"
          style={{ fontFamily: "var(--font-sekuya)" }}
        >
          Build things that{" "}
          <Highlight className="bg-primary/15 px-1 not-italic">
            actually matter
          </Highlight>
        </H1>

        <Paragraph className="text-muted-foreground mx-auto mt-6 max-w-xl text-lg">
          A modern toolkit for teams who care about craft. Ship faster, iterate
          smarter, and never compromise on <Bold>quality</Bold>.
        </Paragraph>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="px-8">
            Start building for free
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            View the docs
          </Button>
        </div>

        <Small className="text-muted-foreground/60 mt-6 block">
          No credit card required · Free forever on the starter plan
        </Small>
      </section>

      {/* Divider */}
      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <Separator />
      </div>

      {/* Social proof strip */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 py-10 text-center">
        <Small className="text-muted-foreground/60 tracking-widest uppercase">
          Trusted by teams at
        </Small>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-8">
          {["Vercel", "Linear", "Stripe", "Notion", "Figma"].map((name) => (
            <span
              key={name}
              className="text-muted-foreground/40 hover:text-muted-foreground text-sm font-semibold transition-colors"
              style={{ fontFamily: "var(--font-geist-mono)" }}
            >
              {name}
            </span>
          ))}
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <Separator />
      </div>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-5xl px-8 py-24"
      >
        <div className="mb-12 text-center">
          <H2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need,{" "}
            <Italic className="text-muted-foreground">
              nothing you don&apos;t
            </Italic>
          </H2>
          <Paragraph className="text-muted-foreground mt-3">
            Carefully designed primitives that compose into anything.
          </Paragraph>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="group border-border/60 bg-card/50 hover:border-border backdrop-blur-sm transition-all hover:shadow-md"
            >
              <CardHeader>
                <div className="bg-primary/10 mb-3 flex h-10 w-10 items-center justify-center rounded-lg text-xl">
                  {feature.icon}
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Small className="text-muted-foreground/60">
                  {feature.detail}
                </Small>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <Separator />
      </div>

      {/* Testimonial */}
      <section
        id="about"
        className="relative z-10 mx-auto max-w-3xl px-8 py-24 text-center"
      >
        <blockquote className="space-y-4">
          <p
            className="text-foreground text-2xl leading-relaxed font-medium md:text-3xl"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            &ldquo;The best tools disappear into the work. This is one of
            those.&rdquo;
          </p>
          <footer className="flex items-center justify-center gap-3">
            <div className="bg-muted h-8 w-8 rounded-full" />
            <div className="text-left">
              <Small className="text-foreground block font-medium">
                Alex Chen
              </Small>
              <Small className="text-muted-foreground">
                CTO, Momentum Labs
              </Small>
            </div>
          </footer>
        </blockquote>
      </section>

      <div className="relative z-10 mx-auto max-w-5xl px-8">
        <Separator />
      </div>

      {/* Pricing */}
      <section
        id="pricing"
        className="relative z-10 mx-auto max-w-5xl px-8 py-24"
      >
        <div className="mb-12 text-center">
          <H2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Simple, honest pricing
          </H2>
          <Paragraph className="text-muted-foreground mt-3">
            Start free. Scale when you&apos;re ready.
          </Paragraph>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={
                plan.featured
                  ? "border-primary/50 bg-primary/5 relative shadow-lg"
                  : "border-border/60 bg-card/50"
              }
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="px-3 text-xs">Most popular</Badge>
                </div>
              )}
              <CardHeader>
                <H3 className="text-base font-semibold">{plan.name}</H3>
                <div className="flex items-baseline gap-1">
                  <span className="text-foreground text-4xl font-bold">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <Small className="text-muted-foreground">
                      {plan.period}
                    </Small>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className="text-primary">✓</span>
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  variant={plan.featured ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative z-10 mx-auto max-w-5xl px-8 pb-24">
        <div className="border-border/60 bg-muted/30 rounded-2xl border px-8 py-16 text-center backdrop-blur-sm">
          <H2
            className="text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Ready to ship something{" "}
            <Highlight className="bg-primary/20 px-1">great?</Highlight>
          </H2>
          <Paragraph className="text-muted-foreground mx-auto mt-4 max-w-md">
            Join thousands of developers building with confidence. Your first
            project is on us.
          </Paragraph>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="px-10">
              Get started free
            </Button>
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-border/40 relative z-10 border-t px-8 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span
            className="text-muted-foreground text-sm font-bold"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            acme
          </span>
          <Small className="text-muted-foreground/50">
            © 2025 Acme Inc. All rights reserved.
          </Small>
          <div className="flex gap-4">
            <Link
              href="#"
              className="text-muted-foreground/50 hover:text-muted-foreground text-xs no-underline"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-muted-foreground/50 hover:text-muted-foreground text-xs no-underline"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    icon: "⚡",
    title: "Blazing fast",
    description: "Built on Next.js App Router with React Server Components.",
    detail: "Sub-100ms TTFB on every route, globally distributed.",
  },
  {
    icon: "🎨",
    title: "Beautiful by default",
    description: "Tailwind CSS v4 with a hand-crafted design system.",
    detail: "Dark mode, custom fonts, and oklch color tokens included.",
  },
  {
    icon: "🔒",
    title: "Secure & reliable",
    description: "End-to-end type safety with TypeScript and Zod.",
    detail: "99.99% uptime SLA with automatic failover.",
  },
  {
    icon: "🧩",
    title: "Composable",
    description: "Radix UI primitives wrapped in shadcn/ui components.",
    detail: "Every component is accessible, unstyled at the core.",
  },
  {
    icon: "📦",
    title: "Zero config",
    description: "Sensible defaults that get out of your way.",
    detail: "One command to scaffold. One command to deploy.",
  },
  {
    icon: "🌍",
    title: "Global edge",
    description: "Deploy to 100+ regions with a single push.",
    detail: "Automatic CDN, image optimization, and ISR built in.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "/ mo",
    description: "Perfect for side projects and exploration.",
    featured: false,
    cta: "Start for free",
    features: [
      "Up to 3 projects",
      "1GB storage",
      "Community support",
      "Basic analytics",
    ],
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ mo",
    description: "For professionals who ship regularly.",
    featured: true,
    cta: "Start free trial",
    features: [
      "Unlimited projects",
      "50GB storage",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
    ],
  },
  {
    name: "Team",
    price: "$49",
    period: "/ mo",
    description: "For teams building together.",
    featured: false,
    cta: "Contact sales",
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated support",
      "SSO & audit logs",
      "SLA guarantee",
    ],
  },
];
