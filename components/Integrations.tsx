'use client';

export function Integrations() {
  const integrations = [
    {
      name: 'Paystack',
      description: 'Accept card payments directly in the platform — students pay their hostel fee without leaving the app.',
      initials: 'P',
      color: 'bg-blue-500',
    },
    {
      name: 'Flutterwave',
      description: 'Process payments via Flutterwave — supports bank transfers, USSD, and cards for maximum student reach.',
      initials: 'F',
      color: 'bg-orange-500',
    },
    {
      name: 'OPay',
      description: 'Mobile-money-first payments via OPay — perfect for students who prefer mobile wallets.',
      initials: 'O',
      color: 'bg-green-500',
    },
    {
      name: 'Remita',
      description: 'Government-standard payment processing via Remita — invoice generation and reconciliation built-in.',
      initials: 'R',
      color: 'bg-red-500',
    },
    {
      name: 'Gmail SMTP',
      description: 'Send branded email notifications — allocation confirmations, payment receipts, and announcements.',
      initials: 'G',
      color: 'bg-rose-500',
    },
    {
      name: 'WhatsApp SMS',
      description: 'Notify students via SMS when their bed is allocated or their bursary code is ready — instant delivery.',
      initials: 'W',
      color: 'bg-emerald-500',
    },
  ];

  return (
    <section id="products" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">Integrations</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Get more value from your tools
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Connect your payment gateways, email, and SMS providers. HostelEase works
            with the tools your institution already uses — set up takes minutes, not days.
          </p>
        </div>

        {/* Integration grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((int) => (
            <div
              key={int.name}
              className="card-lift rounded-2xl border border-slate-200 bg-white p-6"
            >
              <div className="flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${int.color} text-white font-bold text-lg shadow-lg`}>
                  {int.initials}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{int.name}</h3>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Integration</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-slate-600">{int.description}</p>
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                View integration
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
