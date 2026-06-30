'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Trophy, Medal, Award, Star } from 'lucide-react';

const prizes = [
  {
    tier: 'Grand Champion',
    place: '1st Place',
    icon: Trophy,
    color: '#FFD700',
    glowClass: 'shadow-[0_0_40px_rgba(255,215,0,0.15)]',
    perks: ['🏆 Championship Trophy', '📜 Premium Certificate', '💼 Internship Referrals', '🌟 Featured on Platform'],
    featured: true,
  },
  {
    tier: '1st Runner Up',
    place: '2nd Place',
    icon: Medal,
    color: '#C0C0C0',
    glowClass: '',
    perks: ['🥈 Silver Medal', '📜 Certificate of Excellence', '💼 Mentorship Access'],
    featured: false,
  },
  {
    tier: '2nd Runner Up',
    place: '3rd Place',
    icon: Award,
    color: '#CD7F32',
    glowClass: '',
    perks: ['🥉 Bronze Medal', '📜 Certificate of Merit', '📚 Learning Resources'],
    featured: false,
  },
  {
    tier: 'All Participants',
    place: 'Everyone',
    icon: Star,
    color: '#00E5FF',
    glowClass: '',
    perks: ['🎓 Digital Certificate', '👥 Community Access', '📝 Portfolio Addition'],
    featured: false,
  },
];

function TiltCard({ children, className, featured }: { children: React.ReactNode; className?: string; featured: boolean }) {
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientY - rect.top) / rect.height - 0.5) * -8;
    const y = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    setRot({ x, y });
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => setRot({ x: 0, y: 0 })}
      animate={{ rotateX: rot.x, rotateY: rot.y }}
      transition={{ type: 'spring' as const, stiffness: 300, damping: 20 }}
      style={{ perspective: 1000, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Prizes() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="prizes" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Prizes & <span className="gradient-text">Recognition</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Outstanding work deserves outstanding rewards</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {prizes.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.tier}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <TiltCard featured={p.featured}
                  className={`glass rounded-2xl p-7 h-full transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 ${p.featured ? 'ring-1 ring-[#FFD700]/20' : ''} ${p.glowClass}`}
                >
                  {/* Featured golden glow bg */}
                  {p.featured && (
                    <div className="absolute inset-0 rounded-2xl opacity-10"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(255,215,0,0.3), transparent 70%)',
                        animation: 'golden-glow 3s ease-in-out infinite',
                      }} />
                  )}

                  {/* Icon */}
                  <div className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center mb-5 mx-auto"
                    style={{ background: `linear-gradient(135deg, ${p.color}20, ${p.color}08)`, border: `1px solid ${p.color}30` }}>
                    <Icon size={26} style={{ color: p.color }} />
                  </div>

                  <div className="relative z-10 text-center">
                    <div className="text-xs font-medium uppercase tracking-wider mb-1" style={{ color: p.color }}>{p.place}</div>
                    <h3 className="text-lg font-bold text-white mb-4">{p.tier}</h3>

                    <ul className="space-y-2.5 text-left">
                      {p.perks.map((perk) => (
                        <li key={perk} className="text-sm text-[#94a3b8]">{perk}</li>
                      ))}
                    </ul>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
