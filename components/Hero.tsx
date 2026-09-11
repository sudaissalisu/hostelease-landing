'use client';

import { useState } from 'react';
import Image from 'next/image';

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
            className="group inline-flex items-center gap-2 rounded-full border border-ssm-200 bg-ssm-50 px-4 py-1.5 text-sm font-medium text-ssm-700 transition-colors hover:bg-ssm-100"
          >
            <span className="flex h-2 w-2 rounded-full bg-ssm-600 animate-pulse" />
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
          <span className="ssm-gradient-text">Smarter, faster, fairer.</span>
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
            className="flex-1 rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-ssm-500 focus:outline-none focus:ring-2 focus:ring-ssm-500/20"
          />
          <button
            type="submit"
            className="rounded-lg bg-ssm-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-ssm-600/25 transition-all hover:bg-ssm-700 hover:shadow-ssm-600/30"
          >
            Get started
          </button>
        </form>
        <p className="mt-3 text-center text-xs text-slate-500 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          We care about your data in our{' '}
          <a href="#" className="font-medium text-ssm-600 hover:underline">privacy policy</a>.
        </p>

        {/* Real dashboard screenshot */}
        <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="screenshot-frame mx-auto max-w-5xl">
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
            {/* Real screenshot */}
            <Image
              src="/dashboard-admin.png"
              alt="HostelEase admin dashboard — live bed allocation stats, occupancy, and revenue"
              width={1200}
              height={750}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
