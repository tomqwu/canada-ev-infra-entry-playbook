import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// Update `site` and `base` to match your GitHub Pages deployment.
// For a project page at https://<user>.github.io/<repo>/, set:
//   site: "https://<user>.github.io"
//   base: "/<repo>"
const SITE = process.env.SITE_URL ?? "https://tomqwu.github.io";
const BASE = process.env.BASE_PATH ?? "/canada-ev-infra-entry-playbook";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "ignore",
  output: "static",
  integrations: [mdx(), tailwind({ applyBaseStyles: false })],
  build: {
    assets: "assets",
  },
});
