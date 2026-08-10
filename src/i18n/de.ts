import type { Translation } from "./en";

/**
 * ============================================================
 * GERMAN — professional translation
 * ============================================================
 * The `Translation` type import guarantees this file has the exact same
 * key structure as en.ts. Product, platform and technology names (Meta
 * Ads, Next.js, Claude AI, n8n, SEO, GA4, …) are kept as-is — standard
 * practice in professional German business and tech writing. Everything
 * else is natural, professional German.
 *
 * The site is fully wired for German already: routing (/de/...), the
 * shared LTR design, hreflang tags and the language switcher all work
 * today.
 * ============================================================
 */
export const de: Translation = {
  meta: {
    home: {
      title: "Hussein Al Sudani | KI-Automatisierungsarchitekt",
      description:
        "KI-Automatisierungsarchitekt, SEO-Stratege und Performance-Marketing-Spezialist mit Sitz in Dubai, VAE.",
    },
    projects: {
      title: "Projekte",
      description:
        "Eine Sammlung von KI-Automatisierungssystemen, SEO-Strategien und Performance-Marketing-Kampagnen, die Unternehmen helfen, schneller zu wachsen.",
    },
  },

  nav: {
    about: "Über mich",
    projects: "Projekte",
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    contact: "Kontakt",
    toggleMenu: "Navigationsmenü umschalten",
  },

  hero: {
    description:
      "Ich entwickle KI-Automatisierungssysteme, SEO-Strategien und Performance-Marketing-Kampagnen, die Unternehmen helfen, schneller zu wachsen.",
    viewProjects: "Projekte ansehen",
    downloadCv: "Lebenslauf herunterladen",
    contactMe: "Kontakt aufnehmen",
    statYears: "Jahre",
    statProjects: "Projekte",
    statAutomations: "Automatisierungen",
    roles: ["KI-Automatisierungsarchitekt", "SEO-Stratege", "Performance-Marketing-Spezialist"],
  },

  companies: {
    label: "Vertraut von Marken aus den Bereichen Immobilien, Medizin und Beauty in Dubai",
    roles: [
      "Social-Media- und Digital-Marketing-Manager",
      "Website- und SEO-Spezialist",
      "Digital-Marketing-Manager",
      "Digital-Marketing-Manager",
    ],
  },

  about: {
    tag: "Über mich",
    heading: "Wachstum durch KI & Strategie",
    paragraph1:
      "Ich bin Hussein Al Sudani, ein KI-Automatisierungsarchitekt, SEO-Stratege und Performance-Marketing-Spezialist mit Sitz in Dubai.",
    paragraph2:
      "Ich entwickle KI-Workflows, SEO-Systeme, konversionsstarke Marketing-Funnels und skalierbare digitale Lösungen für moderne Unternehmen.",
    statYearsLabel: "Jahre Erfahrung",
    statProjectsLabel: "Abgeschlossene Projekte",
    statAutomationsLabel: "KI-Automatisierungen",
    statSeoLabel: "Performance-Experte",
  },

  results: {
    tag: "Erfolgsbilanz",
    heading: "Ergebnisse & Kennzahlen",
    intro: "Verifizierte Ergebnisse direkt aus realen Kundenprojekten — keine Prognosen.",
    labels: [
      "Wachstum des organischen Traffics (Miled Andos)",
      "Instagram-Follower von 0 aufgebaut (Luci Luna)",
      "Instagram-Wachstum im Immobilienbereich (Expandify)",
      "Anstieg organischer Klicks (Cosmedent)",
      "Steigerung der Lead-Generierung (Luci Luna)",
      "Google-Ranking auf Seite 1, zuvor Seite 3",
    ],
  },

  projectsSection: {
    tag: "Ausgewählte Arbeiten",
    heading: "Ausgewählte Fallstudien",
  },

  techStack: {
    tag: "Werkzeugkasten",
    heading: "Tech-Stack",
    intro: "Die Plattformen und Sprachen hinter jeder Automatisierung, Kampagne und Entwicklung.",
  },

  skills: {
    tag: "Expertise",
    heading: "Kernkompetenzen & Technologien",
    items: [
      {
        title: "KI-Automatisierung",
        description: "n8n • Claude-KI-Agenten • WhatsApp Business API • Workflow-Automatisierung",
      },
      {
        title: "SEO",
        description: "Technisches SEO • Lokales SEO • Schema-Markup • Domain-Migration",
      },
      {
        title: "Performance-Marketing",
        description: "Google Ads • Meta Ads & Retargeting • Facebook Pixel • CPL-Reduzierung",
      },
      {
        title: "Social Media & Content",
        description: "Instagram-Wachstum (0→21,7K) • Content-Strategie • TikTok • YouTube",
      },
      {
        title: "Entwicklung",
        description: "Next.js • TypeScript • Tailwind CSS • WordPress • Astro",
      },
      {
        title: "Analytics",
        description: "GA4 • Search Console • Conversion-Tracking • Funnel-Analyse",
      },
    ],
  },

  experience: {
    tag: "Erfahrung",
    heading: "Beruflicher Werdegang",
    jobs: [
      {
        date: "Jan. 2026 — heute",
        title: "Social-Media- und Digital-Marketing-Manager",
        company: "Expandify Real Estate, Dubai, VAE",
        points: [
          "Instagram-Follower der Marke durch eine strukturierte organische Wachstumsstrategie und Instagram-SEO von 30 auf über 669 (+2.130 %) gesteigert.",
          "Plattformübergreifende Content-Expansion über Instagram, YouTube, Pinterest und Facebook geleitet und dabei über 90 Marken-Assets veröffentlicht.",
          "Meta-Ads-Kampagnen für den Luxusimmobilienmarkt in Dubai verwaltet und die Facebook-Pixel-Retargeting-Infrastruktur von Grund auf entwickelt.",
        ],
      },
      {
        date: "März 2025 — Apr. 2025",
        title: "Website- und SEO-Spezialist",
        company: "Cosmedent Medical Center, Dubai, VAE",
        points: [
          "Vollständige Domain-Migration (.com → .ae) ohne Verlust im organischen Ranking durchgeführt, inklusive WordPress, Weiterleitungen und Neuindexierung.",
          "Wettbewerbsfähige Keywords von Seite 3 auf Seite 1 verbessert — \"dentist in Dubai\" von Platz 28 auf 8, \"dental clinic Dubai\" von Platz 31 auf 9.",
          "Organische Klicks innerhalb von 6 Monaten um 142 % und Impressionen um 186 % gesteigert, verifiziert in der Google Search Console.",
        ],
      },
      {
        date: "Feb. 2024 — heute",
        title: "Digital-Marketing-Manager",
        company: "Miled Andos Ladies Salon, Dubai, VAE",
        points: [
          "Individuelle WordPress-Website erstellt und eine Domain-Migration (.com → .ae) mit einer vollständigen lokalen SEO-Strategie durchgeführt.",
          "Platz 1 bei Google für zentrale Marken-Keywords sowie Top-10-Platzierungen für \"salon in Dubai\" und \"beauty salon in Dubai\" erreicht.",
          "Organische Klicks um 127 % und Impressionen um 212 % innerhalb von 6 Monaten gesteigert, was sich direkt auf Terminbuchungen auswirkte.",
        ],
      },
      {
        date: "Sep. 2023 — Sep. 2024",
        title: "Digital-Marketing-Manager",
        company: "Luci Luna Beauty Salon, Dubai, VAE",
        points: [
          "Instagram des Salons durch eine hochwertige Markenidentität, Content-Säulen und Reels von 0 auf über 21.700 Follower ausgebaut.",
          "Meta-Ads- und Google-Ads-Kampagnen verwaltet und durch Segmentierung sowie Budgetoptimierung eine Steigerung der Lead-Generierung um 30 % erzielt.",
          "GA4 zur Analyse des Nutzerverhaltens und der Funnel-Abbrüche eingesetzt und Targeting sowie Landingpages zur Steigerung der Conversion-Rate optimiert.",
        ],
      },
    ],
  },

  certifications: {
    tag: "Nachweise",
    heading: "Zertifizierungen",
    intro: "Formale Schulungen und Zertifizierungen in Paid Media, SEO, KI, Cybersicherheit und kreativen Tools.",
    viewFull: "Vollständiges Zertifikat ansehen",
    verify: "Zertifikat verifizieren",
    issued: "Ausgestellt",
    expires: "Gültig bis",
    credentialId: "Zertifikat-ID",
    skillsCovered: "Vermittelte Fähigkeiten",
    close: "Schließen",
    categories: {
      "paid-media": "Paid Media",
      seo: "SEO",
      "digital-marketing": "Digitales Marketing",
      ai: "KI",
      security: "Cybersicherheit",
      creative: "Kreativ",
    },
  },

  testimonials: {
    tag: "Referenzen",
    heading: "Was Kunden sagen",
  },

  contact: {
    tag: "Kontakt",
    heading: "Lass uns etwas Großartiges erschaffen",
    description:
      "Ich stehe weltweit für Projekte in den Bereichen KI-Automatisierung, SEO, Performance-Marketing und Webentwicklung zur Verfügung.",
    emailMe: "E-Mail senden",
    callMe: "Anrufen",
    linkedin: "LinkedIn",
    downloadCv: "Lebenslauf herunterladen",
  },

  footer: {
    ctaHeading: "Haben Sie ein Projekt im Kopf?",
    ctaButton: "Lass uns sprechen",
    tagline: "KI-Automatisierungsarchitekt • SEO-Stratege • Performance-Marketing",
    linkAbout: "Über mich",
    linkProjects: "Projekte",
    linkSkills: "Fähigkeiten",
    linkContact: "Kontakt",
    rightsReserved: "Alle Rechte vorbehalten.",
  },

  projectCard: {
    viewCaseStudy: "Fallstudie ansehen",
  },

  projectsPage: {
    badge: "Portfolio",
    heading: "Ausgewählte Projekte",
    intro:
      "Eine Sammlung von KI-Automatisierungssystemen, SEO-Strategien und Performance-Marketing-Kampagnen, die Unternehmen helfen, schneller zu wachsen.",
  },

  projectsData: {
    "expandify-real-estate": {
      category: "Social Media & Digital Marketing",
      description:
        "Social-Media- und Meta-Ads-Management für eine Luxusimmobilienmarke in Dubai — Instagram-Wachstum, plattformübergreifender Content und eine von Grund auf entwickelte Retargeting-Infrastruktur.",
      tags: ["Instagram-Wachstum", "Meta Ads", "Facebook Pixel"],
    },
    cosmedent: {
      category: "Website & SEO-Spezialist",
      description:
        "Ein technisches SEO-Projekt für eine kosmetische Zahnarztpraxis in Dubai — Domain-Migration, Keyword-Recovery und messbares organisches Wachstum, verifiziert in der Search Console.",
      tags: ["Technisches SEO", "Domain-Migration", "WordPress"],
    },
    "miled-andos": {
      category: "Digital-Marketing-Manager",
      description:
        "Lokales SEO und ein Website-Relaunch für einen Beauty-Salon in Dubai — individuelle WordPress-Website, Domain-Migration und Platz 1 bei Google für zentrale Keywords.",
      tags: ["Lokales SEO", "WordPress", "Domain-Migration"],
    },
    "luci-luna": {
      category: "Digital-Marketing-Manager",
      description:
        "Social-Media-Wachstum und Paid-Media-Management für einen Beauty-Salon in Dubai — Instagram von 0 auf über 21.700 Follower ausgebaut, bei gleichzeitiger Steigerung der Lead-Generierung um 30 %.",
      tags: ["Instagram-Wachstum", "Meta Ads", "Google Ads"],
    },
    "ardon-group": {
      category: "Webentwicklung",
      description:
        "Eine Luxusimmobilien-Website, von Grund auf mit Next.js, TypeScript und Tailwind CSS entwickelt, mit individuellen Cursor-Interaktionen und scroll-gesteuerten Animationen.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    "ai-automation": {
      category: "KI-Automatisierung — in Entwicklung",
      description:
        "Ein laufendes Automatisierungsprojekt mit n8n, WhatsApp Business API und Claude-KI-Agenten zur Reduzierung des manuellen Aufwands bei der Lead-Qualifizierung für Immobilienkunden.",
      tags: ["n8n", "WhatsApp Business API", "Claude AI"],
    },
  },

  caseStudy: {
    backToProjects: "Zurück zu den Projekten",
    caseStudyBadge: "Fallstudie",
    overviewTag: "Überblick",
    responsibilitiesTag: "Aufgabenbereiche",
    galleryTag: "Galerie",
    galleryHeading: "Ein Blick auf die Arbeit",
    nextStepTag: "Nächster Schritt",
    startConversation: "Gespräch beginnen",
    viewMoreCaseStudies: "Weitere Fallstudien ansehen",
    roleLabel: "Rolle",
    clientLabel: "Kunde",
    locationLabel: "Standort",
    durationLabel: "Dauer",
    yearLabel: "Jahr",
    stackLabel: "Tech-Stack",
    statusLabel: "Status",
    startedLabel: "Beginn",
    focusLabel: "Fokus",
    toolsTag: "Werkzeuge",
    techStackTag: "Tech-Stack",
    whatWasUsedHeading: "Eingesetzte Werkzeuge",
    technologiesHeading: "Technologien",
    inDevelopment: "In Entwicklung",
    dubaiUae: "Dubai, VAE",
    present: "heute",
  },

  caseStudies: {
    "expandify-real-estate": {
      metaTitle: "Fallstudie Expandify Real Estate",
      metaDescription:
        "Social-Media- und Meta-Ads-Management für Expandify Real Estate — Instagram-Wachstum, plattformübergreifender Content und eine von Grund auf entwickelte Retargeting-Infrastruktur.",
      lead:
        "Social-Media- und Digital-Marketing-Manager für eine Luxusimmobilienmarke in Dubai — Aufbau von Instagram von Grund auf, Erweiterung des Contents über vier Plattformen sowie Aufbau der dahinterliegenden Meta-Ads- und Retargeting-Infrastruktur.",
      roleValue: "Social-Media- und Digital-Marketing-Manager",
      durationValue: "Jan. 2026 — heute",
      heroStats: [
        { label: "Instagram-Follower-Wachstum (30 → 669+)" },
        { label: "Veröffentlichte Marken-Content-Assets" },
        { label: "Verwaltete Plattformen" },
      ],
      overviewHeading: "Aufbau der digitalen Präsenz einer Immobilienmarke",
      overviewText:
        "Als Social-Media- und Digital-Marketing-Manager bei Expandify Real Estate verantworte ich die organische und bezahlte Social-Media-Präsenz der Marke — vom Aufbau von Instagram aus einer nahezu leeren Basis über die Content-Erweiterung auf Instagram, YouTube, Pinterest und Facebook bis hin zum Aufbau der Paid-Media- und Tracking-Infrastruktur, die die Meta-Ads-Kampagnen der Marke im Luxusimmobilienmarkt Dubais unterstützt.",
      responsibilitiesHeading: "Aufgabenbereiche dieser Rolle",
      responsibilities: [
        "Instagram der Marke durch eine strukturierte organische Wachstumsstrategie und Instagram-SEO von 30 auf über 669 Follower (+2.130 %) skaliert.",
        "Plattformübergreifende Content-Expansion über Instagram, YouTube, Pinterest und Facebook geleitet und dabei über 90 Marken-Assets veröffentlicht.",
        "Meta-Ads-Kampagnen für den Luxusimmobilienmarkt in Dubai verwaltet, dabei niedrige Kosten pro Lead gehalten und gleichzeitig das Volumen qualifizierter Leads gesteigert.",
        "Facebook-Pixel- und Website-Retargeting-Infrastruktur von Grund auf entwickelt und damit warme Retargeting-Funnels für Käufer ermöglicht.",
        "Video-Walkthroughs für Luxusimmobilien produziert und wöchentliche ROI- und Performance-Berichte für das Senior-Management erstellt.",
      ],
      channelsTag: "Kanäle & Werkzeuge",
      channelsHeading: "Wo die Arbeit stattfindet",
      galleryIntro: "Vollständige Screenshots werden für die Veröffentlichung vorbereitet, da dieses Projekt noch läuft.",
      gallery: [
        { label: "Instagram-Content-Strategie" },
        { label: "Struktur der Meta-Ads-Kampagne" },
        { label: "Facebook-Pixel- und Retargeting-Setup" },
      ],
      ctaHeading: "Stehen Sie vor einer ähnlichen Wachstumsherausforderung?",
      ctaText:
        "Ich verantworte Social-Media-Wachstum, Content und Paid Media für Unternehmen, die ihre digitale Präsenz von Grund auf aufbauen müssen.",
    },

    cosmedent: {
      metaTitle: "Fallstudie Cosmedent",
      metaDescription:
        "Ein technisches SEO-Projekt für Cosmedent Medical Center — Domain-Migration, Keyword-Recovery und organisches Wachstum, verifiziert in der Google Search Console.",
      lead:
        "Website- und SEO-Spezialist für eine kosmetische Zahnarztpraxis in Dubai — eine vollständige Domain-Migration ohne Rankingverlust, gefolgt von messbarem organischem Wachstum, verifiziert in der Google Search Console.",
      roleValue: "Website- und SEO-Spezialist",
      durationValue: "März 2025 — Apr. 2025",
      heroStats: [
        { label: "Wachstum organischer Klicks" },
        { label: "Wachstum organischer Impressionen" },
      ],
      keywordRankingsExtraStat: {
        value: "Seite 3 → Seite 1",
        label: "Keyword-Rankings, verifiziert in der Search Console",
      },
      overviewHeading: "Eine Domain-Migration ohne Rankingverlust",
      overviewText:
        "Cosmedent musste von einer .com- auf eine .ae-Domain umziehen, ohne die bereits aufgebaute Sichtbarkeit in der Suche zu verlieren. Das Projekt umfasste die technische Migration selbst — Weiterleitungen, Neuindexierung und einen WordPress-Relaunch — gefolgt von einem technischen SEO-Audit und Keyword-Recovery-Arbeiten, wobei die Ergebnisse direkt in der Google Search Console verfolgt wurden.",
      responsibilitiesHeading: "Umfang dieses Projekts",
      responsibilities: [
        "Vollständige Domain-Migration (.com → .ae) ohne Verlust im organischen Ranking durchgeführt, inklusive WordPress, Weiterleitungen und Neuindexierung.",
        "Wettbewerbsfähige Keywords von Seite 3 auf Seite 1 der Google-Suchergebnisse verbessert.",
        "Organische Klicks innerhalb von 6 Monaten um 142 % und Impressionen um 186 % gesteigert, verifiziert in der Google Search Console.",
        "Technisches SEO-Audit durchgeführt, das Meta-Optimierung, interne Verlinkung und mobile Optimierung wichtiger Seiten umfasste.",
      ],
      keywordRankingsTag: "Keyword-Rankings",
      keywordRankingsHeading: "Verifizierte Positionsänderungen",
      keywordShifts: [
        { keyword: "\"dentist in Dubai\"" },
        { keyword: "\"dental clinic Dubai\"" },
      ],
      tools: ["WordPress", "Google Search Console", "Schema.org", "Technisches SEO-Audit"],
      galleryIntro: "Vollständige Screenshots werden für die Veröffentlichung vorbereitet.",
      gallery: [
        { label: "Domain-Migration & Weiterleitungs-Mapping" },
        { label: "Search-Console-Performance-Bericht" },
      ],
      ctaHeading: "Benötigen Sie eine Site-Migration ohne Rankingrisiko?",
      ctaText: "Ich übernehme technisches SEO und Domain-Migrationen mit Sichtbarkeit in der Suche als Priorität, nicht als Nachgedanke.",
    },

    "miled-andos": {
      metaTitle: "Fallstudie Miled Andos",
      metaDescription:
        "Lokales SEO und ein Website-Relaunch für Miled Andos Ladies Salon — individuelle WordPress-Website, Domain-Migration und Platz 1 bei Google für zentrale Keywords.",
      lead:
        "Digital-Marketing-Manager für einen Beauty-Salon in Dubai — ein individueller WordPress-Relaunch, eine Domain-Migration und eine lokale SEO-Strategie, die die Marke auf Platz 1 für ihre zentralen Keywords brachte.",
      roleValue: "Digital-Marketing-Manager",
      durationValue: "Feb. 2024 — heute",
      heroStats: [
        { label: "Wachstum organischer Klicks" },
        { label: "Wachstum organischer Impressionen" },
      ],
      keywordRankingsExtraStat: {
        value: "#1",
        label: "Google-Ranking für zentrale Marken-Keywords",
      },
      overviewHeading: "Ein lokaler SEO-Relaunch von Grund auf",
      overviewText:
        "Miled Andos benötigte eine Website, die tatsächlich selbst verwaltet werden konnte, sowie eine lokale Suchpräsenz, die stark genug war, um bei den wichtigsten Suchbegriffen in Dubai zu konkurrieren. Das Projekt umfasste eine individuelle WordPress-Website, eine Domain-Migration zu .ae sowie eine fortlaufende lokale SEO-Strategie — dazu die Social-Media-Inhalte und Community-Betreuung, die das Wachstum am Laufen halten.",
      responsibilitiesHeading: "Aufgabenbereiche dieser Rolle",
      responsibilities: [
        "Individuelle WordPress-Website erstellt und eine Domain-Migration (.com → .ae) mit einer vollständigen lokalen SEO-Strategie durchgeführt.",
        "Platz 1 bei Google für zentrale Marken-Keywords sowie Top-10-Platzierungen für \"salon in Dubai\" und \"beauty salon in Dubai\" erreicht.",
        "Organische Klicks um 127 % und Impressionen um 212 % innerhalb von 6 Monaten gesteigert, was sich direkt auf Terminbuchungen auswirkte.",
        "Laufende SEO-Betreuung, Social-Media-Redaktionspläne und Community-Management zur Sicherung von Markenwachstum und Kundenbindung.",
      ],
      rankingsTag: "Rankings",
      rankingsHeading: "Verifizierte Google-Positionen",
      rankings: [
        { keyword: "Zentrale Marken-Keywords", position: "#1" },
        { keyword: "\"salon in Dubai\"", position: "Top 10" },
        { keyword: "\"beauty salon in Dubai\"", position: "Top 10" },
      ],
      tools: ["WordPress", "Lokales SEO", "Domain-Migration", "Google Search Console"],
      galleryIntro: "Vollständige Screenshots werden für die Veröffentlichung vorbereitet.",
      gallery: [
        { label: "Individueller WordPress-Relaunch" },
        { label: "Bericht zu lokalem SEO & Rankings" },
      ],
      ctaHeading: "Soll Ihr lokales Unternehmen dort ranken, wo es zählt?",
      ctaText:
        "Ich entwickle und betreue lokale SEO-Strategien für Unternehmen, die ihre lokalen Suchergebnisse dominieren wollen — nicht nur darin auftauchen.",
    },

    "luci-luna": {
      metaTitle: "Fallstudie Luci Luna Beauty Salon",
      metaDescription:
        "Social-Media-Wachstum und Paid-Media-Management für Luci Luna Beauty Salon — Instagram von 0 auf über 21.700 Follower und eine Steigerung der Lead-Generierung um 30 %.",
      lead:
        "Digital-Marketing-Manager für einen Beauty-Salon in Dubai — Aufbau einer Instagram-Präsenz von null sowie Verantwortung für Paid Media und Analytics hinter einer messbaren Steigerung der Leads.",
      roleValue: "Digital-Marketing-Manager",
      durationValue: "Sep. 2023 — Sep. 2024",
      heroStats: [
        { label: "Instagram-Follower, von 0 aufgebaut" },
        { label: "Steigerung der Lead-Generierung" },
        { label: "Monate auf dem Account" },
      ],
      overviewHeading: "Aufbau von Reichweite und Funnel von null",
      overviewText:
        "Luci Luna hatte zu Beginn dieses Projekts keine nennenswerte Instagram-Präsenz. Innerhalb von zwölf Monaten baute der Account eine hochwertige Markenidentität und ein Content-System von Grund auf auf, während Meta- und Google-Ads-Kampagnen — gestützt auf GA4-Analysen des Nutzerverhaltens und der Funnel-Abbrüche — dieses wachsende Publikum in eine messbare Steigerung der Leads verwandelten.",
      responsibilitiesHeading: "Umfang dieser Rolle",
      responsibilities: [
        "Instagram des Salons durch eine hochwertige Markenidentität, Content-Säulen und Reels von 0 auf über 21.700 Follower ausgebaut.",
        "Meta-Ads- und Google-Ads-Kampagnen verwaltet und durch Segmentierung sowie Budgetoptimierung eine Steigerung der Lead-Generierung um 30 % erzielt.",
        "GA4 zur Analyse des Nutzerverhaltens und der Funnel-Abbrüche eingesetzt und Targeting sowie Landingpages zur Steigerung der Conversion-Rate optimiert.",
        "Verantwortung für Website-UX, Medienbibliothek und Markenkonsistenz über alle digitalen Kanäle hinweg übernommen.",
      ],
      tools: ["Instagram", "Meta Ads", "Google Ads", "Google Analytics 4"],
      galleryIntro: "Vollständige Screenshots werden für die Veröffentlichung vorbereitet.",
      gallery: [
        { label: "Instagram-Markenidentität & Reels" },
        { label: "Struktur der Meta- & Google-Ads-Kampagne" },
      ],
      ctaHeading: "Starten Sie Ihre Social-Media-Präsenz bei null?",
      ctaText:
        "Ich entwickle Markenidentität, Content-Systeme und Paid-Media-Strategien für Unternehmen, die ihr Publikum von Grund auf aufbauen müssen.",
    },

    "ardon-group": {
      metaTitle: "Fallstudie Ardon Group",
      metaDescription:
        "Eine Luxusimmobilien-Website, von Grund auf mit Next.js, TypeScript und Tailwind CSS entwickelt, mit individuellen Cursor-Interaktionen und scroll-gesteuerten Animationen.",
      lead:
        "Eine Luxusimmobilien-Website, komplett von Grund auf entwickelt — kein Template, kein Page-Builder — mit Next.js, TypeScript und Tailwind CSS.",
      roleValue: "Webentwickler",
      yearValue: "2026",
      stackValue: "Next.js · TypeScript · Tailwind CSS",
      overviewHeading: "Eine individuelle Entwicklung, kein Template",
      overviewText:
        "Eine Luxusimmobilien-Website, komplett von Grund auf mit Next.js, TypeScript und Tailwind CSS entwickelt — inklusive individueller Cursor-Interaktionen und scroll-gesteuerter Animationen, statt aus einem bestehenden Template oder Page-Builder zusammengesetzt.",
      featuresTag: "Was gebaut wurde",
      featuresHeading: "Wichtigste Merkmale",
      features: [
        "Von Grund auf entwickelt — kein Template oder Page-Builder.",
        "Individuelle Cursor-Interaktionen.",
        "Scroll-gesteuerte Animationen.",
      ],
      tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      ctaHeading: "Benötigen Sie eine individuell entwickelte Website statt eines Templates?",
      ctaText: "Ich entwickle produktionsreife Websites von Grund auf mit Next.js und Astro, wenn ein Template nicht das leisten kann, was eine Marke tatsächlich braucht.",
    },

    "ai-automation": {
      metaTitle: "KI-Automatisierung zur Lead-Erfassung",
      metaDescription:
        "Ein laufendes Automatisierungsprojekt mit n8n, WhatsApp Business API und Claude-KI-Agenten zur Reduzierung des manuellen Aufwands bei der Lead-Qualifizierung für Immobilienkunden.",
      lead:
        "Ein laufendes Projekt zur Entwicklung automatisierter Workflows zur Lead-Erfassung für Immobilienkunden, aufgebaut auf n8n, WhatsApp Business API und Claude-KI-Agenten.",
      startedValue: "2025",
      focusValue: "Immobilienkunden",
      stackValue: "n8n · WhatsApp · Claude AI",
      overviewHeading: "Ein Projekt in Entwicklung, kein fertiges Produkt",
      overviewText:
        "Dies ist ein laufendes Projekt, kein abgeschlossenes Deployment. Es entwickelt automatisierte Workflows zur Lead-Erfassung — mit n8n zur Orchestrierung, WhatsApp Business API als Nachrichtenkanal und Claude-KI-Agenten zum Lesen und Klassifizieren eingehender Nachrichten — mit dem Ziel, den derzeit manuell aufgewendeten Zeitaufwand für die Lead-Qualifizierung bei Anfragen von Immobilienkunden zu reduzieren. Hier werden keine Ergebnisse veröffentlicht, da noch keine finalisiert wurden.",
      goalsTag: "Ziele",
      goalsHeading: "Woran dieses Projekt arbeitet",
      goals: [
        "Die erste Antwort auf eingehende Immobilienanfragen automatisieren, damit Leads nicht auf eine manuelle Antwort warten müssen.",
        "Claude-KI-Agenten einsetzen, um eingehende Nachrichten nach Absicht und Kaufbereitschaft zu lesen und zu klassifizieren.",
        "Qualifizierte Konversationen über n8n-Workflows an die WhatsApp Business API weiterleiten, um eine schnelle, direkte Antwort zu ermöglichen.",
        "Den Umfang der derzeit manuell durchgeführten Lead-Qualifizierung für Immobilienkunden reduzieren.",
      ],
      tools: ["n8n", "WhatsApp Business API", "Claude AI"],
      ctaHeading: "Interessiert, wohin sich das entwickelt?",
      ctaText: "Dieses Projekt befindet sich noch in der Entwicklung — melden Sie sich, wenn Sie mehr über den Ansatz erfahren oder den Fortschritt verfolgen möchten.",
    },
  },

  languageSwitcher: {
    label: "Sprache",
  },
};
