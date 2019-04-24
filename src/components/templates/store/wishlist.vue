<template>
  <vf-wishlist :wishlist="wishlist"/>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: this.$t('templates.store.wishlist.textTitle')
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
