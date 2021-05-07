const Color = require('color')
const svgToDataUri = require('mini-svg-data-uri')
const isPlainObject = require('lodash/isPlainObject')
const isFunction = require('lodash/isFunction')
const merge = require('lodash/merge')
const traverse = require('traverse')
module.exports.replaceIconDeclarations = (component) => {
  const properties = ['iconColor', 'icon']
  return traverse(component).map(function (value) {
      if (!isPlainObject(value)) return

      if (Object.keys(value).some((prop) => properties.includes(prop))) {
        const { iconColor, icon, ...rest } = value
        this.update(
          merge(
            {
              backgroundImage: `url("${svgToDataUri(isFunction(icon) ? icon(iconColor) : icon)}")`,
            },
            rest
          )
        )
      }
    })
t}
module.exports.invertColor = (hex, bw) => {
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
module.exports.alpha = (clr, val) => Color(clr).alpha(val).rgb().string()
module.exports.lighen = (clr, val) => Color(clr).lighten(val).rgb().string()
module.exports.darken = (clr, val) => Color(clr).darken(val).rgb().string()
module.exports.whiten = (clr, val) => Color(clr).whiten(val).rgb().string()