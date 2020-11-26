const Color = require('color')
const alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
const lighen = (clr, val) => Color(clr).lighten(val).rgb().string()
const darken = (clr, val) => Color(clr).darken(val).rgb().string()
const whiten = (clr, val) => Color(clr).whiten(val).rgb().string()

function invertColor(hex, bw) {
  if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
  }
  var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
      // http://stackoverflow.com/a/3943023/112731
      return (r * 0.299 + g * 0.587 + b * 0.114) > 186
          ? '#000000'
          : '#FFFFFF';
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
}

var colors = {
  primary: '#6e00ff',
  secondary: '#eff2f7',
  neutral: '#ffffff',
  success: '#36b37e',
  info: '#00b8d9',
  warning: '#ffab00',
  danger: '#ff5630',
  white: '#ffffff',
  light: '#eff2f7',
  dark: '#273444'
}

for (const key in colors) {
  colors[key] = {
    DEFAULT: colors[key], // => .bg-brand
    darker: darken(colors[key], 0.25),
    inverted: invertColor(colors[key], true)
  }
}

module.exports = {
  purge: [
    './node_modules/vuefront/**/*.vue',
    './components/**/*.vue'
  ],
  theme: {
    colors
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    }
  },
  plugins: []
}
