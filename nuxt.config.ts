// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  generate: {
    fallback: true
  },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/css/style.css',
  ],
  ssr: true,
  target: 'static',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
  ],
  googleFonts: {
    families: {
      'Inter+Tight': {
        wght: [300, 400, 700],
        ital: [200, 300]
      },
    },
  },
})
