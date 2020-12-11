const {invertColor, darken} = require('../utils')

module.exports = (theme) => {
  const buttons = {}
  const localColors = theme('vuefront.colors')
  for (const key in localColors) {
    buttons[`.vf-a-button--${key}`] = {
      backgroundColor: localColors[key],
      borderColor: localColors[key],
      color: invertColor(localColors[key], true),
      '&.active': {
        backgroundColor: darken(localColors[key], 0.25),
        borderColor: darken(localColors[key], 0.25)
      },
      '&:hover': {
        backgroundColor: darken(localColors[key], 0.25),
        borderColor: darken(localColors[key], 0.25)
      },
    }
    buttons[`.vf-a-button--outline-${key}`] = {
      backgroundColor: theme('colors.white'),
      borderColor: localColors[key],
      color: localColors[key],
      '&.active': {
        color: invertColor(localColors[key], true),
        backgroundColor: darken(localColors[key], 0.25),
        borderColor: darken(localColors[key], 0.25)
      },
      '&:hover': {
        color: invertColor(localColors[key], true),
        backgroundColor: darken(localColors[key], 0.25),
        borderColor: darken(localColors[key], 0.25)
      },
    }
  }
  return {
    '.vf-a-button':theme('vuefrontComponent.button'),
    ...buttons
  }
}