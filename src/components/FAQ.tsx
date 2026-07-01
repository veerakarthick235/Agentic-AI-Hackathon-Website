'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'What is the Agentic AI Innovation Challenge?',
    a: 'The Agentic AI Innovation Challenge 2026 is a global online hackathon where students build autonomous AI agents that can reason, plan, and act independently to solve real-world problems across various domains.',
  },
  {
    q: 'Who can participate in the challenge?',
    a: 'The challenge is open to all students currently enrolled in any educational institution worldwide — undergraduate, postgraduate, or doctoral. You must be 18 years or older to participate.',
  },
  {
    q: 'Can I participate as a team?',
    a: 'Yes! You can participate solo or in teams of up to 4 members. All team members must be registered individually on Devpost and meet the eligibility criteria. We encourage diverse, cross-functional teams.',
  },
  {
    q: 'What kind of projects can I build?',
    a: 'You can build any agentic AI system that aligns with the challenge themes: Healthcare & BioTech, FinTech & Legal, Education, Sustainability, or Open Innovation. Projects should demonstrate autonomous reasoning and real-world applicability.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'No, participation is completely free! The Agentic AI Innovation Challenge is open to all eligible students at no cost whatsoever.',
  },
  {
    q: 'How will projects be judged?',
    a: 'Projects will be evaluated on four criteria: Innovation & Creativity (25%), Technical Complexity (25%), Real-World Impact (25%), and Presentation & Demo Quality (25%). Our panel of expert judges will review all submissions.',
  },
  {
    q: 'What tools and frameworks can I use?',
    a: 'You are free to use any programming language, framework, or AI tool — including LangChain, AutoGen, CrewAI, custom solutions, or any combination. Open-source and proprietary tools are both permitted.',
  },
  {
    q: 'How do I submit my project?',
    a: 'Submit your project through the official Devpost page before the deadline. Your submission should include a working demo or video, a GitHub repository link, and a clear description of your agentic AI system.',
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] rounded-full bg-[#818cf8]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-3xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">FAQ</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="glass rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => toggle(i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-medium text-white">
                    {faq.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className="shrink-0 text-[#a1a1aa]"
                  >
                    <ChevronDown size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-sm text-[#a1a1aa] leading-relaxed border-t border-[rgba(255,255,255,0.06)] pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
