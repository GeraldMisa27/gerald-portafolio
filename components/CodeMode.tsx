"use client";

// Componente que muestra el perfil como código TypeScript
// Se activa con el botón </> del hero y se cierra con el botón ✕
export default function CodeMode({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: () => void;
}) {
  // Si no está visible no renderiza nada
  if (!visible) return null;

  return (
    <div className="w-full max-w-250 mx-auto px-4 md:px-7 py-8 md:py-12">
      <div className="bg-[#111118] border border-white/10 rounded-xl p-5 font-mono text-sm leading-relaxed">

        {/* Header con título y botón cerrar */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-[10px] text-white/50 uppercase tracking-widest">
            gerald.ts — modo código
          </span>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Código con syntax highlighting manual usando colores */}
        <div className="space-y-0.5">
          <p>
            <span className="text-[#c678dd]">const </span>
            <span className="text-[#98c379]">gerald</span>
            <span className="text-white/60">: </span>
            <span className="text-[#56b6c2]">Developer</span>
            <span className="text-white/60"> = {"{"}</span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="text-[#e06c75]">nombre</span>
            <span className="text-white/60">: </span>
            <span className="text-[#98c379]">&quot;Gerald Misa Denis&quot;</span>
            <span className="text-white/60">, </span>
            <span className="text-white/30 italic">{"// Ingeniero → Frontend"}</span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="text-[#e06c75]">rol</span>
            <span className="text-white/60">: </span>
            <span className="text-[#98c379]">&quot;Frontend Developer&quot;</span>
            <span className="text-white/60">,</span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="text-[#e06c75]">experiencia</span>
            <span className="text-white/60">: </span>
            <span className="text-[#98c379]">&quot;2.5 años&quot;</span>
            <span className="text-white/60">,</span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="text-[#e06c75]">disponible</span>
            <span className="text-white/60">: </span>
            <span className="text-[#56b6c2]">true</span>
            <span className="text-white/60">,</span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="text-[#e06c75]">stack</span>
            <span className="text-white/60">: [</span>
            <span className="text-[#98c379]">&quot;TypeScript&quot;</span>
            <span className="text-white/60">, </span>
            <span className="text-[#98c379]">&quot;React&quot;</span>
            <span className="text-white/60">, </span>
            <span className="text-[#98c379]">&quot;Next.js&quot;</span>
            <span className="text-white/60">, </span>
            <span className="text-[#98c379]">&quot;Tailwind&quot;</span>
            <span className="text-white/60">],</span>
          </p>
          <p>
            &nbsp;&nbsp;
            <span className="text-[#e06c75]">contacto</span>
            <span className="text-white/60">: </span>
            <span className="text-[#98c379]">&quot;geraldmisa0@email.com&quot;</span>
            <span className="text-white/60">,</span>
          </p>
          <p><span className="text-white/60">{"}"}</span></p>
        </div>

      </div>
    </div>
  );
}