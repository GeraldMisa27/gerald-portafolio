import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Learning from "@/components/Learning";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

const Divider = () => (
  <div className="h-px bg-white/10 max-w-300 mx-auto" />
);

// Agrupa todos los Server Components
// Separado del page.tsx para que no hereden "use client"
export default function ServerSections() {
  return (
    <>
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
    </>
  );
}