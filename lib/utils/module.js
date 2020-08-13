import { isEmpty, isNull, isUndefined } from 'lodash';
import { mapGetters } from 'vuex';
export const BaseModule = {
  data() {
    this.$store.commit('position/setParams', this.$vuefront.params);
    this.$store.commit('position/setRoute', this.$route);
    return {};
  },

  computed: { ...mapGetters({
      currentRoute: 'position/currentRoute',
      positions: 'position/position'
    })
  },
  methods: {
    checkModules(position) {
      let result = false;
      let status = this.positions(position);

      if (isNull(status)) {
        for (const route in this.$vuefront.layouts) {
          const layout = this.$vuefront.layouts[route];
          let regexRoute = route.replace('*', '.*');
          regexRoute = regexRoute.replace('//', '\\//');
          const regex = new RegExp('^' + regexRoute + '$', 'i');

          if (regex.test(this.currentRoute) && !isUndefined(layout[position])) {
            if (!isEmpty(layout[position])) {
              result = true;
              break;
            }
          }
        }
      } else {
        result = status;
      }

      this.$store.commit('position/setPosition', {
        name: position,
        status: result,
        route: this.currentRoute
      });
      return result;
    }

  }
};