import { ABOUT } from "@/lib/data";

// Sección "sobre mí" — Server Component, solo muestra datos estáticos
export default function About() {
  return (
    <section
      id="sobre-mí"
      className="max-w-250 mx-auto px-7 py-12"
    >
      {/* Label superior pequeño */}
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        sobre mí
      </p>

      <h2 className="text-[22px] font-medium text-white mb-6 tracking-tight">
        De ingeniería a frontend
      </h2>

      {/* Grid 2x2 de tarjetas */}
      <div className="grid grid-cols-2 gap-3">
        {ABOUT.map((item) => (
          <div
            key={item.label}
            className="bg-[#16161f] border border-white/10 rounded-xl p-4 hover:border-[#6366f1] transition-colors"
          >
            <p className="text-[10px] uppercase tracking-widest text-[#6366f1] mb-2">
              {item.label}
            </p>
            <p className="text-sm text-white leading-relaxed">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}