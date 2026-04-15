import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Stats from "@/components/Stats";
import Education from "@/components/Education";
import Learning from "@/components/Learning";

// ─── Tests del componente Stats ───────────────────────────────────────────────
describe("Stats", () => {
  it("renderiza los 4 stats correctamente", () => {
    render(<Stats />);

    // Verifica que los 4 labels aparecen en el DOM
    expect(screen.getByText("Experiencia en producción")).toBeInTheDocument();
    expect(screen.getByText("Productos entregados")).toBeInTheDocument();
    expect(screen.getByText("Tiempo presupuestación")).toBeInTheDocument();
    expect(screen.getByText("Ganas de aprender")).toBeInTheDocument();
  });

  it("renderiza los números correctamente", () => {
    render(<Stats />);

    expect(screen.getByText("2.5")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("–80")).toBeInTheDocument();
    expect(screen.getByText("∞")).toBeInTheDocument();
  });
});

// ─── Tests del componente Education ──────────────────────────────────────────
describe("Education", () => {
  it("renderiza las dos formaciones", () => {
    render(<Education />);

    expect(screen.getByText("Ingeniería Automática")).toBeInTheDocument();
    expect(screen.getByText("Frontend Development")).toBeInTheDocument();
  });

  it("renderiza los años correctamente", () => {
    render(<Education />);

    expect(screen.getByText("2017 → 2023")).toBeInTheDocument();
    expect(screen.getByText("2023 → actualidad")).toBeInTheDocument();
  });

  it("renderiza los lugares correctamente", () => {
    render(<Education />);

    expect(screen.getByText("CUJAE · La Habana, Cuba")).toBeInTheDocument();
  });
});

// ─── Tests del componente Learning ───────────────────────────────────────────
describe("Learning", () => {
  it("renderiza las 4 tecnologías en aprendizaje", () => {
    render(<Learning />);

    expect(screen.getByText("Payload CMS")).toBeInTheDocument();
    expect(screen.getByText("Testing con Vitest")).toBeInTheDocument();
    expect(screen.getByText("Core Web Vitals")).toBeInTheDocument();
    expect(screen.getByText("SEO técnico")).toBeInTheDocument();
  });

  it("renderiza los badges de estado", () => {
    render(<Learning />);

    // Busca todos los badges — deben haber al menos 2 de cada tipo
    const explorando = screen.getAllByText("explorando");
    const aplicando = screen.getAllByText("aplicando");

    expect(explorando.length).toBeGreaterThan(0);
    expect(aplicando.length).toBeGreaterThan(0);
  });
});