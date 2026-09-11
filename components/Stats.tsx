'use client';

export function Stats() {
  const stats = [
    { value: '2,140+', label: 'Beds managed' },
    { value: '1,812', label: 'Students allocated' },
    { value: '₦123M+', label: 'Bursary revenue processed' },
    { value: '99.9%', label: 'Uptime this year' },
  ];

  return (
    <section className="border-y border-slate-200 bg-slate-900 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Unleash the full power of your hostel
          </h2>
          <p className="mt-4 text-lg text-slate-300">
            Everything you need to manage modern university housing — from bed allocation
            to bursary payments to QR check-in.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-ssm-400 sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
