// ─── Types ────────────────────────────────────────────────────────────────────

export interface Problem {
  id: number;
  a: number;
  op: "×" | "+" | "-" | "÷";
  b: number;
  answer: number;
  group?: string; // color group label
}

export interface ProblemGroup {
  id: string;
  hint: string; // revealed after results
}

export interface Deck {
  id: string;
  title: string;
  subtitle: string;
  difficulty: "beginner" | "intermediate" | "advanced" | "expert";
  timeLimit: number; // seconds
  problems: Problem[];
  groups: ProblemGroup[]; // hints per group
}

// ─── Decks ────────────────────────────────────────────────────────────────────

export const DECKS: Deck[] = [
  // ── 1. Distributive Property ──────────────────────────────────────
  {
    id: "distributive",
    title: "Distributive Property",
    subtitle: "Break big multiplications into smaller ones",
    difficulty: "beginner",
    timeLimit: 120,
    groups: [
      { id: "A", hint: "12×15 = 12×5 + 12×10 = 60 + 120 = 180" },
      { id: "B", hint: "8×10 = 8×4 + 8×6 = 32 + 48 = 80" },
      { id: "C", hint: "6×10 = 6×7 + 6×3 = 42 + 18 = 60" },
      { id: "D", hint: "9×8 = 9×4 × 2 — doubling pattern" },
      { id: "E", hint: "11×12 = 11×11 + 11×1 = 121 + 11 = 132" },
      { id: "F", hint: "13×15 = 13×8 + 13×7 = 104 + 91 = 195" },
    ],
    problems: [
      { id: 1, a: 12, op: "×", b: 5, answer: 60, group: "A" },
      { id: 2, a: 12, op: "×", b: 10, answer: 120, group: "A" },
      { id: 3, a: 12, op: "×", b: 15, answer: 180, group: "A" },
      { id: 4, a: 8, op: "×", b: 4, answer: 32, group: "B" },
      { id: 5, a: 8, op: "×", b: 6, answer: 48, group: "B" },
      { id: 6, a: 8, op: "×", b: 10, answer: 80, group: "B" },
      { id: 7, a: 6, op: "×", b: 7, answer: 42, group: "C" },
      { id: 8, a: 6, op: "×", b: 3, answer: 18, group: "C" },
      { id: 9, a: 6, op: "×", b: 10, answer: 60, group: "C" },
      { id: 10, a: 9, op: "×", b: 2, answer: 18, group: "D" },
      { id: 11, a: 9, op: "×", b: 4, answer: 36, group: "D" },
      { id: 12, a: 9, op: "×", b: 8, answer: 72, group: "D" },
      { id: 13, a: 11, op: "×", b: 9, answer: 99, group: "E" },
      { id: 14, a: 11, op: "×", b: 11, answer: 121, group: "E" },
      { id: 15, a: 11, op: "×", b: 12, answer: 132, group: "E" },
      { id: 16, a: 13, op: "×", b: 7, answer: 91, group: "F" },
      { id: 17, a: 13, op: "×", b: 8, answer: 104, group: "F" },
      { id: 18, a: 13, op: "×", b: 15, answer: 195, group: "F" },
    ],
  },

  // ── 2. Multiply by 11 ─────────────────────────────────────────────
  {
    id: "times-11",
    title: "Multiply by 11",
    subtitle: "The digit-sum trick for instant answers",
    difficulty: "beginner",
    timeLimit: 90,
    groups: [
      { id: "A", hint: "11×ab: put (a+b) in the middle. 11×23 = 2_5_3 = 253" },
      {
        id: "B",
        hint: "When middle digits sum > 9, carry: 11×87 = 8_(15)_7 → 957",
      },
      { id: "C", hint: "11×single digit = just repeat it: 11×7 = 77" },
      { id: "D", hint: "11×multiples of 10 = just add a zero: 11×30 = 330" },
    ],
    problems: [
      { id: 1, a: 11, op: "×", b: 23, answer: 253, group: "A" },
      { id: 2, a: 11, op: "×", b: 45, answer: 495, group: "A" },
      { id: 3, a: 11, op: "×", b: 62, answer: 682, group: "A" },
      { id: 4, a: 11, op: "×", b: 87, answer: 957, group: "B" },
      { id: 5, a: 11, op: "×", b: 95, answer: 1045, group: "B" },
      { id: 6, a: 11, op: "×", b: 78, answer: 858, group: "B" },
      { id: 7, a: 11, op: "×", b: 7, answer: 77, group: "C" },
      { id: 8, a: 11, op: "×", b: 4, answer: 44, group: "C" },
      { id: 9, a: 11, op: "×", b: 9, answer: 99, group: "C" },
      { id: 10, a: 11, op: "×", b: 30, answer: 330, group: "D" },
      { id: 11, a: 11, op: "×", b: 50, answer: 550, group: "D" },
      { id: 12, a: 11, op: "×", b: 70, answer: 770, group: "D" },
    ],
  },

  // ── 3. Multiply by 5 ──────────────────────────────────────────────
  {
    id: "times-5",
    title: "Multiply by 5",
    subtitle: "Halve it, then multiply by 10",
    difficulty: "beginner",
    timeLimit: 90,
    groups: [
      { id: "A", hint: "5×even: halve it, add a zero. 5×18 = 9×10 = 90" },
      {
        id: "B",
        hint: "5×odd: subtract 1, halve, add 5. 5×17 = 5×16 + 5 = 80+5 = 85",
      },
      {
        id: "C",
        hint: "5×large even: same trick scales up. 5×84 = 42×10 = 420",
      },
      { id: "D", hint: "5×large odd: 5×73 = 5×72 + 5 = 360+5 = 365" },
    ],
    problems: [
      { id: 1, a: 5, op: "×", b: 18, answer: 90, group: "A" },
      { id: 2, a: 5, op: "×", b: 24, answer: 120, group: "A" },
      { id: 3, a: 5, op: "×", b: 36, answer: 180, group: "A" },
      { id: 4, a: 5, op: "×", b: 17, answer: 85, group: "B" },
      { id: 5, a: 5, op: "×", b: 23, answer: 115, group: "B" },
      { id: 6, a: 5, op: "×", b: 39, answer: 195, group: "B" },
      { id: 7, a: 5, op: "×", b: 84, answer: 420, group: "C" },
      { id: 8, a: 5, op: "×", b: 96, answer: 480, group: "C" },
      { id: 9, a: 5, op: "×", b: 68, answer: 340, group: "C" },
      { id: 10, a: 5, op: "×", b: 73, answer: 365, group: "D" },
      { id: 11, a: 5, op: "×", b: 57, answer: 285, group: "D" },
      { id: 12, a: 5, op: "×", b: 91, answer: 455, group: "D" },
    ],
  },

  // ── 4. Squaring Tricks ────────────────────────────────────────────
  {
    id: "squaring",
    title: "Squaring Tricks",
    subtitle: "Numbers ending in 5, near-squares, and more",
    difficulty: "intermediate",
    timeLimit: 120,
    groups: [
      {
        id: "A",
        hint: "n² ending in 5: n×(n+1) then append 25. 35² = 3×4 = 12 → 1225",
      },
      {
        id: "B",
        hint: "Near-square: (n+1)(n-1) = n²-1. So 19×21 = 20²-1 = 399",
      },
      {
        id: "C",
        hint: "Squaring teens: 13² = 10×16 + 9 = 169. Add 10×(n-10) to n², then add (n-10)²",
      },
      {
        id: "D",
        hint: "Difference of squares: a²-b² = (a+b)(a-b). 52²-48² = 100×4 = 400",
      },
    ],
    problems: [
      { id: 1, a: 15, op: "×", b: 15, answer: 225, group: "A" },
      { id: 2, a: 25, op: "×", b: 25, answer: 625, group: "A" },
      { id: 3, a: 35, op: "×", b: 35, answer: 1225, group: "A" },
      { id: 4, a: 45, op: "×", b: 45, answer: 2025, group: "A" },
      { id: 5, a: 19, op: "×", b: 21, answer: 399, group: "B" },
      { id: 6, a: 29, op: "×", b: 31, answer: 899, group: "B" },
      { id: 7, a: 49, op: "×", b: 51, answer: 2499, group: "B" },
      { id: 8, a: 13, op: "×", b: 13, answer: 169, group: "C" },
      { id: 9, a: 14, op: "×", b: 14, answer: 196, group: "C" },
      { id: 10, a: 16, op: "×", b: 16, answer: 256, group: "C" },
      { id: 11, a: 17, op: "×", b: 17, answer: 289, group: "C" },
      { id: 12, a: 52, op: "×", b: 48, answer: 2496, group: "D" },
      { id: 13, a: 63, op: "×", b: 57, answer: 3591, group: "D" },
      { id: 14, a: 75, op: "×", b: 65, answer: 4875, group: "D" },
    ],
  },

  // ── 5. Multiply by 9 ──────────────────────────────────────────────
  {
    id: "times-9",
    title: "Multiply by 9",
    subtitle: "The 10-minus-1 trick",
    difficulty: "beginner",
    timeLimit: 90,
    groups: [
      { id: "A", hint: "9×n = 10×n - n. 9×7 = 70-7 = 63" },
      {
        id: "B",
        hint: "Digit sum of 9× always = 9. 9×8=72 → 7+2=9. Use to check!",
      },
      { id: "C", hint: "9×large: 9×47 = 10×47 - 47 = 470-47 = 423" },
      { id: "D", hint: "9×9s: 9×99 = 9×100 - 9 = 891. Scale the trick." },
    ],
    problems: [
      { id: 1, a: 9, op: "×", b: 7, answer: 63, group: "A" },
      { id: 2, a: 9, op: "×", b: 8, answer: 72, group: "A" },
      { id: 3, a: 9, op: "×", b: 6, answer: 54, group: "A" },
      { id: 4, a: 9, op: "×", b: 12, answer: 108, group: "B" },
      { id: 5, a: 9, op: "×", b: 15, answer: 135, group: "B" },
      { id: 6, a: 9, op: "×", b: 18, answer: 162, group: "B" },
      { id: 7, a: 9, op: "×", b: 47, answer: 423, group: "C" },
      { id: 8, a: 9, op: "×", b: 63, answer: 567, group: "C" },
      { id: 9, a: 9, op: "×", b: 84, answer: 756, group: "C" },
      { id: 10, a: 9, op: "×", b: 99, answer: 891, group: "D" },
      { id: 11, a: 9, op: "×", b: 999, answer: 8991, group: "D" },
      { id: 12, a: 99, op: "×", b: 99, answer: 9801, group: "D" },
    ],
  },

  // ── 6. Mental Math Gauntlet ───────────────────────────────────────
  {
    id: "gauntlet",
    title: "Mental Math Gauntlet",
    subtitle: "Mixed tricks — apply what you know",
    difficulty: "expert",
    timeLimit: 180,
    groups: [
      { id: "A", hint: "×11 trick: spread the digits, sum in middle" },
      { id: "B", hint: "×5 trick: halve and ×10" },
      { id: "C", hint: "Ends in 5² trick: n×(n+1) then 25" },
      { id: "D", hint: "Near-square: (n-1)(n+1) = n²-1" },
      { id: "E", hint: "×9 trick: ×10 then subtract" },
      { id: "F", hint: "Distributive: break into friendly numbers" },
    ],
    problems: [
      { id: 1, a: 11, op: "×", b: 54, answer: 594, group: "A" },
      { id: 2, a: 11, op: "×", b: 76, answer: 836, group: "A" },
      { id: 3, a: 5, op: "×", b: 46, answer: 230, group: "B" },
      { id: 4, a: 5, op: "×", b: 79, answer: 395, group: "B" },
      { id: 5, a: 55, op: "×", b: 55, answer: 3025, group: "C" },
      { id: 6, a: 65, op: "×", b: 65, answer: 4225, group: "C" },
      { id: 7, a: 39, op: "×", b: 41, answer: 1599, group: "D" },
      { id: 8, a: 59, op: "×", b: 61, answer: 3599, group: "D" },
      { id: 9, a: 9, op: "×", b: 56, answer: 504, group: "E" },
      { id: 10, a: 9, op: "×", b: 78, answer: 702, group: "E" },
      { id: 11, a: 14, op: "×", b: 16, answer: 224, group: "F" },
      { id: 12, a: 17, op: "×", b: 13, answer: 221, group: "F" },
      { id: 13, a: 24, op: "×", b: 26, answer: 624, group: "F" },
      { id: 14, a: 11, op: "×", b: 99, answer: 1089, group: "A" },
      { id: 15, a: 5, op: "×", b: 124, answer: 620, group: "B" },
      { id: 16, a: 75, op: "×", b: 75, answer: 5625, group: "C" },
      { id: 17, a: 9, op: "×", b: 123, answer: 1107, group: "E" },
      { id: 18, a: 49, op: "×", b: 51, answer: 2499, group: "D" },
    ],
  },
];

export const DIFFICULTY_LABELS: Record<Deck["difficulty"], string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
  expert: "Expert",
};

export const DIFFICULTY_COLORS: Record<Deck["difficulty"], string> = {
  beginner: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  intermediate: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  advanced: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  expert: "bg-rose-500/20 text-rose-300 border-rose-400/30",
};

export const GROUP_COLORS: Record<string, string> = {
  A: "border-blue-400/40 bg-blue-500/5",
  B: "border-violet-400/40 bg-violet-500/5",
  C: "border-emerald-400/40 bg-emerald-500/5",
  D: "border-amber-400/40 bg-amber-500/5",
  E: "border-rose-400/40 bg-rose-500/5",
  F: "border-cyan-400/40 bg-cyan-500/5",
};

export const GROUP_BADGE_COLORS: Record<string, string> = {
  A: "bg-blue-500/20 text-blue-300 border-blue-400/30",
  B: "bg-violet-500/20 text-violet-300 border-violet-400/30",
  C: "bg-emerald-500/20 text-emerald-300 border-emerald-400/30",
  D: "bg-amber-500/20 text-amber-300 border-amber-400/30",
  E: "bg-rose-500/20 text-rose-300 border-rose-400/30",
  F: "bg-cyan-500/20 text-cyan-300 border-cyan-400/30",
};
