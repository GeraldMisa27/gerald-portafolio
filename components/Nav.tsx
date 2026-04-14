"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

export default function Nav({ onOpenTerminal }: { onOpenTerminal: () => void }) {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    }, []);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "/" && document.activeElement?.tagName !== "INPUT") {
                e.preventDefault();
                onOpenTerminal();
            }
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [onOpenTerminal]);

    const links = ["sobre mí", "proyectos", "stack", "contacto"];

    return (
        <nav
            className="sticky top-0 z-50 border-b border-[#1e1e2e] transition-all duration-200"
            style={{
                background: scrolled ? "rgba(10,10,15,0.95)" : "#0a0a0f",
                backdropFilter: scrolled ? "blur(12px)" : "none",
            }}
        >
            {/* Barra principal */}
            {/* Barra principal */}
            <div className="flex items-center justify-between px-5 md:px-7 py-3">
                {/* Logo */}
                <span className="text-[15px] font-medium text-[#6366f1]">{SITE.name}</span>

                {/* Derecha — badge siempre visible + desktop links + hamburguesa móvil */}
                <div className="flex items-center gap-3">

                    {/* Badge disponible — visible siempre en móvil y desktop */}
                    <span className="flex items-center gap-1.5 text-[11px] bg-[#0f1a0f] text-[#4ade80] px-3 py-1 rounded-full border border-[#166534]">
                        <span className="pulse-dot w-1.5 h-1.5 rounded-full bg-[#4ade80] inline-block" />
                        disponible
                    </span>

                    {/* Desktop — links + terminal */}
                    <div className="hidden md:flex items-center gap-3">
                        <div className="flex gap-5">
                            {links.map((link) => (
                                <a
                                    key={link}
                                    href={`#${link.replace(" ", "-")}`}
                                    className="text-sm text-white/70 hover:text-white transition-colors"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={onOpenTerminal}
                            className="flex items-center gap-1.5 bg-[#16161f] border border-[#1e1e2e] rounded-lg px-3 py-1 text-[11px] text-[#9b9bb8] hover:text-white transition-colors cursor-pointer"
                        >
                            <kbd className="bg-[#0d0d16] border border-[#1e1e2e] rounded px-1 text-[10px] text-[#a5b4fc] font-mono">/</kbd>
                            terminal
                        </button>
                    </div>

                    {/* Móvil — botón hamburguesa */}
                    <button
                        className="md:hidden flex flex-col gap-1 p-2"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Abrir menú"
                    >
                        <span className={`block w-5 h-0.5 bg-white/60 transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white/60 transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
                        <span className={`block w-5 h-0.5 bg-white/60 transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>

                </div>
            </div>

            {/* Móvil — menú desplegable */}
            {menuOpen && (
                <div className="md:hidden border-t border-[#1e1e2e] bg-[#0a0a0f] px-5 py-4 flex flex-col gap-4">
                    {links.map((link) => (
                        <a
                            key={link}
                            href={`#${link.replace(" ", "-")}`}
                            className="text-sm text-white/70 hover:text-white transition-colors"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                    {/* Terminal en el menú móvil */}
                    <div className="pt-2 border-t border-[#1e1e2e]">
                        <button
                            onClick={() => { onOpenTerminal(); setMenuOpen(false); }}
                            className="flex items-center gap-1.5 bg-[#16161f] border border-[#1e1e2e] rounded-lg px-3 py-1 text-[11px] text-[#9b9bb8] hover:text-white transition-colors"
                        >
                            <kbd className="bg-[#0d0d16] border border-[#1e1e2e] rounded px-1 text-[10px] text-[#a5b4fc] font-mono">/</kbd>
                            terminal
                        </button>
                    </div>
                </div>
            )
            }
        </nav >
    );
}