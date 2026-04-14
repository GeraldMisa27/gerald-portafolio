import ClientLayout from "@/components/ClientLayout";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Learning from "@/components/Learning";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";

const Divider = () => (
  <div className="h-px bg-white/10 w-full max-w-250 mx-auto" />
);

// Obtiene la foto desde Payload Settings
async function getPhotoUrl(): Promise<string> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/globals/settings`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return "";
    const data = await res.json();
    return data.photoUrl ?? "";
  } catch {
    return "";
  }
}

export default async function Home() {
  const photoUrl = await getPhotoUrl();

  return (
    <ClientLayout photoUrl={photoUrl}>
      <Divider />
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
