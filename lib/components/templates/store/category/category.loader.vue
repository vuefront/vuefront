<template>
  <section class="vf-l-t-store-category">
    <vf-l-o-category-info />
    <vf-l-o-category-grid />
    <vf-l-o-category-product
      :grid-size="gridSize"
      :grid-size-tablet="gridSizeTablet"
      class="mt-5"
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
