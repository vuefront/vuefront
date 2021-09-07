<template>
  <section class="shopping-cart">
    <vf-o-cart-products class="shopping-cart__products" :cart="cart" />
    <vf-o-cart-footer :cart="cart" />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  cart: {
    type: Object,
    default: () => null,
  },
});
</script>
