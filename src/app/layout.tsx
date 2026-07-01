import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Agentic AI Innovation Challenge 2026 | Global Student Hackathon",
  description:
    "Build autonomous AI agents that reason, plan, and act to solve real-world problems. Join the premier global student hackathon — July 1-15, 2026.",
  keywords: [
    "AI hackathon",
    "agentic AI",
    "autonomous agents",
    "student hackathon",
    "AI competition",
    "2026",
  ],
  openGraph: {
    title: "Agentic AI Innovation Challenge 2026",
    description:
      "Build autonomous AI agents that reason, plan, and act. The premier global student hackathon.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
