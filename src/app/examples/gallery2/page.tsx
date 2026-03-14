"use client";

import { useState } from "react";
import {
  H1,
  H2,
  H3,
  Paragraph,
  Small,
  Bold,
  Italic,
  Highlight,
  Link,
} from "@/components/typography";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ModeToggle } from "@/components/mode-toggle";
import { cn } from "@/lib/utils";

const COLLECTIONS = [
  {
    id: "nature",
    label: "Nature",
    count: 4,
    photos: [
      {
        seed: "forest1",
        w: 1200,
        h: 800,
        title: "Morning Mist",
        location: "Pacific Northwest",
        year: "2024",
      },
      {
        seed: "nature6",
        w: 800,
        h: 1200,
        title: "Alpine Lake",
        location: "Swiss Alps",
        year: "2024",
      },
      {
        seed: "nature11",
        w: 1200,
        h: 1200,
        title: "Autumn Canopy",
        location: "Vermont, USA",
        year: "2023",
      },
      {
        seed: "nature20",
        w: 1200,
        h: 800,
        title: "Coastal Fog",
        location: "Big Sur, CA",
        year: "2023",
      },
    ],
  },
  {
    id: "architecture",
    label: "Architecture",
    count: 4,
    photos: [
      {
        seed: "arch2",
        w: 800,
        h: 1200,
        title: "Glass Tower",
        location: "Chicago, IL",
        year: "2024",
      },
      {
        seed: "arch7",
        w: 1200,
        h: 800,
        title: "Brutalist Lines",
        location: "London, UK",
        year: "2024",
      },
      {
        seed: "arch12",
        w: 800,
        h: 1200,
        title: "Spiral Staircase",
        location: "Rome, Italy",
        year: "2023",
      },
      {
        seed: "arch22",
        w: 1200,
        h: 800,
        title: "Steel & Glass",
        location: "Dubai, UAE",
        year: "2023",
      },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    count: 4,
    photos: [
      {
        seed: "travel3",
        w: 1200,
        h: 800,
        title: "Golden Hour",
        location: "Santorini, Greece",
        year: "2024",
      },
      {
        seed: "travel8",
        w: 1200,
        h: 800,
        title: "Desert Dunes",
        location: "Sahara, Morocco",
        year: "2024",
      },
      {
        seed: "travel15",
        w: 800,
        h: 1200,
        title: "Night Market",
        location: "Bangkok, Thailand",
        year: "2023",
      },
      {
        seed: "travel30",
        w: 1200,
        h: 800,
        title: "Fjord Light",
        location: "Norway",
        year: "2023",
      },
    ],
  },
  {
    id: "abstract",
    label: "Abstract",
    count: 4,
    photos: [
      {
        seed: "abstract4",
        w: 1200,
        h: 1200,
        title: "Chromatic Flow",
        location: "Studio",
        year: "2024",
      },
      {
        seed: "abstract9",
        w: 800,
        h: 1200,
        title: "Liquid Light",
        location: "Studio",
        year: "2024",
      },
      {
        seed: "abstract18",
        w: 1200,
        h: 800,
        title: "Interference",
        location: "Studio",
        year: "2023",
      },
      {
        seed: "abstract25",
        w: 1200,
        h: 1200,
        title: "Void",
        location: "Studio",
        year: "2023",
      },
    ],
  },
  {
    id: "city",
    label: "City",
    count: 4,
    photos: [
      {
        seed: "city5",
        w: 1200,
        h: 800,
        title: "Neon Nights",
        location: "Tokyo, Japan",
        year: "2024",
      },
      {
        seed: "city10",
        w: 1200,
        h: 800,
        title: "Rush Hour",
        location: "New York, NY",
        year: "2024",
      },
      {
        seed: "city17",
        w: 800,
        h: 1200,
        title: "Rooftop",
        location: "Hong Kong",
        year: "2023",
      },
      {
        seed: "city28",
        w: 1200,
        h: 800,
        title: "Blue Hour",
        location: "Paris, France",
        year: "2023",
      },
    ],
  },
];

function photoUrl(seed: string, w: number, h: number) {
  return `https://picsum.photos/seed/${seed}/${w}/${h}`;
}

export default function Gallery2Page() {
  const [activeCollection, setActiveCollection] = useState(COLLECTIONS[0]);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featured = activeCollection.photos[featuredIndex];

  function handleCollectionChange(col: (typeof COLLECTIONS)[0]) {
    setActiveCollection(col);
    setFeaturedIndex(0);
  }

  return (
    <div className="bg-background flex h-screen flex-col overflow-hidden">
      {/* Watermark */}
      <H2 className="sr-only">the vibes are immaculate</H2>

      {/* Top bar */}
      <header className="border-border/30 flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-xs no-underline transition-colors"
          >
            ← Home
          </Link>
          <Separator orientation="vertical" className="h-3" />
          <span
            className="text-foreground text-sm font-bold tracking-widest uppercase"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Folio
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Small className="text-muted-foreground/50 hidden md:block">
            {activeCollection.photos.length} works in{" "}
            <Bold className="text-muted-foreground/70">
              {activeCollection.label}
            </Bold>
          </Small>
          <ModeToggle />
        </div>
      </header>

      {/* Main layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="border-border/30 flex w-48 shrink-0 flex-col border-r py-8">
          <div className="px-6 pb-4">
            <Small className="text-muted-foreground/40 tracking-widest uppercase">
              Collections
            </Small>
          </div>
          <nav className="flex flex-col gap-0.5 px-3">
            {COLLECTIONS.map((col) => (
              <button
                key={col.id}
                onClick={() => handleCollectionChange(col)}
                className={cn(
                  "group flex items-center justify-between rounded-lg px-3 py-2 text-left transition-all",
                  activeCollection.id === col.id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                <span className="text-sm font-medium">{col.label}</span>
                <span
                  className={cn(
                    "text-xs tabular-nums",
                    activeCollection.id === col.id
                      ? "text-background/60"
                      : "text-muted-foreground/40",
                  )}
                >
                  {col.count}
                </span>
              </button>
            ))}
          </nav>

          {/* Bottom of sidebar */}
          <div className="mt-auto px-6 pt-8">
            <Separator className="mb-4" />
            <Small className="text-muted-foreground/40 block leading-relaxed">
              Photography by{" "}
              <Link
                href="https://picsum.photos"
                target="_blank"
                className="text-muted-foreground/50 text-xs"
              >
                Picsum
              </Link>
            </Small>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex flex-1 flex-col overflow-hidden">
          {/* Featured image */}
          <div className="relative flex-1 overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={featured.seed}
              src={photoUrl(featured.seed, featured.w, featured.h)}
              alt={featured.title}
              className="h-full w-full object-cover transition-opacity duration-500"
            />

            {/* Caption overlay — bottom left */}
            <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-8">
              <div className="flex items-end justify-between">
                <div>
                  <H1
                    className="text-3xl font-bold text-white md:text-5xl"
                    style={{ fontFamily: "var(--font-sekuya)" }}
                  >
                    {featured.title}
                  </H1>
                  <div className="mt-2 flex items-center gap-3">
                    <Small className="text-white/60">{featured.location}</Small>
                    <span className="text-white/30">·</span>
                    <Small className="text-white/40">{featured.year}</Small>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className="border-white/20 text-xs text-white/60"
                  >
                    {featuredIndex + 1} / {activeCollection.photos.length}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Collection label — top right */}
            <div className="absolute top-6 right-6">
              <Badge
                variant="secondary"
                className="border-white/10 bg-black/40 text-white/70 backdrop-blur-sm"
              >
                {activeCollection.label}
              </Badge>
            </div>
          </div>

          {/* Carousel strip */}
          <div className="border-border/30 bg-muted/20 border-t px-8 py-4">
            <Carousel opts={{ align: "start", loop: false }} className="w-full">
              <CarouselContent className="-ml-3">
                {activeCollection.photos.map((photo, i) => (
                  <CarouselItem
                    key={photo.seed}
                    className="basis-1/4 pl-3 md:basis-1/5 lg:basis-1/6"
                  >
                    <button
                      onClick={() => setFeaturedIndex(i)}
                      className={cn(
                        "group relative w-full overflow-hidden rounded-lg transition-all",
                        featuredIndex === i
                          ? "ring-foreground ring-offset-background ring-2 ring-offset-2"
                          : "opacity-50 hover:opacity-80",
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photoUrl(photo.seed, 300, 200)}
                        alt={photo.title}
                        className="aspect-[3/2] w-full object-cover"
                      />
                      {featuredIndex === i && (
                        <div className="bg-foreground/10 absolute inset-0" />
                      )}
                    </button>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-3" />
              <CarouselNext className="-right-3" />
            </Carousel>
          </div>
        </main>

        {/* Right panel — metadata */}
        <aside className="border-border/30 hidden w-56 shrink-0 flex-col border-l py-8 lg:flex">
          <div className="px-6">
            <Small className="text-muted-foreground/40 tracking-widest uppercase">
              Details
            </Small>

            <div className="mt-6 space-y-5">
              <div>
                <Small className="text-muted-foreground/40 mb-1 block">
                  Title
                </Small>
                <H3
                  className="text-sm font-semibold"
                  style={{ fontFamily: "var(--font-sekuya)" }}
                >
                  {featured.title}
                </H3>
              </div>
              <Separator />
              <div>
                <Small className="text-muted-foreground/40 mb-1 block">
                  Location
                </Small>
                <Paragraph className="text-sm">{featured.location}</Paragraph>
              </div>
              <Separator />
              <div>
                <Small className="text-muted-foreground/40 mb-1 block">
                  Year
                </Small>
                <Paragraph className="text-sm">{featured.year}</Paragraph>
              </div>
              <Separator />
              <div>
                <Small className="text-muted-foreground/40 mb-1 block">
                  Collection
                </Small>
                <Paragraph className="text-sm">
                  <Italic>{activeCollection.label}</Italic>
                </Paragraph>
              </div>
              <Separator />
              <div>
                <Small className="text-muted-foreground/40 mb-1 block">
                  Index
                </Small>
                <Paragraph className="text-muted-foreground text-sm">
                  {featuredIndex + 1} of {activeCollection.photos.length}
                </Paragraph>
              </div>
            </div>

            {/* Keyboard nav hint */}
            <div className="mt-8">
              <Small className="text-muted-foreground/30 block leading-relaxed">
                Click thumbnails below to navigate
              </Small>
            </div>
          </div>

          {/* Nav buttons */}
          <div className="mt-auto flex flex-col gap-2 px-6 pt-8">
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              disabled={featuredIndex === 0}
              onClick={() => setFeaturedIndex((i) => Math.max(0, i - 1))}
            >
              ← Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="w-full"
              disabled={featuredIndex === activeCollection.photos.length - 1}
              onClick={() =>
                setFeaturedIndex((i) =>
                  Math.min(activeCollection.photos.length - 1, i + 1),
                )
              }
            >
              Next →
            </Button>
          </div>
        </aside>
      </div>
    </div>
  );
}
