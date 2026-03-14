import { searchCases } from "@/db/queries";
import { H1, H2, Paragraph, Small, Bold, Link } from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const results = query ? await searchCases(query) : [];

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 space-y-8">
      <form action="/search" method="GET" className="flex gap-2">
        <Input
          name="q"
          defaultValue={query}
          placeholder="e.g. 4x4 parity, two edges swapped..."
          autoFocus
          autoComplete="off"
        />
        <Button type="submit">Search</Button>
      </form>

      {query && (
        <div className="space-y-2">
          <Small className="text-muted-foreground">
            {results.length === 0
              ? `No results for "${query}"`
              : `${results.length} result${results.length === 1 ? "" : "s"} for "${query}"`}
          </Small>
          <Separator />
        </div>
      )}

      {results.length > 0 && (
        <div className="space-y-4">
          {results.map((r) => (
            <Link key={r.id} href={`/cases/${r.slug}`} className="block no-underline">
              <Card className="hover:bg-muted/50 transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-base">{r.title}</CardTitle>
                    <Badge variant="outline" className="shrink-0 text-xs">
                      {r.puzzleName}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {r.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1">
                    {r.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}

      {!query && (
        <Paragraph className="text-muted-foreground text-sm">
          Try searching for a puzzle name, case type, or plain description —{" "}
          <Bold>"4x4 parity"</Bold>, <Bold>"two edges swapped"</Bold>,{" "}
          <Bold>"megaminx last layer"</Bold>
        </Paragraph>
      )}
    </div>
  );
}
