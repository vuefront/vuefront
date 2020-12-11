const {invertColor, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const items = {}
  const localColors = theme('vuefront.colors')
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
    '.vf-a-badge': theme('vuefrontComponent.badge'),
    ...items
  }
}