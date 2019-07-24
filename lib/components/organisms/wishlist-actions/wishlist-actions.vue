<template>
  <div class="vf-o-wishlist-actions">
    <div class="wishlist__action m-1 d-inline" @click="handleAddToCart">
      <vf-a-icon :icon="['fas', 'shopping-cart']" />
    </div>
    <div class="wishlist__action m-1 ml-2 d-inline" @click="handleRemove">
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
      this.$store.dispatch("store/wishlist/remove", {
        id: this.product.id
      });
    },
    handleAddToCart() {
      this.$store.dispatch("store/cart/add", {
        product: this.product,
        quantity: 1,
        options: []
      });
    }
  }
};
</script>
