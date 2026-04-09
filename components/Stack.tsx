"use client";
import { useState } from "react";
import { STACK } from "@/lib/data";

// Stack técnico interactivo
// Al hacer hover en una tecnología se iluminan las relacionadas
// y se atenúan las demás
export default function Stack() {
  // Guarda los nombres de las tecnologías relacionadas con la que está en hover
  const [highlighted, setHighlighted] = useState<string[]>([]);

  return (
    <section id="stack" className="w-full max-w-250 mx-auto px-4 md:px-7 py-8 md:py-12">
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        stack técnico
      </p>

      <h2 className="text-[22px] font-medium text-white mb-2 tracking-tight">
        Tecnologías que uso
      </h2>

      <p className="text-xs text-white/40 italic mb-6">
        Pasa el cursor sobre una tecnología para ver con cuáles la has combinado
      </p>

      <div className="grid grid-cols-4 gap-2">
        {STACK.map((tech) => {
          // Determina si esta tecnología está relacionada con la que está en hover
          const isRelated = highlighted.includes(tech.name);
          // Atenúa las que no están relacionadas cuando hay una en hover
          const isDimmed = highlighted.length > 0 && !isRelated;

          return (
            <div
              key={tech.name}
              className="bg-[#16161f] border border-white/10 rounded-lg p-3.5 text-center cursor-pointer transition-all duration-150"
              style={{
                borderColor: isRelated ? "#8b5cf6" : isDimmed ? "transparent" : "",
                opacity: isDimmed ? 0.35 : 1,
                transform: isRelated ? "translateY(-2px)" : "none",
                background: isRelated ? "#13131e" : "",
              }}
              // Al entrar el cursor guarda las tecnologías relacionadas
              onMouseEnter={() => setHighlighted(tech.related)}
              // Al salir limpia el estado
              onMouseLeave={() => setHighlighted([])}
            >
              {/* Icono con siglas */}
              <div className="w-7 h-7 bg-[#1a1a2e] rounded-md mx-auto mb-1.5 flex items-center justify-center text-[11px] font-medium text-[#a5b4fc]">
                {tech.abbr}
              </div>
              <p className="text-xs font-medium text-white">{tech.name}</p>
              <p className="text-[10px] text-white/40 mt-0.5">{tech.type}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}