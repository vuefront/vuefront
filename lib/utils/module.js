"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BaseModule = void 0;

var _lodash = require("lodash");

var BaseModule = {
  methods: {
    checkModules: function checkModules(position) {
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

        if (regex.test(currentRoute) && !(0, _lodash.isUndefined)(layout[position])) {
          if (!(0, _lodash.isEmpty)(layout[position])) {
            return true;
          }
        }
      }

      return false;
    }
  }
};
exports.BaseModule = BaseModule;