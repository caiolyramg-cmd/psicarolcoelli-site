/* =========================================================
   Carol Coelli | Psicóloga — cabeçalho, rodapé e animações
   Os links e contatos ficam todos aqui, em um só lugar.
   ========================================================= */
const LINKS = {
  whatsapp: "https://wa.me/5532984824630",
  instagram: "https://www.instagram.com/psi.carolcoelli/",
  tiktok: "https://www.tiktok.com/@psicarolcoelli",
  email: "psicarolcoelli@gmail.com",
  blog: "https://www.psicarolcoelli.page/",
  loja: "https://chk.eduzz.com/R9JX7EKE0X",
};

const ICONS = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 0 1-1.44-5.02c0-5.2 4.23-9.43 9.44-9.43a9.4 9.4 0 0 1 9.42 9.44c0 5.2-4.23 9.43-9.43 9.43m8.03-17.46A11.27 11.27 0 0 0 12.05.7C5.8.7.7 5.79.7 12.05c0 2 .52 3.95 1.52 5.67L.6 23.3l5.72-1.5a11.3 11.3 0 0 0 5.42 1.38h.01c6.26 0 11.35-5.09 11.36-11.35 0-3.03-1.18-5.88-3.33-8.02"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
  tiktok: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M19.6 6.7a4.8 4.8 0 0 1-3.8-4.2V2h-3.4v13.5a2.9 2.9 0 1 1-2-2.7V9.3a6.3 6.3 0 1 0 5.4 6.2V8.7a8.2 8.2 0 0 0 4.8 1.5V6.8z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
};

const MARK = `<svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true">
  <circle cx="32" cy="32" r="31" fill="#f6e2d1"/>
  <path d="M14 30c0 12 8 21 18 24-6-6-10-14-10-24z" fill="#d4643f"/>
  <path d="M50 30c0 12-8 21-18 24 6-6 10-14 10-24z" fill="#2f4a7c"/>
  <path d="M32 50V24m0 8c-4-3-8-4-11-4m11 0c4-3 8-4 11-4" stroke="#e8b994" stroke-width="3" fill="none" stroke-linecap="round"/>
  <ellipse cx="22" cy="20" rx="4" ry="6" transform="rotate(-30 22 20)" fill="#d4643f"/>
  <ellipse cx="32" cy="14" rx="4" ry="6" fill="#e8b994"/>
  <ellipse cx="42" cy="20" rx="4" ry="6" transform="rotate(30 42 20)" fill="#2f4a7c"/>
</svg>`;

const PAGES = [
  ["index.html", "Página inicial"],
  ["sobre.html", "Sobre"],
  ["servicos.html", "Serviços"],
  ["produtos.html", "Produtos"],
  ["blog.html", "Blog"],
];

function buildHeader() {
  const current = document.body.dataset.page;
  const items = PAGES.map(([href, label]) =>
    `<li><a href="${href}"${href === current ? ' aria-current="page"' : ""}>${label}</a></li>`).join("");
  const header = document.createElement("header");
  header.className = "header";
  header.innerHTML = `
    <nav class="container nav" aria-label="Principal">
      <a class="brand" href="index.html" aria-label="Carol Coelli — Página inicial">
        ${MARK}
        <span class="brand-text"><strong>Carol Coelli</strong><span>Psicóloga</span></span>
      </a>
      <ul class="menu" id="menu">${items}
        <li><a class="btn" href="${LINKS.whatsapp}" target="_blank" rel="noopener">Agende sua sessão</a></li>
      </ul>
      <button class="burger" aria-label="Abrir menu" aria-expanded="false" aria-controls="menu"><span></span><span></span><span></span></button>
    </nav>`;
  document.body.prepend(header);
  const skip = document.createElement("a");
  skip.className = "skip"; skip.href = "#conteudo"; skip.textContent = "Pular para o conteúdo principal";
  document.body.prepend(skip);
  const bar = document.createElement("div");
  bar.className = "progress";
  document.body.prepend(bar);
}

function buildFooter() {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.innerHTML = `
    <svg class="wave-top" viewBox="0 0 1440 70" preserveAspectRatio="none" aria-hidden="true"><path d="M0 0h1440v20c-240 50-480 50-720 20S240-10 0 30z" fill="var(--cream)"/></svg>
    <div class="container">
      <div class="footer-grid">
        <div>
          <a class="brand" href="index.html">${MARK}<span class="brand-text"><strong>Carol Coelli</strong><span>Psicologia Clínica · CRP 04/65141</span></span></a>
          <p class="tagline">Acolhimento, gentileza e consciência para a sua jornada de autoconhecimento.</p>
          <div class="socials">
            <a href="${LINKS.instagram}" target="_blank" rel="noopener" aria-label="Instagram">${ICONS.instagram}</a>
            <a href="${LINKS.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.whatsapp}</a>
            <a href="${LINKS.tiktok}" target="_blank" rel="noopener" aria-label="TikTok">${ICONS.tiktok}</a>
          </div>
        </div>
        <div>
          <h4>Navegação</h4>
          <ul>${PAGES.map(([h, l]) => `<li><a href="${h}">${l}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Contatos</h4>
          <ul>
            <li><a href="mailto:${LINKS.email}">📧&nbsp; ${LINKS.email}</a></li>
            <li><a href="${LINKS.whatsapp}" target="_blank" rel="noopener">💬&nbsp; WhatsApp</a></li>
            <li><a href="${LINKS.instagram}" target="_blank" rel="noopener">📷&nbsp; @psi.carolcoelli</a></li>
          </ul>
        </div>
      </div>
      <div class="alert" role="note">
        <span aria-hidden="true">⚠️</span>
        <p style="margin:0">A psicoterapia on-line não é recomendada para casos de emergência ou crise grave. Em caso de emergência psiquiátrica ou risco de vida, ligue para o <b>CVV (188)</b> ou procure o pronto-socorro mais próximo.</p>
      </div>
      <div class="copyright">
        <span>© <span id="ano">2026</span> Carol Coelli. Todos os direitos reservados.</span>
        <span>Carol Coelli | Psicologia Clínica CRP 04/65141</span>
      </div>
    </div>`;
  document.body.append(footer);
  footer.querySelector("#ano").textContent = new Date().getFullYear();

  const wa = document.createElement("a");
  wa.className = "wa-float"; wa.href = LINKS.whatsapp; wa.target = "_blank"; wa.rel = "noopener";
  wa.setAttribute("aria-label", "Agende pelo WhatsApp");
  wa.innerHTML = `${ICONS.whatsapp}<span class="tip">Agende sua sessão</span>`;
  document.body.append(wa);
}

/* Preenche links marcados com data-link="whatsapp" etc. */
function wireLinks() {
  document.querySelectorAll("[data-link]").forEach((a) => {
    const k = a.dataset.link;
    if (LINKS[k]) { a.href = LINKS[k]; a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-icon]").forEach((el) => {
    el.insertAdjacentHTML("beforeend", ICONS[el.dataset.icon] || "");
  });
}

/* Imagem ausente → mostra ilustração de reserva com o nome do arquivo esperado */
function imageFallbacks() {
  const leaf = '<svg viewBox="0 0 100 100" aria-hidden="true"><path d="M50 90V40" stroke="#e8b994" stroke-width="4" fill="none" stroke-linecap="round"/><ellipse cx="35" cy="38" rx="11" ry="18" transform="rotate(-30 35 38)" fill="#d4643f"/><ellipse cx="65" cy="38" rx="11" ry="18" transform="rotate(30 65 38)" fill="#2f4a7c"/><ellipse cx="50" cy="22" rx="10" ry="16" fill="#e8b994"/></svg>';
  document.querySelectorAll(".ph").forEach((ph) => {
    const img = ph.querySelector("img");
    if (!img) return;
    if (!ph.querySelector(".ph-fallback")) {
      const fb = document.createElement("div");
      fb.className = "ph-fallback";
      // nome do arquivo só aparece rodando localmente, para saber qual imagem falta
      const local = /^(localhost|127\.0\.0\.1|)$/.test(location.hostname);
      fb.innerHTML = `<div>${leaf}${local ? `<small>${img.getAttribute("src")}</small>` : ""}</div>`;
      ph.append(fb);
    }
    const fail = () => ph.classList.add("missing");
    if (img.complete && img.naturalWidth === 0) fail();
    img.addEventListener("error", fail);
  });
}

function headerBehaviour() {
  const header = document.querySelector(".header");
  const burger = document.querySelector(".burger");
  const bar = document.querySelector(".progress");
  const wa = document.querySelector(".wa-float");
  const onScroll = () => {
    const y = window.scrollY;
    header.classList.toggle("scrolled", y > 30);
    wa.classList.toggle("show", y > 400);
    const h = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
    const tl = document.querySelector(".timeline");
    if (tl) {
      const r = tl.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.7 - r.top) / r.height));
      tl.style.setProperty("--progress", p);
    }
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  burger.addEventListener("click", () => {
    const open = document.body.classList.toggle("nav-open");
    burger.setAttribute("aria-expanded", open);
    burger.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  document.querySelectorAll(".menu a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("nav-open")));
  addEventListener("keydown", (e) => { if (e.key === "Escape") document.body.classList.remove("nav-open"); });
}

function reveals() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  els.forEach((e) => io.observe(e));
  // escalonar filhos de grids
  document.querySelectorAll("[data-stagger]").forEach((g) => {
    [...g.children].forEach((c, i) => c.style.setProperty("--d", `${i * 0.12}s`));
  });
}

/* Folhas da árvore do hero surgindo uma a uma */
function treeLeaves() {
  document.querySelectorAll(".tree .leaf").forEach((leaf, i) => {
    setTimeout(() => leaf.classList.add("show"), 900 + i * 140);
    leaf.style.animationDelay = `0s, ${i * 0.3}s`;
  });
}

/* Inclinação 3D sutil nos cartões */
function tilt() {
  if (matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => { card.style.transform = ""; });
  });
}

/* Cursor circular que segue o mouse */
function cursor() {
  if (matchMedia("(hover: none), (prefers-reduced-motion: reduce)").matches) return;
  const c = document.createElement("div");
  c.className = "cursor";
  document.body.append(c);
  let x = 0, y = 0, cx = 0, cy = 0;
  addEventListener("mousemove", (e) => { x = e.clientX; y = e.clientY; c.style.opacity = 1; });
  document.addEventListener("mouseleave", () => (c.style.opacity = 0));
  (function loop() {
    cx += (x - cx) * 0.18; cy += (y - cy) * 0.18;
    c.style.transform = `translate(${cx}px, ${cy}px)`;
    requestAnimationFrame(loop);
  })();
  document.addEventListener("mouseover", (e) => c.classList.toggle("hover", !!e.target.closest("a, button, summary, .badge-card")));
}

/* Balões do hero: arrastar com mouse ou dedo; ao soltar, deslizam com o embalo e ficam onde pararem */
function draggableBadges() {
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".badge-card").forEach((card) => {
    let x = 0, y = 0, vx = 0, vy = 0, ox = 0, oy = 0, lx = 0, ly = 0, lt = 0;
    let dragging = false, raf = 0;
    const render = () => {
      const tilt = Math.max(-14, Math.min(14, vx * 0.8));
      card.style.transform = `translate(${x}px, ${y}px) rotate(${tilt}deg) scale(${dragging ? 1.07 : 1})`;
    };
    card.addEventListener("pointerdown", (e) => {
      if (e.button > 0) return;
      cancelAnimationFrame(raf);
      dragging = true;
      card.setPointerCapture(e.pointerId);
      card.classList.add("grabbing");
      ox = e.clientX - x; oy = e.clientY - y;
      lx = e.clientX; ly = e.clientY; lt = performance.now();
      render();
    });
    card.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      const now = performance.now(), dt = Math.max(1, now - lt);
      // velocidade em px por quadro (~16ms), usada para inclinar e para o arremesso
      vx = vx * 0.5 + ((e.clientX - lx) / dt) * 16 * 0.5;
      vy = vy * 0.5 + ((e.clientY - ly) / dt) * 16 * 0.5;
      lx = e.clientX; ly = e.clientY; lt = now;
      x = e.clientX - ox; y = e.clientY - oy;
      render();
      keepInside(false);
      ox = e.clientX - x; oy = e.clientY - y;
      render();
    });
    const release = () => {
      if (!dragging) return;
      dragging = false;
      card.classList.remove("grabbing");
      if (calm) { vx = vy = 0; render(); return; }
      // solto: continua deslizando com o embalo, desacelera e quica nas bordas da abertura
      const friction = 0.9, maxSpeed = 28; // desliza no máximo ~250px
      const speed = Math.hypot(vx, vy);
      if (speed > maxSpeed) { vx *= maxSpeed / speed; vy *= maxSpeed / speed; }
      // se o dedo/mouse parou antes de soltar, não há embalo
      if (performance.now() - lt > 80) vx = vy = 0;
      (function glide() {
        vx *= friction; vy *= friction;
        x += vx; y += vy;
        keepInside(true);
        render();
        if (Math.abs(vx) + Math.abs(vy) > 0.1) raf = requestAnimationFrame(glide);
        else { vx = vy = 0; render(); }
      })();
    };
    // mantém o balão dentro da área da abertura (hero)
    const keepInside = (bounce) => {
      const area = card.closest(".hero")?.getBoundingClientRect();
      if (!area) return;
      const r = card.getBoundingClientRect();
      const top = area.top + 80; // abaixo do menu
      if (r.left < area.left) { x += area.left - r.left; if (bounce) vx = Math.abs(vx) * 0.6; }
      if (r.right > area.right) { x -= r.right - area.right; if (bounce) vx = -Math.abs(vx) * 0.6; }
      if (r.top < top) { y += top - r.top; if (bounce) vy = Math.abs(vy) * 0.6; }
      if (r.bottom > area.bottom) { y -= r.bottom - area.bottom; if (bounce) vy = -Math.abs(vy) * 0.6; }
    };
    card.addEventListener("pointerup", release);
    card.addEventListener("pointercancel", release);
    card.addEventListener("lostpointercapture", release);
  });
}

/* FAQ: abre um por vez */
function faq() {
  const all = document.querySelectorAll(".faq details");
  all.forEach((d) => d.addEventListener("toggle", () => {
    if (d.open) all.forEach((o) => o !== d && (o.open = false));
  }));
}

buildHeader();
buildFooter();
wireLinks();
imageFallbacks();
headerBehaviour();
reveals();
treeLeaves();
tilt();
cursor();
draggableBadges();
faq();
