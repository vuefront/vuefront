<template>
  <section>
    <vf-m-product-thumb
      :product="product"
      :wide="wide"
      :suffix-url="suffixUrl"
      @click:cart="handleClickCart"
      @click:wishlist="handleClickWishlist"
      @click:compare="handleClickCompare"
    />
  </section>
</template>
<script>
export default {
  props: ["product", "wide", "suffixUrl"],
  methods: {
    handleClickCart() {
      this.$store.dispatch("store/cart/add", {
        product: this.product,
        redirect: true,
      });
    },
    handleClickWishlist() {
      this.$store.dispatch("store/wishlist/add", {
        product: this.product,
      });
    },
    handleClickCompare() {
      this.$store.dispatch("store/compare/add", {
        product: this.product,
      });
    },
  },
};
</script>
