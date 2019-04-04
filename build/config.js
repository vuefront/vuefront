var path = require('path');
var fs = require('fs');
// var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

// var utilsList = fs.readdirSync(path.resolve(__dirname, '../src/utils'));
// var mixinsList = fs.readdirSync(path.resolve(__dirname, '../src/mixins'));
// var transitionList = fs.readdirSync(path.resolve(__dirname, '../src/transitions'));
var externals = {};

externals['vuex'] = `require('vuex')`
externals['vue'] = `require('vue')`
externals['vuetify/lib'] = `require('vuetify/lib')`
externals['vue-apollo'] = `require('vue-apollo')`
Object.keys(Components).forEach(function(key) {
  externals[`vuefront/components/${key}`] = `require('vuefront/lib/${key}')`;
  externals[`vuefront/scss/${key}.scss`] = `require('vuefront/scss/${key}.scss')`;
});
// externals['element-ui/src/locale'] = 'element-ui/lib/locale';
// utilsList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`element-ui/src/utils/${file}`] = `element-ui/lib/utils/${file}`;
// });
// mixinsList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`element-ui/src/mixins/${file}`] = `element-ui/lib/mixins/${file}`;
// });
// transitionList.forEach(function(file) {
//   file = path.basename(file, '.js');
//   externals[`element-ui/src/transitions/${file}`] = `element-ui/lib/transitions/${file}`;
// });

// externals = [Object.assign({
//   vue: 'vue'
// }, externals), nodeExternals()];

exports.externals = externals;

exports.alias = {
  '~': path.resolve(__dirname, '../'),
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
