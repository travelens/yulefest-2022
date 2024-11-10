import UnoCSS from 'unocss/astro'
import markdoc from '@astrojs/markdoc'
import alpine from '@astrojs/alpinejs'
import { defineConfig } from 'astro/config'
import { SiteMetadata } from 'astro-travelens/config'

// https://astro.build/config
export default defineConfig({
  site: SiteMetadata.site,
  base: process.env.npm_package_name + '/',
  integrations: [
    markdoc(),
    alpine(),
    UnoCSS({
      injectReset: true
    })
  ]
})