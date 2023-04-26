import { defineMarkdocConfig } from '@astrojs/markdoc/config';
import Gallery from './src/components/Gallery.astro';

export default defineMarkdocConfig({
  tags: {
    gallery: {
      render: Gallery,
    },
  },
});