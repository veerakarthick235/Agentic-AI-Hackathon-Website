'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HeartPulse, BookOpen, TrendingUp, Leaf, Sparkles } from 'lucide-react';

const tracks = [
  { num: '01', title: 'Healthcare AI', desc: 'Build AI agents for diagnostics, drug discovery, and patient care optimization', icon: HeartPulse, color: '#00E5FF' },
  { num: '02', title: 'Education AI', desc: 'Transform learning with personalized AI tutors and intelligent assessments', icon: BookOpen, color: '#6C63FF' },
  { num: '03', title: 'Business AI', desc: 'Automate workflows, analytics, and intelligent decision-making systems', icon: TrendingUp, color: '#8B5CF6' },
  { num: '04', title: 'Sustainability AI', desc: 'Tackle climate change, energy optimization, and conservation challenges', icon: Leaf, color: '#00E5FF' },
  { num: '05', title: 'Open Innovation', desc: 'Push boundaries with creative and novel AI agent applications', icon: Sparkles, color: '#6C63FF' },
];

export default function ThemeTracks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="themes" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#8B5CF6]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Innovation <span className="gradient-text">Tracks</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Choose your challenge domain and build the future</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tracks.map((t, i) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.num}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative glass rounded-2xl p-8 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(0,229,255,0.08)] ${i >= 3 ? 'lg:col-span-1' : ''}`}
              >
                {/* Track number */}
                <span className="absolute top-4 right-4 text-4xl font-bold text-white/[0.04] font-[family-name:var(--font-heading)]">
                  {t.num}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `linear-gradient(135deg, ${t.color}15, ${t.color}08)`, border: `1px solid ${t.color}20` }}>
                  <Icon size={26} style={{ color: t.color }} />
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{t.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{t.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
