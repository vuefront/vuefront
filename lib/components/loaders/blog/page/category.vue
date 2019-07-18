<template>
  <section class="blog-category-loader">
    <vf-loader-category-blog class="mb-5" />
    <vf-loader-posts-grid class="mb-4" :grid-size="grid" />
  </section>
</template>
<script>
export default {
  props: ["gridSize"],
  computed: {
    grid() {
      return this.gridSize;
    }
  }
};
</script>
