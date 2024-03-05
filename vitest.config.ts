import react from "@vitejs/plugin-react";
import path from "path";
import { UserConfig, defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()] as UserConfig["plugins"],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./vitest.setup.ts",
  },
  resolve: {
    alias: {
      find: "@",
      replacement: path.resolve(__dirname, "./src"),
    },
  },
});
