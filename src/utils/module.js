import isEmpty from "lodash-es/isEmpty";
import isUndefined from "lodash-es/isUndefined";
import { mapGetters } from "vuex";
export const BaseModule = {
  data() {
    this.$store.commit("position/setParams", this.$vuefront.params);

    let path = this.$route.path;
    if (this.$route.matched.length > 0) {
      path = this.$route.matched[0].path;
      for (const key in this.$route.params) {
        path = path.replace(`:${key}`, this.$route.params[key]);
      }
    }
    this.$store.commit("position/setRoute", path);

    return {};
  },
  computed: {
    ...mapGetters({
      currentRoute: "position/currentRoute",
      positions: "position/position",
    }),
  },
  methods: {
    checkModules(position) {
      let result = false;
      const status = this.positions(position);

      if (!status) {
        for (const route in this.$vuefront.layouts) {
          const layout = this.$vuefront.layouts[route];
          let regexRoute = route.replace("*", ".*");
          regexRoute = regexRoute.replace("//", "\\//");
          const regex = new RegExp("^" + regexRoute + "$", "i");

          if (regex.test(this.currentRoute)) {
            if (!isUndefined(layout[position]) && !isEmpty(layout[position])) {
              result = true;
              break;
            }
            if (
              !isUndefined(layout.extensions) &&
              !isUndefined(layout.extensions[position]) &&
              !isEmpty(layout.extensions[position])
            ) {
              result = true;
              break;
            }
          }
        }
      } else {
        result = status;
      }

      this.$store.commit("position/setPosition", {
        name: position,
        status: result,
        route: this.currentRoute,
      });

      return result;
    },
  },
};
