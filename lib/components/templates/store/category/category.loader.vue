<template>
  <section class="vf-l-t-store-category">
    <vf-l-o-category-info class="mb-10" />
    <vf-l-o-category-grid class="mb-16" />
    <vf-l-o-category-product
      :grid-size="gridSize"
      :grid-size-tablet="gridSizeTablet"
    />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  gridSize: {
    type: Number,
    default: () => 4,
  },
  gridSizeTablet: {
    type: Number,
    default: () => 3,
  },
});
</script>
