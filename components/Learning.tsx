import { LEARNING } from "@/lib/data";

// Colores del badge según el estado de aprendizaje
const STATUS_STYLES = {
  explorando: "bg-[#1a1040] text-[#a78bfa] border-[#4c1d95]",
  aplicando: "bg-[#0f1f1a] text-[#34d399] border-[#065f46]",
};

// Sección de aprendizaje continuo — muestra tecnologías en curso
// sin porcentajes que puedan perjudicar la imagen profesional
export default function Learning() {
  return (
    <section className="w-full max-w-250 mx-auto px-4 md:px-7 py-8 md:py-12">
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        aprendizaje continuo
      </p>

      <h2 className="text-[22px] font-medium text-white mb-2 tracking-tight">
        ¿Qué estoy aprendiendo ahora?
      </h2>

      <p className="text-sm text-white/40 mb-6">
        Tecnologías que estoy estudiando activamente para seguir creciendo.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {LEARNING.map((item) => (
          <div
            key={item.name}
            className="bg-[#16161f] border border-white/10 rounded-xl p-4 hover:border-[#6366f1] transition-colors"
          >
            {/* Nombre y badge de estado */}
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-white">{item.name}</p>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full border ${STATUS_STYLES[item.status as keyof typeof STATUS_STYLES]}`}
              >
                {item.status}
              </span>
            </div>

            {/* Descripción de qué estás aprendiendo */}
            <p className="text-xs text-white/50 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}