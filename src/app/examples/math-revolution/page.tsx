"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { H1, H2, H3, Paragraph, Small } from "@/components/typography";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  DECKS,
  DIFFICULTY_COLORS,
  DIFFICULTY_LABELS,
  GROUP_COLORS,
  GROUP_BADGE_COLORS,
  type Deck,
  type Problem,
} from "./decks";

// ─── Types ────────────────────────────────────────────────────────────────────

interface UserAnswer {
  problemId: number;
  value: string;
  isCorrect: boolean;
}

type GamePhase = "select" | "playing" | "results";

// ─── Problem Card ─────────────────────────────────────────────────────────────

function ProblemCard({
  problem,
  userAnswer,
  onClick,
  phase,
  isRetry,
}: {
  problem: Problem;
  userAnswer?: UserAnswer;
  onClick: (p: Problem) => void;
  phase: GamePhase;
  isRetry?: boolean;
}) {
  const isAnswered = !!userAnswer;
  const isPlaying = phase === "playing";
  const isResults = phase === "results";
  const groupColor = problem.group ? (GROUP_COLORS[problem.group] ?? "") : "";

  const cardState = isResults
    ? userAnswer
      ? userAnswer.isCorrect
        ? "correct"
        : "wrong"
      : "unanswered"
    : isAnswered
      ? "answered"
      : "empty";

  return (
    <button
      onClick={() => isPlaying && onClick(problem)}
      disabled={!isPlaying}
      className={cn(
        "relative flex min-h-[90px] w-full flex-col items-center justify-center rounded-2xl border-2 p-3 transition-all duration-200 select-none",
        groupColor,
        isPlaying &&
          !isAnswered &&
          "hover:border-primary/60 border-border/50 cursor-pointer hover:scale-[1.04] hover:shadow-lg active:scale-[0.97]",
        isPlaying &&
          isAnswered &&
          "border-primary/50 bg-primary/10 cursor-pointer hover:scale-[1.02]",
        isResults &&
          cardState === "correct" &&
          "border-emerald-500 bg-emerald-500/15",
        isResults && cardState === "wrong" && "border-rose-500 bg-rose-500/15",
        isResults &&
          cardState === "unanswered" &&
          "border-border/30 opacity-50",
      )}
    >
      {isRetry && isPlaying && (
        <span className="absolute top-1.5 left-1.5 text-[9px] font-bold text-amber-400">
          ↩
        </span>
      )}
      {problem.group && (
        <span
          className={cn(
            "absolute top-1.5 right-1.5 rounded-full border px-1 py-0.5 text-[9px] font-bold",
            GROUP_BADGE_COLORS[problem.group],
          )}
        >
          {problem.group}
        </span>
      )}
      <span className="text-foreground text-lg font-bold tabular-nums">
        {problem.a} {problem.op} {problem.b}
      </span>
      <span className="text-muted-foreground mt-0.5 text-xs">= ?</span>
      {isAnswered && (
        <span
          className={cn(
            "mt-1.5 text-sm font-semibold tabular-nums",
            isResults
              ? userAnswer?.isCorrect
                ? "text-emerald-400"
                : "text-rose-400"
              : "text-primary",
          )}
        >
          {userAnswer?.value}
        </span>
      )}
      {isResults && cardState === "wrong" && (
        <span className="mt-0.5 text-[11px] text-emerald-400">
          ✓ {problem.answer}
        </span>
      )}
      {isResults && cardState === "correct" && (
        <span className="absolute top-1.5 left-1.5 text-xs text-emerald-400">
          ✓
        </span>
      )}
      {isResults && cardState === "wrong" && (
        <span className="absolute top-1.5 left-1.5 text-xs text-rose-400">
          ✗
        </span>
      )}
    </button>
  );
}

// ─── Timer ────────────────────────────────────────────────────────────────────

function TimerBar({ seconds, total }: { seconds: number; total: number }) {
  const pct = (seconds / total) * 100;
  const isLow = seconds <= 20;
  const isCritical = seconds <= 10;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return (
    <div className="flex w-full max-w-xs flex-col gap-1.5">
      <div className="flex items-center justify-between">
        <Small className="text-muted-foreground">Time</Small>
        <span
          className={cn(
            "text-xl font-bold tabular-nums",
            isCritical
              ? "animate-pulse text-rose-400"
              : isLow
                ? "text-amber-400"
                : "text-foreground",
          )}
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          {mins}:{secs.toString().padStart(2, "0")}
        </span>
      </div>
      <Progress
        value={pct}
        className={cn(
          "h-1.5",
          isCritical
            ? "[&>div]:bg-rose-500"
            : isLow
              ? "[&>div]:bg-amber-500"
              : "[&>div]:bg-primary",
        )}
      />
    </div>
  );
}

// ─── Score Screen ─────────────────────────────────────────────────────────────

function ScoreScreen({
  correct,
  total,
  timeLeft,
  deck,
  answers,
  onPlayAgain,
  onBack,
}: {
  correct: number;
  total: number;
  timeLeft: number;
  deck: Deck;
  answers: Map<number, UserAnswer>;
  onPlayAgain: () => void;
  onBack: () => void;
}) {
  const pct = Math.round((correct / total) * 100);
  const grade =
    pct === 100
      ? "A+"
      : pct >= 90
        ? "A"
        : pct >= 80
          ? "B"
          : pct >= 70
            ? "C"
            : pct >= 60
              ? "D"
              : "F";
  const gradeColor =
    pct === 100
      ? "text-emerald-400"
      : pct >= 80
        ? "text-blue-400"
        : pct >= 60
          ? "text-amber-400"
          : "text-rose-400";
  const msg =
    pct === 100
      ? "Perfect! You've mastered this deck! 🧙"
      : pct >= 90
        ? "Outstanding! Almost perfect! ⭐"
        : pct >= 80
          ? "Great work! 🎉"
          : pct >= 60
            ? "Good effort! Keep practicing! 💪"
            : "Keep at it! The tricks will click! 🌱";

  // Group hints — only show groups that had wrong/unanswered problems
  const wrongGroups = new Set<string>();
  deck.problems.forEach((p) => {
    const a = answers.get(p.id);
    if (!a || !a.isCorrect) wrongGroups.add(p.group ?? "");
  });
  const hintsToShow = deck.groups.filter((g) => wrongGroups.has(g.id));

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-4 py-6">
        <span
          className={cn("text-8xl font-black", gradeColor)}
          style={{ fontFamily: "var(--font-sekuya)" }}
        >
          {grade}
        </span>
        <Small className="text-muted-foreground">{pct}%</Small>
        <div className="flex gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-emerald-400">{correct}</div>
            <Small className="text-muted-foreground">correct</Small>
          </div>
          <div>
            <div className="text-2xl font-bold text-rose-400">
              {total - correct}
            </div>
            <Small className="text-muted-foreground">wrong/skipped</Small>
          </div>
          <div>
            <div className="text-foreground text-2xl font-bold">
              {timeLeft}s
            </div>
            <Small className="text-muted-foreground">left</Small>
          </div>
        </div>
        <Paragraph className="text-muted-foreground max-w-sm text-center text-sm">
          {msg}
        </Paragraph>
      </div>

      {hintsToShow.length > 0 && (
        <>
          <Separator />
          <div className="space-y-3">
            <H3 className="text-muted-foreground text-center text-sm tracking-widest uppercase">
              💡 The Tricks
            </H3>
            <div className="grid gap-2 sm:grid-cols-2">
              {hintsToShow.map((g) => (
                <div
                  key={g.id}
                  className={cn(
                    "rounded-xl border p-3 text-sm",
                    GROUP_BADGE_COLORS[g.id] ?? "border-border/50",
                  )}
                >
                  <span className="mr-2 font-bold">Group {g.id}:</span>
                  <span className="opacity-90">{g.hint}</span>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      <Separator />
      <H3 className="text-muted-foreground text-center text-sm tracking-widest uppercase">
        Problem Review
      </H3>
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
        {deck.problems.map((p) => (
          <ProblemCard
            key={p.id}
            problem={p}
            userAnswer={answers.get(p.id)}
            onClick={() => {}}
            phase="results"
          />
        ))}
      </div>

      <div className="flex justify-center gap-3">
        <Button size="lg" onClick={onPlayAgain} className="rounded-2xl px-8">
          Play Again
        </Button>
        <Button
          size="lg"
          variant="outline"
          onClick={onBack}
          className="rounded-2xl px-8"
        >
          Change Deck
        </Button>
      </div>
    </div>
  );
}

// ─── Deck Selector ────────────────────────────────────────────────────────────

function DeckSelector({ onSelect }: { onSelect: (deck: Deck) => void }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="space-y-1 text-center">
        <Paragraph className="text-muted-foreground">
          Choose a deck to train a specific mental math skill
        </Paragraph>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {DECKS.map((deck) => (
          <button
            key={deck.id}
            onClick={() => onSelect(deck)}
            className="border-border/50 bg-muted/20 hover:border-primary/50 hover:bg-muted/40 rounded-2xl border p-5 text-left transition-all hover:scale-[1.02] active:scale-[0.99]"
          >
            <div className="mb-2 flex items-start justify-between gap-2">
              <span className="text-foreground text-base leading-tight font-bold">
                {deck.title}
              </span>
              <span
                className={cn(
                  "shrink-0 rounded-full border px-2 py-0.5 text-[10px] font-bold",
                  DIFFICULTY_COLORS[deck.difficulty],
                )}
              >
                {DIFFICULTY_LABELS[deck.difficulty]}
              </span>
            </div>
            <p className="text-muted-foreground text-sm">{deck.subtitle}</p>
            <div className="mt-3 flex gap-3">
              <Small className="text-muted-foreground">
                {deck.problems.length} problems
              </Small>
              <Small className="text-muted-foreground">·</Small>
              <Small className="text-muted-foreground">
                {Math.floor(deck.timeLimit / 60)}:
                {(deck.timeLimit % 60).toString().padStart(2, "0")}
              </Small>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function MathRevolutionPage() {
  const [phase, setPhase] = useState<GamePhase>("select");
  const [deck, setDeck] = useState<Deck | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [answers, setAnswers] = useState<Map<number, UserAnswer>>(new Map());
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  // Adaptive: track wrong problem ids to re-queue
  const [retryIds, setRetryIds] = useState<Set<number>>(new Set());

  // Dialog
  const [activeProblem, setActiveProblem] = useState<Problem | null>(null);
  const [inputValue, setInputValue] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);

  // Timer
  useEffect(() => {
    if (phase !== "playing") return;
    if (timeLeft <= 0) {
      setPhase("results");
      return;
    }
    const id = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(id);
  }, [phase, timeLeft]);

  const handleSelectDeck = (d: Deck) => {
    setDeck(d);
    setTimeLeft(d.timeLimit);
    setAnswers(new Map());
    setStreak(0);
    setBestStreak(0);
    setRetryIds(new Set());
    setPhase("playing");
  };

  const handleProblemClick = (p: Problem) => {
    setActiveProblem(p);
    setInputValue(answers.get(p.id)?.value ?? "");
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setActiveProblem(null);
    setInputValue("");
  };

  const handleSubmitAnswer = useCallback(() => {
    if (!activeProblem) return;
    const trimmed = inputValue.trim();
    if (!trimmed) {
      setAnswers((prev) => {
        const n = new Map(prev);
        n.delete(activeProblem.id);
        return n;
      });
      closeDialog();
      return;
    }
    const numVal = parseInt(trimmed, 10);
    const isCorrect = !isNaN(numVal) && numVal === activeProblem.answer;
    setAnswers((prev) => {
      const n = new Map(prev);
      n.set(activeProblem.id, {
        problemId: activeProblem.id,
        value: trimmed,
        isCorrect,
      });
      return n;
    });
    // Streak
    if (isCorrect) {
      setStreak((s) => {
        const ns = s + 1;
        setBestStreak((b) => Math.max(b, ns));
        return ns;
      });
      setRetryIds((prev) => {
        const n = new Set(prev);
        n.delete(activeProblem.id);
        return n;
      });
    } else {
      setStreak(0);
      setRetryIds((prev) => new Set([...prev, activeProblem.id]));
    }
    closeDialog();
  }, [activeProblem, inputValue]);

  const answeredCount = answers.size;
  const correctCount = Array.from(answers.values()).filter(
    (a) => a.isCorrect,
  ).length;

  return (
    <div className="bg-background min-h-screen">
      <H2 className="sr-only">the vibes are immaculate</H2>
      <div className="mx-auto flex max-w-3xl flex-col gap-8 px-4 py-10">
        {/* Header */}
        <div className="space-y-1 text-center">
          <H1
            className="text-5xl tracking-tight md:text-6xl"
            style={{ fontFamily: "var(--font-sekuya)" }}
          >
            Math Math Revolution
          </H1>
          {phase === "select" && (
            <Paragraph className="text-muted-foreground">
              Mental math trainer — heuristics through repetition
            </Paragraph>
          )}
          {phase === "playing" && deck && (
            <div className="flex flex-wrap items-center justify-center gap-2">
              <Badge variant="outline" className="text-xs">
                {deck.title}
              </Badge>
              <span
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[10px] font-bold",
                  DIFFICULTY_COLORS[deck.difficulty],
                )}
              >
                {DIFFICULTY_LABELS[deck.difficulty]}
              </span>
            </div>
          )}
        </div>

        {/* Deck Select */}
        {phase === "select" && <DeckSelector onSelect={handleSelectDeck} />}

        {/* Playing */}
        {phase === "playing" && deck && (
          <div className="flex flex-col gap-5">
            {/* HUD */}
            <div className="border-border/50 bg-muted/20 flex flex-col items-center justify-between gap-4 rounded-2xl border p-4 sm:flex-row">
              <TimerBar seconds={timeLeft} total={deck.timeLimit} />
              <div className="flex items-center gap-5">
                {/* Streak */}
                <div className="text-center">
                  <div
                    className={cn(
                      "text-xl font-bold tabular-nums",
                      streak >= 3 ? "text-amber-400" : "text-foreground",
                    )}
                  >
                    {streak}🔥
                  </div>
                  <Small className="text-muted-foreground">streak</Small>
                </div>
                <div className="text-center">
                  <div className="text-xl font-bold tabular-nums">
                    {answeredCount}
                    <span className="text-muted-foreground text-sm font-normal">
                      /{deck.problems.length}
                    </span>
                  </div>
                  <Small className="text-muted-foreground">answered</Small>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setPhase("results")}
                  disabled={answeredCount === 0}
                  className="rounded-xl"
                >
                  Submit
                </Button>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
              {deck.problems.map((p) => (
                <ProblemCard
                  key={p.id}
                  problem={p}
                  userAnswer={answers.get(p.id)}
                  onClick={handleProblemClick}
                  phase={phase}
                  isRetry={retryIds.has(p.id)}
                />
              ))}
            </div>

            {/* Retry queue */}
            {retryIds.size > 0 && (
              <div className="space-y-2">
                <Small className="block text-center text-amber-400">
                  ↩ Retry queue — problems you got wrong
                </Small>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                  {deck.problems
                    .filter((p) => retryIds.has(p.id))
                    .map((p) => (
                      <ProblemCard
                        key={`retry-${p.id}`}
                        problem={{ ...p, id: p.id + 1000 }}
                        userAnswer={undefined}
                        onClick={(rp) =>
                          handleProblemClick({ ...p, id: rp.id })
                        }
                        phase={phase}
                        isRetry
                      />
                    ))}
                </div>
              </div>
            )}

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-2">
              {deck.groups.map((g) => (
                <span
                  key={g.id}
                  className={cn(
                    "rounded-full border px-2 py-0.5 text-[10px] font-bold",
                    GROUP_BADGE_COLORS[g.id],
                  )}
                >
                  {g.id}
                </span>
              ))}
              <Small className="text-muted-foreground ml-1 self-center">
                — same color = related trick
              </Small>
            </div>
          </div>
        )}

        {/* Results */}
        {phase === "results" && deck && (
          <ScoreScreen
            correct={correctCount}
            total={deck.problems.length}
            timeLeft={timeLeft}
            deck={deck}
            answers={answers}
            onPlayAgain={() => handleSelectDeck(deck)}
            onBack={() => setPhase("select")}
          />
        )}
      </div>

      {/* Answer Dialog */}
      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open) closeDialog();
        }}
      >
        <DialogContent className="rounded-3xl sm:max-w-xs">
          <DialogHeader>
            <DialogTitle className="text-center">
              <span
                className="text-4xl font-black tabular-nums"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {activeProblem?.a} {activeProblem?.op} {activeProblem?.b}
              </span>
            </DialogTitle>
            <DialogDescription className="text-center">
              What is the answer?
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-4 pt-2">
            <Input
              type="number"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Your answer..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmitAnswer();
                if (e.key === "Escape") closeDialog();
              }}
              className="h-14 rounded-xl text-center text-2xl font-bold tabular-nums"
              autoFocus
            />
            <div className="flex gap-2">
              <Button
                variant="outline"
                className="flex-1 rounded-xl"
                onClick={closeDialog}
              >
                Cancel
              </Button>
              <Button
                className="flex-1 rounded-xl"
                onClick={handleSubmitAnswer}
                disabled={!inputValue.trim()}
              >
                Submit
              </Button>
            </div>
            <Small className="text-muted-foreground text-center">
              Enter to submit · Esc to cancel
            </Small>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
