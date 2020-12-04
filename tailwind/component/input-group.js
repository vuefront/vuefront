const {invertColor, alpha, darken} = require('../utils')
const {colors} = require('../colors')

module.exports = (theme) => {
  const localColors = colors(theme)
  return {
    '.vf-m-input-group': {
      display: 'flex',
      flexWrap: 'wrap',
      flexFlow: 'row',
      alignItems: 'stretch',
      width: theme('width.full'),
      '&--sm': {
        '.vf-m-input-group__text, .vf-a-button, .vf-a-input, vf-a-select, vf-a-datepicker, .vf-a-timepicker': {
          paddingTop: theme('padding.1'),
          paddingBottom: theme('padding.1'),
          paddingLeft: theme('padding.2'),
          paddingRight: theme('padding.2'),
          fontSize: theme('fontSize.sm'),
        }
      },
      '&--md': {

      },
      '&--lg': {
        '.vf-m-input-group__text, .vf-a-button, .vf-a-input, vf-a-select, vf-a-datepicker, .vf-a-timepicker': {
          paddingTop: theme('padding.2'),
          paddingBottom: theme('padding.2'),
          paddingLeft: theme('padding.4'),
          paddingRight: theme('padding.4'),
          fontSize: theme('fontSize.xl'),
        }

      },
      '> *:not(:first-child)': {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
      },
      '> *:not(:last-child)': {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
      },
      '&__prepend': {
        display: 'flex',
        marginRight: '-1px',
        '> .vf-m-input-group__text,> .vf-a-button,> .vf-m-dropdown,> .vf-a-input,> .vf-a-select,> .vf-a-datepicker,> .vf-a-timepicker': {
          '&:not(:first-child)': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            '.vf-a-button': {
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
            }
          },
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
          '.vf-a-button': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }
        },
      },
      '&__append': {
        display: 'flex',
        marginLeft: '-1px',
        '> .vf-m-input-group__text,> .vf-a-button,> .vf-m-dropdown,> .vf-a-input,> .vf-a-select,> .vf-a-datepicker,> .vf-a-timepicker': {
          '&:not(:last-child)': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
            '.vf-a-button': {
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0
            }
          },
          '.vf-a-button': {
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0
          },
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0
        }
      },
      '&__text': {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme('margin.0'),
        paddingTop: theme('padding')['1.5'],
        paddingBottom: theme('padding')['1.5'],
        paddingLeft: theme('padding.3'),
        paddingRight: theme('padding.3'),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        borderRadius: theme('borderRadius.DEFAULT'),
        fontSize: theme('fontSize.base'),
        fontWeight: theme('fontWeight.normal'),
        lineHeight: theme('lineHeight.normal'),
        color:'#495057',
        backgroundColor: '#e9ecef',
        border: '1px solid #ced4da'
      }
    }
  }
}