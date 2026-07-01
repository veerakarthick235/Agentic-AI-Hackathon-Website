'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Judge {
  name: string;
  role: string;
  company: string;
}

const judges: Judge[] = [
  { name: 'Harini Suresh', role: 'ML Lead', company: 'Amazon' },
  { name: 'Karthik Rajan', role: 'AI Architect', company: 'Microsoft' },
  { name: 'Priya Sharma', role: 'Research Scientist', company: 'Google DeepMind' },
  { name: 'David Chen', role: 'VP Engineering', company: 'Anthropic' },
  { name: 'Aisha Patel', role: 'Staff Engineer', company: 'Meta AI' },
  { name: 'James Wilson', role: 'CTO', company: 'Scale AI' },
  { name: 'Maria Santos', role: 'AI Director', company: 'Netflix' },
  { name: 'Raj Malhotra', role: 'Principal Engineer', company: 'Stripe' },
  { name: 'Sarah Kim', role: 'Head of AI', company: 'Vercel' },
  { name: 'Alex Thompson', role: 'Tech Lead', company: 'OpenAI' },
  { name: 'Nadia Kowalski', role: 'Sr Researcher', company: 'DeepMind' },
  { name: 'Chen Wei', role: 'Engineering Director', company: 'TikTok' },
  { name: 'Lisa Anderson', role: 'VP Product', company: 'Cursor' },
];

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function Judges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="judges" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-violet)]/5 blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[350px] rounded-full bg-[var(--color-indigo)]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label">Expert Panel</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Meet the <span className="gradient-text">Judges</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-xl mx-auto">
            Industry leaders evaluating your innovations
          </p>
        </motion.div>

        {/* Judges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-5">
          {judges.map((judge, i) => (
            <motion.div
              key={judge.name}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: 'easeOut' as const,
              }}
              className="glass glass-hover p-5 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-indigo)] to-[var(--color-violet)] flex items-center justify-center mb-4 shrink-0">
                <span className="text-white font-semibold text-sm tracking-wide select-none">
                  {getInitials(judge.name)}
                </span>
              </div>

              {/* Info */}
              <h3 className="text-white font-medium text-sm leading-tight mb-1">
                {judge.name}
              </h3>
              <p className="text-[#71717a] text-xs leading-snug">
                {judge.role}, {judge.company}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
