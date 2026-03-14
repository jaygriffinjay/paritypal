import { db } from "./index";
import { cases, algs, aliases, puzzles } from "./schema";
import { eq, like, or, sql } from "drizzle-orm";

export type SearchResult = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  puzzleName: string;
  puzzleSlug: string;
  matchType: "title" | "alias" | "description";
};

export type CaseDetail = {
  id: string;
  title: string;
  slug: string;
  description: string;
  tags: string[];
  puzzleName: string;
  puzzleSlug: string;
  algs: {
    id: string;
    notation: string;
    moveCount: number;
    difficulty: "beginner" | "intermediate" | "advanced";
    notes: string | null;
  }[];
  aliases: string[];
};

export async function searchCases(q: string): Promise<SearchResult[]> {
  const term = `%${q}%`;

  const titleMatches = await db
    .select({
      id: cases.id,
      title: cases.title,
      slug: cases.slug,
      description: cases.description,
      tags: cases.tags,
      puzzleName: puzzles.name,
      puzzleSlug: puzzles.slug,
    })
    .from(cases)
    .innerJoin(puzzles, eq(cases.puzzleId, puzzles.id))
    .where(like(cases.title, term));

  const aliasMatches = await db
    .select({
      id: cases.id,
      title: cases.title,
      slug: cases.slug,
      description: cases.description,
      tags: cases.tags,
      puzzleName: puzzles.name,
      puzzleSlug: puzzles.slug,
    })
    .from(cases)
    .innerJoin(puzzles, eq(cases.puzzleId, puzzles.id))
    .innerJoin(aliases, eq(aliases.caseId, cases.id))
    .where(like(aliases.alias, term));

  const descriptionMatches = await db
    .select({
      id: cases.id,
      title: cases.title,
      slug: cases.slug,
      description: cases.description,
      tags: cases.tags,
      puzzleName: puzzles.name,
      puzzleSlug: puzzles.slug,
    })
    .from(cases)
    .innerJoin(puzzles, eq(cases.puzzleId, puzzles.id))
    .where(like(cases.description, term));

  // Merge in priority order, deduplicate by id
  const seen = new Set<string>();
  const results: SearchResult[] = [];

  for (const row of titleMatches) {
    if (!seen.has(row.id)) {
      seen.add(row.id);
      results.push({ ...row, matchType: "title" });
    }
  }
  for (const row of aliasMatches) {
    if (!seen.has(row.id)) {
      seen.add(row.id);
      results.push({ ...row, matchType: "alias" });
    }
  }
  for (const row of descriptionMatches) {
    if (!seen.has(row.id)) {
      seen.add(row.id);
      results.push({ ...row, matchType: "description" });
    }
  }

  return results;
}

export async function getCase(slug: string): Promise<CaseDetail | null> {
  const rows = await db
    .select({
      id: cases.id,
      title: cases.title,
      slug: cases.slug,
      description: cases.description,
      tags: cases.tags,
      puzzleName: puzzles.name,
      puzzleSlug: puzzles.slug,
      algId: algs.id,
      notation: algs.notation,
      moveCount: algs.moveCount,
      difficulty: algs.difficulty,
      notes: algs.notes,
    })
    .from(cases)
    .innerJoin(puzzles, eq(cases.puzzleId, puzzles.id))
    .leftJoin(algs, eq(algs.caseId, cases.id))
    .where(eq(cases.slug, slug));

  if (rows.length === 0) return null;

  const aliasRows = await db
    .select({ alias: aliases.alias })
    .from(aliases)
    .where(eq(aliases.caseId, rows[0].id));

  const { id, title, description, tags, puzzleName, puzzleSlug } = rows[0];

  return {
    id,
    title,
    slug,
    description,
    tags,
    puzzleName,
    puzzleSlug,
    algs: rows
      .filter((r) => r.algId !== null)
      .map((r) => ({
        id: r.algId!,
        notation: r.notation!,
        moveCount: r.moveCount!,
        difficulty: r.difficulty as "beginner" | "intermediate" | "advanced",
        notes: r.notes,
      })),
    aliases: aliasRows.map((r) => r.alias),
  };
}
