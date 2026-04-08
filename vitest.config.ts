import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    // Simula el DOM del navegador para poder renderizar componentes React
    environment: "jsdom",
    // Carga los matchers de jest-dom automáticamente en todos los tests
    setupFiles: ["./vitest.setup.ts"],
    globals: true,
  },
  resolve: {
    alias: {
      // Permite usar @/ igual que en el proyecto
      "@": path.resolve(__dirname, "./"),
    },
  },
});