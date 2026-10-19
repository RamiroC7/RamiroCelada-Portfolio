// =============================================================
//  CONTENIDO DEL PORTFOLIO
//  Todo el texto de la página vive acá. Para cambiar algo,
//  editá el texto entre comillas. Cada texto tiene su versión
//  en español (es) y en inglés (en).
// =============================================================

window.PORTFOLIO = {
  person: {
    name: "Ramiro Celada",
    email: "ramirosimonettic@gmail.com",
    linkedin: "https://www.linkedin.com/in/ramiro-celada/",
    github: "https://github.com/RamiroC7",
  },

  ui: {
    nav_work: { es: "Trabajo", en: "Work" },
    nav_about: { es: "Perfil", en: "About" },
    nav_contact: { es: "Contacto", en: "Contact" },
    theme: { es: "Tema", en: "Theme" },

    status: { es: "Disponible para proyectos y pasantías", en: "Open to projects and internships" },
    hero_lead: {
      es: "Cofundador de KEI Software. Construyo sistemas, tiendas online y herramientas con IA para negocios reales de Córdoba.",
      en: "Co-founder of KEI Software. I build systems, online stores and AI tools for real businesses in Córdoba, Argentina.",
    },
    hero_meta_study: { es: "Ingeniería en Sistemas · UTN · 3er año", en: "Information Systems Engineering · UTN · 3rd year" },
    hero_meta_place: { es: "Córdoba, Argentina", en: "Córdoba, Argentina" },
    hint: { es: "Mové el cursor sobre el nombre", en: "Move your cursor over the name" },

    work_title: { es: "Trabajo seleccionado", en: "Selected work" },
    work_sub: {
      es: "Proyectos hechos en KEI Software con clientes reales. Abrí cada uno para ver el problema, cómo funciona y qué parte hice yo.",
      en: "Projects built at KEI Software with real clients. Open each one to see the problem, how it works and the part I built.",
    },
    col_project: { es: "Proyecto", en: "Project" },
    col_client: { es: "Cliente", en: "Client" },
    col_type: { es: "Tipo", en: "Type" },
    label_problem: { es: "El problema", en: "The problem" },
    label_mine: { es: "Lo que hice yo", en: "What I did" },
    label_how: { es: "Cómo funciona", en: "How it works" },
    label_stack: { es: "Herramientas", en: "Stack" },
    label_demo: { es: "Probalo", en: "Try it" },
    demo_note: { es: "Demo ilustrativa con datos de ejemplo.", en: "Illustrative demo with sample data." },
    visit: { es: "Ver sitio", en: "Visit site" },
    open: { es: "Abrir", en: "Open" },
    close: { es: "Cerrar", en: "Close" },
    in_progress: { es: "En curso", en: "In progress" },
    live: { es: "En producción", en: "Live" },
    also_title: { es: "También en KEI", en: "Also at KEI" },

    about_title: { es: "Perfil", en: "About" },
    about_p1: {
      es: "Soy cofundador de <a class=\"kei\" href=\"https://keisoftware.dev\" target=\"_blank\" rel=\"noopener\">KEI Software</a>. Convierto problemas reales de negocios en software que se usa todos los días: sistemas de gestión, tiendas online y herramientas con IA.",
      en: "I'm co-founder of <a class=\"kei\" href=\"https://keisoftware.dev\" target=\"_blank\" rel=\"noopener\">KEI Software</a>. I turn real business problems into software people use every day: management systems, online stores and AI tools.",
    },
    about_p2: {
      es: "Me enfoco en el resultado: que cargar un producto sea sacar dos fotos, que un coach vea sus números sin pedírselos a nadie y que un comercio venda online además de en sus locales.",
      en: "I focus on outcomes: uploading a product takes two photos, a coach sees the numbers without asking anyone, and a retailer sells online as well as in-store.",
    },
    about_p3: {
      es: "Trabajo rápido y ordenado: divido cada proyecto en tareas claras, desarrollo con IA (Claude Code) para avanzar más rápido y pruebo todo antes de publicarlo. Y como estudio Ingeniería en Sistemas en la UTN, siempre estoy sumando algo nuevo.",
      en: "I work fast and organized: I break every project into clear tasks, build with AI (Claude Code) to move faster and test everything before it ships. And since I study Information Systems Engineering at UTN, I'm always adding something new.",
    },
    process_title: { es: "Cómo trabajo", en: "How I work" },
    process: [
      { t: { es: "Entender", en: "Understand" }, d: { es: "Hablo con el cliente y bajo el problema a algo concreto.", en: "I talk to the client and pin the problem down." } },
      { t: { es: "Planificar", en: "Plan" }, d: { es: "Lo divido en tickets chicos en Plane, con qué hay que hacer y cuándo está listo.", en: "I split it into small tickets in Plane, each with a clear definition of done." } },
      { t: { es: "Construir", en: "Build" }, d: { es: "Programo con IA como copiloto y reviso cada cambio.", en: "I code with AI as a copilot and review every change." } },
      { t: { es: "Publicar y medir", en: "Ship & measure" }, d: { es: "Publico en Vercel y sigo midiendo cómo se usa.", en: "I deploy on Vercel and keep measuring how it is used." } },
    ],
    stack_title: { es: "Herramientas", en: "Tools" },

    contact_title: { es: "Hablemos", en: "Let's talk" },
    contact_sub: {
      es: "Escribime por mail o por LinkedIn. Respondo rápido.",
      en: "Email me or reach out on LinkedIn. I reply quickly.",
    },
    copy: { es: "Copiar", en: "Copy" },
    copied: { es: "Copiado", en: "Copied" },
    local_time: { es: "Hora en Córdoba", en: "Time in Córdoba" },
    footer: { es: "Diseñado y programado por Ramiro Celada", en: "Designed and built by Ramiro Celada" },
  },

  // Textos de la portada y títulos de secciones
  copy: {
    hi: { es: "Hola, soy", en: "Hi, I'm" },
    role: { es: "Cofundador de <a class=\"kei\" href=\"https://keisoftware.dev\" target=\"_blank\" rel=\"noopener\">KEI Software</a> · Estudiante de Ingeniería en Sistemas (UTN)", en: "Co-founder of <a class=\"kei\" href=\"https://keisoftware.dev\" target=\"_blank\" rel=\"noopener\">KEI Software</a> · Information Systems Engineering student (UTN)" },
    lead: { es: "Construyo sistemas, tiendas online y herramientas con IA para negocios reales de Córdoba.", en: "I build systems, online stores and AI tools for real businesses in Córdoba, Argentina." },
    cta1: { es: "Ver proyectos", en: "See my work" },
    cta2: { es: "Escribime", en: "Get in touch" },
    sticker: { es: "COFUNDADOR · KEI SOFTWARE · ", en: "CO-FOUNDER · KEI SOFTWARE · " },
    projects_title: { es: "Mis <em>proyectos</em>", en: "Selected <em>work</em>" },
    projects_sub: { es: "Lo que construí con clientes reales. Cada uno en 3 puntos; si querés el detalle, tocá \"Ver cómo lo hice\".", en: "What I've built with real clients. Each one in 3 points; tap \"How I built it\" for the details." },
    more: { es: "Ver cómo lo hice", en: "How I built it" },
    less: { es: "Cerrar detalle", en: "Close details" },
    also: { es: "También en <em>KEI</em>", en: "Also at <em>KEI</em>" },
    about_title: { es: "Sobre <em>mí</em>", en: "About <em>me</em>" },
    process_title: { es: "Cómo <em>trabajo</em>", en: "How I <em>work</em>" },
    stack_title: { es: "Herramientas que uso", en: "Tools I use" },
    contact_title: { es: "<em>Hablemos</em>", en: "Let's <em>talk</em>" },
    contact_sub: { es: "Estoy abierto a proyectos, pasantías y a conocer gente que construye cosas.", en: "Open to projects, internships and meeting people who build things." },
    footer: { es: "Diseñado y programado por Ramiro Celada · Córdoba, Argentina", en: "Designed and built by Ramiro Celada · Córdoba, Argentina" },
    stats: [
      { n: "5+", l: { es: "proyectos con clientes reales", en: "projects with real clients" } },
      { n: "3", l: { es: "socios en KEI Software", en: "partners at KEI Software" } },
      { n: "ES·EN", l: { es: "español e inglés", en: "Spanish & English" } },
    ],
  },

  stack: [
    "React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Supabase",
    "PostgreSQL", "Vercel", "Tienda Nube API", "Google Gemini", "PostHog",
    "MCP", "Mercado Pago", "Playwright", "Vitest", "Git & GitHub", "Claude Code", "Plane",
  ],

  // ---------------------------------------------------------
  //  PROYECTOS PRINCIPALES
  //  color: el color de la tarjeta. link: null si no hay link.
  //  visual: el dibujo que acompaña ("flow", "stability", "modules", "phases", "placeholder")
  // ---------------------------------------------------------
  projects: [
    {
      id: "carga",
      // Capturas: subí las imágenes junto al resto y agregalas acá, ej: ["carga-1.png"]
      images: [],
      frame: "phone",
      highlights: [
        { es: "Dos fotos y el producto queda publicado", en: "Two photos and the product is live" },
        { es: "La IA completa nombre, marca, peso y medidas", en: "AI fills in name, brand, weight and size" },
        { es: "Publica directo en Tienda Nube, sin planillas", en: "Publishes straight to Tienda Nube, no spreadsheets" },
      ],
      kind: { es: "Herramienta con IA", en: "AI tool" },
      color: "lime",
      status: "live",
      client: "Riegos del Sur",
      title: { es: "Herramienta de carga de productos con IA", en: "AI-powered product upload tool" },
      summary: {
        es: "Una app para el celular que convierte dos fotos en un producto publicado en la tienda online.",
        en: "A mobile app that turns two photos into a product published on the online store.",
      },
      problem: {
        es: "Riegos del Sur tiene 3 locales y cientos de productos (piletas, riego, jardín). Cargar cada uno a mano en Tienda Nube, con su descripción, peso y medidas, iba a llevar semanas.",
        en: "Riegos del Sur has 3 stores and hundreds of products (pools, irrigation, garden). Uploading each one by hand to Tienda Nube, with description, weight and dimensions, would have taken weeks.",
      },
      how: [
        { es: "La empleada saca una foto del producto y otra de la etiqueta.", en: "The employee takes a photo of the product and one of its label." },
        { es: "La IA (Google Gemini) lee la etiqueta y completa nombre, marca, categoría, descripción y código de barras, y estima peso y medidas.", en: "AI (Google Gemini) reads the label and fills in name, brand, category, description and barcode, and estimates weight and size." },
        { es: "Lo que completó la IA queda marcado en azul para revisarlo. Ella solo agrega precio y cantidad.", en: "Everything the AI filled in is highlighted in blue for review. She only adds price and stock." },
        { es: "Se publica directo en Tienda Nube por API, sin planillas ni CSV.", en: "It publishes straight to Tienda Nube via API, no spreadsheets or CSV files." },
      ],
      mine: [
        { es: "La diseñé y la programé de punta a punta, y la mantengo.", en: "I designed and built it end to end, and I maintain it." },
        { es: "Reglas automáticas: arma el título (Tipo + Marca + Modelo + Medida), genera el SKU (código único del producto) y no deja repetirlo.", en: "Automatic rules: builds the title (Type + Brand + Model + Size), generates the SKU (unique product code) and blocks duplicates." },
        { es: "Botón \"Cargar uno parecido\" para productos de la misma línea, y borradores que se guardan en el celular.", en: "A \"Load a similar one\" button for product lines, and drafts saved on the phone." },
        { es: "Seguridad: login con sesión, y las claves de la tienda y la IA viven solo en el servidor.", en: "Security: session login, and store and AI keys live only on the server." },
      ],
      stack: ["JavaScript", "Tailwind CSS", "Vercel Functions", "Vercel Blob", "Tienda Nube API", "Google Gemini"],
      link: null,
      visual: "flow", demo: "upload",
    },
    {
      id: "stability",
      // Capturas: subí las imágenes junto al resto y agregalas acá
      images: ["stability-2.jpg", "stability-3.jpg"],
      stories: true,
      frame: "browser",
      highlights: [
        { es: "Las visitas de la web, dentro del sistema del coach", en: "Website visits inside the coach's system" },
        { es: "Un asistente con IA que responde sobre alumnos y entrenamientos", en: "An AI assistant that answers questions about members and workouts" },
        { es: "Solo lectura: la IA mira, nunca cambia datos", en: "Read-only: the AI looks, never changes data" },
      ],
      kind: { es: "Analytics + IA", en: "Analytics + AI" },
      color: "coral",
      status: "live",
      client: "Stability",
      title: { es: "Estadísticas y asistente con IA para un gimnasio", en: "Analytics and an AI assistant for a gym" },
      summary: {
        es: "Llevé los datos de la página web al sistema del gimnasio y sumé un asistente que responde preguntas sobre alumnos y entrenamientos.",
        en: "I brought website data into the gym's system and added an assistant that answers questions about members and workouts.",
      },
      problem: {
        es: "Stability es una comunidad de entrenamiento en Córdoba con su propia app para coaches y alumnos. Los coaches no sabían cuánta gente visitaba su página, y para sacar cualquier dato de sus alumnos tenían que buscarlo a mano.",
        en: "Stability is a training community in Córdoba with its own app for coaches and members. Coaches didn't know how many people visited their website, and getting any data on their members meant digging for it by hand.",
      },
      how: [
        { es: "La landing (stabilityar.com) mide visitas y clics con PostHog.", en: "The landing page (stabilityar.com) tracks visits and clicks with PostHog." },
        { es: "Esas estadísticas se ven adentro del sistema que el coach ya usa todos los días.", en: "Those stats show up inside the system coaches already use every day." },
        { es: "El coach le pregunta al asistente en lenguaje normal, por ejemplo \"¿quién no entrena hace dos semanas?\".", en: "Coaches ask the assistant in plain language, e.g. \"who hasn't trained in two weeks?\"" },
        { es: "La IA consulta la base de datos en modo solo lectura y responde con los datos reales.", en: "The AI queries the database in read-only mode and answers with real data." },
      ],
      mine: [
        { es: "Integré PostHog en la landing y metí las estadísticas en el sistema, para tener todo en un solo lugar.", en: "Integrated PostHog on the landing page and embedded its stats in the system, so everything lives in one place." },
        { es: "Integré la IA como asistente de consulta: un servidor MCP (la forma en que una IA se conecta a otro sistema) para que los coaches consulten datos del gimnasio.", en: "Integrated AI as a query assistant: an MCP server (the standard way an AI connects to another system) so coaches can query gym data." },
        { es: "Acceso de solo lectura garantizado desde la base de datos: el asistente puede mirar pero nunca cambiar nada.", en: "Read-only access enforced at the database level: the assistant can look but never change anything." },
      ],
      stack: ["React", "TypeScript", "Supabase", "PostgreSQL", "PostHog", "MCP", "Vercel"],
      link: "https://stabilityar.com",
      visual: "stability", demo: "chat",
    },
    {
      id: "ogcircle",
      // Capturas: subí las imágenes junto al resto y agregalas acá, ej: ["ogcircle-1.png"]
      images: ["og-1.jpg", "og-2.jpg"],
      frame: "browser",
      highlights: [
        { es: "Panel del usuario y videos de formación", en: "User dashboard and training videos" },
        { es: "Contenido bloqueado según el plan comprado", en: "Content locked by purchased plan" },
        { es: "Identificar un producto con una foto usando IA", en: "Identify a product from a photo with AI" },
      ],
      kind: { es: "Plataforma web", en: "Web platform" },
      color: "violet",
      status: "live",
      client: "OG Circle",
      title: { es: "Plataforma para aprender a importar de China", en: "A platform to learn importing from China" },
      summary: {
        es: "Plataforma paga con videos, calculadoras y contactos verificados para quienes quieren importar mercadería y venderla online.",
        en: "A paid platform with videos, calculators and verified contacts for people who want to import goods and sell them online.",
      },
      problem: {
        es: "Mucha gente quiere importar pero se frena en el primer envío: no sabe cuánto le cuesta el producto puesto en Argentina, no confía en los agentes de compra y no sabe cómo pagar a China.",
        en: "Many people want to import but freeze on the first shipment: they don't know the real landed cost, don't trust buying agents and don't know how to pay suppliers in China.",
      },
      how: null,
      mine: [
        { es: "El panel del usuario: menú, estadísticas personales y grillas de videos de formación.", en: "The user dashboard: navigation, personal stats and training video grids." },
        { es: "El bloqueo de contenido según el plan comprado, tanto en la pantalla como en el servidor.", en: "Content gating by purchased plan, both on screen and on the server." },
        { es: "Directorio de agentes de compra, profesionales y servicios financieros, más el perfil del usuario con soporte por WhatsApp.", en: "Directory of buying agents, professionals and financial services, plus the user profile with WhatsApp support." },
        { es: "Panel de administración para cargar videos, agentes y profesionales.", en: "Admin panel to manage videos, agents and professionals." },
        { es: "Login con Google y mejoras de velocidad (menos viajes al servidor, caché y precarga).", en: "Google login and performance work (fewer server round trips, caching and prefetching)." },
        { es: "En el cotizador marítimo: identificar el producto a partir de una foto usando IA.", en: "In the sea-freight quoter: identifying a product from a photo using AI." },
      ],
      stack: ["Next.js", "React", "TypeScript", "Supabase", "Mercado Pago", "Playwright", "Vercel"],
      link: "https://ogcircle.vercel.app",
      visual: "modules",
    },
    {
      id: "riegos",
      // Capturas: subí las imágenes junto al resto y agregalas acá, ej: ["riegos-1.png"]
      images: [],
      frame: "browser",
      highlights: [
        { es: "Catálogo completo con categorías y fichas", en: "Full catalog with categories and product pages" },
        { es: "Pagos, envíos y retiro en los 3 locales", en: "Payments, shipping and pickup at all 3 stores" },
        { es: "Plan por fases hasta conectar el sistema de gestión", en: "Phased plan up to connecting the ERP" },
      ],
      kind: { es: "E-commerce", en: "E-commerce" },
      color: "sky",
      status: "progress",
      client: "Riegos del Sur",
      title: { es: "De 3 locales a tienda online", en: "From 3 stores to an online shop" },
      summary: {
        es: "Llevamos un comercio de piletas, riego y jardín a Tienda Nube, con pagos, envíos y retiro en sus 3 locales.",
        en: "We're taking a pool, irrigation and garden retailer online with Tienda Nube, including payments, shipping and pickup at its 3 stores.",
      },
      problem: {
        es: "El negocio vendía solo en sus locales. Necesitaba una tienda online ordenada, con todo el catálogo, sin vender productos que no tiene en stock.",
        en: "The business only sold in-store. It needed a well-organized online store with its full catalog, without selling items that are out of stock.",
      },
      how: null,
      mine: [
        { es: "Junto con mi socio Jero: árbol de categorías, contenido del catálogo, diseño de la tienda y envíos.", en: "Together with my partner Jero: category tree, catalog content, store design and shipping." },
        { es: "La herramienta de carga de productos con IA (el primer proyecto de esta lista).", en: "The AI product upload tool (the first project on this list)." },
        { es: "Planificación por fases: primero abrir y vender, después conectar el sistema de gestión (Contabilium) y Mercado Pago en los locales.", en: "Phased plan: first open and sell, then connect the ERP (Contabilium) and Mercado Pago in-store." },
      ],
      stack: ["Tienda Nube", "Mercado Pago", "Contabilium", "SEO", "GA4"],
      link: null,
      visual: "phases",
    },
    {
      id: "fidalgo",
      // Capturas: subí las imágenes junto al resto y agregalas acá, ej: ["fidalgo-1.png"]
      images: ["fidalgo-1.jpg", "fidalgo-2.jpg"],
      frame: "browser",
      highlights: [
        { es: "Una web con la estética propia del estudio", en: "A website with the studio's own look" },
        { es: "Trabajos, reels y servicios en un solo lugar", en: "Work, reels and services in one place" },
        { es: "Contacto directo para pedir presupuesto", en: "Direct contact to request a quote" },
      ],
      kind: { es: "Landing page", en: "Landing page" },
      color: "amber",
      status: "live",
      client: "Fidalgo Studio",
      title: { es: "Landing de Fidalgo Studio", en: "Fidalgo Studio landing page" },
      summary: {
        es: "La web de Fidalgo Studio, el estudio creativo de foto, video y contenido de Tomás Fidalgo en Tucumán.",
        en: "The website for Fidalgo Studio, Tomás Fidalgo's photo, video and content studio in Tucumán.",
      },
      problem: null,
      how: null,
      mine: [
        { es: "Diseño y desarrollo de la landing.", en: "Landing page design and development." },
      ],
      stack: ["Diseño web", "Desarrollo web", "Vercel"],
      link: "https://fidalgo-studio-landingpage.vercel.app",
      visual: "placeholder",
    },
  ],

  // ---------------------------------------------------------
  //  PROYECTOS CHICOS ("También en KEI")
  // ---------------------------------------------------------
  extras: [
    {
      title: { es: "Landing de KEI Software", en: "KEI Software website" },
      text: {
        es: "La web de la empresa: sección del equipo, testimonios reales y Google Search Console.",
        en: "Our company site: team section, real testimonials and Google Search Console.",
      },
      tags: ["Next.js", "SEO"],
      link: "https://keisoftware.dev",
    },
    {
      title: { es: "Contenido para redes de KEI", en: "KEI social media content" },
      text: {
        es: "Planifico y diseño posts y carruseles para Instagram y LinkedIn.",
        en: "I plan and design posts and carousels for Instagram and LinkedIn.",
      },
      tags: ["Instagram", "LinkedIn"],
      link: null,
    },
  ],
};
