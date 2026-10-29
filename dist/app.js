'use strict';

const WHATSAPP_NUMBER = '5493413012805';
const whatsappUrl = (message) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Enlaces listos también sin JavaScript; este atributo permite personalizar el mensaje.
document.querySelectorAll('[data-whatsapp][data-message]').forEach((link) => {
  link.href = whatsappUrl(link.dataset.message);
});
document.querySelector('#year').textContent = new Date().getFullYear();

// Navegación móvil con cierre por enlace, Escape y cambio de tamaño.
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu() {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  mobileNav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});
mobileNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileNav.hidden) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 941px)').addEventListener('change', (event) => {
  if (event.matches) closeMenu();
});

// Mantiene la apertura del acordeón también en vistas previas embebidas.
// Sin JavaScript, details/summary conservan su comportamiento nativo.
document.querySelectorAll('.faq-list summary').forEach((summary) => {
  summary.addEventListener('click', (event) => {
    event.preventDefault();
    const details = summary.parentElement;
    details.open = !details.open;
  });
});

// Galería: filtros accesibles y ampliación con navegación por teclado.
const projects = [...document.querySelectorAll('.project')];
const filters = [...document.querySelectorAll('[data-filter]')];
const gallery = document.querySelector('.gallery-grid');
const galleryStatus = document.querySelector('#gallery-status');
filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    const selected = filter.dataset.filter;
    filters.forEach((item) => {
      const active = item === filter;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    projects.forEach((project) => { project.hidden = selected !== 'all' && project.dataset.category !== selected; });
    gallery.classList.toggle('is-filtered', selected !== 'all');
    const visible = projects.filter((project) => !project.hidden).length;
    galleryStatus.textContent = `Mostrando ${visible} ${visible === 1 ? 'trabajo' : 'trabajos'}.`;
  });
});

const lightbox = document.querySelector('#lightbox');
const lightboxImage = document.querySelector('#lightbox-image');
const lightboxTitle = document.querySelector('#lightbox-title');
const lightboxDescription = document.querySelector('#lightbox-description');
const lightboxCount = document.querySelector('#lightbox-count');
let activeProject = 0;
let returnFocus = null;

function visibleProjects() { return projects.filter((project) => !project.hidden); }
function showProject(index) {
  const visible = visibleProjects();
  activeProject = (index + visible.length) % visible.length;
  const project = visible[activeProject];
  lightboxImage.src = project.dataset.image;
  lightboxImage.width = Number(project.querySelector('img').getAttribute('width'));
  lightboxImage.height = Number(project.querySelector('img').getAttribute('height'));
  lightboxImage.alt = project.querySelector('img').alt;
  lightboxTitle.textContent = project.dataset.title;
  lightboxDescription.textContent = project.dataset.description;
  lightboxCount.textContent = `${activeProject + 1} / ${visible.length}`;
  lightbox.querySelector('.lightbox-prev').hidden = visible.length < 2;
  lightbox.querySelector('.lightbox-next').hidden = visible.length < 2;
}
projects.forEach((project) => {
  project.addEventListener('click', () => {
    returnFocus = project;
    showProject(visibleProjects().indexOf(project));
    lightbox.showModal();
    document.body.classList.add('modal-open');
  });
});
lightbox.querySelector('.lightbox-close').addEventListener('click', () => lightbox.close());
lightbox.querySelector('.lightbox-prev').addEventListener('click', () => showProject(activeProject - 1));
lightbox.querySelector('.lightbox-next').addEventListener('click', () => showProject(activeProject + 1));
lightbox.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
    event.preventDefault();
    showProject(activeProject + (event.key === 'ArrowLeft' ? -1 : 1));
  }
});
lightbox.addEventListener('click', (event) => {
  const rect = lightbox.getBoundingClientRect();
  if (event.target === lightbox && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) lightbox.close();
});
lightbox.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  returnFocus?.focus({ preventScroll: true });
});

// El formulario prepara un mensaje. El visitante lo revisa y lo envía en WhatsApp.
const form = document.querySelector('#project-form');
const preparedMessage = document.querySelector('#prepared-message');
const formStatus = document.querySelector('.form-status');
const locationSelect = document.querySelector('#location');
const otherLocationField = document.querySelector('#other-location-field');
const otherLocation = document.querySelector('#other-location');

function updateLocation() {
  const needsLocality = locationSelect.value === 'Otra localidad (consultar)';
  otherLocationField.hidden = !needsLocality;
  otherLocation.disabled = !needsLocality;
  otherLocation.required = needsLocality;
  otherLocation.setCustomValidity('');
}
locationSelect.addEventListener('change', updateLocation);
updateLocation();
// Una consulta ya preparada deja de mostrarse si cambian los datos.
['input', 'change'].forEach((eventName) => form.addEventListener(eventName, (event) => {
  formStatus.hidden = true;
  if (event.target.matches('input, textarea')) event.target.setCustomValidity('');
}));
document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('#project-type').value = link.dataset.service;
    formStatus.hidden = true;
  });
});
form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const name = String(values.get('name')).trim();
  const idea = String(values.get('idea')).trim();
  const outsideLocality = String(values.get('otherLocation') || '').trim();
  if (!name || idea.length < 10 || (otherLocation.required && !outsideLocality)) {
    const field = !name ? document.querySelector('#name') : idea.length < 10 ? document.querySelector('#idea') : otherLocation;
    field.setCustomValidity(!name ? 'Escribí tu nombre.' : idea.length < 10 ? 'Contanos tu idea con al menos 10 caracteres.' : 'Escribí la localidad por la que querés consultar.');
    field.reportValidity();
    field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
    return;
  }
  const locality = otherLocation.required ? `${outsideLocality} (consultar cobertura)` : values.get('location');
  const optionalLine = (key, label) => {
    const value = String(values.get(key) || '').trim();
    return value ? `${label}: ${value}` : '';
  };
  const projectInfo = [
    `Localidad: ${locality}`,
    optionalLine('neighborhood', 'Barrio / zona'),
    `Proyecto: ${values.get('projectType')}`,
    optionalLine('measurements', 'Medidas aproximadas'),
    optionalLine('finish', 'Color / estilo de referencia'),
  ].filter(Boolean).join('\n');
  const message = `Hola Alberto, soy ${name}. Vi la página de Maoro y quiero consultar por un proyecto.\n\n${projectInfo}\n\nMi idea: ${idea}`;
  const url = whatsappUrl(message);
  preparedMessage.href = url;
  formStatus.hidden = false;
  window.open(url, '_blank', 'noopener,noreferrer');
});

// En la zona del formulario, el acceso flotante deja espacio para escribir.
if ('IntersectionObserver' in window) {
  const contactObserver = new IntersectionObserver(([entry]) => {
    document.querySelector('.floating-whatsapp').hidden = entry.isIntersecting;
  }, { rootMargin: '0px 0px -80px 0px', threshold: 0 });
  contactObserver.observe(document.querySelector('.contact-form-panel'));
}

// Las entradas se ejecutan una sola vez. El contenido queda visible sin JS
// o cuando la persona prefiere reducir el movimiento.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const revealElements = document.querySelectorAll('.section-heading, .service, .project, .about-photos, .about-copy, .process-step, .details-inner, .faq-list, .contact-copy, .contact-form-panel');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0, rootMargin: '0px 0px 180px 0px' });

  revealElements.forEach((element) => {
    element.setAttribute('data-reveal', '');
    if (element.matches('.service, .project, .process-step')) {
      const index = [...element.parentElement.children].indexOf(element);
      element.style.setProperty('--reveal-delay', `${index % 3 * 30}ms`);
    }
    if (element.getBoundingClientRect().top < window.innerHeight + 180) {
      element.classList.add('is-visible');
    } else {
      revealObserver.observe(element);
    }
  });
  document.documentElement.classList.add('motion-ready');
  document.addEventListener('focusin', (event) => {
    event.target.closest('[data-reveal]')?.classList.add('is-visible');
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) document.documentElement.classList.remove('motion-ready');
  });
}

// Indica la sección actual mientras se recorre la página.
if ('IntersectionObserver' in window) {
  const navigationLinks = [...document.querySelectorAll('.desktop-nav a, .mobile-nav a')];
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: `-${Math.round(window.innerHeight * .15)}px 0px -${Math.round(window.innerHeight * .65)}px 0px`, threshold: 0 });
  document.querySelectorAll('#inicio, #servicios, #trabajos, #taller, #proceso, #contacto').forEach((section) => sectionObserver.observe(section));
}
