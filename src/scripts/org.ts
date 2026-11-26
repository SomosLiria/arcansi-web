import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Organigrama vivo: del "todo depende de ti" a una estructura con responsables.
type N = { id: string; label: string; problem?: string; parent: string | null; start: [number, number]; end: [number, number]; kind: "hub" | "head" | "leaf" };

const NS = "http://www.w3.org/2000/svg";
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - Math.pow(-2 * t + 2, 3) / 2);

// Cada área nace como el problema que resuelve
const heads = [
  { id: "fin", label: "Finanzas", problem: "Sin margen", x: 140, kids: [["Tesorería", "Sustos de caja"], ["Costes", "Mermas"]] },
  { id: "pro", label: "Producción", problem: "Retrasos", x: 320, kids: [["Calidad", "Retrabajos"], ["Plazos", "Urgencias"]] },
  { id: "com", label: "Comercial", problem: "Descuentos", x: 500, kids: [["Ventas", "Impagos"], ["Clientes", "Quejas"]] },
];

function buildNodes(): N[] {
  const out: N[] = [{ id: "hub", label: "Tú", parent: null, start: [320, 300], end: [320, 70], kind: "hub" }];
  const all: Omit<N, "start">[] = [];
  heads.forEach((h) => {
    all.push({ id: h.id, label: h.label, problem: h.problem, parent: "hub", end: [h.x, 300], kind: "head" });
    h.kids.forEach(([k, pb], j) => all.push({ id: `${h.id}${j}`, label: k, problem: pb, parent: h.id, end: [h.x + (j ? 46 : -46), 460], kind: "leaf" }));
  });
  // al inicio: todos en un anillo alrededor de "Tú", desordenados
  all.forEach((n, i) => {
    const a = (i / all.length) * Math.PI * 2 + (i % 2 ? 0.35 : -0.2);
    const r = i % 3 === 0 ? 205 : i % 3 === 1 ? 160 : 235;
    out.push({ ...n, start: [320 + Math.cos(a) * r, 300 + Math.sin(a) * r * 0.86] } as N);
  });
  return out;
}

export function initOrg(svg: SVGSVGElement, section: HTMLElement, opts: { reduce: boolean }) {
  const nodes = buildNodes();
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  const linesG = document.createElementNS(NS, "g");
  const crossG = document.createElementNS(NS, "g");
  const nodesG = document.createElementNS(NS, "g");
  svg.append(crossG, linesG, nodesG);

  // líneas de "caos": conexiones cruzadas entre áreas que desaparecen al ordenar
  const cross = [["fin0", "com1"], ["pro1", "fin1"], ["com0", "pro0"], ["fin", "com0"], ["pro", "fin0"], ["com", "pro1"]].map(([a, b]) => {
    const l = document.createElementNS(NS, "line"); l.setAttribute("class", "org-cross"); crossG.append(l); return { l, a, b };
  });

  const lines = nodes.filter((n) => n.parent).map((n) => {
    const p = document.createElementNS(NS, "path"); p.setAttribute("class", "org-line"); linesG.append(p); return { p, n };
  });

  const els = nodes.map((n) => {
    const g = document.createElementNS(NS, "g"); g.setAttribute("class", `org-node org-node--${n.kind}`);
    const w = n.kind === "hub" ? 150 : n.kind === "head" ? 128 : 84, h = n.kind === "hub" ? 54 : n.kind === "head" ? 44 : 34;
    const r = document.createElementNS(NS, "rect");
    r.setAttribute("x", String(-w / 2)); r.setAttribute("y", String(-h / 2)); r.setAttribute("width", String(w)); r.setAttribute("height", String(h)); r.setAttribute("rx", String(h / 2));
    const t = document.createElementNS(NS, "text"); t.setAttribute("text-anchor", "middle"); t.setAttribute("dy", "0.35em"); t.textContent = n.problem ?? n.label;
    g.append(r, t);
    if (n.kind === "hub") {
      // la A de Arcansi: aparece al ordenar, con su aguja de brújula
      const a = document.createElementNS(NS, "g"); a.setAttribute("class", "org-a");
      a.innerHTML = `<g transform="scale(.3) translate(-283 -340)">
        <g stroke="#E9EEF6" stroke-width="46"><line x1="280" y1="28" x2="190" y2="290"/><line x1="280" y1="28" x2="370" y2="290"/><line x1="140" y1="430" x2="96" y2="560"/><line x1="420" y1="430" x2="464" y2="560"/></g>
        <path d="M 172 494 A 150 150 0 1 1 384 262" fill="none" stroke="#E9EEF6" stroke-width="30"/>
        <path d="M 418 340 A 150 150 0 0 1 312 524" fill="none" stroke="#E9EEF6" stroke-width="30"/>
        <g class="org-needle"><polygon points="118,582 266,368 300,398" fill="#E9EEF6"/><polygon points="262,366 458,180 304,402" fill="#FEB707"/></g>
        <circle cx="283" cy="383" r="22" fill="#001C43" stroke="#E9EEF6" stroke-width="7"/></g>`;
      const cap = document.createElementNS(NS, "text"); cap.setAttribute("class", "org-cap"); cap.setAttribute("text-anchor", "middle"); cap.setAttribute("y", "112"); cap.setAttribute("fill", "#CFA23E"); cap.textContent = "Dirección";
      a.append(cap); g.append(a);
    }
    let badge: SVGTextElement | null = null, badgeG: SVGGElement | null = null;
    if (n.kind === "hub") {
      badgeG = document.createElementNS(NS, "g"); badgeG.setAttribute("class", "org-badge"); badgeG.setAttribute("transform", `translate(${w / 2 - 6} ${-h / 2 + 4})`);
      const c = document.createElementNS(NS, "circle"); c.setAttribute("r", "17");
      badge = document.createElementNS(NS, "text"); badge.setAttribute("text-anchor", "middle"); badge.setAttribute("dy", "0.35em");
      badgeG.append(c, badge); g.append(badgeG);
    }
    nodesG.append(g);
    return { g, n, t, badge, badgeG, phase: Math.random() * 6.28 };
  });

  const pos: Record<string, [number, number]> = {};
  const state = { p: 0 };
  const start = performance.now();

  const render = () => {
    const time = (performance.now() - start) / 1000;
    const e = ease(Math.min(1, Math.max(0, state.p / 0.85)));
    const chaos = 1 - e;
    els.forEach(({ g, n, phase }) => {
      const jx = Math.sin(time * 2.1 + phase) * 6 * chaos, jy = Math.cos(time * 1.7 + phase) * 6 * chaos;
      const x = lerp(n.start[0], n.end[0], e) + jx, y = lerp(n.start[1], n.end[1], e) + jy;
      pos[n.id] = [x, y];
      g.setAttribute("transform", `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
    });
    lines.forEach(({ p, n }) => {
      // al inicio todo cuelga de "Tú"; al final, de su responsable
      const hub = pos.hub, par = pos[n.parent!];
      const ax = n.kind === "leaf" ? lerp(hub[0], par[0], e) : par[0];
      const ay = n.kind === "leaf" ? lerp(hub[1], par[1], e) : par[1];
      let [x, y] = pos[n.id];
      // de borde a borde: sale por debajo del padre y entra por arriba del hijo
      const hp = n.kind === "leaf" ? 22 : 27 + 105 * e, hc = (n.kind === "leaf" ? 34 : 44) / 2;
      const ay2 = ay + hp * e, y2 = y - hc * e;
      const my = lerp((ay2 + y2) / 2, ay2 + (y2 - ay2) * 0.5, e);
      // en orden: codos rectos de organigrama; en caos: línea directa
      const d = e > 0.02
        ? `M ${ax} ${ay2} C ${ax} ${lerp(ay2, my, e)}, ${x} ${lerp(y2, my, e)}, ${x} ${y2}`
        : `M ${ax} ${ay} L ${x} ${y}`;
      p.setAttribute("d", d);
    });
    cross.forEach(({ l, a, b }) => {
      l.setAttribute("x1", String(pos[a][0])); l.setAttribute("y1", String(pos[a][1]));
      l.setAttribute("x2", String(pos[b][0])); l.setAttribute("y2", String(pos[b][1]));
      l.style.opacity = String(chaos * 0.9);
    });
    const hubEl = els[0];
    // problemas -> áreas: el texto cambia a mitad de camino
    els.forEach(({ n, t, g }) => { if (n.problem) { t.textContent = e > 0.5 ? n.label : n.problem; g.classList.toggle("is-problem", e <= 0.5); } });
    // "Tú" se convierte en la A de Arcansi; su aguja busca rumbo y se fija
    const aIn = Math.min(1, Math.max(0, (e - 0.45) / 0.4));
    const pill = hubEl.g.querySelectorAll<SVGElement>(":scope > rect, :scope > text");
    pill.forEach((el) => (el.style.opacity = String(1 - aIn)));
    const aG = hubEl.g.querySelector<SVGGElement>(".org-a")!;
    aG.style.opacity = String(aIn);
    aG.setAttribute("transform", `scale(${(0.7 + aIn * 0.3).toFixed(3)})`);
    const needle = (Math.sin(time * 1.3) * 70 + Math.sin(time * 0.5 + 1.2) * 50) * (1 - aIn) + Math.sin(time * 9) * 4 * (1 - aIn);
    aG.querySelector(".org-needle")!.setAttribute("transform", `rotate(${needle.toFixed(2)} 283 383)`);
    const count = Math.round(27 * chaos);
    if (hubEl.badge && hubEl.badgeG) { hubEl.badge.textContent = String(count); hubEl.badgeG.style.opacity = String(Math.min(1, chaos * 4)); hubEl.badgeG.style.display = chaos < 0.03 ? "none" : ""; }
    section.style.setProperty("--org", e.toFixed(3));
  };

  const forced = new URLSearchParams(location.search).get("p");
  if (forced !== null) { state.p = Number(forced); gsap.ticker.add(render); return; }
  if (opts.reduce) { state.p = 1; render(); return; }

  ScrollTrigger.create({
    trigger: section, start: "top top", end: "+=55%", pin: true, scrub: 0.6,
    onUpdate: (self) => { state.p = self.progress; },
  });
  let visible = true;
  new IntersectionObserver(([en]) => (visible = en.isIntersecting)).observe(section);
  gsap.ticker.add(() => { if (visible) render(); });
}
