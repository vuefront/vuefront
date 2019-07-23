<template>
  <section class="store-category-section">
    <vf-o-category-info :category="category" />
    <vf-o-category-grid :items="category.categories" v-if="category.categories.length > 0" />
    <vf-o-category-product :products="products" :mode="mode" :sort="sort" :grid-size="gridSize" class="mt-5" />
  </section>
</template>
<script>
export default {
  props: ["category", "products", "mode", "sort", "gridSize"]
};
</script>
