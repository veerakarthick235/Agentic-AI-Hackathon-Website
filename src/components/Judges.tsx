'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const judges = [
  { name: 'Divyaraj Singh Jatav', company: 'Amazon', role: 'Tech Lead' },
  { name: 'Mitchelle Ashley', company: 'Microsoft', role: 'Senior Engineer' },
  { name: 'Swarnamalya Mohan', company: 'FedEx', role: 'AI/ML Lead' },
  { name: 'Prathusha Prakash', company: 'TikTok', role: 'ML Engineer' },
  { name: 'Naga Deepak Pothuraju', company: 'TikTok', role: 'Data Scientist' },
  { name: 'Reshmika Dhandapani', company: 'Motorola', role: 'Software Engineer' },
  { name: 'Sarjan Patel', company: 'Helix Hubs', role: 'Co-Founder' },
  { name: 'Harish Gaggar', company: 'Credit Karma', role: 'Engineering Manager' },
  { name: 'Varun Gaur', company: 'Netflix', role: 'Senior Engineer' },
  { name: 'Varin Nair', company: 'Factory AI', role: 'AI Researcher' },
  { name: 'Urvish Gajjar', company: '', role: 'AI Expert' },
  { name: 'Sumit Bhasin', company: '', role: 'Tech Lead' },
  { name: 'Vasuki Uday Kiran V.', company: 'ServiceNow', role: 'Platform Engineer' },
];

function getInitials(name: string) {
  const parts = name.split(' ');
  return (parts[0][0] + (parts[parts.length - 1]?.[0] || '')).toUpperCase();
}

export default function Judges() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="judges" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/3 right-0 w-[600px] h-[400px] rounded-full bg-[#6C63FF]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            World-Class <span className="gradient-text">Judges</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Industry leaders evaluating your innovations</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-5">
          {judges.map((j, i) => (
            <motion.div key={j.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group glass rounded-2xl p-5 text-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.06)]"
            >
              {/* Avatar */}
              <div className="mx-auto mb-4 w-[72px] h-[72px] rounded-full p-[2px] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]"
                style={{ background: 'linear-gradient(135deg, #00E5FF, #6C63FF, #8B5CF6)' }}>
                <div className="w-full h-full rounded-full bg-[#0a0a2e] flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text">{getInitials(j.name)}</span>
                </div>
              </div>

              <h3 className="font-semibold text-white text-sm leading-tight mb-1">{j.name}</h3>
              <p className="text-xs font-medium mb-0.5" style={{ color: '#00E5FF' }}>
                {j.company || 'Industry Expert'}
              </p>
              <p className="text-xs text-[#94a3b8]">{j.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
