const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const items = {}
  const localColors = colors(theme)
  for (const key in localColors) {
    items[`.vf-a-badge--${key}`] = {
      backgroundColor: localColors[key],
      color: invertColor(localColors[key], true),
      '&:hover': {
        backgroundColor: darken(localColors[key], 0.25),
      },
    }
  }
  return {
    '.vf-a-badge': {
      fontSize: theme('fontSize.xs'),
      lineHeight: theme('lineHeight.4'),
      fontWeight: theme('fontWeight.bold'),
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: theme('padding.1'),
      paddingBottom: theme('padding.1'),

      borderRadius: theme('borderRadius.DEFAULT')
    },
    '.vf-a-badge--rounded': {
      borderRadius: theme('borderRadius.full'),
    },
    ...items
  }
}