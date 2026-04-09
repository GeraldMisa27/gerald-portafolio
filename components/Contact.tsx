"use client";
import { useState } from "react";
import { SITE } from "@/lib/data";

interface FormState {
    name: string;
    email: string;
    message: string;
}

// Valida formato de email
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Valida todos los campos y devuelve los errores encontrados
function validateForm(form: FormState): Partial<FormState> {
    const errors: Partial<FormState> = {};

    if (!form.name.trim())
        errors.name = "El nombre es obligatorio.";

    if (!form.email.trim())
        errors.email = "El email es obligatorio.";
    else if (!isValidEmail(form.email))
        errors.email = "El email no tiene un formato válido.";

    if (!form.message.trim())
        errors.message = "El mensaje es obligatorio.";
    else if (form.message.trim().length < 10)
        errors.message = "El mensaje es demasiado corto (mínimo 10 caracteres).";

    return errors;
}

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });

    // Errores por campo — se muestran debajo de cada input
    const [errors, setErrors] = useState<Partial<FormState>>({});

    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<{
        type: "success" | "error";
        text: string;
    } | null>(null);

    // Actualiza el campo y limpia su error al escribir
    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
        // Limpia el error del campo cuando el usuario empieza a corregirlo
        setErrors((prev) => ({ ...prev, [name]: undefined }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setResult(null);

        // Valida en el cliente antes de llamar a la API
        const newErrors = validateForm(form);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }
        setErrors({});

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (res.ok) {
                setResult({ type: "success", text: "¡Mensaje enviado! Te respondo pronto." });
                setForm({ name: "", email: "", message: "" });
            } else {
                setResult({ type: "error", text: data.error ?? "Algo salió mal." });
            }
        } catch {
            setResult({ type: "error", text: "Error de conexión. Inténtalo de nuevo." });
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="contacto" className="max-w-250 mx-auto px-7 py-12">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#6366f1] mb-2 font-medium">
                contacto
            </p>

            <div className="bg-[#16161f] border border-white/10 rounded-2xl px-8 py-10">
                <div className="max-w-140 mx-auto">
                    <h2 className="text-[22px] font-medium text-white mb-2 tracking-tight text-center">
                        ¿Trabajamos juntos?
                    </h2>
                    <p className="text-sm text-white/40 mb-8 text-center">
                        Estoy disponible para nuevos proyectos y oportunidades.
                    </p>

                    {/* Links directos */}
                    <div className="flex justify-center gap-2.5 flex-wrap mb-8">
                        <a
                            href={`mailto:${SITE.email}`}
                            className="flex items-center gap-2 bg-[#13131e] text-[#a5b4fc] px-5 py-2.5 rounded-lg text-sm border border-white/10 hover:border-[#6366f1] transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            {SITE.email}
                        </a>
                        <a
                            href={SITE.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 bg-[#13131e] text-[#a5b4fc] px-5 py-2.5 rounded-lg text-sm border border-white/10 hover:border-[#6366f1] transition-colors"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            GitHub
                        </a>
                        {SITE.linkedin && (
                            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-[#13131e] text-[#a5b4fc] px-5 py-2.5 rounded-lg text-sm border border-white/10 hover:border-[#6366f1] transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                                LinkedIn
                            </a>
                        )}
                    </div>

                    {/* Formulario — noValidate desactiva validaciones del navegador */}
                    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-3">

                            {/* Nombre */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] text-white/40 uppercase tracking-widest">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Tu nombre"
                                    className={`bg-[#13131e] border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors ${errors.name
                                            ? "border-[#f87171]"
                                            : "border-white/10 focus:border-[#6366f1]"
                                        }`}
                                />
                                {/* Error del campo nombre */}
                                {errors.name && (
                                    <p className="text-xs text-[#f87171]">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-1.5">
                                <label className="text-[11px] text-white/40 uppercase tracking-widest">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="tu@email.com"
                                    className={`bg-[#13131e] border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors ${errors.email
                                            ? "border-[#f87171]"
                                            : "border-white/10 focus:border-[#6366f1]"
                                        }`}
                                />
                                {/* Error del campo email */}
                                {errors.email && (
                                    <p className="text-xs text-[#f87171]">{errors.email}</p>
                                )}
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="flex flex-col gap-1.5">
                            <label className="text-[11px] text-white/40 uppercase tracking-widest">
                                Mensaje
                            </label>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Cuéntame sobre tu proyecto..."
                                rows={4}
                                className={`bg-[#13131e] border rounded-lg px-3 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors resize-none ${errors.message
                                        ? "border-[#f87171]"
                                        : "border-white/10 focus:border-[#6366f1]"
                                    }`}
                            />
                            {/* Error del campo mensaje */}
                            {errors.message && (
                                <p className="text-xs text-[#f87171]">{errors.message}</p>
                            )}
                        </div>

                        {/* Resultado del envío */}
                        {result && (
                            <p className={`text-sm ${result.type === "success" ? "text-[#4ade80]" : "text-[#f87171]"
                                }`}>
                                {result.text}
                            </p>
                        )}

                        {/* Botón enviar */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-[#6366f1] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:opacity-80 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                            {loading ? "Enviando..." : "Enviar mensaje"}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}