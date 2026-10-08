import { leistungen } from "@/lib/content";

const icons = {
  bad: (
    <>
      <path d="M7 24h34" />
      <path d="M9.5 24c.8 8.5 6.8 14 14.5 14s13.7-5.5 14.5-14" />
      <path d="M17 42h14" />
      <path d="M24 38v4" />
      <path d="M15 29c1.6 1.2 3.2 1.2 4.8 0s3.2-1.2 4.8 0 3.2 1.2 4.8 0 3.2-1.2 4.8 0" opacity=".7" />
      <path d="M18 19c-1.2-1.4.8-2.6 0-4.2s.8-2.6 0-4" />
      <path d="M24 19c-1.2-1.4.8-2.6 0-4.2s.8-2.6 0-4" />
      <path d="M30 19c-1.2-1.4.8-2.6 0-4.2s.8-2.6 0-4" />
    </>
  ),
  fuss: (
    <>
      <path d="M21.5 43c-4.6 0-6.8-4.2-6.5-9.6.3-5.6 1.6-10.4 4.6-13 3-2.5 7.6-2.2 8.8 1.4 1.2 3.6-.6 7-1.2 10.6-.6 3.4.6 6.4-.6 8.6-.9 1.4-2.6 2-5.1 2Z" />
      <circle cx="19.2" cy="12.4" r="2.6" />
      <circle cx="24.6" cy="10.6" r="2" />
      <circle cx="28.8" cy="11.8" r="1.7" />
      <circle cx="32" cy="14.4" r="1.45" />
      <circle cx="34.3" cy="17.6" r="1.2" />
    </>
  ),
  lack: (
    <>
      <rect x="19.5" y="4.5" width="9" height="12" rx="1.5" />
      <path d="M18 16.5h12v3H18z" />
      <path d="M15 19.5h18a4 4 0 0 1 4 4V39a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 11 39V23.5a4 4 0 0 1 4-4Z" />
      <path d="M16 25v12" opacity=".6" />
    </>
  ),
};

/** Leistungen als drei Karten mit feinen Gold-Icons */
export default function Leistungen() {
  return (
    <div className="mt-10 grid gap-4 lg:grid-cols-3">
      {leistungen.map((l, i) => (
        <article
          key={l.titel}
          className="glass-tile reveal group flex flex-col rounded-2xl px-6 py-6 hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(88,71,51,0.45)] sm:px-7"
          style={{ transitionDelay: `${i * 120}ms` }}
        >
          <div className="flex items-start justify-between">
            <span className="flex size-16 items-center justify-center rounded-full border border-gold/35 bg-white/55 text-gold-deep transition-colors duration-500 group-hover:bg-white/80">
              <svg width="34" height="34" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                {icons[l.icon]}
              </svg>
            </span>
            <span className="display text-lg text-gold-deep/70">{String(i + 1).padStart(2, "0")}</span>
          </div>
          <h3 className="display mt-6 text-[1.5rem] text-ink">{l.titel}</h3>
          <span aria-hidden="true" className="mt-4 block h-px w-10 bg-gradient-to-r from-gold to-gold/0" />
          <p className="mt-4 text-[0.95rem]/relaxed text-ink-soft">{l.text}</p>
        </article>
      ))}
    </div>
  );
}
