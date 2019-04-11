<template>
  <vf-cart :cart="cart"/>
</template>
<script>
import { mapGetters } from "vuex";
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
  }
};
</script>
