// Maoro Carpintería — interacciones
// Un solo módulo. Sin librerías.

const WA = "5493413012805";

const PROJECTS = [
  { title: "Credenza de cuatro cajones", material: "MDF enchapado roble", img: "proyecto-01-credenza-1200.jpg", alt: "Credenza de MDF con terminación roble y cuatro cajones, fabricada en el taller." },
  { title: "Peinador con espejo y luz LED", material: "MDF laqueado blanco", img: "proyecto-02-peinador-1200.jpg", alt: "Peinador de MDF laqueado blanco con espejo, luz LED y cajón." },
  { title: "Placard de dos puertas", material: "MDF enchapado nogal", img: "proyecto-03-placard-1200.jpg", alt: "Placard de dos puertas con frente de MDF enchapado nogal e interior blanco, con las puertas abiertas." },
  { title: "Alacenas de cocina", material: "MDF laqueado blanco", img: "proyecto-04-cocina-1200.jpg", alt: "Alacenas de cocina de MDF laqueado blanco con puertas abiertas." },
  { title: "Rack de TV", material: "MDF laqueado blanco y gris", img: "proyecto-05-rack-1200.jpg", alt: "Rack de TV de MDF laqueado en blanco y gris." },
  { title: "Zapatero con frentes abatibles", material: "MDF laqueado gris", img: "proyecto-06-zapatero-1200.jpg", alt: "Zapatero de MDF gris con tres frentes abatibles." },
];

// ---------- Header sticky ----------
const header = document.querySelector(".site-header");
const onScroll = () => {
  if (window.scrollY > 24) header.classList.add("is-scrolled");
  else header.classList.remove("is-scrolled");
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Menú mobile ----------
const toggle = document.querySelector(".nav-toggle");
const drawer = document.querySelector(".nav-drawer");
if (toggle && drawer) {
  const setOpen = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    drawer.classList.toggle("is-open", open);
    drawer.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
  };
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && drawer.classList.contains("is-open")) setOpen(false); });
}

// ---------- Reveal on scroll ----------
const revealEls = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  revealEls.forEach((el) => io.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ---------- Filtros de proyectos ----------
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach((btn) => {
  btn.addEventListener("click", () => {
    const f = btn.dataset.filter;
    filters.forEach((b) => { b.classList.toggle("is-active", b === btn); b.setAttribute("aria-pressed", String(b === btn)); });
    projects.forEach((p) => {
      const show = f === "all" || p.dataset.cat === f;
      p.style.display = show ? "" : "none";
    });
  });
});

// ---------- Lightbox ----------
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightbox-img");
const lbTitle = document.getElementById("lightbox-title");
const lbMat = document.getElementById("lightbox-material");
const lbClose = document.getElementById("lightbox-close");
const lbPrev = document.getElementById("lightbox-prev");
const lbNext = document.getElementById("lightbox-next");
let current = 0;
let lastFocus = null;

function openLightbox(i) {
  current = i;
  const p = PROJECTS[i];
  lbImg.src = "assets/img/" + p.img;
  lbImg.alt = p.alt;
  lbTitle.textContent = p.title;
  lbMat.textContent = p.material;
  lb.classList.add("is-open");
  lb.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastFocus = document.activeElement;
  lbClose.focus();
}
function closeLightbox() {
  lb.classList.remove("is-open");
  lb.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}
function step(dir) {
  const visible = [...projects].filter((p) => p.style.display !== "none").map((p) => Number(p.querySelector(".project-btn").dataset.lightbox));
  if (!visible.length) return;
  let idx = visible.indexOf(current);
  idx = (idx + dir + visible.length) % visible.length;
  openLightbox(visible[idx]);
}

document.querySelectorAll(".project-btn").forEach((btn) => {
  btn.addEventListener("click", () => openLightbox(Number(btn.dataset.lightbox)));
});
lbClose.addEventListener("click", closeLightbox);
lbPrev.addEventListener("click", () => step(-1));
lbNext.addEventListener("click", () => step(1));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });
document.addEventListener("keydown", (e) => {
  if (!lb.classList.contains("is-open")) return;
  if (e.key === "Escape") closeLightbox();
  else if (e.key === "ArrowLeft") step(-1);
  else if (e.key === "ArrowRight") step(1);
});

// Focus trap
lb.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const focusables = lb.querySelectorAll("button");
  const first = focusables[0], last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
  else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
});

// ---------- Formulario -> WhatsApp ----------
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = form.nombre.value.trim();
    const tel = form.tel.value.trim();
    const tipo = form.tipo.value;
    const msg = form.msg.value.trim();
    if (!nombre || !tel || !tipo) {
      status.textContent = "Completá nombre, teléfono y qué necesitás.";
      status.className = "form-status is-error";
      return;
    }
    const texto = `Hola Alberto, soy ${nombre}. Te escribo por ${tipo}. ${msg ? msg + ". " : ""}Mi teléfono es ${tel}.`;
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(texto)}`;
    status.textContent = "Abriendo WhatsApp…";
    status.className = "form-status is-ok";
    window.open(url, "_blank", "noopener,noreferrer");
  });
}

// ---------- Año dinámico ----------
document.querySelectorAll("[data-year]").forEach((el) => { el.textContent = new Date().getFullYear(); });
