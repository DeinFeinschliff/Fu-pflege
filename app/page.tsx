import Image from "next/image";
import Header from "@/components/Header";
import SideRail from "@/components/SideRail";
import Reveal from "@/components/Reveal";
import Leistungen from "@/components/Leistungen";
import Accordion from "@/components/Accordion";
import Legal from "@/components/Legal";
import { ArrowIcon, Glow, GoldRule, PhoneIcon, PillButton, PinIcon, WhatsAppIcon, Wordmark } from "@/components/ui";
import { ablauf, kontakt, preise, problemfuesse } from "@/lib/content";
import portrait from "@/public/images/linda-portrait-studio.jpg";
import fuesse from "@/public/images/fuesse.jpg";
import header from "@/public/images/header.jpg";

const imgShadow = "shadow-[0_30px_70px_-30px_rgba(88,71,51,0.5)]";
const imgTint = "pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#8b6f4e]/15 via-transparent to-white/20";

export default function Home() {
  return (
    <>
      <Header />
      <SideRail />
      <Reveal />

      <main id="top">
        {/* ───────────── Hero ───────────── */}
        <section className="relative overflow-hidden lg:flex lg:min-h-[100svh] lg:items-center">
          {/* Headerbild – blendet links weich in den beigen Hintergrund über */}
          <div className="hero-fade relative h-[62svh] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[70%]">
            <Image
              src={header}
              alt="Linda Varitimidis in ihrem Fußpflegestudio in Nürtingen"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 70vw"
              className="object-cover object-[42%_20%] lg:object-[42%_center]"
              placeholder="blur"
            />
          </div>

          <div className="relative z-10 mx-auto -mt-16 w-full max-w-[1280px] px-6 pb-20 lg:mt-0 lg:px-16 lg:pb-16 lg:pt-32">
            <div className="rise max-w-xl">
              <Wordmark />
              <div className="mt-8 h-px w-24 bg-gold/70" />
              <p className="mt-7 max-w-md text-lg/relaxed text-ink-soft">
                Gepflegte, gesunde Füße – mit Zeit, Ruhe und viel Erfahrung. Seit 2013 sorge ich in Nürtingen
                dafür, dass Sie sich bei jedem Schritt wohlfühlen.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <PillButton href="#leistungen">Mehr erfahren</PillButton>
                <a
                  href="#kontakt"
                  className="group inline-flex items-center gap-5 rounded-xl bg-gold-deep py-2.5 pl-6 pr-2.5 text-cream-50 shadow-[0_18px_40px_-18px_rgba(122,92,44,0.8)] transition-colors duration-300 hover:bg-[#674c24]"
                >
                  <span className="label-xs pt-px">Termin buchen</span>
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/15 transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Über mich ───────────── */}
        <section id="ueber-mich" className="relative px-6 py-20 lg:px-10 lg:py-28">
          <Glow className="-left-40 top-10" />
          <div className="reveal relative mx-auto max-w-[1180px]">
            <div className={`relative mb-6 aspect-4/5 w-full overflow-hidden rounded-2xl ${imgShadow} lg:absolute lg:left-8 lg:top-1/2 lg:z-10 lg:mb-0 lg:h-[30rem] lg:w-[21rem] lg:-translate-y-1/2`}>
              <Image src={portrait} alt="Linda Varitimidis, Inhaberin von Fußpflege Hand & Fuß" fill sizes="(max-width: 1024px) 100vw, 400px" quality={90} className="object-cover object-[center_22%]" placeholder="blur" />
              <div className={imgTint} />
            </div>
            <div className="glass rounded-3xl px-7 py-10 sm:px-10 lg:min-h-[26rem] lg:py-14 lg:pl-[25rem] lg:pr-14">
              <h2 className="display text-[2rem] text-ink sm:text-[2.6rem]">
                <span className="block">Ihre Füße.</span>
                <span className="block">Meine Leidenschaft.</span>
              </h2>
              <GoldRule />
              <p className="mt-6 max-w-xl text-base/relaxed text-ink-soft">
                Ich bin Linda – ausgebildete Kosmetikerin und Fußpflegerin mit über 15 Jahren Erfahrung. Seit 2013 führe
                ich mein eigenes Studio in Nürtingen. Bei mir gibt es keine Fließbandtermine: Ich nehme mir für jede
                Fußbehandlung bis zu einer ganzen Stunde Zeit – damit Sie nicht nur mit gepflegten, sondern mit spürbar
                leichteren Füßen nach Hause gehen.
              </p>
              <PillButton href="#kontakt" className="mt-9">
                Termin vereinbaren
              </PillButton>
              <div className="glass-tile mt-10 grid grid-cols-3 rounded-2xl">
                {[
                  ["15+", "Jahre Erfahrung"],
                  ["60", "Minuten für Sie"],
                  ["100%", "Individuell"],
                ].map(([zahl, label], i) => (
                  <div key={label} className={`px-1.5 py-6 text-center sm:px-3 ${i > 0 ? "border-l border-white/40" : ""}`}>
                    <span className="display block text-2xl text-gold-deep sm:text-3xl">{zahl}</span>
                    <span className="mt-2 block text-[0.6rem] uppercase tracking-[0.05em] text-ink-faint sm:text-[0.7rem] sm:tracking-[0.18em]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Leistungen ───────────── */}
        <section id="leistungen" className="relative px-6 py-12 lg:px-10 lg:py-16">
          <Glow className="-right-48 top-1/3" />
          <div className="reveal glass mx-auto max-w-[1180px] rounded-3xl px-5 py-12 sm:px-10 lg:px-12 lg:py-14">
            <p className="eyebrow text-center text-gold-deep">Leistungen in Nürtingen</p>
            <h2 className="display mt-4 text-center text-[2rem] text-ink sm:text-[2.6rem]">Pflege, die man spürt</h2>
            <GoldRule center />
            <Leistungen />
            <div className="mt-10 flex justify-center">
              <PillButton href="#preise">Zu den Preisen</PillButton>
            </div>
          </div>
        </section>

        {/* ───────────── Problemfüße ───────────── */}
        <section className="relative px-6 py-12 lg:px-10 lg:py-16">
          <div className="reveal glass mx-auto grid max-w-[1180px] overflow-hidden rounded-3xl lg:grid-cols-2">
            <div className="px-6 py-10 sm:px-10 lg:px-12 lg:py-10">
              <h2 className="display text-[2rem] text-ink sm:text-[2.2rem]">Wenn die Füße Hilfe brauchen</h2>
              <GoldRule />
              <p className="mt-5 max-w-md text-[0.92rem]/relaxed text-ink-soft">
                Schmerzende Füße gehören nicht zum Alltag. Mit Erfahrung, Feingefühl und Geduld kümmere ich mich auch um
                Ihre Problemzonen.
              </p>
              <div className="mt-6">
                <Accordion items={problemfuesse} />
              </div>
              <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-center">
                <PillButton href="#kontakt" className="shrink-0 self-start">
                  Beratung anfragen
                </PillButton>
                <p className="text-[0.78rem]/relaxed text-ink-faint">
                  Diabetes, Durchblutungsstörungen oder Blutverdünner? Bitte bei der Terminvereinbarung erwähnen.
                </p>
              </div>
            </div>
            <div className="relative aspect-[3/4] sm:aspect-[4/3] lg:aspect-auto lg:min-h-full">
              <Image
                src={fuesse}
                alt="Gepflegte Füße mit hellem Nagellack auf Naturstein"
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 860px"
                className="object-cover object-[center_70%] lg:object-[center_65%]"
                placeholder="blur"
              />
              <div className={imgTint} />
            </div>
          </div>
        </section>

        {/* ───────────── Ablauf (ohne Karte, direkt auf dem Hintergrund) ───────────── */}
        <section className="relative px-6 py-20 lg:px-10 lg:py-28">
          <div className="reveal mx-auto max-w-[1180px]">
            <p className="eyebrow text-center text-gold-deep">So läuft Ihre Behandlung ab</p>
            <h2 className="display mt-5 text-center text-[2rem] text-ink sm:text-[2.6rem]">Entspannt. Gründlich. Persönlich.</h2>
            <GoldRule center />
            <ol className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {ablauf.map((s, i) => (
                <li key={s.titel} className="reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                  <span className="display block text-[4.5rem] font-light leading-none text-gold-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mt-6 flex items-center">
                    <span className="size-2 shrink-0 rounded-full bg-gold-deep shadow-[0_0_0_5px_rgba(122,92,44,0.15)]" />
                    <span className={`ml-3 h-px flex-1 ${i < ablauf.length - 1 ? "bg-gradient-to-r from-gold-deep/50 to-gold/10" : "bg-gradient-to-r from-gold-deep/50 to-transparent"}`} />
                  </div>
                  <h3 className="label-xs mt-6 font-medium text-ink">{s.titel}</h3>
                  <p className="mt-3 max-w-[16rem] text-[0.95rem]/relaxed text-ink">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────────── Preise ───────────── */}
        <section id="preise" className="relative px-6 py-10 lg:px-10 lg:py-12">
          <Glow className="-left-48 top-1/4" />
          <div className="reveal glass mx-auto max-w-[1180px] rounded-3xl px-5 py-10 sm:px-10 lg:px-12 lg:py-12">
            <p className="eyebrow text-center text-gold-deep">Preise</p>
            <h2 className="display mt-4 text-center text-[2rem] text-ink sm:text-[2.4rem]">Ehrliche Preise. Echte Pflege.</h2>
            <GoldRule center />
            <div className="mt-8 grid gap-4 lg:grid-cols-[1.25fr_1fr]">
              {preise.map((g) => (
                <div key={g.gruppe} className="glass-tile flex flex-col rounded-2xl px-6 py-5 sm:px-8 sm:py-6">
                  <ul>
                    {g.posten.map(([name, preis]) => (
                      <li key={name} className="flex items-baseline gap-3 border-b border-ink/10 py-3.5 last:border-0">
                        <span className="text-[0.95rem] text-ink">{name}</span>
                        <span className="flex-1 border-b border-dotted border-gold/40" />
                        <span className="display whitespace-nowrap text-xl text-gold-deep">{preis} €</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-auto pt-3 text-[0.78rem] text-ink-faint">Alle Preise in Euro inkl. gesetzl. MwSt.</p>
                </div>
              ))}
              <div className="glass-tile flex flex-col justify-between gap-5 rounded-2xl px-6 py-6 sm:px-8">
                <div>
                  <p className="eyebrow text-gold-deep">Gutscheine</p>
                  <p className="display mt-2 text-xl text-ink sm:text-2xl">Verschenken Sie Wohlbefinden.</p>
                  <p className="mt-2 text-[0.9rem]/relaxed text-ink-soft">
                    Ob Geburtstag, Muttertag oder einfach so – ein Gutschein für gepflegte Füße kommt immer gut an.
                  </p>
                </div>
                <PillButton href={kontakt.whatsapp} external className="self-start">
                  Gutschein anfragen
                </PillButton>
              </div>
            </div>
          </div>
        </section>

        {/* ───────────── Kontakt / CTA ───────────── */}
        <section id="kontakt" className="relative px-6 py-12 lg:px-10 lg:py-16">
          <div className="reveal glass relative mx-auto grid max-w-[1180px] gap-12 overflow-hidden rounded-3xl px-5 py-12 sm:px-10 lg:grid-cols-2 lg:items-center lg:px-14 lg:py-16">
            <div className="pointer-events-none absolute -left-32 -top-40 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(255,250,240,0.7),transparent_65%)]" />
            <div className="pointer-events-none absolute -bottom-48 right-0 size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(216,193,154,0.35),transparent_65%)]" />
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.svg" alt="Hand & Fuß" width={624} height={98} className="h-auto w-[190px] -translate-x-[2.6%]" />
              <h2 className="display mt-8 max-w-sm text-[2rem] text-ink sm:text-[2.6rem]">Bereit für leichte Füße?</h2>
              <GoldRule />
              <p className="mt-6 max-w-sm text-base/relaxed text-ink-soft">
                Gönnen Sie Ihren Füßen die Aufmerksamkeit, die sie verdienen. Vereinbaren Sie jetzt Ihren Wunschtermin –
                telefonisch oder ganz bequem per WhatsApp.
              </p>
              <p className="mt-4 max-w-sm text-[0.86rem]/relaxed text-ink-faint">
                Kurzfristige Termine bitte telefonisch vereinbaren.
              </p>
            </div>
            <div className="relative grid gap-3">
              {[
                { href: kontakt.telefon.href, label: "Studio", wert: kontakt.telefon.anzeige, Icon: PhoneIcon },
                { href: kontakt.mobil.href, label: "Mobil", wert: kontakt.mobil.anzeige, Icon: PhoneIcon },
                { href: kontakt.whatsapp, label: "WhatsApp", wert: "Nachricht schreiben", Icon: WhatsAppIcon, ext: true },
                { href: kontakt.maps, label: "Adresse", wert: `${kontakt.strasse}, ${kontakt.ort}`, Icon: PinIcon, ext: true },
              ].map(({ href, label, wert, Icon, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="glass-tile group flex items-center gap-4 rounded-2xl px-4 py-4 hover:-translate-y-0.5 hover:border-gold/50 sm:gap-5 sm:px-6 sm:py-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/35 bg-white/60 text-gold-deep sm:size-11">
                    <Icon size={17} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="label-xs block text-ink-faint">{label}</span>
                    <span className="display mt-1 block text-[1.05rem] text-ink sm:text-xl">{wert}</span>
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-white/70 text-ink transition-transform duration-500 group-hover:translate-x-1">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ───────────── Footer ───────────── */}
      <footer className="px-6 pb-8 pt-12 lg:px-10 lg:pt-16">
        <div className="glass mx-auto max-w-[1180px] rounded-3xl px-6 py-10 sm:px-10 lg:px-14">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.2fr]">
            <div>
              <Wordmark size="sm" />
            </div>
            <div>
              <h3 className="label-xs text-ink">Adresse</h3>
              <ul className="mt-4 space-y-1.5 text-[0.86rem] text-ink-soft">
                <li>{kontakt.strasse}</li>
                <li>{kontakt.ort}</li>
                <li>
                  <a href={kontakt.maps} target="_blank" rel="noopener noreferrer" className="underline decoration-gold/60 underline-offset-4 hover:text-ink">
                    Route planen
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="label-xs text-ink">Kontakt</h3>
              <ul className="mt-4 space-y-1.5 text-[0.86rem] text-ink-soft">
                <li><a href={kontakt.telefon.href} className="transition-colors hover:text-gold-deep">{kontakt.telefon.anzeige}</a></li>
                <li><a href={kontakt.mobil.href} className="transition-colors hover:text-gold-deep">{kontakt.mobil.anzeige}</a></li>
                <li><a href={kontakt.whatsapp} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-gold-deep">WhatsApp</a></li>
              </ul>
            </div>
            <div>
              <h3 className="label-xs text-ink">Öffnungszeiten</h3>
              <ul className="mt-4 space-y-1.5 text-[0.86rem]/relaxed text-ink-soft">
                {kontakt.oeffnungszeiten.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-start gap-4 border-t border-white/40 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[0.8rem] text-ink-soft">© {new Date().getFullYear()} {kontakt.name}. Alle Rechte vorbehalten.</p>
            <nav aria-label="Rechtliches" className="flex gap-6">
              <Legal />
            </nav>
            <p className="label-xs text-[0.6rem] text-ink-faint">Website by Thelabeldept.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
