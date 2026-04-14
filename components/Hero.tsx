"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SITE, ROTATING_WORDS } from "@/lib/data";

// Obtiene la configuración desde Payload
// async function getSettings() {
//   try {
//     const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
//     const res = await fetch(`${baseUrl}/api/globals/settings`, {
//       next: { revalidate: 60 },
//     });
//     if (!res.ok) throw new Error("Error al obtener settings");
//     return await res.json();
//   } catch {
//     return null;
//   }
// }

export default function Hero({
    onToggleCode,
    codeVisible,
    photoUrl,
}: {
    onToggleCode: () => void;
    codeVisible: boolean;
    photoUrl?: string;
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
            <div className="flex flex-col md:flex-row items-stretch max-w-250 mx-auto overflow-hidden min-h-90">

                {/* Lado izquierdo: texto */}
                <div className="flex-1 px-5 md:px-8 py-10 md:py-14 flex flex-col justify-center">
                    <p className="text-[10px] md:text-[11px] text-white/60 uppercase tracking-widest mb-4">
                        Frontend Developer ·{" "}
                        <span className="text-[#a5b4fc]">TypeScript · React · Next.js</span>
                    </p>

                    <h1 className="text-[32px] md:text-[42px] font-medium leading-tight tracking-tight text-white mb-1">
                        Hola, soy Gerald.
                    </h1>

                    <div className="flex items-center gap-3 text-[32px] md:text-[42px] font-medium tracking-tight mb-5 flex-wrap">
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

                    <p className="text-sm text-white/70 leading-relaxed max-w-115 mb-6">
                        Ingeniero Automático reconvertido a developer.{" "}
                        <strong className="text-white font-medium">2.5 años</strong>{" "}
                        construyendo productos reales — desde chats con IA hasta
                        tracking GPS en tiempo real.
                    </p>

                    <div className="flex gap-2 flex-wrap">
                        <a href="#proyectos"
                            className="bg-[#6366f1] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity">
                            Ver proyectos
                        </a>
                        <a href="#contacto"
                            className="text-[#a5b4fc] px-5 py-2.5 rounded-lg text-sm border border-white/10 hover:border-[#6366f1] transition-colors">
                            Contactar →
                        </a>
                        <a href={SITE.cvUrl} download
                            className="text-[#4ade80] px-4 py-2.5 rounded-lg text-xs border border-[#166534] hover:bg-[#0f1a0f] transition-colors">
                            ↓ CV.pdf
                        </a>
                        <button onClick={onToggleCode}
                            className="bg-[#16161f] text-white/70 px-4 py-2.5 rounded-lg text-xs border border-white/10 hover:border-[#6366f1] hover:text-white transition-colors font-mono">
                            {codeVisible ? "✕" : "</>"}
                        </button>
                    </div>
                </div>

                {/* ── Lado derecho: foto circular ── */}
                <div className="hidden md:block w-80 shrink-0 relative">
                    <div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #12122a, #1a1a3a 40%, #1e1e2e)" }}
                    >
                        {/* Fade lateral izquierdo */}
                        <div className="absolute left-0 top-0 bottom-0 w-20 z-10"
                            style={{ background: "linear-gradient(to right, #0a0a0f, transparent)" }} />


                        {/* Foto circular */}
                        <div className="relative z-20">
                            {photoUrl ? (
                                // Foto real desde Payload
                                <div className="relative">
                                    <div className="w-45 h-45 rounded-full border-2 border-[#6366f1] overflow-hidden">
                                        <Image
                                            src={photoUrl}
                                            alt="Gerald Misa Denis — Frontend Developer"
                                            width={180}
                                            height={180}
                                            className="w-full h-full object-cover object-center"
                                            loading="lazy"
                                            sizes="180px"
                                        />
                                    </div>
                                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#4ade80] text-[#061206] text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                        ● disponible
                                    </span>
                                </div>
                            ) : (
                                // Placeholder con iniciales
                                <div className="relative">
                                    <div className="w-45 h-45 rounded-full border-2 border-[#6366f1] bg-linear-to-b from-[#1e1e38] to-[#252040] flex flex-col items-center justify-center gap-2">
                                        <span className="text-[48px] font-medium text-[#a5b4fc]">GM</span>
                                        <span className="text-[10px] text-white/50 font-mono">gerald.dev</span>
                                    </div>
                                    <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#4ade80] text-[#061206] text-[9px] font-bold px-3 py-1 rounded-full whitespace-nowrap">
                                        ● disponible
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}