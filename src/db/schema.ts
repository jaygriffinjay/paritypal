import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const puzzles = sqliteTable("puzzles", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
});

export const cases = sqliteTable("cases", {
  id: text("id").primaryKey(),
  puzzleId: text("puzzle_id")
    .notNull()
    .references(() => puzzles.id),
  title: text("title").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description").notNull(),
  imageId: text("image_id"),
  tags: text("tags", { mode: "json" }).$type<string[]>().notNull().default([]),
  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  updatedAt: integer("updated_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
});

export const algs = sqliteTable("algs", {
  id: text("id").primaryKey(),
  caseId: text("case_id")
    .notNull()
    .references(() => cases.id),
  notation: text("notation").notNull(),
  moveCount: integer("move_count").notNull(),
  difficulty: text("difficulty", {
    enum: ["beginner", "intermediate", "advanced"],
  }).notNull(),
  notes: text("notes"),
});

export const aliases = sqliteTable("aliases", {
  id: text("id").primaryKey(),
  caseId: text("case_id")
    .notNull()
    .references(() => cases.id),
  alias: text("alias").notNull(),
});
