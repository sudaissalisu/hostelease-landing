'use client';

/**
 * DashboardMockup — photorealistic CSS/HTML mockup of the HostelEase admin dashboard.
 * Styled to match the real app's dark theme with SSM brand accents.
 * Uses sample data: "Aqua University" as the school, "Ibrahim Abdullahi" as the student name.
 *
 * This is NOT a screenshot — it's a vector mockup that's crisp at any resolution
 * and supports dark theme natively. Based on the real dashboard layout from the hostel app.
 */

const PhosphorIcon = ({ path, className = 'h-5 w-5' }: { path: string; className?: string }) => (
  <svg className={className} viewBox="0 0 256 256" fill="currentColor">
    <path d={path} />
  </svg>
);

const ICONS = {
  bed: 'M216,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z',
  chart: 'M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z',
  users: 'M228,160a36,36,0,0,0-24-33.94V120a44,44,0,0,0-44-44H84a44,44,0,0,0-44,44v6.06a36,36,0,0,0,0,67.88V200a16,16,0,0,0,16,16H212a16,16,0,0,0,16-16v-6.06A36,36,0,0,0,228,160Z',
  dollar: 'M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm24-104a24,24,0,0,1-24,24v8a8,8,0,0,1-16,0v-8a24,24,0,0,1-24-24,8,8,0,0,1,16,0,8,8,0,0,0,16,0V96a24,24,0,0,1,0-48h8V40a8,8,0,0,1,16,0v8a24,24,0,0,1,24,24,8,8,0,0,1-16,0,8,8,0,0,0-16-16v32A24,24,0,0,1,152,112Z',
  building: 'M232,224H208V136h16a8,8,0,0,0,0-16H208V72a32,32,0,0,0-32-32H56A32,32,0,0,0,24,72V224a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM40,72A16,16,0,0,1,56,56H176a16,16,0,0,1,16,16v48H40Zm0,88H192v64H40Zm168,64V136h16v88Z',
  key: 'M228,72H32V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V176H240v32a8,8,0,0,0,16,0V112A40,40,0,0,0,216,72ZM32,88h72v72H32Zm88,72V88h96a24,24,0,0,1,24,24v48Z',
  shield: 'M208,40H48A16,16,0,0,0,32,56V168a16,16,0,0,0,16,16H92.69a8,8,0,0,1,8,8v38.34a4,4,0,0,0,7.16,2.46l43.88-46.8a8,8,0,0,1,5.79-2.46H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Z',
  check: 'M225.86,102.82c-3.77-3.94-7.67-8-9.14-11.57-1.36-3.27-1.44-8.69,1.77-20.95,3.25-12.39,1.5-22.55-5.19-30.23-6.88-7.86-18-11.27-30.1-9.51a45.9,45.9,0,0,0-21.06,8.3,46,46,0,0,0-21.06-8.3c-12.08-1.76-23.22,1.65-30.1,9.51-6.69,7.68-8.44,17.84-5.19,30.23,3.21,12.26,3.13,17.68,1.77,20.95-1.47,3.56-5.37,7.63-9.14,11.57-6.55,6.85-13.96,14.62-13.96,27.42,0,19.38,15.54,32.3,39.91,32.3a88.86,88.86,0,0,0,18.82-2.13c1.92,5.45,5.39,9.65,10.15,12.28a22,22,0,0,0,10.5,2.53,28.06,28.06,0,0,0,7-1c12.95-3.3,21.39-14.52,22.55-29.67a87.87,87.87,0,0,0,17.77,2.1c24.37,0,39.91-12.92,39.91-32.3C239.82,117.44,232.41,109.67,225.86,102.82Z',
};

export function DashboardMockupDark() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const bars = [40, 55, 45, 70, 85, 95, 78, 88, 92, 75, 60, 50];

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
      {/* Browser chrome (dark) */}
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 flex-1">
          <div className="mx-auto max-w-md rounded-md bg-slate-700 px-3 py-1 text-xs text-slate-400">
            hostelease.vercel.app/dashboard
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          Live
        </div>
      </div>

      {/* Dashboard body */}
      <div className="p-6 sm:p-8">
        {/* Header row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-white">Admin Dashboard</h3>
              <span className="rounded-full bg-ssm-600/20 px-2 py-0.5 text-xs font-semibold text-ssm-400">
                Aqua University
              </span>
            </div>
            <p className="mt-0.5 text-xs text-slate-400">Active session: 2026/2027 · Welcome, Ibrahim Abdullahi</p>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Total Beds', value: '2,140', icon: ICONS.bed, hint: '1,050 available', color: 'text-ssm-400', bg: 'bg-ssm-500/10' },
            { label: 'Occupancy', value: '38%', icon: ICONS.chart, hint: '822 of 2,140', color: 'text-blue-400', bg: 'bg-blue-500/10' },
            { label: 'Students', value: '1,812', icon: ICONS.users, hint: '0 pending', color: 'text-purple-400', bg: 'bg-purple-500/10' },
            { label: 'Revenue', value: '₦123.6M', icon: ICONS.dollar, hint: '825 payments', color: 'text-emerald-400', bg: 'bg-emerald-500/10' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-700 bg-slate-800/50 p-3">
              <div className="flex items-center gap-2">
                <div className={`grid h-8 w-8 place-items-center rounded-lg ${stat.bg}`}>
                  <PhosphorIcon path={stat.icon} className={`h-4 w-4 ${stat.color}`} />
                </div>
                <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">{stat.label}</span>
              </div>
              <p className={`mt-2 text-lg font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-slate-500">{stat.hint}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800/30 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-white">Beds allocated over time</p>
              <p className="text-xs text-slate-500">Monthly allocation trend</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-ssm-500" />
              <span className="text-slate-400">Active allocations</span>
            </div>
          </div>
          <div className="mt-5 flex h-32 items-end gap-1.5 sm:gap-2">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t bg-gradient-to-t from-ssm-600 to-ssm-400 chart-bar"
                  style={{ ['--bar-height' as string]: `${h}%`, height: `${h}%` }}
                />
                <span className="text-[9px] font-medium text-slate-500 hidden sm:block">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom row: occupancy + recent activity */}
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {/* Block occupancy */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
            <p className="text-sm font-semibold text-white">Block Occupancy</p>
            <div className="mt-3 space-y-2.5">
              {[
                { name: 'Block A', occ: 85, color: 'bg-emerald-500' },
                { name: 'Block B', occ: 62, color: 'bg-ssm-500' },
                { name: 'Block C', occ: 45, color: 'bg-blue-500' },
                { name: 'Block D', occ: 78, color: 'bg-purple-500' },
              ].map((b) => (
                <div key={b.name} className="flex items-center gap-2">
                  <span className="w-14 text-xs text-slate-400">{b.name}</span>
                  <div className="flex-1 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div className={`h-full ${b.color} rounded-full`} style={{ width: `${b.occ}%` }} />
                  </div>
                  <span className="text-xs text-slate-500 w-8 text-right">{b.occ}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="rounded-xl border border-slate-700 bg-slate-800/30 p-4">
            <p className="text-sm font-semibold text-white">Recent Activity</p>
            <div className="mt-3 space-y-3">
              {[
                { text: 'Ibrahim Abdullahi checked in', time: '2m ago', icon: ICONS.check, color: 'text-emerald-400' },
                { text: 'New payment: ₦150,000', time: '5m ago', icon: ICONS.dollar, color: 'text-ssm-400' },
                { text: 'Bed A-12 vacated', time: '12m ago', icon: ICONS.bed, color: 'text-amber-400' },
              ].map((act, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="grid h-7 w-7 place-items-center rounded-lg bg-slate-700/50">
                    <PhosphorIcon path={act.icon} className={`h-3.5 w-3.5 ${act.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-slate-300 truncate">{act.text}</p>
                    <p className="text-[10px] text-slate-500">{act.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** Student dashboard mockup — dark theme */
export function StudentDashboardDark() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 shadow-2xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-slate-700 bg-slate-800 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 flex-1">
          <div className="mx-auto max-w-md rounded-md bg-slate-700 px-3 py-1 text-xs text-slate-400">
            hostelease.vercel.app/student
          </div>
        </div>
      </div>

      {/* Student dashboard body */}
      <div className="p-6">
        {/* Student header */}
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-ssm-500 to-ssm-700 text-white font-bold">
            IA
          </div>
          <div>
            <h3 className="text-base font-bold text-white">Ibrahim Abdullahi</h3>
            <p className="text-xs text-slate-400">AUS/SCC/SFE/24/1001 · Aqua University</p>
          </div>
        </div>

        {/* Journey tracker */}
        <div className="mt-5 flex items-center justify-between gap-1">
          {[
            { label: 'Profile', done: true },
            { label: 'Apply', done: true },
            { label: 'Pick Bed', done: true },
            { label: 'Pay', done: true },
            { label: 'Check-in', done: false },
          ].map((step, i) => (
            <div key={step.label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${
                  step.done ? 'bg-ssm-600 text-white' : 'bg-slate-700 text-slate-400 ring-2 ring-ssm-500/30'
                }`}>
                  {step.done ? '✓' : i + 1}
                </div>
                <span className={`text-[9px] font-medium ${step.done ? 'text-ssm-400' : 'text-slate-500'}`}>{step.label}</span>
              </div>
              {i < 4 && <div className={`flex-1 h-0.5 mx-1 ${step.done ? 'bg-ssm-600' : 'bg-slate-700'}`} />}
            </div>
          ))}
        </div>

        {/* Allocation card */}
        <div className="mt-5 rounded-xl border border-slate-700 bg-slate-800/50 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-slate-400">Your Allocation</p>
              <p className="mt-1 text-sm font-bold text-white">Block A · Room 12 · Bed 3</p>
              <p className="text-xs text-slate-400">Bunk 2 - Top · Male Hostel</p>
            </div>
            <div className="grid h-16 w-16 place-items-center rounded-xl bg-white p-1.5">
              {/* QR code mock */}
              <div className="grid h-full w-full grid-cols-4 gap-0.5 rounded">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className={`${[0,1,2,5,6,7,8,10,11,12,13,15].includes(i) ? 'bg-slate-900' : 'bg-white'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
