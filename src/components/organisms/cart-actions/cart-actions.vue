<template>
  <div class="shopping-cart__action cursor-pointer ma-1" @click="handleRemove">
    <vf-a-icon icon="close" />
  </div>
</template>
<script>
export default {
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

