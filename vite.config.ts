import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Build-time performance tuning.
//  * `target: "es2020"` matches tsconfig + cuts Babel-polyfill overhead.
//  * `cssCodeSplit` + `minify: esbuild` are Vite defaults; set explicitly for clarity.
//  * `manualChunks` peels framer-motion + react-router off the main bundle so that
//    a future React or route-table change doesn't bust the motion vendor cache
//    (and vice-versa). Smaller parallel downloads, longer-lived caches.
//  * `assetsInlineLimit` shaves a round-trip for sub-4KB assets (default).
export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    cssMinify: "esbuild",
    minify: "esbuild",
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          motion: ["framer-motion"],
        },
      },
    },
  },
});
