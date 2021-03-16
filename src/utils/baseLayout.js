import { mapGetters } from "vuex";
export const BaseLayout = {
  data() {
    this.$store.dispatch("position/loadModules", { position: this.name });

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
  computed: {
    ...mapGetters({
      modulesList: "position/modules",
    }),
    modules() {
      return this.modulesList(this.name);
    },
  },
};
