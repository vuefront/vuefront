<template>
  <vf-t-common-layout>
    <template v-if="loaded">
      <vf-t-store-manufacturer-list :manufacturers="manufacturers" />
    </template>
    <template v-else>
      <vf-l-t-store-manufacturer-list />
    </template>
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
import useModule from "../../../../utils/module";
export default {
  setup() {
    const { checkModules } = useModule();

    return { checkModules };
  },
  props: ["id", "keyword", "url"],
  asyncData(ctx) {
    return {
      loaded: !process.client,
    };
  },
  data() {
    return {
      loaded: true,
    };
  },
  head() {
    return {
      title: this.$t("pages.store.manufacturerList.title"),
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.manufacturerList.title"),
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      manufacturers: "store/manufacturer/list",
    }),
  },
  watch: {
    loaded(newValue, oldValue) {
      if (!newValue && oldValue) {
        this.handleLoadData();
      }
    },
  },
  watchQuery: true,
  mounted() {
    if (!this.loaded) {
      this.handleLoadData();
    }
  },
  methods: {
    async handleLoadData(ctx) {
      await this.$store.dispatch("apollo/query", {
        query: this.$options.query,
      });
      const { manufacturerList } = this.$store.getters["apollo/get"];
      this.$store.commit("store/manufacturer/setEntities", manufacturerList);
      this.loaded = true;
    },
  },
};
</script>
<graphql>
{
  manufacturerList(page: 1, size: -1, sort: "name", order: "desc"){
    content {
      id
      name
      url(url: "/store/manufacturer/_id")
    }
  }
}
</graphql>
