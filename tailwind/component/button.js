const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const buttons = {}
  const localColors = colors(theme)
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
    '.vf-a-button': {
      padding: '.5rem 1rem',
      borderRadius: '.25rem',
      fontWeight: '600',
      borderWidth: '2px',
      borderStyle: 'solid',
      cursor: 'pointer'
    },
    '.vf-a-button--rounded': {
      borderRadius: theme('borderRadius.full'),
    },
    '.vf-a-button--sm': {
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: theme('padding.1'),
      paddingBottom: theme('padding.1')
    },
    '.vf-a-button--md': {
      paddingLeft: theme('padding.3'),
      paddingRight: theme('padding.3'),
      paddingTop: theme('padding.2'),
      paddingBottom: theme('padding.2')
    },
    '.vf-a-button--lg': {
      paddingLeft: theme('padding.4'),
      paddingRight: theme('padding.4'),
      paddingTop: theme('padding.3'),
      paddingBottom: theme('padding.3')
    },
    ...buttons
  }
}