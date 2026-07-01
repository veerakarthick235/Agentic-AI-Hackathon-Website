'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import {
  UserPlus,
  Users,
  MessageSquare,
  ClipboardCheck,
  Upload,
  Trophy,
} from 'lucide-react';

const milestones = [
  {
    date: 'Jul 1',
    title: 'Registration Opens',
    icon: UserPlus,
  },
  {
    date: 'Jul 3',
    title: 'Team Formation',
    icon: Users,
  },
  {
    date: 'Jul 5',
    title: 'Mentorship Sessions',
    icon: MessageSquare,
  },
  {
    date: 'Jul 10',
    title: 'Mid Checkpoint',
    icon: ClipboardCheck,
  },
  {
    date: 'Jul 15',
    title: 'Final Submission',
    icon: Upload,
  },
  {
    date: 'Jul 25',
    title: 'Winners Announced',
    icon: Trophy,
  },
];

export default function Timeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: lineRef,
    offset: ['start 0.85', 'end 0.55'],
  });

  const lineScaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="timeline"
      className="relative py-24 lg:py-32 px-6 overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[var(--color-indigo)]/[0.04] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] rounded-full bg-[var(--color-violet)]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={sectionRef}>
        {/* ─── Header ─── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="section-label">Event Schedule</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            Key <span className="gradient-text">Milestones</span>
          </h2>
        </motion.div>

        {/* ─── Desktop: Horizontal layout ─── */}
        <div className="hidden lg:block relative" ref={lineRef}>
          {/* Gradient progress line (sits behind cards) */}
          <div className="absolute top-[52px] left-0 right-0 h-0.5 bg-white/[0.04] rounded-full">
            <motion.div
              className="h-full rounded-full origin-left"
              style={{
                scaleX: lineScaleX,
                background:
                  'linear-gradient(90deg, var(--color-indigo), var(--color-violet), var(--color-sky))',
              }}
            />
          </div>

          <div className="grid grid-cols-6 gap-4">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, y: 28 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                  className="flex flex-col items-center"
                >
                  {/* Date badge on the line */}
                  <div className="relative z-10 mb-4">
                    <div
                      className="px-3 py-1 rounded-full text-xs font-semibold tracking-wide border border-[rgba(255,255,255,0.08)] bg-[var(--color-elevated)]"
                      style={{
                        color: 'var(--color-violet)',
                      }}
                    >
                      {m.date}
                    </div>
                  </div>

                  {/* Connector dot on the line */}
                  <div className="relative z-10 mb-4">
                    <div className="w-3 h-3 rounded-full bg-[var(--color-violet)]/60 border-2 border-[var(--color-surface)] ring-2 ring-[var(--color-violet)]/20" />
                  </div>

                  {/* Card */}
                  <div className="glass glass-hover rounded-xl p-4 w-full text-center">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 bg-[var(--color-violet)]/[0.08]">
                      <Icon size={20} className="text-[var(--color-violet)]" />
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--color-text)] leading-snug">
                      {m.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ─── Mobile: Vertical layout ─── */}
        <div className="lg:hidden relative" ref={lineRef}>
          {/* Vertical gradient line */}
          <div className="absolute left-[18px] top-0 bottom-0 w-0.5 bg-white/[0.04] rounded-full">
            <motion.div
              className="w-full rounded-full origin-top"
              style={{
                height: '100%',
                scaleY: lineScaleY,
                background:
                  'linear-gradient(180deg, var(--color-indigo), var(--color-violet), var(--color-sky))',
              }}
            />
          </div>

          <div className="space-y-6">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.08,
                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                  }}
                  className="relative flex items-start gap-5 pl-10"
                >
                  {/* Date dot on the line */}
                  <div className="absolute left-[11px] top-4 z-10">
                    <div className="w-[14px] h-[14px] rounded-full bg-[var(--color-violet)]/60 border-2 border-[var(--color-surface)] ring-2 ring-[var(--color-violet)]/20" />
                  </div>

                  {/* Card */}
                  <div className="glass glass-hover rounded-xl p-4 flex-1">
                    <div className="flex items-center gap-3 mb-1.5">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-[var(--color-violet)]/[0.08]">
                        <Icon
                          size={16}
                          className="text-[var(--color-violet)]"
                        />
                      </div>
                      <span
                        className="text-xs font-semibold tracking-wide"
                        style={{ color: 'var(--color-violet)' }}
                      >
                        {m.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-[var(--color-text)] pl-11">
                      {m.title}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
