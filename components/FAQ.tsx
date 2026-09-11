'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: 'How long does it take to set up HostelEase for our institution?',
    a: 'Most institutions are live in 1–2 days. You provide your hostel structure (blocks, rooms, beds), we import it, configure your payment gateways, and your students can start allocating beds immediately. Our team handles the heavy lifting — you just review and approve.',
  },
  {
    q: 'Can students pay with bank transfer or cash instead of cards?',
    a: 'Yes. Students who pay via bank transfer, cash, or any offline method get a single-use bursary code from the bursary office. They redeem the code in the app to confirm their bed — no card required. We support Paystack, Flutterwave, OPay, Remita, Kora, and Zainpay for online payments.',
  },
  {
    q: 'What happens if a student picks a bed but doesn\'t pay in time?',
    a: 'The bed is locked for 5 minutes (configurable) when a student picks it. If they don\'t pay within that window, the bed is automatically released back to the pool — no manual intervention needed. The student can pick a different bed and try again.',
  },
  {
    q: 'Does HostelEase work for multiple hostels or campuses?',
    a: 'Yes. The Institution plan supports unlimited beds across multiple blocks, hostels, and campuses. The Enterprise plan adds multi-campus management with separate admin teams per campus — all under one unified dashboard.',
  },
  {
    q: 'Is our student data secure?',
    a: 'Absolutely. All data is encrypted in transit (TLS) and at rest. We use Argon2id password hashing, role-based access control, and full audit logging. The platform is GDPR-aligned and we never sell or share student data. You own your data — we just host it.',
  },
  {
    q: 'Can wardens check students in without paper allocation letters?',
    a: 'Yes. Each allocation generates a unique QR code. Wardens scan it with any smartphone camera — the student\'s name, reg number, bed, and session are verified in seconds. A public verification page lets anyone validate an allocation without logging in.',
  },
  {
    q: 'What if a student needs to change beds after allocation?',
    a: 'Students can request a reallocation from their dashboard — they pick a new available bed and submit a reason. An admin reviews and approves it. The old bed is released, the new bed is allocated, and any fee difference is automatically calculated. Full audit trail preserved.',
  },
  {
    q: 'Do you offer training for our staff?',
    a: 'Yes. The Institution plan includes personalized onboarding. The Enterprise plan adds on-site training, dedicated account management, and custom workflow consulting. We also have built-in tour guides and help documentation inside the platform.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">FAQ</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about HostelEase and how it works.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl border border-slate-200 bg-white"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-4 text-left"
              >
                <span className="font-medium text-slate-900">{faq.q}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 text-slate-500 transition-transform ${open === i ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-slate-600">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still have questions? */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <h3 className="text-lg font-semibold text-slate-900">Still have questions?</h3>
          <p className="mt-2 text-sm text-slate-600">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          <a
            href="#"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700"
          >
            Get in touch
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
