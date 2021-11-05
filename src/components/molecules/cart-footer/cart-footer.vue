<template>
  <div class="mt-5 flex flex-row">
    <vf-a-button class="md:mr-4 flex-1" color="success" to="/" size="sm">{{
      $t("elements.store.cart.returnButton")
    }}</vf-a-button>
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
