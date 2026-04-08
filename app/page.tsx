"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CodeMode from "@/components/CodeMode";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import ServerSections from "./page-server";

export default function Home() {
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
        {/* ServerSections corre en el servidor — puede leer de Payload */}
        <ServerSections />
      </main>
      <Footer />
      <Terminal open={termOpen} onClose={() => setTermOpen(false)} />
    </>
  );
}