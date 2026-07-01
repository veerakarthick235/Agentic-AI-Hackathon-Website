'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { CalendarCheck, Upload, Scale, Trophy } from 'lucide-react';

const milestones = [
  { title: 'Registration Opens', date: 'July 1, 2026', desc: 'Sign up and form your teams', icon: CalendarCheck, color: '#00E5FF' },
  { title: 'Submission Deadline', date: 'July 15, 2026', desc: 'Submit your AI agent projects', icon: Upload, color: '#6C63FF' },
  { title: 'Judging Period', date: 'July 16–23, 2026', desc: 'Expert panel evaluates submissions', icon: Scale, color: '#8B5CF6' },
  { title: 'Results Announced', date: 'July 25, 2026', desc: 'Winners announced live', icon: Trophy, color: '#00E5FF' },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.6'] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute top-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Event <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Key dates for your journey</p>
        </motion.div>

        {/* Desktop horizontal */}
        <div className="hidden md:block relative">
          {/* Line */}
          <div className="absolute top-[60px] left-0 right-0 h-[2px] bg-white/5 rounded-full">
            <motion.div className="h-full rounded-full origin-left"
              style={{
                scaleX: lineScale,
                background: 'linear-gradient(90deg, #00E5FF, #6C63FF, #8B5CF6)',
              }} />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center"
                >
                  {/* Dot */}
                  <div className="flex justify-center mb-4">
                    <div className="w-5 h-5 rounded-full border-2"
                      style={{
                        borderColor: m.color,
                        background: `${m.color}30`,
                        boxShadow: `0 0 16px ${m.color}40`,
                        animation: 'pulse-glow 3s ease-in-out infinite',
                      }} />
                  </div>

                  {/* Card */}
                  <div className="glass rounded-xl p-5 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3"
                      style={{ background: `${m.color}15` }}>
                      <Icon size={20} style={{ color: m.color }} />
                    </div>
                    <div className="text-sm font-semibold mb-1" style={{ color: m.color }}>{m.date}</div>
                    <h3 className="font-semibold text-white text-sm mb-1">{m.title}</h3>
                    <p className="text-xs text-[#94a3b8]">{m.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="md:hidden space-y-6">
          <div className="relative pl-8 border-l-2 border-white/10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              return (
                <motion.div key={m.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <div className="absolute -left-[25px] top-0 w-4 h-4 rounded-full"
                    style={{ background: m.color, boxShadow: `0 0 12px ${m.color}50` }} />

                  <div className="glass rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Icon size={18} style={{ color: m.color }} />
                      <span className="text-sm font-semibold" style={{ color: m.color }}>{m.date}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-1">{m.title}</h3>
                    <p className="text-sm text-[#94a3b8]">{m.desc}</p>
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
