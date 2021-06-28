<template>
  <section class="store-category-section">
    <vf-o-category-info :category="category" />
    <vf-o-category-grid
      v-if="category.categories.length > 0"
      :items="category.categories"
    />
    <vf-o-category-product
      :products="products"
      :mode="mode"
      :sort="sort"
      :grid-size="gridSize"
      :grid-size-tablet="gridSizeTablet"
      class="mt-5"
    />
  </section>
</template>
<script>
export default {
  props: ["category", "products", "mode", "sort", "gridSize", "gridSizeTablet"],
};
</script>
