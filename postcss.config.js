module.exports = () => ({
  syntax: 'postcss-scss',
  plugins: [
    require('autoprefixer')(),
    require('postcss-nested')(),
    require('postcss-custom-media')({
      importFrom: './assets/css/customMediaVariables.css'
    }),
    require('postcss-font-magician')({
      protocol: 'https:',
      foundries: 'bootstrap google',
      display: 'swap'
    }),
    require('postcss-hexrgba')(),
    require('postcss-css-variables')()
  ]
})
