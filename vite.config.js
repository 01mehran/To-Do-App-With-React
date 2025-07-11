import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// Tailwind
import tailwindcss from "@tailwindcss/vite";
// Path;
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  // Alias
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@icons": path.resolve(__dirname, "./src/assets/icons"),
      "@fonts": path.resolve(__dirname, "./src/assets/fonts"),
    },
  },
  // Custom Port;
  server: {
    port: 3000,
  },
});
