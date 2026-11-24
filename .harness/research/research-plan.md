# Research plan — Rediseño premium arcansi.com

Estado: **pendiente de aprobación**. Complejidad: DIFÍCIL. Fecha: 2026-11-24. Construye: liriacrea.com.

## 1. Requisito
Rehacer arcansi.com como web de alta gama con personalidad: scroll suave, animación ligada al scroll y 3D. SEO nacional (toda España). Mantener la verdad del producto (PRODUCT.md) y la voz de marca ("nosotros").

## 2. Lo que se conserva y lo que cambia
| Conservar | Cambiar |
|---|---|
| Textos, situaciones, servicios, metodología, principios | Una sola página → arquitectura multipágina para SEO |
| Nombre, logo, colores navy/dorado | Aspecto visual: se crea un mundo visual nuevo (impeccable new-work) |
| Formulario PHP + honeypot, "sin cookies" | Voz en 1ª persona → marca "Arcansi / nosotros" |
| | Añadir aviso legal, privacidad, Schema, sitemap, OG |

## 3. Arquitectura y SEO (intenciones nacionales)
| URL | Intención principal |
|---|---|
| `/` | consultoría para pymes / consultoría empresarial pymes |
| `/servicios/organizacion-empresarial/` | organización y estructura de empresas, organigrama pyme |
| `/servicios/control-financiero/` | control financiero pymes, cuadro de mando, tesorería |
| `/servicios/gestion-y-direccion/` | dirección estratégica pymes, KPIs |
| `/servicios/procesos-de-produccion/` | mejora de procesos productivos, cuellos de botella |
| `/servicios/logistica-y-compras/` | optimización de compras y stock |
| `/servicios/estrategia-comercial/` | estrategia comercial y precios pyme |
| `/situaciones/` (+ subpáginas fase 2) | "facturo mucho pero no gano", "conflicto entre socios", "empresa depende del dueño" |
| `/metodologia/` | cómo trabaja una consultoría |
| `/sobre-arcansi/` | marca / confianza |
| `/contacto/` | conversión |
| `/aviso-legal/`, `/privacidad/` | legal |
| `/blog/` (fase 2) | captación long-tail |

Técnico: HTML estático por ruta, `<title>`/meta únicos, canonical, Schema `ProfessionalService` + `Service` por servicio + `BreadcrumbList` + `FAQPage` donde haya FAQs reales, sitemap.xml automático, OG image por página, Core Web Vitals verdes en móvil.

## 4. Experiencia premium (dirección, sin fijar estética aún)
- Scroll suave (Lenis) + revelados y transiciones ligadas al scroll (GSAP ScrollTrigger).
- Una escena 3D protagonista en la portada (Three.js, carga diferida, fallback estático), con una idea ligada a la marca: **orden que emerge del caos** (piezas dispersas que se ordenan al hacer scroll).
- Transiciones entre páginas (View Transitions de Astro).
- `prefers-reduced-motion`: todo funciona sin movimiento ni JS.
- El mundo visual concreto (tipografía, composición, uso del navy/dorado) se decide en la fase de diseño con impeccable y se presenta para aprobar antes de construir.

## 5. Fases
1. **Diseño**: impeccable new-work → dirección visual + DESIGN.md → aprobación.
2. **Base**: proyecto Astro nuevo en `web/`, tokens, layout, navegación, scroll, SEO base.
3. **Portada** con escena 3D y narrativa de scroll.
4. **Páginas** de servicios, metodología, sobre, contacto, legales.
5. **Revisión**: impeccable audit + critique, Lighthouse, detector.
6. **Despliegue** a Hostinger (Git o SSH) con vista previa.

## 6. Preguntas abiertas
- Datos del titular para aviso legal (razón social, NIF, domicilio).
- ¿Se mantiene "sin cookies"? (sin analítica, o analítica sin cookies tipo Plausible/Umami).
- Testimonios y casos: ninguno de momento → la estructura queda preparada.
- La plantilla 3d_portfolio (React) se descarta como base; se reutilizan solo ideas.
