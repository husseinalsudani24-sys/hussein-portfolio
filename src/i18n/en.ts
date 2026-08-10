/**
 * English (default locale). This file is the structural source of truth —
 * ar.ts and de.ts must satisfy the same `Translation` type. Every visible
 * UI string, including CV-derived content (results, experience, skills,
 * certifications, project copy and case studies), lives in the three
 * locale dictionaries so translations stay centralized here rather than
 * scattered across components and pages. src/data/portfolio.ts stays
 * language-neutral: slugs, links, images, gradients, dates and numbers only.
 *
 * Note: this file intentionally has no `as const`. With `as const`, every
 * string/array here would be locked to its exact literal value in the
 * `Translation` type, and ar.ts/de.ts — which must satisfy that type —
 * would be unable to contain any different text without a type error.
 */
export const en = {
  meta: {
    home: {
      title: "Hussein Al Sudani | AI Automation Architect",
      description:
        "AI Automation Architect, SEO Strategist and Performance Marketing specialist based in Dubai, UAE.",
    },
    projects: {
      title: "Projects",
      description:
        "A collection of AI automation systems, SEO strategies and performance marketing campaigns built to help businesses scale faster.",
    },
  },

  nav: {
    about: "About",
    projects: "Projects",
    skills: "Skills",
    experience: "Experience",
    contact: "Contact",
    toggleMenu: "Toggle navigation menu",
  },

  hero: {
    description:
      "Building AI Automation Systems, SEO Strategies and Performance Marketing that help businesses scale faster.",
    viewProjects: "View Projects",
    downloadCv: "Download CV",
    contactMe: "Contact Me",
    statYears: "Years",
    statProjects: "Projects",
    statAutomations: "Automations",
    // Parallel to portfolio.personal.roles, same order.
    roles: ["AI Automation Architect", "SEO Strategist", "Performance Marketing Specialist"],
  },

  companies: {
    label: "Trusted by real estate, medical and beauty brands in Dubai",
    // Parallel to portfolio.companies, same order:
    // Expandify Real Estate, Cosmedent Medical Center, Miled Andos Ladies Salon,
    // Luci Luna Beauty Salon.
    roles: [
      "Social Media & Digital Marketing Manager",
      "Website & SEO Specialist",
      "Digital Marketing Manager",
      "Digital Marketing Manager",
    ],
  },

  about: {
    tag: "About Me",
    heading: "Building Growth Through AI & Strategy",
    paragraph1:
      "I'm Hussein Al Sudani, an AI Automation Architect, SEO Strategist, and Performance Marketing Specialist based in Dubai.",
    paragraph2:
      "I build AI workflows, SEO systems, high-converting marketing funnels, and scalable digital solutions for modern businesses.",
    statYearsLabel: "Years Experience",
    statProjectsLabel: "Projects Delivered",
    statAutomationsLabel: "AI Automations",
    statSeoLabel: "Performance Expert",
  },

  results: {
    tag: "Track Record",
    heading: "Results & Metrics",
    intro: "Verified outcomes pulled directly from real client engagements — not projections.",
    // Parallel to portfolio.results, same order.
    labels: [
      "Organic traffic growth (Miled Andos)",
      "Instagram followers built from 0 (Luci Luna)",
      "Real estate Instagram growth (Expandify)",
      "Organic click increase (Cosmedent)",
      "Lead-generation lift (Luci Luna)",
      "Page Google rankings, up from page 3",
    ],
  },

  projectsSection: {
    tag: "Featured Work",
    heading: "Selected Case Studies",
  },

  techStack: {
    tag: "Toolkit",
    heading: "Tech Stack",
    intro: "The platforms and languages behind every automation, campaign and build.",
  },

  skills: {
    tag: "Expertise",
    heading: "Core Skills & Technologies",
    items: [
      {
        title: "AI Automation",
        description: "n8n • Claude AI Agents • WhatsApp Business API • Workflow Automation",
      },
      {
        title: "SEO",
        description: "Technical SEO • Local SEO • Schema Markup • Domain Migration",
      },
      {
        title: "Performance Marketing",
        description: "Google Ads • Meta Ads & Retargeting • Facebook Pixel • CPL Reduction",
      },
      {
        title: "Social & Content",
        description: "Instagram Growth (0→21.7K) • Content Strategy • TikTok • YouTube",
      },
      {
        title: "Development",
        description: "Next.js • TypeScript • Tailwind CSS • WordPress • Astro",
      },
      {
        title: "Analytics",
        description: "GA4 • Search Console • Conversion Tracking • Funnel Analysis",
      },
    ],
  },

  experience: {
    tag: "Experience",
    heading: "Professional Journey",
    jobs: [
      {
        date: "Jan 2026 — Present",
        title: "Social Media & Digital Marketing Manager",
        company: "Expandify Real Estate, Dubai, UAE",
        points: [
          "Scaled brand Instagram from 30 to 669+ followers (+2,130%) via a structured organic growth and Instagram SEO strategy.",
          "Directed multi-platform content expansion across Instagram, YouTube, Pinterest and Facebook, publishing 90+ branded assets.",
          "Managed Meta Ads for the Dubai luxury real estate market and engineered Facebook Pixel retargeting infrastructure from scratch.",
        ],
      },
      {
        date: "Mar 2025 — Apr 2025",
        title: "Website & SEO Specialist",
        company: "Cosmedent Medical Center, Dubai, UAE",
        points: [
          "Executed a full domain migration (.com → .ae) with zero organic ranking loss, managing WordPress, redirects and reindexing.",
          "Advanced competitive keywords from page 3 to page 1 — \"dentist in Dubai\" #28 → #8, \"dental clinic Dubai\" #31 → #9.",
          "Grew organic clicks by 142% and impressions by 186% within 6 months, verified in Google Search Console.",
        ],
      },
      {
        date: "Feb 2024 — Present",
        title: "Digital Marketing Manager",
        company: "Miled Andos Ladies Salon, Dubai, UAE",
        points: [
          "Built a custom WordPress site and executed a domain migration (.com → .ae) with a complete local SEO strategy.",
          "Secured #1 Google rankings for core brand keywords and top-10 rankings for \"salon in Dubai\" and \"beauty salon in Dubai.\"",
          "Increased organic clicks by 127% and impressions by 212% in 6 months, directly driving appointment bookings.",
        ],
      },
      {
        date: "Sep 2023 — Sep 2024",
        title: "Digital Marketing Manager",
        company: "Luci Luna Beauty Salon, Dubai, UAE",
        points: [
          "Grew the salon's Instagram from 0 to 21,700+ followers through premium brand identity, content pillars and Reels.",
          "Managed Meta Ads and Google Ads campaigns, delivering a 30% increase in lead generation via segmentation and budget optimisation.",
          "Applied GA4 to analyse user behaviour and funnel drop-offs, refining targeting and landing pages to lift conversion rate.",
        ],
      },
    ],
  },

  certifications: {
    tag: "Credentials",
    heading: "Certifications",
    intro: "Formal training and certification across paid media, SEO, AI, security and creative tooling.",
    viewFull: "View Full Certificate",
    verify: "Verify Credential",
    issued: "Issued",
    expires: "Expires",
    credentialId: "Credential ID",
    skillsCovered: "Skills covered",
    close: "Close",
    // Category ids from src/data/certifications.ts, mapped to display labels.
    categories: {
      "paid-media": "Paid Media",
      seo: "SEO",
      "digital-marketing": "Digital Marketing",
      ai: "AI",
      security: "Security",
      creative: "Creative",
    },
  },

  testimonials: {
    tag: "Testimonials",
    heading: "What Clients Say",
  },

  contact: {
    tag: "Contact",
    heading: "Let's Build Something Great",
    description:
      "I'm available for AI Automation, SEO, Performance Marketing, and Web Development projects worldwide.",
    emailMe: "Email Me",
    callMe: "Call Me",
    linkedin: "LinkedIn",
    downloadCv: "Download CV",
  },

  footer: {
    ctaHeading: "Have a project in mind?",
    ctaButton: "Let's Talk",
    tagline: "AI Automation Architect • SEO Strategist • Performance Marketing",
    linkAbout: "About",
    linkProjects: "Projects",
    linkSkills: "Skills",
    linkContact: "Contact",
    rightsReserved: "All rights reserved.",
  },

  projectCard: {
    viewCaseStudy: "View Case Study",
  },

  projectsPage: {
    badge: "Portfolio",
    heading: "Selected Projects",
    intro:
      "A collection of AI automation systems, SEO strategies and performance marketing campaigns built to help businesses scale faster.",
  },

  // Parallel to portfolio.projects, keyed by slug. category/description/tags
  // here are what every ProjectCard and case-study badge display — the
  // fields on portfolio.ts itself are the English-only structural fallback.
  // Technology/product names inside tags (Next.js, Meta Ads, Claude AI, …)
  // are deliberately left as-is in every locale.
  projectsData: {
    "expandify-real-estate": {
      category: "Social Media & Digital Marketing",
      description:
        "Social media and Meta Ads management for a Dubai luxury real estate brand — Instagram growth, multi-platform content and retargeting infrastructure built from scratch.",
      tags: ["Instagram Growth", "Meta Ads", "Facebook Pixel"],
    },
    cosmedent: {
      category: "Website & SEO Specialist",
      description:
        "A technical SEO engagement for a Dubai cosmetic dentistry practice — domain migration, keyword recovery and measurable organic growth verified in Search Console.",
      tags: ["Technical SEO", "Domain Migration", "WordPress"],
    },
    "miled-andos": {
      category: "Digital Marketing Manager",
      description:
        "Local SEO and a website rebuild for a Dubai beauty salon — custom WordPress build, domain migration and #1 Google rankings for core keywords.",
      tags: ["Local SEO", "WordPress", "Domain Migration"],
    },
    "luci-luna": {
      category: "Digital Marketing Manager",
      description:
        "Social media growth and paid media management for a Dubai beauty salon — Instagram built from 0 to 21,700+ followers alongside a 30% lift in lead generation.",
      tags: ["Instagram Growth", "Meta Ads", "Google Ads"],
    },
    "ardon-group": {
      category: "Web Development",
      description:
        "A luxury real estate website built from scratch in Next.js, TypeScript and Tailwind CSS, with custom cursor interactions and scroll-driven animations.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    "ai-automation": {
      category: "AI Automation — In Progress",
      description:
        "An in-progress automation project using n8n, WhatsApp Business API and Claude AI agents to reduce manual lead-qualification time for real estate clients.",
      tags: ["n8n", "WhatsApp Business API", "Claude AI"],
    },
  },

  caseStudy: {
    backToProjects: "Back to Projects",
    caseStudyBadge: "Case Study",
    overviewTag: "Overview",
    responsibilitiesTag: "Responsibilities",
    galleryTag: "Gallery",
    galleryHeading: "A Look at the Work",
    nextStepTag: "Next Step",
    startConversation: "Start a Conversation",
    viewMoreCaseStudies: "View More Case Studies",
    roleLabel: "Role",
    clientLabel: "Client",
    locationLabel: "Location",
    durationLabel: "Duration",
    yearLabel: "Year",
    stackLabel: "Stack",
    statusLabel: "Status",
    startedLabel: "Started",
    focusLabel: "Focus",
    toolsTag: "Tools",
    techStackTag: "Tech Stack",
    whatWasUsedHeading: "What Was Used",
    technologiesHeading: "Technologies",
    inDevelopment: "In Development",
    dubaiUae: "Dubai, UAE",
    present: "Present",
  },

  // Bespoke, per-project case-study copy. Fields not needed by a given
  // project's page (e.g. ai-automation has no gallery) are simply omitted.
  caseStudies: {
    "expandify-real-estate": {
      metaTitle: "Expandify Real Estate Case Study",
      metaDescription:
        "Social media and Meta Ads management for Expandify Real Estate — Instagram growth, multi-platform content and retargeting infrastructure built from scratch.",
      lead:
        "Social Media & Digital Marketing Manager for a Dubai luxury real estate brand — growing Instagram from the ground up, expanding content across four platforms, and building the Meta Ads and retargeting infrastructure behind it.",
      roleValue: "Social Media & Digital Marketing Manager",
      durationValue: `Jan 2026 — Present`,
      heroStats: [
        { label: "Instagram follower growth (30 → 669+)" },
        { label: "Branded content assets published" },
        { label: "Platforms managed" },
      ],
      overviewHeading: "Growing a Real Estate Brand's Digital Presence",
      overviewText:
        "As Social Media & Digital Marketing Manager at Expandify Real Estate, I own the brand's organic and paid social presence — growing Instagram from a near-zero base, expanding content across Instagram, YouTube, Pinterest and Facebook, and building the paid media and tracking infrastructure that supports the brand's Meta Ads campaigns in the Dubai luxury real estate market.",
      responsibilitiesHeading: "What This Role Covers",
      responsibilities: [
        "Scaled the brand's Instagram from 30 to 669+ followers (+2,130%) through a structured organic growth and Instagram SEO strategy.",
        "Directed multi-platform content expansion across Instagram, YouTube, Pinterest and Facebook, publishing 90+ branded assets.",
        "Managed Meta Ads campaigns for the Dubai luxury real estate market, sustaining a low cost per lead while increasing qualified lead volume.",
        "Engineered Facebook Pixel and website retargeting infrastructure from scratch, enabling warm retargeting funnels for buyers.",
        "Produced luxury property walkthrough video content and delivered weekly ROI and performance reports to senior stakeholders.",
      ],
      channelsTag: "Channels & Tools",
      channelsHeading: "Where the Work Happens",
      galleryIntro: "Full screenshots are being prepared for publication as this engagement continues.",
      gallery: [
        { label: "Instagram content strategy" },
        { label: "Meta Ads campaign structure" },
        { label: "Facebook Pixel & retargeting setup" },
      ],
      ctaHeading: "Have a Similar Growth Challenge?",
      ctaText:
        "I manage social media growth, content and paid media for businesses that need their digital presence built from the ground up.",
    },

    cosmedent: {
      metaTitle: "Cosmedent Case Study",
      metaDescription:
        "A technical SEO engagement for Cosmedent Medical Center — domain migration, keyword recovery and organic growth verified in Google Search Console.",
      lead:
        "Website & SEO Specialist for a Dubai cosmetic dentistry practice — a full domain migration with zero ranking loss, followed by measurable organic growth verified in Google Search Console.",
      roleValue: "Website & SEO Specialist",
      durationValue: "Mar 2025 — Apr 2025",
      heroStats: [
        { label: "Organic click growth" },
        { label: "Organic impression growth" },
      ],
      keywordRankingsExtraStat: {
        value: "Page 3 → Page 1",
        label: "Keyword rankings, verified in Search Console",
      },
      overviewHeading: "A Domain Migration Without Losing Ranking Ground",
      overviewText:
        "Cosmedent needed to move from a .com to a .ae domain without losing the search visibility it had already built. The engagement covered the technical migration itself — redirects, reindexing and a WordPress rebuild — followed by a technical SEO audit and keyword recovery work, with results tracked directly in Google Search Console.",
      responsibilitiesHeading: "What This Engagement Covered",
      responsibilities: [
        "Executed a full domain migration (.com → .ae) with zero organic ranking loss, managing WordPress, redirects and reindexing.",
        "Advanced competitive keywords from page 3 to page 1 of Google search results.",
        "Grew organic clicks by 142% and impressions by 186% within 6 months, verified in Google Search Console.",
        "Delivered a technical SEO audit covering meta optimisation, internal linking and mobile responsiveness across key pages.",
      ],
      keywordRankingsTag: "Keyword Rankings",
      keywordRankingsHeading: "Verified Position Changes",
      keywordShifts: [
        { keyword: "“dentist in Dubai”" },
        { keyword: "“dental clinic Dubai”" },
      ],
      tools: ["WordPress", "Google Search Console", "Schema.org", "Technical SEO Audit"],
      galleryIntro: "Full screenshots are being prepared for publication.",
      gallery: [
        { label: "Domain migration & redirect mapping" },
        { label: "Search Console performance report" },
      ],
      ctaHeading: "Need a Site Migration Without the Ranking Risk?",
      ctaText: "I handle technical SEO and domain migrations with search visibility as the priority, not an afterthought.",
    },

    "miled-andos": {
      metaTitle: "Miled Andos Case Study",
      metaDescription:
        "Local SEO and a website rebuild for Miled Andos Ladies Salon — custom WordPress build, domain migration and #1 Google rankings for core keywords.",
      lead:
        "Digital Marketing Manager for a Dubai beauty salon — a custom WordPress rebuild, a domain migration and a local SEO strategy that took the brand to #1 for its core keywords.",
      roleValue: "Digital Marketing Manager",
      durationValue: "Feb 2024 — Present",
      heroStats: [
        { label: "Organic click growth" },
        { label: "Organic impression growth" },
      ],
      keywordRankingsExtraStat: {
        value: "#1",
        label: "Google ranking for core brand keywords",
      },
      overviewHeading: "A Local SEO Rebuild From the Ground Up",
      overviewText:
        "Miled Andos needed a website it could actually manage and a local search presence strong enough to compete for its core Dubai search terms. The engagement covered a custom WordPress build, a domain migration to .ae, and an ongoing local SEO strategy — plus the social content and community management that keeps the growth going.",
      responsibilitiesHeading: "What This Role Covers",
      responsibilities: [
        "Built a custom WordPress website and executed a domain migration (.com → .ae) with a complete local SEO strategy.",
        "Secured #1 Google rankings for core brand keywords and top-10 rankings for “salon in Dubai” and “beauty salon in Dubai.”",
        "Increased organic clicks by 127% and impressions by 212% in 6 months, directly driving appointment bookings.",
        "Maintain ongoing SEO, social content calendars and community management to sustain brand growth and loyalty.",
      ],
      rankingsTag: "Rankings",
      rankingsHeading: "Verified Google Positions",
      rankings: [
        { keyword: "Core brand keywords", position: "#1" },
        { keyword: "“salon in Dubai”", position: "Top 10" },
        { keyword: "“beauty salon in Dubai”", position: "Top 10" },
      ],
      tools: ["WordPress", "Local SEO", "Domain Migration", "Google Search Console"],
      galleryIntro: "Full screenshots are being prepared for publication.",
      gallery: [
        { label: "Custom WordPress rebuild" },
        { label: "Local SEO & rankings report" },
      ],
      ctaHeading: "Need a Local Business to Rank Where It Matters?",
      ctaText:
        "I build and manage local SEO strategies for businesses that need to own their local search results, not just show up in them.",
    },

    "luci-luna": {
      metaTitle: "Luci Luna Beauty Salon Case Study",
      metaDescription:
        "Social media growth and paid media management for Luci Luna Beauty Salon — Instagram built from 0 to 21,700+ followers and a 30% lift in lead generation.",
      lead:
        "Digital Marketing Manager for a Dubai beauty salon — building an Instagram presence from zero and running the paid media and analytics behind a measurable lift in leads.",
      roleValue: "Digital Marketing Manager",
      durationValue: "Sep 2023 — Sep 2024",
      heroStats: [
        { label: "Instagram followers, built from 0" },
        { label: "Lead-generation increase" },
        { label: "Months on the account" },
      ],
      overviewHeading: "Building a Following and a Funnel From Zero",
      overviewText:
        "Luci Luna had no meaningful Instagram presence when this engagement started. Over twelve months, the account grew a premium brand identity and content system from scratch, while Meta and Google Ads campaigns — backed by GA4 analysis of user behaviour and funnel drop-offs — turned that growing audience into a measurable increase in leads.",
      responsibilitiesHeading: "What This Role Covered",
      responsibilities: [
        "Grew the salon's Instagram from 0 to 21,700+ followers through premium brand identity, content pillars and Reels.",
        "Managed Meta Ads and Google Ads campaigns, delivering a 30% increase in lead generation via segmentation and budget optimisation.",
        "Applied GA4 to analyse user behaviour and funnel drop-offs, refining targeting and landing pages to lift conversion rate.",
        "Owned website UX, media library and brand consistency across all digital channels.",
      ],
      tools: ["Instagram", "Meta Ads", "Google Ads", "Google Analytics 4"],
      galleryIntro: "Full screenshots are being prepared for publication.",
      gallery: [
        { label: "Instagram brand identity & Reels" },
        { label: "Meta & Google Ads campaign structure" },
      ],
      ctaHeading: "Starting a Social Presence From Zero?",
      ctaText:
        "I build brand identity, content systems and paid media strategy for businesses that need to grow an audience from the ground up.",
    },

    "ardon-group": {
      metaTitle: "Ardon Group Case Study",
      metaDescription:
        "A luxury real estate website built from scratch in Next.js, TypeScript and Tailwind CSS, with custom cursor interactions and scroll-driven animations.",
      lead:
        "A luxury real estate website built from scratch — no template, no page builder — in Next.js, TypeScript and Tailwind CSS.",
      roleValue: "Web Developer",
      yearValue: "2026",
      stackValue: "Next.js · TypeScript · Tailwind CSS",
      overviewHeading: "A Custom Build, Not a Template",
      overviewText:
        "A luxury real estate website built entirely from scratch in Next.js, TypeScript and Tailwind CSS — including custom cursor interactions and scroll-driven animations, rather than assembled from an existing template or page builder.",
      featuresTag: "What Was Built",
      featuresHeading: "Key Features",
      features: [
        "Built from scratch — no template or page builder.",
        "Custom cursor interactions.",
        "Scroll-driven animations.",
      ],
      tools: ["Next.js", "TypeScript", "Tailwind CSS"],
      ctaHeading: "Need a Custom-Built Site, Not a Template?",
      ctaText: "I build production websites from scratch in Next.js and Astro when a template can't deliver what a brand actually needs.",
    },

    "ai-automation": {
      metaTitle: "AI Lead-Capture Automation",
      metaDescription:
        "An in-progress automation project using n8n, WhatsApp Business API and Claude AI agents to reduce manual lead-qualification time for real estate clients.",
      lead:
        "An in-progress project designing automated lead-capture workflows for real estate clients, built on n8n, WhatsApp Business API and Claude AI agents.",
      startedValue: "2025",
      focusValue: "Real Estate Clients",
      stackValue: "n8n · WhatsApp · Claude AI",
      overviewHeading: "A Project in Progress, Not a Finished Product",
      overviewText:
        "This is an ongoing project, not a completed deployment. It's designing automated lead-capture workflows — using n8n for orchestration, WhatsApp Business API as the messaging channel, and Claude AI agents to read and classify inbound messages — with the goal of cutting down the manual lead-qualification time currently spent handling inquiries for real estate clients by hand. No results are published here because none have been finalized yet.",
      goalsTag: "Goals",
      goalsHeading: "What This Project Is Working Toward",
      goals: [
        "Automate the first response to inbound real estate inquiries so leads aren't left waiting on a manual reply.",
        "Use Claude AI agents to read and classify incoming messages by intent and readiness.",
        "Route qualified conversations through n8n workflows into WhatsApp Business API for a fast, direct reply.",
        "Reduce the amount of manual lead-qualification work currently done by hand for real estate clients.",
      ],
      tools: ["n8n", "WhatsApp Business API", "Claude AI"],
      ctaHeading: "Interested in Where This Is Headed?",
      ctaText: "This project is still in development — reach out if you'd like to hear more about the approach or follow its progress.",
    },
  },

  languageSwitcher: {
    label: "Language",
  },
};

export type Translation = typeof en;
