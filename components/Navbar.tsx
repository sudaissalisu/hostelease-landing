'use client';

import { useState, useEffect } from 'react';
import { Logo } from './Logo';
import {
  Bed,
  Ticket,
  QrCode,
  ChartBar,
  Rocket,
  UploadSimple,
  PaintBrush,
  ChatCircleDots,
  BookOpen,
  Code,
  TrendUp,
  Question,
  CaretDown,
  List,
  X,
} from '@phosphor-icons/react';

interface DropdownItem {
  label: string;
  description: string;
  icon: React.ElementType;
  href: string;
}

interface NavDropdown {
  label: string;
  items: DropdownItem[];
}

const DROPDOWNS: NavDropdown[] = [
  {
    label: 'Products',
    items: [
      { label: 'Bed Allocation', description: 'Self-serve bed picker with live availability + 5-min lock', icon: Bed, href: '/products/bed-allocation' },
      { label: 'Bursary Codes', description: 'Single-use payment codes for offline payments', icon: Ticket, href: '/products/bursary-codes' },
      { label: 'QR Check-in', description: 'Instant verification via QR scan', icon: QrCode, href: '/products/qr-checkin' },
      { label: 'Analytics', description: 'Real-time occupancy + revenue dashboards', icon: ChartBar, href: '/products/analytics' },
    ],
  },
  {
    label: 'Services',
    items: [
      { label: 'Onboarding', description: 'We import your hostel structure + train your staff', icon: Rocket, href: '/services/onboarding' },
      { label: 'Data Migration', description: 'Bulk import students via CSV', icon: UploadSimple, href: '/services/data-migration' },
      { label: 'Custom Branding', description: 'Your logo, colors, and domain', icon: PaintBrush, href: '/services/custom-branding' },
      { label: 'Support', description: 'Priority chat + dedicated account manager', icon: ChatCircleDots, href: '/services/support' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Documentation', description: 'Guides + tutorials for every role', icon: BookOpen, href: '/resources/docs' },
      { label: 'API Reference', description: 'REST API for custom integrations', icon: Code, href: '/resources/api' },
      { label: 'Case Studies', description: 'How universities use HostelEase', icon: TrendUp, href: '/resources/case-studies' },
      { label: 'Help Centre', description: 'FAQs + troubleshooting', icon: Question, href: '/resources/help' },
    ],
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener — toggle 'scrolled' state when user scrolls down past 20px
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    onScroll(); // initialize on mount
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? // Expanded state: translucent box appears under the nav (backdrop blur + semi-transparent bg)
            // so the nav is visible against scrolling content
            'bg-white/70 backdrop-blur-xl border-b border-slate-200/60 shadow-sm'
          : // Top state: no background, free-floating on the hero
            'bg-transparent'
      }`}
    >
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? // Expanded: full-width with logo pushed to far edges
              'mx-auto flex h-16 max-w-[100rem] items-center justify-between px-6 lg:px-10'
            : // Condensed: centered, normal max-width
              'mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'
        }`}
      >
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
              <button className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-ssm-600">
                {dd.label}
                <CaretDown
                  size={14}
                  weight="bold"
                  className={`transition-transform duration-200 ${openDropdown === dd.label ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown box — floats over the background */}
              {openDropdown === dd.label && (
                <div className="absolute left-0 top-full pt-3 w-[480px] animate-fade-in">
                  <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
                    <div className="grid grid-cols-2 gap-1 p-2">
                      {dd.items.map((item) => {
                        const ItemIcon = item.icon;
                        return (
                          <a
                            key={item.label}
                            href={item.href}
                            className="group flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50"
                          >
                            <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-slate-100 text-ssm-600 transition-colors group-hover:bg-ssm-100">
                              <ItemIcon size={18} weight="duotone" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-slate-900 group-hover:text-ssm-600">{item.label}</p>
                              <p className="text-xs text-slate-500 leading-snug">{item.description}</p>
                            </div>
                          </a>
                        );
                      })}
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
          <a href="#pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-ssm-600">
            Pricing
          </a>
          <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-ssm-600">
            About
          </a>
        </nav>

        {/* Desktop CTA */}
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
          {mobileOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden">
          <div className="mx-4 mt-2 rounded-2xl border border-slate-200 bg-white shadow-xl">
            <nav className="flex flex-col gap-1 p-4">
              {DROPDOWNS.map((dd) => (
                <div key={dd.label} className="border-b border-slate-100 py-2 last:border-0">
                  <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">{dd.label}</p>
                  {dd.items.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <a key={item.label} href={item.href} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-50">
                        <ItemIcon size={16} weight="duotone" className="text-ssm-600" />
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              ))}
              <a href="#pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">Pricing</a>
              <a href="#about" className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">About</a>
              <a href="#" className="mt-2 rounded-lg bg-ssm-600 px-3 py-2.5 text-center text-sm font-semibold text-white">
                Schedule a demo
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
