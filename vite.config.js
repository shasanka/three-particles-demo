// vite.config.js
import glsl from "vite-plugin-glsl";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/three-particles-demo/",
  plugins: [glsl()],
  // resolve: {
  //   alias: {
  //     "@assets": path.resolve(__dirname, "src/assets"),
  //   },
  // },
});
