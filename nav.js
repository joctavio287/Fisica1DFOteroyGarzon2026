// Barra de navegación entre problemas (← Anterior · Inicio · Siguiente →).
// Para sumar un problema nuevo: agregar su .html a PAGES (en orden) y, en ese
// archivo, <script src="nav.js" defer></script> dentro del <head>.
// index.html arma la lista de la portada a partir de PAGES.
// Si el .html se abre suelto (descargado, sin nav.js al lado), la barra no aparece.

const PAGES = [
  {
    file: 'problemas_67_guia_2.html',
    title: 'Guía 2 · Problemas 6 y 7',
    desc: 'Bolita en un riel semicircular sin fricción y partícula en el extremo de una varilla rígida.',
  },
  {
    file: 'problema_4_guia_8.html',
    title: 'Guía 8 · Problema 4 (péndulo)',
    desc: 'Péndulo simple: potencial U(θ), tipos de movimiento según la energía y método de Euler.',
  },
];

(function () {
  const current = decodeURIComponent(location.pathname.split('/').pop());
  const i = PAGES.findIndex(p => p.file === current);
  if (i < 0) return;

  const prev = PAGES[i - 1];
  const next = PAGES[i + 1];
  const body = document.body;
  const bodyStyle = getComputedStyle(body);

  const style = document.createElement('style');
  style.textContent = `
    #probnav{position:fixed;top:0;left:0;right:0;z-index:1000;display:flex;align-items:center;
      gap:8px;padding:8px 16px;font:14px/1.3 system-ui,-apple-system,"Segoe UI",sans-serif;
      background:${bodyStyle.backgroundColor};color:${bodyStyle.color};
      border-bottom:1px solid rgba(128,128,128,.3)}
    #probnav a,#probnav span.off{color:inherit;text-decoration:none;padding:5px 10px;
      border:1px solid rgba(128,128,128,.35);border-radius:8px;white-space:nowrap}
    #probnav a:hover{border-color:currentColor}
    #probnav span.off{opacity:.35}
    #probnav .where{flex:1;text-align:center;opacity:.75;overflow:hidden;text-overflow:ellipsis;
      white-space:nowrap}
    @media (max-width:600px){#probnav .where{display:none}#probnav{justify-content:space-between}}
  `;
  document.head.appendChild(style);

  const link = (page, text) => page
    ? `<a href="${page.file}" title="${page.title}">${text}</a>`
    : `<span class="off">${text}</span>`;

  const nav = document.createElement('nav');
  nav.id = 'probnav';
  nav.innerHTML =
    link(prev, '← <span class="lbl">Anterior</span>') +
    '<a href="./">Inicio</a>' +
    `<span class="where">${PAGES[i].title} (${i + 1}/${PAGES.length})</span>` +
    link(next, '<span class="lbl">Siguiente</span> →');
  body.prepend(nav);

  const pad = parseFloat(bodyStyle.paddingTop) || 0;
  body.style.paddingTop = `${pad + nav.offsetHeight}px`;
  document.documentElement.style.scrollPaddingTop = `${nav.offsetHeight + 8}px`;
})();
