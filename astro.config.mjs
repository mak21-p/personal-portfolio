import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";
import { loadEnv } from "vite";

const { PROJECT_ID } = loadEnv(process.env.NODE_ENV, process.cwd(), "");
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    sanity({
      projectId: PROJECT_ID,
      dataset: "production",
      useCDN: true,
      apiVersion: "2023-05-03",
    }),
  ],
});
