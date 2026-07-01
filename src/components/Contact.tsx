'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

/* Custom branded SVG icons — lucide-react doesn't ship brand icons */
function LinkedInIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width={4} height={12} x={2} y={9} />
      <circle cx={4} cy={4} r={2} />
    </svg>
  );
}

function GitHubIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function DiscordIcon({ size = 20, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
      <path d="M8.5 17h7" />
      <path d="M20.2 5.9a18.5 18.5 0 0 0-4.6-1.4l-.2.4a17 17 0 0 0-6.8 0l-.2-.4A18.5 18.5 0 0 0 3.8 5.9 19 19 0 0 0 .5 18.6a18.6 18.6 0 0 0 5.7 2.9l.7-1a12.1 12.1 0 0 1-3.8-1.8l.4-.3a16 16 0 0 0 13.9 0l.4.3a12.1 12.1 0 0 1-3.8 1.8l.7 1a18.6 18.6 0 0 0 5.7-2.9A19 19 0 0 0 23.5 5.9z" />
    </svg>
  );
}

const channels = [
  {
    name: 'Email',
    desc: 'Drop us an email anytime — we typically respond within 24 hours',
    icon: Mail,
    href: 'mailto:innovationhacksofficial@gmail.com',
  },
  {
    name: 'WhatsApp',
    desc: 'Quick questions? Reach out on WhatsApp for instant support',
    icon: MessageCircle,
    href: '#',
  },
  {
    name: 'LinkedIn',
    desc: 'Follow us for updates, announcements, and networking opportunities',
    icon: LinkedInIcon,
    href: '#',
  },
  {
    name: 'GitHub',
    desc: 'Explore starter repos, resources, and submit your projects',
    icon: GitHubIcon,
    href: '#',
  },
  {
    name: 'Discord',
    desc: 'Join our community server for real-time discussions and help',
    icon: DiscordIcon,
    href: '#',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="contact" className="relative py-24 lg:py-32 px-6 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full bg-[#38bdf8]/5 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-6xl" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label">GET IN TOUCH</span>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
        </motion.div>

        {/* Channels grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {channels.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.a
                key={c.name}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass glass-hover rounded-2xl p-6 block"
              >
                {/* Icon box */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{
                    background: 'linear-gradient(135deg, rgba(129,140,248,0.15), rgba(56,189,248,0.10))',
                    border: '1px solid rgba(129,140,248,0.15)',
                  }}
                >
                  <Icon size={20} className="text-[#818cf8]" />
                </div>

                <h3 className="text-white font-medium mb-1.5">{c.name}</h3>
                <p className="text-[#a1a1aa] text-sm leading-relaxed">{c.desc}</p>
              </motion.a>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <p className="text-[#a1a1aa] text-lg mb-5">Ready to build the future?</p>
          <a
            href="https://agentic-ai-innovation-2026.devpost.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-base"
          >
            Register Now <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
