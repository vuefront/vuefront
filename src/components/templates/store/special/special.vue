<template>
  <section class="store-special-page">
    <vf-a-heading level="1" class="sm:text-center mb-5">{{
      $t("templates.store.special.textTitle")
    }}</vf-a-heading>
    <vf-o-category-product
      :products="products"
      :sort="sort"
      :mode="mode"
      :grid-size="gridSize"
      class="mt-5"
    />
  </section>
</template>
<script>
export default {
  props: ["products", "mode", "sort", "gridSize"],
};
</script>
