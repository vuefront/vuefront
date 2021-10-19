import '../../assets/scss/tailwind.scss';
import '../../assets/scss/theme.scss';
import VueLazyLoad from 'vue3-lazyload'
import { app } from '@storybook/vue3';
import vueRouter from 'storybook-vue3-router'
import { createI18n } from 'vue-i18n'
import * as messages from '../../lib/locales/en-gb';
import * as config from '../../'
import './vuex'

const i18n = createI18n({
  locale: 'en',
  messages: { en: messages }
})
app.use(i18n)

app.use(VueLazyLoad, {
  throttleWait: 1000
})


app.provide('$vuefront', {
  images: config.image,
  options: {
    productGridNoGutters: false
  },
  get isAMP() {
    return false
  },
  get isClient() {
    return true
  }
})

app.config.globalProperties.$vuefront = {
  images: config.image,
  get isAMP() {
    return false
  }
}
app.$vuefront = {
  images: config.image,
  get isAMP() {
    return false
  }
}
export const parameters = {
  // actions: { argTypesRegex: "^on[A-Z].*" },
  // controls: {
  //   matchers: {
  //     color: /(background|color)$/i,
  //     date: /Date$/,
  //   },
  // },
}
// .storybook/preview.js

export const decorators = [
  vueRouter()
]