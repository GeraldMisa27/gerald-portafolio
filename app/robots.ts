import { MetadataRoute } from "next";

// Robots.txt generado automáticamente por Next.js
// Le dice a los crawlers de Google qué pueden y no pueden indexar
// Accesible en: https://gerald.dev/robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://gerald.dev/sitemap.xml",
  };
}