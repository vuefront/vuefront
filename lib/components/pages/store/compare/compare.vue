<template>
  <vf-t-store-compare :compare="compare" />
</template>
<script>
import { mapGetters } from "vuex";
import compareGetGql from "./compare.graphql";

export default {
  head() {
    return {
      title: this.$t("templates.store.compare.textTitle")
    };
  },
  computed: {
    ...mapGetters({
      compare: "store/compare/get"
    })
  },
  async fetch({ store }) {
    await store.dispatch("apollo/query", {
      query: compareGetGql
    });

    if (!store.getters["vuefront/error"]) {
      store.commit(
        "store/compare/setCompare",
        store.getters["apollo/get"].compare
      );
    }
  }
};
</script>
