const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const alerts = {}
  const localColors = theme('vuefront.colors')
  for (const key in localColors) {
    alerts[`.vf-a-alert--${key}`] = {
      backgroundColor: localColors[key],
      borderColor: darken(localColors[key], 0.25),
      color: invertColor(localColors[key], true),
      
    }
  }
  return {
    '.vf-a-alert': theme('vuefrontComponent.alert'),
    ...alerts
  }
}