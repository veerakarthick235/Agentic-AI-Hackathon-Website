'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, BookOpen, TrendingUp, Leaf, Sparkles } from 'lucide-react';

const tracks = [
  {
    num: '01',
    title: 'Healthcare AI',
    desc: 'Build AI agents for diagnosis, drug discovery, patient monitoring and clinical decision support.',
    icon: Heart,
    color: '#a78bfa',       // violet
    bgFrom: 'rgba(167,139,250,0.15)',
    bgTo: 'rgba(167,139,250,0.05)',
    border: 'rgba(167,139,250,0.25)',
  },
  {
    num: '02',
    title: 'Education AI',
    desc: 'Create intelligent tutors, adaptive learning systems, and automated assessment platforms.',
    icon: BookOpen,
    color: '#818cf8',       // indigo
    bgFrom: 'rgba(129,140,248,0.15)',
    bgTo: 'rgba(129,140,248,0.05)',
    border: 'rgba(129,140,248,0.25)',
  },
  {
    num: '03',
    title: 'Business AI',
    desc: 'Develop autonomous workflows, predictive analytics, and AI-powered customer service agents.',
    icon: TrendingUp,
    color: '#38bdf8',       // sky
    bgFrom: 'rgba(56,189,248,0.15)',
    bgTo: 'rgba(56,189,248,0.05)',
    border: 'rgba(56,189,248,0.25)',
  },
  {
    num: '04',
    title: 'Sustainability AI',
    desc: 'Design agents for climate modelling, energy optimization, and environmental monitoring at scale.',
    icon: Leaf,
    color: '#34d399',       // emerald
    bgFrom: 'rgba(52,211,153,0.15)',
    bgTo: 'rgba(52,211,153,0.05)',
    border: 'rgba(52,211,153,0.25)',
  },
  {
    num: '05',
    title: 'Open Innovation',
    desc: 'Any novel agentic AI application of your choice — surprise us with your creativity.',
    icon: Sparkles,
    color: '#fbbf24',       // gold
    bgFrom: 'rgba(251,191,36,0.15)',
    bgTo: 'rgba(251,191,36,0.05)',
    border: 'rgba(251,191,36,0.25)',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.1,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function ThemeTracks() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="themes" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-[var(--color-violet)]/5 blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 left-[-5%] w-[400px] h-[400px] rounded-full bg-[var(--color-sky)]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <span className="section-label">INNOVATION TRACKS</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your{' '}
            <span className="gradient-text">Track</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto leading-relaxed">
            Five domains where autonomous AI can create the biggest impact.
            Pick the one that excites you most.
          </p>
        </motion.div>

        {/* Track cards: 1 col → 2 cols sm → 3 cols lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((track, i) => {
            const Icon = track.icon;
            return (
              <motion.div
                key={track.num}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={
                  /* Center the last 2 cards on lg (3-col) so they aren't left-aligned */
                  i >= 3
                    ? i === 3
                      ? 'lg:col-start-1 lg:col-end-2 sm:col-span-1'
                      : 'sm:col-span-1'
                    : ''
                }
              >
                <div className="glass glass-hover rounded-2xl p-7 h-full relative overflow-hidden group">
                  {/* Large track number — top-right, decorative */}
                  <span
                    className="absolute -top-2 -right-1 text-7xl font-bold font-[family-name:var(--font-heading)] gradient-text opacity-[0.08] select-none pointer-events-none leading-none"
                  >
                    {track.num}
                  </span>

                  {/* Icon circle */}
                  <div
                    className="relative z-10 w-14 h-14 rounded-full flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${track.bgFrom}, ${track.bgTo})`,
                      border: `1px solid ${track.border}`,
                    }}
                  >
                    <Icon size={26} style={{ color: track.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="relative z-10 text-xl font-bold text-white mb-2">
                    {track.title}
                  </h3>

                  {/* Description */}
                  <p className="relative z-10 text-sm text-[#a1a1aa] leading-relaxed">
                    {track.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
