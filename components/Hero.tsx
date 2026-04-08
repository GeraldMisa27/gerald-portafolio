"use client";
import { useEffect, useState } from "react";
import { SITE, ROTATING_WORDS } from "@/lib/data";

export default function Hero({
    onToggleCode,
    codeVisible,
}: {
    onToggleCode: () => void;
    codeVisible: boolean;
}) {
    const [wordIdx, setWordIdx] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            setTimeout(() => {
                setWordIdx((i) => (i + 1) % ROTATING_WORDS.length);
                setVisible(true);
            }, 350);
        }, 2200);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full">
            <div className="flex items-stretch max-w-250 mx-auto overflow-hidden min-h-90">
                {/* ── Lado izquierdo: texto ── */}
                <div className="flex-1 px-8 py-14 flex flex-col justify-center">
                    <p className="text-[11px] text-white/50 uppercase tracking-widest mb-4">
                        Frontend Developer ·{" "}
                        <span className="text-[#a5b4fc]">TypeScript · React · Next.js</span>
                    </p>

                    <h1 className="text-[42px] font-medium leading-tight tracking-tight text-white mb-1">
                        Hola, soy Gerald Misa.
                    </h1>

                    <div className="flex items-center gap-3 text-[42px] font-medium tracking-tight mb-5 flex-wrap">
                        <span className="text-white">Construyo</span>
                        <span
                            className="text-[#6366f1]"
                            style={{
                                opacity: visible ? 1 : 0,
                                transform: visible ? "translateY(0)" : "translateY(10px)",
                                transition: "opacity 0.3s, transform 0.3s",
                                minWidth: 200,
                                display: "inline-block",
                            }}
                        >
                            {ROTATING_WORDS[wordIdx]}
                        </span>
                    </div>

                    <p className="text-sm text-white/60 leading-relaxed max-w-115 mb-6">
                        Ingeniero Automático y hoy me desempeño como desarrollor de frontend con {" "}
                        <strong className="text-white font-medium">2.5 años</strong>{" "}
                        construyendo productos reales — desde chats con IA hasta
                        tracking GPS en tiempo real.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        <a
                            href="#proyectos"
                            className="bg-[#6366f1] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity"
                        >
                            ver proyectos
                        </a>
                        <a
                            href="#contacto"
                            className="text-[#a5b4fc] px-5 py-2.5 rounded-lg text-sm border border-white/10 hover:border-[#6366f1] transition-colors"
                        >
                            contactar →
                        </a>
                        <a
                            href={SITE.cvUrl}
                            download
                            className="text-[#4ade80] px-5 py-2.5 rounded-lg text-sm border border-[#166534] hover:bg-[#0f1a0f] transition-colors"
                        >
                            ↓ CV.pdf
                        </a>
                        <button
                            onClick={onToggleCode}
                            className="bg-[#16161f] text-white/60 px-4 py-2.5 rounded-lg text-xs border border-white/10 hover:border-[#6366f1] hover:text-white transition-colors font-mono"
                        >
                            {codeVisible ? "✕" : "</>"}
                        </button>
                    </div>
                </div>

                {/* ── Lado derecho: imagen Opción C ── */}
                <div className="w-80 shrink-0 relative">
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{
                            background: "linear-gradient(135deg, #12122a, #1a1a3a 40%, #1e1e2e)",
                        }}
                    >
                        {/* Fade lateral izquierdo */}
                        <div
                            className="absolute left-0 top-0 bottom-0 w-20 z-10"
                            style={{
                                background: "linear-gradient(to right, #0a0a0f, transparent)",
                            }}
                        />

                        {/* Iniciales decorativas de fondo */}
                        <span className="absolute bottom-5 right-5 text-[64px] font-medium text-[#6366f1] select-none"
                            style={{ opacity: 0.08 }}>
                            GM
                        </span>

                        {/* Avatar placeholder */}
                        <div className="relative z-20 w-40 h-50 rounded-2xl border border-white/10 flex flex-col items-center justify-center gap-2"
                            style={{ background: "linear-gradient(160deg, #1e1e38, #252040)" }}>
                            <span className="text-[40px] font-medium text-[#a5b4fc]">GM</span>
                            <span className="text-[10px] text-white/40 font-mono">gerald.dev</span>
                            <span className="absolute -bottom-3 bg-[#4ade80] text-[#061206] text-[9px] font-bold px-3 py-1 rounded-full">
                                ● disponible
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}