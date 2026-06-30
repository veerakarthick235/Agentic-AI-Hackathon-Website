# 🤖 Agentic AI Innovation Challenge 2026

> **Build autonomous AI agents that reason, plan, and act to solve real-world problems.**

A premium, production-ready SaaS-style landing page for the **Agentic AI Innovation Challenge 2026** — a global student hackathon. Built with Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/veerakarthick235/Agentic-AI-Hackathon-Website)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.9-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## ✨ Features

### 🎨 Design
- **Ultra-modern dark SaaS theme** — inspired by OpenAI, Vercel, Anthropic, Cursor, and Linear
- **Glassmorphism** — frosted glass cards with `backdrop-blur`
- **Neon gradient palette** — Cyan `#00E5FF` → Purple `#6C63FF` → Violet `#8B5CF6`
- **Premium typography** — Space Grotesk (headings) + Inter (body) via Google Fonts
- **Micro-animations** — Scroll-reveal, hover glow, 3D tilt, floating badges, spring physics
- **Fully responsive** — Mobile-first design across all breakpoints

### 🧠 Sections (12 Components)
| # | Section | Highlights |
|---|---------|-----------|
| 1 | **Navbar** | Sticky glassmorphism, scroll-aware hide/show, mobile overlay menu |
| 2 | **Hero** | AI robot image, live countdown, floating badges, gradient CTAs |
| 3 | **Agent Workflow** | 7-step agentic AI flow with connected glass cards |
| 4 | **Theme Tracks** | 5 innovation domains — Healthcare, Education, Business, Sustainability, Open |
| 5 | **Statistics** | Animated counters with live participant count from Devpost |
| 6 | **Timeline** | Horizontal (desktop) / vertical (mobile) with animated gradient line |
| 7 | **Judges** | 13 expert judges from Amazon, Microsoft, Netflix, TikTok, and more |
| 8 | **Prizes** | 4-tier prize cards with 3D tilt effect and golden aurora glow |
| 9 | **Why Participate** | 6 benefit cards — Mentorship, Recognition, Networking, Certificates, Portfolio, Community |
| 10 | **FAQ** | 8-question accordion with smooth AnimatePresence transitions |
| 11 | **Contact** | 5 channels — Email, WhatsApp, LinkedIn, GitHub, Discord |
| 12 | **Footer** | 3-column layout with gradient border and smooth scroll links |

### 🔴 Live Data
- **Real-time participant counter** — Fetches live count from [Devpost](https://agentic-ai-innovation-2026.devpost.com/) via API route, refreshes every 60 seconds
- **Submission deadline countdown** — Live countdown to July 15, 2026 at 5:00 PM IST

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [Next.js 16](https://nextjs.org) | App Router, SSR/SSG, API routes |
| [React 19](https://react.dev) | UI library |
| [TypeScript 5](https://typescriptlang.org) | Type safety |
| [Tailwind CSS v4](https://tailwindcss.com) | CSS-first utility styling |
| [Framer Motion](https://motion.dev) | Animations & transitions |
| [Lucide React](https://lucide.dev) | Premium icon system |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/veerakarthick235/Agentic-AI-Hackathon-Website.git
cd Agentic-AI-Hackathon-Website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
├── app/
│   ├── api/devpost/
│   │   └── route.ts          # Live participant count API
│   ├── globals.css            # Design system & Tailwind v4 theme
│   ├── icon.svg               # Custom AI-themed favicon
│   ├── layout.tsx             # Root layout with fonts & SEO
│   └── page.tsx               # Main page composition
├── components/
│   ├── Navbar.tsx             # Sticky navigation
│   ├── Hero.tsx               # Cinematic hero section
│   ├── AgentWorkflow.tsx      # 7-step AI workflow
│   ├── ThemeTracks.tsx        # 5 innovation tracks
│   ├── Statistics.tsx         # Animated counters
│   ├── Timeline.tsx           # Event timeline
│   ├── Judges.tsx             # Judge profiles
│   ├── Prizes.tsx             # Prize tiers with 3D tilt
│   ├── WhyParticipate.tsx     # Benefits section
│   ├── FAQ.tsx                # Accordion FAQ
│   ├── Contact.tsx            # Contact channels
│   └── Footer.tsx             # Site footer
```

---

## 🌐 Deploy on Vercel

The easiest way to deploy is with [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Click **Deploy** — Vercel auto-detects Next.js

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/veerakarthick235/Agentic-AI-Hackathon-Website)

---

## 🎯 Hackathon Details

| Detail | Info |
|---|---|
| **Event** | Agentic AI Innovation Challenge 2026 |
| **Platform** | [Devpost](https://agentic-ai-innovation-2026.devpost.com/) |
| **Dates** | July 1–15, 2026 |
| **Format** | Online, Global, Free |
| **Eligibility** | Students Only |
| **Team Size** | 2–4 members |

### Innovation Tracks
- 🏥 Healthcare AI
- 📚 Education AI
- 📈 Business AI
- 🌿 Sustainability AI
- ✨ Open Innovation

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <b>Built with ❤️ for the Agentic AI Innovation Challenge 2026</b>
  <br>
  <a href="https://agentic-ai-innovation-2026.devpost.com/">Join the Hackathon →</a>
</p>
