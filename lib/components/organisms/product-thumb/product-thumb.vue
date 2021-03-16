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
export default {
  props: ["product", "wide"],
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
