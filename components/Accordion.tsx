"use client";

import { useState } from "react";

/** Kleine Glas-Akkordeons – wie „Peelings für jedes Hautbedürfnis“ auf Feinschliff */
export default function Accordion({ items }: { items: { titel: string; text: string }[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="space-y-2">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.titel} className="glass-tile rounded-xl">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-5 py-3 text-left"
            >
              <span className="label-xs text-ink">{item.titel}</span>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white/60 text-ink-soft">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="M12 5v14" className={`origin-center transition-transform duration-300 ${isOpen ? "scale-y-0" : ""}`} />
                </svg>
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="px-5 pb-3.5 text-[0.86rem]/relaxed text-ink-soft">{item.text}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
