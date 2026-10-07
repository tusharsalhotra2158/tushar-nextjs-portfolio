import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Work_Sans } from "next/font/google";
import "./globals.css";

// Type system per the visual identity review: a characterful serif for
// display type, a plain grotesk for body/UI text, and a monospace face for
// anything literal (tech tags, durations, the hero's code block). Self-hosted
// via next/font — no runtime request, safe for the static export build.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});
const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tushar Salhotra | Frontend-Focused Full Stack Developer",
  description:
    "Portfolio of Tushar Salhotra — React.js, Next.js and TypeScript developer building scalable enterprise applications.",
  keywords: [
    "Tushar Salhotra",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "Frontend Developer",
    "Full Stack Developer",
  ],
  openGraph: {
    title: "Tushar Salhotra | React & Next.js Developer",
    description:
      "Frontend-focused developer building scalable enterprise applications across healthcare, security, IoT and risk management.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}