import * as THREE from "three";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Sheet = {
  mesh: THREE.Mesh;
  chaos: { pos: THREE.Vector3; rot: THREE.Euler };
  order: { pos: THREE.Vector3; rot: THREE.Euler };
  spin: THREE.Vector3;
  phase: number;
};

function paperTexture(variant: number): THREE.CanvasTexture {
  const c = document.createElement("canvas");
  c.width = 256; c.height = 332;
  const g = c.getContext("2d")!;
  g.fillStyle = "#FBFBF9"; g.fillRect(0, 0, c.width, c.height);
  // margen dorado
  g.fillStyle = "rgba(207, 162, 62,.75)"; g.fillRect(40, 0, 2, c.height);
  // perforaciones
  g.fillStyle = "#D9DAD5";
  for (const y of [110, 222]) { g.beginPath(); g.arc(18, y, 7, 0, Math.PI * 2); g.fill(); }
  // líneas de texto simuladas (sin texto legible)
  g.fillStyle = "rgba(0,28,67,.28)";
  const rows = 14 + (variant % 5);
  for (let i = 0; i < rows; i++) {
    const w = 120 + ((i * 37 + variant * 53) % 80);
    g.fillRect(58, 36 + i * 19, i === 0 ? 110 : w, i === 0 ? 7 : 4);
  }
  if (variant % 3 === 0) {
    // una tabla de números
    g.strokeStyle = "rgba(0,28,67,.22)"; g.lineWidth = 1.5;
    g.strokeRect(58, 220, 170, 80);
    g.beginPath(); g.moveTo(58, 247); g.lineTo(228, 247); g.moveTo(58, 273); g.lineTo(228, 273); g.moveTo(143, 220); g.lineTo(143, 300); g.stroke();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function initHero(canvas: HTMLCanvasElement, section: HTMLElement, opts: { reduce: boolean }) {
  const isSmall = window.matchMedia("(max-width: 760px)").matches;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(36, 1, 0.1, 100);
  camera.position.set(0, 0, 12);

  scene.fog = new THREE.Fog(0x001c43, 11, 21);
  scene.add(new THREE.AmbientLight(0xdfe6f2, 1.1));
  const key = new THREE.DirectionalLight(0xffffff, 2.1);
  key.position.set(-4, 6, 8); scene.add(key);
  const warm = new THREE.DirectionalLight(0xcfa23e, 0.45);
  warm.position.set(6, -3, 4); scene.add(warm);

  const geo = new THREE.PlaneGeometry(1.5, 1.95, 1, 10);
  // ligera curvatura del papel
  const p = geo.attributes.position as THREE.BufferAttribute;
  for (let i = 0; i < p.count; i++) { const y = p.getY(i); p.setZ(i, Math.sin((y / 1.95) * Math.PI) * 0.06); }
  geo.computeVertexNormals();

  const textures = Array.from({ length: 6 }, (_, i) => paperTexture(i));
  const count = isSmall ? 5 : 7;
  const sheets: Sheet[] = [];
  const rand = (a: number, b: number) => a + Math.random() * (b - a);

  const state = { progress: 0, mx: 0, my: 0 };
  const resize = () => {
    const w = section.clientWidth, h = section.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  camera.lookAt(0, 0, 0); camera.updateMatrixWorld(true);
  // De píxeles de la sección a coordenadas del mundo, en un plano de profundidad z
  const toWorld = (px: number, py: number, z = 0) => {
    const w = section.clientWidth, h = section.clientHeight;
    const v = new THREE.Vector3((px / w) * 2 - 1, -(py / h) * 2 + 1, 0.5).unproject(camera);
    const dir = v.sub(camera.position).normalize();
    return camera.position.clone().add(dir.multiplyScalar((z - camera.position.z) / dir.z));
  };
  const sRect = section.getBoundingClientRect();
  const aEl = section.querySelector<HTMLElement>(".hero__compass");
  const spEl = section.querySelector<HTMLElement>(".hero__spine");
  const aR = aEl?.getBoundingClientRect();
  const spR = spEl?.getBoundingClientRect();
  // Eje de la aguja de la A: (283,383) dentro del viewBox 60..500 × 10..600
  const hubPx = aR ? [aR.left - sRect.left + aR.width * 0.507, aR.top - sRect.top + aR.height * 0.632] : [sRect.width * 0.73, sRect.height * 0.5];
  const hub = toWorld(hubPx[0], hubPx[1]);
  const aRadius = aR ? toWorld(hubPx[0] + aR.width * 0.5, hubPx[1]).x - hub.x : 2.6;
  const spinePt = spR ? toWorld(spR.left - sRect.left + spR.width / 2, spR.top - sRect.top + spR.height * 0.35) : new THREE.Vector3(5.2, 0.6, 0);

  // Ruta dorada: desde el eje de la A baja y gira hacia el botón principal
  const W = section.clientWidth, H = section.clientHeight;
  const cta = section.querySelector<HTMLElement>(".hero__actions .stamp")?.getBoundingClientRect();
  const endPx = cta ? [cta.right - sRect.left + 24, cta.top - sRect.top + cta.height / 2] : [W * 0.3, H * 0.78];
  const lowY = Math.min(H * 0.885, Math.max(endPx[1] + 85, hubPx[1] + 180));
  const r = 60;
  const routeD = `M ${hubPx[0]} ${hubPx[1]} L ${hubPx[0]} ${lowY - r} Q ${hubPx[0]} ${lowY} ${hubPx[0] - r} ${lowY} L ${endPx[0] + r} ${lowY} Q ${endPx[0]} ${lowY} ${endPx[0]} ${lowY - r} L ${endPx[0]} ${endPx[1] + 18}`;
  const svgRoute = section.querySelector<SVGSVGElement>(".hero__route");
  const pathEl = svgRoute?.querySelector<SVGPathElement>("path");
  if (svgRoute && pathEl) {
    svgRoute.setAttribute("viewBox", `0 0 ${W} ${H}`);
    pathEl.setAttribute("d", routeD);
    const len = pathEl.getTotalLength();
    section.style.setProperty("--route-len", String(len));
  }
  // los folios terminan como hitos a lo largo del tramo horizontal
  const segA = hubPx[0] - r - 40, segB = endPx[0] + r + 40;
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshStandardMaterial({ map: textures[i % textures.length], roughness: 0.92, metalness: 0, side: THREE.DoubleSide, transparent: true });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.scale.setScalar(isSmall ? 0.6 : 0.72);
    // Órbita alrededor de la A: nunca en el centro y nunca hacia el titular (sector izquierdo)
    const z = (isSmall ? 0.2 : 1.0) - i * (isSmall ? 0.3 : 0.24);
    // repartidos por el anillo (arriba, derecha, abajo) para no amontonarse
    const theta = isSmall ? rand(-1.6, 1.6) : (-1.85 + (i / (count - 1)) * 3.7 + rand(-0.12, 0.12));
    const radius = aRadius * rand(1.0, 1.3) * ((12 - z) / 12);
    const chaos = {
      pos: new THREE.Vector3(hub.x + Math.cos(theta) * radius, hub.y + Math.sin(theta) * radius * 1.05, z),
      rot: new THREE.Euler(rand(-0.12, 0.12), rand(-0.14, 0.14), rand(-1.2, 1.2)),
    };
    // Destino: de canto, entrando en el lomo del archivador
    const k = count > 1 ? i / (count - 1) : 0.5;
    const wp = toWorld(segA + (segB - segA) * k, lowY, 0.6);
    const order = {
      pos: wp,
      rot: new THREE.Euler(0, 0, (i % 2 ? 1 : -1) * 0.05),
    };
    mesh.position.copy(chaos.pos); mesh.rotation.copy(chaos.rot);
    scene.add(mesh);
    sheets.push({ mesh, chaos: { ...chaos, theta, radius } as any, order, spin: new THREE.Vector3(0, 0, rand(-.1, .1)), phase: rand(0, 6.28) });
  }

  if (!isSmall && !opts.reduce) {
    window.addEventListener("pointermove", (e) => {
      state.mx = (e.clientX / window.innerWidth - 0.5) * 2;
      state.my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  const tmpPos = new THREE.Vector3();
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
  const clock = new THREE.Clock();
  const baseScale = isSmall ? 0.6 : 0.72;

  const render = () => {
    const t = clock.getElapsedTime();
    const pr = state.progress;
    sheets.forEach((s, i) => {
      const c = s.chaos as any;
      // cada folio se archiva con un pequeño retraso propio
      const local = gsap.utils.clamp(0, 1, (pr - (i / sheets.length) * 0.35) / 0.65);
      const e = local < 0.5 ? 4 * local ** 3 : 1 - Math.pow(-2 * local + 2, 3) / 2;
      const drift = 1 - e;
      // órbita lenta alrededor de la brújula
      const th = c.theta + Math.sin(t * 0.18 + s.phase) * 0.28;
      tmpPos.set(hub.x + Math.cos(th) * c.radius, hub.y + Math.sin(th) * c.radius * 1.05 + Math.sin(t * 0.5 + s.phase) * 0.08, c.pos.z);
      s.mesh.position.lerpVectors(tmpPos, s.order.pos, e);
      const cr = new THREE.Euler(c.rot.x, c.rot.y, c.rot.z + t * s.spin.z * drift);
      qa.setFromEuler(cr); qb.setFromEuler(s.order.rot);
      s.mesh.quaternion.slerpQuaternions(qa, qb, e);
      // al entrar en el archivador se encogen y desaparecen
      // como hitos de un plan: más pequeños y alineados en la ruta
      s.mesh.scale.setScalar(baseScale * (1 - e * 0.6));
    });
    // Brújula: la aguja busca rumbo en el desorden y se fija al norte al ordenarse
    const settle = 1 - Math.pow(1 - gsap.utils.clamp(0, 1, pr * 1.12), 3);
    const wander = Math.sin(t * 0.9) * 70 + Math.sin(t * 0.37 + 1.3) * 55;
    // al fijarse, la aguja apunta hacia abajo: el inicio de la ruta
    const needle = wander * (1 - settle) + Math.sin(t * 7) * 3 * (1 - settle) + 135 * settle;
    section.style.setProperty("--needle", `${needle.toFixed(2)}deg`);

    camera.position.x += (state.mx * 0.35 - camera.position.x) * 0.04;
    camera.position.y += (-state.my * 0.25 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
    renderer.render(scene, camera);
  };

  // Revisión: ?p=0..1 congela la escena en ese punto del archivado
  const forced = new URLSearchParams(location.search).get("p");
  if (forced !== null) {
    state.progress = Number(forced);
    section.style.setProperty("--p", forced);
    gsap.ticker.add(render);
    return;
  }

  if (opts.reduce) {
    state.progress = 0;
    render();
    section.style.setProperty("--needle", "0deg");
    return;
  }

  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    end: "+=45%",
    pin: true,
    scrub: 0.6,
    onUpdate: (self) => {
      state.progress = self.progress;
      section.style.setProperty("--p", String(self.progress));
    },
  });

  let visible = true;
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(section);
  gsap.ticker.add(() => { if (visible) render(); });
}
