<template>
  <vf-a-image
    :lazy-src="mainImagelazy"
    :src="mainImage"
    :alt="product.title"
    :title="product.title"
    :width-amp="width ? width : $vuefront.images.productThumb.width"
    :height-amp="height ? height : $vuefront.images.productThumb.height"
    :width="width ? width : null"
    :class="{ 'card-img': card }"
    :fluid="!width && !height"
    class="vf-m-product-thumb-image"
    cover
  />
</template>
<script setup lang="ts">
import { inject, PropType, computed } from "vue";
const vuefront$ = inject<any>("$vuefront");
const props = defineProps({
  card: {
    type: Boolean,
    default() {
      return false;
    },
  },
  product: {
    type: Object,
    default() {
      return null;
    },
  },
  width: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  height: {
    type: [String, Number] as PropType<string | number>,
    default() {
      return null;
    },
  },
  layout: {
    type: String,
    default() {
      return null;
    },
  },
});

const mainImage = computed(() =>
  props.product.image !== ""
    ? props.product.image
    : vuefront$.images.placeholder.image
);

const mainImagelazy = computed(() =>
  props.product.imageLazy !== ""
    ? props.product.imageLazy
    : vuefront$.images.placeholder.image
);
</script>
