<template>
  <section class="blog-category">
    <vf-o-category-info :category="category" />
    <vf-o-category-grid :items="category.categories" v-if="category.categories.length > 0" />
    <vf-o-blog-category-post :posts="posts" :grid-size="gridSize" class="mt-5" />
  </section>
</template>
<script>
export default {
  props: ["category", "posts", "gridSize"]
};
</script>
 