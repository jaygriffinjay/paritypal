import { H1, Small } from "@/components/typography";
import { Link } from "@/components/typography";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="w-full max-w-xl space-y-8">
        <div className="space-y-1 text-center">
          <H1>ParityPal</H1>
          <Small className="text-muted-foreground">
            Twisty puzzle algorithms &amp; parity cases
          </Small>
        </div>

        <form action="/search" method="GET" className="flex gap-2">
          <Input
            name="q"
            placeholder="e.g. 4x4 parity, two edges swapped..."
            autoFocus
            autoComplete="off"
          />
          <Button type="submit">Search</Button>
        </form>
      </div>

      <div className="absolute bottom-8 w-full max-w-xl px-6">
        <Separator className="mb-4" />
        <nav className="space-y-1">
          <Small className="text-muted-foreground uppercase tracking-wide font-medium">
            Routes
          </Small>
          <ul className="space-y-1 pt-1">
            <li>
              <Link href="/search">/search</Link>
              <Small className="text-muted-foreground ml-2">
                — Search cases and algorithms
              </Small>
            </li>
            <li>
              <Small className="text-primary">/cases/[slug]</Small>
              <Small className="text-muted-foreground ml-2">
                — Individual case detail with algorithms
              </Small>
            </li>
            <li>
              <Link href="/design">/design</Link>
              <Small className="text-muted-foreground ml-2">
                — How the app is put together and why
              </Small>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
