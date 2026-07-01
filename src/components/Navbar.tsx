'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';

const DEVPOST_URL = 'https://agentic-ai-innovation-2026.devpost.com/';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Themes', href: '#themes' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Judges', href: '#judges' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;

    setScrolled(currentY > 20);

    if (currentY > lastScrollY.current && currentY > 80) {
      setVisible(false); // scrolling down
    } else {
      setVisible(true); // scrolling up
    }

    lastScrollY.current = currentY;
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const smoothScroll = (href: string) => {
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: visible ? 0 : -80 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 h-16 flex items-center transition-colors duration-300 ${
          scrolled
            ? 'glass !rounded-none border-x-0 border-t-0'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto w-full max-w-7xl flex items-center justify-between px-6">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              smoothScroll('#home');
            }}
            className="flex items-center gap-2 text-xl font-bold font-[family-name:var(--font-heading)] tracking-tight"
          >
            <span className="gradient-text">AgenticAI</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  smoothScroll(link.href);
                }}
                className="text-sm text-[#a1a1aa] hover:text-white px-3 py-2 rounded-lg transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={DEVPOST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Sparkles className="w-4 h-4" />
              Join Hackathon
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-50 p-2 text-[#a1a1aa] hover:text-white transition-colors"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-[#06060a]/90 backdrop-blur-xl"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Content */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-[#0c0c14] border-l border-[rgba(255,255,255,0.06)] flex flex-col"
            >
              <div className="h-16 flex-shrink-0" />

              <div className="flex-1 flex flex-col px-6 py-8 gap-1 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      smoothScroll(link.href);
                    }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.3, ease: 'easeOut' }}
                    className="text-lg text-[#a1a1aa] hover:text-white py-3 px-4 rounded-xl hover:bg-[rgba(255,255,255,0.03)] transition-colors duration-200 font-[family-name:var(--font-heading)]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="px-6 py-6 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href={DEVPOST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full justify-center"
                >
                  <Sparkles className="w-4 h-4" />
                  Join Hackathon
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
