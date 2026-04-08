import ClientLayout from "@/components/ClientLayout";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Learning from "@/components/Learning";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

// Server Component — sin "use client"
// Los Server Components hijos leen datos de Payload directamente
const Divider = () => (
  <div className="h-px bg-white/10 max-w-300 mx-auto" />
);

export default function Home() {
  return (
    <ClientLayout>
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
    </ClientLayout>
  );
}