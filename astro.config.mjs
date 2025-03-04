import UnoCSS from 'unocss/astro'
import alpine from '@astrojs/alpinejs'
import { defineConfig } from 'astro/config'
import { SiteMetadata } from './src/common/config'

// https://astro.build/config
export default defineConfig({
  site: SiteMetadata.site,
  base: process.env.npm_package_name + '/',
  integrations: [
    alpine(),
    UnoCSS({
      injectReset: true
    })
  ]
})