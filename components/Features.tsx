'use client';

export function Features() {
  const features = [
    {
      title: 'Self-serve bed picker',
      description:
        'Students browse available beds on a live warden map, filtered by gender and room type. They pick a bed, lock it for 5 minutes, and pay — no queues, no paperwork, no manual allocation.',
      icon: '🛏️',
      points: ['Live bed availability', 'Gender-filtered blocks', '5-minute lock window'],
    },
    {
      title: 'Bursary code payments',
      description:
        'Issue single-use bursary codes to students who paid offline (bank transfer, cash). Students redeem the code in-app to confirm their bed — full audit trail, no double-spending.',
      icon: '🎫',
      points: ['Single-use codes', 'Auto-reconciliation', 'Fraud prevention built-in'],
    },
    {
      title: 'QR check-in & verification',
      description:
        'Each allocation generates a unique QR code. Wardens scan it at check-in to verify the student, bed, and session in seconds — no more paper allocation letters.',
      icon: '📱',
      points: ['One-tap check-in', 'Public verification page', 'Branded PDF allocation letter'],
    },
    {
      title: 'Role-based access control',
      description:
        'Granular permissions for Super Admin, Admin, Bursary, Moderator, and Student roles. Each role sees only what they need — fully audited, fully controlled.',
      icon: '🔐',
      points: ['5 role types', 'Per-feature permissions', 'Full audit log'],
    },
    {
      title: 'Real-time occupancy dashboard',
      description:
        'See live occupancy across all blocks, rooms, and beds. Spot capacity issues early, identify maintenance needs, and track revenue in real time.',
      icon: '📊',
      points: ['Live block occupancy', 'Revenue tracking', 'Maintenance ticketing'],
    },
    {
      title: 'Premium support chat',
      description:
        'Built-in live chat between students and support reps. AI-assisted routing, contextual handoff, and resolution tracking — all in one place.',
      icon: '💬',
      points: ['Real-time messaging', 'AI handoff context', 'Resolution analytics'],
    },
  ];

  return (
    <section id="features" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Cutting-edge features for modern hostels
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Powerful, self-serve bed allocation, bursary payments, and real-time
            analytics. Trusted by universities managing thousands of beds every semester.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="card-lift group rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              <ul className="mt-4 space-y-2">
                {feature.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-slate-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-brand-500">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-700"
              >
                Learn more
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
