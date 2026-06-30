'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, GraduationCap, Scale, Globe } from 'lucide-react';

function Counter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target]);

  return <>{count}{suffix}</>;
}

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
    } catch { /* fallback */ }
  }, []);

  useEffect(() => {
    fetchCount();
  }, [fetchCount]);

  const stats = [
    { value: liveCount, suffix: '', label: 'Live Participants', icon: Users, live: true },
    { value: 50, suffix: '+', label: 'Universities', icon: GraduationCap, live: false },
    { value: 13, suffix: '+', label: 'Expert Judges', icon: Scale, live: false },
    { value: 100, suffix: '%', label: 'Online & Free', icon: Globe, live: false },
  ];

  return (
    <section id="stats" className="relative py-16 lg:py-20 px-6 overflow-hidden" ref={ref}
      style={{ background: '#050520' }}>
      {/* Top border */}
      <div className="absolute top-0 left-[10%] right-[10%] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #00E5FF, #6C63FF, transparent)' }} />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-[10%] right-[10%] h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #6C63FF, #00E5FF, transparent)' }} />

      <div className="relative z-10 mx-auto max-w-5xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ type: 'spring' as const, stiffness: 260, damping: 18, delay: i * 0.1 + 0.2 }}
                  className="mb-3 flex items-center justify-center gap-2"
                >
                  <Icon size={28} className="text-[#00E5FF]/50" />
                  {/* Live dot for participant count */}
                  {s.live && (
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                    </span>
                  )}
                </motion.div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-heading)] gradient-text mb-1">
                  <Counter target={s.value} suffix={s.suffix} inView={inView} />
                </div>
                <div className="text-sm text-[#94a3b8]">{s.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
