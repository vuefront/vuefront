<template>
  <vf-a-input :value="cartProduct.quantity" style="width: 80px;" @change="handleChangeQuantity" />
</template>
<script>
export default {
  props: ["cartProduct"],
  methods: {
    handleChangeQuantity(e) {
      this.$store.dispatch("store/cart/update", {
        key: this.cartProduct.key,
        quantity: Number(e)
      });
    }
  }
};
</script>
