module.exports = {

  head: {
    titleTemplate: 'Nathakit Sae-Tan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Meta description' }
    ]
  },

  // modules: [
  //   '@nuxt/pwa'
  // ],

  manifest: {
    name: "Nathakit Sae-Tan",
    description: "Nathakit Sae-Tan",
    theme_color: "#38ea92",
  },

  css: [
    '~/assets/css/main.styl'
  ],

  build: {
    vendor: [
      'vue-progressive-image',
    ],
    extend (config, { isDev, isClient, isServer }) {
      const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
      urlLoader.options.limit = 2000 // 2kb
    }
  },

  plugins: [
    { src: "~/plugins/vue-progressive-image.js", ssr: false }
  ],

  generate: {
    dir: 'dist'
  }
}