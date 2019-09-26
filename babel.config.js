module.exports = (api) => {
  api.cache(false);

  return {
    presets: [],
    env: {
      es: {
        plugins: [['@babel/plugin-transform-modules-commonjs', { loose: true }]]
      },
      esm: {
        presets: [['@babel/env', { modules: false }]]
      },
      test: {
        presets: [['@babel/env', { targets: { node: 'current' } }]]
      }
    },
    plugins: [
      'transform-inline-environment-variables',
      'minify-dead-code-elimination',
      '@babel/plugin-transform-runtime'
    ]
  }
}
