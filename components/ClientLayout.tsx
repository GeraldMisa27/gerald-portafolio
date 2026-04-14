"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

const CodeMode = dynamic(() => import("@/components/CodeMode"));
const Terminal = dynamic(() => import("@/components/Terminal"), {
  ssr: false,
});

interface Project {
  title: string;
  tags: string[];
  mockupLabel?: string;
}

// Agrupa todos los Client Components que necesitan estado
// Separado de page.tsx para que los Server Components no hereden "use client"
export default function ClientLayout({
  children,
  photoUrl,
  projects,
}: {
  children: React.ReactNode;
  photoUrl: string;
  projects?: Project[];
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
          photoUrl={photoUrl}
        />
        <CodeMode
          visible={codeVisible}
          onClose={() => setCodeVisible(false)}
        />
        {/* children son Server Components — renderizan en el servidor */}
        {children}
      </main>
      <Footer />
      <Terminal open={termOpen} onClose={() => setTermOpen(false)} projects={projects}/>
    </>
  );
}