import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  alternates: {
    canonical: "/",
  },
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
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
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* Cargamos GTM en idle (`lazyOnload`) y solo en producción.
            Evita competir con recursos críticos del LCP en la carga inicial. */}
        {process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_GTM_ID && (
          <Script
            id="gtm"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}