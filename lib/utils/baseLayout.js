import { mapGetters } from "vuex";
import isUndefined from "lodash-es/isUndefined";
export const BaseLayout = {
  data() {
    console.log('data BaseLayout');
    this.$store.dispatch("position/loadModules", {
      position: this.name
    });
    let path = this.$route.path;

    if (this.$route.matched.length > 0) {
      path = this.$route.matched[0].path;

      for (const key in this.$route.params) {
        path = path.replace(`:${key}`, this.$route.params[key]);
      }
    }

    this.$store.commit("position/setParams", this.$vuefront.params);
    this.$store.commit("position/setRoute", path);
    return {};
  },

  computed: { ...mapGetters({
      currentRoute: "position/currentRoute",
      modulesList: "position/modules",
      layout: "position/layout"
    }),

    modules() {
      return this.modulesList(this.name);
    }

  },
  methods: {
    initLayout() {
      console.log('initLayout');
      let template = "default";

      for (const route in this.$vuefront.layouts) {
        const layout = this.$vuefront.layouts[route];
        let regexRoute = route.replace("*", ".*");
        regexRoute = regexRoute.replace("//", "\\//");
        const regex = new RegExp("^" + regexRoute + "$", "i");

        if (regex.test(this.currentRoute)) {
          if (!isUndefined(layout.layout)) {
            template = layout.layout;
          }
        }
      }

      this.$store.commit("position/setLayout", {
        layout: template,
        route: this.currentRoute
      });
    }

  }
};