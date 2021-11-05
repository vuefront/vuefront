<template>
  <section class="vf-o-cart-products">
    <vf-m-cart-product
      class="vf-o-cart-products__item mb-5"
      v-for="(value, index) in cart.products"
      :key="index"
      :cart-product="value"
      @change-quantity="handleChangeQuantity(value.key, $event)"
      @remove="handleRemove(value.key)"
    />
  </section>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
defineProps({
  cart: {
    type: Object,
    default() {
      return null;
    },
  },
});

const store = useStore();

const handleChangeQuantity = (key: string, e: string) => {
  store.dispatch("store/cart/update", {
    key,
    quantity: Number(e),
  });
};
const handleRemove = (key: string) => {
  store.dispatch("store/cart/remove", {
    key,
  });
};
</script>
