<template>
  <section class="vf-l-t-blog-category">
    <vf-l-o-category-info />
    <vf-l-o-category-grid />
    <vf-l-o-post-grid class="mb-4" :grid-size="gridSize" />
  </section>
</template>
<script>
export default {
  props: ["gridSize"],
};
</script>
