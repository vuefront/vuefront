<template>
  <div class="vf-o-blog-category-posts">
    <vf-o-post-grid
      v-if="posts.content.length > 0"
      :posts="posts.content"
      :grid-size="gridSize"
      class="mb-4"
    />
    <vf-m-empty v-if="posts.content.length === 0">{{
      $t("templates.blog.category.emptyText")
    }}</vf-m-empty>
    <vf-a-pagination
      :page="posts.number"
      :total-pages="posts.totalPages"
      @input="handleChangePage"
    />
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

defineProps({
  posts: {
    type: Object,
    default() {
      return null;
    },
  },
  gridSize: {
    type: Number,
    default() {
      return 4;
    },
  },
});

const router = useRouter();
const route = useRoute();

const handleChangePage = (page: number) => {
  router.push({
    path: route.path,
    query: { page },
  });
};
</script>
