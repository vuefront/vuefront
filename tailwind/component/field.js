const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')
const { size } = require('lodash')

module.exports = (theme) => {
  const localColors = colors(theme)
  return {
    '.vf-m-field': {
      marginBottom: theme('margin.4'),
      '&__label': {
        marginBottom: theme('margin.2'),
        display: 'block'
      },
      '&__error': {
        marginTop: theme('margin.1'),
        width: theme('width.full'),
        fontSize: theme('fontSize.sm'),
        color: localColors.danger
      }
    }
  }
}