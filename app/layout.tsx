import type { ReactNode } from "react";

/**
 * Shell mínimo del documento. El portafolio vive en `app/(site)`; Payload admin
 * en `app/(payload)` aporta su propio `<html>` vía RootLayout — evitar un segundo
 * documento del sitio (fuentes, GTM, globals) aquí previene hidratación rota.
 */
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
