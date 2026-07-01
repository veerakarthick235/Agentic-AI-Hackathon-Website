'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Award, Network, FileCheck, Briefcase, Heart } from 'lucide-react';

const benefits = [
  {
    title: 'Mentorship',
    desc: 'Get guidance from industry experts at top tech companies',
    icon: Users,
  },
  {
    title: 'Recognition',
    desc: 'Showcase your talent to a global audience and recruiters',
    icon: Award,
  },
  {
    title: 'Networking',
    desc: 'Connect with like-minded innovators worldwide',
    icon: Network,
  },
  {
    title: 'Certificates',
    desc: 'Earn verified certificates for your professional profile',
    icon: FileCheck,
  },
  {
    title: 'Portfolio',
    desc: 'Build impressive AI projects for your portfolio',
    icon: Briefcase,
  },
  {
    title: 'Community',
    desc: 'Join a thriving community of AI enthusiasts',
    icon: Heart,
  },
];

export default function WhyParticipate() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="why" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-[#a78bfa]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">BENEFITS</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            Why <span className="gradient-text">Participate?</span>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6"
              >
                {/* Icon box */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(167,139,250,0.10))',
                    border: '1px solid rgba(129,140,248,0.15)',
                  }}
                >
                  <Icon size={20} className="text-[#a78bfa]" />
                </div>

                <h3 className="text-white font-medium mb-1.5">{b.title}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
