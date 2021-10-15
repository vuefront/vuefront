const path = require('path')
module.exports = {
  "stories": [
    "../../src/**/*.stories.mdx",
    "../../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss",
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
        },
      },
    },
    {
      name: 'storybook-addon-vuefront',
      options: {
        replaceRoot: path.resolve(__dirname, '../../src'),
      }
    }
  ],
  // webpackFinal: async (config, {configType}) => {
  //   const {rules} = config.module
  //   const themeOptions = setupConfig()
  //   config.plugins.push(new VuefrontLoaderPlugin({config:themeOptions}))
  //   for (const key in rules) {
  //     if (String(rules[key].test) === String(/\.s[ca]ss$/)) {
  //       config.module.rules[key].use = [...config.module.rules[key].use.slice(0, -1), {
  //         loader: 'postcss-loader',
  //         options: {
  //           implementation: require('postcss'),
  //         }
  //       }, ...config.module.rules[key].use.slice(-1)]
  //     }
  //   }
  //   return config
  // }
}