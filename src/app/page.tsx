import { ModeToggle } from "@/components/mode-toggle";
import { H1, Paragraph, Link } from "@/components/typography";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <H1 className="text-5xl font-bold tracking-tight">Hello World</H1>
      <Paragraph className="text-muted-foreground text-lg">
        Fresh start. Tailwind + shadcn + Radix.
      </Paragraph>
      <div className="flex items-center gap-4">
        <ModeToggle />
        <Link href="/examples">Examples →</Link>
      </div>
    </div>
  );
}
