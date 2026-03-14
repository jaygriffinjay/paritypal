import { getCase } from "@/db/queries";
import { notFound } from "next/navigation";
import {
  H1,
  H2,
  Paragraph,
  Small,
  Bold,
  InlineCode,
  Link,
  List,
  ListItem,
} from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  params: Promise<{ slug: string }>;
};

const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const c = await getCase(slug);
  if (!c) notFound();

  const sortedAlgs = [...c.algs].sort(
    (a, b) => difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty],
  );

  return (
    <div className="mx-auto max-w-2xl px-6 py-10 space-y-8">
      <div className="space-y-1">
        <Small className="text-muted-foreground">
          <Link href="/search">← Search</Link>
        </Small>
        <div className="flex items-start justify-between gap-4">
          <H1>{c.title}</H1>
          <Badge variant="outline" className="mt-1 shrink-0">
            {c.puzzleName}
          </Badge>
        </div>
        <Paragraph className="text-muted-foreground">{c.description}</Paragraph>
        <div className="flex flex-wrap gap-1 pt-1">
          {c.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <Separator />

      <section className="space-y-4">
        <H2>Algorithms</H2>
        {sortedAlgs.length === 0 ? (
          <Paragraph className="text-muted-foreground text-sm">
            No algorithms yet.
          </Paragraph>
        ) : (
          <div className="space-y-3">
            {sortedAlgs.map((alg) => (
              <Card key={alg.id}>
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2">
                    <Badge
                      variant={
                        alg.difficulty === "beginner"
                          ? "secondary"
                          : alg.difficulty === "intermediate"
                            ? "default"
                            : "destructive"
                      }
                      className="text-xs capitalize"
                    >
                      {alg.difficulty}
                    </Badge>
                    <Small className="text-muted-foreground">
                      {alg.moveCount} moves
                    </Small>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <InlineCode className="block text-sm leading-relaxed break-all">
                    {alg.notation}
                  </InlineCode>
                  {alg.notes && (
                    <Small className="text-muted-foreground">{alg.notes}</Small>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

      {c.aliases.length > 0 && (
        <>
          <Separator />
          <section className="space-y-2">
            <H2>Also known as</H2>
            <List>
              {c.aliases.map((alias) => (
                <ListItem key={alias}>{alias}</ListItem>
              ))}
            </List>
          </section>
        </>
      )}
    </div>
  );
}
