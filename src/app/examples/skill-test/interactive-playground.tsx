"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Bold, Paragraph, Small, InlineCode } from "@/components/typography";

export function CounterCard() {
  const [count, setCount] = React.useState(0);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Counter</CardTitle>
        <CardDescription>State management test</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCount((c) => c - 1)}
          >
            −
          </Button>
          <span className="text-4xl font-bold tabular-nums">{count}</span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCount((c) => c + 1)}
          >
            +
          </Button>
        </div>
        <div className="flex justify-center gap-2">
          <Button variant="ghost" size="sm" onClick={() => setCount(0)}>
            Reset
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCount((c) => c * 2)}
          >
            ×2
          </Button>
        </div>
        <Small className="block text-center">
          Current value: <InlineCode>{count}</InlineCode>
        </Small>
      </CardContent>
    </Card>
  );
}

export function ToggleBoardCard() {
  const [switches, setSwitches] = React.useState({
    wifi: true,
    bluetooth: false,
    darkForce: true,
    turbo: false,
    coffee: true,
  });

  const toggleSwitch = (key: keyof typeof switches) => {
    setSwitches((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const activeCount = Object.values(switches).filter(Boolean).length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Toggle Board</CardTitle>
        <CardDescription>
          {activeCount}/{Object.keys(switches).length} active
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {(
          [
            ["wifi", "Wi-Fi", "📶"],
            ["bluetooth", "Bluetooth", "🦷"],
            ["darkForce", "Dark Force", "⚡"],
            ["turbo", "Turbo Mode", "🚀"],
            ["coffee", "Coffee Drip", "☕"],
          ] as const
        ).map(([key, label, icon]) => (
          <div key={key} className="flex items-center justify-between">
            <Label
              htmlFor={key}
              className="flex cursor-pointer items-center gap-2 text-sm"
            >
              <span>{icon}</span> {label}
            </Label>
            <Switch
              id={key}
              checked={switches[key as keyof typeof switches]}
              onCheckedChange={() => toggleSwitch(key as keyof typeof switches)}
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export function SliderCard() {
  const [hue, setHue] = React.useState([210]);
  const [saturation, setSaturation] = React.useState([80]);
  const [lightness, setLightness] = React.useState([55]);

  const color = `hsl(${hue[0]}, ${saturation[0]}%, ${lightness[0]}%)`;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Color Mixer</CardTitle>
        <CardDescription>HSL slider playground</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div
          className="mx-auto h-20 w-full rounded-lg border shadow-inner transition-colors duration-300"
          style={{ backgroundColor: color }}
        />
        <div className="space-y-4">
          <div className="space-y-2">
            <Label className="text-xs">Hue: {hue[0]}°</Label>
            <Slider value={hue} onValueChange={setHue} max={360} step={1} />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Saturation: {saturation[0]}%</Label>
            <Slider
              value={saturation}
              onValueChange={setSaturation}
              max={100}
              step={1}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-xs">Lightness: {lightness[0]}%</Label>
            <Slider
              value={lightness}
              onValueChange={setLightness}
              max={100}
              step={1}
            />
          </div>
        </div>
        <Paragraph className="text-center text-sm">
          <InlineCode>{color}</InlineCode>
        </Paragraph>
      </CardContent>
    </Card>
  );
}

export function TypingTestCard() {
  const [input, setInput] = React.useState("");
  const target = "The quick brown fox jumps over the lazy dog";
  const progress = Math.min(
    Math.round((input.length / target.length) * 100),
    100,
  );
  const isCorrect = target.startsWith(input);
  const isComplete = input === target;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Typing Test</CardTitle>
        <CardDescription>Type the sentence below</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Paragraph className="font-mono text-sm tracking-wide">
          {target.split("").map((char, i) => (
            <span
              key={i}
              className={
                i < input.length
                  ? input[i] === char
                    ? "text-emerald-500"
                    : "bg-destructive/20 text-destructive"
                  : "text-muted-foreground"
              }
            >
              {char}
            </span>
          ))}
        </Paragraph>
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Start typing..."
          className={
            isComplete
              ? "border-emerald-500 focus-visible:ring-emerald-500/50"
              : !isCorrect
                ? "border-destructive focus-visible:ring-destructive/50"
                : ""
          }
        />
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span>{progress}% complete</span>
            {isComplete && (
              <Badge variant="default" className="bg-emerald-500">
                ✓ Perfect!
              </Badge>
            )}
            {!isCorrect && input.length > 0 && (
              <Badge variant="destructive">Typo detected</Badge>
            )}
          </div>
          <Progress value={progress} />
        </div>
      </CardContent>
    </Card>
  );
}

export function EmojiSlotMachine() {
  const emojis = ["🍒", "🍋", "🍊", "🍇", "⭐", "💎", "7️⃣", "🔔"];
  const [reels, setReels] = React.useState(["🍒", "⭐", "🍇"]);
  const [spinning, setSpinning] = React.useState(false);
  const [wins, setWins] = React.useState(0);

  const spin = () => {
    setSpinning(true);
    let ticks = 0;
    const interval = setInterval(() => {
      setReels([
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)],
        emojis[Math.floor(Math.random() * emojis.length)],
      ]);
      ticks++;
      if (ticks > 15) {
        clearInterval(interval);
        const final = [
          emojis[Math.floor(Math.random() * emojis.length)],
          emojis[Math.floor(Math.random() * emojis.length)],
          emojis[Math.floor(Math.random() * emojis.length)],
        ];
        setReels(final);
        setSpinning(false);
        if (final[0] === final[1] && final[1] === final[2]) {
          setWins((w) => w + 1);
        }
      }
    }, 80);
  };

  const isJackpot = !spinning && reels[0] === reels[1] && reels[1] === reels[2];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Slot Machine</CardTitle>
        <CardDescription>Try your luck! Wins: {wins}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div
          className={`flex items-center justify-center gap-2 rounded-lg border-2 p-4 transition-all ${isJackpot ? "border-yellow-500 bg-yellow-500/10" : "border-muted"}`}
        >
          {reels.map((emoji, i) => (
            <span
              key={i}
              className={`text-5xl transition-transform ${spinning ? "animate-bounce" : ""}`}
            >
              {emoji}
            </span>
          ))}
        </div>
        {isJackpot && (
          <Paragraph className="text-center text-lg font-bold text-yellow-500">
            🎉 JACKPOT! 🎉
          </Paragraph>
        )}
        <Button onClick={spin} disabled={spinning} className="w-full">
          {spinning ? "Spinning..." : "🎰 Spin!"}
        </Button>
      </CardContent>
    </Card>
  );
}

export function PasswordStrengthCard() {
  const [password, setPassword] = React.useState("");

  const checks = [
    { label: "8+ characters", pass: password.length >= 8 },
    { label: "Uppercase", pass: /[A-Z]/.test(password) },
    { label: "Lowercase", pass: /[a-z]/.test(password) },
    { label: "Number", pass: /\d/.test(password) },
    { label: "Special char", pass: /[^A-Za-z0-9]/.test(password) },
  ];
  const score = checks.filter((c) => c.pass).length;
  const strength =
    score <= 1
      ? "Weak"
      : score <= 3
        ? "Fair"
        : score <= 4
          ? "Strong"
          : "Excellent";
  const strengthColor =
    score <= 1
      ? "text-destructive"
      : score <= 3
        ? "text-yellow-500"
        : score <= 4
          ? "text-emerald-500"
          : "text-emerald-600";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Password Strength</CardTitle>
        <CardDescription>Real-time validation demo</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter a password..."
        />
        <Progress value={(score / checks.length) * 100} />
        <div className="flex items-center justify-between">
          <Small>
            Strength: <Bold className={strengthColor}>{strength}</Bold>
          </Small>
          <Small>
            {score}/{checks.length}
          </Small>
        </div>
        <div className="grid grid-cols-2 gap-1.5">
          {checks.map(({ label, pass }) => (
            <Small
              key={label}
              className={pass ? "text-emerald-500" : "text-muted-foreground"}
            >
              {pass ? "✓" : "○"} {label}
            </Small>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
