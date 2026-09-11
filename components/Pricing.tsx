'use client';

export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      description: 'For small institutions getting started with digital hostel management.',
      price: '$49',
      period: 'per month',
      cta: 'Schedule a demo',
      highlighted: false,
      features: [
        'Up to 500 beds',
        'Up to 1,000 students',
        '1 payment gateway',
        'Email notifications',
        'Basic reporting',
        '5 staff accounts',
        'QR check-in',
        'Email support',
      ],
    },
    {
      name: 'Institution',
      description: 'For universities managing multiple hostels and thousands of beds.',
      price: '$199',
      period: 'per month',
      cta: 'Schedule a demo',
      highlighted: true,
      badge: 'Most popular',
      features: [
        'Everything in Starter, plus...',
        'Unlimited beds & students',
        'All 6 payment gateways',
        'SMS + WhatsApp notifications',
        'Advanced analytics + charts',
        'Unlimited staff accounts',
        'Custom roles & permissions',
        'Priority chat support',
        'Premium support chat widget',
        'Audit log + retention',
      ],
    },
    {
      name: 'Enterprise',
      description: 'For multi-campus institutions with custom integration needs.',
      price: 'Custom',
      period: 'contact sales',
      cta: 'Contact sales',
      highlighted: false,
      features: [
        'Everything in Institution, plus...',
        'Multi-campus support',
        'Custom payment gateway integrations',
        'SSO (SAML / OIDC)',
        'Dedicated infrastructure',
        '99.9% uptime SLA',
        'Custom branding + white-label',
        'Dedicated account manager',
        'On-site training',
        'Custom data exports',
      ],
    },
  ];

  return (
    <section id="pricing" className="border-t border-slate-200 bg-slate-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-ssm-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Plans that fit your scale
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Simple, transparent pricing that grows with your institution.
            Try any plan free for 30 days — no credit card required.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-ssm-500 bg-white shadow-2xl shadow-ssm-500/10 lg:scale-105'
                  : 'border-slate-200 bg-white'
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ssm-600 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white shadow-lg">
                  {plan.badge}
                </span>
              )}
              <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
              <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900">
                  {plan.price}
                </span>
                <span className="text-sm font-medium text-slate-500">{plan.period}</span>
              </div>

              <a
                href="#"
                className={`mt-6 block rounded-lg px-4 py-2.5 text-center text-sm font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-ssm-600 text-white shadow-lg shadow-ssm-600/25 hover:bg-ssm-700'
                    : 'border border-slate-300 text-slate-700 hover:border-ssm-500 hover:text-ssm-600'
                }`}
              >
                {plan.cta}
              </a>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Features</p>
                <ul className="mt-4 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="mt-0.5 shrink-0 text-ssm-500">
                        <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
