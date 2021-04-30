<template>
  <vf-a-link class="vf-m-cart-link" to="/store/cart">
    <vf-a-icon :icon="mdiCartOutline" :size="18" />
    <span class="vf-m-cart-link__title">{{
      $t("elements.common.header.nav.shoppingCartText")
    }}</span>
  </vf-a-link>
</template>
<script>
import { mdiCartOutline } from "@mdi/js";
export default {
  data() {
    return { mdiCartOutline };
  },
};
</script>