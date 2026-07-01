'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Themes', href: '#themes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Judges', href: '#judges' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const prev = useRef(0);

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 20);
    if (v > prev.current && v > 100) setHidden(true);
    else if (v < prev.current - 5) setHidden(false);
    prev.current = v;
  });

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? 'bg-[#030014]/80 backdrop-blur-2xl border-b border-white/5' : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:py-5">
          {/* Logo */}
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="text-xl font-bold font-[family-name:var(--font-heading)]">
            <span className="gradient-text">AgenticAI</span>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a key={l.label} href={l.href}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="px-3 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-lg hover:bg-white/5">
                {l.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a href="https://agentic-ai-innovation-2026.devpost.com/" target="_blank" rel="noopener noreferrer"
            className="hidden lg:inline-flex btn-primary text-sm !py-2.5 !px-5">
            Join Hackathon
          </a>

          {/* Mobile toggle */}
          <button onClick={() => setOpen(!open)} className="lg:hidden text-white p-2" aria-label="Menu">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#030014]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6"
          >
            {links.map((l, i) => (
              <motion.a key={l.label} href={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.05 } }}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className="text-2xl font-medium text-white/80 hover:text-white transition-colors">
                {l.label}
              </motion.a>
            ))}
            <motion.a href="https://agentic-ai-innovation-2026.devpost.com/"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              onClick={() => setOpen(false)}
              className="btn-primary mt-4"
              target="_blank"
              rel="noopener noreferrer">
              Join Hackathon
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
