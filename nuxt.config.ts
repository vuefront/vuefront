import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'

require('dotenv').config()
export default {
  env: {},
  axios: {
    proxy: true
  },

  proxy: {
    '/api': {
      target: process.env.API,
      pathRewrite: {'^/api': ''},
      cookiePathRewrite: '/'
    },
  },
  head: {
    title: 'vuefront',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'VueFront'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  loading: {color: '#3B8070'},
  css: ['~/assets/style/app.styl', '~/assets/css/main'],
  plugins: ['@/plugins/vuetify', '@/plugins/alertify.client'],
  build: {
    transpile: ['vuetify/lib'],
    plugins: [new VuetifyLoaderPlugin()],
    extractCSS: true,
    loaders: {
      stylus: {
        import: ['~assets/style/variables.styl']
      }
    },
  },
  modules: ['@nuxtjs/axios', '@nuxtjs/pwa', '@nuxtjs/proxy', '@nuxtjs/dotenv', 'vuefront-nuxt', 'cookie-universal-nuxt', [
    '@nuxtjs/apollo',
    {
      tokenName: 'token',
      authenticationType: '',
      clientConfigs: {
        default: {
          httpEndpoint: process.env.HTTP_ENDPOINT + '/api/graphql'
        }
      }
    }
  ],]
}
