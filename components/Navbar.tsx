'use client';

import { useState } from 'react';
import { Logo } from './Logo';

interface DropdownItem {
  label: string;
  description: string;
  icon: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const DROPDOWNS: NavDropdown[] = [
  {
    label: 'Products',
    items: [
      { label: 'Bed Allocation', description: 'Self-serve bed picker with live availability + 5-min lock', icon: '🛏️' },
      { label: 'Bursary Codes', description: 'Single-use payment codes for offline payments', icon: '🎫' },
      { label: 'QR Check-in', description: 'Instant verification via QR scan', icon: '📱' },
      { label: 'Analytics', description: 'Real-time occupancy + revenue dashboards', icon: '📊' },
    ],
  },
  {
    label: 'Services',
    items: [
      { label: 'Onboarding', description: 'We import your hostel structure + train your staff', icon: '🚀' },
      { label: 'Data Migration', description: 'Bulk import students via CSV', icon: '📦' },
      { label: 'Custom Branding', description: 'Your logo, colors, and domain', icon: '🎨' },
      { label: 'Support', description: 'Priority chat + dedicated account manager', icon: '💬' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Documentation', description: 'Guides + tutorials for every role', icon: '📚' },
      { label: 'API Reference', description: 'REST API for custom integrations', icon: '⚡' },
      { label: 'Case Studies', description: 'How universities use HostelEase', icon: '📈' },
      { label: 'Help Centre', description: 'FAQs + troubleshooting', icon: '❓' },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop nav with dropdowns */}
        <nav className="hidden items-center gap-1 md:flex">
          {DROPDOWNS.map((dd) => (
            <div
              key={dd.label}
              className="relative"
              onMouseEnter={() => setOpenDropdown(dd.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className="flex cursor-pointer items-center gap-0.5 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-ssm-600"
              >
                {dd.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`transition-transform ${openDropdown === dd.label ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* Dropdown box (Untitled UI style — megamenu with icon + description) */}
              {openDropdown === dd.label && (
                <div className="absolute left-0 top-full pt-2 w-[480px] animate-fade-in">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {dd.items.map((item) => (
                        <a
                          key={item.label}
                          href="#"
                          className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                        >
                          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-lg group-hover:bg-ssm-100">
                            {item.icon}
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-slate-900 group-hover:text-ssm-600">{item.label}</p>
                            <p className="text-xs text-slate-500 leading-snug">{item.description}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                    <div className="border-t border-slate-100 bg-slate-50/50 px-4 py-2.5">
                      <a href="#" className="text-xs font-medium text-ssm-600 hover:text-ssm-700">
                        View all {dd.label.toLowerCase()} →
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="#pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-ssm-600">
            Pricing
          </a>
          <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-ssm-600">
            About
          </a>
        </nav>

        {/* Desktop CTA — Schedule a demo (no login/signup) */}
        <div className="hidden md:flex">
          <a
            href="#"
            className="rounded-lg bg-ssm-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-ssm-600/20 transition-all hover:bg-ssm-700 hover:shadow-ssm-600/30"
          >
            Schedule a demo
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
            {DROPDOWNS.map((dd) => (
              <div key={dd.label} className="border-b border-slate-100 py-2">
                <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">{dd.label}</p>
                {dd.items.map((item) => (
                  <a key={item.label} href="#" className="block rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                    {item.icon} {item.label}
                  </a>
                ))}
              </div>
            ))}
            <a href="#pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Pricing</a>
            <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">About</a>
            <a href="#" className="mt-2 rounded-lg bg-ssm-600 px-3 py-2.5 text-center text-sm font-semibold text-white">
              Schedule a demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
