const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const localColors = colors(theme)
  return {
    '.vf-a-pagination': {
      display: 'table',
      borderCollapse: 'collapse',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: theme('margin.2'),
      backgroundColor: theme('colors.white'),
      '&__item': {
        display: 'table-cell',
        width: theme('width.8'),
        height: theme('height.8'),
        borderWidth: theme('borderWidth.DEFAULT')
      },
      '&__link': {
        width: theme('width.full'),
        height: theme('height.full'),
        '&:not(.vf-a-pagination__link--active):not(.vf-a-pagination__link--disabled)': {
          '&:hover': {
            backgroundColor: localColors.primary,
            color: invertColor(localColors.primary, true)
          }
        },
        '&--active': {
          backgroundColor: darken(localColors.primary, 0.25),
          color: invertColor(localColors.primary, true)
        },
        '&--disabled': {
          opacity: theme('opacity.25'),
          cursor: theme('cursor.not-allowed')
        }
      }
    }
  }
}