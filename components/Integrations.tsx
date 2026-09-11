'use client';

export function Integrations() {
  const features = [
    {
      name: 'Multi-Role Access',
      description: 'Super Admin, Admin, Bursary, Moderator, and Student roles — each with granular per-feature permissions.',
      icon: '🔐',
    },
    {
      name: 'Real-Time Occupancy',
      description: 'Live bed availability across all blocks, rooms, and floors. Spot capacity issues before they become problems.',
      icon: '📊',
    },
    {
      name: 'Payment Reconciliation',
      description: 'Auto-reconcile bursary codes against payments. Full audit trail for every naira. Fraud prevention built-in.',
      icon: '💰',
    },
    {
      name: 'Audit Logging',
      description: 'Every action is logged — who did what, when, from where. Export to CSV for compliance reviews.',
      icon: '📋',
    },
    {
      name: 'Email + SMS Notifications',
      description: 'Students get allocation confirmations, payment receipts, and check-in reminders via email and SMS.',
      icon: '✉️',
    },
    {
      name: 'Maintenance Ticketing',
      description: 'Students report issues from their dashboard. Wardens track, assign, and resolve — all in one place.',
      icon: '🔧',
    },
    {
      name: 'Custom Branding',
      description: 'Your logo, your colors, your domain. White-label the platform as your institution\'s own.',
      icon: '🎨',
    },
    {
      name: 'Public Room Availability',
      description: 'Students browse available beds before they even log in — a public page showing live occupancy.',
      icon: '🌐',
    },
  ];

  return (
    <section id="products" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ssm-600">Platform Features</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Everything you need to run your hostel
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            A complete platform with role-based access, real-time analytics, payment reconciliation,
            and built-in communication. No add-ons, no extra cost.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="card-lift rounded-2xl border border-slate-200 bg-white p-5"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-ssm-50 text-2xl">
                {feature.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{feature.name}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-snug">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
