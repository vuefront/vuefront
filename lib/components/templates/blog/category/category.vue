<template>
  <section class="blog-category">
    <vf-o-category-info :category="category" class="mb-10" />
    <vf-o-category-grid
      v-if="category.categories.length > 0"
      :items="category.categories"
      class="mb-16"
    />
    <vf-o-blog-category-post
      :posts="posts"
      :grid-size="gridSize"
      class="mt-5"
    />
  </section>
</template>
<script lang="ts" setup>
defineProps({
  category: {
    type: Object,
    default: () => null,
  },
  posts: {
    type: Object,
    default: () => null,
  },
  gridSize: {
    type: Number,
    default: () => 4,
  },
});
</script>
