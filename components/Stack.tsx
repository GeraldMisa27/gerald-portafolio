"use client";
import { useState } from "react";
import { STACK } from "@/lib/data";

export default function Stack() {
  const [highlighted, setHighlighted] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  // En móvil: tap selecciona/deselecciona
  function handleTap(tech: typeof STACK[0]) {
    if (selected === tech.name) {
      // Segundo tap en la misma — deselecciona
      setSelected(null);
      setHighlighted([]);
    } else {
      // Tap en otra — selecciona
      setSelected(tech.name);
      setHighlighted(tech.related);
    }
  }

  return (
    <section id="stack" className="w-full max-w-250 mx-auto px-4 md:px-7 py-8 md:py-12">
      <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
        stack técnico
      </p>

      <h2 className="text-[22px] font-medium text-white mb-2 tracking-tight">
        Tecnologías que uso
      </h2>

      {/* Texto diferente según dispositivo */}
      <p className="text-xs text-white/50 italic mb-6 hidden md:block">
        Pasa el cursor sobre una tecnología para ver con cuáles la has combinado
      </p>
      <p className="text-xs text-white/50 italic mb-6 md:hidden">
        Toca una tecnología para ver con cuáles la has combinado
      </p>

      <div className="grid grid-cols-4 gap-2">
        {STACK.map((tech) => {
          const isSelected = selected === tech.name;
          const isRelated = highlighted.includes(tech.name);
          const isDimmed = highlighted.length > 0 && !isRelated && !isSelected;

          return (
            <div
              key={tech.name}
              className="bg-[#16161f] border border-white/10 rounded-lg p-3.5 text-center cursor-pointer transition-all duration-150"
              style={{
                borderColor: isSelected
                  ? "#4ade80"           // verde — seleccionado en móvil
                  : isRelated
                  ? "#8b5cf6"           // violeta — relacionado
                  : isDimmed
                  ? "transparent"
                  : "",
                opacity: isDimmed ? 0.35 : 1,
                transform: isRelated || isSelected ? "translateY(-2px)" : "none",
                background: isSelected
                  ? "#0f1a0f"           // fondo verde oscuro
                  : isRelated
                  ? "#13131e"
                  : "",
              }}
              // Desktop: hover
              onMouseEnter={() => {
                if (!selected) setHighlighted(tech.related);
              }}
              onMouseLeave={() => {
                if (!selected) setHighlighted([]);
              }}
              // Móvil: tap
              onClick={() => handleTap(tech)}
            >
              <div className="w-7 h-7 bg-[#1a1a2e] rounded-md mx-auto mb-1.5 flex items-center justify-center text-[11px] font-medium text-[#a5b4fc]">
                {tech.abbr}
              </div>
              <p className={`text-xs font-medium ${isSelected ? "text-[#4ade80]" : "text-white"}`}>
                {tech.name}
              </p>
              <p className="text-[10px] text-white/50 mt-0.5">{tech.type}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}