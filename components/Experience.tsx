import { EXPERIENCE } from "@/lib/data";

// Sección de experiencia con timeline vertical
// Server Component — datos estáticos de lib/data.ts
export default function Experience() {
  return (
    <section className="w-full max-w-250 mx-auto px-4 md:px-7 py-8 md:py-12">
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        experiencia laboral
      </p>

      <h2 className="text-[22px] font-medium text-white mb-6 tracking-tight">
        Trayectoria profesional
      </h2>

      <div className="flex flex-col">
        {EXPERIENCE.map((item, i) => (
          <div key={i} className="flex gap-5 pb-6 last:pb-0">

            {/* Columna izquierda: punto y línea vertical */}
            <div className="flex flex-col items-center w-9 shrink-0">
              {/* Punto del timeline */}
              <div className="w-2.5 h-2.5 rounded-full border-2 border-[#6366f1] bg-[#0a0a0f] mt-1 shrink-0" />
              {/* Línea vertical — no se muestra en el último item */}
              {i < EXPERIENCE.length - 1 && (
                <div className="w-px flex-1 bg-white/10 mt-1" />
              )}
            </div>

            {/* Columna derecha: contenido */}
            <div className="pb-1">
              <p className="text-[10px] text-[#6366f1] font-mono mb-1">
                {item.date}
              </p>
              <p className="text-sm font-medium text-white mb-0.5">
                {item.title}
              </p>
              <p className="text-xs text-white/50 mb-2">
                {item.company}
              </p>
              <p className="text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}