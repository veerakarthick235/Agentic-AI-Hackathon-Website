'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Map, Database, Wrench, Play, RotateCcw, GraduationCap, ArrowRight } from 'lucide-react';

const steps = [
  { name: 'Reason', desc: 'Analyze context & objectives', icon: Brain, color: '#00E5FF' },
  { name: 'Plan', desc: 'Break down into sub-tasks', icon: Map, color: '#6C63FF' },
  { name: 'Memory', desc: 'Retrieve past knowledge', icon: Database, color: '#8B5CF6' },
  { name: 'Tools', desc: 'Select & invoke external APIs', icon: Wrench, color: '#00E5FF' },
  { name: 'Execute', desc: 'Carry out planned actions', icon: Play, color: '#6C63FF' },
  { name: 'Reflect', desc: 'Evaluate outcomes & errors', icon: RotateCcw, color: '#8B5CF6' },
  { name: 'Learn', desc: 'Update knowledge for future', icon: GraduationCap, color: '#00E5FF' },
];

export default function AgentWorkflow() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[#6C63FF]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            How <span className="gradient-text">Agentic AI</span> Works
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-2xl mx-auto">
            Autonomous agents follow a continuous loop of reasoning, acting, and learning
          </p>
        </motion.div>

        {/* Workflow steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-4">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isCenter = i === 3;
            return (
              <motion.div
                key={step.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Arrow connector (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-[#00E5FF]/30">
                    <ArrowRight size={16} />
                  </div>
                )}

                <div className={`glass rounded-2xl p-5 text-center transition-all duration-300 group-hover:border-[${step.color}]/40 group-hover:bg-white/[0.06] group-hover:-translate-y-1 ${isCenter ? 'ring-1 ring-[#00E5FF]/20 bg-white/[0.06]' : ''}`}
                  style={{ '--hover-color': step.color } as React.CSSProperties}
                >
                  <div className="mx-auto mb-3 w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)` }}>
                    <Icon size={22} style={{ color: step.color }} />
                  </div>
                  <h3 className="font-semibold text-white text-sm mb-1">{step.name}</h3>
                  <p className="text-xs text-[#94a3b8] leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
