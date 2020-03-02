module.exports = {
  presets: [
    ['@babel/preset-env', {
      modules: false,
    }],
  ],
  env: {
    test: {
      presets: [
        ['@babel/preset-env', {
          targets: { node: true },
        }],
      ],
      plugins: [
        ['module-resolver', {
          root: ['./src'],
          alias: {
            '~components': 'components',
            '~directives': 'directives',
            '~mixins': 'mixins',
            '~scss': 'scss',
            '~util': 'util',
          },
        }],
      ],
    },
    es5: {
      presets: ['@babel/preset-env'],
    },
    lib: {
      presets: [
        ['@babel/preset-env', {
          targets: 'last 1 chrome version',
          modules: false,
        }],
      ],
    },
  },
}