import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { initSmoothScroll } from "./smoothScroll";
import { initPageTransitions } from "./pageTransition";
import { initCustomCursor } from "./cursor";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Known grid/row wrapper classes whose direct children get a staggered,
// depth-cued reveal — every section using one of these shares the same
// generic treatment instead of each component needing its own animation code.
const REVEAL_GROUP_SELECTOR =
  ".cert-grid, .projects-grid, .results-grid, .skills-grid, .testimonials-grid, .tech-stack-grid, .about-right, .companies-row, .timeline";

// Section-level heading text — arrives first, as the "near" layer.
const REVEAL_INTRO_SELECTOR = ".section-tag, h2, .section-intro, h2 + p";

/**
 * Per-section scroll reveal with two layers instead of one flat block:
 * heading text settles in first (small offset, no blur — it's the plane
 * closest to the reader), then card/grid content follows with a larger
 * offset plus a soft blur-and-scale-up settle, reading as if it's arriving
 * from a plane further back. That offset + blur pairing is what gives the
 * "layered depth" the design brief asks for, rather than every element in
 * a section just fading up together as one slab.
 */
export function initScrollReveal() {
  const sections = gsap.utils.toArray<HTMLElement>("[data-reveal]");
  if (!sections.length) return;

  if (prefersReducedMotion()) {
    gsap.set(sections, { opacity: 1 });
    gsap.set(gsap.utils.toArray(`${REVEAL_GROUP_SELECTOR} > *`), {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    });
    gsap.set(gsap.utils.toArray(sections.flatMap((s) => Array.from(s.querySelectorAll(REVEAL_INTRO_SELECTOR)))), {
      opacity: 1,
      y: 0,
    });
    return;
  }

  sections.forEach((section) => {
    const intro = section.querySelectorAll<HTMLElement>(REVEAL_INTRO_SELECTOR);
    const groupItems = gsap.utils
      .toArray<HTMLElement>(REVEAL_GROUP_SELECTOR, section)
      .flatMap((group) => Array.from(group.children) as HTMLElement[]);

    const tl = gsap.timeline({
      scrollTrigger: { trigger: section, start: "top 82%", once: true },
    });

    if (intro.length) {
      tl.from(intro, { opacity: 0, y: 20, duration: 0.7, ease: "power2.out", stagger: 0.08 }, 0);
    }

    if (groupItems.length) {
      tl.from(
        groupItems,
        {
          opacity: 0,
          y: 34,
          scale: 0.94,
          filter: "blur(6px)",
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.06,
          clearProps: "filter,transform",
        },
        intro.length ? 0.15 : 0
      );
    }

    // Fallback for any section matching neither pattern above — still
    // reveal it as a single block so nothing is ever left permanently
    // hidden because it didn't fit the two known shapes.
    if (!intro.length && !groupItems.length) {
      tl.from(section, { opacity: 0, y: 24, duration: 0.7, ease: "power2.out" }, 0);
    }
  });
}

export function initCountUp() {
  const counters = gsap.utils.toArray<HTMLElement>(".count-up");
  if (!counters.length) return;

  counters.forEach((el) => {
    const target = parseFloat(el.dataset.countTo ?? "0");
    const suffix = el.dataset.suffix ?? "";
    const isDecimal = (el.dataset.countTo ?? "").includes(".");

    // Result cards (ResultsMetrics.astro) wrap their counter in a radial
    // progress ring — a purely decorative draw-in, not present on other
    // .count-up usages like the hero float cards, so this is a no-op there.
    const ring = el
      .closest(".result-ring-wrap")
      ?.querySelector<SVGCircleElement>(".result-ring-fill");

    if (prefersReducedMotion()) {
      el.textContent = `${target}${suffix}`;
      if (ring) gsap.set(ring, { strokeDashoffset: 0 });
      return;
    }

    const counter = { value: 0 };

    const run = () => {
      gsap.to(counter, {
        value: target,
        duration: 1.4,
        ease: "power3.out",
        onUpdate: () => {
          el.textContent = `${
            isDecimal ? counter.value.toFixed(1) : Math.round(counter.value)
          }${suffix}`;
        },
      });
      if (ring) {
        gsap.to(ring, { strokeDashoffset: 0, duration: 1.4, ease: "power3.out" });
      }
    };

    // Above-the-fold counters (the hero's stat row in particular, which
    // routinely sits in the bottom ~10% of the viewport at scrollY 0 —
    // below ScrollTrigger's "top 90%" line but still fully on screen) may
    // never receive a scroll event at all, so onEnter would otherwise
    // never fire. This checks whether the element is anywhere within the
    // initial viewport at init time — not the narrower 90% sub-threshold
    // used below for genuinely below-the-fold content — and runs
    // immediately rather than waiting on a scroll that might not happen.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      run();
    } else {
      ScrollTrigger.create({
        trigger: el,
        start: "top 90%",
        once: true,
        onEnter: run,
      });
    }
  });
}

/**
 * Cinematic entrance for the hero, run once on load: the background fades
 * up first like a film opening, the name reveals with a clip-path wipe
 * (a "curtain" reveal instead of a plain fade — it reads as an authority
 * statement, not just another line of copy), then everything below
 * cascades in on a fast stagger, with the portrait and its floating glass
 * cards arriving in parallel on the visual column. Order mirrors reading
 * order top-to-bottom / text-then-visual so the choreography never fights
 * the eye.
 */
export function initHeroEntrance() {
  const root = document.querySelector(".hero-wrapper");
  if (!root) return;

  const heading = root.querySelector<HTMLElement>("h1");

  if (prefersReducedMotion()) {
    // Still needs an explicit rest state: the clip-path inset below is
    // authored inline via GSAP .from(), so without this the heading would
    // otherwise never receive its final clip-path:inset(0) at all.
    if (heading) gsap.set(heading, { clipPath: "inset(0 0 0 0)" });
    return;
  }

  const bg = document.querySelector(".hero-bg");
  // onComplete, not a fixed delay: initHeroFloatCards' bob tween must not
  // start until every .from() below targeting .hero-float-card has
  // actually finished — starting it earlier would fight the entrance
  // tween's own `y` animation on the same elements. onComplete fires
  // whenever the full timeline actually finishes, however its exact
  // duration shakes out from the "-=" offsets below, so it stays correct
  // even if those durations change later.
  const tl = gsap.timeline({ defaults: { ease: "power2.out", duration: 0.8 }, onComplete: initHeroFloatCards });

  tl.from(bg, { opacity: 0, duration: 1.8, ease: "power1.out" }, 0)
    .from(
      heading,
      { clipPath: "inset(0 0 100% 0)", duration: 1, ease: "power3.inOut" },
      0.3
    )
    .from(root.querySelector(".hero-roles"), { opacity: 0, y: 20, clearProps: "transform" }, "-=0.55")
    .from(root.querySelector("p"), { opacity: 0, y: 18, clearProps: "transform" }, "-=0.6")
    .from(
      root.querySelectorAll(".hero-buttons a"),
      { opacity: 0, y: 16, stagger: 0.1, clearProps: "transform" },
      "-=0.5"
    )
    .from(
      root.querySelector(".hero-trust"),
      { opacity: 0, y: 14, clearProps: "transform" },
      "-=0.45"
    )
    .from(
      root.querySelectorAll(".hero-socials a"),
      { opacity: 0, y: 12, stagger: 0.08, clearProps: "transform" },
      "-=0.4"
    )
    .from(
      root.querySelector(".hero-portrait-card"),
      { opacity: 0, scale: 0.88, filter: "blur(12px)", duration: 1.1, ease: "power3.out", clearProps: "filter,transform" },
      0.5
    )
    .from(
      [root.querySelector(".hero-portrait-frame-a"), root.querySelector(".hero-portrait-frame-b")],
      { opacity: 0, scale: 0.7, stagger: 0.1, duration: 0.9, ease: "power3.out", clearProps: "transform" },
      0.6
    )
    .from(
      root.querySelectorAll(".hero-float-card"),
      { opacity: 0, scale: 0.75, y: 16, stagger: 0.12, duration: 0.7, ease: "back.out(1.6)" },
      "-=0.5"
    );
}

/**
 * Slow, staggered drift for the hero's foreground dust-mote layer — a
 * cheap (opacity/transform-only) depth cue independent of the background
 * video. Durations/delays are deliberately out of phase per particle so
 * they read as organic ambient atmosphere rather than a mechanical loop.
 */
export function initHeroParticles() {
  const particles = gsap.utils.toArray<HTMLElement>(".hero-particles span");
  if (!particles.length || prefersReducedMotion()) return;

  gsap.killTweensOf(particles);

  particles.forEach((particle, i) => {
    gsap.to(particle, {
      y: i % 2 === 0 ? "+=22" : "-=26",
      x: i % 3 === 0 ? "+=10" : "-=8",
      opacity: 0.15,
      duration: 5 + i * 0.8,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: i * 0.4,
    });
  });
}

/**
 * Independent slow bob for each floating glass stat card around the
 * portrait — staggered durations/offsets so they drift out of phase with
 * each other rather than moving in lockstep (reads as organic, not
 * mechanical), the same technique the hero's dust motes use one layer
 * further back. Runs after the entrance timeline settles.
 */
export function initHeroFloatCards() {
  const cards = gsap.utils.toArray<HTMLElement>(".hero-float-card");
  if (!cards.length || prefersReducedMotion()) return;

  // Below 900px the cards aren't floating at all — Hero.astro's own media
  // query switches .hero-stats to a plain static flex row there (the fix
  // for cards that used to clip their own text, or at very narrow widths
  // force real horizontal page scroll, when the same percentage-offset
  // floating positions were applied unconditionally). Bobbing a
  // `position:static` flex item wouldn't break layout (transform doesn't
  // reflow siblings) but reads as an odd wiggle in a tidy inline row
  // rather than "floating," so this simply doesn't start there.
  if (window.innerWidth < 900) return;

  // Scoped to "y" only: this runs as initHeroEntrance's onComplete, after
  // that timeline's own opacity/scale/y .from() tween on these same
  // elements has already finished — killing every tween (not just `y`)
  // here would be harmless in that ordering, but scoping it stays
  // correct even if this function is ever called before entrance settles.
  gsap.killTweensOf(cards, "y");

  cards.forEach((card, i) => {
    gsap.to(card, {
      y: i % 2 === 0 ? "+=10" : "-=12",
      duration: 3.4 + i * 0.6,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
      delay: i * 0.3,
    });
  });
}

/**
 * Mouse-reactive spotlight: eases the hero's .hero-glow radial highlight
 * toward the pointer position via CSS custom properties (not left/top —
 * animating a gradient's own position property triggers a repaint every
 * frame; animating --glow-x/--glow-y and letting the already-declared
 * radial-gradient(... at var(--glow-x) var(--glow-y) ...) pick it up is
 * the same repaint cost either way for a gradient, but keeps every other
 * tween on this page consistent about driving custom properties instead
 * of raw background-position). Desktop fine-pointer only, and skipped
 * entirely under reduced motion — the glow's static default position
 * (set in Hero.astro's CSS) is what every other context permanently sees.
 */
export function initHeroGlow() {
  if (prefersReducedMotion() || !finePointer()) return;

  const section = document.querySelector<HTMLElement>(".hero");
  const glow = document.querySelector<HTMLElement>(".hero-glow");
  if (!section || !glow) return;

  const quickX = gsap.quickTo(glow, "--glow-x", { duration: 0.9, ease: "power3.out" });
  const quickY = gsap.quickTo(glow, "--glow-y", { duration: 0.9, ease: "power3.out" });

  section.addEventListener("mousemove", (event) => {
    const rect = section.getBoundingClientRect();
    // Plain unitless numbers: Hero.astro's CSS applies the "%" via
    // calc(var(--glow-x) * 1%) at the point of use, so --glow-x/-y stay
    // numeric here — both for GSAP's quickTo typings (which infer `number`
    // for a bare custom-property key) and because an unsuffixed number
    // substituted directly into a gradient position would be invalid CSS.
    quickX(((event.clientX - rect.left) / rect.width) * 100);
    quickY(((event.clientY - rect.top) / rect.height) * 100);
  });
}

/**
 * Defers the hero background video's actual byte-loading and playback
 * until after first paint (via requestIdleCallback, so it never competes
 * with the critical text/CTA render), and respects both reduced-motion
 * and Data Saver mode by leaving the poster frame as the permanent static
 * background in either case instead of starting playback at all.
 */
export function initHeroVideo() {
  const video = document.querySelector<HTMLVideoElement>(".hero-video");
  if (!video) return;

  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  if (prefersReducedMotion() || saveData) return;

  const start = () => {
    video.preload = "auto";
    video.play().catch(() => {
      // Autoplay can still be blocked in rare browser configurations even
      // when muted — the poster frame remains a perfectly valid static
      // hero background in that case, so this is a silent no-op rather
      // than a retry loop.
    });
  };

  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(start, { timeout: 2000 });
  } else {
    setTimeout(start, 300);
  }
}

/** Subtle scroll-linked parallax on a hero's blurred background blobs. */
export function initHeroParallax() {
  const bg = document.querySelector<HTMLElement>(".hero-bg, .case-hero-bg");
  if (!bg || prefersReducedMotion()) return;

  const section = bg.closest(".hero, .case-hero") ?? bg;

  gsap.to(bg, {
    yPercent: 15,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });
}

let scrollSpyObserver: IntersectionObserver | null = null;

/**
 * Active-section indicator for the navbar: watches every section a nav link
 * points to and marks the matching link `.is-active-section` while that
 * section is the one nearest the middle of the viewport. Link hrefs are
 * locale-prefixed (e.g. "/de/#skills"), so matching is done on the hash
 * fragment rather than the full href.
 */
export function initScrollSpy() {
  scrollSpyObserver?.disconnect();

  const navLinks = gsap.utils.toArray<HTMLAnchorElement>(".nav-links a[href*='#']");
  if (!navLinks.length) return;

  const sections = navLinks
    .map((link) => {
      const hash = link.getAttribute("href")?.split("#")[1];
      const section = hash ? document.getElementById(hash) : null;
      return section ? { link, section } : null;
    })
    .filter((entry): entry is { link: HTMLAnchorElement; section: HTMLElement } => entry !== null);

  if (!sections.length) return;

  const setActive = (activeLink: HTMLAnchorElement | null) => {
    navLinks.forEach((link) => link.classList.toggle("is-active-section", link === activeLink));
  };

  scrollSpyObserver = new IntersectionObserver(
    (entries) => {
      const mostVisible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!mostVisible) return;
      const match = sections.find((entry) => entry.section === mostVisible.target);
      if (match) setActive(match.link);
    },
    { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
  );

  sections.forEach(({ section }) => scrollSpyObserver!.observe(section));
}

/** Draws the Experience timeline's progress line in as the section scrolls by. */
export function initTimelineDraw() {
  const timeline = document.querySelector<HTMLElement>(".timeline");
  if (!timeline || prefersReducedMotion()) return;

  gsap.fromTo(
    timeline,
    { "--timeline-progress": 0 },
    {
      "--timeline-progress": 1,
      ease: "none",
      scrollTrigger: {
        trigger: timeline,
        start: "top 70%",
        end: "bottom 85%",
        scrub: 0.6,
      },
    }
  );
}

/** Fills the top reading-progress bar (ReadingProgress.astro) as the page scrolls. No-op if it isn't on this page. */
export function initReadingProgress() {
  const bar = document.querySelector<HTMLElement>(".reading-progress-bar");
  if (!bar) return;

  if (prefersReducedMotion()) {
    gsap.set(bar, { scaleX: 1 });
    return;
  }

  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.body,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.3,
    },
  });
}

const finePointer = () => window.matchMedia("(pointer: fine)").matches;

/**
 * Mouse-tracked 3D tilt for every hoverable card/tile in the design system.
 * Desktop-only (fine pointer) and skipped entirely under reduced motion —
 * the CSS hover lift/glow already defined in global.css remains the
 * baseline for touch devices and no-JS fallback.
 */
export function initCardTilt() {
  if (prefersReducedMotion() || !finePointer()) return;

  const cards = gsap.utils.toArray<HTMLElement>(
    ".project-card, .info-card, .stat-card, .gallery-item"
  );
  if (!cards.length) return;

  cards.forEach((card) => {
    gsap.set(card, { transformPerspective: 800, transformOrigin: "center" });

    const quickY = gsap.quickTo(card, "y", { duration: 0.4, ease: "power2.out" });
    const quickRotateX = gsap.quickTo(card, "rotationX", { duration: 0.4, ease: "power2.out" });
    const quickRotateY = gsap.quickTo(card, "rotationY", { duration: 0.4, ease: "power2.out" });

    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const px = (event.clientX - rect.left) / rect.width - 0.5;
      const py = (event.clientY - rect.top) / rect.height - 0.5;
      quickRotateX(py * -6);
      quickRotateY(px * 6);
      quickY(-8);
    });

    card.addEventListener("mouseleave", () => {
      quickRotateX(0);
      quickRotateY(0);
      quickY(0);
    });
  });
}

/**
 * Subtle cursor-following parallax on the hero's foreground content —
 * shifts opposite the blob background for a light sense of depth.
 */
export function initMouseParallax() {
  if (prefersReducedMotion() || !finePointer()) return;

  const root = document.querySelector<HTMLElement>(".hero-wrapper, .case-hero-wrapper");
  const section = root?.closest(".hero, .case-hero");
  if (!root || !section) return;

  const quickX = gsap.quickTo(root, "x", { duration: 0.6, ease: "power3.out" });
  const quickY = gsap.quickTo(root, "y", { duration: 0.6, ease: "power3.out" });

  section.addEventListener("mousemove", (event) => {
    const rect = section.getBoundingClientRect();
    const mouseEvent = event as MouseEvent;
    const px = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
    const py = (mouseEvent.clientY - rect.top) / rect.height - 0.5;
    quickX(px * -12);
    quickY(py * -12);
  });

  section.addEventListener("mouseleave", () => {
    quickX(0);
    quickY(0);
  });
}

/**
 * Mouse-tracked 3D tilt for the hero's portrait card — a second, faster
 * plane of motion layered on top of initMouseParallax's slower whole-column
 * shift, which is what actually produces "layered depth" (background
 * video parallax on scroll + wrapper drift on mouse + portrait tilting
 * independently, three planes each moving differently) rather than
 * everything on screen sliding as one flat slab. Desktop fine-pointer only,
 * skipped under reduced motion; the glass frames behind the portrait ride
 * along with it since they're transform:rotate() siblings, not children,
 * of the tilted element — see .hero-portrait-frame-a/-b in Hero.astro,
 * which sit at z-index:-1 within the same tilted stacking context.
 */
export function initHeroPortraitTilt() {
  if (prefersReducedMotion() || !finePointer()) return;

  const section = document.querySelector<HTMLElement>(".hero");
  const card = document.querySelector<HTMLElement>(".hero-portrait-card");
  if (!section || !card) return;

  // Matches initCardTilt's setup below: GSAP's rotationX/rotationY need
  // transformPerspective set as a GSAP-driven property on the element
  // itself to render with correct depth — the CSS `perspective` on this
  // same element (Hero.astro) sets up the 3D context for its children
  // (the glass frame siblings) but doesn't substitute for this.
  gsap.set(card, { transformPerspective: 800, transformOrigin: "center" });

  const quickRotateX = gsap.quickTo(card, "rotationX", { duration: 0.6, ease: "power3.out" });
  const quickRotateY = gsap.quickTo(card, "rotationY", { duration: 0.6, ease: "power3.out" });

  section.addEventListener("mousemove", (event) => {
    const rect = section.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    quickRotateX(py * -8);
    quickRotateY(px * 8);
  });

  section.addEventListener("mouseleave", () => {
    quickRotateX(0);
    quickRotateY(0);
  });
}

let pageLoadListenerAttached = false;

/**
 * Single entry point every page calls. Astro's ClientRouter swaps the DOM
 * on every navigation but does not reload the document, so a bare top-level
 * call here would only ever run once per session (and, since this exact
 * script is shared byte-for-byte across pages, Astro's script dedupe skips
 * re-inserting it entirely on top of that). Both problems are solved by
 * doing the real work inside an `astro:page-load` listener instead: that
 * event fires on the initial load *and* every subsequent navigation, and
 * the `addEventListener` registration below only needs to happen once —
 * the module-level guard just prevents attaching the same listener twice
 * if this function is ever called more than once per page.
 */
export function initPageAnimations() {
  if (pageLoadListenerAttached) return;
  pageLoadListenerAttached = true;

  // Registers its own astro:before-preparation / astro:page-load listeners
  // exactly once — unlike everything else below, it must NOT re-run per
  // navigation, or the curtain overlay would double-animate.
  initPageTransitions();

  document.addEventListener("astro:page-load", () => {
    // Kill triggers left over from the previous page's (now-removed) DOM
    // before creating this page's — otherwise they accumulate every
    // navigation, each one dead-checking detached elements forever.
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    initSmoothScroll();
    initCustomCursor();
    initHeroEntrance();
    initHeroParticles();
    initHeroGlow();
    initHeroPortraitTilt();
    initHeroVideo();
    initHeroParallax();
    initMouseParallax();
    initScrollReveal();
    initCountUp();
    initCardTilt();
    initTimelineDraw();
    initReadingProgress();
    initScrollSpy();
  });
}
