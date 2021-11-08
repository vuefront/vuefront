const gql = require('graphql-tag')
module.exports = function (source, map) {
  source = JSON.stringify(source)

  source = source.replace('export default doc', '')
  source = source.replace('\\n', '')
  this.callback(
    null,
    `export default component => {
      component.query = ${source}
      if (!component.options) {
        component.options = {}
      }
      var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options
    if (typeof component.exports === 'function') {
      options.query = ${source}
    }
  }`,
    map
  )
}