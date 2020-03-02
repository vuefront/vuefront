<template>
  <div class="shopping-cart__action cursor-pointer ma-1" @click="handleRemove">
    <vf-a-icon icon="times" />
  </div>
</template>
<script>
export default {
  name: 'vf-o-cart-actions',
  props: ["cartProduct"],
  methods: {
    handleRemove() {
      this.$store.dispatch("store/cart/remove", {
        key: this.cartProduct.key
      });
    }
  }
};
</script>

