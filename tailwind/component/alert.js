const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const alerts = {}
  const localColors = colors(theme)
  for (const key in localColors) {
    alerts[`.vf-a-alert--${key}`] = {
      backgroundColor: localColors[key],
      borderColor: darken(localColors[key], 0.25),
      color: invertColor(localColors[key], true),
      
    }
  }
  return {
    '.vf-a-alert': {
      borderLeftWidth: theme('borderWidth.4'),
      borderStyle: 'solid',
      display: 'flex',
      fontSize: theme('fontSize.sm'),
      lineHeight: theme('lineHeight.5'),
      padding: theme('padding.4'),
      marginBottom: theme('margin.4'),
      borderRadius: theme('borderRadius.DEFAULT'),
      '&__content': {
        flexGrow: 1,
        textAlign: 'left'
      },
      '&__button': {
        marginLeft: theme('margin.4')
      }
    },
    ...alerts
  }
}