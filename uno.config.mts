import {
  defineConfig,
  presetTypography,
  presetIcons,
  presetUno,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    { 'i-logo': 'i-logos-astro w-6em h-6em transform transition-800' },
  ],
  transformers: [
    transformerDirectives(),
  ],
  presets: [
    presetUno(),
    presetTypography(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
  ],
  safelist: [
    'i-fa6-brands-linkedin',
    'i-fa6-brands-facebook',
    'i-fa6-brands-instagram',
    'i-fa6-brands-github',
  ],
})