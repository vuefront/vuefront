"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseLayout = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _lodash = require("lodash");

var BaseLayout = {
  computed: {
    modules: function modules() {
      var result = [];

      for (var route in this.$vuefront.options.layouts) {
        var layout = this.$vuefront.options.layouts[route];
        var regexRoute = route.replace('*', '.*');
        regexRoute = regexRoute.replace('//', '\\//');
        var regex = new RegExp('^' + regexRoute + '$', 'i');
        var currentRoute = this.$route.path !== '' ? this.$route.path : '/';

        if (!(0, _lodash.isEmpty)(this.$vuefront.params.url)) {
          currentRoute = this.$vuefront.params.url;
        }

        currentRoute = currentRoute.replace('/amp', '');
        currentRoute = currentRoute !== '' ? currentRoute : '/';

        if (regex.test(currentRoute) && !(0, _lodash.isUndefined)(layout[this.position])) {
          for (var key in layout[this.position]) {
            if ((0, _lodash.isString)(layout[this.position][key])) {
              result = [].concat((0, _toConsumableArray2.default)(result), [{
                component: 'vfModule' + layout[this.position][key],
                props: {}
              }]);
            } else {
              result = [].concat((0, _toConsumableArray2.default)(result), [{
                component: 'vfModule' + layout[this.position][key][0],
                props: layout[this.position][key][1]
              }]);
            }
          }
        }
      }

      return result;
    }
  }
};
exports.BaseLayout = BaseLayout;