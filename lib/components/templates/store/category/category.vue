<template>
  <section class="store-category-section">
    <vf-o-category-info :category="category" class="mb-10" />
    <vf-o-category-grid
      v-if="category.categories.length > 0"
      :items="category.categories"
      class="mb-16"
    />
    <vf-o-category-product
      :products="products"
      :mode="mode"
      :sort="sort"
      :grid-size="gridSize"
      :grid-size-tablet="gridSizeTablet"
    />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  category: {
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
  gridSizeTablet: {
    type: Number,
    default: () => 2,
  },
});
</script>
