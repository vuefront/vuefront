const path = require('path');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

const Common = require('../common.json');
const config = require('./config');
const webpackConfig = {
  mode: 'production',
  entry: Common,
  output: {
    path: path.resolve(process.cwd(), './lib'),
    publicPath: '/lib/',
    filename: '[name].js',
    chunkFilename: '[id].js',
    library: "LIB",
    libraryTarget: "var"
  },
  resolve: {
    extensions: ['.js', '.json'],
    alias: config.alias,
    modules: ['node_modules']
  },
  externals: config.externals,
  stats: {
    colors: true,
    hash: false,
    version: true,
    timings: true,
    assets: true,
    chunks: false,
    modules: false,
    reasons: false,
    children: false,
    source: false,
    errors: true,
    errorDetails: false,
    warnings: true,
    publicPath: false
  },
  performance: {
    hints: false
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.(graphql|gql)$/,
        use: 'graphql-tag/loader'
      },
      {
        test: /\.(jsx?|babel|es6)$/,
        include: process.cwd(),
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new EsmWebpackPlugin()
  ]
};

module.exports = webpackConfig;
