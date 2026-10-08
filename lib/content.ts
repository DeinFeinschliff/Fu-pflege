// Alle Inhalte der Seite an einem Ort – Texte, Preise und Kontaktdaten hier ändern.

export const kontakt = {
  name: "Fußpflege Hand & Fuß",
  inhaberin: "Linda Varitimidis",
  strasse: "Brunnsteige 14",
  ort: "72622 Nürtingen",
  telefon: { anzeige: "(07022) 9943619", href: "tel:+4970229943619" },
  mobil: { anzeige: "(0157) 57855724", href: "tel:+4915757855724" },
  whatsapp:
    "https://wa.me/4915757855724?text=" +
    encodeURIComponent("Hallo Linda, ich möchte gern einen Termin für die Fußpflege vereinbaren."),
  email: "info@feinschliff-nuertingen.de",
  maps: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Brunnsteige 14, 72622 Nürtingen"),
  oeffnungszeiten: [
    "Termine sind von Montag bis Samstag nach Vereinbarung möglich.",
    "Da ich ausschließlich nach Terminvereinbarung arbeite, gibt es keine festen Öffnungszeiten.",
  ],
};

export const leistungen: { titel: string; text: string; icon: "bad" | "fuss" | "lack" }[] = [
  {
    titel: "Kosmetische Fußpflege",
    icon: "bad",
    text: "Fußbad, Nägel, Nagelhaut und Hornhaut – rundum gepflegt.",
  },
  {
    titel: "Fußpflege bei Problemfüßen",
    icon: "fuss",
    text: "Sanfte Hilfe bei Hühneraugen, Schwielen und rissigen Fersen.",
  },
  {
    titel: "Lack & Gel",
    icon: "lack",
    text: "Nagellack oder Gel-Lack – der perfekte Abschluss.",
  },
];

export const problemfuesse = [
  {
    titel: "Hornhaut & Schwielen",
    text: "Verhornungen werden behutsam abgetragen – für weiche Füße und ein Gefühl, als liefen Sie auf Wolken.",
  },
  {
    titel: "Hühneraugen",
    text: "Schmerzhafte Druckstellen werden schonend entfernt, damit jeder Schritt wieder leichtfällt.",
  },
  {
    titel: "Rissige Fersen",
    text: "Schrunden werden geglättet und intensiv gepflegt, damit die Haut wieder geschmeidig und belastbar wird.",
  },
  {
    titel: "Verdickte & eingewachsene Nägel",
    text: "Fachgerechtes Kürzen und Ausdünnen entlastet spürbar und beugt neuen Beschwerden vor.",
  },
  {
    titel: "Trockene, empfindliche Haut",
    text: "Reichhaltige, beruhigende Pflege, abgestimmt auf Ihre Haut – wohltuend und nachhaltig.",
  },
];

export const ablauf = [
  { titel: "Ankommen", text: "Platz nehmen und durchatmen – ein warmes Fußbad stimmt Sie auf die Behandlung ein." },
  { titel: "Beratung", text: "Ich schaue mir Ihre Füße genau an und bespreche mit Ihnen, was sie brauchen." },
  { titel: "Behandlung", text: "Nägel, Nagelhaut, Hornhaut – sorgfältig, sanft und ganz ohne Zeitdruck." },
  { titel: "Pflege & Tipps", text: "Zum Abschluss eine wohltuende Pflege und Tipps, damit Ihre Füße lange gepflegt bleiben." },
];

// Preise Stand 15.03.2023 (von der alten Website)
export const preise = [
  {
    gruppe: "Fußpflege",
    posten: [
      ["Fußpflege ohne Lack", "43,00"],
      ["Fußpflege mit Lack", "46,00"],
      ["Fußpflege mit Gel", "53,00"],
    ],
  },
] as const;
