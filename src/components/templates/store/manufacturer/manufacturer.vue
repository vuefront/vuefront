<template>
  <section class="store-manufacturer-section">
    <vf-o-manufacturer-info :manufacturer="manufacturer" />
    <vf-o-manufacturer-product
      :products="products"
      :mode="mode"
      :sort="sort"
      :grid-size="gridSize"
      class="mt-5"
    />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  manufacturer: {
    type: Object,
    default: () => null,
  },
  products: {
    type: Object,
    default: () => null,
  },
  mode: {
    type: String,
    default: () => "grid",
  },
  sort: {
    type: String,
    default: () => "id|ASC",
  },
  gridSize: {
    type: Number,
    default: () => 4,
  },
});
</script>
