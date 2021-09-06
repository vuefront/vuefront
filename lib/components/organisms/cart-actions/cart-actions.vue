<template>
  <div class="shopping-cart__action cursor-pointer ma-1" @click="handleRemove">
    <vf-a-icon :icon="mdiClose" />
  </div>
</template>
<script lang="ts" setup>
import { mdiClose } from "@mdi/js";
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
const handleRemove = () => {
  store.dispatch("store/cart/remove", {
    key: props.cartProduct.key,
  });
};
</script>
