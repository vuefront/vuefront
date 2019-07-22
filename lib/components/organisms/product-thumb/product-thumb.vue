<template>
  <section>
    <vf-m-product-thumb
      :product="product"
      :wide="wide"
      @click:cart="handleClickCart"
      @click:wishlist="handleClickWishlist"
      @click:compare="handleClickCompare"
    />
  </section>
</template>
<script>
import placeholder from "vuefront/assets/img/placeholder.png";
export default {
  props: ["product", "wide"],
  methods: {
    handleClickCart(product) {
      this.$store.dispatch("store/cart/add", {
        product,
        redirect: true
      });
    },
    handleClickWishlist(product) {
      this.$store.dispatch("store/wishlist/add", {
        product
      });
    },
    handleClickCompare(product) {
      this.$store.dispatch("store/compare/add", {
        product
      });
    }
  }
};
</script>