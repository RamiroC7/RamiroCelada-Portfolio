// =============================================================
//  LÓGICA DE LA PÁGINA
//  Arma las secciones con los textos de data.js, cambia idioma
//  y tema, y maneja las partes interactivas. El contenido se
//  edita en data.js; este archivo normalmente no se toca.
// =============================================================
(function () {
  const D = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let lang = store.get("lang") || ((navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en");
  const t = (o) => (o && typeof o === "object" ? o[lang] ?? o.es : o ?? "");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const L = (es, en) => (lang === "es" ? es : en);

  const root = document.documentElement;

  // ---------- Demos y piezas visuales ----------
  const visuals = {
    upload: () => `
      <div class="stage" data-demo="upload">
        <div class="stage-head mono"><span>${L("Probalo", "Try it")}</span><span>${L("Paso", "Step")} <b class="step-n">1</b>/4</span></div>
        <div class="steps-nav" role="tablist">
          ${[L("Fotos", "Photos"), L("IA", "AI"), L("Precio", "Price"), L("Publicar", "Publish")]
            .map((s, i) => `<button type="button" data-step="${i}">${s}</button>`).join("")}
        </div>
        <div class="form">
          <div class="photos"><div class="ph" data-ph>${L("Producto", "Product")}</div><div class="ph" data-ph>${L("Etiqueta", "Label")}</div></div>
          ${[["name", L("Nombre", "Name")], ["cat", L("Categoría", "Category")], ["w", L("Peso", "Weight")], ["sku", "SKU"], ["price", L("Precio", "Price")], ["qty", L("Cantidad", "Stock")]]
            .map(([k, l]) => `<div class="field"><span>${l}</span><span class="v empty" data-f="${k}"></span></div>`).join("")}
          <div class="pub"><span class="note">${L("Azul = lo completó la IA", "Blue = filled in by AI")}</span><span class="pill" data-pill>${L("Borrador", "Draft")}</span></div>
        </div>
        <p class="note">${t(D.ui.demo_note)}</p>
      </div>`,
    chat: () => `
      <div class="stage" data-demo="chat">
        <div class="stage-head mono"><span>${L("Asistente del coach", "Coach assistant")}</span><span>${L("Solo lectura", "Read-only")}</span></div>
        <div class="pipe"><div><b>Landing</b>stabilityar.com</div><span>→</span><div><b>PostHog</b>${L("visitas", "visits")}</div><span>→</span><div><b>${L("Sistema", "System")}</b>coach</div></div>
        <div class="chat" aria-live="polite"><div class="msg a">${L("Hola. Preguntame sobre alumnos, entrenamientos o la página.", "Hi. Ask me about members, workouts or the website.")}</div></div>
        <div class="asks">${chatQA().map((x, i) => `<button type="button" data-q="${i}">${x.q}</button>`).join("")}</div>
        <p class="note">${t(D.ui.demo_note)}</p>
      </div>`,
    modules: () => {
      const m = [
        [L("Panel", "Dashboard"), 1], ["Videos", 1], [L("Acceso por plan", "Plan gating"), 1],
        [L("Agentes", "Agents"), 1], [L("Calculadora", "Calculator"), 0], [L("Foto → IA", "Photo → AI"), 1],
        ["Mercado Pago", 0], ["Admin", 1], [L("Velocidad", "Performance"), 1],
      ];
      return `<div class="stage"><div class="stage-head mono"><span>${L("Módulos", "Modules")}</span><span>${L("Resaltado = mi parte", "Highlighted = my part")}</span></div>
        <div class="mods">${m.map(([n, mine], i) => `<div class="mod${mine ? " mine" : ""}"><small>${String(i + 1).padStart(2, "0")}</small>${n}</div>`).join("")}</div></div>`;
    },
    phases: () => {
      const p = [
        ["1", L("Abrir la tienda", "Open the store"), L("Catálogo, diseño, pagos y envíos", "Catalog, design, payments, shipping"), 1],
        ["1.1", L("Medir y mejorar", "Measure & refine"), L("Analytics, SEO, reseñas, email", "Analytics, SEO, reviews, email"), 0],
        ["2", L("Conectar todo", "Connect everything"), L("ERP, stock sincronizado, QR en locales", "ERP, synced stock, in-store QR"), 0],
      ];
      return `<div class="stage"><div class="stage-head mono"><span>${L("Plan por fases", "Phased plan")}</span><span>${L("Fase actual", "Current")}: 1</span></div>
        <div class="phases">${p.map(([n, b, s, now]) => `<div class="phase${now ? " now" : ""}"><span class="n">F${n}</span><div><b>${b}</b><small>${s}</small></div></div>`).join("")}</div></div>`;
    },
    placeholder: () => `<div class="stage"><div class="mono-big">Fidalgo<br />Studio</div></div>`,
  };

  function chatQA() {
    return [
      { q: L("¿Quién no entrena hace 2 semanas?", "Who hasn't trained in 2 weeks?"),
        a: L("Encontré <b>4 alumnos</b> sin entrenamientos registrados en los últimos 14 días. El que más lleva: 19 días.",
             "I found <b>4 members</b> with no workouts logged in the last 14 days. The longest gap: 19 days.") },
      { q: L("¿Cuántas visitas tuvo la página este mes?", "How many site visits this month?"),
        a: L("La landing tuvo <b>1.240 visitas</b> este mes, y el 38% tocó el botón de WhatsApp.",
             "The landing page had <b>1,240 visits</b> this month, and 38% tapped the WhatsApp button.") },
      { q: L("¿Cómo viene el esfuerzo de la semana?", "How hard was this week?"),
        a: L("El esfuerzo percibido promedio (RPE, de 1 a 10) fue <b>7,2</b>, un poco más alto que la semana pasada.",
             "Average perceived effort (RPE, 1 to 10) was <b>7.2</b>, slightly higher than last week.") },
    ];
  }

  // Demo de la herramienta de carga
  function setupUpload(el) {
    const vals = [
      {},
      { name: [L("Aspersor rotativo de 3 brazos", "3-arm rotating sprinkler"), 1], cat: [L("Riego", "Irrigation"), 1], w: [L("0,4 kg · 18 × 12 × 12 cm", "0.4 kg · 18 × 12 × 12 cm"), 1], sku: ["7790000123456", 1] },
      { price: ["$ 18.900", 0], qty: ["12", 0] },
      {},
    ];
    const btns = el.querySelectorAll("[data-step]");
    let step = 0, auto;
    const show = (n) => {
      step = n;
      btns.forEach((b, i) => b.classList.toggle("on", i <= n));
      el.querySelector(".step-n").textContent = n + 1;
      el.querySelectorAll("[data-ph]").forEach((p) => p.classList.toggle("on", n >= 0));
      el.querySelectorAll("[data-f]").forEach((f) => { f.textContent = ""; f.className = "v empty"; });
      for (let i = 1; i <= n; i++) {
        Object.entries(vals[i]).forEach(([k, [v, ai]]) => {
          const f = el.querySelector(`[data-f="${k}"]`);
          f.textContent = v; f.className = "v" + (ai ? " ai" : "");
        });
      }
      const pill = el.querySelector("[data-pill]");
      pill.classList.toggle("done", n === 3);
      pill.textContent = n === 3 ? L("Publicado en Tienda Nube", "Live on Tienda Nube") : L("Borrador", "Draft");
    };
    btns.forEach((b) => b.addEventListener("click", () => { clearInterval(auto); show(+b.dataset.step); }));
    show(0);
    if (!reduce) auto = setInterval(() => show((step + 1) % 4), 2200);
    sheetTimers.push(auto);
  }

  // Demo del asistente
  function setupChat(el) {
    const box = el.querySelector(".chat");
    const qa = chatQA();
    el.querySelectorAll("[data-q]").forEach((b) => b.addEventListener("click", () => {
      const { q, a } = qa[+b.dataset.q];
      b.disabled = true;
      box.insertAdjacentHTML("beforeend", `<div class="msg q">${q}</div><div class="msg a"><span class="dots"><i></i><i></i><i></i></span></div>`);
      const last = box.lastElementChild;
      sheetTimers.push(setTimeout(() => { last.innerHTML = a; }, reduce ? 0 : 900));
    }));
  }

  // ---------- Imagen o demo de cada proyecto ----------
  function media(p) {
    if (p.images && p.images.length) {
      const imgs = p.images.map((src, i) => `<img src="${esc(src)}" alt="${esc(t(p.title))} · ${i + 1}" />`).join("");
      const dots = p.images.length > 1
        ? `<div class="dots-nav">${p.images.map((_, i) => `<button type="button" aria-label="${i + 1}" data-go="${i}"${i ? "" : ' class="on"'}></button>`).join("")}</div>` : "";
      return `<div class="shots" tabindex="0">${imgs}</div>${dots}`;
    }
    return (visuals[p.demo] || visuals[p.visual] || visuals.placeholder)();
  }
  function framed(p) {
    const host = p.link ? p.link.replace(/^https?:\/\//, "") : p.client;
    // Landing publicada: captura real que se va pasando sola y, al tocarla, abre el sitio
    if (p.link && p.images && p.images.length && !p.stories) {
      const imgs = p.images.map((src, i) => `<img src="${esc(src)}" alt="${esc(p.client)} · ${L("captura", "screenshot")} ${i + 1}"${i ? "" : ' class="on"'} />`).join("");
      return `<a class="frame browser live-site" href="${esc(p.link)}" target="_blank" rel="noopener" aria-label="${L("Abrir", "Open")} ${esc(host)}">
        <div class="frame-bar"><i></i><i></i><i></i><span>${esc(host)}</span></div>
        <div class="screen"><div class="fade-shots">${imgs}</div><span class="open-site">${L("Visitar sitio", "Visit site")} ↗</span></div>
      </a>`;
    }
    return p.frame === "phone"
      ? `<div class="frame phone"><div class="notch"></div><div class="screen">${media(p)}</div></div>`
      : `<div class="frame browser"><div class="frame-bar"><i></i><i></i><i></i><span>${esc(host)}</span></div><div class="screen">${media(p)}</div></div>`;
  }

  // ---------- Proyectos ----------
  const colors = { carga: "lime", stability: "coral", ogcircle: "violet", riegos: "sky", fidalgo: "amber" };
  const open = new Set();
  function renderProjects() {
    const ui = D.ui, C = D.copy;
    $("#projects").innerHTML = D.projects.map((p, i) => {
      const prog = p.status === "progress";
      const detail = `
        ${p.problem ? `<p class="d-label">${t(ui.label_problem)}</p><p class="d-text">${t(p.problem)}</p>` : ""}
        ${p.how ? `<p class="d-label">${t(ui.label_how)}</p><ul class="d-list">${p.how.map((x) => `<li>${t(x)}</li>`).join("")}</ul>` : ""}
        <p class="d-label">${t(ui.label_mine)}</p><ul class="d-list">${p.mine.map((x) => `<li>${t(x)}</li>`).join("")}</ul>`;
      return `<article class="project${open.has(p.id) ? " open" : ""}" data-color="${colors[p.id] || p.color}" id="p-${p.id}">
        <div class="p-body">
          <div class="p-top"><span class="p-num">0${i + 1}</span><span class="chip client">${esc(p.client)}</span><span class="chip">${t(p.kind)}</span><span class="chip st${prog ? " progress" : ""}">${prog ? t(ui.in_progress) : t(ui.live)}</span></div>
          <h3>${t(p.title)}</h3>
          <p class="p-sum">${t(p.summary)}</p>
          <ul class="hl">${(p.highlights || []).map((h, j) => `<li><span>${j + 1}</span>${t(h)}</li>`).join("")}</ul>
          <div class="p-stack">${p.stack.map((x) => `<span class="chip">${esc(x)}</span>`).join("")}</div>
          <div class="p-actions">
            <button class="btn more" type="button" aria-expanded="${open.has(p.id)}" aria-controls="d-${p.id}" data-id="${p.id}">${open.has(p.id) ? t(C.less) : t(C.more)}</button>
            ${p.link ? `<a class="btn visit" href="${esc(p.link)}" target="_blank" rel="noopener">${t(ui.visit)} ↗</a>` : ""}
          </div>
          <div class="panel" id="d-${p.id}"><div class="panel-in"><div class="detail">${detail}</div></div></div>
        </div>
        <div class="p-visual">${p.stories ? stabReal(p) : framed(p)}</div>
      </article>`;
    }).join("");

    document.querySelectorAll(".more").forEach((b) => b.addEventListener("click", () => {
      const card = b.closest(".project"), id = b.dataset.id;
      const on = card.classList.toggle("open");
      on ? open.add(id) : open.delete(id);
      b.setAttribute("aria-expanded", on);
      b.textContent = on ? t(D.copy.less) : t(D.copy.more);
    }));
    document.querySelectorAll(".p-visual").forEach((v) => {
      const shots = v.querySelector(".shots");
      if (!shots) return;
      const dots = [...v.querySelectorAll("[data-go]")];
      dots.forEach((d) => d.addEventListener("click", () => shots.scrollTo({ left: shots.clientWidth * +d.dataset.go, behavior: "smooth" })));
      shots.addEventListener("scroll", () => { const k = Math.round(shots.scrollLeft / shots.clientWidth); dots.forEach((d, j) => d.classList.toggle("on", j === k)); }, { passive: true });
    });
    document.querySelectorAll('[data-demo="upload"]').forEach(setupUpload);
    document.querySelectorAll('[data-demo="chat"]').forEach(setupChat);
    document.querySelectorAll('.stab-real').forEach(setupStab);

    $("#extras").innerHTML = D.extras.map((x) => x.link
      ? `<a class="extra" href="${esc(x.link)}" target="_blank" rel="noopener"><h4>${t(x.title)} ↗</h4><p>${t(x.text)}</p></a>`
      : `<div class="extra"><h4>${t(x.title)}</h4><p>${t(x.text)}</p></div>`).join("");
    // las capturas de las landings se van pasando solas
    document.querySelectorAll(".fade-shots").forEach((box) => {
      const imgs = [...box.querySelectorAll("img")];
      if (imgs.length < 2 || reduce) return;
      let k = 0;
      sheetTimers.push(setInterval(() => { imgs[k].classList.remove("on"); k = (k + 1) % imgs.length; imgs[k].classList.add("on"); }, 3200));
    });
  }

  // ---------- Stability: la landing real (historias) + panel del coach en su estilo ----------
  function stabReal(p) {
    const imgs = p.images.map((src, i) => `<img src="${esc(src)}" alt="${L("Landing de Stability, captura", "Stability landing, screenshot")} ${i + 1}"${i ? "" : ' class="on"'} />`).join("");
    const bars = [9, 12, 10, 15, 13, 18, 22];
    return `<div class="stab-real">
      <div class="frame phone"><div class="notch"></div><div class="screen">
        <div class="stories" role="button" tabindex="0" aria-label="${L("Pasar a la siguiente historia", "Next story")}">${imgs}<span class="tap">${L("Tocá para avanzar →", "Tap to advance →")}</span></div>
      </div></div>
      <div class="coach" data-coach>
        <div class="coach-h"><b><i></i>Stability</b><span>${L("Panel del coach", "Coach panel")}</span></div>
        <div class="kpi"><small>${L("Visitas a la landing · 7 días", "Landing visits · 7 days")}</small>
          <div class="val">1.240 <span>▲ 12%</span></div>
          <div class="spark">${bars.map((h) => `<i style="height:${h * 4}%"></i>`).join("")}</div></div>
        <button class="ask" type="button" data-ask>${L("Preguntale al asistente →", "Ask the assistant →")}</button>
        <p class="ans" data-ans>${L("Tocá el botón para probar el asistente con IA.", "Tap the button to try the AI assistant.")}</p>
        <p class="src">${L("Recreación con datos de ejemplo · Captura real: stabilityar.com", "Recreation with sample data · Real capture: stabilityar.com")}</p>
      </div>
    </div>`;
  }
  function setupStab(root) {
    const st = root.querySelector(".stories");
    if (st) {
      const imgs = [...st.querySelectorAll("img")];
      let k = 0;
      const next = () => { imgs[k].classList.remove("on"); k = (k + 1) % imgs.length; imgs[k].classList.add("on"); };
      st.addEventListener("click", next);
      st.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); next(); } });
      if (!reduce) sheetTimers.push(setInterval(next, 4500));
    }
    const ask = root.querySelector("[data-ask]"), ans = root.querySelector("[data-ans]");
    if (ask) {
      const qa = chatQA();
      let i = 0;
      ask.addEventListener("click", () => {
        const { q, a } = qa[i % qa.length];
        ans.innerHTML = `<b>${q}</b><br><span class="dots"><i></i><i></i><i></i></span>`;
        sheetTimers.push(setTimeout(() => { ans.innerHTML = `<b>${q}</b><br>${a}`; }, reduce ? 0 : 800));
        i++;
      });
    }
  }

  // ---------- Textos fijos ----------
  function renderStatic() {
    const C = D.copy, ui = D.ui;
    root.lang = lang;
    document.querySelectorAll("[data-k]").forEach((el) => { const v = C[el.dataset.k]; if (v) el.innerHTML = t(v); });
    document.querySelectorAll("[data-i18n]").forEach((el) => { const v = ui[el.dataset.i18n]; if (v) el.innerHTML = t(v); });
    document.querySelectorAll("#lang span").forEach((x) => x.classList.toggle("on", x.dataset.l === lang));
    const words = lang === "es"
      ? ["Sistemas a medida", "Tiendas online", "Herramientas con IA", "Landing pages", "Automatización", "Integraciones", "Analytics", "Clientes reales"]
      : ["Custom systems", "Online stores", "AI tools", "Landing pages", "Automation", "Integrations", "Analytics", "Real clients"];
    const band = [...words, ...words].map((w) => `<span>${w}</span>`).join("");
    $("#marquee").innerHTML = band;
    $("#marquee2").innerHTML = band;
    $("#stats").innerHTML = C.stats.map((s) => `<div><b>${s.n}</b><span>${t(s.l)}</span></div>`).join("");
    $("#about").innerHTML = [ui.about_p1, ui.about_p2, ui.about_p3].map((p) => `<p>${t(p)}</p>`).join("");
    $("#process").innerHTML = ui.process.map((x) => `<li><b>${t(x.t)}</b><span>${t(x.d)}</span></li>`).join("");
    $("#stack").innerHTML = D.stack.map((x) => `<li>${esc(x)}</li>`).join("");
    $("#mail").textContent = D.person.email;
    $("#copy").textContent = L("Copiar mail", "Copy email");
    $("#li").href = D.person.linkedin;
    $("#gh").href = D.person.github;
    $("#year").textContent = new Date().getFullYear();
  }

  // ---------- Copiar mail ----------
  $("#copy").addEventListener("click", (ev) => {
    const btn = ev.currentTarget;
    const done = () => { btn.textContent = L("¡Copiado!", "Copied!"); setTimeout(() => (btn.textContent = L("Copiar mail", "Copy email")), 1600); };
    const fallback = () => { const r = document.createRange(); r.selectNodeContents($("#mail")); const sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); };
    try { navigator.clipboard.writeText(D.person.email).then(done, fallback); } catch (e) { fallback(); }
  });

  // ---------- Brillo que sigue al mouse ----------


  // ---------- Idioma ----------
  const timers = [], sheetTimers = [];
  function render() {
    sheetTimers.forEach((x) => { clearInterval(x); clearTimeout(x); });
    sheetTimers.length = 0;
    renderStatic();
    renderProjects();
  }
  $("#lang").addEventListener("click", () => { lang = lang === "es" ? "en" : "es"; store.set("lang", lang); render(); });

  render();
})();
