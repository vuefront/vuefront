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
<script>
export default {
  props: ["manufacturer", "products", "mode", "sort", "gridSize"],
};
</script>
