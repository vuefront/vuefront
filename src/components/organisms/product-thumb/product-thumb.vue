<template>
  <section>
    <vf-m-product-thumb
      :product="product"
      :wide="wide"
      :suffix-url="suffixUrl"
      @click:cart="handleClickCart"
      @click:wishlist="handleClickWishlist"
      @click:compare="handleClickCompare"
    />
  </section>
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
  wide: {
    type: Boolean,
    default() {
      return false;
    },
  },
  suffixUrl: {
    type: String,
    default() {
      return "";
    },
  },
});
const store = useStore();
const handleClickCart = () => {
  store.dispatch("store/cart/add", {
    product: props.product,
    redirect: true,
  });
};
const handleClickWishlist = () => {
  store.dispatch("store/wishlist/add", {
    product: props.product,
  });
};
const handleClickCompare = () => {
  store.dispatch("store/compare/add", {
    product: props.product,
  });
};
</script>
