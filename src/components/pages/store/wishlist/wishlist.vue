<template>
  <vf-t-store-wishlist :wishlist="wishlist" />
</template>
<script>
import { mapGetters } from "vuex";
import wishlistGetGql from "./wishlist.graphql";

export default {
  head() {
    return {
      title: this.$t("pages.store.wishlist.textTitle")
    };
  },
  breadcrumbs() {
    return [
      {
        title: this.$t("pages.store.wishlist.breadcrumbTitle"),
        to: this.$route.path
      }
    ];
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
      store.commit(
        "store/wishlist/setWishlist",
        store.getters["apollo/get"].wishlist
      );
    }
  }
};
</script>
