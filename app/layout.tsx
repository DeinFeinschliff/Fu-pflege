import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import { kontakt } from "@/lib/content";
import "./globals.css";

const body = Jost({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
  variable: "--ff-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fusspflege-nuertingen.de"),
  title: "Fußpflege Hand & Fuß – Fußpflege in Nürtingen",
  description:
    "Kosmetische Fußpflege in Nürtingen. Seit 2013 gepflegte Füße mit Zeit, Ruhe und viel Erfahrung – jetzt Termin vereinbaren.",
  openGraph: {
    title: "Fußpflege Hand & Fuß – Fußpflege in Nürtingen",
    description: "Gepflegte Füße mit Zeit, Ruhe und viel Erfahrung. Jetzt Termin vereinbaren.",
    locale: "de_DE",
    type: "website",
    images: ["/images/linda-behandlungsraum.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#cabca9",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: kontakt.name,
  image: "https://www.fusspflege-nuertingen.de/images/linda-behandlungsraum.jpg",
  telephone: "+4970229943619",
  address: {
    "@type": "PostalAddress",
    streetAddress: kontakt.strasse,
    postalCode: "72622",
    addressLocality: "Nürtingen",
    addressCountry: "DE",
  },
  url: "https://www.fusspflege-nuertingen.de",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${body.variable} antialiased`}>
      <body className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
