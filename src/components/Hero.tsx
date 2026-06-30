'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GraduationCap, Globe, Users, Bot, ArrowRight, FileText, ChevronDown } from 'lucide-react';

// Submission deadline: July 15, 2026 at 5:00 PM GMT+5:30 (11:30 UTC)
const SUBMISSION_DEADLINE = new Date('2026-07-15T11:30:00Z').getTime();

const badges = [
  { label: 'Students Only', icon: GraduationCap, delay: 0 },
  { label: 'Global Online', icon: Globe, delay: 0.8 },
  { label: 'Team Based', icon: Users, delay: 1.6 },
  { label: 'Agentic AI', icon: Bot, delay: 2.4 },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
}

function calcTime(): TimeLeft {
  const diff = Math.max(0, SUBMISSION_DEADLINE - Date.now());
  return {
    d: Math.floor(diff / 86400000),
    h: Math.floor((diff / 3600000) % 24),
    m: Math.floor((diff / 60000) % 60),
    s: Math.floor((diff / 1000) % 60),
  };
}

export default function Hero() {
  // Initialize with static values to avoid hydration mismatch
  const [time, setTime] = useState<TimeLeft>({ d: 0, h: 0, m: 0, s: 0 });
  const [participants, setParticipants] = useState<number>(50);
  const [isLive, setIsLive] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Countdown timer — only runs on client
  useEffect(() => {
    setMounted(true);
    setTime(calcTime());
    const id = setInterval(() => setTime(calcTime()), 1000);
    return () => clearInterval(id);
  }, []);

  // Live participant fetch
  const fetchParticipants = useCallback(async () => {
    try {
      const res = await fetch('/api/devpost');
      if (res.ok) {
        const data = await res.json();
        setParticipants(data.participants);
        setIsLive(data.live);
      }
    } catch {
      /* fallback to default */
    }
  }, []);

  useEffect(() => {
    fetchParticipants();
    const id = setInterval(fetchParticipants, 60000); // refresh every 60s
    return () => clearInterval(id);
  }, [fetchParticipants]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,229,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#6C63FF]/10 blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[#00E5FF]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl w-full px-6 pt-28 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left – Content */}
          <motion.div
            initial="hidden" animate="show"
            transition={{ staggerChildren: 0.12, delayChildren: 0.2 }}
          >
            {/* Top badge */}
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-[#00E5FF] mb-6 font-medium">
              <Bot size={16} /> Agentic AI Innovation Challenge 2026
            </motion.div>

            {/* Headline */}
            <motion.h1 variants={fadeUp}
              className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Build the Future of{' '}
              <span className="gradient-text">Autonomous AI</span>
            </motion.h1>

            {/* Sub */}
            <motion.p variants={fadeUp}
              className="text-lg text-[#94a3b8] max-w-xl mb-8 leading-relaxed">
              Create AI agents that reason, plan, and act autonomously to solve real-world challenges. Join innovators worldwide in the premier student AI hackathon.
            </motion.p>

            {/* ===== LIVE STATS BAR ===== */}
            <motion.div variants={fadeUp}
              className="flex flex-wrap items-center gap-4 mb-8">
              {/* Live participant counter */}
              <div className="flex items-center gap-2.5 px-5 py-2.5 rounded-full glass">
                {/* Pulsing live dot */}
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                </span>
                <Users size={16} className="text-[#00E5FF]" />
                <span className="text-lg font-bold font-[family-name:var(--font-heading)] gradient-text">
                  {participants}
                </span>
                <span className="text-sm text-[#94a3b8]">
                  {isLive ? 'Live Participants' : 'Participants'}
                </span>
              </div>


            </motion.div>

            {/* Buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mb-10">
              <a href="https://agentic-ai-innovation-2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
                <span>Join Hackathon</span> <ArrowRight size={18} />
              </a>
              <a href="#about" className="btn-glass text-base">
                <FileText size={18} /> <span>View Rules</span>
              </a>
              <a href="#judges" className="btn-glass text-base !py-2.5 !px-5 text-sm">
                <ChevronDown size={16} /> <span>Meet Judges</span>
              </a>
            </motion.div>

            {/* ===== COUNTDOWN ===== */}
            <motion.div variants={fadeUp}>
              <p className="text-xs uppercase tracking-widest text-[#00E5FF] font-medium mb-3">
                Submission Deadline
              </p>
              <div className="flex gap-3">
                {[
                  { v: time.d, l: 'Days' },
                  { v: time.h, l: 'Hours' },
                  { v: time.m, l: 'Mins' },
                  { v: time.s, l: 'Secs' },
                ].map((t) => (
                  <div key={t.l} className="glass rounded-xl px-4 py-3 text-center min-w-[72px]"
                    style={{ boxShadow: '0 0 20px rgba(108,99,255,0.08)' }}>
                    <div className="text-2xl sm:text-3xl font-bold font-[family-name:var(--font-heading)] gradient-text"
                      suppressHydrationWarning>
                      {String(t.v).padStart(2, '0')}
                    </div>
                    <div className="text-xs text-[#94a3b8] mt-0.5">{t.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating badges */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-8">
              {badges.map((b) => (
                <motion.div key={b.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: b.delay, ease: 'easeInOut' }}
                  className="glass rounded-full px-4 py-2 flex items-center gap-2 text-sm text-white/80">
                  <b.icon size={14} className="text-[#00E5FF]" /> {b.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Robot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Glow behind robot */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] rounded-full bg-[#00E5FF]/15 blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#8B5CF6]/15 blur-[80px]" />

            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Image
                src="/hero-robot.png"
                alt="Futuristic AI Robot"
                width={550}
                height={550}
                priority
                className="relative z-10 drop-shadow-[0_0_60px_rgba(0,229,255,0.3)]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
