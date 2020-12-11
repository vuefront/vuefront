const {invertColor, alpha, darken} = require('./utils')
module.exports = (theme) => ({
  alert: {
    borderLeftWidth: theme('borderWidth.4'),
    borderStyle: 'solid',
    display: 'flex',
    fontSize: theme('fontSize.sm.0'),
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
  badge: {
    fontSize: theme('fontSize.xs.0'),
    lineHeight: theme('lineHeight.4'),
    fontWeight: theme('fontWeight.bold'),
    paddingLeft: theme('padding.2'),
    paddingRight: theme('padding.2'),
    paddingTop: theme('padding.1'),
    paddingBottom: theme('padding.1'),

    borderRadius: theme('borderRadius.DEFAULT'),
    '--rounded': {
      borderRadius: theme('borderRadius.full'),
    }
  },
  breadcrumb: {
    display: 'flex',
    flexWrap: 'wrap',
    paddingLeft: theme('padding.3'),
    paddingRight: theme('padding.3'),
    paddingTop: theme('padding.4'),
    paddingBottom: theme('padding.4'),
    marginBottom: theme('margin.4'),
    listStyle: 'none',
    '&__item': {
      display: 'flex',
      '&+.vf-m-breadcrumb__item': {
        paddingLeft: theme('padding.2')
      }
    }
  },
  buttonGroup: {
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
        fontSize: theme('fontSize.sm.0'),
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
        fontSize: theme('fontSize.xl.0'),
        lineHeight: theme('lineHeight.normal'),
        borderRadius: theme('borderRadius.md')
      }
    },
    '&--block': {
      width: theme('width.full')
    }
  },
  button: {
    padding: '.5rem 1rem',
    borderRadius: '.25rem',
    fontWeight: '600',
    borderWidth: '2px',
    borderStyle: 'solid',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&--link': {
      padding: '0',
      borderWidth: '0px',
    },
    '&--rounded': {
      borderRadius: theme('borderRadius.full'),
    },
    '&--sm': {
      paddingLeft: theme('padding.2'),
      paddingRight: theme('padding.2'),
      paddingTop: theme('padding.1'),
      paddingBottom: theme('padding.1'),
      fontSize: theme('fontSize.sm.0'),
      lineHeight: theme('lineHeight.normal'),
      borderRadius: theme('borderRadius.DEFAULT')
    },
    '&--md': {
      paddingLeft: theme('padding.3'),
      paddingRight: theme('padding.3'),
      paddingTop: theme('padding.2'),
      paddingBottom: theme('padding.2'),
    },
    '&--lg': {
      paddingLeft: theme('padding.4'),
      paddingRight: theme('padding.4'),
      paddingTop: theme('padding.3'),
      paddingBottom: theme('padding.3'),
      fontSize: theme('fontSize.xl.0'),
      lineHeight: theme('lineHeight.normal'),
      borderRadius: theme('borderRadius.md')
    }
  },
  field: {
    marginBottom: theme('margin.4'),
    '&__label': {
      marginBottom: theme('margin.2'),
      display: 'block'
    },
    '&__error': {
      marginTop: theme('margin.1'),
      width: theme('width.full'),
      fontSize: theme('fontSize.sm.0'),
      color: theme('vuefront.colors.danger')
    }
  },
  heading: {
    '&--1': {
      fontSize: theme('fontSize.4xl.0'),
      lineHeight: theme('lineHeight.10'),
      fontWeight: theme('fontWeight.extrabold'),
      marginBottom: theme('margin')['3.5'],
      color: theme('vuefront.colors.dark')
    },
    '&--2': {
      fontSize: theme('fontSize.2xl.0'),
      lineHeight: theme('lineHeight.8'),
      fontWeight: theme('fontWeight.bold'),
      marginBottom: theme('margin.4'),
      color: theme('vuefront.colors.dark')
    },
    '&--3': {
      fontSize: theme('fontSize.xl.0'),
      lineHeight: theme('lineHeight.7'),
      fontWeight: theme('fontWeight.semibold'),
      marginBottom: theme('margin.2'),
      color: theme('vuefront.colors.dark')
    },
    '&--4': {
      fontSize: theme('fontSize.base.0'),
      lineHeight: theme('lineHeight.6'),
      fontWeight: theme('fontWeight.semibold'),
      marginBottom: theme('margin.2'),
      color: theme('vuefront.colors.dark')
    },
    '&--5': {
      fontSize: theme('fontSize.base.0'),
      lineHeight: theme('lineHeight.6'),
      fontWeight: theme('fontWeight.semibold'),
      marginBottom: theme('margin.2'),
      color: theme('vuefront.colors.dark')
    },
    '&--6': {
      fontSize: theme('fontSize.base.0'),
      lineHeight: theme('lineHeight.6'),
      fontWeight: theme('fontWeight.semibold'),
      marginBottom: theme('margin.2'),
      color: theme('vuefront.colors.dark')
    },
  },
  inputGroup: {
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
        fontSize: theme('fontSize.sm.0'),
      }
    },
    '&--lg': {
      '.vf-m-input-group__text, .vf-a-button, .vf-a-input, vf-a-select, vf-a-datepicker, .vf-a-timepicker': {
        paddingTop: theme('padding.2'),
        paddingBottom: theme('padding.2'),
        paddingLeft: theme('padding.4'),
        paddingRight: theme('padding.4'),
        fontSize: theme('fontSize.xl.0'),
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
      fontSize: theme('fontSize.base.0'),
      fontWeight: theme('fontWeight.normal'),
      lineHeight: theme('lineHeight.normal'),
      color:'#495057',
      backgroundColor: '#e9ecef',
      border: '1px solid #ced4da'
    }
  },
  listGroup: {
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
        backgroundColor: theme('vuefront.colors.primary'),
        borderColor: theme('vuefront.colors.primary'),
        color: invertColor(theme('vuefront.colors.primary'), true),
      }
    }
  },
  pagination: {
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
          backgroundColor: theme('vuefront.colors.primary'),
          color: invertColor(theme('vuefront.colors.primary'), true)
        }
      },
      '&--active': {
        backgroundColor: darken(theme('vuefront.colors.primary'), 0.25),
        color: invertColor(theme('vuefront.colors.primary'), true)
      },
      '&--disabled': {
        opacity: theme('opacity.25'),
        cursor: theme('cursor.not-allowed')
      }
    }
  },
  
})