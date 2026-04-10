import { buildConfig } from "payload";
import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { fileURLToPath } from "url";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
    secret: process.env.PAYLOAD_SECRET!,

    // URL base del admin panel
    serverURL: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
    // Panel de administración en /admin
    admin: {
        user: "users",
    },

    // Editor de texto enriquecido
    editor: lexicalEditor({}),


    globals: [
        {
            slug: "settings",
            label: "Configuración del portafolio",
            access: {
                read: () => true,
            },
            fields: [
                {
                    name: "photoUrl",
                    type: "text",
                    label: "URL de la foto de perfil",
                    admin: {
                        description: "Pega aquí la URL directa de tu foto. Ejemplo: https://avatars.githubusercontent.com/u/...",
                    },
                },
                {
                    name: "available",
                    type: "checkbox",
                    label: "¿Disponible para proyectos?",
                    defaultValue: true,
                },
                {
                    name: "cvUrl",
                    type: "text",
                    label: "URL del CV (dejar vacío para usar el archivo local)",
                },
            ],
        },
    ],

    // Colecciones — cada una es una "tabla" en la base de datos
    collections: [
        // Usuarios administradores
        {
            slug: "users",
            auth: true,
            admin: {
                useAsTitle: "email",
            },
            fields: [],
        },

        // Proyectos del portafolio
        {
            slug: "projects",
            admin: {
                useAsTitle: "title",
                description: "Proyectos destacados del portafolio",
            },
            access: {
                read: () => true,
            },
            fields: [
                {
                    name: "title",
                    type: "text",
                    required: true,
                    label: "Título del proyecto",
                },
                {
                    name: "badge",
                    type: "text",
                    required: true,
                    label: "Badge (freelance, Danngos Smart, ETI)",
                },
                {
                    name: "badgeColor",
                    type: "select",
                    required: true,
                    label: "Color del badge",
                    options: [
                        { label: "Violeta", value: "purple" },
                        { label: "Azul", value: "blue" },
                        { label: "Verde", value: "green" },
                    ],
                },
                {
                    name: "description",
                    type: "textarea",
                    required: true,
                    label: "Descripción",
                },
                {
                    name: "tags",
                    type: "array",
                    label: "Tecnologías",
                    fields: [
                        {
                            name: "tag",
                            type: "text",
                            label: "Tecnología",
                        },
                    ],
                },
                {
                    name: "mockup",
                    type: "text",
                    required: false,
                    label: "Tipo de mockup (rideHailing, chat, dashboard)",
                    admin: {
                        description: "Valores disponibles: rideHailing, chat, dashboard. Deja vacío para mockup genérico.",
                    },
                },
                {
                    name: "mockupLabel",
                    type: "text",
                    label: "Label del mockup",
                },
                {
                    name: "order",
                    type: "number",
                    label: "Orden de aparición",
                    defaultValue: 0,
                },
            ],
        },

        // Experiencia laboral
        {
            slug: "experience",
            admin: {
                useAsTitle: "title",
                description: "Experiencia laboral del portafolio",
            },
            access: {
                read: () => true,
            },
            fields: [
                {
                    name: "date",
                    type: "text",
                    required: true,
                    label: "Período (ej: 2024 → actualidad)",
                },
                {
                    name: "title",
                    type: "text",
                    required: true,
                    label: "Cargo y empresa",
                },
                {
                    name: "company",
                    type: "text",
                    required: true,
                    label: "Proyecto o empresa",
                },
                {
                    name: "description",
                    type: "textarea",
                    required: true,
                    label: "Descripción",
                },
                {
                    name: "order",
                    type: "number",
                    label: "Orden de aparición",
                    defaultValue: 0,
                },
            ],
        },
    ],

    // Base de datos MongoDB
    db: mongooseAdapter({
        url: process.env.MONGODB_URI!,
    }),

    // Directorio de tipos generados automáticamente
    typescript: {
        outputFile: path.resolve(dirname, "payload-types.ts"),
    },
});