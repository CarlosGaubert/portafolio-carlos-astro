import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://carlosgaubert.github.io/",
  base: "/portafolio-carlos-astro",
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },
  integrations: [tailwind()],
});

