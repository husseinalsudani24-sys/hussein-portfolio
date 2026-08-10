import { gsap } from "gsap";

/**
 * A branded curtain wipe instead of Astro's default crossfade.
 *
 * The overlay element lives in BaseLayout.astro with `transition:persist`
 * — that's load-bearing, not decoration: Astro's DOM swap on navigation
 * would otherwise destroy and recreate everything in <body>, including a
 * JS-created overlay, right in the middle of the cover→reveal sequence
 * (confirmed by testing — a dynamically-created version never actually
 * became visible, since the swap wiped it before the reveal tween ran on
 * what was actually a brand-new, never-covered element). `persist` keeps
 * the exact same node alive across the swap, so one GSAP tween covers the
 * screen before it and another reveals it after.
 *
 * Covers on `astro:before-preparation` — fires the moment navigation
 * starts, before the fetch even begins — so the cover has the full
 * fetch+swap window to complete. Reveals on `astro:page-load`, once the
 * new page's own scripts have run.
 */

let initialized = false;

function getOverlay(): HTMLElement | null {
  return document.querySelector<HTMLElement>(".page-transition-overlay");
}

export function initPageTransitions() {
  if (initialized) return;
  initialized = true;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  document.addEventListener("astro:before-preparation", () => {
    const el = getOverlay();
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.set(el, { display: "block", scaleY: 0, transformOrigin: "bottom" });
    gsap.to(el, { scaleY: 1, duration: 0.5, ease: "power3.inOut" });
  });

  document.addEventListener("astro:page-load", () => {
    const el = getOverlay();
    if (!el) return;
    gsap.killTweensOf(el);
    gsap.set(el, { transformOrigin: "top" });
    gsap.to(el, {
      scaleY: 0,
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.05,
      onComplete: () => gsap.set(el, { display: "none" }),
    });
  });
}
