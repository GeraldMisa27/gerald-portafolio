import { STATS } from "@/lib/data";

// Barra de estadísticas debajo del hero
// Server Component — no necesita "use client" porque no tiene interactividad
export default function Stats() {
  return (
    <div className="flex border-t border-b border-white/10 max-w-250 mx-auto">
      {STATS.map((stat, i) => (
        <div
          key={i}
          className="flex-1 px-7 py-5 border-r border-white/10 last:border-r-0"
        >
          {/* Número principal con el sufijo en color acento */}
          <p className="text-xl font-medium tracking-tight text-white">
            {stat.num}
            <span className="text-[#6366f1]">{stat.suffix}</span>
          </p>
          <p className="text-[12px] text-white/40 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}