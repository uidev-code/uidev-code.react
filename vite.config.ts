import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: { api: "modern-compiler" },
    },
  },
  resolve: {
    alias: {
      "@.storybook": path.resolve(__dirname, ".storybook"),
      "@": path.resolve(__dirname, "./src"),
      "@atoms": path.resolve(__dirname, "./src/10_atoms"),
      "@molecules": path.resolve(__dirname, "./src/20_molecules"),
      "@organisms": path.resolve(__dirname, "./src/30_organisms"),
      "@template": path.resolve(__dirname, "./src/40_template"),
      "@pages": path.resolve(__dirname, "./src/50_pages"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@styles": path.resolve(__dirname, "./src/assets/scss"),
    },
  },
});
