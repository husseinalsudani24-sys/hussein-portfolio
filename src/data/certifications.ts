/**
 * Every entry here corresponds to one real certificate image the user
 * provided (see public/images/certifications/raw/ for the source scans).
 * Fields are transcribed directly from what's printed on each certificate —
 * nothing here is inferred or invented. Fields the certificate doesn't
 * print (no credential ID, no verification URL, no visible date) are
 * simply omitted rather than guessed.
 *
 * category is a stable id, not display text — Certifications.astro looks
 * up the localized label via t.certifications.categories[cert.category].
 */
export type CertificationCategory =
  | "paid-media"
  | "seo"
  | "digital-marketing"
  | "ai"
  | "security"
  | "creative";

export interface Certification {
  slug: string;
  title: string;
  issuer: string;
  category: CertificationCategory;
  /** Path to the optimized WebP thumbnail/full image, relative to /public. */
  image: string;
  issueDate?: string;
  expiryDate?: string;
  credentialId?: string;
  verifyUrl?: string;
  /** Path to the original certificate file (e.g. the issuer's PDF), relative to /public. */
  file?: string;
  /** Name exactly as printed on the certificate, when it differs from the site's display name. */
  holder?: string;
  skills?: string[];
}

export const certifications: Certification[] = [
  {
    slug: "n8n-essentials-your-first-workflows",
    title: "Essentials: Your First Workflows",
    issuer: "n8n Academy",
    category: "ai",
    image: "/images/certifications/n8n-essentials-your-first-workflows.webp",
    file: "/certificates/n8n-essentials-your-first-workflows.pdf",
    issueDate: "September 9, 2026",
    holder: "HUSSEIN JAMEEL KADHIM",
  },
  {
    slug: "google-ads-display",
    title: "Google Ads Display Certification",
    issuer: "Google",
    category: "paid-media",
    image: "/images/certifications/google-ads-display.webp",
    issueDate: "May 12, 2026",
    expiryDate: "May 12, 2027",
    credentialId: "182174713",
  },
  {
    slug: "google-ads-search",
    title: "Google Ads Search Certification",
    issuer: "Google",
    category: "paid-media",
    image: "/images/certifications/google-ads-search.webp",
    issueDate: "May 11, 2026",
    expiryDate: "May 11, 2027",
    credentialId: "182123319",
  },
  {
    slug: "edraak-seo",
    title: "Search Engine Optimization",
    issuer: "Edraak",
    category: "seo",
    image: "/images/certifications/edraak-seo.webp",
    issueDate: "Feb 21, 2025",
    skills: [
      "Website & SEO Fundamentals",
      "Search Ranking Factors",
      "Google Search Results",
      "Google My Business & Local SEO",
    ],
  },
  {
    slug: "retouching-lab-mobile-photography",
    title: "Mobile Photography",
    issuer: "Retouching Lab by Victor Baz",
    category: "creative",
    image: "/images/certifications/retouching-lab-mobile-photography.webp",
    issueDate: "Dec 6, 2023",
  },
  {
    slug: "edraak-digital-advertising",
    title: "Digital Advertising — Managing Paid Campaigns",
    issuer: "Edraak",
    category: "paid-media",
    image: "/images/certifications/edraak-digital-advertising.webp",
    issueDate: "Jul 19, 2023",
    skills: [
      "E-Marketing Fundamentals",
      "Google Ads Campaign Management",
      "Search Engine Advertising",
      "Social Media Advertising (Facebook & Twitter)",
    ],
  },
  {
    slug: "edraak-cyber-security",
    title: "Cyber Security Attack Techniques",
    issuer: "Edraak",
    category: "security",
    image: "/images/certifications/edraak-cyber-security.webp",
    issueDate: "Dec 24, 2022",
    skills: ["Kali Linux", "Penetration Testing Tools", "Attack Techniques"],
  },
  {
    slug: "google-digital-marketing-fundamentals",
    title: "Fundamentals of Digital Marketing",
    issuer: "Google",
    category: "digital-marketing",
    image: "/images/certifications/google-digital-marketing-fundamentals.webp",
    issueDate: "Apr 23, 2020",
    credentialId: "3K5 E6B HWA",
  },
  {
    slug: "dubai-1-million-prompters",
    title: "1 Million Prompters — AI Prompt Engineering",
    issuer: "Dubai Future Foundation & Dubai Centre for AI",
    category: "ai",
    image: "/images/certifications/dubai-1-million-prompters.webp",
    skills: ["AI Prompt Engineering"],
  },
];
