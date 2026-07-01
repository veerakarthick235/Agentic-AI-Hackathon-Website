'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Network, FileCheck, Briefcase, Heart } from 'lucide-react';

const benefits = [
  { title: 'Mentorship', desc: 'Get guidance from industry experts at top tech companies', icon: Users, color: '#00E5FF' },
  { title: 'Recognition', desc: 'Showcase your talent to a global audience and recruiters', icon: Award, color: '#6C63FF' },
  { title: 'Networking', desc: 'Connect with like-minded innovators worldwide', icon: Network, color: '#8B5CF6' },
  { title: 'Certificates', desc: 'Earn verified certificates for your professional profile', icon: FileCheck, color: '#00E5FF' },
  { title: 'Portfolio', desc: 'Build impressive AI projects for your portfolio', icon: Briefcase, color: '#6C63FF' },
  { title: 'Community', desc: 'Join a thriving community of AI enthusiasts', icon: Heart, color: '#8B5CF6' },
];

export default function WhyParticipate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[400px] rounded-full bg-[#8B5CF6]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Why <span className="gradient-text">Participate?</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Beyond the competition — what you&apos;ll gain</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `linear-gradient(135deg, ${b.color}15, ${b.color}08)`, border: `1px solid ${b.color}20` }}>
                  <Icon size={22} style={{ color: b.color }} />
                </div>
                <h3 className="font-semibold text-white mb-2">{b.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
