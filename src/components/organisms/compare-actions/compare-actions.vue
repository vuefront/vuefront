<template>
  <div class="vf-m-compare-actions">
    <vf-a-button class="vf-m-compare-actions__add-to-cart" @click="handleAddToCart">
      <vf-a-icon icon="cart-outline" />
    </vf-a-button>
    <vf-a-button class="vf-m-compare-actions__remove" color="danger" @click="handleRemove">
      <vf-a-icon icon="delete-outline" />
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
