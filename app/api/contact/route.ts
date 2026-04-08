import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Inicializa Resend con la API key del .env.local
const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactBody {
  name: string;
  email: string;
  message: string;
}

// Valida que el email tiene formato correcto
function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactBody = await req.json();
    const { name, email, message } = body;

    // Validación de campos
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "El email no tiene un formato válido." },
        { status: 400 }
      );
    }

    if (message.trim().length < 10) {
      return NextResponse.json(
        { error: "El mensaje es demasiado corto." },
        { status: 400 }
      );
    }

    // Envía el email con Resend
    // Mientras no tengas dominio propio usamos onboarding@resend.dev
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL!,
      subject: `Nuevo mensaje de ${name} — gerald.dev`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px;">
          <h2 style="color: #6366f1;">Nuevo mensaje desde gerald.dev</h2>
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mensaje:</strong></p>
          <p style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("[Resend error]", error);
      return NextResponse.json(
        { error: "Error al enviar el email." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Mensaje enviado correctamente." },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Error interno del servidor." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Método no permitido." },
    { status: 405 }
  );
}