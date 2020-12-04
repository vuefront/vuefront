const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const localColors = colors(theme)
  return {
    '.vf-m-breadcrumb': {
      display: 'flex',
      flexWrap: 'wrap',
      paddingLeft: theme('padding.3'),
      paddingRight: theme('padding.3'),
      paddingTop: theme('padding.4'),
      paddingBottom: theme('padding.4'),
      marginBottom: theme('margin.4'),
      listStyle: 'none',
      '&__item': {
        display: 'flex',
        '&+.vf-m-breadcrumb__item': {
          paddingLeft: theme('padding.2')
        }
      }
    }
  }
}