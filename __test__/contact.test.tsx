import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "@/components/Contact";

// ─── Mock del fetch global ────────────────────────────────────────────────────
// Evita llamadas reales a /api/contact durante los tests
// Controla exactamente qué responde el servidor en cada test
const mockFetch = vi.fn();
global.fetch = mockFetch;

// ─── Tests del componente Contact ────────────────────────────────────────────
describe("Contact", () => {

  // Limpia el mock antes de cada test para que no se mezclen las respuestas
  beforeEach(() => {
    mockFetch.mockClear();
  });

  // ── Validaciones del cliente ──────────────────────────────────────────────

  it("muestra error si el nombre está vacío", async () => {
    render(<Contact />);

    fireEvent.click(screen.getByText("Enviar mensaje"));

    expect(await screen.findByText("El nombre es obligatorio.")).toBeInTheDocument();
  });

  it("muestra error si el email está vacío", async () => {
    render(<Contact />);

    fireEvent.click(screen.getByText("Enviar mensaje"));

    expect(await screen.findByText("El email es obligatorio.")).toBeInTheDocument();
  });

  it("muestra error si el email no tiene formato válido", async () => {
    render(<Contact />);

    // Escribe un email inválido
    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "no-es-un-email", name: "email" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    expect(await screen.findByText("El email no tiene un formato válido.")).toBeInTheDocument();
  });

  it("muestra error si el mensaje es demasiado corto", async () => {
    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Cuéntame sobre tu proyecto..."), {
      target: { value: "Hola", name: "message" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    expect(
      await screen.findByText("El mensaje es demasiado corto (mínimo 10 caracteres).")
    ).toBeInTheDocument();
  });

  it("limpia el error del campo cuando el usuario empieza a escribir", async () => {
    render(<Contact />);

    // Dispara los errores
    fireEvent.click(screen.getByText("Enviar mensaje"));
    expect(await screen.findByText("El nombre es obligatorio.")).toBeInTheDocument();

    // Empieza a escribir en el campo nombre
    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "G", name: "name" },
    });

    // El error desaparece
    expect(screen.queryByText("El nombre es obligatorio.")).not.toBeInTheDocument();
  });

  // ── Envío del formulario ──────────────────────────────────────────────────

  it("envía el formulario correctamente y muestra mensaje de éxito", async () => {
    // Mock — el servidor responde con éxito
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<Contact />);

    // Rellena todos los campos correctamente
    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Gerald Misa", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "gerald@test.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Cuéntame sobre tu proyecto..."), {
      target: { value: "Hola, me interesa trabajar contigo en un proyecto.", name: "message" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    // Espera a que aparezca el mensaje de éxito
    expect(
      await screen.findByText("¡Mensaje enviado! Te respondo pronto.")
    ).toBeInTheDocument();
  });

  it("muestra error cuando el servidor falla", async () => {
    // Mock — el servidor responde con error
    mockFetch.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Error al enviar el email." }),
    });

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Gerald Misa", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "gerald@test.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Cuéntame sobre tu proyecto..."), {
      target: { value: "Hola, me interesa trabajar contigo en un proyecto.", name: "message" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    expect(
      await screen.findByText("Error al enviar el email.")
    ).toBeInTheDocument();
  });

  it("muestra error de conexión cuando el fetch falla completamente", async () => {
    // Mock — simula un error de red
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Gerald Misa", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "gerald@test.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Cuéntame sobre tu proyecto..."), {
      target: { value: "Hola, me interesa trabajar contigo en un proyecto.", name: "message" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    expect(
      await screen.findByText("Error de conexión. Inténtalo de nuevo.")
    ).toBeInTheDocument();
  });

  it("muestra 'Enviando...' mientras se procesa el envío", async () => {
    // Mock — el fetch tarda en responder
    mockFetch.mockImplementationOnce(
      () => new Promise((resolve) =>
        setTimeout(() => resolve({
          ok: true,
          json: async () => ({ success: true }),
        }), 100)
      )
    );

    render(<Contact />);

    fireEvent.change(screen.getByPlaceholderText("Tu nombre"), {
      target: { value: "Gerald Misa", name: "name" },
    });
    fireEvent.change(screen.getByPlaceholderText("tu@email.com"), {
      target: { value: "gerald@test.com", name: "email" },
    });
    fireEvent.change(screen.getByPlaceholderText("Cuéntame sobre tu proyecto..."), {
      target: { value: "Hola, me interesa trabajar contigo en un proyecto.", name: "message" },
    });

    fireEvent.click(screen.getByText("Enviar mensaje"));

    // Mientras procesa muestra "Enviando..."
    expect(screen.getByText("Enviando...")).toBeInTheDocument();

    // Cuando termina vuelve al texto normal
    await waitFor(() => {
      expect(screen.getByText("¡Mensaje enviado! Te respondo pronto.")).toBeInTheDocument();
    });
  });
});