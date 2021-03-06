module.exports = {
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',

  env: {
    BINANCE_API: 'https://api.binance.com/api/v3'
  },

  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        src: '/vendor/aframe/aframe-v1.2.0.js'
      }
    ]
  },

  /*
   ** Global Styles (Do not import actual styles)
   ** https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: [
      // Nothing
    ]
  },

  /*
   ** Global Styles (Actual styles)
   */
  css: [
    // Actual styles entry point (as import management)
    '~/assets/style/scss/app.scss'
  ],

  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    // App
    { src: '@/plugins/app/app-axios.js' },
    { src: '@/plugins/app/api-register.js' }
  ],

  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: [{ path: '~/components', pathPrefix: false }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/eslint-module',
      {
        // eslint module options
      }
    ],
    [
      '@nuxtjs/stylelint-module',
      {
        // stylelint module options
        files: ['{assets/style,components,layouts,pages}/**/*.{css,sass,scss,less,stylus,vue}']
      }
    ]
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org
    '@nuxtjs/axios',
    // Doc: https://github.com/RadKod/nuxt-change-case
    'nuxt-change-case'
  ],

  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extractCSS: process.env.NODE_ENV === 'production'
  },

  /*
   ** Server configuration
   ** See https://nuxtjs.org/api/configuration-server/
   */
  server: {
    host: '0.0.0.0', // default: localhost,
    timing: false,
    port: 8080
  }
}
