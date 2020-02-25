const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need

    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', { loader: 'postcss-loader', options: { config: { path: path.resolve(__dirname, './') } } }, 'sass-loader'],
        include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
        test: /\.(graphql|gql)$/,
        loader: 'graphql-tag/loader',
        include: path.resolve(__dirname, '../'),
    });

    config.module.rules.push({
        test: /\.stories\.js?$/,
        loaders: [require.resolve('@storybook/addon-storysource/loader')],
        enforce: 'pre',
    });

    config.module.rules.push({
        test: /\.vue$/,
        loader: 'storybook-addon-vue-info/loader',
        enforce: 'post'
    })

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
};