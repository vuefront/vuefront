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
    config.module.rules.push({ 
      test: /\.graphql$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });

    return config;
  },
}