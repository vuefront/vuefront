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
<script lang="ts" setup>
defineProps({
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
