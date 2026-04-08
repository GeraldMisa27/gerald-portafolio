import type { Metadata } from "next";
import "./globals.css";

// Metadata estática — se genera en build time (SSG)
// Next.js inyecta estos tags en el <head> sin necesitar JavaScript
// Esto mejora el LCP porque el HTML llega con los meta tags ya listos
export const metadata: Metadata = {
  metadataBase: new URL("https://gerald.dev"),

  title: {
    default: "Gerald Misa Denis — Frontend Developer",
    // %s se reemplaza por el título de cada página
    template: "%s | Gerald Misa Denis",
  },

  description:
    "Frontend Developer especializado en React, Next.js y TypeScript. 2.5 años construyendo productos reales — tracking GPS en tiempo real, chat con IA y plataformas empresariales.",

  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Web Performance",
    "SEO técnico",
  ],

  authors: [{ name: "Gerald Misa Denis", url: "https://gerald.dev" }],
  creator: "Gerald Misa Denis",

  // Open Graph — controla cómo se ve el link cuando lo compartes
  // en WhatsApp, Slack, LinkedIn, Twitter, etc.
  openGraph: {
    type: "website",
    locale: "es_CU",
    url: "https://gerald.dev",
    siteName: "Gerald Misa Denis",
    title: "Gerald Misa Denis — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript. 2.5 años construyendo productos reales en producción.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Gerald Misa Denis — Frontend Developer",
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Gerald Misa Denis — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript.",
    images: ["/og-image.png"],
  },

  // Le dice a Google que puede indexar todo
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

// JSON-LD — datos estructurados para Google
// Ayuda a que Google entienda quién eres y pueda mostrar
// rich results en los resultados de búsqueda
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gerald Misa Denis",
  url: "https://gerald.dev",
  jobTitle: "Frontend Developer",
  description:
    "Frontend Developer especializado en React, Next.js y TypeScript con 2.5 años de experiencia.",
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "Web Performance",
    "SEO técnico",
  ],
  sameAs: [
    "https://github.com/gerald",
    "https://linkedin.com/in/gerald",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        {/* JSON-LD datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}