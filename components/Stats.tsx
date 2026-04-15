import { STATS } from "@/lib/data";

// Barra de estadísticas debajo del hero
// En móvil se divide en grid 2x2, en desktop es fila horizontal
export default function Stats() {
    return (
        <div className="border-t border-b border-white/10 max-w-250 mx-auto">
            <div className="hidden md:grid md:grid-cols-4">
                {STATS.map((stat, i) => (
                    <div
                        key={i}
                        className="px-7 py-5 border-r border-white/10 last:border-r-0"
                    >
                        <p className="text-xl font-medium tracking-tight text-white">
                            {stat.num}
                            <span className="text-[#6366f1]">{stat.suffix}</span>
                        </p>
                        <p className="text-[11px] text-white/50 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}