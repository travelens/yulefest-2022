import { defineMarkdocConfig, component } from '@astrojs/markdoc/config'

export default defineMarkdocConfig({
  tags: {
    gallery: {
      render: component('./src/components/Gallery.astro'),
      attributes: {
        folder: { type: String }
      }
    }
  }
})
