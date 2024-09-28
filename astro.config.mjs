import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://elevenco.vercel.app",
  integrations: [mdx(), sitemap(), tailwind(), icon()],
  output: "server",
  adapter: vercel({
    includeFiles: ["src/template/index.ejs"],
  }),
});

