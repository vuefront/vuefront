<template>
  <vf-a-input
    :value="cartProduct.quantity"
    style="width: 80px"
    @change="handleChangeQuantity"
  />
</template>
<script lang="ts" setup>
import { useStore } from "vuex";

const props = defineProps({
  cartProduct: {
    type: Object,
    default() {
      return null;
    },
  },
});

const store = useStore();

const handleChangeQuantity = (e: string) => {
  store.dispatch("store/cart/update", {
    key: props.cartProduct.key,
    quantity: Number(e),
  });
};
</script>
