import { MetadataRoute } from "next";

// Sitemap generado automáticamente por Next.js en build time
// Google lo usa para saber qué páginas indexar
// Accesible en: https://gerald.dev/sitemap.xml
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://gerald.dev",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}