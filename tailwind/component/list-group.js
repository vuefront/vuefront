const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const localColors = colors(theme)
  return {
    '.vf-m-list-group': {
      display: 'flex',
      flexDirection: 'column',
      maxWidth: theme('maxWidth.md'),
      paddingLeft: theme('padding.0'),
      marginBottom: theme('margin.0'),
      borderRadius:  theme('borderRadius.DEFAULT'),
      '&__item': {
        backgroundColor: theme('colors.white'),
        position: 'relative',
        display: 'block',
        paddingLeft: theme('padding.5'),
        paddingRight: theme('padding.5'),
        paddingTop: theme('padding.3'),
        paddingBottom: theme('padding.3'),
        borderWidth: theme('borderWidth.DEFAULT'),
        '&+.vf-m-list-group__item': {
          borderTopWidth: theme('borderWidth.0'),
        },
        '&--active': {
          backgroundColor: theme('colors.white'),
          backgroundColor: localColors.primary,
          borderColor: localColors.primary,
          color: invertColor(localColors.primary, true),
        }
      }
    }
  }
}