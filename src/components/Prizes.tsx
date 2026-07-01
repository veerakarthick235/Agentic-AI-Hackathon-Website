'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Sparkles, Heart, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Prize {
  title: string;
  amount: string;
  icon: LucideIcon;
  includes: string[];
  themeColor: string;
  borderClass: string;
  gradientFrom: string;
  gradientTo: string;
  isGrand?: boolean;
}

const prizes: Prize[] = [
  {
    title: 'Grand Prize',
    amount: '₹15,000',
    icon: Trophy,
    includes: ['Trophy', 'Certificate', 'Featured Spotlight'],
    themeColor: '#fbbf24',
    borderClass: 'border-[#fbbf24]/20',
    gradientFrom: '#fbbf24',
    gradientTo: '#f59e0b',
    isGrand: true,
  },
  {
    title: 'Runner Up',
    amount: '₹10,000',
    icon: Medal,
    includes: ['Medal', 'Certificate'],
    themeColor: '#d1d5db',
    borderClass: 'border-[#d1d5db]/20',
    gradientFrom: '#d1d5db',
    gradientTo: '#9ca3af',
  },
  {
    title: 'Innovation Award',
    amount: '₹5,000',
    icon: Sparkles,
    includes: ['Certificate'],
    themeColor: 'var(--color-violet)',
    borderClass: 'border-[var(--color-violet)]/20',
    gradientFrom: '#a78bfa',
    gradientTo: '#818cf8',
  },
  {
    title: "People's Choice",
    amount: '₹3,000',
    icon: Heart,
    includes: ['Certificate'],
    themeColor: 'var(--color-sky)',
    borderClass: 'border-[var(--color-sky)]/20',
    gradientFrom: '#38bdf8',
    gradientTo: '#0ea5e9',
  },
];

export default function Prizes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="prizes" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[400px] rounded-full bg-[#fbbf24]/[0.03] blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[var(--color-violet)]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label">Rewards</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Prizes & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
            Outstanding work deserves outstanding rewards
          </p>
        </motion.div>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {prizes.map((prize, i) => {
            const Icon = prize.icon;

            return (
              <motion.div
                key={prize.title}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: 'easeOut' as const,
                }}
                className={`
                  relative glass glass-hover p-6 lg:p-7 flex flex-col items-center text-center
                  ${prize.borderClass}
                  ${prize.isGrand ? 'ring-1 ring-[#fbbf24]/15 lg:scale-105 lg:z-10' : ''}
                `}
                style={
                  prize.isGrand
                    ? { animation: 'golden-glow 4s ease-in-out infinite' }
                    : undefined
                }
              >
                {/* Grand Prize ribbon */}
                {prize.isGrand && (
                  <div className="absolute -top-px left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-b-lg bg-gradient-to-r from-[#fbbf24] to-[#f59e0b] text-[10px] font-bold uppercase tracking-wider text-[#06060a]">
                    Top Prize
                  </div>
                )}

                {/* Icon container */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 mt-1"
                  style={{
                    background: `linear-gradient(135deg, ${prize.gradientFrom}15, ${prize.gradientTo}10)`,
                    border: `1px solid ${prize.gradientFrom}20`,
                  }}
                >
                  <Icon
                    size={26}
                    style={{ color: prize.themeColor }}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Prize name */}
                <h3 className="font-[family-name:var(--font-heading)] text-white font-semibold text-lg mb-2">
                  {prize.title}
                </h3>

                {/* Amount */}
                <p
                  className="text-3xl lg:text-4xl font-bold font-[family-name:var(--font-heading)] mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${prize.gradientFrom}, ${prize.gradientTo})`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {prize.amount}
                </p>

                {/* Divider */}
                <div
                  className="w-10 h-px mb-5"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${prize.gradientFrom}40, transparent)`,
                  }}
                />

                {/* Includes */}
                <ul className="space-y-2 w-full">
                  {prize.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-center justify-center gap-2 text-sm text-[#a1a1aa]"
                    >
                      <Check
                        size={14}
                        style={{ color: prize.themeColor }}
                        strokeWidth={2.5}
                        className="shrink-0"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
