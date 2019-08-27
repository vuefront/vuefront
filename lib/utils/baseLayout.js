import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import { isString, isEmpty, isUndefined } from 'lodash';
export var BaseLayout = {
  computed: {
    modules: function modules() {
      var result = [];

      for (var route in this.$vuefront.options.layouts) {
        var layout = this.$vuefront.options.layouts[route];
        var regexRoute = route.replace('*', '.*');
        regexRoute = regexRoute.replace('//', '\\//');
        var regex = new RegExp('^' + regexRoute + '$', 'i');
        var currentRoute = this.$route.path !== '' ? this.$route.path : '/';

        if (!isEmpty(this.$vuefront.params.url)) {
          currentRoute = this.$vuefront.params.url;
        }

        currentRoute = currentRoute.replace('/amp', '');
        currentRoute = currentRoute !== '' ? currentRoute : '/';

        if (regex.test(currentRoute) && !isUndefined(layout[this.position])) {
          for (var key in layout[this.position]) {
            if (isString(layout[this.position][key])) {
              result = [].concat(_toConsumableArray(result), [{
                component: 'vfE' + layout[this.position][key],
                props: {}
              }]);
            } else {
              result = [].concat(_toConsumableArray(result), [{
                component: 'vfE' + layout[this.position][key][0],
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