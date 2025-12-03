// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import decapCmsOauth from "astro-decap-cms-oauth";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  i18n: {
    defaultLocale: "it",    // Lingua principale
    locales: ["it", "en"],  // Lingue disponibili
    routing: {
        prefixDefaultLocale: false // Se false, l'italiano è su miocito.com, l'inglese su miosito.com/en
    }
  },

  integrations: [decapCmsOauth()],
  adapter: netlify()
});