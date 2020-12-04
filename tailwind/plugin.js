const _ = require('lodash')
const plugin = require('tailwindcss/plugin')


const buttonComponent = require('./component/button')
const alertComponent = require('./component/alert')
const badgesComponent = require('./component/badges')
const paginationComponent = require('./component/pagination')
const breadcrumbsComponent = require('./component/breadcrumb')
const inputGroupComponent = require('./component/input-group')

module.exports = plugin(function({ addUtilities, e, theme, variants, addComponents }) {
  addComponents(buttonComponent(theme))
  addComponents(alertComponent(theme))
  addComponents(badgesComponent(theme))
  addComponents(paginationComponent(theme))
  addComponents(breadcrumbsComponent(theme))
  addComponents(inputGroupComponent(theme))
}, {
  purge: [
    './node_modules/vuefront/**/*.vue',
    './components/**/*.vue'
  ],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px'
    },
    extend:{
    customForms: {
      default: {
        checkbox: {
          "&:focus": {
            outline: "none",
            boxShadow: "none",
            borderColor: "none",
          },
        },
      },
    }
  }
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: [
    
  ]
})