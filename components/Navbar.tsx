'use client';

import { useState } from 'react';
import { Logo } from './Logo';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Products', href: '#products' },
    { label: 'Services', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#faq' },
    { label: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-600 transition-colors hover:text-ssm-600"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#"
            className="text-sm font-semibold text-slate-700 transition-colors hover:text-ssm-600"
          >
            Log in
          </a>
          <a
            href="#"
            className="rounded-lg bg-ssm-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-ssm-600/20 transition-all hover:bg-ssm-700 hover:shadow-ssm-600/30"
          >
            Sign up
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-slate-700"
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex flex-col gap-2 border-t border-slate-200 pt-3">
              <a href="#" className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                Log in
              </a>
              <a href="#" className="rounded-lg bg-ssm-600 px-3 py-2 text-center text-sm font-semibold text-white">
                Sign up
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
