import { NextResponse } from 'next/server';

export const revalidate = 60; // revalidate every 60 seconds

export async function GET() {
  try {
    const res = await fetch('https://agentic-ai-innovation-2026.devpost.com', {
      next: { revalidate: 60 },
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; AgenticAI/1.0)',
      },
    });

    if (!res.ok) {
      return NextResponse.json({ participants: 50, live: false });
    }

    const html = await res.text();

    // Extract participant count from "Participants (N)" in nav or "<strong>N</strong> participants"
    const navMatch = html.match(/Participants\s*\((\d+)\)/);
    const strongMatch = html.match(/<strong>(\d+)<\/strong>\s*participants/);
    
    const count = navMatch
      ? parseInt(navMatch[1], 10)
      : strongMatch
        ? parseInt(strongMatch[1], 10)
        : 50;

    return NextResponse.json({
      participants: count,
      live: true,
      updatedAt: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ participants: 50, live: false });
  }
}
