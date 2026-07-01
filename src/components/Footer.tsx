'use client';

import { Mail, MessageCircle } from 'lucide-react';

/* Custom branded SVG icons — lucide-react doesn't ship brand icons */
function LinkedInIcon({ size = 18, className }: { size?: number; className?: string }) {
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

function GitHubIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"
      className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function DiscordIcon({ size = 18, className }: { size?: number; className?: string }) {
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

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Themes', href: '#themes' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { label: 'Email', icon: Mail, href: 'mailto:innovationhacksofficial@gmail.com' },
  { label: 'WhatsApp', icon: MessageCircle, href: '#' },
  { label: 'LinkedIn', icon: LinkedInIcon, href: '#' },
  { label: 'GitHub', icon: GitHubIcon, href: '#' },
  { label: 'Discord', icon: DiscordIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer className="relative" style={{ background: '#030008' }}>
      {/* Gradient top border */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, #818cf8 30%, #a78bfa 50%, #38bdf8 70%, transparent)',
        }}
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-3">
              <span className="gradient-text">AgenticAI</span>
            </h3>
            <p className="text-[#71717a] text-sm leading-relaxed max-w-xs">
              The premier global student hackathon for building autonomous AI agents that reason, plan, and act.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#71717a] hover:text-[#a78bfa] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('http') || s.href.startsWith('mailto') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={s.label}
                    className="w-9 h-9 rounded-xl flex items-center justify-center text-[#71717a] hover:text-[#a78bfa] hover:bg-white/[0.04] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(255,255,255,0.12)] transition-all duration-200"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[rgba(255,255,255,0.06)]">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <p className="text-xs text-[#52525b] text-center">
            © 2026 Agentic AI Innovation Challenge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
