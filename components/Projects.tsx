import { PROJECTS } from "@/lib/data";

// Colores de los badges según el tipo de proyecto
const BADGE_STYLES = {
  purple: "bg-[#1a1040] text-[#a78bfa] border-[#4c1d95]",
  blue: "bg-[#0c1a2e] text-[#60a5fa] border-[#1e3a5f]",
  green: "bg-[#0f1f1a] text-[#34d399] border-[#065f46]",
};

// ── Mockup 1: mapa del panel ride-hailing ─────────────────────────────────────
function RideHailingMockup() {
  return (
    <div className="w-full h-full bg-[#0a0a18] flex flex-col p-2.5 gap-1.5">
      {/* Barra superior estilo navegador */}
      <div className="h-2.5 bg-[#16161f] rounded flex items-center px-1.5 gap-1 shrink-0">
        {["#ff5f56", "#ffbd2e", "#27c93f"].map((c) => (
          <div key={c} className="w-1.5 h-1.5 rounded-full" style={{ background: c }} />
        ))}
      </div>

      <div className="flex gap-1.5 flex-1">
        {/* Mapa con marcadores de conductores */}
        <div className="flex-1 bg-[#0d0d1e] rounded relative overflow-hidden">
          {/* Calles */}
          <div className="absolute bg-[#1a1a30] opacity-40" style={{ left: 0, top: "42%", right: 0, height: 8 }} />
          <div className="absolute bg-[#1a1a30] opacity-40" style={{ left: "38%", top: 0, bottom: 0, width: 6 }} />
          <div className="absolute bg-[#1a1a30] opacity-30" style={{ left: "65%", top: 0, bottom: 0, width: 5 }} />

          {/* Marcadores de conductores en el mapa */}
          {[
            { bg: "#4ade80", top: "22%", left: "25%" },
            { bg: "#6366f1", top: "58%", left: "55%" },
            { bg: "#4ade80", top: "75%", left: "18%" },
            { bg: "#f97316", top: "30%", left: "72%" },
          ].map((m, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{ background: m.bg, top: m.top, left: m.left }}
            />
          ))}
        </div>

        {/* Panel de KPIs a la derecha del mapa */}
        <div className="w-20 flex flex-col gap-1">
          {[
            ["$2.4k", "GMV hoy"],
            ["18", "activos"],
            ["94%", "completados"],
            ["4.8", "rating"],
          ].map(([num, label]) => (
            <div key={label} className="flex-1 bg-[#13131f] rounded p-1">
              <p className="text-[7px] font-medium text-[#a5b4fc] font-mono">{num}</p>
              <p className="text-[6px] text-white/40">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mockup 2: chat con IA del EXABOT ─────────────────────────────────────────
function ChatMockup() {
  return (
    <div className="w-full h-full bg-[#0d1117] flex p-2 gap-1.5">
      {/* Sidebar con conversaciones guardadas */}
      <div className="w-12 bg-[#111820] rounded p-1.5 flex flex-col gap-1">
        {[20, 6, 6, 6].map((h, i) => (
          <div
            key={i}
            className="bg-[#1e2a1e] rounded"
            style={{
              height: h,
              borderLeft: i === 0 || i === 3 ? "2px solid #4ade80" : "none",
            }}
          />
        ))}
      </div>

      {/* Área principal del chat */}
      <div className="flex-1 bg-[#111820] rounded flex flex-col p-2 gap-1.5 justify-end">
        <div className="bg-[#1e2a1e] text-[#4ade80] text-[8px] rounded-lg px-2 py-1 self-start max-w-[80%]">
          ¿Cuántos ventiladores para 500 aves?
        </div>
        <div className="bg-[#1a1a2e] text-[#a5b4fc] text-[8px] rounded-lg px-2 py-1 self-end max-w-[80%]">
          Para 500 aves recomiendo 3 unidades EF-200...
        </div>
        <div className="bg-[#1e2a1e] text-[#4ade80] text-[8px] rounded-lg px-2 py-1 self-start max-w-[80%]">
          ¿Y el presupuesto total?
        </div>
        {/* Indicador de escritura animado */}
        <div className="flex gap-1 self-end px-2 py-1">
          {[0, 200, 400].map((delay) => (
            <div
              key={delay}
              className="w-1 h-1 rounded-full bg-[#a5b4fc]"
              style={{ animation: `pulse-dot 1s ${delay}ms infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Mockup 3: dashboard del SGestMan ─────────────────────────────────────────
function DashboardMockup() {
  return (
    <div className="w-full h-full bg-[#0d0d14] flex flex-col p-2 gap-1.5">
      {/* KPIs superiores */}
      <div className="flex gap-1.5 shrink-0">
        {[
          ["247", "incidencias"],
          ["98%", "resueltas"],
          ["12", "pendientes"],
          ["5", "equipos"],
        ].map(([num, label]) => (
          <div key={label} className="flex-1 bg-[#13131f] rounded p-1.5">
            <p className="text-[8px] font-medium text-[#a5b4fc] font-mono">{num}</p>
            <p className="text-[6px] text-white/40">{label}</p>
          </div>
        ))}
      </div>

      {/* Tabla e histograma */}
      <div className="flex gap-1.5 flex-1">
        {/* Tabla de incidencias */}
        <div className="flex-1 bg-[#13131f] rounded p-1.5 flex flex-col gap-1">
          <div className="h-1.5 bg-[#1a1a30] rounded" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-2 bg-[#1e1e2e] rounded" />
          ))}
        </div>
        {/* Gráfica de barras */}
        <div className="w-14 bg-[#13131f] rounded flex items-end justify-center gap-1 p-1.5">
          {[60, 85, 40, 95, 70].map((h, i) => (
            <div
              key={i}
              className="w-2 rounded-sm"
              style={{
                height: `${h}%`,
                background: i === 3 ? "#8b5cf6" : "#6366f1",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Mapa que conecta cada proyecto con su mockup correspondiente
const MOCKUPS = {
  rideHailing: RideHailingMockup,
  chat: ChatMockup,
  dashboard: DashboardMockup,
};

// ── Componente principal ──────────────────────────────────────────────────────
export default function Projects() {
  return (
    <section id="proyectos" className="max-w-250 mx-auto px-7 py-12">
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        proyectos destacados
      </p>

      <h2 className="text-[22px] font-medium text-white mb-6 tracking-tight">
        Lo que he construido
      </h2>

      <div className="flex flex-col gap-3.5">
        {PROJECTS.map((project) => {
          // Selecciona el mockup correspondiente al proyecto
          const Mockup = MOCKUPS[project.mockup as keyof typeof MOCKUPS];

          return (
            <article
              key={project.title}
              className="bg-[#16161f] border border-white/10 rounded-xl overflow-hidden hover:border-[#6366f1] transition-all duration-200 hover:-translate-y-0.5"
            >
              {/* Imagen/mockup del proyecto */}
              <div className="h-37.5 relative overflow-hidden">
                <Mockup />
                {/* Label flotante sobre el mockup */}
                <span className="absolute top-2 left-2 bg-black/75 text-white text-[9px] px-2 py-0.5 rounded-full border border-white/10 backdrop-blur-sm z-10">
                  {project.mockupLabel}
                </span>
              </div>

              {/* Contenido de la tarjeta */}
              <div className="p-4.5">
                <div className="flex justify-between items-start gap-2 mb-2">
                  <h3 className="text-sm font-medium text-white">
                    {project.title}
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full border shrink-0 ${BADGE_STYLES[project.badgeColor]}`}>
                    {project.badge}
                  </span>
                </div>
                <p className="text-sm text-white/60 leading-relaxed mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] bg-[#13131e] text-[#a5b4fc] px-2 py-0.5 rounded-md border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}