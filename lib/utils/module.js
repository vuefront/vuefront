import { isEmpty, isUndefined } from 'lodash';
export var BaseModule = {
  methods: {
    checkModules: function checkModules(position) {
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

        if (regex.test(currentRoute) && !isUndefined(layout[position])) {
          if (!isEmpty(layout[position])) {
            return true;
          }
        }
      }

      return false;
    }
  }
};