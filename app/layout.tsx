import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Next.js descarga y optimiza las fuentes en build time
// Se sirven desde tu propio dominio sin petición externa a Google
// Esto mejora el LCP — uno de los Core Web Vitals de la oferta
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gerald.dev"),
  title: {
    default: "Gerald Misa Denis — Frontend Developer",
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
  twitter: {
    card: "summary_large_image",
    title: "Gerald Misa Denis — Frontend Developer",
    description:
      "Frontend Developer especializado en React, Next.js y TypeScript.",
    images: ["/og-image.png"],
  },
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
    "https://github.com/GeraldMisa27",
    "https://linkedin.com/in/gerald",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Las variables CSS de las fuentes se pasan al html
    // --font-inter y --font-mono quedan disponibles en todo el proyecto
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* JSON-LD datos estructurados para Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}