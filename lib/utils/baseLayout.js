import { mapGetters } from "vuex";
import isUndefined from "lodash-es/isUndefined";
export const BaseLayout = {
  data() {
    this.$store.dispatch("position/loadModules", {
      position: this.name
    });
    return {};
  },

  computed: { ...mapGetters({
      currentRoute: "position/currentRoute",
      modulesList: "position/modules",
      layout: "position/layout"
    }),

    modules() {
      return this.modulesList(this.name) || [];
    }

  },
  methods: {
    initLayout() {
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