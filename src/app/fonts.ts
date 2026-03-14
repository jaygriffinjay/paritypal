import { Geist, Geist_Mono, JetBrains_Mono, Sekuya } from "next/font/google";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const sekuya = Sekuya({
  variable: "--font-sekuya",
  weight: "400",
  subsets: ["latin"],
});

export const fontVariables = [geistSans, geistMono, jetbrainsMono, sekuya]
  .map((f) => f.variable)
  .join(" ");
