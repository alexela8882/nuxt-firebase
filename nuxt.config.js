import colors from 'vuetify/es5/util/colors'

export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  // router: {
  //   base: '/nuxt-vuetify/'
  // },
  // server: {
  //   port: 3000, // default: 3000
  //   host: '10.50.11.12' // default: localhost
  // },
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    { src: 'material-design-icons-iconfont/dist/material-design-icons.css', lang: 'css' }
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~/plugins/snackbar.js',
    '~/plugins/baseurl.js',
    '~/plugins/get-data-from-apis.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',

    // firebase module for nuxt
    '@nuxtjs/pwa',
    '@nuxtjs/firebase'
  ],
  firebase: {
    config: {
      apiKey: "AIzaSyBH2FtDwksGB2QJLvqf20pm8sonVg8ORks",
      authDomain: "lekzify-ab7c6.firebaseapp.com",
      databaseURL: "https://lekzify-ab7c6.firebaseio.com",
      projectId: "lekzify-ab7c6",
      storageBucket: "lekzify-ab7c6.appspot.com",
      messagingSenderId: "38339345461",
      appId: "1:38339345461:web:0f98997ef93b9bfbb1857c",
      measurementId: "G-HVVN7KKY28"
    },
    services: {
      auth: {
        persistence: 'local', // default
        initialize: {
          onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION',
          // onAuthStateChangedAction: 'onAuthStateChangedAction'
        },
        ssr: true
      }
    }
  },
  pwa: {
    meta: false,
    icon: false,
    workbox: {
      importScripts: [
        '/firebase-auth-sw.js'
      ],
      dev: true
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
}