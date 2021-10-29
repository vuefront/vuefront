<template>
  <div class="vf-m-compare-actions">
    <vf-a-button
      class="vf-m-compare-actions__add-to-cart mr-2"
      @click="handleAddToCart"
      size="sm"
    >
      {{ $t("organisms.compareActions.buttonAddToCart") }}
    </vf-a-button>
    <vf-a-button
      class="vf-m-compare-actions__remove"
      color="danger"
      @click="handleRemove"
      size="sm"
    >
      {{ $t("organisms.compareActions.buttonDelete") }}
    </vf-a-button>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from "vuex";
const props = defineProps({
  product: {
    type: Object,
    default() {
      return null;
    },
  },
});
const store = useStore();
const handleRemove = () => {
  store.dispatch("store/compare/remove", {
    id: props.product.id,
  });
};
const handleAddToCart = () => {
  store.dispatch("store/cart/add", {
    product: props.product,
    quantity: 1,
    options: [],
  });
};
</script>
