import { defineConfig } from 'astro/config';

// Set `site` to your custom domain when you have one; the SWA default
// hostname also works. Update before going to production for correct
// canonical URLs.
export default defineConfig({
  site: 'https://example.azurestaticapps.net',
  build: {
    assets: 'assets',
  },
});
