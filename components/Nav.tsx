"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

export default function Nav({
    onOpenTerminal,
}: {
    onOpenTerminal: () => void;
}) {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <nav
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 28px",
                borderBottom: "0.5px solid #1e1e2e",
                background: scrolled ? "rgba(10,10,15,0.95)" : "#0a0a0f",
                backdropFilter: scrolled ? "blur(12px)" : "none",
                transition: "background 0.2s",
            }}
        >
            {/* Logo */}
            <span style={{ fontSize: 15, fontWeight: 500, color: "#6366f1" }}>
                {SITE.name}
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                {/* Links */}
                <div style={{ display: "flex", gap: 20 }}>
                    {["sobre mí", "proyectos", "stack", "contacto"].map((link) => (

                        <a
                            key={link}
                            href={`#${link.replace(" ", "-")}`}
                            className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                            {link}
                        </a>
                    ))}
                </div>

                {/* Badge disponible */}
                <span
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: 11,
                        background: "#0f1a0f",
                        color: "#4ade80",
                        padding: "4px 12px",
                        borderRadius: 20,
                        border: "0.5px solid #166534",
                    }}
                >
                    <span
                        className="pulse-dot"
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#4ade80",
                            display: "inline-block",
                        }}
                    />
                    disponible
                </span>

                {/* Botón terminal */}
                <button
                    onClick={onOpenTerminal}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        background: "#16161f",
                        border: "0.5px solid #1e1e2e",
                        borderRadius: 8,
                        padding: "4px 12px",
                        fontSize: 11,
                        color: "#9b9bb8",
                        cursor: "pointer",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#9b9bb8")}
                >
                    <kbd
                        style={{
                            background: "#0d0d16",
                            border: "0.5px solid #1e1e2e",
                            borderRadius: 4,
                            padding: "1px 5px",
                            fontSize: 10,
                            color: "#a5b4fc",
                            fontFamily: "monospace",
                        }}
                    >
                        /
                    </kbd>
                    terminal
                </button>
            </div>
        </nav>
    );
}