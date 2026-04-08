"use client";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/data";

// Devuelve un mensaje según la hora local en La Habana
function getStatusMessage(hour: number): string {
  if (hour >= 6 && hour < 12) return "probablemente programando";
  if (hour >= 12 && hour < 14) return "probablemente almorzando";
  if (hour >= 14 && hour < 20) return "probablemente programando";
  if (hour >= 20 && hour < 23) return "probablemente estudiando";
  return "probablemente durmiendo (escríbele igual)";
}

// Footer con hora en vivo en La Habana
// Client Component porque necesita Date y setInterval
export default function Footer() {
  const [time, setTime] = useState("");
  const [status, setStatus] = useState("");

  // Calcula la hora actual en La Habana y actualiza cada 30 segundos
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
    <footer className="border-t border-white/10 mx-auto px-7 py-5 flex items-center justify-between">
      {/* Izquierda: créditos */}
      <p className="text-xs text-white/40">
        <span className="text-[#a5b4fc]">{SITE.name}</span>
        {" · "}hecho con{" "}
        <span className="text-[#a5b4fc]">Next.js + Tailwind</span>
      </p>

      {/* Derecha: hora en vivo — solo se muestra cuando ya cargó */}
      {time && (
        <p className="text-xs text-white/40 text-right">
          <span className="text-[#4ade80] font-mono">{time}</span>
          {" "}en La Habana · {status}
        </p>
      )}
    </footer>
  );
}