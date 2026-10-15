// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://amysuperchinski.com',
  integrations: [mdx(), sitemap({ filter: (page) => !page.includes('/private/') })],
  vite: {
    // Polling lets the preview pick up edits made by Claude from outside the Mac's file watcher.
    server: { watch: { usePolling: true, interval: 300 } },
  },
});
