'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Bot,
  Users,
  FileText,
  GraduationCap,
  Globe,
  Sparkles,
} from 'lucide-react';

const DEVPOST_URL = 'https://agentic-ai-innovation-2026.devpost.com/';
const DEADLINE = new Date('2026-07-15T11:30:00Z');

/* ── animation variants ───────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 * i, duration: 0.5, ease: 'easeOut' as const },
  }),
};

const floatBadge = (delay: number) => ({
  y: [0, -8, 0],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut' as const,
    delay,
  },
});

/* ── floating tags data ───────────────────────────────── */
const TAGS = [
  { label: 'Students Only', Icon: GraduationCap, delay: 0 },
  { label: 'Global Online', Icon: Globe, delay: 0.6 },
  { label: 'Team Based', Icon: Users, delay: 1.2 },
  { label: 'Agentic AI', Icon: Bot, delay: 1.8 },
] as const;

/* ── component ────────────────────────────────────────── */
export default function Hero() {
  /* participant counter (hydration-safe) */
  const [participants, setParticipants] = useState(50);
  const [isLive, setIsLive] = useState(false);

  const fetchParticipants = useCallback(async () => {
    try {
      const res = await fetch('/api/devpost');
      if (!res.ok) return;
      const data = await res.json();
      if (data.participants) setParticipants(data.participants);
      if (data.live) setIsLive(true);
    } catch {
      /* silent */
    }
  }, []);

  useEffect(() => {
    fetchParticipants();
    const interval = setInterval(fetchParticipants, 60_000);
    return () => clearInterval(interval);
  }, [fetchParticipants]);

  /* countdown timer (hydration-safe: starts at 0s) */
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, DEADLINE.getTime() - Date.now());
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff / 3_600_000) % 24),
        m: Math.floor((diff / 60_000) % 60),
        s: Math.floor((diff / 1_000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const smoothScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background layers ──────────────────────────── */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-[#a78bfa]/8 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#38bdf8]/8 blur-[140px] pointer-events-none" />

      {/* ── Main grid ──────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* ─── LEFT COLUMN ───────────────────────────── */}
          <div className="flex flex-col gap-8">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <span className="glass inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-[#a1a1aa] !rounded-full">
                <Bot className="w-4 h-4 text-[#a78bfa]" />
                Agentic AI Innovation Challenge 2026
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              Build the Future of
              <br />
              <span className="gradient-text">Autonomous AI</span>
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-lg text-base sm:text-lg text-[#a1a1aa] leading-relaxed"
            >
              Create AI agents that reason, plan, and act autonomously to solve
              real-world challenges. Join innovators worldwide in the premier
              student AI hackathon.
            </motion.p>

            {/* Live participant counter */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
            >
              <div className="glass inline-flex items-center gap-3 px-4 py-2.5 !rounded-full">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className={`absolute inset-0 rounded-full ${
                      isLive ? 'bg-emerald-400 animate-ping' : 'bg-[#71717a]'
                    } opacity-75`}
                  />
                  <span
                    className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
                      isLive ? 'bg-emerald-400' : 'bg-[#71717a]'
                    }`}
                  />
                </span>
                <Users className="w-4 h-4 text-[#a78bfa]" />
                <span
                  className="text-sm font-semibold text-white tabular-nums"
                  suppressHydrationWarning
                >
                  {participants.toLocaleString()}
                </span>
                <span className="text-xs text-[#71717a]">Live Participants</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={DEVPOST_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <Sparkles className="w-4 h-4" />
                Join Hackathon
              </a>
              <a
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll('#about');
                }}
                className="btn-ghost"
              >
                <FileText className="w-4 h-4" />
                View Rules
              </a>
            </motion.div>

            {/* Countdown */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col gap-3"
            >
              <span className="section-label">Submission Deadline</span>
              <div className="flex gap-3">
                {[
                  { value: time.d, label: 'Days' },
                  { value: time.h, label: 'Hours' },
                  { value: time.m, label: 'Mins' },
                  { value: time.s, label: 'Secs' },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="glass flex flex-col items-center justify-center w-[72px] h-[72px] !rounded-xl"
                  >
                    <div
                      className="text-xl font-bold font-[family-name:var(--font-heading)] tabular-nums text-white"
                      suppressHydrationWarning
                    >
                      {String(value).padStart(2, '0')}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-[#71717a]">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating tags */}
            <motion.div
              custom={6}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 pt-2"
            >
              {TAGS.map(({ label, Icon, delay }) => (
                <motion.span
                  key={label}
                  animate={floatBadge(delay)}
                  className="glass inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-medium text-[#a1a1aa] !rounded-full"
                >
                  <Icon className="w-3.5 h-3.5 text-[#818cf8]" />
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN ──────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="relative flex items-center justify-center"
          >
            {/* Glow orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-[#a78bfa]/10 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/3 left-2/3 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#38bdf8]/10 blur-[80px] pointer-events-none" />

            {/* Robot image */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut' as const,
              }}
              className="relative z-10"
            >
              <Image
                src="/hero-robot.png"
                alt="Agentic AI hero illustration"
                width={550}
                height={550}
                priority
                className="drop-shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
