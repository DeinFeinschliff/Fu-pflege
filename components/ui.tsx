import type { ReactNode } from "react";

type IconProps = { size?: number; className?: string };

export function ArrowIcon({ size = 13, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function PhoneIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

export function WhatsAppIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}

export function CalendarIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

export function PinIcon({ size = 18, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

/** Glas-Button mit rundem Pfeil – wie auf feinschliff-nuertingen.de */
export function PillButton({
  href,
  children,
  className = "",
  external = false,
  icon,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  icon?: ReactNode;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group inline-flex items-center gap-5 rounded-xl border border-white/70 bg-white/50 py-2.5 pl-6 pr-2.5 text-ink backdrop-blur-md transition-colors duration-300 hover:bg-white/70 ${className}`}
    >
      <span className="label-xs pt-px">{children}</span>
      <span className="flex size-8 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-ink transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1">
        {icon ?? <ArrowIcon />}
      </span>
    </a>
  );
}

/** Logo „Hand & Fuß“ (public/images/logo.svg) */
export function Wordmark({ size = "lg" }: { size?: "sm" | "lg" }) {
  if (size === "sm") {
    return (
      <span className="flex flex-col gap-1.5 leading-none">
        <span className="label-xs text-[0.6rem] tracking-[0.42em] text-ink-faint">Fußpflege</span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/logo.svg" alt="Hand & Fuß" width={624} height={98} className="h-auto w-[150px] -translate-x-[2.6%]" />
      </span>
    );
  }
  return (
    <span className="flex flex-col">
      <span className="eyebrow text-ink-soft">Fußpflege in Nürtingen</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo.svg"
        alt="Hand & Fuß"
        width={624}
        height={98}
        fetchPriority="high"
        className="mt-6 h-auto w-full -translate-x-[2.6%] max-w-[22rem] sm:max-w-[30rem] lg:max-w-[38rem]"
      />
    </span>
  );
}

/** Feine goldene Linie unter Überschriften */
export function GoldRule({ center = false }: { center?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`mt-6 block h-px w-16 bg-gradient-to-r from-gold via-gold-soft to-gold/0 ${center ? "mx-auto bg-gradient-to-r from-gold/0 via-gold to-gold/0 w-24" : ""}`}
    />
  );
}

/** Weicher goldener Lichtschein hinter den Karten */
export function Glow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute -z-10 size-[32rem] rounded-full bg-[radial-gradient(circle,rgba(216,193,154,0.55),transparent_65%)] blur-2xl ${className}`}
    />
  );
}
