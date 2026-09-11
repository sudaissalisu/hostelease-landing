import Image from 'next/image';

export function Logo({ className = '', showWordmark = true }: { className?: string; showWordmark?: boolean }) {
  return (
    <a href="#" className={`flex items-center gap-2.5 ${className}`}>
      {/* SSM logo (uploaded PNG) */}
      <Image
        src="/ssm-logo.png"
        alt="SSM Limited"
        width={40}
        height={20}
        className="h-8 w-auto sm:h-9"
        priority
      />
      {showWordmark && (
        <span className="text-xl font-bold tracking-tight text-slate-900">
          <span className="text-slate-300 font-normal">|</span>{' '}
          HostelEase
        </span>
      )}
    </a>
  );
}
