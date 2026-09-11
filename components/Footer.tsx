'use client';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer id="about" className="border-t border-slate-200 bg-slate-900 text-slate-300">
      {/* Trusted by */}
      <div className="border-b border-slate-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium uppercase tracking-wider text-slate-500">
            Trusted by institutions across Nigeria
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {['Al-Istiqama University', 'AUSU', 'SSM Limited', 'Sumaila Campus', 'Kano State'].map((name) => (
              <span key={name} className="text-sm font-semibold text-slate-400">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer links */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {/* Brand — SSM logo + | HostelEase */}
          <div className="col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              The modern hostel management platform for universities. Built by
              SSM Limited — operated under license by leading institutions.
            </p>
            <p className="mt-4 text-xs text-slate-500">
              © {new Date().getFullYear()} SSM Limited. All rights reserved.
              HostelEase is proprietary software — licensed, not sold.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-semibold text-white">Product</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {['Overview', 'Features', 'Solutions', 'Tutorials', 'Pricing', 'Releases'].map((l) => (
                <li key={l}><a href="#" className="text-slate-400 hover:text-ssm-400">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white">Company</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {['About us', 'Careers', 'Press', 'News', 'Contact'].map((l) => (
                <li key={l}><a href="#" className="text-slate-400 hover:text-ssm-400">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white">Resources</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {['Blog', 'Newsletter', 'Events', 'Help centre', 'Support'].map((l) => (
                <li key={l}><a href="#" className="text-slate-400 hover:text-ssm-400">{l}</a></li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {['Terms', 'Privacy', 'Cookies', 'Licenses', 'Settings'].map((l) => (
                <li key={l}><a href="#" className="text-slate-400 hover:text-ssm-400">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            Developed &amp; owned by SSM Limited · Operated under license
          </p>
          <div className="flex items-center gap-4">
            {['X', 'LinkedIn', 'Facebook', 'GitHub'].map((social) => (
              <a key={social} href="#" className="text-xs text-slate-500 hover:text-ssm-400">
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
