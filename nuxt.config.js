import colors from 'vuetify/es5/util/colors'

export default {

  target: 'static',
  router: {
    base: '/Portafolio/'
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Jose Roberto',
    title: 'Portafolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/Roberto.svg' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/i18n',
    '@nuxt/http',
  ],

  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    proxy: true,
    debug: true
  },

  http: {
    baseURL: '"http://127.0.0.1:8000"', // Reemplaza con la URL de tu servidor o API
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3000', // Reemplaza con el origen correcto
      // Otras cabeceras CORS necesarias si es necesario
    }
  },

  proxy: {
    "/Seguridad":  `${process.env.DOMINIO}`
  },

  publicRuntimeConfig: {
    DOMINIO: process.env.DOMINIO,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true,
    defaultAssets:{
      font :{
        family:'Montserrat'
      }
    },
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.accent1,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        },
        light: {
          primary: "#000000",
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: "#40C351"
        }
      }
    }
  },

  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
