export const SITE = {
  name: "gerald.dev",
  fullName: "Gerald Misa Denis",
  role: "Frontend Developer",
  email: "geraldmisa0@email.com",
  github: "https://github.com/GeraldMisa27",
  linkedin: "https://linkedin.com/in/gerald",
  cvUrl: "/cv-gerald-misa.pdf",
  available: true,
};

export const ROTATING_WORDS = [
  "interfaces.",
  "experiencias.",
  "productos.",
  "soluciones.",
];

export const STATS = [
  { num: "2.5", suffix: " años", label: "experiencia en producción" },
  { num: "3", suffix: "+", label: "productos entregados" },
  { num: "–80", suffix: "%", label: "tiempo presupuestación" },
  { num: "∞", suffix: "", label: "ganas de aprender" },
];

export const ABOUT = [
  {
    label: "origen",
    value: "Ingeniero Automático (CUJAE). Llegué al frontend por curiosidad y me quedé por pasión.",
  },
  {
    label: "experiencia",
    value: "2.5 años construyendo productos reales en producción con equipos profesionales.",
  },
  {
    label: "metodología",
    value: "Aprendo desde la documentación oficial. Entrego resultados, no solo código.",
  },
  {
    label: "stack principal",
    value: "TypeScript · React · Next.js · Tailwind · Node.js",
  },
];

export const EXPERIENCE = [
  {
    date: "2024 → actualidad",
    title: "Frontend Developer — Freelance",
    company: "Plataforma ride-hailing (tipo Uber)",
    description:
      "Panel administrativo con tracking GPS en tiempo real (Mapbox GL + gRPC-Web), JWT en memoria, RBAC deny-first y dashboard de KPIs: GMV, cancelaciones, productividad por zona.",
  },
  {
    date: "2023 → 2024",
    title: "Frontend Developer — Danngos Smart",
    company: "SIGE para ExaFan · Equipo de 6 personas",
    description:
      "EXAPRES (–80% tiempo con asistente IA), EXAFACT (facturación con OCR y comparativa visual) y EXABOT (chat con IA tipo ChatGPT con streaming en tiempo real).",
  },
  {
    date: "2022 → 2023",
    title: "Especialista Frontend — ETI",
    company: "Sistema SGestMan",
    description:
      "Puente entre usuarios y proveedor externo. Gestión de incidencias, no conformidades y capacitación del equipo.",
  },
];

export const PROJECTS = [
  {
    title: "Panel administrativo — plataforma ride-hailing",
    badge: "freelance",
    badgeColor: "purple" as const,
    description:
      "Gestión completa de conductores, vehículos y operaciones. Tracking GPS en tiempo real, autenticación segura JWT, RBAC deny-first y dashboard de KPIs operativos.",
    tags: ["Next.js", "TypeScript", "Mapbox GL", "gRPC-Web", "TanStack Query", "JWT"],
    mockup: "rideHailing" as const,
    mockupLabel: "Panel ride-hailing · tracking GPS en vivo",
    
  },
  {
    title: "SIGE — plataforma empresarial para ExaFan",
    badge: "Danngos Smart",
    badgeColor: "blue" as const,
    description:
      "EXAPRES (–80% tiempo), EXAFACT (OCR + comparativa visual) y EXABOT (chat con IA y streaming en tiempo real).",
    tags: ["React", "React Hook Form", "Zod", "Socket.IO", "TanStack Query"],
    mockup: "chat" as const,
    mockupLabel: "EXABOT · chat con IA en tiempo real",
  }, 
  {
    title: "SGestMan — sistema de gestión",
    badge: "ETI",
    badgeColor: "green" as const,
    description:
      "Especialista principal del sistema. Puente entre usuarios y proveedor externo, gestión de incidencias y capacitación del equipo.",
    tags: ["React", "Next.js", "Node.js", ".NET APIs"],
    mockup: "dashboard" as const,
    mockupLabel: "SGestMan · gestión de incidencias",
    
    
  },
];

export const STACK = [
  { abbr: "TS", name: "TypeScript", type: "lenguaje",     related: ["React", "TanStack Q.", "Zod", "Next.js"] },
  { abbr: "Re", name: "React",      type: "ui",           related: ["TypeScript", "TanStack Q.", "Zod", "Socket.IO", "Next.js"] },
  { abbr: "Nx", name: "Next.js",    type: "framework",    related: ["TypeScript", "React", "Tailwind", "Node.js"] },
  { abbr: "Tw", name: "Tailwind",   type: "estilos",      related: ["Next.js", "React"] },
  { abbr: "No", name: "Node.js",    type: "backend",      related: ["Next.js", "TypeScript"] },
  { abbr: "TQ", name: "TanStack Q.", type: "server state", related: ["React", "TypeScript", "Zod"] },
  { abbr: "Zd", name: "Zod",        type: "validación",   related: ["React", "TypeScript", "TanStack Q."] },
  { abbr: "So", name: "Socket.IO",  type: "tiempo real",  related: ["React", "TypeScript"] },
];

export const LEARNING = [
  {
    name: "Payload CMS",
    description: "CMS headless moderno para Next.js. Explorando colecciones, acceso a API REST y cómo integrarlo como backend.",
    status: "explorando",
  },
  {
    name: "Testing con Vitest",
    description: "Pruebas unitarias de componentes React con Testing Library. Aprendiendo mocks, assertions y coverage.",
    status: "explorando",
  },
  {
    name: "Core Web Vitals",
    description: "Optimización de LCP, CLS e INP. Aplicando mejoras reales en el panel de ride-hailing.",
    status: "aplicando",
  },
  {
    name: "SEO técnico",
    description: "Datos estructurados JSON-LD, sitemap, robots.txt y meta tags. Implementado en este portafolio.",
    status: "aplicando",
  },
];

export const EDUCATION = [
  {
    year: "2017 → 2023",
    title: "Ingeniería Automática",
    place: "CUJAE · La Habana, Cuba",
  },
  {
    year: "2023 → actualidad",
    title: "Frontend Development",
    place: "Autodidacta · Documentación oficial · React, Next.js, TypeScript",
  },
];