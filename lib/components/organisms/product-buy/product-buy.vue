<template>
  <vf-a-button
    variant="primary"
    @click="handleAddToCart"
    class="h-16 rounded-none px-6"
  >
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
  quantity: {
    type: Number,
    default() {
      return 1;
    },
  },
});
const store = useStore();

const options = computed(() => store.getters["store/product/options"]);

const handleAddToCart = async () => {
  await store.dispatch("store/cart/add", {
    product: props.product,
    quantity: props.quantity,
    options: options.value,
  });
};
</script>
