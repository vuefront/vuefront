const path = require('path')
const root = path.resolve(__dirname, '../../src')
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
        replaceRoot: root.replace(/\\/g, '/'),
      }
    }
  ],
  webpackFinal: async (config, { configType }) => {
    const hasBlockLoader = config.module.rules.some(
      rule => rule.resourceQuery === /blockType=graphql/
    )
    if (!hasBlockLoader) {
      const blockRules = {
        resourceQuery: /blockType=graphql/,
        loader: require.resolve('./graphql-loader.js')
      }
      config.module.rules.push(blockRules)
    }
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto'
    })
    // and THIS
    config.module.rules.push({ 
      test: /\.graphql$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
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