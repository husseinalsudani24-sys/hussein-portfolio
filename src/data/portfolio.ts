export const portfolio = {
  personal: {
    name: "Hussein Al Sudani",
    title: "AI Automation Architect",
    roles: ["AI Automation Architect", "SEO Strategist", "Performance Marketing Specialist"],
    location: "Dubai, UAE",
    email: "husseinalsudani24@gmail.com",
    phone: "+971524900556",
    website: "https://yourwebsite.com",
    linkedin: "https://www.linkedin.com/in/hussein-al-sudani-1a37a52b6/",
    github: "https://github.com/husseinalsudani24-sys",
    // Used across the site, rendered inside a CSS circular frame (see
    // Portrait.astro) — plain rectangular source, no baked-in crop.
    photo: "/images/profile.webp",
    // Used for og:image / twitter:image only. Social platforms render the
    // raw file with no site CSS, so this version has the circular crop and
    // purple glow baked in against the site's background color, and stays
    // JPEG for broader crawler/platform compatibility than WebP.
    ogImage: "/images/profile.jpg",
    cv: "/cv/hussein-al-sudani-cv.pdf",
  },

  hero: {
    headline: "Building Growth with AI, SEO & Automation",
    subtitle: "AI Automation • SEO • Performance Marketing • Web Development",
  },

  // Real clients from the CV's Professional Experience section.
  companies: [
    { name: "Expandify Real Estate", role: "Social Media & Digital Marketing Manager" },
    { name: "Cosmedent Medical Center", role: "Website & SEO Specialist" },
    { name: "Miled Andos Ladies Salon", role: "Digital Marketing Manager" },
    { name: "Luci Luna Beauty Salon", role: "Digital Marketing Manager" },
  ],

  // "Key Results at a Glance" from the CV — verified, not illustrative.
  results: [
    { value: "212", suffix: "%", label: "Organic traffic growth (Miled Andos)" },
    { value: "21.7", suffix: "K+", label: "Instagram followers built from 0 (Luci Luna)" },
    { value: "2130", suffix: "%", label: "Real estate Instagram growth (Expandify)" },
    { value: "142", suffix: "%", label: "Organic click increase (Cosmedent)" },
    { value: "30", suffix: "%", label: "Lead-generation lift (Luci Luna)" },
    { value: "1", suffix: "st", label: "Page Google rankings, up from page 3" },
  ],

  // Certifications now live in src/data/certifications.ts, transcribed
  // directly from the real certificate scans (title, issuer, dates,
  // credential IDs, skills) instead of this CV-derived summary list.

  // Populate once real client quotes are provided — Testimonials.astro
  // renders nothing at all when this is empty, rather than showing
  // placeholder/invented quotes.
  testimonials: [] as { quote: string; name: string; role: string; company: string }[],

  // Every project below corresponds to one real, named engagement from the
  // CV. No case study exists here for work that isn't independently
  // verifiable against it.
  projects: [
    {
      slug: "expandify-real-estate",
      category: "Social Media & Digital Marketing",
      title: "Expandify Real Estate",
      description:
        "Social media and Meta Ads management for a Dubai luxury real estate brand — Instagram growth, multi-platform content and retargeting infrastructure built from scratch.",
      tags: ["Instagram Growth", "Meta Ads", "Facebook Pixel"],
      gradient: "linear-gradient(135deg,#8b5cf6,#4f46e5)",
      // Real screenshot of expandify.ae's Real Estate page, composited with
      // the brand's own gradient wash — see PROJECT_THUMBNAILS.md.
      image: "/images/projects/expandify-real-estate.webp",
    },
    {
      slug: "cosmedent",
      category: "Website & SEO Specialist",
      title: "Cosmedent Medical Center",
      description:
        "A technical SEO engagement for a Dubai cosmetic dentistry practice — domain migration, keyword recovery and measurable organic growth verified in Search Console.",
      tags: ["Technical SEO", "Domain Migration", "WordPress"],
      gradient: "linear-gradient(135deg,#10b981,#4f46e5)",
      // No live website to capture (both cosmedentdubai.ae and .com are
      // currently down — verified, not fabricated) — premium abstract
      // cover in the brand's emerald/indigo instead. See PROJECT_THUMBNAILS.md.
      image: "/images/projects/cosmedent.webp",
    },
    {
      slug: "miled-andos",
      category: "Digital Marketing Manager",
      title: "Miled Andos Ladies Salon",
      description:
        "Local SEO and a website rebuild for a Dubai beauty salon — custom WordPress build, domain migration and #1 Google rankings for core keywords.",
      tags: ["Local SEO", "WordPress", "Domain Migration"],
      gradient: "linear-gradient(135deg,#06b6d4,#4f46e5)",
      // Their own official hero brand graphic (logo + photography), pulled
      // directly from miledandos.ae and framed on their cream/gold palette.
      image: "/images/projects/miled-andos.webp",
    },
    {
      slug: "luci-luna",
      category: "Digital Marketing Manager",
      title: "Luci Luna Beauty Salon",
      description:
        "Social media growth and paid media management for a Dubai beauty salon — Instagram built from 0 to 21,700+ followers alongside a 30% lift in lead generation.",
      tags: ["Instagram Growth", "Meta Ads", "Google Ads"],
      gradient: "linear-gradient(135deg,#ec4899,#8b5cf6)",
      // No live website to capture (lucilunasalon.com serves a default
      // host page at root and 404s on every real subpage — verified, not
      // fabricated) — premium abstract cover instead. See PROJECT_THUMBNAILS.md.
      image: "/images/projects/luci-luna.webp",
    },
    {
      slug: "ardon-group",
      category: "Web Development",
      title: "Ardon Group",
      description:
        "A luxury real estate website built from scratch in Next.js, TypeScript and Tailwind CSS, with custom cursor interactions and scroll-driven animations.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "linear-gradient(135deg,#8b5cf6,#06b6d4)",
      // No official website could be verified for this client — premium
      // abstract cover instead. See PROJECT_THUMBNAILS.md.
      image: "/images/projects/ardon-group.webp",
    },
    {
      slug: "ai-automation",
      category: "AI Automation — In Progress",
      title: "AI Lead-Capture Automation",
      description:
        "An in-progress automation project using n8n, WhatsApp Business API and Claude AI agents to reduce manual lead-qualification time for real estate clients.",
      tags: ["n8n", "WhatsApp Business API", "Claude AI"],
      gradient: "linear-gradient(135deg,#f59e0b,#8b5cf6)",
      // No product to screenshot (in-progress internal automation) —
      // abstract node/flow illustration in the site's own visual language.
      image: "/images/projects/ai-automation.webp",
    },
  ],
};
