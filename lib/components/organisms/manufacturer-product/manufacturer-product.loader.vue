<template>
  <section class="vf-l-o-manufacturer-product">
    <vf-l-o-product-sort class="mb-4" />
    <vf-l-o-product-grid
      :grid-size="gridSize"
      :grid-size-tablet="gridSizeTablet"
    />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  gridSize: {
    type: Number,
    default() {
      return 4;
    },
  },
  gridSizeTablet: {
    type: Number,
    default() {
      return 2;
    },
  },
});
</script>
