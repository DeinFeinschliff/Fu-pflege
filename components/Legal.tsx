"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { kontakt } from "@/lib/content";

type Which = "impressum" | "datenschutz" | null;

/** Impressum & Datenschutz als Overlay – damit alles auf einer Seite bleibt. */
export default function Legal() {
  const [which, setWhich] = useState<Which>(null);
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (which && !d.open) d.showModal();
    if (!which && d.open) d.close();
  }, [which]);

  // Direktlinks wie /#impressum oder /#datenschutz öffnen das Overlay
  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1);
      if (h === "impressum" || h === "datenschutz") setWhich(h);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, []);

  const close = () => {
    setWhich(null);
    if (window.location.hash === "#impressum" || window.location.hash === "#datenschutz") {
      history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <button type="button" onClick={() => setWhich("impressum")} className="text-[0.8rem] text-ink-soft transition-colors hover:text-ink">
        Impressum
      </button>
      <button type="button" onClick={() => setWhich("datenschutz")} className="text-[0.8rem] text-ink-soft transition-colors hover:text-ink">
        Datenschutz
      </button>

      <dialog
        ref={ref}
        onClose={close}
        onClick={(e) => e.target === e.currentTarget && close()}
        aria-labelledby="legal-title"
        className="glass-menu m-auto max-h-[88vh] w-[calc(100%-2rem)] max-w-3xl overflow-hidden rounded-3xl p-0 text-ink"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 sm:px-10">
          <h2 id="legal-title" className="display text-2xl">
            {which === "impressum" ? "Impressum" : "Datenschutz"}
          </h2>
          <button
            type="button"
            onClick={close}
            aria-label="Schließen"
            className="flex size-10 items-center justify-center rounded-full border border-ink/10 bg-white/60"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
        <div className="max-h-[calc(88vh-5.5rem)] overflow-y-auto px-6 py-8 text-[0.92rem]/relaxed text-ink-soft sm:px-10">
          {which === "impressum" ? <Impressum /> : which === "datenschutz" ? <Datenschutz /> : null}
        </div>
      </dialog>
    </>
  );
}

function H({ children }: { children: ReactNode }) {
  return <h3 className="label-xs mb-3 mt-9 text-ink first:mt-0">{children}</h3>;
}

function Impressum() {
  return (
    <div className="space-y-3">
      <p>
        Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) sowie § 18 Abs. 2 Medienstaatsvertrag (MStV) und den
        Informationspflichten der Dienstleistungs-Informationspflichten-Verordnung (DL-InfoV).
      </p>
      <H>Diensteanbieterin</H>
      <p>
        {kontakt.inhaberin}
        <br />
        {kontakt.name}
        <br />
        {kontakt.strasse}
        <br />
        {kontakt.ort}
        <br />
        Deutschland
      </p>
      <H>Kontakt</H>
      <p>
        Telefon: <a className="underline decoration-gold/60 underline-offset-4" href={kontakt.telefon.href}>{kontakt.telefon.anzeige}</a>
        <br />
        Mobil: <a className="underline decoration-gold/60 underline-offset-4" href={kontakt.mobil.href}>{kontakt.mobil.anzeige}</a>
        <br />
        E-Mail: <a className="underline decoration-gold/60 underline-offset-4" href={`mailto:${kontakt.email}`}>{kontakt.email}</a>
      </p>
      <H>Steuerliche Angaben</H>
      <p>
        Steuernummer: 74430/04902
        <br />
        Eine Umsatzsteuer-Identifikationsnummer nach § 27 a UStG liegt nicht vor.
      </p>
      <H>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</H>
      <p>
        {kontakt.inhaberin}, {kontakt.strasse}, {kontakt.ort}
      </p>
      <H>Verbraucherstreitbeilegung</H>
      <p>
        Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen (§ 36 Verbraucherstreitbeilegungsgesetz — VSBG).
      </p>
      <H>Hinweis zu den Leistungsbeschreibungen</H>
      <p>
        Die Beschreibungen der Leistungen dienen der allgemeinen Information und ersetzen keine ärztliche Beratung,
        Untersuchung oder Behandlung. Bei Erkrankungen wie Diabetes, Durchblutungsstörungen oder Nagelpilz wenden Sie
        sich bitte zusätzlich an Ihre Ärztin oder Ihren Arzt.
      </p>
      <H>Haftung für Inhalte</H>
      <p>
        Als Diensteanbieterin sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen
        Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieterin jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
        den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
        der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden entsprechender Rechtsverletzungen
        entfernen wir diese Inhalte umgehend.
      </p>
      <H>Haftung für Links</H>
      <p>
        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb
        können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets
        die jeweilige Anbieterin oder der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen
        entfernen wir derartige Links umgehend.
      </p>
      <H>Urheberrecht</H>
      <p>
        Die durch die Betreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht.
        Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechts bedürfen der schriftlichen Zustimmung der jeweiligen Urheberin oder des jeweiligen Urhebers.
      </p>
    </div>
  );
}

function Datenschutz() {
  return (
    <div className="space-y-3">
      <p>
        Informationen zur Verarbeitung personenbezogener Daten nach Art. 13 und Art. 14 der
        Datenschutz-Grundverordnung (DSGVO).
      </p>
      <H>1. Verantwortliche</H>
      <p>
        {kontakt.inhaberin}
        <br />
        {kontakt.name}
        <br />
        {kontakt.strasse}, {kontakt.ort}
        <br />
        Telefon: {kontakt.telefon.anzeige}
        <br />
        E-Mail: {kontakt.email}
      </p>
      <H>2. Hosting und Server-Logfiles</H>
      <p>
        Diese Website wird gehostet von der Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, USA. Beim Aufruf
        der Website erhebt der Hosting-Anbieter automatisch Informationen, die Ihr Browser übermittelt und die technisch
        erforderlich sind, um Ihnen die Website anzuzeigen: IP-Adresse, Datum und Uhrzeit des Zugriffs, Name und URL der
        abgerufenen Datei, übertragene Datenmenge, Browsertyp und -version, Betriebssystem sowie die zuvor besuchte Seite
        (Referrer-URL).
      </p>
      <p>
        Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der technisch fehlerfreien
        Auslieferung, der Stabilität und der Sicherheit der Website. Mit Vercel besteht ein Vertrag über
        Auftragsverarbeitung nach Art. 28 DSGVO. Vercel ist nach dem EU-U.S. Data Privacy Framework zertifiziert;
        ergänzend gelten die Standardvertragsklauseln der Europäischen Kommission (Art. 45 bzw. Art. 46 DSGVO).
      </p>
      <H>3. Cookies, Schriften und Inhalte Dritter</H>
      <p>
        Diese Website setzt keine Cookies und verwendet keine Analyse-, Tracking- oder Marketingdienste. Schriftarten und
        Bilder werden ausschließlich von unserem eigenen Server geladen; es besteht keine Verbindung zu Google Fonts. Es
        sind keine Inhalte Dritter wie Karten oder Videos eingebettet. Der Link „Route planen“ führt zu Google Maps – eine
        Datenübermittlung an Google findet erst statt, wenn Sie diesen Link anklicken.
      </p>
      <H>4. Kontaktaufnahme</H>
      <p>
        Wenn Sie uns per Telefon, E-Mail oder Messenger kontaktieren, werden Ihre Angaben zur Bearbeitung der Anfrage und
        für den Fall von Anschlussfragen gespeichert. Rechtsgrundlage ist bei Anbahnung eines Vertrags Art. 6 Abs. 1 lit.
        b DSGVO, bei sonstigen Anfragen Art. 6 Abs. 1 lit. f DSGVO. Enthält Ihre Anfrage Angaben zu Ihrer Gesundheit,
        stützen wir die Verarbeitung zusätzlich auf Ihre ausdrückliche Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO. Die
        Daten werden gelöscht, sobald sie nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>
      <H>5. Kontakt über WhatsApp</H>
      <p>
        Auf dieser Website befindet sich ein Link zu WhatsApp. Wenn Sie diesen Link nutzen, werden Ihre Nachricht, Ihre
        Rufnummer und weitere Metadaten durch die WhatsApp Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland
        verarbeitet. Eine Übermittlung in die USA und andere Drittländer ist dabei möglich. Rechtsgrundlage ist Ihre
        Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO, die Sie durch das bewusste Anschreiben erteilen; für die
        anschließende Terminabstimmung zusätzlich Art. 6 Abs. 1 lit. b DSGVO. Bitte übermitteln Sie über WhatsApp keine
        Gesundheitsdaten oder Fotos. Sie erreichen uns gleichwertig telefonisch.
      </p>
      <H>6. Terminvereinbarung und Behandlung</H>
      <p>
        Für die Terminvereinbarung verarbeiten wir Ihren Namen, Ihre Kontaktdaten und den gewünschten Termin. Im Rahmen der
        Behandlung können wir Angaben zu Ihrer Gesundheit verarbeiten, die für eine sichere Fußpflege erforderlich sind
        (etwa Diabetes, Medikamente wie Blutverdünner oder Allergien). Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO
        sowie für Gesundheitsangaben Ihre ausdrückliche Einwilligung nach Art. 9 Abs. 2 lit. a DSGVO. Rechnungs- und
        Buchhaltungsunterlagen bewahren wir nach den gesetzlichen Fristen (§ 147 AO, § 257 HGB) auf.
      </p>
      <H>7. Empfängerinnen und Empfänger</H>
      <p>
        Eine Weitergabe Ihrer Daten erfolgt nur, soweit dies erforderlich ist und eine Rechtsgrundlage besteht – etwa an
        den Hosting-Anbieter dieser Website als Auftragsverarbeiter oder an die Steuerberatung. Eine Weitergabe zu
        Werbezwecken findet nicht statt.
      </p>
      <H>8. Ihre Rechte</H>
      <p>
        Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung der
        Verarbeitung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch gegen Verarbeitungen auf Grundlage von Art. 6
        Abs. 1 lit. f DSGVO (Art. 21) sowie auf Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7
        Abs. 3). Eine formlose Mitteilung an die oben genannten Kontaktdaten genügt.
      </p>
      <H>9. Beschwerderecht</H>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig
        ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg, Lautenschlagerstraße
        20, 70173 Stuttgart.
      </p>
      <H>10. Keine automatisierte Entscheidungsfindung</H>
      <p>Eine automatisierte Entscheidungsfindung einschließlich Profiling nach Art. 22 DSGVO findet nicht statt.</p>
      <p className="pt-4 text-ink-faint">Stand: Oktober 2026</p>
    </div>
  );
}
