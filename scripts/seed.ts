import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { nanoid } from "nanoid";
import * as schema from "../src/db/schema";

const client = createClient({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN!,
});

const db = drizzle(client, { schema });

async function seed() {
  console.log("Seeding...");

  // Puzzles
  const puzzle4x4Id = nanoid();
  const puzzle5x5Id = nanoid();
  const puzzleMegaminxId = nanoid();

  await db.insert(schema.puzzles).values([
    { id: puzzle4x4Id, name: "4x4 Rubik's Cube", slug: "4x4" },
    { id: puzzle5x5Id, name: "5x5 Rubik's Cube", slug: "5x5" },
    { id: puzzleMegaminxId, name: "Megaminx", slug: "megaminx" },
  ]);

  // Cases
  const ollParityId = nanoid();
  const pllParityId = nanoid();
  const fiveEdgeParityId = nanoid();
  const centerOrientId = nanoid();
  const megaminxParityId = nanoid();

  await db.insert(schema.cases).values([
    {
      id: ollParityId,
      puzzleId: puzzle4x4Id,
      title: "4x4 OLL Parity",
      slug: "4x4-oll-parity",
      description:
        "Single edge piece appears flipped on the last layer. The top layer has one edge oriented incorrectly, making a normal OLL impossible. Also called the odd parity case.",
      tags: ["parity", "OLL", "edges", "last-layer"],
    },
    {
      id: pllParityId,
      puzzleId: puzzle4x4Id,
      title: "4x4 PLL Parity",
      slug: "4x4-pll-parity",
      description:
        "Two adjacent or opposite edge pieces are swapped on the last layer after OLL is complete. Looks like an impossible PLL skip — two pieces that can't be fixed with any 3x3 PLL algorithm.",
      tags: ["parity", "PLL", "edges", "last-layer"],
    },
    {
      id: fiveEdgeParityId,
      puzzleId: puzzle5x5Id,
      title: "5x5 Edge Parity",
      slug: "5x5-edge-parity",
      description:
        "One or more edge tredges are flipped or mismatched during the edge pairing stage. Two wing pieces are swapped within an edge group, or a tredge appears flipped after pairing.",
      tags: ["parity", "edges", "reduction", "pairing"],
    },
    {
      id: centerOrientId,
      puzzleId: puzzle4x4Id,
      title: "4x4 Center Orientation",
      slug: "4x4-center-orientation",
      description:
        "Centers are solved positionally but one or more is rotated — visible on logo cubes or tiles. A single center face is twisted relative to its correct orientation.",
      tags: ["centers", "orientation", "reduction"],
    },
    {
      id: megaminxParityId,
      puzzleId: puzzleMegaminxId,
      title: "Megaminx Last Layer Parity",
      slug: "megaminx-last-layer-parity",
      description:
        "Two corners appear swapped or two edges appear flipped on the last layer of a megaminx, making standard last-layer algorithms fail to solve the puzzle.",
      tags: ["parity", "last-layer", "corners", "edges"],
    },
  ]);

  // Algs
  await db.insert(schema.algs).values([
    {
      id: nanoid(),
      caseId: ollParityId,
      notation: "r U2 x r U2 r U2 r' U2 l U2 r' U2 r U2 r' U2 r'",
      moveCount: 18,
      difficulty: "beginner",
      notes: "Standard OLL parity fix. Works from any angle.",
    },
    {
      id: nanoid(),
      caseId: pllParityId,
      notation: "r2 U2 r2 Uw2 r2 Uw2",
      moveCount: 6,
      difficulty: "beginner",
      notes: "Adjacent edge swap. Apply when two side-by-side edges are swapped.",
    },
    {
      id: nanoid(),
      caseId: pllParityId,
      notation: "Uw2 r2 U2 r2 Uw2 r2 U2",
      moveCount: 7,
      difficulty: "beginner",
      notes: "Opposite edge swap. Apply when two edges across from each other are swapped.",
    },
    {
      id: nanoid(),
      caseId: fiveEdgeParityId,
      notation: "[r U' r U r U r U' r' U' r2] [same on other side]",
      moveCount: 22,
      difficulty: "intermediate",
      notes: "Flip a single tredge during edge pairing without affecting solved edges.",
    },
    {
      id: nanoid(),
      caseId: centerOrientId,
      notation: "f R f' U f R' f' U f R f' U f R' f'",
      moveCount: 14,
      difficulty: "intermediate",
      notes: "Rotates a single center 90 degrees. Repeat for 180 degree rotation.",
    },
  ]);

  // Aliases
  await db.insert(schema.aliases).values([
    { id: nanoid(), caseId: ollParityId, alias: "single edge flipped" },
    { id: nanoid(), caseId: ollParityId, alias: "edge flip last layer" },
    { id: nanoid(), caseId: ollParityId, alias: "odd parity" },
    { id: nanoid(), caseId: ollParityId, alias: "one edge wrong way" },
    { id: nanoid(), caseId: pllParityId, alias: "two edges swapped" },
    { id: nanoid(), caseId: pllParityId, alias: "edges switched" },
    { id: nanoid(), caseId: pllParityId, alias: "impossible PLL" },
    { id: nanoid(), caseId: fiveEdgeParityId, alias: "edge pairing problem" },
    { id: nanoid(), caseId: fiveEdgeParityId, alias: "wing pieces swapped" },
    { id: nanoid(), caseId: fiveEdgeParityId, alias: "tredge flipped" },
    { id: nanoid(), caseId: centerOrientId, alias: "center twisted" },
    { id: nanoid(), caseId: centerOrientId, alias: "center rotated" },
    { id: nanoid(), caseId: centerOrientId, alias: "logo facing wrong way" },
    { id: nanoid(), caseId: megaminxParityId, alias: "megaminx two corners swapped" },
    { id: nanoid(), caseId: megaminxParityId, alias: "megaminx edges flipped" },
  ]);

  console.log("Done.");
  process.exit(0);
}

seed().catch((err) => {
  console.error(err);
  process.exit(1);
});
