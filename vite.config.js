import base44 from "@base44/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const apiPrefix = env.VITE_API_BASE_URL || "/api-v1";

  return {
    server: {
      proxy: {
        [apiPrefix]: {
          target: env.VITE_API_TARGET || "http://localhost:8099/v1",
          changeOrigin: true,
          rewrite: (path) => path.replace(new RegExp(`^${apiPrefix}`), ""),
        },
      },
    },
    preview: {
      port: 6666,
      host: true,
      allowedHosts: ["portofolio.syava-project.my.id"],
    },
    plugins: [
      base44({
        // Support for legacy code that imports the base44 SDK with @/integrations, @/entities, etc.
        // can be removed if the code has been updated to use the new SDK imports from @base44/sdk
        legacySDKImports: process.env.BASE44_LEGACY_SDK_IMPORTS === "true",
        hmrNotifier: true,
        navigationNotifier: true,
        analyticsTracker: true,
        visualEditAgent: false,
      }),
      react(),
    ],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
