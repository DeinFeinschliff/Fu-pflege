import { kontakt } from "@/lib/content";
import { CalendarIcon, PhoneIcon, WhatsAppIcon } from "./ui";

const items = [
  { href: "#kontakt", label: "Termin", Icon: CalendarIcon },
  { href: kontakt.telefon.href, label: "Anrufen", Icon: PhoneIcon },
  { href: kontakt.whatsapp, label: "WhatsApp", Icon: WhatsAppIcon, external: true },
];

/** Schwebende Leiste am rechten Rand (nur Desktop) */
export default function SideRail() {
  return (
    <aside className="glass-soft fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1 rounded-full px-1 py-3 lg:flex">
      {items.map(({ href, label, Icon, external }) => (
        <a
          key={label}
          href={href}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="group flex flex-col items-center gap-3 rounded-full px-2.5 py-4 text-ink transition-colors duration-300 hover:bg-white/55 hover:text-gold-deep"
        >
          <span className="label-xs tracking-[0.2em] [writing-mode:vertical-rl]">{label}</span>
          <Icon size={15} className="transition-transform duration-500 group-hover:-translate-y-0.5" />
        </a>
      ))}
    </aside>
  );
}
