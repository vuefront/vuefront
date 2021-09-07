<template>
  <vf-a-button variant="primary" @click="handleAddToCart">
    <vf-a-icon :icon="mdiCartOutline" />
    {{ $t("elements.store.product.buttonAddToCart") }}
  </vf-a-button>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
import { mdiCartOutline } from "@mdi/js";
import { computed } from "vue";
const props = defineProps({
  product: {
    type: Object,
    default() {
      return null;
    },
  },
});
const store = useStore();

const options = computed(() => store.getters["store/product/options"]);

const handleAddToCart = async () => {
  await store.dispatch("store/cart/add", {
    product: props.product,
    quantity: 1,
    options: options,
  });
};
</script>
