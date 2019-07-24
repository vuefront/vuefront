<template>
  <div class="vf-m-compare-actions">
    <div class="compare__action cursor-pointer m-1 d-inline" @click="handleAddToCart">
      <vf-a-icon :icon="['fas', 'shopping-cart']" />
    </div>
    <div class="compare__action cursor-pointer m-1 ml-2 d-inline" @click="handleRemove">
      <vf-a-icon icon="times" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    product: {
      type: Object,
      default() {
        return null;
      }
    }
  },
  methods: {
    handleRemove() {
      this.$store.dispatch("store/compare/remove", {
        id: this.product.id
      });
    },
    handleAddToCart(compareProduct) {
      this.$store.dispatch("store/cart/add", {
        product: this.product,
        quantity: 1,
        options: []
      });
    }
  }
};
</script>
