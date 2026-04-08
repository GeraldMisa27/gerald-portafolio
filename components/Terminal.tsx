"use client";
import { useEffect, useRef, useState } from "react";
import { SITE, STACK, EXPERIENCE, PROJECTS } from "@/lib/data";

// Tipos para las líneas de la terminal
interface Line {
  type: "prompt" | "output" | "success" | "info" | "error" | "empty";
  text: string;
}

// Comandos disponibles y su respuesta
// Cada comando devuelve un array de líneas para mostrar
const COMMANDS: Record<string, () => Line[]> = {
  help: () => [
    { type: "info", text: "Comandos disponibles:" },
    { type: "output", text: "  projects    → ver proyectos" },
    { type: "output", text: "  skills      → stack técnico" },
    { type: "output", text: "  experience  → experiencia laboral" },
    { type: "output", text: "  contact     → información de contacto" },
    { type: "output", text: "  about       → sobre mí" },
    { type: "output", text: "  clear       → limpiar terminal" },
    { type: "output", text: "  exit        → cerrar" },
  ],
  projects: () =>
    PROJECTS.flatMap((p) => [
      { type: "success" as const, text: `▸ ${p.title}` },
      { type: "output" as const, text: `  ${p.tags.join(" · ")}` },
      { type: "empty" as const, text: "" },
    ]),
  skills: () => [
    { type: "info", text: "Stack técnico:" },
    ...STACK.map((s) => ({
      type: "output" as const,
      text: `  ${s.name} — ${s.type}`,
    })),
  ],
  experience: () =>
    EXPERIENCE.map((e) => ({
      type: "success" as const,
      text: `${e.date.padEnd(18)} ${e.title}`,
    })),
  contact: () => [
    { type: "output", text: `Email:    ${SITE.email}` },
    { type: "success", text: `GitHub:   ${SITE.github}` },
    { type: "success", text: `LinkedIn: ${SITE.linkedin}` },
  ],
  about: () => [
    { type: "output", text: `${SITE.fullName} — ${SITE.role}` },
    { type: "output", text: "Ing. Automático (CUJAE) → Frontend por pasión." },
    { type: "output", text: "2.5 años en producción · Aprende desde docs oficiales." },
  ],
};

export default function Terminal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [lines, setLines] = useState<Line[]>([
    { type: "success", text: `Bienvenido al portafolio de ${SITE.fullName}.` },
    { type: "output", text: 'Escribe "help" para ver los comandos disponibles.' },
    { type: "empty", text: "" },
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  // Enfoca el input cada vez que se abre la terminal
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 100);
  }, [open]);

  // Hace scroll automático al fondo cuando llegan nuevas líneas
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  // Cierra con la tecla Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Procesa el comando cuando el usuario presiona Enter
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    setInput("");
    if (!cmd) return;

    // Añade la línea del prompt con el comando escrito
    const newLines: Line[] = [{ type: "prompt", text: cmd }];

    if (cmd === "clear") {
      setLines([]);
      return;
    }
    if (cmd === "exit") {
      onClose();
      return;
    }
    if (COMMANDS[cmd]) {
      newLines.push(...COMMANDS[cmd]());
    } else {
      newLines.push({
        type: "error",
        text: `Comando no encontrado: "${cmd}". Escribe "help" para ver los disponibles.`,
      });
    }

    newLines.push({ type: "empty", text: "" });
    setLines((prev) => [...prev, ...newLines]);
  }

  // No renderiza nada si está cerrada
  if (!open) return null;

  return (
    // Overlay oscuro — clic fuera cierra la terminal
    <div
      className="fixed inset-0 bg-black/80 z-50 flex items-start justify-center pt-16"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-[#0d0d14] border border-white/10 rounded-xl w-full max-w-145 overflow-hidden">

        {/* Header estilo macOS con los tres puntos de colores */}
        <div className="bg-[#111118] px-4 py-2.5 flex items-center gap-2 border-b border-white/10">
          {[
            { color: "#ff5f56", label: "cerrar" },
            { color: "#ffbd2e", label: "minimizar" },
            { color: "#27c93f", label: "maximizar" },
          ].map((dot) => (
            <div
              key={dot.label}
              className="w-2.5 h-2.5 rounded-full"
              style={{ background: dot.color }}
            />
          ))}
          <span className="text-[10px] text-white/30 ml-2 font-mono">
            {SITE.name} — terminal interactiva
          </span>
        </div>

        {/* Área de output con scroll */}
        <div
          ref={bodyRef}
          className="p-4 font-mono text-[13px] max-h-80 overflow-y-auto space-y-1"
        >
          {lines.map((line, i) => {
            // Línea vacía
            if (line.type === "empty") return <div key={i}>&nbsp;</div>;

            // Línea del prompt — muestra el comando escrito
            if (line.type === "prompt") {
              return (
                <p key={i}>
                  <span className="text-[#6366f1]">gerald@portfolio:~$</span>{" "}
                  <span className="text-white">{line.text}</span>
                </p>
              );
            }

            // Líneas de output con color según el tipo
            const colors: Record<string, string> = {
              success: "text-[#4ade80]",
              info: "text-[#a5b4fc]",
              error: "text-[#f87171]",
              output: "text-white",
            };

            return (
              <p key={i} className={colors[line.type] ?? "text-white"}>
                {line.text}
              </p>
            );
          })}
        </div>

        {/* Input del usuario */}
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 px-4 pb-4"
        >
          <span className="text-[#6366f1] font-mono text-sm whitespace-nowrap">
            gerald@portfolio:~$
          </span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="escribe un comando..."
            className="flex-1 bg-transparent text-white font-mono text-sm outline-none placeholder:text-white/20"
          />
        </form>

      </div>
    </div>
  );
}