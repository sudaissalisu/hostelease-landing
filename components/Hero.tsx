'use client';

import { useState } from 'react';

export function Hero() {
  const [email, setEmail] = useState('');

  return (
    <section className="relative overflow-hidden">
      {/* Gradient + grid background */}
      <div className="hero-gradient absolute inset-0" />
      <div className="grid-pattern absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-12 sm:px-6 md:pt-20 lg:px-8 lg:pb-24">
        {/* Announcement pill */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <a
            href="#features"
            className="group inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700 transition-colors hover:bg-brand-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            New: Real-time QR check-in is live
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-0.5">
              <path d="M5 12h14M13 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>

        {/* Headline */}
        <h1 className="mx-auto max-w-4xl text-center text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl animate-fade-in-up">
          Allocate hostel beds.
          <br />
          <span className="gradient-text">Smarter, faster, fairer.</span>
        </h1>

        {/* Subhead */}
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-slate-600 sm:text-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          Powerful, self-serve bed allocation, bursary code payments, and real-time
          occupancy — built for students, wardens, and bursars. Trusted by universities
          managing thousands of beds every semester.
        </p>

        {/* Email capture */}
        <form
          onSubmit={(e) => { e.preventDefault(); window.location.href = '#'; }}
          className="mx-auto mt-10 flex max-w-md flex-col gap-3 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
          />
          <button
            type="submit"
            className="rounded-lg bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition-all hover:bg-brand-700 hover:shadow-brand-600/30"
          >
            Get started
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-slate-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          We care about your data in our{' '}
          <a href="#" className="font-medium text-brand-600 hover:underline">privacy policy</a>.
        </p>

        {/* Hero dashboard mockup */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <DashboardMockup />
        </div>
      </div>
    </section>
  );
}

function DashboardMockup() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  // Simulated "Active users over time" — represents beds allocated per month
  const bars = [40, 55, 45, 70, 85, 95, 78, 88, 92, 75, 60, 50];

  return (
    <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>
        <div className="ml-4 flex-1">
          <div className="mx-auto max-w-md rounded-md bg-white px-3 py-1 text-xs text-slate-400 border border-slate-200">
            🔒 hostelease.vercel.app/dashboard
          </div>
        </div>
      </div>

      {/* Dashboard content */}
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">Active session</p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">2026/2027 Academic Year</h3>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-brand-50 px-3 py-1.5">
            <span className="flex h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-semibold text-brand-700">Live</span>
          </div>
        </div>

        {/* Stat cards */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: 'Total Beds', value: '2,140', accent: 'text-brand-600' },
            { label: 'Occupancy', value: '38%', accent: 'text-blue-600' },
            { label: 'Students', value: '1,812', accent: 'text-purple-600' },
            { label: 'Revenue', value: '₦123.6M', accent: 'text-brand-600' },
          ].map((stat) => (
            <div key={stat.label} className="rounded-xl border border-slate-200 bg-slate-50/50 p-3">
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-500">{stat.label}</p>
              <p className={`mt-1 text-lg font-bold ${stat.accent}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-6 rounded-xl border border-slate-200 bg-white p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-slate-900">Beds allocated over time</p>
              <p className="text-xs text-slate-500">Monthly allocation trend</p>
            </div>
            <div className="flex items-center gap-1.5 text-xs">
              <span className="h-2 w-2 rounded-full bg-brand-500" />
              <span className="text-slate-600">Active allocations</span>
            </div>
          </div>
          <div className="mt-6 flex h-40 items-end gap-1.5 sm:gap-2">
            {bars.map((h, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div
                  className="w-full rounded-t-md bg-gradient-to-t from-brand-500 to-brand-400 chart-bar"
                  style={{ ['--bar-height' as string]: `${h}%`, height: `${h}%` }}
                />
                <span className="text-[9px] font-medium text-slate-400 hidden sm:block">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
