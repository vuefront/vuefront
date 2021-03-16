<template>
  <vf-m-card class="mt-5">
    <vf-m-row align-v="center" align-h="between" cols="2">
      <vf-m-col md="6" order-md="2" class="mb-4 md:mb-0">
        <div class="flex items-center md:justify-end">
          <vf-a-heading level="6" class="text-muted inline-block mr-3 mb-0">{{
            $t("elements.store.cart.totalText")
          }}</vf-a-heading>
          <vf-a-heading level="4" tag="span" class="mb-0">{{
            cart.total
          }}</vf-a-heading>
        </div>
      </vf-m-col>
      <vf-m-col md="6" order-md="1">
        <vf-a-button
          :disabled="!isProducts"
          color="primary"
          class="mr-md-2"
          to="/store/checkout"
          animated-y
          nuxt
        >
          <template #visible>{{
            $t("elements.store.cart.checkoutButton")
          }}</template>
          <template #hidden>
            <vf-a-icon :icon="mdiCartOutline" :size="18"></vf-a-icon>
          </template>
        </vf-a-button>
        <vf-a-button
          color="link"
          nuxt
          to="/"
          class="text-sm text-dark font-bold"
          >{{ $t("elements.store.cart.returnButton") }}</vf-a-button
        >
      </vf-m-col>
    </vf-m-row>
  </vf-m-card>
</template>
<script>
import { mdiCartOutline } from "@mdi/js";
export default {
  props: ["cart"],
  data() {
    return {
      mdiCartOutline,
    };
  },
  computed: {
    isProducts() {
      return this.cart.products.length > 0;
    },
  },
};
</script>
