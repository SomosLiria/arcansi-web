import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches || location.search.includes("nomotion");

// Scroll suave
let lenis: Lenis | null = null;
if (!reduce) {
  lenis = new Lenis({ duration: 1.15, easing: (t) => 1 - Math.pow(1 - t, 4) });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}
(window as any).__lenis = lenis;

// Navegación: estado al hacer scroll + menú móvil
const tabs = document.getElementById("tabs");
const onScroll = () => tabs?.classList.toggle("is-scrolled", window.scrollY > 40);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Brújula del logo: la aguja se balancea con la velocidad del scroll y vuelve al norte
const navMark = tabs?.querySelector<SVGElement>(".tabs__mark");
if (navMark && !reduce) {
  let last = window.scrollY, idle: number | undefined;
  window.addEventListener("scroll", () => {
    const d = window.scrollY - last; last = window.scrollY;
    const a = Math.max(-38, Math.min(38, d * 1.4));
    navMark.style.setProperty("--needle", `${a}deg`);
    clearTimeout(idle);
    idle = window.setTimeout(() => navMark.style.setProperty("--needle", "0deg"), 140);
  }, { passive: true });
}

const toggle = tabs?.querySelector<HTMLButtonElement>(".tabs__toggle");
const nav = document.getElementById("tabs-nav");
toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") !== "true";
  toggle.setAttribute("aria-expanded", String(open));
  nav?.classList.toggle("is-open", open);
});

// Entradas: deslizar y encajar
if (reduce) {
  document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
} else {
  ScrollTrigger.batch(".reveal", {
    start: "top 88%",
    onEnter: (els) =>
      gsap.to(els, { y: 0, duration: 1.1, ease: "expo.out", stagger: 0.08, overwrite: true }),
  });

  // Sellos que "golpean" al entrar
  gsap.utils.toArray<HTMLElement>("[data-stamp]").forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 1.9, opacity: 0.25, rotate: -18 },
      {
        scale: 1, opacity: 0.92, rotate: Number(el.dataset.stamp || -7), duration: 0.42, ease: "power4.in",
        scrollTrigger: { trigger: el, start: "top 80%" },
        onComplete: () => {
          gsap.fromTo(el.closest(".station") ?? el, { y: 0 }, { y: 3, duration: 0.08, yoyo: true, repeat: 1 });
        },
      }
    );
  });
}

export { lenis, reduce };
