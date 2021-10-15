import '../../assets/scss/tailwind.scss';
import '../../assets/scss/theme.scss';
import VueLazyLoad from 'vue3-lazyload'
import {app} from '@storybook/vue3';
import vueRouter from 'storybook-vue3-router'
import {createI18n} from 'vue-i18n'
const i18n =  createI18n({
  locale: 'en-gb',
  messages: {}
})
app.use(i18n)

app.use(VueLazyLoad, {
  throttleWait: 1000
})


app.provide('$vuefront', {
  get isAMP() {
    return false
  }
})
app.config.globalProperties.$vuefront = {
  get isAMP() {
    return false
  }
}
app.$vuefront = {
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

export const decorators = [
  vueRouter()
]