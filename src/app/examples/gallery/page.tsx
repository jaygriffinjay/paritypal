"use client";

import { useState } from "react";
import {
  H1,
  H2,
  H3,
  Paragraph,
  Small,
  Bold,
  Highlight,
  Link,
} from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModeToggle } from "@/components/mode-toggle";

const CATEGORIES = [
  { label: "All", value: "all" },
  { label: "Nature", value: "nature" },
  { label: "Architecture", value: "architecture" },
  { label: "Travel", value: "travel" },
  { label: "Abstract", value: "abstract" },
  { label: "City", value: "city" },
];

// Picsum Photos — free, no API key, stable URLs
// https://picsum.photos/seed/{seed}/width/height
const PHOTOS = [
  {
    id: 1,
    seed: "forest1",
    category: "nature",
    title: "Morning Mist",
    location: "Pacific Northwest",
    w: 800,
    h: 600,
  },
  {
    id: 2,
    seed: "arch2",
    category: "architecture",
    title: "Glass Tower",
    location: "Chicago, IL",
    w: 600,
    h: 800,
  },
  {
    id: 3,
    seed: "travel3",
    category: "travel",
    title: "Golden Hour",
    location: "Santorini, Greece",
    w: 800,
    h: 600,
  },
  {
    id: 4,
    seed: "abstract4",
    category: "abstract",
    title: "Chromatic Flow",
    location: "Studio",
    w: 800,
    h: 800,
  },
  {
    id: 5,
    seed: "city5",
    category: "city",
    title: "Neon Nights",
    location: "Tokyo, Japan",
    w: 800,
    h: 600,
  },
  {
    id: 6,
    seed: "nature6",
    category: "nature",
    title: "Alpine Lake",
    location: "Swiss Alps",
    w: 600,
    h: 800,
  },
  {
    id: 7,
    seed: "arch7",
    category: "architecture",
    title: "Brutalist Lines",
    location: "London, UK",
    w: 800,
    h: 600,
  },
  {
    id: 8,
    seed: "travel8",
    category: "travel",
    title: "Desert Dunes",
    location: "Sahara, Morocco",
    w: 800,
    h: 600,
  },
  {
    id: 9,
    seed: "abstract9",
    category: "abstract",
    title: "Liquid Light",
    location: "Studio",
    w: 600,
    h: 800,
  },
  {
    id: 10,
    seed: "city10",
    category: "city",
    title: "Rush Hour",
    location: "New York, NY",
    w: 800,
    h: 600,
  },
  {
    id: 11,
    seed: "nature11",
    category: "nature",
    title: "Autumn Canopy",
    location: "Vermont, USA",
    w: 800,
    h: 800,
  },
  {
    id: 12,
    seed: "arch12",
    category: "architecture",
    title: "Spiral Staircase",
    location: "Rome, Italy",
    w: 600,
    h: 800,
  },
];

function photoUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<(typeof PHOTOS)[0] | null>(null);

  const filtered =
    activeCategory === "all"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-background min-h-screen">
      {/* Watermark */}
      <H2 className="sr-only">the vibes are immaculate</H2>

      {/* Header */}
      <header className="border-border/40 bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm no-underline transition-colors"
            >
              ← Home
            </Link>
            <Separator orientation="vertical" className="h-4" />
            <H1
              className="text-lg font-bold tracking-tight"
              style={{ fontFamily: "var(--font-sekuya)" }}
            >
              Gallery
            </H1>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="text-xs">
              {filtered.length} photos
            </Badge>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-16 pb-8 text-center">
        <H1
          className="text-5xl font-bold tracking-tight md:text-6xl"
          style={{ fontFamily: "var(--font-sekuya)" }}
        >
          A world worth{" "}
          <Highlight className="bg-primary/15 px-1">seeing</Highlight>
        </H1>
        <Paragraph className="text-muted-foreground mx-auto mt-4 max-w-lg text-lg">
          Curated photography from around the globe. Every frame tells a story.
        </Paragraph>
      </section>

      {/* Category filter */}
      <div className="mx-auto max-w-7xl px-6 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat.value}
              variant={activeCategory === cat.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(cat.value)}
              className="rounded-full"
            >
              {cat.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Masonry-style grid */}
      <main className="mx-auto max-w-7xl px-6 pb-24">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {filtered.map((photo) => (
            <div
              key={photo.id}
              className="group mb-4 cursor-pointer break-inside-avoid overflow-hidden rounded-xl"
              onClick={() => setLightbox(photo)}
            >
              <div className="relative overflow-hidden rounded-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photoUrl(photo.seed, photo.w, photo.h)}
                  alt={photo.title}
                  width={photo.w}
                  height={photo.h}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <H3
                    className="text-sm font-semibold text-white"
                    style={{ fontFamily: "var(--font-geist-sans)" }}
                  >
                    {photo.title}
                  </H3>
                  <Small className="text-white/70">{photo.location}</Small>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-24 text-center">
            <Paragraph className="text-muted-foreground">
              No photos in this category yet.
            </Paragraph>
          </div>
        )}
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl overflow-hidden rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoUrl(lightbox.seed, lightbox.w * 2, lightbox.h * 2)}
              alt={lightbox.title}
              className="max-h-[80vh] w-auto object-contain"
            />
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <H2
                className="text-xl font-bold text-white"
                style={{ fontFamily: "var(--font-sekuya)" }}
              >
                {lightbox.title}
              </H2>
              <Small className="text-white/60">{lightbox.location}</Small>
            </div>
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-black/80"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-border/40 border-t px-6 py-8 text-center">
        <Small className="text-muted-foreground/50">
          Photos served by{" "}
          <Bold className="text-muted-foreground/70">Picsum Photos</Bold> ·{" "}
          <Link
            href="https://picsum.photos"
            target="_blank"
            className="text-muted-foreground/50 text-xs"
          >
            picsum.photos
          </Link>
        </Small>
      </footer>
    </div>
  );
}
