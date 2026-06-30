'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  { q: 'What is the Agentic AI Innovation Challenge?', a: 'A global online hackathon where students build autonomous AI agents that can reason, plan, and act to solve real-world problems across healthcare, education, business, and sustainability.' },
  { q: 'Who can participate?', a: 'The hackathon is open to students from universities and colleges worldwide. Both undergraduate and graduate students can participate.' },
  { q: 'How do teams work?', a: 'Teams can have 2-4 members. You can form your own team or find teammates through our community channels.' },
  { q: 'What should we build?', a: 'Build an AI agent that demonstrates autonomous reasoning, planning, and action capabilities. Choose from our five innovation tracks or propose your own idea under Open Innovation.' },
  { q: 'Is there a registration fee?', a: 'No! The hackathon is completely free to participate in. We believe in making AI innovation accessible to all students.' },
  { q: 'What are the judging criteria?', a: 'Projects are evaluated on innovation, technical complexity, real-world impact, agentic capabilities, and presentation quality.' },
  { q: 'What tools can we use?', a: 'You can use any programming language, framework, or AI platform. We encourage using modern AI frameworks like LangChain, AutoGen, CrewAI, or building from scratch.' },
  { q: 'How do we submit?', a: 'Submit your project through Devpost platform with a demo video, GitHub repository, and a brief writeup explaining your AI agent\'s capabilities.' },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#6C63FF]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">Everything you need to know</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <div className={`glass rounded-xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-white/20 bg-white/[0.06]' : 'hover:border-white/15'}`}>
                  <button
                    onClick={() => setOpenIdx(isOpen ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                  >
                    <span className="font-medium text-white text-sm sm:text-base pr-4">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0"
                    >
                      <ChevronDown size={18} className="text-[#94a3b8]" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-sm text-[#94a3b8] leading-relaxed border-t border-white/5 pt-4">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
