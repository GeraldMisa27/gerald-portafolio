"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

function getStatusMessage(hour: number): string {
    if (hour >= 6 && hour < 12) return "probablemente programando";
    if (hour >= 12 && hour < 14) return "probablemente almorzando";
    if (hour >= 14 && hour < 20) return "probablemente programando";
    if (hour >= 20 && hour < 23) return "probablemente estudiando";
    return "probablemente durmiendo (escríbele igual)";
}

export default function Footer() {
    const [time, setTime] = useState("");
    const [status, setStatus] = useState("");

    useEffect(() => {
        function update() {
            const havana = new Date(
                new Date().toLocaleString("en", { timeZone: "America/Havana" })
            );
            const h = havana.getHours();
            const m = havana.getMinutes().toString().padStart(2, "0");
            const ampm = h >= 12 ? "PM" : "AM";
            const h12 = h % 12 || 12;
            setTime(`${h12}:${m} ${ampm}`);
            setStatus(getStatusMessage(h));
        }
        update();
        const id = setInterval(update, 30_000);
        return () => clearInterval(id);
    }, []);

    return (
        <footer className="border-t border-white/10 px-5 md:px-7 py-5">
            <div className="max-w-250 mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1 sm:gap-0">
                <p className="text-xs text-white/40 text-center sm:text-left">
                    <span className="text-[#a5b4fc]">{SITE.name}</span>
                    {" · "}hecho con{" "}
                    <span className="text-[#a5b4fc]">Next.js + Tailwind</span>
                </p>
                {time && (
                    <p suppressHydrationWarning  className="text-xs text-white/40 text-center sm:text-right">
                        <span className="text-[#4ade80] font-mono">{time}</span>
                        {" "}en La Habana ·{" "}
                        <span className="hidden sm:inline">{status}</span>
                        <span className="sm:hidden">Cuba</span>
                    </p>
                )}
            </div>
        </footer>
    );
}