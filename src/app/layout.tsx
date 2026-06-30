import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agentic AI Innovation Challenge 2026 | Global Student Hackathon",
  description:
    "Build autonomous AI agents that reason, plan, and act. Join 1000+ innovators in the world's premier student AI hackathon. July 2026.",
  keywords: ["AI hackathon", "Agentic AI", "student hackathon", "AI innovation", "2026"],
  openGraph: {
    title: "Agentic AI Innovation Challenge 2026",
    description: "Build the future of autonomous AI. Join 1000+ innovators worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
