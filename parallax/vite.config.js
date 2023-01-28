import { resolve } from "path";
import { defineConfig } from "vite";
// import autoprefixer from "autoprefixer";
const ROOT = "./src/_pages"

export default defineConfig({
  root: ROOT,
  build: {
    outDir: resolve(__dirname, "dist"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, ROOT, "index.html"),
        // plugin a
        // test: resolve(__dirname, ROOT, "test.html"),
        // plugin b
        // test: resolve(__dirname, ROOT, "test.html"),
      },
    },
  },
  server: {
    watch: {
      usePolling: true
    }
  },
  // css: {
  //   postcss: {
  //     plugins: [autoprefixer],
  //   },
  // },
});