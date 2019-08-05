<template>
  <vf-t-wishlist :wishlist="wishlist" />
</template>
<script>
import { mapGetters } from "vuex";
import wishlistGetGql from "./wishlist.graphql";

export default {
  head() {
    return {
      title: this.$t("templates.store.wishlist.textTitle")
    };
  },
  computed: {
    ...mapGetters({
      wishlist: "store/wishlist/get"
    })
  },
  async fetch({ store, app }) {
    await store.dispatch("apollo/query", {
      query: wishlistGetGql
    });

    if (!store.getters["vuefront/error"]) {
      store.commit("store/wishlist/setWishlist", store.getters["apollo/get"].wishlist);
    }
  }
};
</script>
