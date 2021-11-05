<template>
  <div class="vf-m-cart-footer">
    <div class="vf-m-cart-footer__total">
      {{ $t("elements.store.cart.totalText") }}
      <span>{{ cart.total }}</span>
    </div>
    <div class="vf-m-cart-footer__actions">
      <vf-a-button
        class="vf-m-cart-footer__return"
        color="success"
        to="/"
        size="sm"
        >{{ $t("elements.store.cart.returnButton") }}</vf-a-button
      >
      <vf-a-button
        :disabled="!isProducts"
        color="primary"
        size="sm"
        :to="$route.path === '/store/cart' ? '/store/checkout' : '/store/cart'"
      >
        {{
          $route.path === "/store/cart"
            ? $t("elements.store.cart.checkoutButton")
            : $t("elements.store.cart.cartButton")
        }}
      </vf-a-button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from "vue";
const props = defineProps({
  cart: {
    type: Object,
    default() {
      return null;
    },
  },
});
const isProducts = computed(() => {
  return props.cart.products.length > 0;
});
</script>
