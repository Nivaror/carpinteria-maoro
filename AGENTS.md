# AGENTS.md — Maoro Carpintería (landing page)

> **Fuente de verdad del proyecto.** Leerlo completo antes de tocar código.
> Si algo del pedido contradice este archivo, preguntar antes de implementar.
> Estado: **plan aprobado, pendiente de implementación**.

---

## 1. Contexto del negocio

Carpintería de un solo artesano, **Alberto Oro**, con **20 años de oficio** (trabajo
a medio tiempo). Taller propio en el **sur de Rosario**. Fabrica **muebles a medida
en MDF**, con la **cocina como servicio estrella**.

Atiende **Rosario y Villa Gobernador Gálvez**. No hace puertas, ventanas ni
reparaciones. No tiene local comercial ni redes sociales: el sitio existe para que
el cliente escriba por WhatsApp.

**Objetivo único del sitio:** que la persona que entra escriba por WhatsApp para
pedir un presupuesto. Todo lo demás (portfolio, proceso, garantía) está al servicio
de eso.

## 2. Datos de contacto — fuente de verdad

| Dato | Valor |
|---|---|
| Marca | Maoro Carpintería |
| Dueño | Alberto Oro |
| WhatsApp | +54 9 341 301-2805 → `https://wa.me/5493413012805` |
| Email | albertoro1920@gmail.com |
| Taller | España 6321, zona sur de Rosario, Santa Fe |
| Zona de trabajo | Rosario y Villa Gobernador Gálvez |
| Horario | 7 a 16 h (día a coordinar con el cliente) |
| Experiencia | 20 años de oficio |
| Material | MDF (melamina y laqueado) |
| Pago | 50 % de seña al comenzar · 50 % al finalizar |
| Garantía | 6 meses |
| Dominio | `maorocarpinteria.com` (verificado libre el 2026-10-26) |
| Redes | Ninguna. No poner íconos de Instagram/Facebook |

Editar estos datos en **un solo lugar** del HTML (bloque comentado `<!-- DATOS -->`)
y en las constantes de `js/main.js` para los mensajes de WhatsApp.

## 3. Decisiones cerradas

- **Idioma:** español de Argentina, con voseo. Tono cálido, directo, sin chamuyo.
- **Stack:** HTML + CSS + JS estático. Sin frameworks, sin build, sin dependencias
  de runtime. Debe funcionar abriendo `index.html`.
- **Alcance:** one-page con anclas y lightbox de proyectos.
- **Precios:** no se publican. El mensaje es **"presupuesto sin cargo"**. La visita,
  la medición y el presupuesto son gratis; recién después va la seña del 50 %.
- **Plazos de entrega:** no publicar plazos fijos. Van "a coordinar" según el
  trabajo. Dejar el texto en un solo lugar para poder quitarlo fácil.
- **Testimonios:** no se inventan. Bloque comentado en el HTML, listo para cuando
  haya reseñas reales.
- **Logo:** no existe. Usar wordmark tipográfico **MAORO** (Fraunces, tracking
  amplio) y monograma **M** para el favicon.
- **Redes:** ninguna. Solo WhatsApp y email.

## 4. Arquitectura de archivos

```
index.html
css/styles.css
js/main.js
assets/img/          → WebP + JPG fallback, 3 anchos por imagen
assets/fonts/        → woff2 self-hosted (Fraunces, Inter) + OFL.txt
assets/favicon.svg   → monograma M
assets/og-image.jpg  → 1200×630
README.md            → cómo editar textos, datos y fotos
robots.txt
sitemap.xml
```

Sin `package.json` en el entregable. Las herramientas de optimización de imágenes
se usan solo durante el desarrollo y no se shippean.

## 5. Sistema de diseño

### Paleta

| Token | Hex | Uso |
|---|---|---|
| `--cream` | `#F6F1E7` | Fondo principal |
| `--cream-deep` | `#EDE4D4` | Bloques alternos |
| `--espresso` | `#241C16` | Texto y bloques oscuros |
| `--walnut` | `#4A3427` | Superficies oscuras secundarias |
| `--oak` | `#B4804F` | Acentos, líneas, hover |
| `--amber` | `#C99A5B` | Detalle fino (subrayados, íconos) |

Contraste mínimo AA. Texto sobre crema siempre en espresso.

### Tipografía

- **Display:** Fraunces (variable, self-hosted). Titulares grandes, `clamp()`,
  interlineado ajustado (0.95–1.05), sin negrita forzada.
- **Texto:** Inter (variable, self-hosted). 16–18 px base, interlineado 1.6.
- Escala fluida: `clamp(2.6rem, 7vw, 6rem)` para H1.
- Sin Google Fonts por CDN: descargar los woff2 y servirlos localmente.
- **Subsetting:** instanciar Fraunces de forma estática, solo los pesos que se usan
  (`wght` 300–600, sin los ejes `SOFT`/`WONK` variables). La variable completa pesa
  ~200 KB; la instancia subset latin queda por debajo de 40 KB. Inter, ídem.
- **Licencia:** ambas familias son SIL OFL. Incluir `assets/fonts/OFL.txt` con la
  licencia correspondiente. Sin ese archivo no se pueden distribuir.

### Layout y espaciado

- **Breakpoints:** `480px` · `768px` · `1024px` · `1280px`. Mobile-first.
- **Escala de espaciado:** `4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128` (px).
  Todo el ritmo vertical sale de ahí; nada de valores arbitrarios.
- **Contenedor:** `max-width: 1200px`, padding lateral `clamp(20px, 5vw, 64px)`.
- **Header:** 72 px en desktop, 60 px en mobile. Definir `--header-h` y reusarla
  para el `scroll-margin-top` de las anclas.
- **Animación:** 500 ms, `cubic-bezier(.22,.61,.36,1)`. Nada más lento.

### Estética

Editorial y artesanal, no plantilla genérica. Grano sutil sobre fotos, bordes
rectos, sombras suaves y difusas. Mucho aire. Nada de degradados de colores ni
glassmorphism.

### Imágenes

Las fotos son reales de taller, no de ambiente producido. Eso es una virtud:
venden honestidad. Unificarlas con:

- **Grade cálido** por CSS (`filter: saturate(.92) contrast(1.04) sepia(.06)`)
  más un overlay ámbar al 4 % en `mix-blend-mode: multiply`. No modificar los
  originales.
- Viñeta muy leve en el hero.
- Pie de foto con tipo de mueble + material. **Nunca inventar medidas.**

**Originales:** `/Users/lauta136/Imagenes proyectos Nivaror/Carpinteria MaOro`
(no copiar la carpeta entera al proyecto; solo las salidas optimizadas).

**Nomenclatura de salida:**
`assets/img/{slug}-{480|800|1200|1600}.{webp|jpg}` — ej.
`proyecto-01-credenza-800.webp` y `proyecto-01-credenza-800.jpg`.
Slugs: `proyecto-01-credenza`, `proyecto-02-peinador`, `proyecto-03-placard`,
`proyecto-04-cocina`, `proyecto-05-rack`, `proyecto-06-zapatero`,
`taller-general`, `retrato-alberto`.

**La grilla es mixta, no uniforme.** Verificar orientación antes de recortar:

| Foto | Original | Proporción | Salida |
|---|---|---|---|
| Credenza | 1258×1670 | vertical | 4:5 · hero + tile |
| Peinador | 1258×1670 | vertical | 4:5 · tile |
| Placard | 1258×1670 | vertical | 4:5 · tile |
| Alacenas | **2218×1670** | **horizontal** | 4:3 · tile ancho (2 columnas) |
| Rack | 1252×1670 | vertical | 4:5 · tile |
| Zapatero | 1252×1670 | vertical | 4:5 · tile |
| Taller general | **2218×1670** | **horizontal** | 21:9 · banda full-width |
| Retrato | **2226×1670** | **horizontal** | 1:1 · recorte cuadrado |
| Screenshot | 842×1396 | vertical | descartar o usar ≤ 480 px |

**Guía de encuadre (no improvisar):**

- **Credenza:** cerrar sobre el mueble, dejar el piso de obra y la pared fuera del
  cuadro. Es la imagen del hero: el recorte tiene que sostener altura completa.
- **Peinador:** usar solo la unidad de adelante (la del cajón abierto y la luz LED).
  Las dos del fondo se descartan.
- **Placard:** vertical completo, con las puertas abiertas. Recortar la izquierda
  del taller.
- **Alacenas:** apaisado. **No** recortar a 4:5, le corta las alacenas. Es el tile
  destacado y el servicio estrella: si queda mal, el sitio pierde.
- **Rack y zapatero:** ya están limpios, recorte completo.
- **Retrato:** cuadrado centrado en la cara. La foto está algo blanda: no pasarla
  de 800 px de ancho.
- **Taller general:** banda 21:9 con overlay oscuro para el texto.

Escalar y comprimir con `sharp` (WebP q=78, JPG q=80). Objetivo: **< 150 KB por
tile**. Usar `sips` solo como fallback (no exporta WebP en todas las versiones).

## 6. Mapa de secciones y copy

### Nav
Inicio · Proyectos · Servicios · Proceso · Nosotros · Contacto + botón
**Presupuesto**. Sticky; transparente sobre el hero, sólida al scrollear. En mobile,
menú full-screen y botón flotante de WhatsApp.

### Hero
Split: panel espresso con el texto a la izquierda, alacenas de cocina a sangre a la
derecha. En mobile, imagen arriba y texto abajo.

> **Cocinas y muebles a medida, hechos para durar.**
>
> Más de 20 años de oficio fabricando cocinas, placares y muebles en MDF. Medimos,
> fabricamos e instalamos en Rosario y Villa Gobernador Gálvez.
>
> `[ Pedir presupuesto sin cargo ]` `[ Ver proyectos ]`

### Barra de confianza
20 años de oficio · MDF de primera · Instalación incluida · Garantía 6 meses

### Proyectos
Grilla con filtros (Todos · Cocinas · Placares · Baños · Dormitorio · Living) y lightbox
accesible (Esc, flechas, foco atrapado).

**Grilla mixta obligatoria:** 5 tiles verticales 4:5 + la foto de cocina como tile
ancho de 2 columnas. Si se fuerza todo a 4:5, la única foto horizontal queda
destruida — y es justo la del servicio estrella. Desktop: 3 columnas; tablet: 2;
mobile: 1.

| # | Archivo original | Título | Material | Filtro |
|---|---|---|---|---|
| 1 | `IMG_20260514_181358724_NV.jpg` | Credenza de cuatro cajones | MDF enchapado roble | Living |
| 2 | `IMG_20260102_184825993_MFNR_HDR.jpg` | Peinador con espejo y luz LED | MDF laqueado blanco | Dormitorio |
| 3 | `IMG_20260524_151744563_MFNR_HDR.jpg` | Placard de dos puertas | MDF enchapado nogal | Placares |
| 4 | `IMG_20260607_170813468_MFNR_HDR.jpg` | Alacenas de cocina | MDF laqueado blanco | Cocinas |
| 5 | `20250308_180315.jpg` | Rack de TV | MDF laqueado blanco y gris | Living |
| 6 | `20250929_175034_HDR.jpg` | Zapatero con frentes abatibles | MDF laqueado gris | Dormitorio |

No usar `IMG_20260607_170813468_MFNR_HDR (1).jpg` (duplicado exacto).

### Servicios
1. **Cocinas a medida** — destacada, es el estrella. Alacenas, bajo mesadas,
   despensas e islas.
2. **Placares y vestidores**
3. **Vanitorys y muebles de baño**
4. **Muebles de living y dormitorio**
5. **Proyectos especiales a medida**

Cerrar con una línea honesta: *No hacemos puertas, ventanas ni reparaciones.*

### Proceso
1. **Visita y medición** — Sin cargo. Coordinamos día y horario en Rosario o VGG.
2. **Presupuesto** — Sin cargo y detallado, con materiales y alcance.
3. **Seña y fabricación** — Seña del 50 % para arrancar. Se fabrica en el taller
   de España 6321.
4. **Entrega e instalación** — 50 % restante al finalizar. Garantía de 6 meses.

Plazo: *"Los plazos se acuerdan en el presupuesto, según el trabajo."* — dejarlo en
una constante/HTML fácil de borrar si Alberto decide sacarlo.

### Nosotros
Retrato + texto en primera persona:

> Me llamo Alberto Oro. Hace 20 años que trabajo la madera y el MDF en el mismo
> taller. Cada mueble pasa por mis manos, de la medición a la instalación: por eso
> sé exactamente qué queda bien en cada casa y qué no.

Banda full-width con la foto general del taller y overlay:
> **Acá se fabrica cada mueble.** — España 6321, zona sur de Rosario.

### Materiales
Banda corta: MDF, melamina, laqueado, herrajes y cantos. Explicado simple, sin
tecnicismos vacíos. Enfatizar que el MDF bien trabajado y con buenos herrajes es
lo que hace que un mueble dure.

### FAQ
- ¿Cómo pido presupuesto? → WhatsApp con una foto del espacio y una idea de medidas.
- ¿La visita y el presupuesto tienen costo? → No, son sin cargo.
- ¿Cómo se paga? → 50 % de seña al comenzar y 50 % al finalizar.
- ¿Qué garantía tienen? → 6 meses.
- ¿A qué zonas llegan? → Rosario y Villa Gobernador Gálvez.
- ¿Hacen puertas, ventanas o reparaciones? → No. Solo muebles a medida.
- ¿Trabajan con melamina o MDF? → MDF por lo general, melamina y laqueado.

### Contacto
WhatsApp como acción principal (mensaje precargado), email, dirección del taller y
horarios. Sin mapa embebido pesado: un enlace a Google Maps.

Formulario de 4 campos: nombre, teléfono, qué necesitás (select: cocina, placard,
vanitory, living/dormitorio, otro) y mensaje. Al enviar, **arma un mensaje de
WhatsApp** y abre `wa.me`. Sin backend, sin spam, sin lead perdido. Debajo, un
`mailto:` como alternativa. Validación en el cliente, mensajes de error claros,
sin librerías. Agregar una línea de confianza: *Tus datos no se guardan en el sitio.*

### Mensajes de WhatsApp

Los textos van URL-encoded en el `href`. Definir exactamente estos:

| Origen | Mensaje |
|---|---|
| CTA general / hero | `Hola Alberto, vi la página de Maoro y quiero pedir un presupuesto sin cargo.` |
| Formulario | `Hola Alberto, soy {nombre}. Te escribo por {tipo de mueble}. {mensaje}. Mi teléfono es {teléfono}.` |
| Servicio cocina | `Hola Alberto, quiero un presupuesto sin cargo para una cocina a medida.` |

Reglas: armar con `encodeURIComponent`, sin saltos de línea raros, y abrir con
`target="_blank" rel="noopener noreferrer"`. Si un campo opcional queda vacío, no
dejar el placeholder en el texto.

### Footer
Wordmark, navegación, WhatsApp, email, dirección, `© 2026 Maoro Carpintería`.
Línea: *Hecho en el sur de Rosario.*

## 7. Funcionalidad JS

Un solo `js/main.js` como módulo. Nada de librerías.

- Menú mobile (focus trap, Esc, bloqueo de scroll).
- Header sticky con estado al scrollear.
- Scroll reveal con `IntersectionObserver` (clase `.is-visible`).
- Filtros de proyectos (sin recargar, con estado `aria-pressed`).
- Lightbox accesible.
- Formulario → WhatsApp.
- Año dinámico en el footer.
- Respetar `prefers-reduced-motion`: sin parallax ni reveals.

## 8. SEO

- `<title>`: *Maoro Carpintería | Cocinas y muebles a medida en Rosario*
- Meta description con zona + servicio + "presupuesto sin cargo". 150–160 caracteres.
- `lang="es-AR"`.
- `canonical` y `og:url` apuntando a `https://maorocarpinteria.com/`.
- Open Graph + Twitter card. Imagen: alacenas de cocina recortada a 1200×630.
  `og:image` a **1200×630** (recorte propio, no la foto
  cruda), con `og:image:width`, `og:image:height` y `og:image:alt`.
- `theme-color` `#241C16`.
- Favicon: `favicon.svg` + `apple-touch-icon.png` 180×180 + `icon-192.png` /
  `icon-512.png`.
- JSON-LD `LocalBusiness` (`HomeAndConstructionBusiness`): nombre, teléfono,
  email, dirección, `areaServed` (Rosario, Villa Gobernador Gálvez),
  `openingHours`, `image`, `url`. **Omitir** `priceRange` y `aggregateRating`
  (no hay precios ni reseñas reales).
- `sitemap.xml` y `robots.txt` con el dominio final.
- **Dominio:** `maorocarpinteria.com.ar` transmite más confianza local pero se
  registra en NIC.ar con CUIT y tarda más; `.com` es inmediato y ya está libre.
  Decisión pendiente con el cliente. El código no debe hardcodear el dominio: usar
  una constante `SITE_URL` en el `<head>` y en el JSON-LD.

## 9. Accesibilidad y performance

- Skip link, `:focus-visible` visible en todo, contraste AA.
- **Anclas:** `scroll-margin-top` igual a la altura del header sticky
  (`--header-h`) en cada `section[id]`, o la navegación tapa los títulos.
- **CTA resiliente:** todos los botones de WhatsApp y email son `<a href>` reales
  en el HTML. El JS solo mejora; si falla, la conversión sigue funcionando.
- Alt text descriptivo en todas las fotos (no keyword stuffing).
- Targets Lighthouse ≥ 95 en Performance, Accessibility, Best Practices y SEO.
- LCP < 2 s en 4G. Peso inicial < 700 KB.
- Imágenes en WebP con fallback JPG, `srcset` (480 / 800 / 1200 / 1600 según uso)
  y `loading="lazy"` salvo la del hero (`fetchpriority="high"`).
- Sin CSS ni JS bloqueante. Fuentes con `font-display: swap` y `preload`.

**Alt text de referencia:**

- Credenza: "Credenza de MDF con terminación roble y cuatro cajones, fabricada en el taller."
- Peinador: "Peinador de MDF laqueado blanco con espejo, luz LED y cajón."
- Placard: "Placard de dos puertas con frente de MDF enchapado nogal e interior blanco, con las puertas abiertas."
- Alacenas: "Alacenas de cocina de MDF laqueado blanco con puertas abiertas."
- Rack: "Rack de TV de MDF laqueado en blanco y gris."
- Zapatero: "Zapatero de MDF gris con tres frentes abatibles."
- Retrato: "Alberto Oro en su taller de carpintería, con las herramientas de fondo."
- Taller: "Interior del taller de carpintería con mesas de trabajo y madera apilada."

## 10. Reglas de contenido (no romper)

1. **No inventar** medidas, plazos, precios, reseñas ni años de trayectoria.
2. **No** ofrecer puertas, ventanas ni reparaciones.
3. **No** agregar redes sociales que no existen.
4. **No** publicar precios. Solo "presupuesto sin cargo".
5. Español rioplatense con voseo, sin anglicismos innecesarios.
6. Los datos de contacto van en un solo bloque editable.

## 11. Criterios de aceptación

- Lighthouse ≥ 95 en las cuatro categorías (mobile).
- El link de WhatsApp se prueba **desde un celular real**, con el mensaje
  precargado correcto y el número bien formateado.
- Probado en iPhone SE (375) y en un Android chico (360). Sin scroll horizontal.
- Filtros y lightbox funcionan solo con teclado.
- Con JS desactivado, los CTA de WhatsApp y email siguen funcionando.
- Ninguna imagen pesa más de 150 KB.
- Sin texto placeholder ni lorem ipsum en el entregable.
- Todos los datos de contacto coinciden con la sección 2 al pie de la letra.

## 12. Tareas

- [ ] `git init` + `.gitignore` + primer commit
- [ ] Scaffold: `index.html`, `css/styles.css`, `js/main.js`, `README.md`
- [ ] Descargar y self-hostear Fraunces + Inter (woff2, subset latin) + `OFL.txt`
- [ ] Optimizar fotos según la guía de encuadre (5 verticales 4:5 + 1 apaisada)
- [ ] Maquetar nav, hero, confianza, proyectos, servicios, proceso
- [ ] Maquetar nosotros, materiales, FAQ, contacto, footer
- [ ] Grilla mixta: 5 tiles verticales + tile ancho de cocina
- [ ] Formulario → WhatsApp con los mensajes definidos
- [ ] Filtros + lightbox accesible
- [ ] `scroll-margin-top` + `--header-h`
- [ ] Responsive en 360 / 375 / 768 / 1024 / 1280 / 1440
- [ ] SEO: title, description, canonical, OG 1200×630, JSON-LD, favicons, sitemap
- [ ] Pasada de accesibilidad, Lighthouse y prueba en celular real
- [ ] `README.md` con instrucciones de edición y deploy

## 13. Pendientes / a confirmar

- Nada bloqueante. Todo el contenido necesario está definido.
- Decidir dominio: `.com` (libre) vs `.com.ar` (NIC.ar, requiere CUIT).
- Opcional futuro: fotos de muebles instalados en casas (hoy solo hay fotos de
  taller), logo propio, reseñas reales, plazo de entrega fijo.

## 14. Repositorio y deploy

- **Antes de escribir código:** `git init` + `.gitignore` (`.DS_Store`,
  `node_modules/`). La carpeta hoy no es repo. Primer commit: `AGENTS.md`.
- Arrastrar la carpeta a Netlify Drop o publicar en GitHub Pages. Ambos gratis.
- **Preguntar al desarrollador cuando llegue el momento de desplegar.** No
  desplegar ni comprar el dominio por cuenta propia.
- Configurar el dominio `maorocarpinteria.com` cuando esté registrado, con redirect
  de `www` al apex (o al revés, pero uno solo).
