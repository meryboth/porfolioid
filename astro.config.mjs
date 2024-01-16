import { defineConfig, squooshImageService } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), tailwind(), react()],
  image: {
    service: squooshImageService(),
  },
});
