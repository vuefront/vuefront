<template>
  <section class="store-category-loader">
    <vf-loader-category class="mb-5" />
    <vf-loader-sort class="mb-4" />
    <vf-loader-products-grid :list="isList" :grid-size="grid" class="mb-4" />
  </section>
</template>
<script>
export default {
  props: ["gridSize"],
  computed: {
    isList() {
      return this.mode === "list";
    },
    grid() {
      return this.gridSize;
    }
  }
};
</script>
