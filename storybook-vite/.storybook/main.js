import { createApp } from "vue";
const app = createApp({});
app.config.globalProperties.$vuefront = {
  isAuth: false
}

module.exports = {
  "stories": [
    "../../src/components/atoms/alert/*.stories.@(js|jsx|ts|tsx)",
    "../../src/components/molecules/account-menu/*.stories.@(js|jsx|ts|tsx)",
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  "core": {
    "builder": "storybook-builder-vite"
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    config.plugins.push(
      vueI18n.vueI18n({
        // if you want to use Vue I18n Legacy API, you need to set `compositionOnly: false`
        compositionOnly: false,
  
        // you need to set i18n resource including paths !
        include: path.resolve(__dirname, '../../src/locales/**')
      })
    )

    // return the customized config
    return config;
  },
}