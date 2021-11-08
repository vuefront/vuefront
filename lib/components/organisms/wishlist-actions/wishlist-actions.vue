<template>
  <div class="vf-o-wishlist-actions">
    <vf-a-button
      class="vf-o-wishlist-actions__add-to-cart mr-2"
      @click="handleAddToCart"
      size="sm"
    >
      {{ $t("organisms.wishlistActions.buttonAddToCart") }}
    </vf-a-button>
    <vf-a-button
      class="vf-o-wishlist-actions__remove"
      color="danger"
      size="sm"
      @click="handleRemove"
    >
      {{ $t("organisms.wishlistActions.buttonDelete") }}
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
  store.dispatch("store/wishlist/remove", {
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
