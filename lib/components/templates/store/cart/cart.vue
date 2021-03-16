<template>
  <section class="shopping-cart">
    <vf-o-cart-products class="shopping-cart__products" :cart="cart" />
    <vf-o-cart-footer :cart="cart" />
  </section>
</template>
<script>
export default {
  props: ["cart"],
};
</script>
