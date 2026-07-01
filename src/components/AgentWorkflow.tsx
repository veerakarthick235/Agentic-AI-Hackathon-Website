'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Database, Brain, Zap, Eye, RefreshCw, Rocket } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Define Agent Goal',
    desc: 'Set clear objectives and success criteria for your autonomous AI agent to pursue.',
    icon: Target,
  },
  {
    num: '02',
    title: 'Connect Knowledge',
    desc: 'Integrate data sources, APIs, and domain knowledge the agent needs to operate.',
    icon: Database,
  },
  {
    num: '03',
    title: 'Reason & Plan',
    desc: 'The agent analyzes context, decomposes problems, and formulates multi-step strategies.',
    icon: Brain,
  },
  {
    num: '04',
    title: 'Execute Actions',
    desc: 'Autonomously invoke tools, call APIs, and perform tasks to achieve its goals.',
    icon: Zap,
  },
  {
    num: '05',
    title: 'Observe Results',
    desc: 'Monitor outputs, validate outcomes, and gather feedback from every action taken.',
    icon: Eye,
  },
  {
    num: '06',
    title: 'Iterate & Improve',
    desc: 'Refine strategies based on observations, learn from errors, and self-correct.',
    icon: RefreshCw,
  },
  {
    num: '07',
    title: 'Deploy & Scale',
    desc: 'Ship your production-ready agent and scale it to handle real-world workloads.',
    icon: Rocket,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  }),
};

export default function AgentWorkflow() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[var(--color-indigo)]/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' as const }}
          className="text-center mb-16"
        >
          <span className="section-label">HOW IT WORKS</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            The Agentic AI{' '}
            <span className="gradient-text">Workflow</span>
          </h2>
          <p className="text-[#a1a1aa] text-lg max-w-2xl mx-auto leading-relaxed">
            From goal definition to production deployment — master the seven-step loop
            that powers truly autonomous AI agents.
          </p>
        </motion.div>

        {/* Steps grid: 1 col → 2 cols md → 3 cols lg, last item centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;

            return (
              <motion.div
                key={step.num}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className={
                  isLast
                    ? 'md:col-span-2 lg:col-span-1 md:max-w-sm md:mx-auto lg:max-w-none'
                    : ''
                }
              >
                <div className="glass glass-hover rounded-2xl p-6 h-full flex flex-col">
                  {/* Top row: step badge + icon */}
                  <div className="flex items-start justify-between mb-5">
                    {/* Step number badge */}
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--color-indigo)]/10 border border-[var(--color-indigo)]/20 text-xs font-semibold text-[var(--color-indigo)]">
                      {step.num}
                    </span>

                    {/* Icon */}
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-gradient-to-br from-[var(--color-indigo)]/15 to-[var(--color-violet)]/10">
                      <Icon size={22} className="text-[var(--color-violet)]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#a1a1aa] leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
