const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const localColors = colors(theme)
  return {
    '.vf-m-button-group': {
      display: 'inline-flex',
      '> *': {
        flex: '1 1 auto',
        '&:not(:last-child)': {
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0
        },
        '&:not(:first-child)': {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0
        }
      },
      '&--sm': {
        '.vf-a-button': {
          paddingLeft: theme('padding.2'),
          paddingRight: theme('padding.2'),
          paddingTop: theme('padding.1'),
          paddingBottom: theme('padding.1'),
          fontSize: theme('fontSize.sm'),
          lineHeight: theme('lineHeight.normal'),
          borderRadius: theme('borderRadius.DEFAULT')
        }
      },
      '&--lg': {
        '.vf-a-button': {
          paddingLeft: theme('padding.4'),
          paddingRight: theme('padding.4'),
          paddingTop: theme('padding.3'),
          paddingBottom: theme('padding.3'),
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.normal'),
          borderRadius: theme('borderRadius.md')
        }
      },
      '&--block': {
        width: theme('width.full')
      }
    }
  }
}