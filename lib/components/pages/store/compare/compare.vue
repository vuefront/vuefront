<template>
  <vf-t-common-layout>
    <vf-t-store-compare :compare="compare" />
  </vf-t-common-layout>
</template>
<script>
import { mapGetters } from "vuex";
import compareGetGql from "./compare.graphql";

export default {
  async fetch({ store }) {
    await store.dispatch("apollo/query", {
      query: compareGetGql,
    });

    if (!store.getters["vuefront/error"]) {
      store.commit(
        "store/compare/setCompare",
        store.getters["apollo/get"].compare
      );
    }
  },
  head() {
    return {
      title: this.$t("pages.store.compare.metaTitle"),
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.compare.breadcrumbTitle"),
        to: this.$route.path,
      },
    ];
  },
  computed: {
    ...mapGetters({
      compare: "store/compare/get",
    }),
  },
};
</script>
