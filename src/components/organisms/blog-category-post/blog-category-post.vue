<template>
  <div class="vf-o-blog-category-posts">
    <vf-o-post-grid
      v-if="posts.content.length > 0"
      :posts="posts.content"
      :grid-size="gridSize"
      class="mb-4"
    />
    <vf-empty
      v-if="posts.content.length === 0"
      class="text-sm-center"
    >{{$t('templates.blog.category.emptyText')}}</vf-empty>
    <vf-pagination :page="posts.number" :totalPages="posts.totalPages" @input="handleChangePage" />
  </div>
</template>
<script>
export default {
  props: ["posts", "gridSize"],
  methods: {
    async handleChangePage(page) {
      let { id } = this.$vuefront.params;
      this.$router.push({
        path: this.$route.path,
        query: { page }
      });
    }
  }
};
</script>
