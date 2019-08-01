<template>
  <section class="blog-category-loader">
    <vf-l-category-info/>
    <vf-l-category-grid/>
    <vf-l-post-grid class="mb-4" :grid-size="gridSize"/>
  </section>
</template>
<script>
export default {
  props: ['gridSize']
}
</script>
