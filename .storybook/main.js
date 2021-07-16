const path = require('path');
module.exports = {
  "stories": [
    "../src/components/atoms/*/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-info",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-postcss'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader', 
      { 
          loader: 'postcss-loader', 
          options: { 
              postcssOptions: { 
                  path: path.resolve(__dirname, './') 
              } 
          } 
      }
      ],
      include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
        test: /\.(graphql|gql)$/,
        loader: 'graphql-tag/loader',
        include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/source-loader')],
        enforce: 'pre',
    });

    // config.module.rules.push({
    //     test: /\.vue$/,
    //     loader: 'storybook-addon-vue-info/loader',
    //     enforce: 'post'
    // })

    config.module.rules.push({
        test: /\.(png|jpe?g|gif)$/i,
        use: ['file-loader'],
        //include: path.resolve(__dirname, '../'),
    })

    config.resolve.alias = {
        vuefront: path.resolve(__dirname, '../'),
        vue: 'vue/dist/vue.esm.js',
        '@': path.dirname(path.resolve(__dirname))
    }

    // Return the altered config
    return config;
  },
}