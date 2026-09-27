// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://hussein-portfolio-xi.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ar', 'de'],
    routing: {
      // English stays unprefixed at "/"; Arabic and German live under
      // "/ar/" and "/de/". Adding a future locale only means adding it
      // here plus a src/i18n/<code>.ts file — no routing changes.
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap({
    i18n: {
      defaultLocale: 'en',
      locales: { en: 'en', ar: 'ar', de: 'de' },
    },
  }), react()],
  vite: {
    server: {
      // Dev-server only: lets tunnel tools (cloudflared/ngrok/localtunnel)
      // reach the dev server despite Vite's Host-header allowlist check.
      // Has no effect on `astro build` / production output.
      allowedHosts: true,
    },
  },
});