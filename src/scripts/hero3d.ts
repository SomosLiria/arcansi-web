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
  const count = isSmall ? 9 : 18;
  const sheets: Sheet[] = [];
  const rand = (a: number, b: number) => a + Math.random() * (b - a);

  // Destino ordenado: pila dentro del archivador (borde derecho)
  const stackX = isSmall ? 1.45 : 2.85;
  for (let i = 0; i < count; i++) {
    const mat = new THREE.MeshStandardMaterial({ map: textures[i % textures.length], roughness: 0.92, metalness: 0, side: THREE.DoubleSide });
    const mesh = new THREE.Mesh(geo, mat);
    // El desorden vive a la derecha y en los bordes: el titular (izquierda) queda limpio.
    const right = true;
    const cx = isSmall
      ? rand(1.35, 2.7)
      : (right ? rand(2.6, 7) : rand(-7.5, -4));
    const cy = isSmall
      ? (right ? rand(-1.5, 5.5) : rand(-5.5, -3.5))
      : (right ? rand(-3, 3) : (Math.random() < .5 ? rand(2.4, 3.2) : rand(-3.4, -2.6)));
    // Cada folio en su propia capa de profundidad, con poca inclinación: no se atraviesan.
    const layer = (isSmall ? -0.5 : 1.4) - i * (isSmall ? 0.42 : 0.36);
    const chaos = {
      pos: new THREE.Vector3(cx, cy, layer),
      rot: new THREE.Euler(rand(-0.22, 0.22), rand(-0.28, 0.28), rand(-1.4, 1.4)),
    };
    // Destino: una pila de folios cuadrada, de frente, junto al archivador.
    // Separación mínima en la normal y un leve desalineado, como papel real bien apilado.
    const order = {
      pos: new THREE.Vector3(stackX + rand(-0.015, 0.015), -0.55 + i * 0.011, 2.1 + i * 0.03),
      rot: new THREE.Euler(-0.42, -0.34, -0.06 + rand(-0.012, 0.012)),
    };
    mesh.position.copy(chaos.pos); mesh.rotation.copy(chaos.rot);
    scene.add(mesh);
    sheets.push({ mesh, chaos, order, spin: new THREE.Vector3(0, 0, rand(-.12, .12)), phase: rand(0, 6.28) });
  }

  const state = { progress: 0, mx: 0, my: 0 };

  const resize = () => {
    const w = section.clientWidth, h = section.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h; camera.updateProjectionMatrix();
  };
  resize();
  window.addEventListener("resize", resize);

  if (!isSmall && !opts.reduce) {
    window.addEventListener("pointermove", (e) => {
      state.mx = (e.clientX / window.innerWidth - 0.5) * 2;
      state.my = (e.clientY / window.innerHeight - 0.5) * 2;
    }, { passive: true });
  }

  const tmpPos = new THREE.Vector3();
  const qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
  const clock = new THREE.Clock();

  const render = () => {
    const t = clock.getElapsedTime();
    const pr = state.progress;
    sheets.forEach((s, i) => {
      // cada folio se archiva con un pequeño retraso propio
      const local = gsap.utils.clamp(0, 1, (pr - (i / sheets.length) * 0.35) / 0.65);
      const e = 1 - Math.pow(1 - local, 3);
      const drift = (1 - e);
      tmpPos.copy(s.chaos.pos);
      tmpPos.x += Math.sin(t * 0.35 + s.phase) * 0.18 * drift;
      tmpPos.y += Math.cos(t * 0.3 + s.phase) * 0.22 * drift;
      s.mesh.position.lerpVectors(tmpPos, s.order.pos, e);
      const cr = new THREE.Euler(
        s.chaos.rot.x + t * s.spin.x * drift,
        s.chaos.rot.y + t * s.spin.y * drift,
        s.chaos.rot.z + t * s.spin.z * drift
      );
      qa.setFromEuler(cr); qb.setFromEuler(s.order.rot);
      s.mesh.quaternion.slerpQuaternions(qa, qb, e);
    });
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
