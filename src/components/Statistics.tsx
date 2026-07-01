'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, Scale, Globe } from 'lucide-react';

/* ─── Animated counter ─── */
function Counter({
  target,
  suffix,
  inView,
}: {
  target: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 2000;
    const startTime = performance.now();
    let raf: number;

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) raf = requestAnimationFrame(step);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

/* ─── Gradient border line ─── */
function GradientLine({ position }: { position: 'top' | 'bottom' }) {
  return (
    <div
      className={`absolute ${position}-0 left-0 right-0 h-px`}
      style={{
        background:
          'linear-gradient(90deg, transparent, var(--color-indigo), var(--color-violet), transparent)',
      }}
    />
  );
}

/* ─── Statistics section ─── */
export default function Statistics() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [liveCount, setLiveCount] = useState(50);

  const fetchCount = useCallback(async () => {
    try {
      const res = await fetch('/api/devpost');
      if (res.ok) {
        const data = await res.json();
        setLiveCount(data.participants);
      }
    } catch {
      /* fallback to default */
    }
  }, []);

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  const stats = [
    {
      value: liveCount,
      suffix: '',
      label: 'Live Participants',
      icon: Users,
      live: true,
    },
    {
      value: 50,
      suffix: '+',
      label: 'Universities',
      icon: GraduationCap,
      live: false,
    },
    {
      value: 13,
      suffix: '+',
      label: 'Expert Judges',
      icon: Scale,
      live: false,
    },
    {
      value: 100,
      suffix: '%',
      label: 'Online & Free',
      icon: Globe,
      live: false,
    },
  ];

  return (
    <section
      id="stats"
      className="relative py-16 lg:py-20 px-6 overflow-hidden bg-[#0c0c14]"
      ref={ref}
    >
      {/* Gradient border lines */}
      <GradientLine position="top" />
      <GradientLine position="bottom" />

      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[var(--color-violet)]/[0.03] blur-[100px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94] as const,
                }}
                className="text-center group"
              >
                {/* Icon row */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={inView ? { scale: 1, opacity: 1 } : {}}
                  transition={{
                    type: 'spring' as const,
                    stiffness: 260,
                    damping: 20,
                    delay: i * 0.12 + 0.15,
                  }}
                  className="mb-4 flex items-center justify-center gap-2"
                >
                  <Icon
                    size={28}
                    className="text-[var(--color-violet)]/50 transition-colors duration-300 group-hover:text-[var(--color-violet)]"
                  />
                  {/* Pulsing green dot for live stat */}
                  {s.live && (
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                    </span>
                  )}
                </motion.div>

                {/* Counter number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-2 leading-none">
                  <Counter target={s.value} suffix={s.suffix} inView={inView} />
                </div>

                {/* Label */}
                <div className="text-sm text-[#71717a] tracking-wide">
                  {s.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
