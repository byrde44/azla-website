import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.azlasolutions.com',
  integrations: [sitemap()],
  trailingSlash: 'never',
  build: { format: 'file' },
});
