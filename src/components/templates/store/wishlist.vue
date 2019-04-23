<template>
  <vf-wishlist :wishlist="wishlist"/>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Wish List"
    };
  },
  computed: {
    ...mapGetters({
      wishlist: "store/wishlist/get"
    })
  },
  async fetch({store}) {
    await store.dispatch('store/wishlist/load')
  }
};
</script>
