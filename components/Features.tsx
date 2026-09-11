'use client';

import {
  Bed,
  GraduationCap,
  Ticket,
  ArrowRight,
} from '@phosphor-icons/react';

export function Features() {
  const features = [
    {
      title: 'Self-serve bed picker',
      description:
        'Students browse available beds on a live warden map, filtered by gender and room type. They pick a bed, lock it for 5 minutes, and pay — no queues, no paperwork, no manual allocation.',
      icon: Bed,
      points: ['Live bed availability', 'Gender-filtered blocks', '5-minute lock window'],
      screenshot: '/bed-picker.png',
      alt: 'Bed picker — live bed availability grid',
    },
    {
      title: 'Student journey tracker',
      description:
        'Each student sees their allocation journey at a glance — profile verification, application, bed selection, payment, and check-in. The NextStepCTA always shows what to do next.',
      icon: GraduationCap,
      points: ['5-step progress tracker', 'Smart next-step CTA', 'QR code for check-in'],
      screenshot: '/dashboard-student.png',
      alt: 'Student dashboard with journey tracker',
    },
    {
      title: 'Bursary code payments',
      description:
        'Issue single-use bursary codes to students who paid offline (bank transfer, cash). Students redeem the code in-app to confirm their bed — full audit trail, no double-spending.',
      icon: Ticket,
      points: ['Single-use codes', 'Auto-reconciliation', 'Fraud prevention built-in'],
      screenshot: '/dashboard-admin.png',
      alt: 'Admin dashboard with bursary code management',
    },
  ];

  return (
    <section id="features" className="border-t border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ssm-600">Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cutting-edge features for modern hostels
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Powerful, self-serve bed allocation, bursary payments, and real-time
            analytics. Trusted by universities managing thousands of beds every semester.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${i % 2 === 1 ? 'lg:[&>div:first-child]:order-2' : ''}`}
              >
                {/* Text */}
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-ssm-50 text-ssm-600">
                    <Icon size={28} weight="duotone" />
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-lg text-slate-600">{feature.description}</p>
                  <ul className="mt-6 space-y-3">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center gap-3 text-base text-slate-700">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-ssm-600">
                          <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-ssm-600 transition-colors hover:text-ssm-700"
                  >
                    Learn more
                    <ArrowRight size={14} weight="bold" />
                  </a>
                </div>

                {/* Real screenshot — light theme, properly sized */}
                <div className="screenshot-frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.screenshot}
                    alt={feature.alt}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
