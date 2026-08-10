import { gsap } from "gsap";

/**
 * Two-part custom cursor (small dot + lagging ring) plus a magnetic pull
 * on buttons/cards. Fine-pointer, non-reduced-motion only — this never
 * runs on touch devices, so there's no fallback tap-target concern.
 *
 * Re-initialized on every astro:page-load (elements it binds to are
 * replaced by Astro's DOM swap); listeners are torn down first so they
 * never double up across navigations.
 */

let teardown: (() => void) | null = null;

export function initCustomCursor() {
  teardown?.();
  teardown = null;

  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!finePointer || reducedMotion) {
    document.body.classList.remove("has-custom-cursor");
    return;
  }

  document.body.classList.add("has-custom-cursor");

  let dot = document.querySelector<HTMLElement>(".custom-cursor");
  let ring = document.querySelector<HTMLElement>(".custom-cursor-ring");
  if (!dot) {
    dot = document.createElement("div");
    dot.className = "custom-cursor";
    document.body.appendChild(dot);
  }
  if (!ring) {
    ring = document.createElement("div");
    ring.className = "custom-cursor-ring";
    document.body.appendChild(ring);
  }

  const quickDotX = gsap.quickTo(dot, "x", { duration: 0.05, ease: "none" });
  const quickDotY = gsap.quickTo(dot, "y", { duration: 0.05, ease: "none" });
  const quickRingX = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
  const quickRingY = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

  const onPointerMove = (event: PointerEvent) => {
    quickDotX(event.clientX);
    quickDotY(event.clientY);
    quickRingX(event.clientX);
    quickRingY(event.clientY);
  };
  window.addEventListener("pointermove", onPointerMove, { passive: true });

  const interactiveSelector = 'a, button, input, textarea, [role="button"], .project-card, .stat-card, .info-card';
  const onOver = (event: Event) => {
    if ((event.target as Element).closest?.(interactiveSelector)) {
      ring?.classList.add("is-active");
    }
  };
  const onOut = (event: Event) => {
    if ((event.target as Element).closest?.(interactiveSelector)) {
      ring?.classList.remove("is-active");
    }
  };
  document.addEventListener("pointerover", onOver);
  document.addEventListener("pointerout", onOut);

  const onLeaveWindow = () => {
    dot?.classList.add("is-hidden");
    ring?.classList.add("is-hidden");
  };
  const onEnterWindow = () => {
    dot?.classList.remove("is-hidden");
    ring?.classList.remove("is-hidden");
  };
  document.addEventListener("mouseleave", onLeaveWindow);
  document.addEventListener("mouseenter", onEnterWindow);

  // Magnetic pull: buttons and social icons drift toward the cursor within
  // their bounds, springing back on leave.
  const magneticTargets = gsap.utils.toArray<HTMLElement>(
    ".btn, .btn-outline, .social-link, .lang-link"
  );
  const magneticCleanups: Array<() => void> = [];

  magneticTargets.forEach((el) => {
    const quickX = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
    const quickY = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const px = event.clientX - (rect.left + rect.width / 2);
      const py = event.clientY - (rect.top + rect.height / 2);
      quickX(px * 0.25);
      quickY(py * 0.25);
    };
    const onLeave = () => {
      quickX(0);
      quickY(0);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    magneticCleanups.push(() => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    });
  });

  teardown = () => {
    window.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerover", onOver);
    document.removeEventListener("pointerout", onOut);
    document.removeEventListener("mouseleave", onLeaveWindow);
    document.removeEventListener("mouseenter", onEnterWindow);
    magneticCleanups.forEach((fn) => fn());
  };
}
