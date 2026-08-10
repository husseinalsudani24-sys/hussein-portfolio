import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Lenis smooths the real native scroll position (not a transform-based
 * fake scroll on a wrapper div) — deliberately, since this site relies on
 * `position:fixed` for the navbar and mobile menu, which a transform-based
 * smooth-scroll implementation would break. Driven off gsap.ticker so
 * there's one shared RAF loop with the rest of the site's GSAP work,
 * rather than two competing loops.
 */

let lenis: Lenis | null = null;
let tickerFn: ((time: number) => void) | null = null;

export function destroySmoothScroll() {
  if (tickerFn) {
    gsap.ticker.remove(tickerFn);
    tickerFn = null;
  }
  lenis?.destroy();
  lenis = null;
}

export function initSmoothScroll() {
  destroySmoothScroll();

  // Smooth-scroll inertia is itself a motion effect — skip it entirely
  // under reduced motion rather than tuning it down.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    wheelMultiplier: 1,
    touchMultiplier: 1.2,
  });

  lenis.on("scroll", ScrollTrigger.update);

  tickerFn = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);
}

export function getLenis() {
  return lenis;
}
