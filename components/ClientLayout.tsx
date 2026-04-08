"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CodeMode from "@/components/CodeMode";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";

// Agrupa todos los Client Components que necesitan estado
// Separado de page.tsx para que los Server Components no hereden "use client"
export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [termOpen, setTermOpen] = useState(false);
  const [codeVisible, setCodeVisible] = useState(false);

  return (
    <>
      <Nav onOpenTerminal={() => setTermOpen(true)} />
      <main>
        <Hero
          onToggleCode={() => setCodeVisible((v) => !v)}
          codeVisible={codeVisible}
        />
        <CodeMode
          visible={codeVisible}
          onClose={() => setCodeVisible(false)}
        />
        {/* children son Server Components — renderizan en el servidor */}
        {children}
      </main>
      <Footer />
      <Terminal open={termOpen} onClose={() => setTermOpen(false)} />
    </>
  );
}