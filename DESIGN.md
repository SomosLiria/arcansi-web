---
name: Arcansi
description: Consultoría pragmática para dirigentes de pymes; la empresa pasa de papeles sueltos a un archivo de dirección ordenado.
colors:
  navy: "#001C43"
  navy-deep: "#00112B"
  navy-lift: "#0A2A5C"
  gold: "#CFA23E"
  gold-press: "#B08728"
  paper: "#F4F4F1"
  paper-edge: "#E4E4DF"
  folio-white: "#FBFBF9"
  presspan: "#8E9196"
  ink: "#0E1726"
  ink-soft: "#3C4656"
  on-navy: "#E9EEF6"
  on-navy-soft: "#A9B8CF"
  error: "#A3200F"
  ok: "#155B32"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.8rem, 1.8rem + 4.4vw, 5.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.2rem, 1.6rem + 2.6vw, 3.8rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 800
    lineHeight: 1.04
    letterSpacing: "-0.015em"
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.25rem, 1.1rem + 0.6vw, 1.6rem)"
    fontWeight: 400
    lineHeight: 1.45
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "tnum"
  label:
    fontFamily: "Barlow Condensed, Archivo, sans-serif"
    fontSize: "1.02rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
rounded:
  folio: "3px"
  rubber: "4px"
  stamp: "6px"
  tab: "8px 8px 0 0"
  ring: "50%"
spacing:
  gutter: "clamp(1.25rem, 4vw, 3.5rem)"
  max: "1240px"
  tab-h: "64px"
  section-top: "clamp(5rem, 12vw, 10rem)"
  section-bottom: "clamp(4rem, 9vw, 8rem)"
  folio-pad: "clamp(1.5rem, 3vw, 2.25rem)"
  folio-margin: "clamp(2.75rem, 4vw, 3.5rem)"
components:
  stamp-cta:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    rounded: "{rounded.stamp}"
    padding: "1.05rem 1.5rem 1rem"
  stamp-cta-active:
    backgroundColor: "{colors.gold-press}"
    textColor: "{colors.navy}"
  stamp-cta-small:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    padding: "0.85rem 1.2rem 0.8rem"
  rubber-stamp:
    textColor: "{colors.navy-lift}"
    typography: "{typography.label}"
    rounded: "{rounded.rubber}"
    padding: "0.45rem 0.7rem 0.4rem"
  folio:
    backgroundColor: "{colors.folio-white}"
    textColor: "{colors.ink}"
    rounded: "{rounded.folio}"
    padding: "clamp(1.5rem, 3vw, 2.25rem) clamp(1.5rem, 3vw, 2.25rem) clamp(1.5rem, 3vw, 2.25rem) clamp(2.75rem, 4vw, 3.5rem)"
  spine:
    backgroundColor: "{colors.navy-lift}"
    textColor: "{colors.on-navy}"
    width: "clamp(58px, 5.4vw, 74px)"
  spine-label:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    typography: "{typography.label}"
    padding: "1rem 0.55rem"
  spine-selected:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
  tab:
    textColor: "{colors.on-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.tab}"
    padding: "0.85rem 1.1rem 0.8rem"
  tab-current:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.navy}"
  tab-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
  input:
    textColor: "{colors.ink}"
    rounded: "0"
    padding: "0.6rem 0 0.55rem"
  index-card-tab:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.navy}"
    rounded: "{rounded.tab}"
    padding: "0.6rem 0.9rem 0.5rem"
---

# Design System: Arcansi

## Overview

**Creative North Star: "El archivo de dirección"**

La empresa del cliente llega como folios sueltos y sale como un archivo ordenado. Todo el sistema es material de oficina de dirección traducido a pantalla: campos de tinta plana que ocupan regiones enteras (azul marino como lomo y campo, dorado como etiqueta y sello), papel de oficio blanco roto frío, cartón presspan gris, lomos de archivador AZ con anilla, pestañas separadoras, sellos de caucho y folios con margen y perforaciones. Nada es metáfora decorativa añadida encima: los componentes son esos objetos.

La página cuenta una sola transición desorden → orden. Arriba, folios 3D dispersos sobre campo marino; al hacer scroll se apilan y entran en el archivador. Los folios de situaciones llegan torcidos y se enderezan; los servicios son lomos en una balda que se abren; el método son estaciones que se sellan con golpe seco. La densidad es de documento: titulares grandes y negros, texto de lectura amplio, aire generoso entre secciones.

Rechazo confirmado: el hero partido con foto de equipo y fila de tarjetas de consultora estándar, y cualquier aire de startup tecnológica o plantilla.

**Key Characteristics:**
- Secciones como campos de tinta plana a sangre: `field-navy`, `field-paper`, `field-gold`.
- Lomo AZ, pestaña, sello y folio como vocabulario único de componentes.
- Etiquetas en grotesca condensada mayúscula (Barlow Condensed 700); lectura en grotesca neutra (Archivo).
- Movimiento deslizar-y-encajar, sello con golpe seco, una sola transición desorden → orden.
- Reduced-motion y `?nomotion` dejan todo en estado final, legible y quieto.

## Colors

Dos tintas planas fijas de marca sobre papel y cartón; el resto son variaciones funcionales de esas dos.

### Primary
- **Azul marino de lomo** (#001C43): campo principal (hero, servicios, pie), barra de pestañas al hacer scroll, tinta del sello y de los titulares sobre papel. `theme-color` del sitio.
- **Marino hondo** (#00112B): sección «Sobre», balda de la estantería, centro de la anilla, sombras de texto del hero.
- **Marino de cartón** (#0A2A5C): cuerpo de los lomos AZ y tinta del sello de caucho sobre papel. Los lomos alternan #0D3270 y #062559 para que la balda no sea uniforme.

### Secondary
- **Dorado de etiqueta** (#CFA23E): etiqueta de lomo, sello CTA, pestaña «Contacto», campo del bloque de contacto, foco y selección de texto, raya de margen del folio (al 55 %).
- **Dorado prensado** (#B08728): estado `:active` del sello, viñetas y marcas de verificación sobre papel.

### Neutral
- **Papel de oficio** (#F4F4F1): fondo general y campo `field-paper`; pestaña actual.
- **Folio** (#FBFBF9): la hoja en sí, un punto más clara que el papel para despegarse.
- **Canto de papel** (#E4E4DF): perforaciones del folio y separadores entre estaciones.
- **Presspan** (#8E9196): cartón gris; barra de scroll y hover de campos de formulario.
- **Tinta** (#0E1726) y **tinta suave** (#3C4656): texto principal y secundario sobre papel.
- **Sobre marino** (#E9EEF6) y **sobre marino suave** (#A9B8CF): texto principal y secundario sobre campos marinos.
- **Error** (#A3200F) y **correcto** (#155B32): solo mensajes de formulario.

### Named Rules
**La regla de las tintas planas.** El color ocupa regiones enteras o etiquetas enteras, nunca degradados de marca. El navy es campo o lomo; el dorado es etiqueta, sello o campo de contacto. Los únicos degradados permitidos son físicos: el volumen del lomo y la raya de margen del folio.

**La regla del dorado como etiqueta.** El dorado marca lo que se lee primero o lo que se pulsa: etiqueta de lomo, sello, pestaña de contacto, foco. Sobre papel, el texto dorado no se usa como texto de lectura; se usa dorado prensado solo para marcas.

## Typography

**Display/Body Font:** Archivo (variable 100–900, autoalojada, latin + latin-ext), con `system-ui` de respaldo
**Label Font:** Barlow Condensed 400/700 (autoalojada), con Archivo de respaldo

**Character:** Archivo en 800 con interletraje negativo da titulares de documento firmes y sobrios; Barlow Condensed en mayúsculas espaciadas es la tipografía de lomo, rotulador de etiqueta y sello. Números tabulares en todo el cuerpo.

### Hierarchy
- **Display** (800, `--step-4` clamp(2.8rem…5.6rem), 1.04, −0.035em): titulares de página interior (`PageHero`). El hero de portada usa clamp(2.5rem, 1.5rem + 3.2vw, 4.4rem), máx. 14ch, en blanco; el «¿Hablamos?» de contacto sube a clamp(3.5rem…6rem).
- **Headline** (800, `--step-3` clamp(2.2rem…3.8rem), 1.04, −0.025em): h2 de sección, máx. 16–18ch.
- **Subhead** (800, `--step-2` clamp(1.6rem…2.4rem)): h3 de panel y de fase del método.
- **Title** (800, `--step-1` clamp(1.25rem…1.6rem), −0.015em): h3 de folio, h4 de estación.
- **Lede** (400, `--step-1`, 1.45, máx. 38ch): entradilla bajo cada h2.
- **Body** (400, `--step-0` clamp(1rem…1.125rem), 1.6, máx. 66ch con `.measure`): lectura.
- **Small** (`--step--1` clamp(0.84rem…0.92rem)): migas, notas de formulario.
- **Label** (Barlow Condensed 700, mayúsculas, 0.08em, line-height 1): pestañas, lomos (0.1em), sellos (0.12em en caucho), etiquetas de campo, principios.

### Named Rules
**La regla del lomo condensado.** Barlow Condensed solo aparece en mayúsculas y en 700, y solo donde en el mundo real habría un rótulo: lomo, pestaña, sello, etiqueta de ficha o campo. Nunca para párrafos ni titulares de sección.

## Layout

Contenedor `.wrap`: `min(100% − 2·gutter, 1240px)` centrado; gutter `clamp(1.25rem, 4vw, 3.5rem)`. Cada sección es un campo a sangre con `padding-block: clamp(5rem, 12vw, 10rem) clamp(4rem, 9vw, 8rem)` y `overflow-x: clip`. Las cabeceras de sección son un grid de h2 + lede con `gap: 1.25rem` y `margin-bottom: clamp(3rem, 6vw, 5rem)`, alineadas a la izquierda. La barra de pestañas fija mide 64px (`--tab-h`) y los heroes la compensan en su padding superior.

Composiciones propias:
- **Mesa de situaciones:** grid de 12 columnas donde seis folios se solapan con columnas, márgenes negativos, z-index y giros distintos. Bajo 960px pasa a una columna de folios al 88 % alternando izquierda/derecha con solape de −0.75rem.
- **Estantería:** grid `auto 1fr`, balda de lomos a la izquierda (balda: borde inferior 14px marino hondo) y panel-folio a la derecha (máx. 560px). Bajo 900px los lomos se tumban en horizontal (60px de alto, etiqueta horizontal) y el seleccionado se desplaza 14px a la derecha.
- **Método:** grid `minmax(180px, 1fr) 3.4fr` de fase + pista de estaciones de 4 (o 3) columnas; bajo 1080px una columna con pista de 2; bajo 560px la pista se funde en un único folio rayado con raya de margen dorada y los sellos en el margen.
- **Sobre / Contacto:** grids de dos columnas (1.3fr 1fr; 1fr 1.25fr) que bajo 900px pasan a una.

Puntos de ruptura observados: 560, 640, 760, 860 (navegación), 900, 960, 1080px.

## Elevation & Depth

Profundidad física, no de interfaz: los objetos tienen el volumen que tendrían sobre una mesa. Los campos de tinta son planos; solo el papel y el cartón proyectan sombra, siempre teñida de marino y difusa.

### Shadow Vocabulary
- **Hoja sobre mesa** (`box-shadow: 0 1px 1px rgba(0,28,67,.06), 0 10px 28px -12px rgba(0,28,67,.28)`): todo folio.
- **Lomo en pie** (`box-shadow: 0 18px 40px -20px rgba(0,0,0,.6)` + degradado lateral de volumen): lomo AZ.
- **Balda** (`box-shadow: 0 16px 0 -8px rgba(0,0,0,.25)`): canto de la estantería de servicios.
- **Barra plegada** (`box-shadow: 0 8px 24px -16px rgba(0,0,0,.6)`): pestañas al hacer scroll.
- **Doble filete de sello** (`box-shadow: inset 0 0 0 3px gold, inset 0 0 0 5px navy`): el borde doble entintado del sello CTA; es tinta, no elevación.

### Named Rules
**La regla del objeto.** Solo proyecta sombra lo que en el mundo físico es un objeto (folio, lomo, balda). Botones, pestañas y campos de color no flotan.

## Shapes

Esquinas casi rectas de papelería: folio 3px, sello de caucho 4px, sello CTA 6px, lomo 4px arriba y 2px abajo (6px 6px 0 0 en el lomo del hero). Las pestañas y la lengüeta de la ficha tienen solo las esquinas superiores redondeadas (8px 8px 0 0 y 6px 6px 0 0). Lo único circular es la anilla del lomo (34px, tres anillos radiales) y las perforaciones del folio. Los sellos van girados (CTA −1.5°, caucho −7° por defecto, sellos de estación alternando entre −7° y 6°); los folios sueltos van girados por variable `--r`.

## Components

### Sello CTA (`.stamp`)
Acción primaria, entintada y ligeramente torcida, como un sello de goma recién estampado.
- **Forma:** 6px, borde 3px en tinta + doble filete interior; rotación −1.5°.
- **Primario:** fondo dorado, tinta marina, Barlow Condensed 700 1.2rem mayúsculas 0.08em, padding 1.05rem 1.5rem 1rem, flecha SVG.
- **Hover / Focus:** se endereza y crece (`rotate(0) scale(1.03)`, 0.35s ease-out), la flecha avanza 4px; foco con anillo dorado 3px a 3px.
- **Active:** `scale(.97)` y dorado prensado. **Disabled:** opacidad 0.6, cursor `progress`.
- **Variantes:** `--small` (1rem, 0.85rem 1.2rem), `--ghost` (transparente, sin filete ni giro, tinta `currentColor`).

### Sello de caucho (`.rubber`)
Marca de estado con texto real («Tiene solución», sellos de estación, sello del formulario enviado).
- Barlow 700 0.95rem, 0.12em, borde 2.5px `currentColor`, radio 4px, giro −7°, fondo dorado al 16 % en `multiply`, opacidad 0.92. Sobre marino: tinta dorada, sin fondo ni blend.
- Con `data-stamp="<grados>"` entra con golpe seco (ver movimiento).

### Folio (`.folio`)
La hoja: contenedor de todo contenido leíble (situaciones, panel de servicio, estación, ficha).
- **Fondo:** #FBFBF9, radio 3px, sombra «hoja sobre mesa».
- **Margen:** raya vertical dorada de 1px al 55 % a `folio-margin − 14px`; padding izquierdo mayor (`clamp(2.75rem, 4vw, 3.5rem)`).
- **Perforaciones:** dos taladros de 10px en canto de papel, centrados en vertical a 12px del borde izquierdo.

### Ficha (index card)
Folio girado −1.2° con lengüeta dorada superior (`.about__cardtab`: Barlow mayúsculas 0.95rem, 6px 6px 0 0, a −2.1rem de la parte superior) y lista de verificación.

### Lomo de archivador AZ (`.spine`)
- Cuerpo marino de cartón con degradado de volumen lateral, radio 4px 4px 2px 2px, sombra «lomo en pie».
- **Anilla** (`.spine__ring`): 34px, centro marino hondo, aro #C9CED6, borde marino hondo.
- **Etiqueta** (`.spine__label`): dorada, texto marino vertical (`writing-mode: vertical-rl` + 180°), Barlow 700 1.15rem 0.1em.
- **En la estantería:** son `role="tab"`; hover sube 10px, seleccionado sube 38px y se invierte (cuerpo dorado, etiqueta marina con texto dorado, aro blanco). En el hero y en `PageHero` es un lomo decorativo en el borde derecho (`aria-hidden`).

### Navegación: pestañas separadoras (`.tabs`)
- Barra fija de 64px; transparente sobre el hero marino, marina sólida al pasar 40px de scroll (`.is-scrolled`) o en páginas `navTone="paper"`.
- **Pestaña:** Barlow 700 1.02rem mayúsculas, 8px 8px 0 0, fondo blanco al 6 % con filete superior, asomando 4px hacia abajo; hover sube a 0 y aclara al 14 %.
- **Actual:** pestaña de papel con tinta marina (`aria-current="page"`). **Contacto:** pestaña dorada siempre.
- **Móvil (≤860px):** botón «Menú» con borde 2px; el panel se despliega con `clip-path` (0.45s ease-out) y las pestañas pasan a bloques de 1.4rem con radio 4px.

### Campos de formulario
- Sin caja: solo línea inferior 2px #C8CBCF, radio 0; hover presspan; foco línea marina + subrayado dorado de 2px.
- Etiquetas en Barlow mayúsculas marina; «(opcional)» en Archivo suave.
- El textarea lleva pauta de cuaderno (líneas marinas al 12 % cada 1.55em).
- Error: borde y mensaje #A3200F; mensaje de resultado en caja con borde 2px `currentColor`. Al enviar, aparece un sello de caucho grande girado −9°.

### Listas de verificación (`.checks`)
Grid 1.4rem + texto, marca SVG en dorado prensado (dorado sobre marino), peso 500.

### Movimiento
- **Lenis** (`duration 1.15`, easing cuártico de salida) sincronizado con el ticker de GSAP y ScrollTrigger.
- **Deslizar y encajar** (`.reveal`): entra desde `translateY(28px)` con `expo.out` 1.1s, escalonado 0.08s, por lotes al 88 % del viewport. Sin fundido: la opacidad no se anima.
- **Golpe de sello** (`[data-stamp]`): de `scale 1.9, opacity .25, rotate −18°` a su giro final en 0.42s `power4.in`; al terminar, la estación contenedora baja 3px y rebota (0.08s yoyo).
- **Folios que se enderezan:** cada folio de la mesa pasa de 2.2× su giro y desplazamiento a 0.25× con scrub 0.8 entre `top 98%` y `top 45%`.
- **Folios 3D que se archivan (hero):** Three.js cargado en diferido (`requestIdleCallback`, timeout 900ms) y solo con WebGL2. 28 hojas (10 en ≤760px) con textura de papel, flotando a la derecha del titular; el hero se fija (`pin`) durante 45 % de viewport y con scrub 0.6 cada hoja, con retraso propio, se interpola hasta una pila dentro del lomo del borde derecho. Parallax de cámara con el puntero solo en escritorio.
- **Reduced-motion y `?nomotion`:** sin Lenis, sin ScrollTrigger, `.reveal` en estado final, sellos ya estampados, folios en su giro estático, el 3D renderiza un único fotograma del estado disperso sin pin; transiciones CSS a 0.01ms.

## Do's and Don'ts

### Do:
- **Do** construir cada sección como un campo a sangre (`field-navy`, `field-paper`, `field-gold`) alternando tintas.
- **Do** poner el contenido leíble dentro de un folio con su raya de margen y perforaciones.
- **Do** usar el sello CTA dorado para la acción primaria («Cuéntanos tu situación») y el sello de caucho para estados con texto real.
- **Do** escribir rótulos de lomo, pestaña y sello en Barlow Condensed 700 mayúscula con 0.08–0.12em.
- **Do** mover solo con deslizar-y-encajar y golpe de sello, y garantizar el estado final completo con reduced-motion y `?nomotion`.
- **Do** cargar el 3D en diferido y solo como capa `aria-hidden` detrás de un titular legible por sí mismo.

### Don't:
- **Don't** usar el hero partido con foto de equipo ni filas de tarjetas idénticas de consultora estándar.
- **Don't** introducir degradados de marca, brillos o estética de startup tecnológica; el color es tinta plana.
- **Don't** cambiar ni aproximar el navy #001C43 ni el dorado #CFA23E; son fijos de marca.
- **Don't** usar texto dorado para lectura sobre papel; sobre papel el dorado es etiqueta, marca o fondo.
- **Don't** inventar testimonios, casos o cifras para rellenar componentes; la prueba es solo texto propio.
- **Don't** animar con fundidos de opacidad ni rebotes elásticos; el papel se desliza y encaja.
