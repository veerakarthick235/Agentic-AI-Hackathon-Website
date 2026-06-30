'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, MessageSquare, ArrowRight } from 'lucide-react';

/* Custom brand SVG icons */
const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const channels = [
  { icon: Mail, label: 'innovationhacksofficial@gmail.com', sub: 'Email Us', href: 'mailto:innovationhacksofficial@gmail.com' },
  { icon: MessageCircle, label: 'Join WhatsApp Community', sub: 'WhatsApp', href: '#' },
  { icon: LinkedinIcon, label: 'Follow us on LinkedIn', sub: 'LinkedIn', href: '#' },
  { icon: GithubIcon, label: 'View on GitHub', sub: 'GitHub', href: '#' },
  { icon: MessageSquare, label: 'Join Discord Server', sub: 'Discord', href: '#' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#00E5FF]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-5xl" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#94a3b8] text-lg">Have questions? We&apos;re here to help.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a key={c.sub} href={c.href}
                target={c.href.startsWith('mailto') ? undefined : '_blank'}
                rel={c.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group glass rounded-2xl p-5 flex flex-col items-center gap-3 text-center transition-all duration-300 hover:bg-white/[0.06] hover:border-white/20 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,229,255,0.06)]"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, rgba(0,229,255,0.12), rgba(108,99,255,0.12))', border: '1px solid rgba(0,229,255,0.15)' }}>
                  <Icon className="w-5 h-5 text-[#00E5FF]" />
                </div>
                <span className="text-xs font-medium uppercase tracking-widest text-[#6C63FF]">{c.sub}</span>
                <span className="text-sm text-white/80 break-all sm:break-normal">{c.label}</span>
              </motion.a>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-lg font-medium text-white mb-5">Ready to build the future?</p>
          <a href="https://agentic-ai-innovation-2026.devpost.com/" target="_blank" rel="noopener noreferrer" className="btn-primary text-base">
            Register Now <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
