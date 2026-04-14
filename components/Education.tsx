import { EDUCATION } from "@/lib/data";

// Sección de formación académica y autodidacta
// Server Component — datos estáticos
export default function Education() {
  return (
    <section className="w-full max-w-250 mx-auto px-4 md:px-7 py-8 md:py-12">
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        formación
      </p>

      <h2 className="text-[22px] font-medium text-white mb-6 tracking-tight">
        Estudios y aprendizaje
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {EDUCATION.map((item) => (
          <div
            key={item.title}
            className="bg-[#16161f] border border-white/10 rounded-xl p-4 hover:border-[#6366f1] transition-colors"
          >
            {/* Año en monospace para darle estilo técnico */}
            <p className="text-[10px] text-[#6366f1] font-mono mb-1.5">
              {item.year}
            </p>
            <p className="text-sm font-medium text-white mb-1">
              {item.title}
            </p>
            <p className="text-xs text-white/50">
              {item.place}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}