"use client";

import { useEffect, useState } from "react";
import { ArrowIcon, Wordmark } from "./ui";

const links = [
  { href: "#top", label: "Home" },
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ueber-mich", label: "Über mich" },
  { href: "#preise", label: "Preise" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 lg:px-8">
      <div
        className={`mx-auto flex max-w-[1380px] items-center justify-between rounded-2xl px-4 py-2 transition-all duration-500 lg:px-6 ${
          scrolled ? "glass-menu" : "border border-transparent"
        }`}
      >
        <a href="#top" aria-label="Fußpflege Hand & Fuß – zum Seitenanfang" className="shrink-0">
          <Wordmark size="sm" />
        </a>

        <nav aria-label="Hauptnavigation" className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="label-xs group relative py-1 text-ink-soft transition-colors duration-300 hover:text-ink">
              {l.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <a
          href="#kontakt"
          className="group hidden items-center gap-5 rounded-xl border border-white/70 bg-white/50 py-2.5 pl-6 pr-2.5 text-ink backdrop-blur-md transition-colors duration-300 hover:bg-white/70 lg:inline-flex"
        >
          <span className="label-xs pt-px">Termin buchen</span>
          <span className="flex size-8 items-center justify-center rounded-full border border-ink/15 bg-white/70 transition-transform duration-500 group-hover:translate-x-1">
            <ArrowIcon />
          </span>
        </a>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Menü öffnen"
          aria-expanded={open}
          className="flex size-11 items-center justify-center rounded-full border border-white/70 bg-white/50 backdrop-blur-md lg:hidden"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
            <path d="M4 8h16M4 16h16" />
          </svg>
        </button>
      </div>

      {/* Mobiles Menü */}
      <div
        className={`fixed inset-0 z-50 p-4 transition-opacity duration-500 lg:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!open}
      >
        <div className="glass-menu flex h-full flex-col rounded-3xl px-7 py-6">
          <div className="flex items-center justify-between">
            <Wordmark size="sm" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Menü schließen"
              className="flex size-11 items-center justify-center rounded-full border border-ink/10 bg-white/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Mobile Navigation" className="mt-12 flex flex-col">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="display border-b border-ink/10 py-4 text-2xl text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#kontakt"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
            className="mt-auto inline-flex items-center justify-between rounded-xl bg-gold-deep px-6 py-4 text-cream-50"
          >
            <span className="label-xs">Termin buchen</span>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
