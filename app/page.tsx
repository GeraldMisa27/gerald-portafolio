"use client";
import { useState } from "react";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CodeMode from "@/components/CodeMode";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Learning from "@/components/Learning";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";

const Divider = () => (
  <div className="h-px bg-white/10 max-w-250 mx-auto" />
);

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
        <Stats />
        <Divider />
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Projects />
        <Divider />
        <Stack />
        <Divider />
        <Learning />
        <Divider />
        <Education />
        <Divider />
        <Contact />
      </main>
      <Footer />
      {/* Terminal fuera del main para que el overlay cubra toda la pantalla */}
      <Terminal open={termOpen} onClose={() => setTermOpen(false)} />
    </>
  );
}