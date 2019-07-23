<template>
  <vf-t-cart :cart="cart" />
</template>
<script>
import { mapGetters } from "vuex";
import cartGetGql from "./cart.graphql";
export default {
  head() {
    return {
      title: "Shopping Cart"
    };
  },
  computed: {
    ...mapGetters({
      cart: "store/cart/get"
    })
  },
  async fetch(ctx) {
    await ctx.store.dispatch("apollo/query", {
      query: cartGetGql
    });

    if (!ctx.store.getters["vuefront/error"]) {
      ctx.store.commit("store/cart/setCart", ctx.store.getters["apollo/get"].cart);
    }
  }
};
</script>