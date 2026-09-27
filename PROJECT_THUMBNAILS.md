# Project thumbnail sourcing

Documents where each case-study cover in `src/data/portfolio.ts` (`projects[].image`)
came from, so the provenance stays auditable. No stock photos, no Google Images,
no Pinterest, no invented screenshots — every cover is either a real capture of
a verified official site, an official brand asset pulled directly from a
company's own domain, or a clearly-abstract illustration built from the
portfolio's own CSS/gradient system.

## Expandify Real Estate — real screenshot

- Official site verified: `https://www.expandify.ae/` (200, confirmed via
  Playwright — matches "Live and invest the smartest way in the UAE",
  Business Bay, Dubai real estate/company-setup platform).
- Captured: `https://www.expandify.ae/real-estates` at 1920×1080 @2x with
  Playwright (the Real Estate page — most relevant to the case study).
- Composited with the project's brand gradient wash, a bottom scrim for
  legibility, and the same grain/glass treatment as every other cover.

## Cosmedent Medical Center — abstract cover (no capture possible)

- Both known official domains were checked directly with Playwright and are
  currently non-functional, not merely slow:
  - `https://cosmedentdubai.ae/` — `net::ERR_CONNECTION_TIMED_OUT` on repeated
    attempts (45s timeout).
  - `https://cosmedentdubai.com/` — HTTP 503 "Website Temporarily Unavailable"
    on the homepage and on `/our-treatments/`.
- Per the "report, don't fabricate" rule, no screenshot was taken. The cover
  is a premium abstract gradient-mesh illustration in the project's own
  emerald/indigo brand colors with a fine clinical grid motif — no invented
  site content.

## Miled Andos Ladies Salon — official brand asset

- Official site verified: `https://miledandos.ae/` (Cloudflare bot-check
  resolves after ~5s in a real browser; page title confirms "Ladies Salon
  Business Bay Dubai | VIP Hijab Room | Miled Andos").
- Rather than crop a full-page screenshot (which pulled in nav chrome and
  unrelated promo cards), the site's own hero brand graphic was downloaded
  directly from its hosted URL: `https://miledandos.ae/wp-content/uploads/2025/10/Besame-mucho-.png`
  — their real logo + real salon photography, at native resolution.
- Framed on their own cream/gold brand palette (sampled from the live site)
  with a soft shadow — reads as a genuine brand asset, not a page crop.

## Luci Luna Beauty Salon — abstract cover (no capture possible)

- The only known domain, `https://lucilunasalon.com/`, serves a generic
  "Web Server's Default Page" at its root (title confirmed via Playwright),
  and every real subpage found in search results 404s
  (`/contact/`, `/hair-salon-luci-luna/`). The domain is not currently
  serving the salon's actual site content, despite being indexed.
- No screenshot was taken. The cover is a premium abstract gradient-mesh
  illustration in the project's pink/violet brand colors with soft organic
  (non-technical) shapes appropriate to a beauty brand.

## AI Lead-Capture Automation — abstract illustration (by design)

- Internal, in-progress automation project with no public product to
  screenshot (per the brief).
- Cover is an abstract node/flow network illustration in the project's
  amber/violet brand colors — nodes and connecting lines suggesting
  automation/data flow, no robots, brains, code, or holograms.

## Lahthaty — real screenshot (plain, not composited)

- Official site verified: `https://lahthaty.com/index.php` (HTTP 200 on
  2026-09-27; homepage headline "لحظاتي - تنظيم المناسبات والأعراس في العراق").
- Captured with Playwright (system Chrome) after every above-the-fold image
  had finished loading:
  - Desktop: 1440×900 @2x → card cover `public/images/projects/lahthaty.webp`
    (top crop, 1600×760) and gallery `public/images/projects/lahthaty/desktop.webp`
    (1600×1000).
  - Mobile: Pixel 7 emulation → gallery `public/images/projects/lahthaty/mobile.webp`
    (540 px wide).
- Unlike the other six covers, this one is the raw capture with no brand wash,
  grain or glass overlay. The client's Instagram post designs were
  deliberately not used, because they show social content rather than the
  website, SEO and tracking work this case study covers.

## Build pipeline

The six original covers share one composition system (dark scrim, brand-color wash,
film-grain texture, glass corner accent) rendered via a local HTML/CSS
template driven by Playwright at 1600×760 @2x, then encoded to WebP
(`libwebp`, quality 82) — final files are 9–53 KB each. Source assets and the
generator script are session-scratch only; the shipped output is
`public/images/projects/<slug>.webp`, referenced from
`src/data/portfolio.ts` and rendered by `src/components/ProjectCard.astro`.
