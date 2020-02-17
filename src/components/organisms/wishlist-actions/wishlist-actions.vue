<template>
  <div class="vf-o-wishlist-actions">
    <vf-a-button class="vf-o-wishlist-actions__add-to-cart" @click="handleAddToCart">
      <vf-a-icon :icon="['fas', 'shopping-cart']" />
    </vf-a-button>
    <vf-a-button class="vf-o-wishlist-actions__remove" color="danger" @click="handleRemove">
      <vf-a-icon icon="trash" />
    </vf-a-button>
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
